export default function PersonalStory() {
    return (
        <section className="w-full h-[100vh] md:h-[100vh] flex items-center justify-center">
            <div className="w-full h-full flex flex-col md:flex-row">

                <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">

                    <img
                        src="/images/nature-bg.jpg"
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="nature background"
                    />

                    <div className="absolute inset-0 bg-black/60"></div>

                    <div className="absolute z-30 h-[80%] sm:h-[70%]">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1661517809079-f7c4ea709d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4..0&ixid=%3D%3D"
                            className="h-full w-auto shadow-xl object-cover"
                            alt="foreground accent"
                        />

                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                </div>


                <div className="w-full md:w-1/2 flex items-center justify-center bg-primary personal-story-txt-sec-p">
                    <div className="w-[90%] md:w-[70%] flex flex-col gap-5">

                        <p className="text-sm italic text-gray-400">
                            designer + founder
                        </p>

                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.3] text-secondary">
                            ELEANOR JEAN
                        </h1>

                        <p className="subheading mt-6 text-secondary">
                            Mustache leggings mumblecore, food truck selfies bitters ramps fashion are waistcoat four dollar toast. Heirloom sus viral freegan pickled brunch actually flannel. Venmo freegan
                            taiyaki pug cliche mlkshk, hella slow-carb meh. Iceland chia drinking vinegar poutine kickstarter, taxidermy DSA. Poutine slow-carb banjo skateboard selfies ethical
                            retro hoodie occupy salvia bodega boys.
                        </p>

                        <a
                            href="#"
                            className="inline-block mt-8 underline underline-offset-[10px] text-secondary"
                        >
                            READ MY STORY
                        </a>
                    </div>
                </div>

            </div>
        </section>

    )
}