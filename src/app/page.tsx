import { ModeToggle } from "@/components/mode-toggle";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="w-11/12 md:w-2/3 mx-auto selection:bg-primary selection:text-primary-foreground">
      <header className="grid mt-5 gap-2 grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
        {/* <h1 className="text-3xl"><strong className="text-orange-400">AI</strong> <strong className="text-blue-400">BLUE</strong><strong className="text-lime-400">SIS MARKET</strong></h1> */}
        <h1 className="text-3xl font-bold md:text-start text-center">BLUESIS MARKET</h1>
        <section className="">
          <div className="flex rounded-full border-2 border-primary justify-between py-2 px-3">
            <input type="text" className="focus:outline-none w-full text-sm" placeholder="어떤 상품을 찾으시나요?" />
            <button><Search className="text-primary"/></button>
          </div>
          <nav className="mt-2">
            <ul className="flex gap-2 text-xs justify-between mx-5">
              <li>상품조회</li>
              <li>NEW 농산물</li>
              <li>납품서</li>
              <li>관심상품</li>
              <li>오늘의 식판</li>
              <li>시장조사</li>
              <li>원격지원</li>
            </ul>
          </nav>
        </section>
        <section className="flex justify-end">
          <ModeToggle />
        </section>
      </header>
      <main></main>
      <footer></footer>
    </div>
  )
}