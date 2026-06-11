'use client'

import { Stagger, StaggerItem, FadeIn, HoverLift } from '@/components/ui/animate'
import { Container } from '@/components/layouts/container'
import { Section } from '@/components/layouts/section'
import { Zap, Activity, MapPin, SlidersHorizontal } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Smart Acceleration',
    description: 'Intelligent power boost when you push with the land paddle stick. The motor kicks in synchronized with your paddle strokes for maximum efficiency.',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: Activity,
    title: 'Real-time Stats',
    description: 'Monitor speed, battery life, and ride metrics in real-time. Stay informed with a beautiful dashboard right on your phone.',
    gradient: 'from-cyan-500/20 to-cyan-500/5',
  },
  {
    icon: MapPin,
    title: 'Ride Tracking',
    description: 'Track your routes, distance covered, and riding patterns. Review your rides and optimize your paddling technique.',
    gradient: 'from-violet-500/20 to-violet-500/5',
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom Settings',
    description: 'Personalize your riding experience with customizable power modes. Fine-tune the electric assist to match your style.',
    gradient: 'from-amber-500/20 to-amber-500/5',
  },
]

export function FeaturesSection() {
  return (
    <Section id="features" className="relative">
      <Container size="lg">
        <FadeIn className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Smart <span className="text-primary">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Everything you need for the ultimate electric land paddle boarding experience.
          </p>
        </FadeIn>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features?.map?.((feature: any, i: number) => {
            const IconComp = feature?.icon
            return (
              <StaggerItem key={feature?.title ?? i}>
                <HoverLift>
                  <div className="relative group h-full rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 shadow-md hover:shadow-xl">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature?.gradient ?? ''} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        {IconComp && <IconComp className="w-6 h-6 text-primary" />}
                      </div>
                      <h3 className="font-display text-lg font-bold mb-2">{feature?.title ?? ''}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature?.description ?? ''}</p>
                    </div>
                  </div>
                </HoverLift>
              </StaggerItem>
            )
          }) ?? []}
        </Stagger>
      </Container>
    </Section>
  )
}
