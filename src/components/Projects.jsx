import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Sanjeevani",
        description: "Specialized Android application for hospital operations. Features appointment scheduling, multichannel consultations (chat/video), and live sessions with doctors.",
        tags: ["React Native", "Redux", "Agora", "Socket.io", "Firebase"],
        link: "#",
        github: "#"
    },
    {
        title: "Event Management",
        description: "Comprehensive Android app for event planning and staff management. Manage weddings/parties, assign tasks, and handle salary disbursements.",
        tags: ["React Native", "Redux", "Redux-Saga"],
        link: "#",
        github: "#"
    },
    {
        title: "Observate",
        description: "Innovative iOS app for menstrual cycle tracking with social login. Generates Google Calendar events and provides mood insights.",
        tags: ["React Native", "Redux", "Firebase", "Calendar API"],
        link: "#",
        github: "#"
    },
    {
        title: "Snappi",
        description: "Uber-like taxi booking app for Android & iOS. Features real-time tracking, diverse vehicle options, and seamless payments.",
        tags: ["React Native", "Socket.io", "Redux Toolkit", "Firebase"],
        link: "#",
        github: "#"
    },
    {
        title: "Simplify You",
        description: "Livestream platform for beauty parlours. Admins create courses/streams with monetization options and Apple Pay integration.",
        tags: ["React Native", "Agora", "In-App Purchase", "Redux Toolkit"],
        link: "#",
        github: "#"
    },
    {
        title: "Upadr",
        description: "User-centric medical procedure management app. Features secure auth (Cognito), step-by-step guides, and accessibility options.",
        tags: ["React Native", "Amplify Cognito", "Redux-Saga"],
        link: "#",
        github: "#"
    },
    {
        title: "Botrich App",
        description: "Social platform for professionals. Features feeds, events, and real-time chat with multilingual support (English/Chinese).",
        tags: ["React Native", "Socket.io", "Redux-Saga", "Multilingual"],
        link: "#",
        github: "#"
    },
    {
        title: "Botrich Web",
        description: "A comprehensive web version of the Botrich social platform. built with Next.js for SSR, ensuring seamless synchronization with the mobile app via Socket.io.",
        tags: ["Next.js", "Socket.io", "Redux-Saga", "Tailwind CSS"],
        link: "#",
        github: "#"
    },
    {
        title: "Upadr Admin",
        description: "Powerful web admin panel for Upadr. Manage users, procedures, FAQs, and surveys with infinite scroll and robust state management.",
        tags: ["React", "Redux Toolkit", "Axios"],
        link: "#",
        github: "#"
    },
    {
        title: "Upadr-Clone",
        description: "Native Android app using Kotlin and Jetpack Compose. Implements MVVM architecture, Retrofit for APIs, and Hilt for dependency injection.",
        tags: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt"],
        link: "#",
        github: "#"
    },
    {
        title: "IconCal",
        description: "Cross-platform calendar app with icon-based event creation. Syncs with Google/iOS Calendar and offers premium subscriptions.",
        tags: ["Flutter", "Dart", "SQLite", "RevenueCat"],
        link: "#",
        github: "#"
    },
    {
        title: "OneWord",
        description: "Android notification management app. Captures notifications, offers background sync, and includes user authentication with OTP.",
        tags: ["Kotlin", "Jetpack Compose", "Room DB", "WorkManager"],
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
                        An extensive collection of mobile and web applications I've engineered.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all group"
                        >
                            {/* Image Placeholder */}
                            <div className="h-40 bg-zinc-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                                <div className="w-full h-full bg-zinc-700/50 flex items-center justify-center text-zinc-500 group-hover:scale-105 transition-transform duration-500">
                                    {project.title}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4 line-clamp-3" title={project.description}>
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
