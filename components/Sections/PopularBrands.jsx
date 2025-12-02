import Image from "next/image";

export default function PopularBrands() {
    return (
        <div>
            <section className="w-full h-[650px] bg-[rgba(228,229,231,1)] flex justify-center flex-col items-center">
                <div className="w-[1170px] h-[520px] flex flex-col justify-center items-left gap-[24px]">
                    <div>
                        <p className="text-[28px] font-bold">Популярные бренды</p>
                    </div>
                    <div className="flex justify-center gap-[25px]">
                        <div className="w-[174px] h-[115px] bg-white cursor-pointer flex justify-center items-center rounded-[4px]">
                            <Image
                                src={"/Images/belcand.png"}
                                width={134}
                                height={87}
                                alt="belcand"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/brit.png"}
                                width={134}
                                height={87}
                                alt="brit"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white cursor-pointer flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/ekuanuba.png"}
                                width={134}
                                height={87}
                                alt="ekuanuba"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white cursor-pointer flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/foresto.png"}
                                width={134}
                                height={87}
                                alt="foresto"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white cursor-pointer flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/hills.png"}
                                width={134}
                                height={87}
                                alt="hills"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white cursor-pointer flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/proplan.png"}
                                width={134}
                                height={87}
                                alt="proplan"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-[25px]">
                        <div className="w-[174px] h-[115px] bg-white cursor-pointer flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/berkley.png"}
                                width={134}
                                height={87}
                                alt="berkley"
                            />  
                        </div>
                        <div className="w-[174px] h-[115px] bg-white cursor-pointer flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/purina.png"}
                                width={134}
                                height={87}
                                alt="purina"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/ever.png"}
                                width={134}
                                height={87}
                                alt="ever"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/step.png"}
                                width={134}
                                height={87}
                                alt="step"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/monge.png"}
                                width={134}
                                height={87}
                                alt="monge"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/canin.png"}
                                width={134}
                                height={87}
                                alt="canin"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-[25px]">
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/bosch.png"}
                                width={134}
                                height={87}
                                alt="bosch"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/dog.png"}
                                width={134}
                                height={87}
                                alt="dog"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/flexi.png"}
                                width={134}
                                height={87}
                                alt="flexi"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/grandorf.png"}
                                width={134}
                                height={87}
                                alt="grandorf"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/proPac.png"}
                                width={134}
                                height={87}
                                alt="proPac"
                            />
                        </div>
                        <div className="w-[174px] h-[115px] bg-white flex justify-center items-center rounded-[4px] cursor-pointer">
                            <Image
                                src={"/Images/Laga.png"}
                                width={134}
                                height={87}
                                alt="Laga"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="mt-[24px] flex px-[12px] text-white text-[14px] font-arial  rounded-[4px]  w-[234px] h-[44px] bg-[rgba(0,160,172,1)] flex justify-center items-center" >Смотреть больше брендов</button>
                </div>
            </section>
        </div>
    )
}