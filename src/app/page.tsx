import { Menu, Search } from "lucide-react";

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
      <main></main>
      <footer></footer>
    </div>
  )
}