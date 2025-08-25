'use client';

import { motion } from 'framer-motion';

export default function Research() {
  return (
    <div className="relative isolate bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Research</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our ongoing research projects and collaborations in the field of cyber-physical systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-16 max-w-2xl lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {projects.map((project) => (
              <div key={project.name} className="flex flex-col">
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">{project.name}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{project.description}</p>
                  {project.highlights && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold leading-6 text-gray-900">Key Highlights:</h4>
                      <ul className="mt-2 list-disc pl-4 text-sm text-gray-600">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="mt-1">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-32 max-w-2xl lg:mx-0"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Research Areas</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-gray-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area.name}>
                <h3 className="font-semibold text-gray-900">{area.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: 'Smart Urban Transportation Systems',
    description: 'Developing intelligent transportation systems for smart cities using advanced sensing and control algorithms.',
    highlights: [
      'Real-time traffic optimization',
      'Integration with existing infrastructure',
      'Machine learning-based prediction models',
    ],
  },
  {
    name: 'Industrial IoT Security',
    description: 'Enhancing security measures for industrial Internet of Things devices and networks.',
    highlights: [
      'Secure communication protocols',
      'Threat detection and prevention',
      'Privacy-preserving data collection',
    ],
  },
  {
    name: 'Autonomous Systems Control',
    description: 'Research on control systems for autonomous vehicles and robots.',
    highlights: [
      'Adaptive control algorithms',
      'Multi-agent coordination',
      'Safety verification methods',
    ],
  },
  {
    name: 'Energy Management Systems',
    description: 'Optimizing energy distribution and consumption in smart grids and buildings.',
    highlights: [
      'Demand response optimization',
      'Renewable energy integration',
      'Real-time monitoring and control',
    ],
  },
];

const areas = [
  {
    name: 'Control Theory',
    description: 'Advanced control algorithms and methodologies for complex cyber-physical systems.',
  },
  {
    name: 'System Integration',
    description: 'Techniques for seamless integration of cyber and physical components in large-scale systems.',
  },
  {
    name: 'Security & Privacy',
    description: 'Novel approaches to ensure security and privacy in interconnected cyber-physical systems.',
  },
  {
    name: 'Real-time Systems',
    description: 'Design and implementation of time-critical systems and applications.',
  },
  {
    name: 'Machine Learning',
    description: 'Application of AI and machine learning techniques in cyber-physical systems.',
  },
  {
    name: 'Verification & Validation',
    description: 'Methods for ensuring reliability and correctness of cyber-physical systems.',
  },
];
