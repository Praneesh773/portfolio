"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { X, ExternalLink, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa"; // Using React Icons Github

type Project = {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    date: string;
    github?: string;
    demo?: string;
    teamMembers?: string[];
};

const projects: Project[] = [
    {
        id: 1,
        title: "Centralized Blood Bank Network Hub",
        description: "Integrated platform for hospitals, blood banks, and donors with stock management.",
        longDescription: "A comprehensive solution connecting hospitals, blood banks, receivers, and donors. Features include FIFO Stock management, an integrated chatbot for queries, and an emergency call feature to streamline critical communication during blood requirements.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        date: "July 2025 - December 2025",
        github: "https://github.com/Praneesh773/Blood",
        demo: "https://bloodbank-g10h.onrender.com/",
        teamMembers: ["Praneesh C", "Prateeksha GK", "Obupreethi G", "Megha EG"]
    },
    {
        id: 2,
        title: "Senior Citizen Support Portal",
        description: "All-in-one platform for senior citizens including medical and grocery services.",
        longDescription: "Developed a platform offering doctor appointments, grocery delivery, and other essential features tailored for senior citizens. Includes Face Login models for ease of access.",
        techStack: ["MERN Stack", "FaceModels"],
        date: "March 2025 - July 2025",
        github: "https://github.com/preethi123455/seniorcitizenportal",
        demo: "https://senior-citizen-portal-frontend.onrender.com",
        teamMembers: ["Praneesh C", "Prateeksha GK", "Obupreethi G", "Prajit Pranav K"]
    },
    {
        id: 3,
        title: "Blog Website",
        description: "MERN blog platform with like, comment, save, and full CRUD features.",
        longDescription: "Developed a blog website where users can view others' blogs, like or unlike posts, comment and delete comments, and save or unsave blogs. Users can also add their own blogs and edit or delete them.",
        techStack: ["MERN"],
        date: "Dec 2025",
        github: "https://github.com/Praneesh773/Blog",
        demo: "#",
        teamMembers: ["Praneesh C"]
    },
    {
        id: 4,
        title: "Juice Selling Platform",
        description: "Sales platform for PulpBae juice products with social media ad support.",
        longDescription: "Building a platform for selling orange juice, coconut water, and lime juice in selected areas for the PulpBae company. Also created ad creatives for social media publishing across Instagram, Facebook, and other platforms.",
        techStack: ["MERN", "Canva (Ads)"],
        date: "Ongoing",
        github: "#",
        demo: "#",
        teamMembers: ["Praneesh C"]
    },
    {
        id: 5,
        title: "Integrated Camera View Portal",
        description: "Cloud-based camera streaming portal for multi-location monitoring.",
        longDescription: "Currently working on a project where cameras from 5 different locations are connected to the cloud and streamed to a centralized public portal. Allows real-time viewing accessibility.",
        techStack: ["HTML", "Python", "Cloud"],
        date: "November 2025 - Ongoing",
        github: "#",
        demo: "#",
        teamMembers: ["Praneesh C", "Mothi Balaaji V"]
    }
];

// 3D Tilt Card Component
function TiltCard({ children, onClick, layoutId }: { children: React.ReactNode; onClick: () => void; layoutId: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 30 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            layoutId={layoutId}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative h-full perspective-1000"
        >
            <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col transform-gpu">
                {children}
            </div>
        </motion.div>
    );
}

// ... existing projects array ...

export default function Projects() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const selectedProject = projects.find(p => p.id === selectedId);

    return (
        <section id="projects" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work in web development and software engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <TiltCard
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <Code className="size-6" />
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <div className="p-2 bg-gray-100 rounded-full text-foreground hover:bg-gray-200 transition-colors" title="View Source">
                                                <FaGithub className="size-4" />
                                            </div>
                                        )}
                                        <span className="text-xs font-medium text-muted-foreground border border-border px-2 py-1 rounded-full flex items-center">
                                            {project.date}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-xs bg-muted text-foreground px-2 py-1 rounded-md">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-colors"
                                onClick={() => setSelectedId(null)}
                            />
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                                <motion.div
                                    layoutId={`card-${selectedId}`}
                                    className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
                                >
                                    <div className="relative p-6 md:p-8">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                            className="absolute top-4 right-4 p-2 bg-muted rounded-full hover:bg-muted-foreground/20 transition-colors"
                                        >
                                            <X className="size-5" />
                                        </button>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{selectedProject.title}</h3>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {selectedProject.techStack.map(tech => (
                                                <span key={tech} className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {selectedProject.teamMembers && (
                                            <div className="mb-6">
                                                <h4 className="text-sm font-semibold text-foreground mb-2">Team Members:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProject.teamMembers.map((member, index) => (
                                                        <span key={index} className="text-xs font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                                                            {member}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div className="prose prose-sm max-w-none text-muted-foreground mb-8">
                                            <p>{selectedProject.longDescription}</p>
                                        </div>

                                        <div className="flex gap-4">
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 inline-flex items-center justify-center h-12 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors gap-2"
                                            >
                                                <FaGithub className="size-5" />
                                                View Source
                                            </a>
                                            <a
                                                href={selectedProject.demo || "#"}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 inline-flex items-center justify-center h-12 rounded-lg border border-border bg-white text-foreground font-medium hover:bg-gray-50 transition-colors gap-2"
                                            >
                                                <ExternalLink className="size-5" />
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
