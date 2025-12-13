export default function Hero() {
    return (
        <section className="relative w-full h-[100vh] flex items-center justify-center">

            <div className="absolute inset-0">
                <img
                    src="/images/hero-1.jpg"
                    className="w-full h-full object-cover"
                    alt="hero background"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>


            <div className="relative z-10 text-center px-6 w-[60%]">
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.3] text-secondary drop-shadow-lg tracking-wide">
                    We create spaces that feel cozy and comfortable
                </h1>

                <div className="hero-establish-container">
                    <div className="hero-line"></div>
                    <p className="text-sm italic text-gray-400">established 2015 · Aspen, CO</p>
                    <div className="hero-arrow">↓</div>
                </div>
            </div>

        </section>

    )
}