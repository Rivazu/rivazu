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
        end_date: 2026,
        job_title: "Croupier",
        org: "Holland Casino",
        link: "https://www.hollandcasino.nl",
        body: "After dropping out of college after 2.5 years of studying, I had no clue what I wanted to do or what I was interested in. Eventually worked here for almost 9 years.",
    },
    {
        start_date: 2020,
        end_date: 2022,
        job_title: "Bol.com & general e-commerce adventure",
        org: "Rivazu",
        link: undefined,
        body: "During the pandemic I started to think about doing something other than working at the casino, as I knew I didn't want to work there for the rest of my life. Still, having no idea what I really wanted to do, I knew I had to do something else if I ever wanted to own a home. This prompted me to try my hand at e-commerce, starting with importing products from China and selling them on Bol.com. This led eventually to also selling items on Shopify. While this didn't work out directly, it did lead me to finally knowing that I was interested in, building digital systems."
    },
    {
        start_date: 2023,
        end_date: 2025,
        job_title: "First steps in IT",
        org: "Rivazu",
        link: undefined,
        body: "As I was working on my bol.com business, it was around this time that one of the earlier GPT models was released. At first I used it to help me generate product descriptions for my listings on Bol, but a while later I was doing things completely unrelated to e-commerce. I started toying with building websites on Webflow, building automations in Make.com for the sake of learning and just using LLMs to teach myself about computers.\n\n The highlight of this period was a <a href=\"/projects/consultbot\">chatbot</a> I built for my friends' Med Spa. \n\n It was also during this time I started getting serious about my ambitions to learn more about programming, and thus I started with a Python course on Replit.",
    },
    {
        start_date: 2025,
        end_date: null,
        job_title: "Developer",
        org: "Optimeister",
        link: "https://www.optimeister.com",
        body: "After doing all sorts of odd jobs, all while working at the casino and just expanding my knowledge of computers. Eventually I landed a job at Optimeister as a no-/low-code developer. \n\n During my time at Optimeister, where I have designed and developed internal company applications, these have been the <b>highlights</b> so far: \n1. An application management, assessment & finance system for a Dutch NGO \n2. A project management system for one of the biggest Dutch companies involved in education, the highlight being a synchronization engine between Airtable and 2 Exact online divisions \n 3. Led a complete overhaul of a Dutch/American mattress manufacturer's internal system of record, including a mobile app for their sales department with which they could get from lead to quote within a minute. \n 4. Worked on a project for one of the world's biggest marketing companies, helping them rollout an Airtable-based system for Fortune500 companies to help with media buying."
    },
]