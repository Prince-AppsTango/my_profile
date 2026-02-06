import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from './ui/Button'; // reusing cn util

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold text-gradient"
                >
                    Prince<span className="text-white">.dev</span>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-4 ml-4"
                    >
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/prince-yadav-%F0%9F%92%BB-6384b7201/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                    </motion.div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-zinc-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-zinc-900 border-t border-zinc-800"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-zinc-400 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-4 pt-4 border-t border-zinc-800">
                                <a href="#" className="text-zinc-400 hover:text-white"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/prince-yadav-%F0%9F%92%BB-6384b7201/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white"><Linkedin size={20} /></a>
                                <a href="#" className="text-zinc-400 hover:text-white"><Mail size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
