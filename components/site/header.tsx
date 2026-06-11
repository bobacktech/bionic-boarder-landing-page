'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'About', href: '#about' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any[]) => {
        entries?.forEach?.((entry: any) => {
          if (entry?.isIntersecting) {
            setActiveSection(entry?.target?.id ?? '')
          }
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections?.forEach?.((section: any) => observer?.observe?.(section))
    return () => observer?.disconnect?.()
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-2 group"
            >
              <Zap className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
                BIONIC <span className="text-primary">BOARDER</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems?.map?.((item: any) => {
                const isActive = activeSection === item?.href?.replace?.('#', '')
                return (
                  <button
                    key={item?.href ?? ''}
                    onClick={() => handleNavClick(item?.href ?? '')}
                    className={cn(
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    )}
                  >
                    {item?.label ?? ''}
                  </button>
                )
              }) ?? []}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems?.map?.((item: any) => {
                const isActive = activeSection === item?.href?.replace?.('#', '')
                return (
                  <button
                    key={item?.href ?? ''}
                    onClick={() => handleNavClick(item?.href ?? '')}
                    className={cn(
                      'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    )}
                  >
                    {item?.label ?? ''}
                  </button>
                )
              }) ?? []}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
