import { Carousel, CarouselItem } from "@/components/base/carousel/carousel";
import { DirectionProvider } from "@/components/foundations/direction/direction";

const slides = [
  {
    src: "/images/Screenshot%202026-11-20%20114903.png",
    alt: "Seller dashboard overview with store stats and quick actions",
  },
  {
    src: "/images/Screenshot%202026-11-20%20114929.png",
    alt: "Seller dashboard revenue chart and recent orders",
  },
];

export default function SellerDashboardCarousel() {
  return (
    <div className="rounded-2xl bg-navy p-3 shadow-lg sm:p-4">
      <DirectionProvider locale="en">
        <Carousel aria-label="Seller dashboard previews" className="gap-3">
          {slides.map((slide) => (
            <CarouselItem key={slide.src} className="overflow-hidden rounded-xl bg-slate-800">
              <img
                src={slide.src}
                alt={slide.alt}
                className="block h-auto w-full rounded-xl"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </DirectionProvider>
    </div>
  );
}
