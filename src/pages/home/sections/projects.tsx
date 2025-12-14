
import ResponsiveSlider from "@/src/components/responsive-slider";

export default function Projects() {
    const slides = [
        {
            id: 1,
            src: "/images/project-1.jpg",
            title: "Modern Interior",
            alt: "Modern Interior",
            link: "#",
        },
        {
            id: 2,
            src: "/images/project-2.jpg",
            title: "Elegant Style",
            alt: "Elegant Style",
            link: "#",
        },
        {
            id: 3,
            src: "/images/project-3.jpg",
            title: "Luxury Themes",
            alt: "Luxury Themes",
            link: "#",
        },
    ];

    return (
        <section className="w-full h-[50vh] md:h-[100vh] flex items-center justify-center bg-[#efe8e2]">
            <ResponsiveSlider slides={slides}/>
        </section>
    )
}