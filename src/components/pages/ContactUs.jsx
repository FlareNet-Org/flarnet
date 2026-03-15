import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
    FiMail, FiMapPin, FiPhone, FiSend, FiMessageCircle, FiClock
} from "react-icons/fi";
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: FiMail,
            title: "Email Us",
            value: "support@flarenet.io",
            description: "We'll respond within 24 hours"
        },
        {
            icon: FiMapPin,
            title: "Location",
            value: "San Francisco, CA",
            description: "United States"
        },
        {
            icon: FiClock,
            title: "Business Hours",
            value: "Mon - Fri: 9AM - 6PM",
            description: "PST Timezone"
        }
    ];

    const socialLinks = [
        { icon: FaGithub, href: "#", label: "GitHub" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaLinkedin, href: "#", label: "LinkedIn" },
        { icon: FaDiscord, href: "#", label: "Discord" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-gray-900 to-black" />
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
                <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full filter blur-3xl animate-orb-float" />
                <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full filter blur-3xl animate-orb-float-delayed" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FiMessageCircle className="text-blue-400" />
                            <span className="text-blue-400 text-sm font-medium">Get in Touch</span>
                        </motion.div>
                        
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Contact Us
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Have questions about FlareNet? We'd love to hear from you. 
                            Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative z-10 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="group p-6 rounded-2xl backdrop-blur-md bg-slate-900/40 border border-blue-500/10 
                                         hover:border-blue-500/30 transition-all duration-500 text-center"
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl 
                                              bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mb-4
                                              group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                                    <info.icon className="text-2xl text-blue-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                                <p className="text-blue-400 font-medium">{info.value}</p>
                                <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Form & Social */}
            <section className="relative z-10 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            className="lg:col-span-3"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="p-8 rounded-2xl backdrop-blur-md bg-slate-900/40 border border-blue-500/10 
                                          hover:border-blue-500/20 transition-all duration-500">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Send us a Message
                                </h2>
                                
                                {submitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
                                    >
                                        Thank you! Your message has been sent successfully.
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-400 font-medium">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-blue-500/20 
                                                         text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none
                                                         focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-400 font-medium">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-blue-500/20 
                                                         text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none
                                                         focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-blue-500/20 
                                                     text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none
                                                     focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="Tell us more about your inquiry..."
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-blue-500/20 
                                                     text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none
                                                     focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 
                                                 text-white font-semibold hover:from-blue-500 hover:to-blue-400 
                                                 transform hover:scale-[1.02] transition-all duration-300
                                                 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed
                                                 flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="text-lg" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>

                        {/* Social & Additional Info */}
                        <motion.div
                            className="lg:col-span-2 space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Connect With Us */}
                            <div className="p-6 rounded-2xl backdrop-blur-md bg-slate-900/40 border border-blue-500/10">
                                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Connect With Us
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Follow us on social media to stay updated with the latest news and releases.
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-xl bg-slate-800/50 border border-blue-500/20 
                                                     flex items-center justify-center text-gray-400 
                                                     hover:text-blue-400 hover:border-blue-500/40 transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="text-xl" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Teaser */}
                            <div className="p-6 rounded-2xl backdrop-blur-md bg-slate-900/40 border border-blue-500/10">
                                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Quick Answers
                                </h3>
                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-slate-800/30 border border-blue-500/10">
                                        <h4 className="text-white font-medium mb-1">What is FlareNet?</h4>
                                        <p className="text-gray-400 text-sm">
                                            FlareNet is an AI-powered deployment platform that automates your web infrastructure.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-800/30 border border-blue-500/10">
                                        <h4 className="text-white font-medium mb-1">How do I get started?</h4>
                                        <p className="text-gray-400 text-sm">
                                            Sign up, connect your GitHub, and deploy your first project in minutes.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-slate-800/30 border border-blue-500/10">
                                        <h4 className="text-white font-medium mb-1">Is there a free tier?</h4>
                                        <p className="text-gray-400 text-sm">
                                            Yes! We offer a generous free tier for hobbyists and small projects.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Support Hours */}
                            <div className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                                <div className="flex items-center gap-3 mb-3">
                                    <FiPhone className="text-2xl text-blue-400" />
                                    <h3 className="text-xl font-semibold text-white">Need Urgent Help?</h3>
                                </div>
                                <p className="text-gray-300 mb-4">
                                    Our support team is available 24/7 for enterprise customers.
                                </p>
                                <button className="px-6 py-3 rounded-xl bg-slate-800/80 border border-blue-500/30 
                                                 text-blue-400 font-medium hover:bg-slate-800 hover:border-blue-500/50
                                                 transition-all duration-300">
                                    Schedule a Call
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
