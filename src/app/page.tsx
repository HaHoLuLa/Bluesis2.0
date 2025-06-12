import { Menu, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import MainBanner from "@/app/components/MainBanner";
import RightBanner from "@/app/components/RightBanner";

export default function Home() {
  return (
    <div className="w-11/12 sm:w-4/5 xl:w-2/3 mx-auto selection:bg-primary selection:text-primary-foreground">
      <header>
        <div className="grid mt-10 gap-2 grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
          <h1 className="text-4xl md:text-3xl font-bold md:text-start text-center mb-5 md:mb-0">BLUESIS MARKET</h1>
          <section className="">
            <div className="flex rounded-full border-2 border-primary justify-between py-2 px-5">
              <input type="text" className="focus:outline-none w-full text-sm" placeholder="어떤 상품을 찾으시나요?" />
              <button><Search className="text-primary" /></button>
            </div>
            <nav className="mt-2">
              <ul className="flex gap-2 text-xs justify-between mx-5">
                <li>상품조회</li>
                <li>농산물</li>
                <li>납품서</li>
                <li>관심상품</li>
                <li>오늘의 식판</li>
                <li>시장조사</li>
                <li className="hidden md:block">원격지원</li>
              </ul>
            </nav>
          </section>
          <section className="md:flex justify-end hidden">
            {/* <User /> */}
            
          </section>
        </div>
        <div className="mt-5 border-y border-gray-200 hidden md:block">
          <section className="py-3">
            <nav>
              <ul className="flex gap-2 md:gap-10 justify-between md:justify-start font-bold text-xs md:text-sm items-center">
                <li><Menu className="text-primary" /></li>
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
          <MainBanner />
          <Card className="p-3 h-40">로그인</Card>
          <Card className="p-3 h-40 md:h-auto row-span-2">레시피</Card>
          <Card className="p-3 h-40">공지사항</Card>
          <RightBanner />
          <Card className="p-3 h-50">상품동영상</Card>
          <Card className="p-3 h-50">e카탈로그</Card>
          <Card className="p-3 h-50">상품상세설명</Card>
          <Card className="p-3 h-50">오늘의식판</Card>
          <Card className="p-3 h-50 md:col-span-2">이벤트상품</Card>
          <Card className="p-3 h-50 md:col-span-2">인기상품</Card>
          <Card className="p-3 h-50 md:col-span-2">시장조사배너</Card>
          <Card className="p-3 h-50 md:col-span-2">기타</Card>
        </div>
      </main>
      <footer>
        <div className="my-10 border-t border-gray-200">
          <nav className="mt-5">
            <ul className="flex gap-2 md:gap-10 justify-around md:justify-start font-bold text-xs md:text-sm items-center">
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