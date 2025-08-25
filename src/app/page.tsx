'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon, SparklesIcon, CpuChipIcon, GlobeAltIcon, CloudIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/80 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 via-transparent to-red-800/20" />
          
          {/* Animated floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-red-500/40 to-red-700/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-red-800/40 to-red-600/40 rounded-full blur-3xl"
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }} />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
          >
            <SparklesIcon className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">Cyber Physical System Laboratory</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Connect
            </span>
            <br />
            <span className="text-white">the Node</span>
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              Connect
            </span>
            <br />
            <span className="text-white">the Node</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering the future of interconnected systems through cutting-edge research, 
            innovative solutions, and transformative technology that bridges the digital and physical worlds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
              <span className="flex items-center gap-2">
                Explore Our Work
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                <PlayIcon className="w-5 h-5" />
                Watch Demo
              </span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Research Papers" },
              { number: "100+", label: "Projects Completed" },
              { number: "25+", label: "Team Members" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We specialize in cutting-edge technologies that shape the future of interconnected systems, 
              from network infrastructure to intelligent automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-700/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20"
          >
            Our Activities
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-red-900 hover:to-red-800 transition-all duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/20 group-hover:from-red-500/30 group-hover:to-red-700/30 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <PlayIcon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{activity.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{activity.description}</p>
                  <button className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20"
          >
            Our Journey
          </motion.h2>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-red-700" />
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-red-500 to-red-700 rounded-full border-4 border-white shadow-lg z-10" />
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: 'Network Infrastructure',
    description: 'Building robust, scalable network solutions that power the next generation of connected systems.',
    icon: <GlobeAltIcon className="w-8 h-8 text-white" />
  },
  {
    title: 'Virtualization Technology',
    description: 'Creating efficient virtual environments that maximize resource utilization and system performance.',
    icon: <CloudIcon className="w-8 h-8 text-white" />
  },
  {
    title: 'Internet of Things',
    description: 'Connecting devices and sensors to create intelligent, responsive ecosystems.',
    icon: <CpuChipIcon className="w-8 h-8 text-white" />
  },
  {
    title: 'Software Development',
    description: 'Crafting innovative software solutions that drive digital transformation.',
    icon: <CodeBracketIcon className="w-8 h-8 text-white" />
  },
];

const activities = [
  {
    title: 'Cyber Academy 2024',
    description: 'Advanced cybersecurity training program featuring cutting-edge threat detection and prevention techniques.',
    link: '#',
  },
  {
    title: 'IoT Innovation Summit',
    description: 'Exploring the latest developments in Internet of Things technology and its applications.',
    link: '#',
  },
  {
    title: 'Network Security Workshop',
    description: 'Hands-on workshop covering network security best practices and emerging threats.',
    link: '#',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Laboratory Foundation',
    description: 'Established the Cyber Physical System Laboratory with a vision to bridge digital and physical worlds.'
  },
  {
    year: '2021',
    title: 'First Research Breakthrough',
    description: 'Published groundbreaking research on network virtualization and received international recognition.'
  },
  {
    year: '2022',
    title: 'Industry Partnerships',
    description: 'Formed strategic partnerships with leading technology companies and research institutions.'
  },
  {
    year: '2023',
    title: 'Innovation Hub Launch',
    description: 'Launched our innovation hub to foster collaboration between academia and industry.'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Expanded our research initiatives globally and established international research networks.'
  }
]; 