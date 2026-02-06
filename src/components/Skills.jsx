import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Mobile Dev", items: ["React Native", "Flutter", "Android (Kotlin)", "iOS"] },
    { category: "Frontend", items: ["React.js", "Redux", "Redux-Saga", "Tailwind CSS"] },
    { category: "Backend & tools", items: ["Node.js", "Firebase", "Socket.io", "Git"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Expertise</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        A comprehensive toolset for building scalable, cross-platform applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-white border-b border-zinc-800 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 border border-zinc-700 hover:border-primary hover:text-white transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
