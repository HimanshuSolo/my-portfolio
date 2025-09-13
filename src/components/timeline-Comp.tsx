import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Button } from "./ui/button";

export function TimelineDemo() {
    const data = [
        {
            title: "June-2025",
            content: (
                <div>
                    <p className="mb-8 text-2xl font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
                        <div className="flex flex-col md:flex-col md:items-center md:justify-between gap-4 mb-4">
                            <span className="font-bold text-cyan-700">A modern news aggregation and summarization platform powered by AI.</span>
                            <div className="flex gap-4">
                                <a href="https://github.com/HimanshuSolo2005/newzy-world">
                                    <Button className="cursor-pointer">View Github</Button>
                                </a>
                                <a href="https://newz-aggregator-summarizer.vercel.app/">
                                    <Button className="cursor-pointer">View Live</Button>
                                </a>
                            </div>
                        </div>
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/news1.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="/news2.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="news3.png"
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div >
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}
