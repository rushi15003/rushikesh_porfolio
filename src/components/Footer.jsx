import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [

    ];

    return (
        <footer className="bg-bg-section border-t border-surface-card/30 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold gradient-text mb-2">Rushikesh Sutar</h3>
                        <p className="text-text-muted text-sm">
                            Building intelligent systems with AI & ML
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target={social.url.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg hover:bg-surface-card/30 transition-colors group"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5 text-text-body group-hover:text-accent-primary transition-colors" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-text-muted text-sm">
                            © {currentYear} Rushikesh Sutar. All rights reserved.
                        </p>
                        <p className="text-text-muted text-xs mt-1">
                            Built with React & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
