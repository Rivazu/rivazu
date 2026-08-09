export type TimelineEntry = {
    start_date: number;
    end_date?: number | null;
    job_title: string;
    org?: string;
    link?: string;
    body: string;
}

export const timeline: TimelineEntry[] = [
    {
        start_date: 2018,
        end_date: null,
        job_title: "Croupier",
        org: "Holland Casino",
        link: "https://www.hollandcasino.nl",
        body: "After dropping out of college after 2.5 years of studying Communications, I had no clue what I wanted to do next. I couldn't sit on my ass and do nothing however, so I decided to take a job at Holland Casino. ",
    },
    {
        start_date: 2020,
        end_date: 2022,
        job_title: "Bol.com & general e-commerce adventure",
        org: "Rivazu",
        link: undefined,
        body: "During the pandemic I started to think about doing something other than working at the casino, as I knew I didn't want to work there for the rest of my life. Still, I had no idea what I really wanted to do, but I knew, if I ever wanted to be able to own a home in the Netherlands, I had to do something else. This prompted me to try my hand at e-commerce. I had heard from friends that this was a real way to start earning your own money, so I decided to give it a try and worked at it for about 2 years."
    },
    {
        start_date: 2023,
        end_date: 2025,
        job_title: "IT odd jobs",
        org: "Rivazu",
        link: undefined,
        body: "As I was working on my bol.com business, it was around this time that one of the earlier GPT models was released. At first I used it to help me generate product descriptions for my listings on Bol, but a while later I was doing things completely unrelated to e-commerce. I started toying with building websites on Webflow, building automations in Make.com for the sake of learning and just using LLMs to build up my knowledge and explore my curiosities.\n\n The highlight of this period was a chatbot I built for my friends' Med Spa. Combining both Make.com and a chatbot builder called Voiceflow, I was able to build a chatbot for their website that did three things: \n1. Answer questions related to their services and products \n 2. Walk people through a sort of pre-consult flow \n 3. Book appointments \n\nA few lessons that stood out here were: \n1. Getting familiar with the concept of knowledge bases, context windows and prompt engineering \n2. Learning about RAG, vector databases, what embeddings are and how to build a RAG pipeline (albeit on a very small scale) \n3. Learning how to use LLMs to build anything. \n\n It was also during this time I started getting serious about my ambitions to learn more about programming, and thus I started with a Python course on Replit.",
    },
    {
        start_date: 2025,
        end_date: null,
        job_title: "Developer",
        org: "Optimeister",
        link: "https://www.optimeister.com",
        body: "After doing all sorts of odd jobs, all while working at the casino and just expanding my knowledge of computers. I got in touch with someone I went to highschool with who had started a no-/low-code company called Optimeister. He was looking for a developer and got to know I had worked with Make.com and Airtable before, so he offered me to come by, bring my laptop and show him what I had worked on. I did this and the same night he told me he wanted to offer me a job.\n During my time at Optimeister I have designed and developed the following systems: \n1. An application management & finance system for a Dutch NGO \n2. A project management system for one of the biggest Dutch companies involved in education, the highlight being a synchronization engine between Airtable and 2 Exact online divisions \n 3. Led a complete overhaul of a Dutch/American mattress manufacturer's internal system of record, including a mobile app for their sales department with which they could get from lead to quote within a minute. \n 4. Worked on a project for one of the world's biggest marketing companies, helping them rollout proprietary software for Fortune500 companies to help with media buying."
    },
]