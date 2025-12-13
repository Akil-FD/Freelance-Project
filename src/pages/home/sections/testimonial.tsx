import FeedbackSlider from "@/src/components/feedback-caursol"

export default function Testimonial() {
    const clientFeedBacks = [
        {
            id: 1,
            quotes: 'Our home went from being a place that caused me stress to being an absolute refuge. I never want to leave.'
        },
        {
            id: 2,
            quotes: 'Every room now feels intentional, inviting, and effortless to live in. It changed how we experience our home.'
        },
    ]

    return (
        <section className="w-full h-[80vh] md:h-[100vh] flex items-center justify-center bg-secondary">
            <div className="w-full flex flex-col justify-center items-center gap-15">
                <p className="text-xs sm:text-xl uppercase tracking-widest text-primary">
                    WHAT OUR CLIENTS ARE SAYING
                </p>

                <FeedbackSlider clientFeedBacks={clientFeedBacks} />

            </div>
        </section>

    )
}