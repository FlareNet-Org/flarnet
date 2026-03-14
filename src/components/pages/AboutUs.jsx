import React from "react";
import { motion } from "framer-motion";
import { 
    FiZap, FiBarChart2, FiShield, FiTarget, FiRefreshCw
} from "react-icons/fi";
import { 
    SiApachekafka, SiRedis, SiNginx, SiReact, SiNodedotjs 
} from "react-icons/si";
import { FaDatabase, FaBrain } from "react-icons/fa";
import "./AboutUs.css";

// Import Gemini generated images
import heroImage from "../../assets/Gemini_Generated_Image_2qy0cn2qy0cn2qy0.png";
import missionImage from "../../assets/Gemini_Generated_Image_m5s9i8m5s9i8m5s9.png";
import techImage from "../../assets/Gemini_Generated_Image_pf59u3pf59u3pf59.png";

const AboutUs = () => {
    const features = [
        {
            icon: FaBrain,
            title: "AI-Assisted Workflows",
            description: "Intelligent deployment pipelines that learn and adapt to your application's needs using LangChain and Groq."
        },
        {
            icon: FiZap,
            title: "Infrastructure Automation",
            description: "Zero-touch provisioning with intelligent resource allocation. Deploy in seconds, not hours."
        },
        {
            icon: FiBarChart2,
            title: "Real-time Analytics",
            description: "Comprehensive visibility into performance, costs, and optimization opportunities with ClickHouse."
        },
        {
            icon: FiRefreshCw,
            title: "High-Throughput Processing",
            description: "Kafka-powered event architecture for unmatched scalability and reliability."
        },
        {
            icon: FiShield,
            title: "Enterprise Security",
            description: "Multi-layered security with compliance automation for SOC2, HIPAA, and GDPR."
        },
        {
            icon: FiTarget,
            title: "Resource Optimization",
            description: "ML-driven resource allocation for optimal performance at minimal cost."
        }
    ];

    const techStack = [
        { icon: SiApachekafka, name: "Apache Kafka", description: "Event Streaming" },
        { icon: SiRedis, name: "Redis", description: "In-Memory Cache" },
        { icon: FaDatabase, name: "ClickHouse", description: "Analytics Store" },
        { icon: SiNginx, name: "NGINX", description: "Load Balancer" },
        { icon: SiNodedotjs, name: "Node.js", description: "Backend Runtime" },
        { icon: SiReact, name: "React", description: "Frontend Framework" }
    ];

    const stats = [
        { value: "78%", label: "Faster Deployments" },
        { value: "99.9%", label: "Uptime Guarantee" },
        { value: "24/7", label: "Support Available" },
        { value: "10K+", label: "Deployments Handled" }
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
            <section className="relative z-10 pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6">
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    About FlareNet
                                </span>
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-gray-300 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Revolutionizing web deployment through AI-driven automation 
                                and intelligent infrastructure management.
                            </motion.p>
                            <motion.p
                                className="text-lg text-gray-400 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Deploy smarter. Scale faster. Innovate beyond.
                            </motion.p>
                        </div>
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
                            <img
                                src={heroImage}
                                alt="FlareNet Platform"
                                className="relative rounded-2xl border border-blue-500/20 shadow-2xl w-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative z-10 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 rounded-2xl backdrop-blur-md bg-slate-900/40 border border-blue-500/10 
                                         hover:border-blue-500/30 transition-all duration-500"
                                variants={itemVariants}
                            >
                                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 mt-2 text-sm md:text-base">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="relative order-2 lg:order-1"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                            <img
                                src={missionImage}
                                alt="Our Mission"
                                className="relative rounded-2xl border border-blue-500/20 shadow-2xl w-full object-cover"
                            />
                        </motion.div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Our Mission
                            </motion.h2>
                            <motion.p
                                className="text-lg text-gray-300 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                FlareNet eliminates the complexity of modern deployment workflows, 
                                allowing developers to focus on what matters most: building exceptional applications.
                            </motion.p>
                            <motion.blockquote
                                className="border-l-4 border-blue-500/50 pl-6 py-4 bg-slate-900/30 rounded-r-xl"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <p className="text-gray-300 italic">
                                    "FlareNet has transformed our deployment pipeline, reducing deployment 
                                    time by 78% and virtually eliminating configuration errors."
                                </p>
                                <cite className="text-cyan-400 text-sm mt-2 block">— CTO, Enterprise Client</cite>
                            </motion.blockquote>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                            Key Features
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Powered by cutting-edge AI and enterprise-grade infrastructure
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group p-6 rounded-2xl backdrop-blur-md bg-slate-900/40 border border-blue-500/10 
                                         hover:border-blue-500/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                                              flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-7 h-7 text-cyan-400" />
                                </div>
                                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="relative z-10 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid lg:grid-cols-2 gap-12 items-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6">
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Technology Stack
                            </motion.h2>
                            <motion.p
                                className="text-lg text-gray-300 leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Built on industry-leading technologies for reliability, 
                                scalability, and performance. Our infrastructure handles 
                                millions of events with ease.
                            </motion.p>
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
                                <img
                                    src={techImage}
                                    alt="Technology"
                                    className="relative rounded-2xl border border-blue-500/20 shadow-2xl w-full object-cover max-h-80"
                                />
                            </motion.div>
                        </div>

                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className="group p-5 rounded-xl backdrop-blur-md bg-slate-900/40 border border-blue-500/10 
                                             hover:border-blue-500/30 transition-all duration-500 text-center"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <tech.icon className="w-10 h-10 mx-auto text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                                    <h4 className="text-white font-semibold text-sm">{tech.name}</h4>
                                    <p className="text-gray-500 text-xs mt-1">{tech.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom spacing for footer */}
            <div className="h-8"></div>
        </div>
    );
};

export default AboutUs;
