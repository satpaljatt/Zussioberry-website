import FreshFruitsJuices from "@/components/sections/FreshFruitsJuices";
import FullMenu from "@/components/sections/FullMenu";
import MakeOrder from "@/components/sections/MakeOrder";
import NatureGoodness from "@/components/sections/NatureGoodness";
import Slider from "@/components/sections/Slider";
import SmoothiesAndJuices from "@/components/sections/SmoothiesAndJuices";
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
   <>
   <Slider/>
   <SmoothiesAndJuices/>
   <TheySay/>
   <RawMenu/>
   <FruitsomeBlog/>
   {/* <WelcomeTo/> */}
   {/* <WhyChoose /> */}
   {/* <FranchiseModel /> */}
   {/* <FlagshipModel /> */}
   {/* <MakeOrder/> */}
   {/* <BeveragesSection /> */}
   {/* <JourneyInNumbers /> */}
   {/* <Testimonials /> */}
   {/* <NewsletterSection /> */}
   </>
  );
}