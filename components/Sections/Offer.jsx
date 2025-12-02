import Image from "next/image";

export default function Offer() {
    return (
        <div className="flex justify-center h-[200px] gap-[32px]  bg-[rgba(228,229,231,1)] items-center ">
            <div className="w-[569px] h-[153px] flex bg-[rgba(255,215,157,1)]">
                <div className="flex flex-col justify-center pl-[24px] gap-[16]">
                    <p className="text-[20px]  font-bold  ">
                        Скидка 25% на первый заказ любого товара на сумму от 50BYN
                    </p>
                    <button className="w-[216px] h-[38px] rounded-[4px] bg-white text-[14px] font-bold cursor-pointer">Перейти к выбору товара</button>
                </div>
                <Image
                    src={"/Images/zoob.png"}
                    width={149}
                    height={149}
                    alt="Zoob"
                />
            </div>
            <div className="w-[569px] h-[153px] flex bg-[rgba(174,233,209,1)]">
                <div className="flex flex-col justify-center pl-[24px] gap-[16]">
                    <p className="text-[20px]  font-bold">
                        Получите игрушку в подарок при сумме заказа от 200BYN
                    </p>
                    <button className="w-[216px] h-[38px] rounded-[4px] bg-white text-[14px] font-bold cursor-pointer ">Перейти к выбору товара</button>
                </div>
                <Image className="pr-[28px]"
                    src={"/Images/cats.png"}
                    width={196}
                    height={148}
                    alt="Cats"
                />
            </div>
        </div>
    )
}