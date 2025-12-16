
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ResponsiveSlider({ slides }: { slides: { id:number; src: string; alt: string; title: string; link?: string }[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAutoPlay(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setIsAutoPlay(false);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <div className="relative w-full max-w-8xl mx-auto overflow-hidden">

            <div className="relative h-96 md:h-[700px] lg:h-screen w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            placeholder='blur'
                            blurDataURL={slide.src}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
                        />
                   </div>
                ))}
            </div>


            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 max-w-sm text-white z-10 flex flex-col justify-end items-end">

             
                <div className="flex gap-3 mb-4">
                    <button
                        onClick={prevSlide}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 text-white hover:text-black shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                    >
                        ❮ Prev
                    </button>
                    <button
                        onClick={nextSlide}
                        className="bg-white/20 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 text-white hover:text-black shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                    >
                        Next ❯
                    </button>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-2xl leading-tight">
                    {currentSlideData.title}
                </h2>

                {currentSlideData.link && (
                    <a
                        href={currentSlideData.link}
                        className="text-sm md:text-base italic text-gray-300 underline underline-offset-2 transition-colors duration-300"
                    >
                        View project →
                    </a>
                )}
            </div>

        </div>
    );
}

