"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";

export default function RightBanner() {
  return (
    <Carousel plugins={[AutoPlay({ delay: 5000, stopOnInteraction: false })]} opts={{ loop: true }}>
      <CarouselContent>
        {[
          "https://market.bluesis.com/board/data/file/pro_dinfo/thumb-3542295930_ALx27EIp_354ab2d85f2e5f3884bc7791fc4b13d4b5497854_382x291.jpg",
          "https://market.bluesis.com/web/img/green_banner.jpg",
        ].map((src, idx) => (
          <CarouselItem key={idx} className="h-80 w-full">
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