import { HeroSection } from "@/components/home/HeroSection";
import { VideoPreview } from "@/components/home/VideoPreview";
import { BrandStats } from "@/components/home/BrandStats";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ConcernsBlock } from "@/components/home/ConcernsBlock";
import { AudienceBlock } from "@/components/home/AudienceBlock";
import { CourseSection } from "@/components/home/CourseSection";
import { BrandStory } from "@/components/home/BrandStory";
import { QualityProcess } from "@/components/home/QualityProcess";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { CustomerVoices } from "@/components/home/CustomerVoices";
import { BlogPreview } from "@/components/home/BlogPreview";
import { AdvisorCTA } from "@/components/home/AdvisorCTA";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VideoPreview />
      <BrandStats />
      <TrustBadges />
      <ConcernsBlock />
      <AudienceBlock />
      <CourseSection />
      <BrandStory />
      <QualityProcess />
      <BrandMarquee />
      <CustomerVoices />
      <BlogPreview />
      <AdvisorCTA />
      <FinalCTA />
    </>
  );
}
