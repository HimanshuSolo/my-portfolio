"use client";
import { FaGithubSquare } from "react-icons/fa";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "Newzy World",
    description:
      "A modern news aggregation and summarization platform powered by AI.",
    image: "/newzy.png",
    github: "https://github.com/HimanshuSolo2005/newzy-world",
    live: "https://newz-aggregator-summarizer.vercel.app/",
  },
  {
    title: "Healthify",
    description:
      "Symptom-based disease prediction and treatment recommendations.",
    image: "/healthify.png",
    github: "https://github.com/HimanshuSolo2005/healthify",
    live: "https://healthify-9cw5.onrender.com/",
  },
  {
    title: "Forever",
    description:
      "A modern fully-fledged E-Commerce Website with Admin Dashboard",
    image: "/forever.png",
    github: "https://github.com/HimanshuSolo2005/ecommerce-app",
    live: "https://github.com/HimanshuSolo2005/ecommerce-app",
  },
  {
    title: "Shortsgram",
    description:
      "A video uploading platform like Instagram Reels and YouTube Shorts.",
    image: "/shorts.png",
    github: "https://github.com/HimanshuSolo2005/shortsgram",
    live: "https://shortsgram.netlify.app/",
  },
  {
    title: "SpendSavvy",
    description:
      "Helps users track and visualize personal financial transactions.",
    image: "/spendsavvy.png",
    github: "https://github.com/HimanshuSolo2005/SpendSavvy",
    live: "https://personal-finance-app-nine.vercel.app/",
  },
]

export function ThreeDCardDemo() {
  return (
    <div className="bg-white">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 px-4 md:px-8 py-10 items-stretch">
          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="h-full flex flex-col justify-between bg-gray-50 dark:bg-black dark:border-white/[0.2] border border-black/[0.1] rounded-xl p-6 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project.image}
                    alt="Project Screenshot"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <FaGithubSquare className="text-4xl" />
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    onClick={() => window.open(project.live, "_blank")}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
                  >
                    Live
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
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
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
