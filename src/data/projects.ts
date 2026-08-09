export type Project = {
    name: string;
    description: string;
    links?: { label: string; href: string }[];
    tech_stack?: Array<string>;
};

export const projects: Project[] = [
    {
        name: "BestPeptide Info",
        description: "Built a peptide directory website. My first real project that I did fully in code without using any no-/low-code tools. It is a simple directorywebsite that allows users to search for peptides by name, look at their properties and see which stores sell them.",
        links: [{ label: "BestPeptide Info", href: "https://bestpeptide.info" }],
        tech_stack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Supabase", "Prisma", "Vercel", "Bun"],
    },
];