import CTASection from "@/components/CTASection";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeaderCaroussel from "@/components/HeaderCarousel";
import ScrollToTop from "@/components/ScrollToTop";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HeaderCaroussel />
      <FeaturedProducts />
      <CTASection />
      <Testimonials />
      <ScrollToTop />
    </>
  );
}
