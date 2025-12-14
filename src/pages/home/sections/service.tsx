import Carousel from "@/src/components/image-caursol";



export default function Service() {
    const slides = [
        {
            id: 1,
            image: "/images/service-1.jpg",
            title: "New Builds",
            description: "01",
        },
        {
            id: 2,
            image: "/images/service-2.jpg",
            title: "Renovation",
            description: "02",
        },
        {
            id: 3,
            image: "/images/service-3.jpg",
            title: "Design Consults",
            description: "03",
        },
    ];

    return (
        <section className="w-full h-[100vh] sm:h-[100vh] flex items-center justify-center bg-secondary">
            <Carousel
                items={slides}
                containerClass="max-w-7xl"
                subContainerClass="custom-mx-30 md:custom-mx-50 gap-1 sm:gap-20"
                imageContainerClass="w-[85vw] sm:w-auto mx-4"
                imageClass="w-[300px] h-[400px] object-cover rounded-xl"
                titleClass="text-2xl font-heading text-primary uppercase text-center"
                descriptionClass="text-base text-center"
                autoSlide={false}
            />
        </section>
    )
}
