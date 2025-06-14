'use client';

import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // ✅ Imported Navbar

const About = () => {
  return (
    <div className="text-gray-800">
      {/* NAVBAR */}
      <Navbar /> {/* ✅ Navbar added */}

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm mb-2 border border-white px-3 py-1 inline-block rounded-full">
              Making Global Impact
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Vishoka Welfare Foundation
            </h1>
            <p className="mt-4 text-lg text-justify">
              Vishoka Welfare Foundation is a non-governmental organization committed to promoting sustainable development and improving the quality of life for marginalized communities. Founded on the principles of social justice, equality, and environmental stewardship, our foundation works tirelessly to address the most pressing issues facing society today. Through our various programs and initiatives, we aim to empower individuals, protect the environment, and foster holistic community development.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
                Join Our Mission
              </button>
              <button className="bg-transparent border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition duration-300">
                See Our Impact
              </button>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="bg-white/10 rounded-2xl shadow-xl relative h-72 w-full flex items-center justify-center">
            <div className="w-full max-w-[750px] h-auto rounded-xl border-4 border-white bg-white mx-auto overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Vishoka Logo"
                layout="responsive"
                width={774}
                height={407}
                className="object-cover rounded-md"
              />
            </div>
            <p className="absolute bottom-2 w-full text-center text-sm text-white bg-black/40 py-1">
              Empowering lives through action
            </p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-indigo-600 font-medium mb-2">Our Mission</p>
            <h2 className="text-3xl font-bold mb-4">
              Empowering Communities, Transforming Lives
            </h2>
            <p className="mb-4 text-gray-700 text-justify">
              At Vishoka Welfare Foundation, our mission is to empower communities, protect the environment, and foster sustainable development through targeted programs and initiatives. We are dedicated to creating a world where every individual has the opportunity to thrive, regardless of their background. By addressing critical issues such as education, women’s empowerment, environmental conservation, and child protection, we strive to build a more just, equitable, and sustainable future for all.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/mission.jpg"
              alt="Mission"
              width={500}
              height={350}
              className="rounded-xl shadow-xl"
            />
            <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow text-indigo-700 font-semibold">
              Vision 2030
            </div>
          </div>
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
                title: 'SayNoToPlastic Campaign',
                desc: 'Executed in partnership with Dainik Bhaskar, this campaign raised awareness about plastic pollution through rallies, clean-ups, and youth engagement activities.',
                image: 'plastic.jpg',
              },
              {
                title: 'Coloring a Better Tomorrow',
                desc: 'A creative platform for underprivileged children to express their dreams via art. Their artwork was exhibited to raise funds for educational support.',
                image: 'color.jpg',
              },
            ].map((prog, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300"
              >
                <Image
                  src={`/images/programs/${prog.image}`}
                  alt={prog.title}
                  width={600}
                  height={350}
                  className="object-cover w-full h-60"
                />
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-xl mb-2">{prog.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{prog.desc}</p>
                </div>
              </div>
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
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-full max-w-sm"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Be Part of the Change</h2>
            <p className="mb-6 text-justify">
              Partner with Vishoka to amplify your impact. Volunteer, collaborate, or support our work—there's a role for everyone.
            </p>
            <ul className="text-sm space-y-1">
              <li>📍 Offices:  11/1124, Indira Nagar, Lucknow, Uttar Pradesh, PINCODE-226016, India</li>
              <li>📞 +91 8318484975, +91 9415103204</li>
              <li>✉️ vishokawelfarefoundation@gmail.com</li>
            </ul>
          </div>
          <div className="bg-white text-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-4">Get Involved</h3>
            <div className="space-y-3">
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Become a Volunteer
              </button>
              <button className="w-full bg-blue-100 text-blue-800 py-2 rounded hover:bg-blue-200">
                Partner With Us
              </button>
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Donate Now
              </button>
            </div>
            <p className="text-xs mt-4 text-center text-gray-500">
              Join 500,000+ supporters making a difference
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default About;
