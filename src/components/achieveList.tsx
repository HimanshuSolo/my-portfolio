import { HoverEffect } from "@/components/ui/card-hover-effect"

export function CardHoverEffectDemo() {
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
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
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
      "Secured a Rank of 2511 out of 25000+ Participants",
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
