"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";

export default function MainBanner() {
  return (
    <Carousel plugins={[AutoPlay({ delay: 5000, stopOnInteraction: false })]} opts={{ loop: true }} className="hidden md:block">
      <CarouselContent>
        {[
          "https://market.bluesis.com/web/img/cj_banner13.jpg",
          "https://market.bluesis.com/web/img/sj_banner7.jpg",
          "https://market.bluesis.com/web/img/fs_banner02.jpg",
        ].map((src, idx) => (
          <CarouselItem key={idx} className="h-40 w-full">
            <div className="relative w-full h-full">
              <Image src={src} alt={`banner-${idx}`} fill className="rounded-lg" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
            <CarouselNext /> */}
    </Carousel>
  )
}