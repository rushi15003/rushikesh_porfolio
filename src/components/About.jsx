import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github } from 'lucide-react';

const About = () => {
    const profiles = [
        {
            name: 'Rushikesh Sutar',
            role: 'AI & ML Engineering Student',
            initials: 'RS',
            description: 'Passionate about building intelligent systems that solve real-world problems. Focused on generative AI, machine learning implementations, and scalable system design. Always exploring the latest advancements in AI technology.',
            specializations: ['Generative AI', 'LLM-fine tuning', 'Agentic AI', 'System Design'],
            email: 'rushisutar15@gmail.com',
            github: 'https://github.com/rushi15003',
            image: '/Rushikesh_Sutar_Photo.jpg',
        },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const cardVariants = {
        left: {
            hidden: { opacity: 0, x: -50 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.6,
                    delay: 0.2,
                    ease: 'easeOut',
                },
            },
        },
        right: {
            hidden: { opacity: 0, x: 50 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.6,
                    delay: 0.4,
                    ease: 'easeOut',
                },
            },
        },
    };

    return (
        <div id="about" className="section-padding bg-bg-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">About Me</span>
                    </h2>
                    <p className="text-text-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Passionate AI and Machine Learning student driving innovation through hands-on projects and research.
                    </p>
                </motion.div>

                {/* Profile Cards */}
                <div className="grid grid-cols-1 gap-8 lg:gap-12 justify-items-center">
                    {profiles.map((profile, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-8 md:p-10 rounded-3xl group hover:scale-[1.03] transition-all duration-300 mx-auto max-w-md"
                            variants={cardVariants[index === 0 ? 'left' : 'right']}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Circular Image Placeholder */}
                            <div className="flex justify-center mb-6">
                                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-accent-soft to-accent-primary shadow-lg group-hover:shadow-accent-soft/50 transition-all duration-300">
                                    {profile.image ? (
                                        <motion.img
                                            src={profile.image}
                                            alt={profile.name}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    ) : (
                                        <motion.div
                                            className="w-full h-full flex items-center justify-center text-bg-lightest text-3xl font-bold"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {profile.initials}
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="text-2xl md:text-3xl font-bold text-text-heading text-center mb-2">
                                {profile.name}
                            </h3>

                            {/* Role */}
                            <p className="text-accent-primary text-center font-medium mb-6">
                                {profile.role}
                            </p>

                            {/* Description */}
                            <p className="text-text-body leading-relaxed text-center max-w-md mx-auto mb-6">
                                {profile.description}
                            </p>

                            {/* Divider */}
                            <div className="border-t border-surface-card/40 my-6"></div>

                            {/* Specializations */}
                            <div className="mb-6">
                                <p className="text-text-heading font-semibold mb-3 text-center">
                                    Specializations:
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {profile.specializations.map((spec, i) => (
                                        <motion.span
                                            key={i}
                                            className="px-4 py-2 rounded-full border border-accent-soft/40 text-accent-primary text-sm font-medium hover:border-accent-primary hover:shadow-lg hover:shadow-accent-soft/20 transition-all duration-200 cursor-default"
                                            whileHover={{ y: -3 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {spec}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-surface-card/40 my-6"></div>

                            {/* Connect Section */}
                            <div>
                                <p className="text-text-heading font-semibold mb-3 text-center">
                                    Connect:
                                </p>
                                <div className="space-y-2">
                                    {/* Email */}
                                    <a
                                        href={`mailto:${profile.email}`}
                                        className="flex items-center justify-center gap-2 text-text-body hover:text-accent-primary transition-colors group/link"
                                    >
                                        <Mail className="w-4 h-4 text-accent-soft" />
                                        <span className="group-hover/link:underline">{profile.email}</span>
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        href={profile.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-text-body hover:text-accent-primary transition-colors group/link"
                                    >
                                        <Github className="w-4 h-4 text-accent-soft" />
                                        <span className="group-hover/link:underline">GitHub Profile</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
