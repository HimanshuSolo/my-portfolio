import { cn } from "@/lib/utils";
import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Competetive Programming",
      description:
        "1626 Rating(Max) on Leetcode , 1325 Rating(max. pupil) on Codeforces, 1522 Rating(Max) on CodeChef",
      icon: <IconTerminal2 />,
      link: "https://codolio.com/profile/himanshu_solo",
    },
    {
      title: "Order Capital Round 1 hosted by Codeforces",
      description:
        "Secured a Rank of 2511 out of 25000+ Participants",
      icon: <IconEaseInOut />,
      link: "https://drive.google.com/file/d/139a15IZUTwnoXNYz5ZO8sV3geZC7pFGW/view?usp=sharing",
    },
    {
      title: "CodeNite 2025 hosted by Codeforces",
      description:
        "Secure a Rank of 5185 out of 28000+ Participants",
      icon: <IconTerminal2 />,
      link: "https://drive.google.com/file/d/117gbUxPSeu1Emr-ebG4rK68XTIutXKmP/view?usp=sharing",
    },
    {
      title: "Hackathon",
      description:
        "Finished under Top 20 Team at Zenith, Hackathon organized by 'Manan : A Techno Surge' at JCBUST",
      icon: <IconCloud />,
      link: "https://drive.google.com/file/d/1KZ1NFX75s7acZc_gzwRHUNXvKlPNeNB3/view?usp=sharing",
    },
    {
      title: "Deloitte Australia Technology Job Simulation on Forage - June 2025",
      description:
        "Completed a job simulation involving development and coding and Wrote a proposal for creating a dashboard",
      icon: <IconRouteAltLeft />,
      link: "https://drive.google.com/file/d/1S8awwd129laupgmB-BX_YjOpiqcnCVtX/view?usp=sharing",
    },
    {
      title: "Samsung Solve for Tomorrow",
      description:
        "Certificate of Participation in Samsung Solve for Tomorrow 2025 : ",
      icon: <IconHeart />,
      link: "https://drive.google.com/file/d/1d-CKcaMpMQhfXNE6B_5_nqszfdW9Hf8W/view?usp=sharing",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  return (
    <a
      href={link}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 cursor-pointer hover:shadow-lg transition-shadow duration-200",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </a>
  );
};
