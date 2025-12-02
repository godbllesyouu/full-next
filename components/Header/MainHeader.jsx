import Image from "next/image";
export default function MainHeader() {
    return (
        <div className="flex justify-center h-[44px] items-center gap-[63px]">
            <div className="flex items-center gap-[12px]">
                <div className="flex items-center gap-[8px]">
                    <Image src={"/Images/location.png"}
                        width={16}
                        height={16}
                        alt="Location"
                    />
                    <p className="text-[14px] font-bold">Минск, ул. Чюрлёниса, 6.</p>
                </div>
                    <Image src={"/Images/Frame.png"}
                        width={18}
                        height={12}
                        alt="Frame"
                    />
                    <p className="text-[14px] font-bold">Малиновка</p>
                </div>   <div className="flex items-center gap-[6px]  ">
             
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
            <div className="flex items-center gap-[8px]">
                <Image src={"/Images/mobile.png"}
                width={16}
                height={16}
                alt="Phone"
                />
                <p className="font-bold text-[14px]">+ 375 (44) 501 03 55</p>
                <Image src={"/Images/instagram.png"}
                width={16}
                height={16}
                alt="Instagram"
                />
            </div>
            <div>
                <p className="text-[14px] text-[blue] font-bold">Обратный звонок</p>
            </div>
        </div>
    )
}