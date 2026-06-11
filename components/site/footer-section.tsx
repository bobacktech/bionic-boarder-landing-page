'use client';

import { Zap, Linkedin } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Download CTA */}
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Ready to <span className="text-primary">Ride?</span>
          </h2>
          <p className="text-muted-foreground mb-6">
            Bionic Boarder Android App is currently in development.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            Coming Soon
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-sm">BIONIC BOARDER</span>
          </div>
          <p className="text-xs text-muted-foreground">
            
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/BionicBoarder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
              aria-label="X (formerly Twitter)">
              
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a
              href="https://linkedin.com/in/bobbyjaffer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
              aria-label="LinkedIn">
              
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>);

}