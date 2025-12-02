import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <section className="w-full h-[600px]">
                <div className="flex justify-center h-[120px] items-center bg-[rgba(228,229,231,1)] gap-[20px] ">
                    <div className="flex items-center w-[214px] h-[84px]  bg-white gap-[15px] transition cursor-pointer duration-[0.3s] hover:text-[rgba(0,160,172,1)]">
                        <Image
                            src={"/Images/doc.png"}
                            width={85}
                            height={84}
                            alt="Dog"
                        />
                        <p className="text-[16px] font-bold ">Собаки</p>
                    </div>
                    <div className="flex items-center w-[214px] h-[84px] bg-white gap-[15px] transition cursor-pointer duration-[0.3s] hover:text-[rgba(0,160,172,1)]">
                        <Image
                            src={"/Images/cat.png"}
                            width={85}
                            height={84}
                            alt="Кошки"
                        />
                        <p className="text-[16px] font-bold ">Кошки</p>
                    </div>
                    <div className="flex items-center w-[214px] h-[84px] bg-white gap-[15px] transition cursor-pointer duration-[0.3s] hover:text-[rgba(0,160,172,1)]">
                        <Image
                            src={"/Images/xamyak.png"}
                            width={73}
                            height={82}
                            alt="Грызуны"
                        />
                        <p className="text-[16px] font-bold ">Грызуны</p>
                    </div>
                    <div className="flex items-center w-[214px] h-[84px] bg-white gap-[15px] transition cursor-pointer duration-[0.3s] hover:text-[rgba(0,160,172,1)]">
                        <Image
                            src={"/Images/tutak.png"}
                            width={85}
                            height={84}
                            alt="Птицы"
                        />
                        <p className="text-[16px] font-bold ">Птицы</p>
                    </div>
                    <div className="flex items-center w-[214px] h-[84px] bg-white gap-[15px] transition cursor-pointer duration-[0.3s] hover:text-[rgba(0,160,172,1)]">
                        <Image
                            src={"/Images/fish.png"}
                            width={85}
                            height={84}
                            alt="Рыбки"
                        />
                        <p className="text-[16px] font-bold ">Рыбки</p>
                    </div>
                </div>
                <div className="flex justify-center gap-[40px]">
                    <div className="flex flex-col justify-center gap-[40px]">
                        <h3 className="w-[524px] font-bold text-[42px]">
                            Всё, что нужно вашему питомцу в 9 мин от метро Малиновка
                        </h3>
                        <p className="flex">
                            <span className="text-[16px] font-bold w-[222px] flex flex-col">
                                Более 5000 товаров для
                                <span>животных в наличии</span></span>
                            <span className="flex flex-col font-bold">
                                Вкусные сюрпризы для ваших <span> питомцев в магазине </span>
                            </span>
                        </p>
                        <button className="w-[155px] h-[46px] bg-blue-500 text-white rounded-[4px] text-[14px] font-bold transition duration-[0.3s] cursor-pointer  hover:bg-[rgba(52,124,132,1)]">Выбрать товар</button>
                    </div>
                    <Image src={"/Images/Frame11.png"}
                        width={573}
                        height={377}
                        alt="Frame11"
                    />
                </div>
            </section>
        </div>
    )
}