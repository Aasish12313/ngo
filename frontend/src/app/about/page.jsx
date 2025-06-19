'use client';
import Link from 'next/link';

import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="text-gray-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="show">
            <p className="text-sm mb-2 border border-white px-3 py-1 inline-block rounded-full">
              Making Global Impact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Visoka Welfare Foundation
            </h1>
            <p className="mt-4 text-lg text-justify">
              Visoka Welfare Foundation is a non-governmental organization committed to promoting sustainable development and improving the quality of life for marginalized communities. Founded on the principles of social justice, equality, and environmental stewardship, our foundation works tirelessly to address the most pressing issues facing society today. Through our various programs and initiatives, we aim to empower individuals, protect the environment, and foster holistic community development.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/careers">

              <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
                Join Our Mission
              </button>
              </Link>
              
              <Link href="/impact">

              <button className="bg-transparent border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition duration-300">
                See Our Impact
              </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 rounded-2xl shadow-xl relative h-72 w-full flex items-center justify-center"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            <div className="w-full max-w-[750px] h-auto rounded-xl border-4 border-white bg-white mx-auto overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Vishoka Logo"
                layout="responsive"
                width={774}
                height={407}
                className="object-contain rounded-md"
              />
            </div>
            <p className="absolute bottom-2 w-full text-center text-sm text-white bg-black/40 py-1">
              Empowering lives through action
            </p>
          </motion.div>
        </div>
      </section>

      {/* MESSAGE FROM DIRECTOR */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-indigo-600 font-medium mb-2">Message from the Director</p>
            <h2 className="text-3xl font-bold mb-4">
              Leading with Purpose, Inspiring Change
            </h2>
            <p className="mb-4 text-gray-700 text-justify">
              "At Visoka Welfare Foundation, we believe that every individual has the power to create meaningful change in their community. Our journey began with a simple yet profound vision: to build a world where no one is left behind, where every voice is heard, and where sustainable development becomes a reality for all."
            </p>
            <p className="mb-4 text-gray-700 text-justify">
              "Through our dedicated programs in education, women's empowerment, environmental conservation, and community development, we have witnessed the incredible transformation that occurs when people come together with a shared purpose. I invite you to join us in this mission to create lasting impact."
            </p>
            <p className="text-gray-700 font-medium">
              - Alka Tiwari, Co-Director
            </p>
          </motion.div>
          <motion.div className="relative" variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Image
              src="/images/team/person1.jpg"
              alt="Director Message"
              width={500}
              height={350}
              className="rounded-xl shadow-xl object-cover w-full"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow text-indigo-700 font-semibold">
              Leading Change
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR PROGRAMS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Our Programs</h2>
          <p className="mb-10 text-gray-600">Impactful initiatives across sectors.</p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {[
              {
                title: 'Drug-Free India Fortnight',
                desc: 'Visoka Welfare Foundation, in collaboration with the Anti Narcotics Task Force Uttar Pradesh, organized a special yoga event during the #DrugFreeIndiaFortnight. This initiative aimed at promoting a drug-free lifestyle by leveraging the power of yoga to reduce stress, enhance focus, and improve overall well-being.',
                image: 'drug.jpg',
              },
              {
                title: 'Red Relief Campaign',
                desc: 'Focusing on breaking the stigma around menstruation, this campaign distributed sanitary pads and hosted awareness sessions to empower women with hygiene education.',
                image: 'red.jpg',
              },
              {
                title: 'EcoBloom: Growing a Greener World',
                desc: 'At Vishoka, we promote environmental conservation by distributing plants and conducting awareness workshops on tree planting, water conservation, and eco-friendly living. The initiative encouraged communities, especially children, to adopt sustainable practices and care for the environment.',
                image: 'eco.jpg',
              },
              {
                title: 'Coloring a Better Tomorrow',
                desc: 'A creative platform for underprivileged children to express their dreams via art. Their artwork was exhibited to raise funds for educational support.',
                image: 'color.jpg',
              },
            ].map((prog, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="w-full h-[250px] relative">
                  <Image
                    src={`/images/programs/${prog.image}`}
                    alt={prog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 text-left flex-1 flex flex-col">
                  <h3 className="font-semibold text-xl mb-2">{prog.title}</h3>
                  <p className="text-sm text-gray-600 text-justify flex-1">{prog.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
          <p className="mb-10 text-gray-600">Guided by values, driven by purpose.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {[
              ['Alka Tiwari', 'Co-Director', 'person1.jpg', 'Dedicated to sustainable impact and community-led development.'],
              ['Pradeep Tiwari', 'Co-Director', 'person2.jpg', 'Leads all program execution and operational strategy.']
            ].map(([name, role, img, desc], i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Image
                  src={`/images/team/${img}`}
                  alt={name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-indigo-600 text-sm">{role}</p>
                <p className="text-sm mt-2 text-gray-600 text-justify">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold mb-4">Be Part of the Change</h2>
            <p className="mb-6 text-justify">
              Partner with Vishoka to amplify your impact. Volunteer, collaborate, or support our work—there's a role for everyone.
            </p>
            <ul className="text-sm space-y-1">
              <li>📍 11/1124, Indira Nagar, Lucknow, UP, 226016</li>
              <li>📞 +91 8318484975, +91 9415103204</li>
              <li>✉️ visokawelfarefoundation@gmail.com</li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-white text-gray-800 rounded-xl p-6 shadow-md"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-4">Get Involved</h3>
            <div className="space-y-3">
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Become a Volunteer
              </button>
              <button className="w-full bg-blue-100 text-blue-800 py-2 rounded hover:bg-blue-200">
                Partner With Us
              </button>
              <Link href="/donate">
                  <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
                              Donate Now
                  </button>
              </Link>
            </div>
            <p className="text-xs mt-4 text-center text-gray-500">
              Join 500,000+ supporters making a difference
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
