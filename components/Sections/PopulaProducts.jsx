"use client"

import Image from "next/image";
import { useState } from "react";

export default function PopulaProducts() {
    const [activeButton,setActiveButton] = useState(null)
    const [activeButtonn,setActiveButtonn] = useState(null)

    return (
        <div>
            <section className="w-full h-[600px]  bg-[rgba(228,229,231,1)] flex flex-col justify-center ">
                <div className="flex gap-[800px] h-[40px] justify-center items-center">
                    <div className="flex">
                        <span className="text-[26px] font-bold">Популярные товары</span>
                    </div>
                    <div className="flex items-center gap-[16px]">
                        <button className="w-[40px] h-[40px] rounded-[50px] bg-white flex justify-center items-center cursor-pointer duration-[0.3s] items-center hover:bg-[rgba(0,160,172,1)]">
                            <Image
                                src={"/Images/cevron.png"}
                                width={20}
                                height={20}
                                alt="Left"
                            />
                        </button>
                        <button className="w-[40px] h-[40px] rounded-[50px] bg-white flex justify-center transition duration-[0.3s] cursor-pointer items-center hover:bg-[rgba(0,160,172,1)]">
                            <Image
                                src={"/Images/chevron-right.png"}
                                width={20}
                                height={20}
                                alt="Left"
                            />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center mt-[24px] gap-[30px] ">
                    <div className="w-[270px] h-[400px] bg-white px-[8px] py-[8px] flex flex-col gap-[31px] rounded-[5px]">
                        <div className="flex flex-col gap-[16px]">
                            <Image
                                src={"/Images/Frame12.png"}
                                width={254}
                                height={130}
                                alt="Ker"
                            />
                            <p className="text-[16px] font-bold w-[254px] transition duration-[0.3s] cursor-pointer  hover:text-[rgba(0,160,172,1)]">Консервы ROYAL CANIN STERILISED для взрослых кастрированных котов..</p>
                        </div>
                        <button className="bg-[rgba(68,157,167,1)] rounded-[2px] w-[48px] h-[24px] text-white font-bold">
                            85 г.
                        </button>
                        <div className="flex flex-col gap-[12px]  ">
                            <div className="flex gap-[16px] ">
                                <p className="text-[16px] font-bold">12 BYN</p>
                                <button className="flex border w-[54px] h-[30px] rounded-[4px] justify-center gap-[5px]  border-[rgba(187,191,195,1)] items-center " >
                                    <span>+</span>
                                    <Image
                                        src={"/Images/cart.png"}
                                        width={20}
                                        height={20}
                                        alt="Cart"
                                    />
                                </button>
                            </div>
                            <button className="w-[255px] h-[36px] rounded-[4px] font-bold text-black rounded-[4px] transition duration-[0.3s] cursor-pointer font-bold border border-[rgba(0,160,172,1)] hover:bg-[rgba(0,160,172,1)] hover:text-white"><p>Купить в 1 клик</p></button>
                        </div>
                    </div>
                    <div className="w-[270px] h-[400px] bg-white px-[8px] py-[8px] flex flex-col gap-[31px] rounded-[5px]">
                        <div className="flex flex-col gap-[16px]">
                            <Image
                                src={"/Images/image22.png"}
                                width={254}
                                height={130}
                                alt="Ker"
                            />
                            <p className="text-[16px] font-bold w-[254px] transition duration-[0.3s] cursor-pointer  hover:text-[rgba(0,160,172,1)]">FRESH STEP CAT LITTER CLAY EXTREME – Фреш Степ наполнитель..</p>
                        </div>
                        <div className="flex gap-[4px]">
                            <button onClick={()=> setActiveButtonn(1)}
                                    className={`text-black px-[8px] font-bold ${activeButtonn === 1 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                6 л.
                            </button>
                            <button onClick={()=> setActiveButtonn(2)}
                                    className={`text-black px-[8px] font-bold ${activeButtonn === 2 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                12 л.
                            </button>
                            <button onClick={()=> setActiveButtonn(3)}
                                    className={`text-black px-[8px] font-bold ${activeButtonn === 3 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                18 л.
                            </button>
                            <button onClick={()=> setActiveButtonn(11)}
                                    className={`text-black px-[8px] font-bold ${activeButtonn === 11 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                30 л.
                            </button>
                        </div>
                        <div className="flex flex-col gap-[12px]  ">
                            <div className="flex gap-[16px] items-center">
                                <p className="text-[16px] font-bold">95 BYN</p>
                                <button className="flex border w-[54px] h-[30px] rounded-[4px] justify-center gap-[5px]  border-[rgba(187,191,195,1)] items-center " >
                                    <span>+</span>
                                    <Image
                                        src={"/Images/cart.png"}
                                        width={20}
                                        height={20}
                                        alt="Cart"
                                    />
                                </button>
                            </div>
                            <button className="w-[255px] h-[36px] rounded-[4px]font-bold text-black rounded-[4px] cursor-pointer  transition duration-[0.3s] font-bold border border-[rgba(0,160,172,1)] hover:bg-[rgba(0,160,172,1)] hover:text-white"><p>Купить в 1 клик</p></button>
                        </div>
                    </div>
                    <div className="w-[270px] h-[400px] bg-white px-[8px] py-[8px] flex flex-col gap-[31px] rounded-[5px]">
                        <div className="flex flex-col gap-[16px]">
                            <Image
                                src={"/Images/britva.png"}
                                width={254}
                                height={130}
                                alt="britva"
                            />
                            <p className="text-[16px] font-bold w-[254px] transition duration-[0.3s] cursor-pointer  hover:text-[rgba(0,160,172,1)]">FURMINATOR SHORT HAIR LARGE CAT M/L Фурминатор для короткошерстных кошек..</p>
                        </div>
                        <button className="bg-[rgba(68,157,167,1)] w-[48px] h-[24px] text-white font-bold">
                            1 шт.
                        </button>
                        <div className="flex flex-col gap-[12px]  ">
                            <div className="flex gap-[16px] ">
                                <p className="text-[16px] font-bold">95 BYN</p>
                                <button className="flex border w-[54px] h-[30px] rounded-[4px] justify-center gap-[5px]  border-[rgba(187,191,195,1)] items-center " >
                                    <span>+</span>
                                    <Image
                                        src={"/Images/cart.png"}
                                        width={20}
                                        height={20}
                                        alt="Cart"
                                    />
                                </button>
                            </div>
                            <button className="w-[255px] h-[36px] font-bold rounded-[4px]font-bold text-black rounded-[4px] cursor-pointer transition duration-[0.3s]  border border-[rgba(0,160,172,1)] hover:bg-[rgba(0,160,172,1)] hover:text-white"><p>Купить в 1 клик</p></button>
                        </div>
                    </div>
                    <div className="w-[270px] h-[400px] bg-white px-[8px] py-[8px] flex flex-col gap-[16px] rounded-[5px]">
                        <div className="flex flex-col gap-[16px]">
                            <Image
                                src={"/Images/royal.png"}
                                width={254}
                                height={130}
                                alt="royal"
                            />
                            <p className="text-[16px] font-bold w-[254px] transition duration-[0.3s] cursor-pointer  hover:text-[rgba(0,160,172,1)]">Сухой корм ROYAL CANIN STERILISED 37 для взрослых кастрированных котов и..</p>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <div className="flex gap-[4px]">
                                <button onClick={()=> setActiveButton(1)}
                                    className={`text-black px-[8px] font-bold ${activeButton === 1 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}
                                    >
                                    0,2 кг.
                                </button>
                                <button  onClick={()=> setActiveButton(2)}
                                    className={`text-black px-[8px] font-bold ${activeButton === 2 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                    0,4 кг.
                                </button>
                                <button  onClick={()=> setActiveButton(3)}
                                    className={`text-black px-[8px] font-bold ${activeButton === 3 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                    1,2 кг.
                                </button>
                                <button onClick={()=> setActiveButton(4)}
                                    className={`text-black px-[8px] font-bold ${activeButton === 4 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                    2 кг.
                                </button>
                            </div>
                            <div className="flex gap-[4px]">
                                <button onClick={()=> setActiveButton(5)}
                                    className={`text-black px-[8px] font-bold ${activeButton === 5 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                    4 кг.
                                </button>
                                <button onClick={()=> setActiveButton(6)}
                                    className={`text-black px-[8px] font-bold ${activeButton === 6 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                    10 кг.
                                </button>
                                <button onClick={()=> setActiveButton(7)}
                                    className={`text-black px-[8px] font-bold ${activeButton === 7 ? "bg-blue-500 text-white":
                                        "bg-[rgba(228,229,231,1)]"}`}>
                                    Задать вес
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[12px]  ">
                            <div className="flex gap-[16px] ">
                                <p className="text-[16px] font-bold">95 BYN</p>
                                <button className="flex border w-[54px] h-[30px] rounded-[4px] justify-center gap-[5px]  border-[rgba(187,191,195,1)] items-center " >
                                    <span>+</span>
                                    <Image
                                        src={"/Images/cart.png"}
                                        width={20}
                                        height={20}
                                        alt="Cart"
                                    />
                                </button>
                            </div>
                            <button className="w-[255px] h-[36px] rounded-[4px]font-bold text-black cursor-pointer transition duration-[0.3s] rounded-[4px] font-bold border border-[rgba(0,160,172,1)] hover:bg-[rgba(0,160,172,1)]  hover:text-white"><p>Купить в 1 клик</p></button>
                        </div>
                    </div>
                </div>
                 <div className="flex justify-center">
                <button className="mt-[24px] flex px-[12px] text-white text-[14px] font-arial  rounded-[4px]  w-[234px] h-[44px] bg-[rgba(0,160,172,1)] flex justify-center items-center" >Смотреть больше товаров</button>
                </div>
            </section>
        </div>
    )
}