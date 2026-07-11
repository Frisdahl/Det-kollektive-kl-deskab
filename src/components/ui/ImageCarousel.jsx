import { useCallback, useEffect, useRef, useState } from "react";

export function ImageCarousel({ images, ariaLabel = "Billedkarusel" }) {
  const carouselRef = useRef(null);
  const dragState = useRef({
    animationFrame: null,
    current: 0,
    isDragging: false,
    lastClientX: 0,
    startX: 0,
    target: 0,
    velocity: 0,
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  const loopedImages = [...images, ...images, ...images].map((image, index) => ({
    ...image,
    loopIndex: index,
  }));

  const getLoopBounds = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return { end: 0, start: 0, width: 0 };
    }

    const startItem = carousel.children[images.length];
    const endItem = carousel.children[images.length * 2];

    if (!startItem || !endItem) {
      return { end: 0, start: 0, width: 0 };
    }

    const start = startItem.offsetLeft;
    const end = endItem.offsetLeft;

    return { end, start, width: end - start };
  }, [images.length]);

  const updateActiveImage = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel || images.length === 0) {
      return;
    }

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(carousel.children).forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(carouselCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const closestLogicalIndex = closestIndex % images.length;

    setActiveCarouselIndex((current) =>
      current === closestLogicalIndex ? current : closestLogicalIndex,
    );
  }, [images.length]);

  const wrapPosition = useCallback(() => {
    const carousel = carouselRef.current;
    const { end, start, width } = getLoopBounds();

    if (!carousel || width <= 0) {
      return carousel?.scrollLeft ?? 0;
    }

    const state = dragState.current;
    let nextScrollLeft = carousel.scrollLeft;

    if (nextScrollLeft >= end) {
      nextScrollLeft -= width;
      state.current -= width;
      state.target -= width;
    } else if (nextScrollLeft < start) {
      nextScrollLeft += width;
      state.current += width;
      state.target += width;
    }

    if (nextScrollLeft !== carousel.scrollLeft) {
      carousel.scrollLeft = nextScrollLeft;
    }

    return nextScrollLeft;
  }, [getLoopBounds]);

  const updateProgress = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const { start, width } = getLoopBounds();
    const scrollLeft = wrapPosition();
    const progress = width > 0 ? (scrollLeft - start) / width : 0;

    setScrollProgress(Math.min(Math.max(progress, 0), 1));
    updateActiveImage();
  }, [getLoopBounds, updateActiveImage, wrapPosition]);

  const animateScroll = () => {
    const carousel = carouselRef.current;
    const state = dragState.current;

    if (!carousel) {
      state.animationFrame = null;
      return;
    }

    state.current += (state.target - state.current) * 0.22;

    if (!state.isDragging) {
      state.target += state.velocity;
      state.velocity *= 0.92;
    }

    const { end, start, width } = getLoopBounds();

    if (width > 0) {
      if (state.current >= end) {
        state.current -= width;
        state.target -= width;
      } else if (state.current < start) {
        state.current += width;
        state.target += width;
      }
    }

    carousel.scrollLeft = state.current;
    updateProgress();

    const shouldContinue =
      Math.abs(state.target - state.current) > 0.2 ||
      (!state.isDragging && Math.abs(state.velocity) > 0.2);

    if (shouldContinue) {
      state.animationFrame = window.requestAnimationFrame(animateScroll);
      return;
    }

    state.current = state.target;
    carousel.scrollLeft = state.current;
    state.animationFrame = null;
  };

  const startAnimation = () => {
    if (!dragState.current.animationFrame) {
      dragState.current.animationFrame =
        window.requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const { start, width } = getLoopBounds();

    if (carousel && width > 0) {
      carousel.scrollLeft = start;
      dragState.current.current = start;
      dragState.current.target = start;
    }

    updateProgress();

    window.addEventListener("resize", updateActiveImage);

    return () => {
      window.removeEventListener("resize", updateActiveImage);

      if (dragState.current.animationFrame) {
        window.cancelAnimationFrame(dragState.current.animationFrame);
      }
    };
  }, [getLoopBounds, images, updateActiveImage, updateProgress]);

  const handlePointerDown = (event) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    event.preventDefault();
    dragState.current = {
      ...dragState.current,
      current: carousel.scrollLeft,
      isDragging: true,
      lastClientX: event.clientX,
      startX: event.clientX,
      target: carousel.scrollLeft,
      velocity: 0,
    };
    carousel.setPointerCapture(event.pointerId);
    startAnimation();
  };

  const handlePointerMove = (event) => {
    const carousel = carouselRef.current;

    if (!carousel || !dragState.current.isDragging) {
      return;
    }

    event.preventDefault();
    const delta = event.clientX - dragState.current.lastClientX;

    dragState.current.target -= delta;
    dragState.current.velocity = -delta * 0.85;
    dragState.current.lastClientX = event.clientX;
    startAnimation();
  };

  const stopDragging = (event) => {
    const carousel = carouselRef.current;

    dragState.current.isDragging = false;
    startAnimation();

    if (carousel?.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <>
      <div
        ref={carouselRef}
        onScroll={updateProgress}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
        className="no-scrollbar mt-10 flex h-[11.5rem] cursor-grab touch-pan-y select-none items-center gap-4 overflow-x-auto active:cursor-grabbing sm:h-[12.5rem] md:h-[34rem] md:gap-5 xl:h-[36rem]"
        aria-label={ariaLabel}
      >
        {loopedImages.map((image, index) => (
          <article
            key={`${image.alt}-${image.loopIndex}`}
            className={`relative shrink-0 transition-[width,margin] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              activeCarouselIndex === index % images.length
                ? "z-10 mx-2 w-[7.25rem] sm:w-[7.75rem] md:mx-4 md:w-[22.5rem] xl:w-[24rem]"
                : "z-0 mx-0 w-[6rem] sm:w-[6.5rem] md:w-[20rem] xl:w-[21rem]"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              draggable="false"
              onDragStart={(event) => event.preventDefault()}
              className="pointer-events-none aspect-[5/7] w-full select-none rounded-2xl object-cover md:rounded-[1.25rem]"
            />
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <progress
          value={scrollProgress}
          max="1"
          aria-label="Karusel progress"
          className="h-1 w-44 appearance-none overflow-hidden rounded-full bg-border [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-heading [&::-webkit-progress-bar]:bg-border [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-heading"
        />
      </div>
    </>
  );
}
