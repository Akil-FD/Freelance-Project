import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-[100vh] flex items-center justify-center">
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/hero-1.jpg"
                        alt="hero background"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
            </div>

          
            <div className="relative z-10 text-center px-6 w-[60%] max-w-4xl">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.3] text-secondary drop-shadow-lg tracking-wide">
                    We create spaces that feel cozy and comfortable
                </h1>

                <div className="hero-establish-container">
                    <div className="hero-line" />
                    <p className="text-sm italic text-gray-400">
                        established 2015 · Aspen, CO
                    </p>
                    <div className="hero-arrow">↓</div>
                </div>
            </div>
        </section>
    );
}
