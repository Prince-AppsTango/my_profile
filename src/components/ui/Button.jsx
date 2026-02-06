import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => twMerge(clsx(inputs));

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: 'bg-primary hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/30',
        secondary: 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700',
        outline: 'bg-transparent border border-white/20 hover:bg-white/10 text-white',
        ghost: 'bg-transparent hover:bg-white/5 text-zinc-300 hover:text-white',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                'px-6 py-3 rounded-full font-medium transition-colors flex items-center justify-center gap-2 text-sm md:text-base',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
