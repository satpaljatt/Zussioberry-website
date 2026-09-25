import FreshFruitsJuices from "@/components/sections/FreshFruitsJuices";
import FullMenu from "@/components/sections/FullMenu";
import MakeOrder from "@/components/sections/MakeOrder";
import NatureGoodness from "@/components/sections/NatureGoodness";
import Slider from "@/components/sections/Slider";
import SmoothiesAndJuices from "@/components/sections/SmoothiesAndJuices";
import SummerBreezeBanner from "@/components/sections/SummerBreezeBanner";
import TheySay from "@/components/sections/TheySay";
import RawMenu from "@/components/sections/RawMenu";
import FruitsomeBlog from "@/components/sections/FruitsomeBlog";
// import WelcomeTo from "@/components/sections/WelcomeTo";
import BeveragesSection from "@/components/sections/BeveragesSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import WhyChoose from "@/components/sections/WhyChoose";
import FrozenDessertsPage from "@/components/sections/FrozenDessertsPage";
import PlateFreezing from "@/components/sections/PlateFreezing";
import FranchiseModel from "@/components/sections/FranchiseModel";
import Testimonials from "@/components/sections/Testimonials";
import JourneyInNumbers from "@/components/sections/JourneyInNumbers";
import FlagshipModel from "@/components/sections/GlobalModel";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Slider />
      <SmoothiesAndJuices />
      <RawMenu />
      <SummerBreezeBanner />
      <FruitsomeBlog />
      <TheySay />
    </main>
  );
}