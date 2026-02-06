import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
                        <span className="text-primary text-sm font-medium tracking-wide">Available for Work</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Building Digital <br />
                        <span className="text-gradient">Experiences</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                        I'm Prince Kumar Yadav, a Full Stack Developer specializing in building exceptional digital products with React, React Native, and Flutter.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button href="#projects" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            View My Work <ArrowRight size={18} />
                        </Button>
                        <Button variant="outline" onClick={() => window.open('/cv.pdf', '_blank')}>
                            Download CV <Download size={18} />
                        </Button>
                    </div>
                </motion.div>

                {/* Visual/Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Abstract Shapes/Mockup Placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl rotate-6 opacity-20 blur-xl"></div>
                        <div className="absolute inset-0 bg-zinc-900 rounded-2xl border border-white/10 p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="h-full w-full rounded-lg bg-zinc-800/50 flex flex-col gap-4 p-4">
                                {/* Code Snippet/Visual */}
                                <div className="w-full h-8 bg-zinc-700/50 rounded-md animate-pulse"></div>
                                <div className="w-3/4 h-8 bg-zinc-700/50 rounded-md animate-pulse delay-75"></div>
                                <div className="w-full h-32 bg-zinc-700/50 rounded-md mt-4"></div>
                                <div className="mt-auto flex gap-2">
                                    <div className="w-10 h-10 rounded-full bg-primary/50"></div>
                                    <div className="w-10 h-10 rounded-full bg-secondary/50"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
