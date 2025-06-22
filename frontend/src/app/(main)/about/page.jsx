'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import VolunteerFormModal from '../../../components/VolunteerFormModal';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  const programs = [
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
  ];

  const team = [
    ['Alka Tiwari', 'Co-Director', 'person1.jpg', 'Dedicated to sustainable impact and community-led development.'],
    ['Pradeep Tiwari', 'Co-Director', 'person2.jpg', 'Leads all program execution and operational strategy.']
  ];

  return (
    <div className="text-gray-800">
{/* HERO SECTION */}
<section className="relative py-20 px-4 sm:px-6 md:px-16 bg-gradient-to-br from-[#fff8f2] via-[#fef5ea] to-[#ffeada] text-[#1c1c1c]">
  {/* Decorative Gradient Background Layer */}
  <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-white/10 to-transparent opacity-20 pointer-events-none z-0"></div>

  <div className={`relative z-10 max-w-7xl mx-auto grid ${isPortrait ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center`}>
    {/* Left Text Block */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="text-left"
    >
      <p className="text-xs sm:text-sm mb-3 inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full tracking-wide shadow-sm">
        Making Global Impact
      </p>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-snug text-orange-600 drop-shadow-md">
        Vishoka Welfare Foundation
      </h1>

      <p className="mt-5 text-md sm:text-lg text-gray-700 leading-relaxed tracking-wide text-justify">
        Vishoka Welfare Foundation is a non-governmental organization committed to promoting sustainable development and improving the quality of life for marginalized communities. We empower individuals, protect the environment, and foster holistic community development.
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/careers">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Join Our Mission
          </motion.button>
        </Link>
        <Link href="/impact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold transition duration-300 shadow-sm"
          >
            See Our Impact
          </motion.button>
        </Link>
      </div>
    </motion.div>

    {/* Right Image Box */}
    <motion.div
      className="bg-white/30 rounded-2xl shadow-xl h-72 sm:h-80 md:h-[22rem] w-full flex items-center justify-center relative"
      variants={fadeInUp}
      initial="hidden"
      animate="show"
    >
      <div className="w-full max-w-[650px] h-auto rounded-xl border-4 border-white bg-white overflow-hidden shadow-lg">
        <Image
          src="/images/logo.png"
          alt="Vishoka Logo"
          layout="responsive"
          width={774}
          height={407}
          className="object-contain rounded-md"
        />
      </div>
     
    </motion.div>
  </div>
</section>

      {/* MESSAGE FROM THE DIRECTOR */}
<section className="relative bg-gradient-to-br from-[#fefcfb] via-[#f9f7f4] to-[#f2f0ec] py-20 px-4 sm:px-6 md:px-16 text-[#1c1c1c] overflow-hidden">
  {/* Decorative Background Overlay */}
  <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] opacity-5 pointer-events-none z-0 bg-cover bg-no-repeat"></div>

  <div className={`relative z-10 max-w-6xl mx-auto grid ${isPortrait ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center`}>
    {/* Text Block */}
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-left"
    >
      <p className="text-sm sm:text-base mb-2 inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium tracking-wide shadow-sm">
        Message from the Director
      </p>

      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
        Leading with Purpose, Inspiring Change
      </h2>

      <p className="mb-4 text-gray-700 text-justify leading-relaxed tracking-wide">
        “At Vishoka Welfare Foundation, we believe that every individual has the power to create meaningful change in their community. Our journey began with a simple yet profound vision: to build a world where no one is left behind, where every voice is heard, and where sustainable development becomes a reality for all.”
      </p>

      <p className="mb-4 text-gray-700 text-justify leading-relaxed tracking-wide">
        “Through our dedicated programs in education, women's empowerment, environmental conservation, and community development, we’ve witnessed the incredible transformation that occurs when people come together with a shared purpose. I invite you to join us in this mission to create lasting impact.”
      </p>

      <p className="text-indigo-700 font-semibold mt-4">– Alka Tiwari, Co-Director</p>
    </motion.div>

    {/* Director Image Card */}
    <motion.div
      className="relative"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <Image
          src="/images/team/person1.jpg"
          alt="Director"
          width={500}
          height={350}
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md px-5 py-2 rounded-lg text-indigo-700 font-semibold shadow-md text-sm sm:text-base">
          Leading Change
        </div>
      </div>
    </motion.div>
  </div>
</section>


{/* OUR PROGRAMS */}
<section className="bg-[#fffaf5] py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-2 text-orange-700">Our Programs</h2>
    <p className="mb-10 text-gray-600">Impactful initiatives across sectors.</p>

    <div className={`grid gap-8 ${isPortrait ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
      {programs.map((prog, idx) => (
        <motion.div
          key={idx}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white p-5 rounded-2xl border border-orange-100 shadow-md hover:shadow-orange-300 transition-shadow duration-300 transform hover:scale-105 flex flex-col"
        >
          {/* Image Section */}
          <div className="w-full h-[250px] relative rounded-lg overflow-hidden mb-4 shadow-sm">
            <Image
              src={`/images/programs/${prog.image}`}
              alt={prog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-left flex-1 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-700">{prog.title}</h3>
            <p className="text-sm sm:text-base text-gray-700 text-justify flex-1">{prog.desc}</p>
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
          <div className={`grid ${isPortrait ? 'grid-cols-1' : 'md:grid-cols-2'} gap-8 justify-items-center`}>
            {team.map(([name, role, img, desc], i) => (
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

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-16 px-6">
        <div className={`max-w-6xl mx-auto grid ${isPortrait ? 'grid-cols-1' : 'md:grid-cols-2'} gap-12 items-center`}>
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
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
              >
                Become a Volunteer
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

      <VolunteerFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default About;
