export type Project = {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    start_date: number;
    end_date?: number | null;
    links?: { label: string; href: string }[];
    tech_stack?: Array<string>;
    image?: string;
};

export const projects: Project[] = [
    {
        slug: "consultbot",
        name: "ConsultBot",
        tagline: "RAG chatbot for pre-consult advice and appointment booking.",
        description: `This chatbot could do three things:
1. Answer questions related to their services and products using RAG and a knowledge base
2. Walk people through a sort of pre-consult flow that ended with them receiving a personalized advice via email
3. Book appointments using the company's calendar API configured as a tool for the model.`,
        start_date: 2023,
        end_date: 2023,
        tech_stack: ["Make.com", "Voiceflow", "Stackai.com", "ChatGPT API", "Calendar API"],
    },
    {
        slug: "seo-content-generator",
        name: "SEO-optimized Content Generator",
        tagline: "Hub-and-spoke content pipeline from a company website URL.",
        description:
            "I created a content generation pipeline, starting from a company website URL to generate a company map, building out a hub & spoke content structure, to generating each individual content piece with different content types and crossposting to other channels.",
        start_date: 2024,
        end_date: 2025,
        image: "/projects/seo-content-generator.png",
        tech_stack: [
            "Make.com",
            "Airtable",
            "Claude API",
            "ChatGPT API",
            "DataForSEO",
            "Firecrawl",
            "Ideogram",
            "Google Workspace APIs",
        ],
    },
    {
        slug: "application-assessment-system",
        name: "Application & Assessment Management System",
        tagline: "NGO application intake, advisor assessment, and decision workflow.",
        description:
            "A system for managing applications for a Dutch NGO. It allows users to apply for a job, view the status of their application and receive a notification when their application is approved or rejected. The same system also allows management to assign advisors to the applications, which in turn assess the applications and report back to management. After assessments are done, management can then decide to go down different paths depending on the kind of support they want to provide.",
        start_date: 2025,
        end_date: null,
        tech_stack: ["Airtable"],
    },
    {
        slug: "crm-deal-invoice-system",
        name: "CRM, Deal & Invoice Management System",
        tagline: "Exact Online–synced CRM for clients, deals, and invoices.",
        description:
            "A CRM system for a Dutch company that sells study material to schools or other organizations. It allows users to manage their clients, products, deals and invoices in one system.\n It is completely synced with Exact Online, leveraging their /sync API endpoints. I created a sync engine that split loading data from Exact Online and writing to Airtable using watermarking and a queue. This way, the system could handle large amounts of data without running into Make.com's execution limits. From Exact to Airtable, I made use of Exact Online's watermarking feature to keep track of state. To sync from Airtable to Exact, I created a hashing mechanism to keep track of state within the Airtable base.",
        start_date: 2025,
        end_date: null,
        tech_stack: ["Make.com", "Airtable", "Exact Online", "PandaDoc"],
    },
    {
        slug: "bestpeptide-info",
        name: "BestPeptide Info",
        tagline: "Peptide directory with properties and store listings.",
        description:
            "Built a peptide directory website. My first real project that I did fully in code without using any no-/low-code tools. It is a simple directorywebsite that allows users to search for peptides by name, look at their properties and see which stores sell them.",
        start_date: 2026,
        end_date: null,
        image: "/projects/bestpeptide-info.png",
        links: [{ label: "BestPeptide Info", href: "https://bestpeptide.info" }],
        tech_stack: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Supabase",
            "Prisma",
            "Vercel",
            "Bun",
            "Stripe",
        ],
    },
    {
        slug: "fundament",
        name: "Fundament",
        tagline: "Performance-priced marketing for local service businesses.",
        description:
            "A marketing service for local service businesses that charges based on completed jobs if sourced by Fundament, instead of a monthly fee or pay per lead. Clients work via a mobile app and are able to receive calls, texts, quotation requests, and Instagram and Facebook DMs via a unified inbox. \n We build and manage their marketing channels to generate leads and convert them into jobs.",
        start_date: 2026,
        end_date: null,
        image: "/projects/fundament.png",
        links: [{ label: "Fundament", href: "https://fundament.so" }],
        tech_stack: [
            "Typescript",
            "Astro",
            `Cloudflare (R2, D1, KV, Workers, Workflows, Durable Objects, AI Gateway, AI SDK, Browser Run, Containers, etc.)`,
            "Stripe",
            "Alchemy",
            "Effect",
        ],
    },
];
