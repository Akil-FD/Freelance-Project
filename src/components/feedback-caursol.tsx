"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function FeedbackSlider({
    clientFeedBacks,
    autoSlide = false,
    interval = 4000,
}: {
    clientFeedBacks: { id: number; quotes: string }[];
    autoSlide?: boolean;
    interval?: number;
}) {
    const [current, setCurrent] = useState(0);
    const [height, setHeight] = useState<number | "auto">("auto");

    const activeRef = useRef<HTMLDivElement | null>(null);

    const next = () =>
        setCurrent((prev) => (prev + 1) % clientFeedBacks.length);

    const prev = () =>
        setCurrent(
            (prev) => (prev - 1 + clientFeedBacks.length) % clientFeedBacks.length
        );


    useLayoutEffect(() => {
        if (activeRef.current) {
            setHeight(activeRef.current.offsetHeight);
        }
    }, [current]);

 
    useEffect(() => {
        if (!autoSlide) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [autoSlide, interval]);

    return (
        <div className="w-[90%] sm:w-[70%y] flex flex-col items-center gap-15">

            <div
                className="relative w-full overflow-hidden flex items-center justify-center transition-[height] duration-500"
                style={{ height }}
            >
                {clientFeedBacks.map((feedback, index) => {
                    const isActive = index === current;

                    return (
                        <div
                            key={feedback.id}
                            ref={isActive ? activeRef : null}
                            className={`w-full text-center transition-all duration-700 ${isActive
                                    ? "relative opacity-100 translate-x-0"
                                    : "absolute inset-0 opacity-0 translate-x-10 pointer-events-none"
                                }`}
                        >
                            <p className="font-heading text-3xl text-primary">
                                “{feedback.quotes}”
                            </p>
                        </div>
                    );
                })}
            </div>


            <div className="flex items-center gap-16">
                <button
                    onClick={prev}
                    className="flex items-center gap-2 text-primary cursor-pointer"
                    suppressHydrationWarning={true}
                >
                    <span className="text-1xl">❮</span>
                    <span className="text-xs uppercase tracking-widest text-primary">
                        Previous
                    </span>
                </button>

                <button
                    onClick={next}
                    className="flex items-center gap-2 text-primary cursor-pointer"
                    suppressHydrationWarning={true}
                >
                    <span className="text-xs uppercase tracking-widest text-primary">
                        Next
                    </span>
                    <span className="text-1xl">❯</span>
                </button>
            </div>
        </div>
    );
}
