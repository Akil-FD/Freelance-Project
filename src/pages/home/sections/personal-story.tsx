"use client";

import Image from "next/image";

export default function PersonalStory() {
    return (
        <section className="w-full h-[115vh] md:h-[100vh] flex items-center justify-center">
            <div className="w-full h-full flex flex-col md:flex-row">

                <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
                    <Image
                        src="/images/nature-bg.jpg"
                        alt="nature background"
                        fill
                        className="object-cover"
                    />


                    <div className="absolute inset-0 bg-black/60" />


                    <div className="relative w-2/4 md:w-2/3 lg:w-1/2 h-[80%] sm:h-[70%]">
                        <Image
                            src="/images/person.jpg"
                            alt="foreground accent"
                            fill
                            className="object-cover shadow-xl"
                        />

                        {/* Foreground overlay */}
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                </div>

                {/* Right side - Text */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-primary personal-story-txt-sec-p">
                    <div className="w-[90%] md:w-[70%] flex flex-col gap-5">
                        <p className="text-sm italic text-gray-400">designer + founder</p>

                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.3] text-secondary">
                            ELEANOR JEAN
                        </h1>

                        <p className="subheading mt-6 text-secondary">
                            Mustache leggings mumblecore, food truck selfies bitters ramps
                            fashion are waistcoat four dollar toast. Heirloom sus viral
                            freegan pickled brunch actually flannel. Venmo freegan taiyaki
                            pug cliche mlkshk, hella slow-carb meh. Iceland chia drinking
                            vinegar poutine kickstarter, taxidermy DSA. Poutine slow-carb
                            banjo skateboard selfies ethical retro hoodie occupy salvia
                            bodega boys.
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
    );
}
