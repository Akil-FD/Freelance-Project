import Blog from "./sections/blog";
import Contact from "./sections/contact";
import Hero from "./sections/hero";
import Intro from "./sections/intro";
import PersonalStory from "./sections/personal-story";
import Projects from "./sections/projects";
import Service from "./sections/service";
import Testimonial from "./sections/testimonial";


export default function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <Service />
            <PersonalStory />
            <Testimonial />
            <Projects />
            <Blog />
            <Contact />

        </>
    )
}
