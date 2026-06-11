'use client';

import { FadeIn, SlideIn } from '@/components/ui/animate';
import { Container } from '@/components/layouts/container';
import { Section } from '@/components/layouts/section';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const repos = [
{
  name: 'Bionic Boarder Simulation Tool',
  description: '',
  url: 'https://github.com/bobacktech/bionic-boarder-simulation-tool',
  comingSoon: false
},
{
  name: 'Bionic Boarder VESC BLDC',
  description: '',
  url: 'https://github.com/bobacktech/bionic-boarder-vesc-bldc',
  comingSoon: false
}];


export function OpenSourceSection() {
  return (
    <Section id="open-source" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      <Container size="lg" className="relative">
        <FadeIn className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Open Source
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Open Source <span className="text-primary">Software</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            The Bionic Boarder custom tools are all open source on GitHub.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto space-y-4">
          {repos?.map?.((repo: any, i: number) =>
          <SlideIn key={repo?.name ?? i} from="bottom" delay={i * 0.1}>
              <a
              href={repo?.url ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer">
              
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-bold group-hover:text-primary transition-colors">
                    {repo?.name ?? ''}
                  </h3>
                  {repo?.description ? <p className="text-sm text-muted-foreground mt-0.5">{repo.description}</p> : null}
                </div>
                {repo?.comingSoon ?
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0">Coming Soon</span> :

              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              }
              </a>
            </SlideIn>
          ) ?? []}
        </div>

        {/* Code decoration */}
        <FadeIn delay={0.3} className="flex justify-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/30">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground"></span>
          </div>
        </FadeIn>
      </Container>
    </Section>);

}