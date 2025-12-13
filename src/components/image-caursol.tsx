
"use client";

import { useState, useEffect, useRef } from "react";

type CarouselItem = {
    image: string;
    title: string;
    description?: string;
    link?: string;
};

export default function Carousel({
    items = [],
    autoSlide = false,
    autoSlideInterval = 3000,
    isFullScreen = false,
    containerClass = "",
    subContainerClass = "",
    imageContainerClass = "",
    imageClass = "",
    titleClass = "",
    descriptionClass = "",
}: {
    items: CarouselItem[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
    isFullScreen?: boolean;
    containerClass?: string;
    subContainerClass?: string;
    imageContainerClass?: string;
    imageClass?: string;
    titleClass?: string;
    descriptionClass?: string;
}) {
    const [current, setCurrent] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    const slideRef = useRef<HTMLDivElement | null>(null);

    /* ✅ Measure actual slide width */
    useEffect(() => {
        if (!slideRef.current) return;

        const updateWidth = () => {
            setSlideWidth(slideRef.current!.offsetWidth);
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    /* ✅ Auto slide (stop at last) */
    useEffect(() => {
        if (!autoSlide || current === items.length - 1) return;

        const timer = setInterval(() => {
            setCurrent((prev) => Math.min(prev + 1, items.length - 1));
        }, autoSlideInterval);

        return () => clearInterval(timer);
    }, [autoSlide, autoSlideInterval, current, items.length]);

    const next = () =>
        setCurrent((prev) => Math.min(prev + 1, items.length - 1));

    const prev = () =>
        setCurrent((prev) => Math.max(prev - 1, 0));

    return (
        <div className={`relative overflow-hidden w-full ${containerClass}`}>
            {/* SLIDES */}
            <div
                className={`flex transition-transform duration-700 ease-in-out ${subContainerClass}`}
                style={{
                    transform: isFullScreen
                        ? `translateX(-${current * 100}vw)`
                        : `translateX(-${current * slideWidth}px)`,
                }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={index === 0 ? slideRef : null}
                        className={`flex-shrink-0 flex flex-col ${isFullScreen
                            ? "w-screen h-screen"
                            : imageContainerClass
                            }`}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className={
                                isFullScreen
                                    ? "w-full h-full object-cover"
                                    : imageClass
                            }
                        />

                        {!isFullScreen && (
                            <div className="mt-4 px-2">
                                {item.description && (
                                    <p className={`text-sm ${descriptionClass}`}>
                                        {item.description}
                                    </p>
                                )}
                                <h3 className={`font-semibold ${titleClass}`}>
                                    {item.title}
                                </h3>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* FULLSCREEN OVERLAY */}
            {isFullScreen && (
                <div className="absolute inset-0 flex flex-col items-end justify-end gap-3 custom-p-30">
                    <div className="flex gap-8 mb-4">
                        <button
                            onClick={prev}
                            disabled={current === 0}
                            className="bg-white/20 backdrop-blur-sm project-slide-button-p rounded disabled:opacity-40 text-secondary"
                        >
                            ❮ Prev
                        </button>

                        <button
                            onClick={next}
                            disabled={current === items.length - 1}
                            className="bg-white/20 backdrop-blur-sm project-slide-button-p rounded disabled:opacity-40 text-secondary"
                        >
                            Next ❯
                        </button>
                    </div>

                    <h3 className={titleClass}>{items[current].title}</h3>

                    {items[current].description && (
                        <p className={descriptionClass}>
                            {items[current].description}
                        </p>
                    )}

                    {items[current].link && (
                        <a
                            href={items[current].link}
                            className="text-sm italic text-gray-300"
                        >
                            View project
                        </a>
                    )}
                </div>
            )}

            {/* NON-FULLSCREEN CONTROLS */}
            {!isFullScreen && (
                <>
                    <button
                        onClick={prev}
                        disabled={current === 0}
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10
              rounded-full bg-black/40 text-white disabled:opacity-40"
                    >
                        ❮
                    </button>

                    <button
                        onClick={next}
                        disabled={current === items.length - 1}
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10
              rounded-full bg-black/40 text-white disabled:opacity-40"
                    >
                        ❯
                    </button>
                </>
            )}
        </div>
    );
}

