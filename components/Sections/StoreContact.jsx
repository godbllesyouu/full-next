import Image from "next/image";

export default function StoreContact() {
    return (
        <div>
            <section className="w-full h-[600px]  bg-[rgba(228,229,231,1)] flex justify-center items-center">
                <div className="flex justify-center gap-[86px]">
                    <Image
                        src={"/Images/loc.png"}
                        width={670}
                        height={374}
                        alt="loc"
                    />
                    <div className="flex flex-col justify-center gap-[24px]">
                        <p className="w-[313px] text-[20px] font-Semibold">Бесплатно проконсультируем по любому вопросу связанному с вашим любимцем</p>
                        <div className="flex items-center gap-[12px]">
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
                        <div className="flex flex-col gap-[2px]">
                            <h3 className="font-bold flex items-start ">Время работы</h3>

                            <p className="flex gap-[6px] items-center text-[14px] font-bold">
                                <Image src={"/Images/clock.png"}
                                    width={16}
                                    height={16}
                                    alt="Clock"
                                />
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
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <p className="font-bold">Пишите нам в социальных сетях</p>
                            <Image src={"/Images/instagram.png"}
                                width={16}
                                height={16}
                                alt="Instagram"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}