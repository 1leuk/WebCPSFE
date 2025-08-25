'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/80 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-transparent to-red-800/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs tracking-wider">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Since 2020
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-tight">
              We are the playful minds behind the serious systems
            </h1>
            <p className="mt-4 text-white/80 max-w-3xl mx-auto">
              Cyber Physical System Laboratory is where creativity meets rigorous engineering. We prototype, test, and ship research that bridges the digital and the physical world.
            </p>
          </motion.div>

          {/* Hero image placeholders */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="aspect-[4/3] rounded-xl border border-white/20 bg-white/5 backdrop-blur-[1px] flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="mx-auto h-10 w-10 rounded-md bg-gradient-to-br from-red-500 to-red-700" />
                  <p className="mt-2 text-xs text-white/70">Image placeholder</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                Born from curiosity and a love for building, CPS Lab combines research rigor with hacker joy. We design experiments, wire up prototypes, and publish findings that move the field forward.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Research", "Prototyping", "Open Source", "Education"].map((t) => (
                  <div key={t} className="rounded-xl border border-gray-200 bg-white p-4">
                    <p className="text-sm font-semibold text-gray-900">{t}</p>
                    <p className="mt-1 text-sm text-gray-600">Fun, focused, and always shipping.</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Big placeholder card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <div className="aspect-[16/10] w-full rounded-xl border-2 border-dashed border-red-300/60 bg-red-50/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-red-500 to-red-700" />
                  <p className="mt-2 text-sm text-red-700/80">Drop a lab photo, team shot, or infographic here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
          >
            Little things that make us smile
          </motion.h3>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {funFacts.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-red-500/5 to-red-700/5" />
                <div className="relative">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-red-500 to-red-700" />
                  <h4 className="mt-4 text-lg font-bold text-gray-900">{f.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Meet the (future) team</h3>
            <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
              Add your members later — the layout is ready. Photos, names, roles, and socials slot right in.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="rounded-xl border-2 border-dashed border-gray-300 bg-white aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-red-700" />
                    <p className="mt-2 text-xs text-gray-500">Member</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const funFacts = [
  {
    title: 'Coffee-fueled sprints',
    desc: 'We ship faster with a warm cup and a cooler playlist.'
  },
  {
    title: 'Prototype first',
    desc: 'We believe rough demos beat perfect slides every time.'
  },
  {
    title: 'Open by default',
    desc: 'We share code, datasets, and ideas to accelerate the field.'
  }
];
