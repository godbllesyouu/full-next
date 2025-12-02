import Image from "next/image";

export default function UsefulArticles(){
    return(
        <div>
            <section className="w-full h-[700px] bg-[rgba(228,229,231,1)] flex justify-center items-center flex-col">
                <div className="flex gap-[850px]">
                    <p className="text-[28px] font-bold">Полезные статьи</p>
                    <div className="flex gap-[15px]">
                        <button className="flex justify-center items-center text-[rgba(92,95,98,1)] gap-[16px] w-[40px] h-[40px] cursor-pointer bg-white rounded-[40px] font-bold duration-[0.3s] hover:bg-[rgba(0,160,172,1)]">
                            {"<"}
                        </button>
                         <button className="flex justify-center items-center text-[rgba(92,95,98,1)] cursor-pointer gap-[16px] w-[40px] h-[40px] bg-white rounded-[40px] font-bold duration-[0.3s] hover:bg-[rgba(0,160,172,1)]">
                            {">"}
                        </button>
                    </div>
                </div>
                <div className="w-[1170px] h-[480px] mx-auto flex justify-center items-center gap-[30px] ">
                    <div className="w-[370px] h-[346px] bg-white flex flex-col items-center justify-center rounded-[5px]  gap-[16px]  duration-[0.3s] hover:mb-[15px]">
                        <Image
                        src={"/Images/dogg.png"}
                        width={338}
                        height={160}
                        alt="Dogg"
                        />
                        <div className="gap-[6px]"> 
                            <span className="font-bold text-[16px] px-[16px] ">Обзор корма Hills (Хиллс) для собак</span>
                            <p className="px-[16px] text-[14px]">Продукция чешской компании «Хиллс» известна многим владельцам четвероногих питомцев. Она давно зарекомендовала себя на отечественном рынке. Рационы представлены...</p>
                        </div>
                        <div className="flex items-center gap-[42px]">
                          <p className="flex items-center gap-[6px]">
                            <Image src={"/Images/clock.png"}
                            width={16}
                            height={16}
                            alt="clock"
                            /> 
                            <span className="text-[14px] text-[rgba(140,145,150,1)] font-bold">Время чтения: 5 мин.</span>
                          </p>

                          <input className="font-bold text-[rgba(140,145,150,1)]" type="date" />
                        </div>
                    </div>
                            <div className="w-[370px] h-[346px] bg-white flex flex-col items-center justify-center rounded-[5px] gap-[16px] duration-[0.3s] hover:mb-[15px]">
                        <Image
                        src={"/Images/catt.png"}
                        width={338}
                        height={160}
                        alt="Catt"
                        />
                        <div className="gap-[6px]"> 
                            <span className="font-bold text-[16px] px-[16px] ">Какая трава полезна для кошек?</span>
                            <p className="px-[16px] text-[14px]">Приводя в дом кошку, человек полностью берет на себя ответственность за ее здоровье и воспитание. Неопытные хозяева сначала задумываются о питании нового члена семь...</p>
                        </div>
                        <div className="flex items-center gap-[42px]">
                          <p className="flex items-center gap-[6px]">
                            <Image src={"/Images/clock.png"}
                            width={16}
                            height={16}
                            alt="clock"
                            /> 
                            <span className="text-[14px] text-[rgba(140,145,150,1)] font-bold">Время чтения 4 мин.</span>
                          </p>

                          <input className="font-bold text-[rgba(140,145,150,1)]" type="date" />
                        </div>
                    </div>
                            <div className="w-[370px] h-[346px] bg-white flex flex-col items-center justify-center rounded-[5px] gap-[16px] duration-[0.3s] hover:mb-[15px]">
                        <Image
                        src={"/Images/muk.png"}
                        width={338}
                        height={160}
                        alt="Muk"
                        />
                        <div className="gap-[6px]"> 
                            <span className="font-bold text-[16px] px-[16px] ">Лучшие корма для хомяков</span>
                            <p className="px-[16px] text-[14px]">Хомяки — достаточно привередливые домашние питомцы. Их питание должно быть разнообразным и сбалансированным. Если у вас нет времени и желания составлять рацион...</p>
                        </div>
                        <div className="flex items-center gap-[42px]">
                          <p className="flex items-center gap-[6px]">
                            <Image src={"/Images/clock.png"}
                            width={16}
                            height={16}
                            alt="clock"
                            /> 
                            <span className="text-[14px] text-[rgba(140,145,150,1)] font-bold">Время чтения 9 мин.</span>
                          </p>

                          <input className="font-bold text-[rgba(140,145,150,1)]" type="date" />
                        </div>
                    </div>
                </div>
                  <div className="flex justify-center">
                    <button className="mt-[24px] flex px-[12px] text-white text-[14px] font-arial  rounded-[4px]  w-[234px] h-[44px] bg-[rgba(0,160,172,1)] flex justify-center items-center" >Читать больше статей</button>
                </div>
            </section>
        </div>
    )
}