import MainHeader from "@/components/Header/MainHeader";
import TopHeader from "@/components/Header/TopHeader";
import AboutStore from "@/components/Sections/AboutStore";
import Hero from "@/components/Sections/Hero";
import Offer from "@/components/Sections/Offer";
import PopulaProducts from "@/components/Sections/PopulaProducts";
import PopularBrands from "@/components/Sections/PopularBrands";
import PopulaProducts2 from "@/components/Sections/PopularProducts2";
import ShopReview from "@/components/Sections/ShopReview";
import StoreContact from "@/components/Sections/StoreContact";
import UsefulArticles from "@/components/Sections/UsefulArticles";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Hero />
      <Offer />
      <PopulaProducts />
      <PopulaProducts2 />
      <PopularBrands />
      <ShopReview />
      <UsefulArticles />
      <AboutStore />
      <StoreContact />
    </div>
  );
}
