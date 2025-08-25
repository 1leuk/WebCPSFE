'use client';

import { motion } from 'framer-motion';

export default function Publications() {
  return (
    <div className="relative isolate bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Publications</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Browse through our latest research publications and academic contributions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto mt-16 max-w-2xl lg:mx-0"
        >
          {years.map((year) => (
            <div key={year.year} className="mb-16">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">{year.year}</h3>
              <div className="mt-8 space-y-8">
                {year.publications.map((publication, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-6 border-l border-gray-200"
                  >
                    <div className="flex flex-col gap-2">
                      <h4 className="font-semibold text-gray-900">{publication.title}</h4>
                      <p className="text-sm text-gray-600">{publication.authors}</p>
                      <p className="text-sm italic text-gray-500">{publication.venue}</p>
                      {publication.link && (
                        <a
                          href={publication.link}
                          className="text-sm text-indigo-600 hover:text-indigo-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Publication →
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const years = [
  {
    year: 2025,
    publications: [
      {
        title: 'Advanced Control Algorithms for Smart Urban Transportation Systems',
        authors: 'John Doe, Jane Smith, Robert Johnson',
        venue: 'IEEE Transactions on Intelligent Transportation Systems',
        link: '#',
      },
      {
        title: 'Security Framework for Industrial IoT Networks',
        authors: 'Jane Smith, Michael Brown',
        venue: 'ACM Conference on Computer and Communications Security (CCS)',
        link: '#',
      },
    ],
  },
  {
    year: 2024,
    publications: [
      {
        title: 'Machine Learning Approaches in Cyber-Physical Systems',
        authors: 'Robert Johnson, Sarah Williams',
        venue: 'International Conference on Cyber-Physical Systems (ICCPS)',
        link: '#',
      },
      {
        title: 'Privacy-Preserving Methods for Smart Grid Data Collection',
        authors: 'Michael Brown, John Doe',
        venue: 'IEEE Transactions on Smart Grid',
        link: '#',
      },
      {
        title: 'Real-time Control Systems for Autonomous Vehicles',
        authors: 'Sarah Williams, Jane Smith',
        venue: 'International Conference on Robotics and Automation (ICRA)',
        link: '#',
      },
    ],
  },
];
