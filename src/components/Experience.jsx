import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'AHRC, IIT Bhubaneswar',
            role: 'AI Research Intern',
            duration: 'Jan 2026 - Present',
            achievements: [
                'Developed novel conformer architectures for ASR systems for transcription of noisy speech',
                'Collaborated with AHRC teams on training of Time Series Models for stock price forcasting',
            ],
        },
        {
            company: 'Clevrr AI',
            role: 'AI Intern',
            duration: 'Nov 2025 - Jan 2026',
            achievements: [
                'Built and deployed Agentic AI workflows for real-time data insights',
                'Worked on knowledge graphs for optimization of LLM models context',
                'Got hands-on experience on CI/CD pipelines for version control and deployement',
            ],
        },
        {
            company: 'EdTech Society, IIT Bombay',
            role: 'Data Analyst Intern',
            duration: 'June 2025 - Aug 2025',
            achievements: [
                'Conducted research on time-series forecasting using deep learning models',
                "Worked on analysis of time-series data and it's feature engineering",
                'Presented findings at T4E conference at IIT Madras',
            ],
        },
    ];

    return (
        <div className="section-padding bg-bg-lightest">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="gradient-text">Experience</span>
                </motion.h2>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-soft via-accent-primary to-accent-soft opacity-30 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-gradient-to-br from-accent-soft to-accent-primary rounded-full transform md:-translate-x-1/2 shadow-lg shadow-accent-soft/50" />

                                {/* Content card */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                                    <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-text-heading mb-1">
                                                    {exp.role}
                                                </h3>
                                                <div className="flex items-center space-x-2 text-accent-primary">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span className="font-medium">{exp.company}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2 text-text-muted text-sm mb-4">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.duration}</span>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start space-x-2 text-text-body text-sm">
                                                    <span className="text-accent-primary mt-1">▹</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
