'use client';

import { FadeIn, SlideIn } from '@/components/ui/animate';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { Play, Zap, Gauge, TrendingUp } from 'lucide-react';

const highlights = [
{
  icon: Zap,
  title: 'Detect Paddle Strokes',
  description: 'Detect and respond to your paddle strokes in real time'
},
{
  icon: Gauge,
  title: 'Synchronized Power',
  description: 'Deliver a power boost synchronized with your paddling'
},
{
  icon: TrendingUp,
  title: 'Greater Acceleration',
  description: 'Achieve greater acceleration with the same physical effort'
}];


export function VideoSection() {
  return (
    <Section id="how-it-works" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background pointer-events-none" />
      <Container size="lg" className="relative">
        {/* Section Header */}
        <FadeIn className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Demonstration of traditional <span className="text-primary">Land Paddling</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            
          </p>
        </FadeIn>

        {/* Video */}
        <FadeIn delay={0.2} className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden border border-border/50 shadow-2xl bg-card">
            <div className="relative aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/M3H39gZGbNc?start=13"
                title="Land Paddling Demonstration"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full" />
              
            </div>
          </div>
        </FadeIn>

        {/* Description Card */}
        <div className="max-w-4xl mx-auto">
          <SlideIn from="bottom" delay={0.1}>
            <div className="rounded-xl bg-card border border-border/50 p-6 sm:p-8 shadow-lg">
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-4">
                Revolutionizing the <span className="text-primary">Land Paddling Experience</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Traditional land paddling requires that the rider be able to generate significant acceleration from the paddle to make the activity enjoyable. This is generally not possible from a typical rider. And that is why land paddling is thrilling only when going down hill, as seen in the above video.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                
              </p>
              <p className="text-primary font-medium italic mb-6">
                This is where Bionic Boarder app transforms the ride. The app seamlessly integrates with your electric land paddle board to:
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {highlights?.map?.((item: any, i: number) => {
                  const IconComp = item?.icon;
                  return (
                    <div
                      key={item?.title ?? i}
                      className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 border border-border/30">
                      
                      {IconComp && <IconComp className="w-5 h-5 text-primary mt-0.5 shrink-0" />}
                      <div>
                        <p className="font-semibold text-sm mb-1">{item?.title ?? ''}</p>
                        <p className="text-xs text-muted-foreground">{item?.description ?? ''}</p>
                      </div>
                    </div>);

                }) ?? []}
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6">
                The result? A thrilling and intuitive ride that redefines the experience of traditional land paddling.
              </p>
            </div>
          </SlideIn>
        </div>
      </Container>
    </Section>);

}