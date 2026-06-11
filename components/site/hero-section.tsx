'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const handleScroll = () => {
    const el = document.querySelector('#how-it-works')
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/5c998994-b41d-4066-9150-a924e904b636.png"
          alt="Multiple people land paddling on longboards along a scenic road at golden hour"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Revolutionize{' '}
            <span className="text-primary">Your Ride</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg"
          >
            Experience the future of land paddle boarding with the Bionic Boarder App. Design a land paddle-style longboard with an electric drivetrain system controlled by a VESC speed controller integrated with an IMU. Connect the app wirelessly to the VESC and feel the thrill of physically enhanced land paddle boarding.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={handleScroll}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              See How It Works
              <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="#features"
              onClick={(e: any) => { e?.preventDefault?.(); document.querySelector('#features')?.scrollIntoView?.({ behavior: 'smooth' }) }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold text-base hover:bg-secondary/80 transition-all duration-200 border border-border/50"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={handleScroll}
          className="p-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/30 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  )
}