import { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Gem,
  Heart,
  PackageX,
  Shirt,
  Sparkles,
} from "lucide-react";

function HangerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 7.25c1.16 0 2.1-.82 2.1-1.84 0-.94-.8-1.66-1.82-1.81-.86-.12-1.73.25-2.2.93"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.45"
      />
      <path
        d="M12 7.25v2.15L4.7 14.18c-.96.62-.52 2.12.63 2.12h13.34c1.15 0 1.59-1.5.63-2.12L12 9.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.45"
      />
    </svg>
  );
}

function StepArrowIcon(props) {
  return (
    <svg viewBox="0 0 42 12" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 6h38"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.2"
      />
      <path
        d="m34.5 1.5 5 4.5-5 4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  );
}

const fallbackIcons = [Shirt, PackageX, Heart, Sparkles, Gem];

export function StepSlider({ steps, ariaLabel = "Sådan gør du trin" }) {
  const sliderRef = useRef(null);
  const dragState = useRef({
    isDragging: false,
    scrollLeft: 0,
    startX: 0,
  });

  const scrollSteps = (direction) => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector("article");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 360;

    slider.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event) => {
    const slider = sliderRef.current;

    if (!slider || event.button !== 0) {
      return;
    }

    dragState.current = {
      isDragging: true,
      scrollLeft: slider.scrollLeft,
      startX: event.clientX,
    };
    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const slider = sliderRef.current;

    if (!slider || !dragState.current.isDragging) {
      return;
    }

    event.preventDefault();
    const dragDistance = event.clientX - dragState.current.startX;
    slider.scrollLeft = dragState.current.scrollLeft - dragDistance;
  };

  const stopDrag = (event) => {
    const slider = sliderRef.current;

    dragState.current.isDragging = false;

    if (slider?.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <>
      <div
        ref={sliderRef}
        onDragStart={(event) => event.preventDefault()}
        onPointerCancel={stopDrag}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDrag}
        className="no-scrollbar -mx-4 mt-10 flex cursor-grab snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-4 pt-3 pb-10 scroll-pl-4 select-none active:cursor-grabbing md:-mx-6 md:px-6 md:pb-12 md:scroll-pl-6 lg:mr-[calc(50%_-_50vw)] lg:gap-14 lg:pr-[calc(50vw_-_50%_+_3rem)]"
        aria-label={ariaLabel}
      >
        {steps.map((step, index) => {
          const StepIcon = step.icon ?? (index === 0 ? HangerIcon : fallbackIcons[index % fallbackIcons.length]);

          return (
            <article
              key={step.title}
              className="group relative w-[82vw] shrink-0 snap-start pt-12 text-heading sm:w-[28rem] lg:w-[calc((100%_-_7rem)/3)]"
            >
              <span className="absolute left-0 top-0 z-10 font-['DM_Serif_Display'] text-[clamp(2.75rem,5vw,4.2rem)] leading-none text-primary/45 transition-colors duration-300 ease-out group-hover:text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="overflow-hidden rounded-[1.15rem] bg-surface shadow-[0_12px_28px_color-mix(in_srgb,var(--color-heading)_3%,transparent),0_2px_8px_color-mix(in_srgb,var(--color-heading)_3%,transparent)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-divider">
                  <img
                    src={step.image}
                    alt=""
                    className="h-full w-full object-cover opacity-95"
                    aria-hidden="true"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-24 w-28 bg-[radial-gradient(circle_at_0%_0%,color-mix(in_srgb,var(--color-background)_58%,transparent)_0%,color-mix(in_srgb,var(--color-background)_30%,transparent)_38%,transparent_76%)]"
                  />
                </div>

                <div className="relative px-7 pt-11 pb-8 text-center md:px-8">
                  <span className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-primary shadow-[0_10px_24px_color-mix(in_srgb,var(--color-heading)_7%,transparent)]">
                    <StepIcon className="h-7 w-7" strokeWidth={1.45} aria-hidden="true" />
                  </span>
                  <h3 className="font-['Manrope'] text-base font-semibold text-heading">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-[18rem] text-sm leading-6 text-body">
                    {step.text}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 ? (
                <span className="pointer-events-none absolute right-[-3rem] top-[54%] hidden -translate-y-1/2 text-primary/58 lg:flex">
                  <StepArrowIcon className="h-3 w-10" />
                </span>
              ) : null}
            </article>
          );
        })}
      </div>

      <div className="-mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollSteps(-1)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-divider bg-surface text-primary transition-colors hover:bg-point-system focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Forrige trin"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollSteps(1)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-divider bg-surface text-primary transition-colors hover:bg-point-system focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Næste trin"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
