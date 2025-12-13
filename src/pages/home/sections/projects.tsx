import Carousel from "@/src/components/image-caursol";

export default function Projects() {
    const slides = [
        {
            image: "/images/project-1.jpg",
            title: "Modern Interior",
            link: "#",
        },
        {
            image: "/images/project-2.jpg",
            title: "Elegant Style",
            link: "#",
        },
        {
            image: "/images/project-3.jpg",
            title: "Luxury Themes",
            link: "#",
        },
    ];
    
    return (
        <section className="w-full h-[80vh] md:h-[100vh] flex items-center justify-center bg-[#efe8e2]">
            <Carousel
                items={slides}
                isFullScreen
                titleClass="text-3xl md:text-3xl font-heading text-white uppercase"
                descriptionClass="text-lg text-white/90"
            />

        </section>
    )
}