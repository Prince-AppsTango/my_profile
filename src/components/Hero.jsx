import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight, Download, Code, Smartphone, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Dynamic Background Animation */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] bg-secondary/20 rounded-full blur-[100px]"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-zinc-300 text-sm font-medium tracking-wide">Available for New Projects</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Senior <span className="text-gradient">App & Frontend</span> Developer
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                        Transforming complex requirements into seamless digital experiences. Specializing in high-performance React Native, Flutter, and Modern Web Applications.
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

                {/* Abstract Animated Visualization (No Image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        {/* Spinning Rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-zinc-800 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border border-zinc-800 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-12 border border-zinc-700/50 rounded-full"
                        />

                        {/* Floating Icons Card */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/20 z-10"
                        >
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <div className="p-3 bg-zinc-800 rounded-lg text-blue-400"><Code size={24} /></div>
                                <div className="p-3 bg-zinc-800 rounded-lg text-purple-400"><Smartphone size={24} /></div>
                                <div className="p-3 bg-zinc-800 rounded-lg text-yellow-400"><Zap size={24} /></div>
                                <div className="p-3 bg-zinc-800 rounded-lg text-green-400 font-bold text-xs flex items-center justify-center">EXP</div>
                            </div>
                        </motion.div>

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 bg-primary rounded-full blur-sm" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8"
                        >
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 w-4 h-4 bg-secondary rounded-full blur-md" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
