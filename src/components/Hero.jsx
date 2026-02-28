import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { BackgroundLines } from '@/components/ui/background-lines';

const Hero = () => {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <BackgroundLines className="min-h-screen flex items-center justify-center w-full bg-bg-lightest">
            {/* Content */}
            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Profile names */}
                <motion.div
                    className="flex items-center justify-center space-x-4 mb-6"
                    variants={itemVariants}
                >
                    <div className="flex items-center space-x-2">
                        <Code2 className="w-5 h-5 text-accent-soft" />
                        <span className="text-text-body text-sm font-medium">Rushikesh</span>
                    </div>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
                    variants={itemVariants}
                >
                    <span className="gradient-text">
                        Hi, I'm Rushikesh 
                    </span>
                    <br />
                    <span className="text-text-heading">
                        An AI Developer building intelligent systems.
                    </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-text-body max-w-3xl mx-auto mb-12 leading-relaxed"
                    variants={itemVariants}
                >
                        I design, train, and deploy AI-driven solutions that solve real-world problems.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    variants={itemVariants}
                >
                    <motion.button
                        onClick={scrollToProjects}
                        className="group flex items-center space-x-2 px-8 py-4 bg-accent-primary text-bg-lightest rounded-lg font-medium transition-all hover:bg-accent-primary-hover"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View Projects</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        onClick={scrollToContact}
                        className="flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-accent-soft text-accent-soft rounded-lg font-medium hover:bg-accent-soft hover:text-bg-lightest transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Contact Me</span>
                    </motion.button>
                </motion.div>
            </motion.div>
        </BackgroundLines>
    );
};

export default Hero;
