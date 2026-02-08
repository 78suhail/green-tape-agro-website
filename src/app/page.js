import HeroSection from "@/components/HeroSection/BannerSlider";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import PlantHealth from "@/components/PlantHealth/PlantHealth";
import PromoSection from "@/components/PromoSection/PromoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PlantHealth />
      <ProductSlider />
      <PromoSection/>
    </>
  );
}
