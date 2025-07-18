import ModernCollection from "@/dashboard/components/collection/ModernCollection";
import PerleCollection from "@/dashboard/components/collection/PerleCollection";
import CoreCollection from "@/dashboard/components/collection/CoreCollection";
import { BrandCollectionData, HeroSectionData } from "@/database/data";
import BrandOverview from "@/dashboard/components/BrandOverview";
import Footer from "@/dashboard/components/footer/Footer";
import MobileFooter from "@/dashboard/components/footer/MobileFooter";
import ProcessOverview from "@/dashboard/components/ProcessOverview";
import Testimonials, { HallmarkMarks } from "@/dashboard/components/Testimonials";
import Navbar from "@/dashboard/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BrandOverview mobileImage={HeroSectionData?.mobileView} desktopImage={HeroSectionData?.initialView} title="Modern Rodeo" textColor="white" buttonTitle="SHOP THE COLLECTION" />
      <ModernCollection />
      <BrandOverview mobileImage={BrandCollectionData?.CoreCollection?.mobileView} desktopImage={BrandCollectionData?.CoreCollection?.initialView} title="Core Collection" textColor="black" />
      <CoreCollection />
      <BrandOverview mobileImage={BrandCollectionData?.PerlCollection?.mobileView} desktopImage={BrandCollectionData?.PerlCollection?.initialView} title="Perle" textColor="white" />
      <PerleCollection />
      <ProcessOverview />
      <Testimonials />
      <HallmarkMarks />
      <div className="block md:hidden">
        <MobileFooter />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
