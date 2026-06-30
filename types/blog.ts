export interface BlogPost {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly category: string;
  readonly coverImage: string | null;
  readonly excerpt: string;
  readonly keywords: string;
  readonly publishedAt: string;
  readonly content?: readonly BlogBlock[];
}

export interface BlogBlock {
  readonly id: string;
  readonly type: string;
  readonly content: string;
  readonly children?: readonly BlogBlock[];
  readonly url?: string;
  readonly language?: string;
  readonly caption?: string;
}
