import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Snappi",
        description: "An Uber-like taxi booking app with real-time tracking, diverse vehicle options, and seamless payments.",
        tags: ["React Native", "Redux", "Socket.io", "Firebase"],
        link: "#",
        github: "#"
    },
    {
        title: "Upadr",
        description: "Medical procedure management app with secure auth, step-by-step guides, and accessibility features.",
        tags: ["React Native", "Cognito", "Redux-Saga"],
        link: "#",
        github: "#"
    },
    {
        title: "Botrich",
        description: "Social platform with feeds, events, and real-time chat supporting multiple languages.",
        tags: ["React Native", "Socket.io", "Multilingual"],
        link: "#",
        github: "#"
    },
    {
        title: "IconCal",
        description: "Cross-platform calendar app with icon-based event management and calendar sync.",
        tags: ["Flutter", "Dart", "SQLite", "RevenueCat"],
        link: "#",
        github: "#"
    },
    {
        title: "Simplify You",
        description: "Livestream platform for beauty parlours with monetization and in-app purchases.",
        tags: ["React Native", "Agora", "IAP"],
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        A selection of mobile and web applications I've built.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all group"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                                <div className="w-full h-full bg-zinc-700/50 flex items-center justify-center text-zinc-500 group-hover:scale-105 transition-transform duration-500">
                                    {project.title} Preview
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-zinc-800 text-primary border border-zinc-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <Button variant="outline" className="text-xs px-4 py-2 w-full">
                                        Details
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
