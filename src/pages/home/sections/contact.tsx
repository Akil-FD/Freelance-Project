import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full h-[130vh] md:h-[100vh] flex items-center justify-center bg-secondary">
      <div className="w-[90%] sm:w-[80%] flex flex-col md:flex-row">
      
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <div className="relative w-[300px] h-[400px]">
            <Image
              src="/images/contact.jpg"
              alt="Contact section illustration"
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 300px, 300px"
              priority
            />
          </div>
        </div>

    
        <div className="w-full md:w-1/2 flex items-center justify-center personal-story-txt-sec-p">
          <div className="w-full flex flex-col gap-5">
            <p className="text-sm font-bold uppercase text-primary">
              Free download
            </p>

            <h1 className="heading text-4xl leading-[1.3] text-primary uppercase">
              Perfect Paint Color Guide
            </h1>

            <p className="subheading mt-2 text-primary">
              Struggling to pick paint colors for your home? Download our list of
              the best paint colors for your home. Soft, muted and pure perfection!.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mt-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:w-[50%] px-4 py-2 bg-white rounded sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="w-full sm:w-[50%] px-6 py-2 bg-primary text-white font-semibold hover:bg-gray-800 transition"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
