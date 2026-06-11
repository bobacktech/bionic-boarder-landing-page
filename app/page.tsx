import { Header } from '@/components/site/header'
import { HeroSection } from '@/components/site/hero-section'
import { VideoSection } from '@/components/site/video-section'
import { FeaturesSection } from '@/components/site/features-section'
import { OpenSourceSection } from '@/components/site/open-source-section'
import { AboutSection } from '@/components/site/about-section'
import { FooterSection } from '@/components/site/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <OpenSourceSection />
      <AboutSection />
      <FooterSection />
    </main>
  )
}
