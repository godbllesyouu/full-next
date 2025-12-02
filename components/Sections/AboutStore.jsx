import Image from "next/image";

export default function AboutStore() {
    return (
        <div>
            <section className="w-full h-[617px] bg-white flex justify-center items-center">
                <div className="flex gap-[110px] items-center">
                    <div className="w-[597px] h-[492px] flex flex-col justify-center  gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                            <span className="text-[28px] font-bold">Здравствуйте, счастливый хозяин любимого питомца!</span>
                            <p className="text-[16px] w-[597px] w-[585px] font-bold text-[#202223af]">Меня зовут Ирина, 2 года назад моя бесконечная любовь к животным трансформировалась в магазин «Территория ZOO».
                                Место, главная цель которого —  забота о полноценной жизни питомцев, здоровой, долгой, радостной и гармоничной. Наш долг — создавать лучшее предложение для ваших домашних любимцев.</p>
                        </div>
                            <div className="h-[88px] border-l-2 border-l-[rgba(152,198,205,1)] flex items-center ">
                            <p className="px-[12px] flex flex-col gap-[8px]">
                                <span className="font-bold">За 7 минут соберем заказ</span>
                                <span className="w-[585px] font-bold text-[#202223af]">Выбирайте товары на сайте, забирайте в удобное время в нашем магазине. Уже через 30 минут собранный и упакованный заказ будет ждать вас.</span>
                            </p>
                          </div>
                          <div className="h-[88px] border-l-2 border-l-[rgba(152,198,205,1)] flex items-center">
                            <p className="px-[12px] flex flex-col gap-[8px]">
                                <span className="font-bold">Поможем с выбором товаров</span>
                                <span className="w-[585px] font-bold text-[#202223af]">Задавайте вопросы профессионалам, получайте консультации по кормлению и содержанию питомца.</span>
                            </p>
                           </div>
                           <div className="h-[88px] border-l-2 border-l-[rgba(152,198,205,1)] flex items-center">
                            <p className="px-[12px] flex flex-col gap-[8px]">
                                <span className="font-bold">Поставим товар на заказ!</span>
                                <span className="w-[585px] font-bold text-[#202223af]">Мы работаем с лучшими поставщиками сертифитированного товара для животных. Если нужного Вам товара не будет в наличии мы в кратчайшие сроки договоримся о его поставке и сообщим Вам.</span>
                            </p>
                        </div>

                    </div>
                    <Image
                        src={"/Images/market.png"}
                        width={462}
                        height={617}
                        alt="Market"
                    />
                </div>
            </section>
        </div>
    )
}