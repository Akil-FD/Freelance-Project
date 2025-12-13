export default function Intro() {
    return (
        <section className="w-full h-[80vh] md:h-[100vh] flex items-center justify-center bg-secondary">

            <div className="w-[90%] sm:w-[70%] flex flex-wrap items-center justify-center text-center gap-7">

                <div className="flex items-center justify-center w-28 h-38 rounded-full border-2 border-[#5e4d45]">
                    <div className="flex items-center justify-center 
              w-25 h-35 rounded-full border-2 border-[#5e4d45]">
                        <span className="text-4xl heading text-primary">EJ</span>
                    </div>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.3] text-primary">
                    Cozy homes designed to be lived in and loved.
                </h1>

                <p className="subheading">
                    Taiyaki irony stumptown bespoke, normcore cold-pressed man bun portland tilde blackbird spyplane organic VHS jean shorts. Man braid bruh portland gentrify, try-hard jianbing pabst.
                </p>
                <a href="#" className="underline underline-offset-[10px] text-primary">
                    SEE THE WORK
                </a>
            </div >

        </section >

    )
}