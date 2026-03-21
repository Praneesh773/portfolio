"use client";

import { motion } from "framer-motion";
import {
    FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skillCategories = [
    {
        title: "Languages",
        skills: [
            { name: "C", icon: null, color: "#A8B9CC", level: "Intermediate" },
            { name: "Java", icon: FaJava, color: "#007396", level: "Advanced" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: "Advanced" },
        ],
    },
    {
        title: "Web Technologies",
        skills: [
            { name: "HTML", icon: FaHtml5, color: "#E34F26", level: "Advanced" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6", level: "Advanced" },
            { name: "React.js", icon: FaReact, color: "#61DAFB", level: "Advanced" },
            { name: "Node.js", icon: FaNodeJs, color: "#339933", level: "Intermediate" },
            { name: "Express.js", icon: SiExpress, color: "#000000", level: "Intermediate" },
        ],
    },
    {
        title: "Databases",
        skills: [
            { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Intermediate" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technical Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive list of the technologies and tools I work with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-primary border-b border-gray-100 pb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="relative group">
                                        <div
                                            className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-help"
                                        >
                                            {skill.icon ? (
                                                <skill.icon className="size-5" style={{ color: skill.color }} />
                                            ) : (
                                                <div className="w-5 h-5 flex items-center justify-center font-bold text-xs bg-gray-200 rounded-full text-gray-600">
                                                    {skill.name[0]}
                                                </div>
                                            )}
                                            <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                                            {skill.level}
                                            {/* Little Triangle */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
