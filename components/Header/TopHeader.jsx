import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
    return (
        <div>
            <header className="bg-blue-400 h-[55px] flex justify-center items-center gap-[41px] w-full">
                <div className="flex items-center gap-[40px] ">
                    <Image src={"/Images/Logo.png"}
                        width={184}
                        height={24}
                        alt="Logo"
                    />
                    <input className="bg-white border-0 rounded-[5px] pl-[12px] text-[15px] font-bold w-[520px] h-[36px]" type="text" placeholder="Поиск..." />
                </div>
                <nav>
                    <ul className="flex items-center gap-[32px] text-[14px] text-white font-bold ">
                        <Link href="/Главная" className="hover:border-b border-white ">Главная</Link>
                        <Link href="/Каталог" className="hover:border-b border-white">Каталог</Link>
                        <Link href="/Акции" className="hover:border-b border-white">Акции</Link>
                        <Link href="/Статьи" className="hover:border-b border-white">Статьи</Link>
                    </ul>
                </nav>
                <button className="flex items-center bg-white  w-[60px] h-[36px] rounded-[4px] justify-center gap-1 cursor-pointer ">
                    <Image
                        src={"/Images/cart.png"}
                        width={18}
                        height={20}
                        alt="Cart"
                    />
                    <span className="text-[15px]">0</span>
                </button>
            </header>
        </div>
    )
}