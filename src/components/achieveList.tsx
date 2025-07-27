import { HoverEffect } from "@/components/ui/card-hover-effect"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Competetive Programming",
    description:
      "1626 Rating(Max) on Leetcode , 1325 Rating(max. pupil) on Codeforces, 1522 Rating(Max) on CodeChef",
    link: "https://codolio.com/profile/himanshu_solo",
  },
  {
    title: "Order Capital Round 1 hosted by Codeforces",
    description:
      "Secured a Rank of 2551 out of 25000+ Participants",
    link: "https://drive.google.com/file/d/139a15IZUTwnoXNYz5ZO8sV3geZC7pFGW/view?usp=sharing",
  },
  {
    title: "CodeNite 2025 hosted by Codeforces",
    description:
      "Secure a Rank of 5185 out of 28000+ Participants",
    link: "https://drive.google.com/file/d/117gbUxPSeu1Emr-ebG4rK68XTIutXKmP/view?usp=sharing",
  },
  {
    title: "Hackathon",
    description:
      "Finished under Top 20 Team at Zenith, Hackathon organized by 'Manan : A Techno Surge' at JCBUST",
    link: "https://drive.google.com/file/d/1KZ1NFX75s7acZc_gzwRHUNXvKlPNeNB3/view?usp=sharing",
  },
  {
    title: "Deloitte Australia Technology Job Simulation on Forage - June 2025",
    description:
      "Completed a job simulation involving development and coding and Wrote a proposal for creating a dashboard",
    link: "https://drive.google.com/file/d/1S8awwd129laupgmB-BX_YjOpiqcnCVtX/view?usp=sharing",
  },
  {
    title: "Samsung Solve for Tomorrow",
    description:
      "Certificate of Participation in Samsung Solve for Tomorrow 2025 : ",
    link: "https://drive.google.com/file/d/1d-CKcaMpMQhfXNE6B_5_nqszfdW9Hf8W/view?usp=sharing",
  },
];
