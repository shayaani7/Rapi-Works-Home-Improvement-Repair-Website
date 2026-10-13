"use client";

import Image from "next/image";

const slides = [
  {
    src: "/images/work/living-lbox-cassette.jpg",
    alt: "Living hall L-box ceiling, lighting and cassette aircond",
  },
  {
    src: "/images/work/plaster-lbox-windows.jpg",
    alt: "Plaster ceiling L-box with cove lighting",
  },
  {
    src: "/images/work/plaster-circle-led.jpg",
    alt: "Circular LED plaster ceiling",
  },
  {
    src: "/images/work/aircond-split-bedroom.jpg",
    alt: "Bedroom split aircond installation",
  },
  {
    src: "/images/work/electrical-pendant.jpg",
    alt: "Designer pendant lighting installation",
  },
];

export default function HeroGallery() {
  return (
    <div className="w-full min-w-0">
      <div
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory overscroll-x-contain touch-pan-x no-scrollbar h-56 sm:h-80 lg:h-[420px] rounded-2xl sm:rounded-3xl border-2 border-slate-700/60 shadow-2xl bg-slate-800"
        aria-label="Completed work photos"
      >
          {slides.map((slide) => (
            <div
              key={slide.src}
              className="relative min-w-full w-full h-56 sm:h-80 lg:h-[420px] snap-center shrink-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={slide.src === slides[0].src}
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          ))}
      </div>
      <p className="mt-2 text-center text-[11px] text-slate-400 lg:hidden">
        Swipe left or right to see more work
      </p>
    </div>
  );
}
