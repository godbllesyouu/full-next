import Image from "next/image";

export default function NotFound(){
    return(
        <div className="mx-auto max-w-[1400px]">
            <section className="w-full h-[600px] flex justify-center mx-auto items-center">
                <div className=" pl-[135px] flex flex-col gap-[32px]">
                    <div className="flex flex-col gap-[16px]">
                    <p className="text-[146px] text-[rgba(189,193,204,1)] font-bold">404</p>
                        <p className="text-[28px] font-bold">Мрр... Мяу! </p>
                        <p className="text-[28px] font-bold">Страница не найдена</p>
                        <p className="flex flex-col gap-[8px]">
                            <span className="text-[16px] w-[435px] text-[rgba(109,113,117,1)]">Страничку, которую вы ищите не существует или она была удалена</span>
                            <span className="text-[16px] w-[435px] text-[rgba(109,113,117,1)]">Советуем перейти на главную, там можно найти много интересного для вашего любимого питомца</span>
                        </p>
                    </div>
                    <button className="w-[205px] h-[44px] bg-[rgba(0,160,172,1)] text-white text-[14px] rounded-[4px]">Вернуться на главную</button>
                </div>
                <div>

                <Image 
                src={"/Images/notFound.png"}
                width={900}
                height={575}
                alt="NotFound"
                />
                </div>

            </section>
        </div>
    )
}