import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
    const contactData = [
        {
            name: 'Rushikesh Sutar',
            contacts: [
                {
                    icon: Mail,
                    label: 'Email',
                    value: 'rushisutar15@gmail.com',
                    link: 'mailto:rushisutar15@gmail.com',
                },
                {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    value: 'Rushikesh Sutar',
                    link: 'https://www.linkedin.com/in/rushikesh-sutar-3717b7238/',
                },
                {
                    icon: Github,
                    label: 'GitHub',
                    value: '@rushikesh',
                    link: 'https://github.com/rushi15003',
                },
                {
                    icon: Phone,
                    label: 'Phone',
                    value: '+91-8767756335',
                    link: 'tel:8767756335',
                },
            ],
        },
    ];

    return (
        <div id="contact" className="section-padding bg-bg-lightest">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="gradient-text">Get In Touch</span>
                </motion.h2>

                {/* Single Let's Collaborate Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-text-heading mb-4">
                        Let's Collaborate
                    </h3>
                    <p className="text-text-body leading-relaxed max-w-3xl mx-auto">
                        I'm always excited to discuss new projects, innovative ideas, or opportunities
                        to be part of your vision. Feel free to reach out through any of the channels below.
                    </p>
                </motion.div>

                {/* Two Contact Information Blocks */}
                <div className="grid grid-cols-1 gap-8 justify-items-center">
                    {contactData.map((person, personIndex) => (
                        <motion.div
                            key={personIndex}
                            className="space-y-6 mx-auto max-w-md"
                            initial={{ opacity: 0, x: personIndex === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + personIndex * 0.1 }}
                        >
                            {/* Person Name */}
                            <h4 className="text-xl font-bold text-text-heading text-center mb-4">
                                {person.name}
                            </h4>

                            {/* Contact Cards */}
                            <div className="space-y-4">
                                {person.contacts.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.link}
                                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-4 p-4 glass-card hover:scale-105 transition-all duration-300 group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    >
                                        <div className="p-3 rounded-lg bg-accent-soft/20 group-hover:bg-accent-soft/30 transition-all flex-shrink-0">
                                            <info.icon className="w-5 h-5 text-accent-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-text-muted">{info.label}</p>
                                            <p className="text-text-heading font-medium truncate">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
