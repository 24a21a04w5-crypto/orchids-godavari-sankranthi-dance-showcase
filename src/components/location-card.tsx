"use client";

import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface LocationCardProps {
  name: string;
  description: string;
  image: string;
  mapUrl: string;
  objectPosition?: string;
}

export function LocationCard({ name, description, image, mapUrl, objectPosition }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white rounded-2xl">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            style={{ objectPosition: objectPosition || "center" }}
          />
        </div>
        <CardHeader className="p-4 pb-2">
          <div className="flex items-center gap-2 text-zinc-500 mb-1">
            <MapPin className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wider">East Godavari</span>
          </div>
          <CardTitle className="text-xl font-bold">{name}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardDescription className="text-sm leading-relaxed text-zinc-600">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            asChild
            variant="outline"
            className="w-full rounded-xl border-zinc-200 hover:bg-black hover:text-white transition-colors gap-2"
          >
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
