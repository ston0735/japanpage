import { notion } from "@/lib/notion/client";
import type { BlogPost, BlogBlock } from "@/types/blog";
import type {
  PageObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const BLOG_DB_ID = process.env.NOTION_BLOG_DB_ID ?? "";

function isNotionConfigured(): boolean {
  return !!(process.env.NOTION_TOKEN && BLOG_DB_ID);
}

function extractRichText(property: unknown): string {
  const prop = property as { rich_text?: ReadonlyArray<{ plain_text: string }> };
  return prop.rich_text?.map((t) => t.plain_text).join("") ?? "";
}

function extractTitle(property: unknown): string {
  const prop = property as { title?: ReadonlyArray<{ plain_text: string }> };
  return prop.title?.map((t) => t.plain_text).join("") ?? "";
}

function mapPageToPost(page: PageObjectResponse): BlogPost {
  const props = page.properties;

  const coverImageProp = props.CoverImage as { url?: string | null } | undefined;
  const pageCover = page.cover as
    | { type: "external"; external: { url: string } }
    | { type: "file"; file: { url: string } }
    | null;

  const coverImage =
    coverImageProp?.url ??
    (pageCover?.type === "external"
      ? pageCover.external.url
      : pageCover?.type === "file"
        ? pageCover.file.url
        : null);

  const categoryProp = props.Category as { select?: { name: string } | null } | undefined;
  const dateProp = props.PublishedAt as { date?: { start: string } | null } | undefined;

  return {
    id: page.id,
    title: extractTitle(props.Title),
    slug: extractRichText(props.Slug),
    category: categoryProp?.select?.name ?? "",
    coverImage: coverImage ?? null,
    excerpt: extractRichText(props.Excerpt),
    keywords: extractRichText(props.Keywords),
    publishedAt: dateProp?.date?.start ?? "",
  };
}

function mapBlock(block: BlockObjectResponse): BlogBlock | null {
  const base = { id: block.id };

  switch (block.type) {
    case "paragraph":
      return {
        ...base,
        type: "paragraph",
        content: block.paragraph.rich_text.map((t) => t.plain_text).join(""),
      };
    case "heading_1":
    case "heading_2":
    case "heading_3": {
      const data = (block as unknown as Record<string, { rich_text: ReadonlyArray<{ plain_text: string }> }>)[
        block.type
      ];
      return {
        ...base,
        type: block.type,
        content: data.rich_text.map((t) => t.plain_text).join(""),
      };
    }
    case "bulleted_list_item":
      return {
        ...base,
        type: "bulleted_list_item",
        content: block.bulleted_list_item.rich_text.map((t) => t.plain_text).join(""),
      };
    case "numbered_list_item":
      return {
        ...base,
        type: "numbered_list_item",
        content: block.numbered_list_item.rich_text.map((t) => t.plain_text).join(""),
      };
    case "image": {
      const imageSource =
        block.image.type === "file" ? block.image.file.url : block.image.external.url;
      const caption = block.image.caption.map((t) => t.plain_text).join("");
      return {
        ...base,
        type: "image",
        content: "",
        url: imageSource,
        caption: caption || undefined,
      };
    }
    case "code":
      return {
        ...base,
        type: "code",
        content: block.code.rich_text.map((t) => t.plain_text).join(""),
        language: block.code.language,
      };
    case "quote":
      return {
        ...base,
        type: "quote",
        content: block.quote.rich_text.map((t) => t.plain_text).join(""),
      };
    case "divider":
      return { ...base, type: "divider", content: "" };
    default:
      return null;
  }
}

export async function getBlogPosts(category?: string): Promise<readonly BlogPost[]> {
  if (!isNotionConfigured()) return [];
  try {
    const statusFilter = {
      property: "Status",
      status: { equals: "Published" as const },
    };

    const filter =
      category && category !== "all"
        ? {
            and: [
              statusFilter,
              { property: "Category", select: { equals: category } },
            ],
          }
        : statusFilter;

    const response = await notion.dataSources.query({
      data_source_id: BLOG_DB_ID,
      filter,
      sorts: [{ property: "PublishedAt", direction: "descending" }],
    });

    return response.results
      .filter((page): page is PageObjectResponse => "properties" in page)
      .map(mapPageToPost);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!isNotionConfigured()) return null;
  try {
    const response = await notion.dataSources.query({
      data_source_id: BLOG_DB_ID,
      filter: {
        and: [
          { property: "Slug", rich_text: { equals: slug } },
          { property: "Status", status: { equals: "Published" } },
        ],
      },
    });

    const page = response.results.find(
      (p): p is PageObjectResponse => "properties" in p,
    );
    if (!page) return null;

    const post = mapPageToPost(page);

    const blocksResponse = await notion.blocks.children.list({
      block_id: page.id,
    });

    const content = blocksResponse.results
      .filter((block): block is BlockObjectResponse => "type" in block)
      .map(mapBlock)
      .filter((b): b is BlogBlock => b !== null);

    return { ...post, content };
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}

export async function getBlogCategories(): Promise<readonly string[]> {
  if (!isNotionConfigured()) return [];
  try {
    const response = await notion.dataSources.query({
      data_source_id: BLOG_DB_ID,
      filter: { property: "Status", status: { equals: "Published" } },
    });

    const categories = new Set<string>();
    for (const page of response.results) {
      if (!("properties" in page)) continue;
      const categoryProp = page.properties.Category as
        | { select?: { name: string } | null }
        | undefined;
      const name = categoryProp?.select?.name;
      if (name) categories.add(name);
    }

    return Array.from(categories);
  } catch (error) {
    console.error("Failed to fetch blog categories:", error);
    return [];
  }
}
