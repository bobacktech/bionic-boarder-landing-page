'use client';

import { FadeIn, SlideIn } from '@/components/ui/animate';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { User } from 'lucide-react';

export function AboutSection() {
  return (
    <Section id="about" className="relative">
      <Container size="lg">
        <FadeIn className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            About the <span className="text-primary">Founder</span>
          </h2>
        </FadeIn>

        <SlideIn from="bottom" delay={0.1}>
          <div className="max-w-3xl mx-auto rounded-xl bg-card border border-border/50 shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Bobby Jaffer</h3>
                  <p className="text-sm text-muted-foreground">Software Engineer & Founder</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bobby Jaffer is a seasoned software engineer with extensive experience in developing software for real-time embedded systems, data analysis, and web applications. Driven by a passion for land paddling, he understands the challenges of generating sufficient momentum with a stick paddle to create a truly exhilarating and enjoyable experience.
                </p>
              </div>


            </div>
          </div>
        </SlideIn>
      </Container>
    </Section>);

}