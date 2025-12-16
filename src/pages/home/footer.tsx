'use client'

import Image from 'next/image'

const images = [
    'blog-1.jpg',
    'blog-2.jpg',
    'blog-3.jpg',
    'service-1.jpg',
    'service-2.jpg',
    'service-3.jpg',
    'project-1.jpg',
]
const socialMedia = [
    {
        name: 'Facebook',
        href: '#',
        iconClass: 'fab fa-facebook-f',
        svgPath: 'M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.6c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.4v7A10 10 0 0 0 22 12z'
    },
    {
        name: 'Twitter',
        href: '#',
        iconClass: 'fab fa-twitter',
        svgPath: 'M23 3a10.9 10.9 0 0 1-3.1.9A5.4 5.4 0 0 0 22.4 1a10.7 10.7 0 0 1-3.4 1.3A5.4 5.4 0 0 0 9.2 7.5 15.3 15.3 0 0 1 1.6 2a5.4 5.4 0 0 0 1.7 7.2A5.3 5.3 0 0 1 .9 8v.1a5.4 5.4 0 0 0 4.3 5.3 5.5 5.5 0 0 1-2.4.1 5.4 5.4 0 0 0 5 3.7A10.8 10.8 0 0 1 0 19.5a15.2 15.2 0 0 0 8.3 2.4c10 0 15.5-8.3 15.5-15.5v-.7A11 11 0 0 0 23 3z'
    },
    {
        name: 'Instagram',
        href: '#',
        iconClass: 'fab fa-instagram',
        svgPath: 'M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm4.8-9.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z'
    },
    {
        name: 'Pinterest',
        href: '#',
        iconClass: 'fab fa-pinterest',
        svgPath: 'M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 .1-2.9.3-.8 1.8-5.2 1.8-5.2s-.5-1-.5-2.4c0-2.2 1.3-3.8 2.9-3.8 1.4 0 2.1 1 2.1 2.3 0 1.4-.9 3.5-1.4 5.4-.4 1.6.8 2.9 2.3 2.9 2.7 0 4.8-2.8 4.8-6.9 0-3.6-2.6-6.1-6.3-6.1-4.3 0-6.8 3.2-6.8 6.6 0 1.3.5 2.7 1.1 3.5a.4.4 0 0 1 .1.4c-.1.4-.3 1.3-.4 1.5-.1.2-.2.3-.4.2-1.5-.7-2.5-2.9-2.5-4.7 0-3.8 2.8-7.3 8-7.3 4.2 0 7.5 3 7.5 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 3c-.3 1-.9 2.2-1.3 3A10 10 0 1 0 12 2z'
    }
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-10">
            <div className="max-w-6xl mx-auto px-6">


                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1 mb-10">
                    {images.map((img, index) => (
                        <div
                            key={img}
                            className="relative w-full h-24 overflow-hidden"
                        >
                            <Image
                                src={`/images/${img}`}
                                alt={`Gallery ${index + 1}`}
                                fill
                                className="object-cover"
                                priority// only first 2 load immediately
                            />
                        </div>
                    ))}
                </div>


                <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-10">

                    <ul className="space-y-2">
                        <li className="text-sm italic text-gray-400">menu</li>
                        {['Services', 'Portfolio', 'About', 'Contact', 'Blog', 'Inquire'].map(item => (
                            <li
                                key={item}
                                className="uppercase subheading hover:underline cursor-pointer"
                            >
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>


                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-18 h-25 rounded-full border-2 border-white mb-5">
                            <div className="flex items-center justify-center 
              w-15 h-22 rounded-full border-2 border-white">
                                <span className="text-4xl heading text-secondary">EJ</span>
                            </div>
                        </div>
                        <span className="font-bold tracking-widest">ELEANOR JEAN</span>
                        <span className="italic text-sm">interior design</span>
                    </div>

                    <div className="flex flex-col items-center gap-4">

                        <div className="flex flex-col items-center space-y-4 md:space-y-2 ">
                            <div className="flex space-x-4 text-white text-xl">
                                {socialMedia.map((social) => (
                                    <a key={social.name} href={social.href} className="hover:text-gray-300">
                                        <i className={social.iconClass}></i>
                                    </a>
                                ))}
                            </div>

                            <div className="flex items-center gap-5">

                                {socialMedia.map((social) => (
                                    <a key={social.name} href={social.href} className="text-white hover:opacity-70 transition">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                            <path d={social.svgPath} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            suppressHydrationWarning={true}
                            className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
                        >
                            Subscribe
                        </button>

                    </div>
                </div>
            </div>
        </footer>
    )
}
