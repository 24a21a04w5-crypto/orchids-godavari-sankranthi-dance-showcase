"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { LocationCard } from "@/components/location-card";
import { LOCATIONS } from "@/lib/constants/locations";
import { Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-black selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Gemini_Generated_Image_u1h0bgu1h0bgu1h0-1766595910540.png?width=1920&height=1080&resize=contain"
              alt="Cultural Festival Background"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
                Famous Sankranthi Dance Places
                <span className="block text-zinc-400">— East Godavari</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl">
                Experience the rich cultural heritage and festive pride of Godavari through traditional dance celebrations.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-black hover:bg-zinc-200"
                >
                  <a href="#places">Explore Places</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  <a href="https://instagram.com/aay_memu_godarollamandi" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Follow Us
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Instagram Branding Section */}
        <section className="bg-white py-24">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[3rem] bg-zinc-50 p-8 md:p-16 text-center shadow-sm"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Instagram className="h-64 w-64" />
              </div>
              
                <div className="relative z-10">
                <div className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full ring-4 ring-white shadow-xl">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Gemini_Generated_Image_4b7lon4b7lon4b7l-1766595910514.png?width=256&height=256&resize=contain"
                      alt="Instagram Profile"
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                <h2 className="text-3xl font-bold tracking-tight text-black md:text-4xl">
                  Follow us on Instagram
                </h2>
                <p className="mt-2 text-xl font-medium text-zinc-500">
                  @aay_memu_godarollamandi
                </p>
                <Button
                  asChild
                  className="mt-8 rounded-full bg-black px-8 py-6 text-lg transition-transform hover:scale-105"
                >
                  <a
                    href="https://instagram.com/aay_memu_godarollamandi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Page <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Places Section */}
        <section id="places" className="bg-zinc-50 py-24">
          <div className="container px-4 mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
                Explore the Festivities
              </h2>
              <p className="mt-4 text-lg text-zinc-600">
                A curated list of the most iconic locations for Sankranthi celebrations.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        <section id="about" className="bg-white py-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Aay Memu Godarollamandi is dedicated to preserving and showcasing the vibrant 
                cultural essence of East Godavari. Our mission is to highlight the festive 
                traditions of Sankranthi, bringing people together through dance, music, 
                and shared heritage.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-12">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm font-medium text-zinc-500">
            © {new Date().getFullYear()} Aay Memu Godarollamandi. Proudly showcasing Godavari culture.
          </p>
        </div>
      </footer>
    </div>
  );
}
