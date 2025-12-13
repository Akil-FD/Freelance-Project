import Carousel from "@/src/components/image-caursol";

export default function Blog() {
    const slides = [
        {
            image: "/images/blog-1.jpg",
            title: "How to Use Green in your Space",
            description: "Design Tips",
        },
        {
            image: "/images/blog-2.jpg",
            title: "10 Amazing Hacks for Keeping your Closet Tidy",
            description: "Organization",
        },
        {
            image: "/images/blog-3.jpg",
            title: "Should You Add a Double Island to your Kitchen",
            description: "Design",
        },
    ];

    return (
        <section className="w-full h-[100vh] md:h-[110vh] flex items-center justify-center bg-white">
            <div className="w-full flex flex-col justify-center items-center gap-5 my-30">
                <p className="text-xl italic text-primary">
                    Read the latest
                </p>

                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl leading-[1.3] drop-shadow-lg tracking-wide mb-4">
                    THE BLOG
                </h1>

                <Carousel
                    items={slides}
                    containerClass="max-w-7xl"
                    subContainerClass="custom-mx-30 md:custom-mx-50 gap-1 sm:gap-20"
                    imageContainerClass='sm:w-[300px] w-[85vw] mx-4'
                    imageClass="w-[300px] h-[300px] object-cover"
                    titleClass="text-2xl font-heading text-primary"
                    descriptionClass="text-base uppercase"
                    autoSlide={false}
                />
            </div>

        </section>
    )
}