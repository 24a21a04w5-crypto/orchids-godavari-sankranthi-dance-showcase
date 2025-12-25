"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { LocationCard } from "@/components/location-card";
import { LOCATIONS } from "@/lib/constants/locations";
import { Instagram, ArrowRight, Map as MapIcon, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  const profileImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-24-at-8.03.03-PM-1766596163087.jpeg?width=8000&height=8000&resize=contain";

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
                <Instagram className="h-4 w-4" />
                <span>@aay_memu_godarollamandi</span>
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

              {/* Instagram Profile Featured Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative mt-16 aspect-square w-full max-w-xl overflow-hidden rounded-[3rem] bg-zinc-100 shadow-2xl ring-1 ring-black/5 md:aspect-video md:max-w-5xl"
              >
                <Image
                  src={profileImage}
                  alt="Aay Memu Godarollamandi Culture"
                  fill
                  className="object-cover"
                  priority
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 text-left">
                  <p className="text-sm font-bold tracking-widest text-white/60 uppercase">Our Identity</p>
                  <h3 className="text-2xl font-bold text-white">Aay Memu Godarollamandi</h3>
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
                    Follow on Instagram
                  </a>
                </Button>
              </motion.div>
            </div>
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

      <footer className="border-t border-zinc-100 bg-white pt-32 pb-20">
        <div className="container px-4 mx-auto">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-red-500 mb-6">
                <Heart className="h-5 w-5 fill-current" />
                <span className="font-bold tracking-widest uppercase text-sm">Made with Love</span>
              </div>
              <h2 className="text-3xl font-black tracking-tight text-black mb-8">
                Preserving Godavari Culture
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 max-w-2xl">
                <p>
                  This website is made with love for Godavari culture and Sankranthi traditions.
                  Idhi money kosam kaadu, publicity kosam kaadu.
                </p>
                <p>
                  Mana villages, mana dance, mana Konaseema identity ni gurthu pettukovadaniki matrame.
                </p>
                <p className="pt-4 font-medium italic">
                  If any details need correction or you want to share memories, message cheyyandi freely.
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-sm font-black tracking-widest text-zinc-400 uppercase mb-8">Get in Touch</h3>
              <a 
                href="mailto:24A21A04W5@gmail.com" 
                className="group flex items-center gap-4 rounded-3xl bg-zinc-50 p-6 transition-all hover:bg-black hover:text-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm group-hover:bg-zinc-800">
                  <Mail className="h-6 w-6 text-black group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-400 group-hover:text-zinc-500">Email Suggestions</p>
                  <p className="font-bold">24A21A04W5@gmail.com</p>
                </div>
              </a>
              
              <div className="mt-12 flex gap-6">
                <a href="https://instagram.com/aay_memu_godarollamandi" className="text-zinc-400 transition-colors hover:text-black">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-32 border-t border-zinc-100 pt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
              © {new Date().getFullYear()} AAY MEMU GODAROLLAMANDI. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-xs font-black tracking-widest uppercase hover:text-zinc-500">Home</a>
              <a href="#places" className="text-xs font-black tracking-widest uppercase hover:text-zinc-500">Places</a>
              <a href="#about" className="text-xs font-black tracking-widest uppercase hover:text-zinc-500">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
