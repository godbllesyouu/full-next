import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex ">
            <footer className="w-full h-[152px] bg-white   flex flex-col  items-center justify-centern gap-[16px]">
                <div className="flex justify-around items-center h-[80px] border-b-2 border-b-[rgba(210,213,216,1)] gap-[642px]">
                    <div>
                        <Image src={"/Images/footer.png"}
                            width={178}
                            height={24}
                            alt="footer"
                        />
                    </div>
                    <nav>
                        <ul className="flex items-center gap-[48px] text-[14px]">
                            <li><Link href={"/Главная"} className="hover:border-b border-black">Главная</Link></li>
                            <li><Link href={"/Каталог"} className="hover:border-b border-black">Каталог</Link></li>
                            <li><Link href={"/Акции"} className="hover:border-b border-black">Акции</Link></li>
                            <li><Link href={"/Статьи"} className="hover:border-b border-black">Статьи</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-[86px]">
                    <div className="flex gap-[12px]">
                    <div className="flex items-center gap-[8px]">
                        <Image src={"/Images/location.png"}
                            width={16}
                            height={16}
                            alt="Location"
                        />
                        <p className="text-[14px] font-bold">Минск, ул. Чюрлёниса, 6.</p>
                    </div>

                    <div className="flex items-center gap-[6px]  ">
                        <Image src={"/Images/Frame.png"}
                            width={18}
                            height={12}
                            alt="Frame"
                        />
                        <p className="text-[14px] font-bold">Малиновка</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <Image src={"/Images/mobile.png"}
                            width={16}
                            height={16}
                            alt="Phone"
                        />
                        <p className="font-bold text-[14px]">+ 375 (44) 501 03 55</p>

                    </div>
                    <div className="flex items-center gap-[2px]">
                        <Image src={"/Images/clock.png"}
                            width={16}
                            height={16}
                            alt="Clock"
                        />
                        <p className="flex gap-[6px] text-[14px] font-bold">
                            <span>Пон.-Пят. 10:00-21:00</span>
                            <span>|</span>
                            <span>Суб.-Вос. 10:00-20:00</span>
                        </p>
                    </div>
                    <div>
                        <p className="text-[14px] text-[blue] font-bold">Обратный звонок</p>
                    </div>
                </div>
                <div className="flex gap-[708px] items-center">
                    <p className="text-[14px]">
                        <span className="text-[rgba(140,145,150,1)]">Дизайн сайта:</span>
                        <span className="text-[rgba(44,110,203,1)]">shkuratovdesigner.com</span>
                    </p>
                    <p className="text-[rgba(140,145,150,1)]">© Все права защищены 2022</p>
                </div>
            </footer>
        </div>
    )
}