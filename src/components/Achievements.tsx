"use client";

import { motion } from "framer-motion";
import { Trophy, Image as ImageIcon, FileText } from "lucide-react";
import Image from "next/image";

export default function HallOfFame() {
    return (
        <section id="hall-of-fame" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Hall of Fame</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Recognitions, Certifications, and Proof of Work.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Hackathon Wins */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                            <Trophy className="size-6 text-yellow-500" /> Hackathons
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 bg-muted/30 rounded-xl border border-border/50 group"
                            >
                                <h3 className="text-xl font-bold text-foreground">2nd Prize - HACKON'2.0</h3>
                                <p className="text-muted-foreground mb-4">Mohandas Engineering College, Trivandrum.</p>

                                {/* Placeholder for Photo */}
                                <div className="h-48 w-full relative rounded-lg overflow-hidden group-hover:shadow-md transition-shadow">
                                    <Image
                                        src="/achievements/hackon.jpeg"
                                        alt="Hackon Win"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-6 bg-muted/30 rounded-xl border border-border/50 group"
                            >
                                <h3 className="text-xl font-bold text-foreground">2nd Prize - KEC Hackathon</h3>
                                <p className="text-muted-foreground mb-4">Kongu Engineering College, Erode.</p>

                                {/* Placeholder for Photo */}
                                <div className="h-48 w-full relative rounded-lg overflow-hidden group-hover:shadow-md transition-shadow">
                                    <Image
                                        src="/achievements/kec.jpeg"
                                        alt="KEC Win"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                            <FileText className="size-6 text-blue-500" /> Certifications
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* MongoDB Certificate */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">MongoDB Certified Associate Developer</h3>
                                    <p className="text-muted-foreground mt-1 text-sm">Issued: 2025</p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <a
                                        href="/certificates/mongo-cert.pdf"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <FileText className="size-4" />
                                        View Credential
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
