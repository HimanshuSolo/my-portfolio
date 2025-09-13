import { TextGenerateEffectDemo } from "./TextGenerateEffect"
import TextType from "@/TextAnimations/TextType/TextType";

export default function Example() {
    return (
        <div className="relative bg-white">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-1/2 aspect-[1155/678] w-[72rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[100rem]"
                />
            </div>

            <div className="relative isolate px-6 pt-20 pb-32 lg:px-8 lg:pt-32">
                <div className="flex justify-center mb-12">
                    <div className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 hover:ring-purple-300 transition">
                        My Resume{' '}
                        <a
                            href="https://drive.google.com/file/d/1bZQov2p7FEoFg6r7OAeLDQKRi0RjqjE_/view?usp=sharing"
                            className="text-indigo-600 hover:text-indigo-700 font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Here →
                        </a>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-16 px-4 lg:px-0">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-tight">

                            <TextType
                                text={["Hello, I'm Himanshu", "A 3rd Year BTech Student", "Full-stack developer"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            I love building intuitive, high-performance websites and applications using modern
                            technologies like <span className="text-purple-600 font-medium">Next.js</span> and{' '}
                            <span className="text-purple-600 font-medium">Node.js</span>. I thrive on solving real-world problems with elegant code. Love solving Data Structures and Algorithms problems.
                        </p>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            Im my free time, I enjoy exploring new technologies and contributing to open-source projects.
                        </p>
                        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                            I also like exploring world of AI and machine learning.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                            <a
                                href="projects"
                                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 transition"
                            >
                                My Projects
                            </a>
                            <a
                                href="contact"
                                className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition"
                            >
                                Contact Me →
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src="/portfoliophoto.jpg"
                            alt="Himanshu Profile"
                            className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-purple-200 shadow-lg hover:shadow-xl transition duration-300"
                        />
                    </div>
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-1/2 aspect-[1155/678] w-[72rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[100rem]"
                />
            </div>
        </div>
    );
}
