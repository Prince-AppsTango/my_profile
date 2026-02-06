import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

// Data can be moved to a separate file later if it grows
const experiences = [
    {
        role: "Senior App + Front-End Developer",
        company: "Ogma It Conceptions Pvt Ltd",
        period: "01/2022 - Present",
        description: "Started as a Junior Developer and rapidly progressed to a Senior role due to consistent high performance. Leading the development of complex cross-platform mobile apps (React Native/Flutter) and modern web frontends. Mentoring junior developers and architecting scalable solutions."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-zinc-900/30">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-zinc-800 hover:border-primary transition-colors"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-primary" />
                            <div className="mb-1 flex items-center gap-2 text-primary text-sm font-semibold">
                                <Briefcase size={16} />
                                {exp.period}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-zinc-500 mb-4">{exp.company}</p>
                            <p className="text-zinc-400 leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
