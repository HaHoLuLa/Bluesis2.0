"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto selection:bg-primary selection:text-primary-foreground">
      <header>
        <div className="grid mt-10 gap-2 grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
          <h1 className="text-3xl font-bold md:text-start text-center">BLUESIS MARKET</h1>
          <section className="">
            <div className="flex rounded-full border-2 border-primary justify-between py-2 px-5">
              <input type="text" className="focus:outline-none w-full text-sm" placeholder="어떤 상품을 찾으시나요?" />
              <button><Search className="text-primary" /></button>
            </div>
            <nav className="mt-2 hidden md:block">
              <ul className="flex gap-2 text-xs justify-between mx-5">
                <li>상품조회</li>
                <li>농산물</li>
                <li>납품서</li>
                <li>관심상품</li>
                <li>오늘의 식판</li>
                <li>시장조사</li>
                <li>원격지원</li>
              </ul>
            </nav>
          </section>
          <section className="flex justify-end">
            {/* <ModeToggle /> */}
          </section>
        </div>
        <div className="mt-5 border-y border-gray-200">
          <section className="py-3">
            <nav>
              <ul className="flex gap-2 md:gap-10 justify-between md:justify-start font-bold text-xs md:text-sm items-center">
                <li className="flex gap-2 items-center"><Menu className="text-primary" />카테고리</li>
                <li>상품정보</li>
                <li>식단정보</li>
                <li>공급정보</li>
                <li>커뮤니티</li>
                <li>ERP지원</li>
                <li>데이터 인사이트</li>
              </ul>
            </nav>
          </section>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 mt-5">
          <Carousel plugins={[AutoPlay({ delay: 3000 })]} opts={{ loop: true }}>
            <CarouselContent>
              {[
                "https://market.bluesis.com/web/img/cj_banner13.jpg",
                "https://market.bluesis.com/web/img/sj_banner7.jpg",
                "https://market.bluesis.com/web/img/fs_banner02.jpg",
              ].map((src, idx) => (
                <CarouselItem key={idx} className="h-40 w-full">
                  <div className="relative w-full h-full">
                    <Image src={src} alt={`banner-${idx}`} fill className="object-cover rounded-md" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
          <div className="p-3 h-40 border-2 border-primary rounded-lg">로그인</div>
          <div className="p-3 h-40 md:h-auto border-2 border-primary rounded-lg row-span-2">레시피</div>
          <div className="p-3 h-40 border-2 border-primary rounded-lg">공지사항</div>
          <div className="p-3 h-80 border-2 border-primary rounded-lg">배너2</div>
          <div className="p-3 h-50 border-2 border-primary rounded-lg">상품동영상</div>
          <div className="p-3 h-50 border-2 border-primary rounded-lg">e카탈로그</div>
          <div className="p-3 h-50 border-2 border-primary rounded-lg">상품상세설명</div>
          <div className="p-3 h-50 border-2 border-primary rounded-lg">오늘의식판</div>
          <div className="p-3 h-50 border-2 border-primary rounded-lg md:col-span-2">이벤트상품</div>
          <div className="p-3 h-50 border-2 border-primary rounded-lg md:col-span-2">인기상품</div>
          <div className="p-3 h-50 border-2 border-primary rounded-lg md:col-span-2">시장조사배너</div>
          <div className="p-3 h-50 border-2 border-primary rounded-lg md:col-span-2">기타</div>
        </div>
      </main>
      <footer>
        <div className="my-10 border-t border-gray-200">
          <nav className="mt-5">
            <ul className="flex gap-2 md:gap-10 justify-between md:justify-start font-bold text-xs md:text-sm items-center">
              <li>이용약관</li>
              <li>개인정보처리방침</li>
              <li>고객센터</li>
            </ul>
          </nav>
          <div className="text-xs text-gray-500 mt-5 text-center">
            <p>© 2023 Bluesis Market. All rights reserved.</p>
            <p>대표이사: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123, 456호</p>
            <p>고객센터: 02-1234-5678 | 이메일: </p>
          </div>
        </div>
      </footer>
    </div>
  )
}