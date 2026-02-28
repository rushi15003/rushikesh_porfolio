import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Experience", link: "#experience" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Research", link: "#research" },
        { name: "Certifications", link: "#certifications" },
        { name: "Contact", link: "#contact" },
    ];

    const resumes = [
        {
            name: 'Rushikesh Sutar',
            file: 'https://drive.google.com/file/d/1cv1fCU0pC-d_qFkG_uy-K5OXGcowxrcB/view?usp=sharing',
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, link) => {
        e.preventDefault();
        const element = document.querySelector(link);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-bg-section/90 backdrop-blur-lg shadow-lg'
                    : 'bg-transparent'
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center space-x-2">
                        <span className="text-2xl font-bold gradient-text">Rushikesh Sutar</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={(e) => scrollToSection(e, item.link)}
                                className="text-text-body hover:text-accent-primary transition-colors duration-200 text-sm font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Right side buttons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Resume dropdown */}
                        <div className="relative">
                            <motion.button
                                onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
                                className="flex items-center space-x-2 px-4 py-2 bg-accent-primary text-bg-lightest rounded-lg transition-all hover:bg-accent-primary-hover"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-4 h-4" />
                                <span className="text-sm font-medium">Resume</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isResumeDropdownOpen ? 'rotate-180' : ''}`} />
                            </motion.button>

                            {/* Dropdown menu */}
                            <AnimatePresence>
                                {isResumeDropdownOpen && (
                                    <motion.div
                                        className="absolute right-0 mt-2 w-48 bg-bg-section/95 backdrop-blur-lg rounded-lg shadow-lg border border-surface-card/40 overflow-hidden"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {resumes.map((resume, index) => (
                                            <a
                                                key={index}
                                                href={resume.file}
                                                download
                                                onClick={() => setIsResumeDropdownOpen(false)}
                                                className="block px-4 py-3 text-text-heading hover:bg-accent-soft/20 hover:text-accent-primary transition-colors text-sm font-medium border-b border-surface-card/20 last:border-b-0"
                                            >
                                                {resume.name}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-surface-card/30 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-text-heading" />
                        ) : (
                            <Menu className="w-6 h-6 text-text-heading" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-bg-section/95 backdrop-blur-lg border-t border-surface-card/30"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.link}
                                    onClick={(e) => scrollToSection(e, item.link)}
                                    className="block text-text-body hover:text-accent-primary transition-colors duration-200 text-base font-medium"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            {/* Mobile Resume Section */}
                            <div className="pt-4 border-t border-surface-card/30 space-y-2">
                                <p className="text-text-muted text-sm font-medium mb-2">Download Resumes:</p>
                                {resumes.map((resume, index) => (
                                    <a
                                        key={index}
                                        href={resume.file}
                                        download
                                        className="flex items-center space-x-2 px-4 py-2 bg-accent-soft/20 text-accent-primary rounded-lg hover:bg-accent-soft/30 transition-all"
                                    >
                                        <Download className="w-4 h-4" />
                                        <span className="text-sm font-medium">{resume.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
