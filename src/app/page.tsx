"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { LocationCard } from "@/components/location-card";
import { LOCATIONS } from "@/lib/constants/locations";
import { Instagram, ArrowRight, Map as MapIcon, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-zinc-50 py-20">
          <div className="container relative z-10 px-4">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 flex items-center gap-2 rounded-full bg-black/[0.03] px-4 py-1.5 text-sm font-semibold tracking-wide text-zinc-600 ring-1 ring-black/5"
              >
                <MapIcon className="h-4 w-4" />
                <span>EAST GODAVARI CULTURAL GUIDE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-5xl text-5xl font-black tracking-tight text-black md:text-7xl lg:text-8xl"
              >
                Famous Sankranthi <br />
                <span className="text-zinc-400">Dance Places</span>
              </motion.h1>

              {/* Map Animation Video Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative mt-16 aspect-video w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-zinc-100 shadow-2xl ring-1 ring-black/5"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-24-at-8.03.03-PM-1766596163087.jpeg?width=8000&height=8000&resize=contain"
                  alt="Aay Memu Godarollamandi Culture"
                  fill
                  className="object-cover"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 text-left">
                  <p className="text-sm font-bold tracking-widest text-white/60 uppercase">Traditional Heritage</p>
                  <h3 className="text-2xl font-bold text-white">East Godavari District</h3>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 flex flex-wrap justify-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-full bg-black px-8 text-lg font-bold transition-all hover:scale-105"
                >
                  <a href="#places">Explore All 17 Places</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-full border-zinc-200 px-8 text-lg font-bold transition-all hover:bg-zinc-50 hover:scale-105"
                >
                  <a href="https://instagram.com/aay_memu_godarollamandi" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow @aay_memu_godarollamandi
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Instagram Branding Section */}
        <section className="bg-white py-32">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[4rem] bg-zinc-50 p-12 md:p-24 text-center shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)]"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="group relative mb-10 h-40 w-40 overflow-hidden rounded-full p-1 ring-4 ring-white shadow-2xl transition-transform hover:scale-105">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-24-at-8.03.03-PM-1766596163087.jpeg?width=8000&height=8000&resize=contain"
                    alt="Aay Memu Godarollamandi Profile"
                    width={160}
                    height={160}
                    className="h-full w-full rounded-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                    <Instagram className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">
                  Follow us on Instagram
                </h2>
                <p className="mt-4 text-2xl font-bold text-zinc-400">
                  @aay_memu_godarollamandi
                </p>
                <p className="mt-6 max-w-xl text-lg text-zinc-600">
                  Join our community of 100k+ followers celebrating the pride of Godavari culture, 
                  festivals, and traditions every day.
                </p>
                
                <Button
                  asChild
                  className="mt-12 h-16 rounded-full bg-black px-12 text-xl font-black transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <a
                    href="https://instagram.com/aay_memu_godarollamandi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Instagram <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>
              </div>
              
              {/* Abstract background elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-zinc-100 opacity-50 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-zinc-200 opacity-50 blur-3xl" />
            </motion.div>
          </div>
        </section>

        {/* Places Section */}
        <section id="places" className="bg-zinc-50 py-32">
          <div className="container px-4 mx-auto">
            <div className="mb-20 text-center">
              <span className="text-sm font-black tracking-widest text-zinc-400 uppercase">Discover</span>
              <h2 className="mt-4 text-5xl font-black tracking-tight text-black md:text-6xl">
                The Festive Map
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600">
                Explore all 17 iconic locations where Sankranthi dance traditions come to life in East Godavari.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {LOCATIONS.map((location) => (
                <LocationCard
                  key={location.id}
                  name={location.name}
                  description={location.description}
                  image={location.image}
                  mapUrl={location.mapUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-32">
          <div className="container px-4 mx-auto">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] bg-black p-12 md:p-20 text-center text-white">
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">Our Mission</h2>
              <p className="mt-8 text-xl leading-relaxed text-zinc-400 md:text-2xl">
                &ldquo;Aay Memu Godarollamandi&rdquo; is not just a brand; it&apos;s an emotion. 
                We are dedicated to preserving the vibrant soul of East Godavari, 
                showcasing the rhythmic beauty of our traditional dances and the 
                pure festive joy of Sankranthi to the world.
              </p>
              <div className="mt-12 flex justify-center gap-8 border-t border-white/10 pt-12">
                <div className="text-center">
                  <p className="text-3xl font-black">17+</p>
                  <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Locations</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black">100%</p>
                  <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Authentic</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black">Godavari</p>
                  <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase">Pride</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 bg-white py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-2xl font-black tracking-tighter">Aay Memu Godarollamandi</p>
              <p className="mt-2 text-zinc-500">Celebrating the culture of East Godavari.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-bold hover:text-zinc-600">Home</a>
              <a href="#places" className="text-sm font-bold hover:text-zinc-600">Places</a>
              <a href="#about" className="text-sm font-bold hover:text-zinc-600">About</a>
              <a href="https://instagram.com/aay_memu_godarollamandi" className="text-sm font-bold hover:text-zinc-600">Instagram</a>
            </div>
          </div>
          <div className="mt-20 border-t border-zinc-100 pt-10 text-center">
            <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
              © {new Date().getFullYear()} AAY MEMU GODAROLLAMANDI. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
