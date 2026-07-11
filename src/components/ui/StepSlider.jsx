import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        className="no-scrollbar mt-10 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-2 pb-10 scroll-pl-2 select-none active:cursor-grabbing md:gap-6 md:px-0 md:pb-12 md:scroll-pl-0"
        aria-label={ariaLabel}
      >
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="group relative min-h-[29rem] w-[82vw] shrink-0 snap-start overflow-hidden rounded-[1.35rem] bg-surface text-heading sm:w-[28rem] lg:w-[calc((100%_-_3rem)/3)]"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-heading">
              <img
                src={step.image}
                alt=""
                className="h-full w-full object-cover opacity-92 transition-transform duration-700 ease-out group-hover:scale-105"
                aria-hidden="true"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 step-card-overlay"
              />
              <span className="absolute bottom-4 left-4 font-['filson-pro'] text-7xl leading-none text-surface/22 transition-all duration-500 ease-out group-hover:translate-y-[-0.15rem] group-hover:text-surface/62">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="p-7 md:p-8">
              <div className="mb-5 h-px w-full bg-border" />
              <h3 className="card-title font-['Manrope'] font-semibold text-heading">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-body">
                {step.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollSteps(-1)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-background/24 bg-background/12 text-surface transition-colors hover:bg-background/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
          aria-label="Forrige trin"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollSteps(1)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-background/24 bg-background/12 text-surface transition-colors hover:bg-background/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
          aria-label="Næste trin"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
