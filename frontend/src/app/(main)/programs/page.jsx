'use client';
import { motion } from 'framer-motion';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';

const programs = [
  {
    title: 'Dream Shala',
    subtitle: 'Child Education & Holistic Development',
    image: '/program_img/dream-shala.jpg',
    description: `We work with underserved children in urban and peri-urban slums to strengthen their foundational literacy, life skills, and emotional well-being. Using creative learning tools, storytelling, and theatre-based pedagogy, we support 300+ children annually.`,
    beneficiaries: 'Children aged 6–14 from low-income backgrounds',
    activities: ['Bridge classes', 'Life skills workshops', 'Creative classrooms', 'Parental engagement'],
    sdgs: ['SDG 4: Quality Education', 'SDG 10: Reduced Inequalities'],
    mdgs: ['MDG 2: Universal Primary Education'],
  },
  {
    title: 'Red Relief Campaign | Youth Ki Awaaz',
    subtitle: 'Gender Justice & SRHR Awareness',
    image: '/program_img/red-relief campaign.jpg',
    description: `We create safe, inclusive spaces for youth to lead conversations on menstruation, consent, and gender norms. Our nukkad nataks and workshops reach over 1,000 people annually.`,
    beneficiaries: 'Youth, adolescents (especially girls), and rural women',
    activities: ['Menstrual hygiene drives', 'SRHR sessions', 'Street plays', 'Leadership training'],
    sdgs: ['SDG 3: Good Health & Well-Being', 'SDG 5: Gender Equality'],
    mdgs: ['MDG 3: Gender Equality', 'MDG 5: Maternal Health'],
  },
  {
    title: 'Youth Ki Awaaz Fellowship',
    subtitle: 'Youth Leadership & Civic Engagement',
    image: '/program_img/youth-ki-awaaz.jpg',
    description: `Through leadership fellowships and civic labs, we empower youth to question, organize, and mobilize for change—especially in mental health and democratic participation.`,
    beneficiaries: 'Youth (18–29) from rural and marginalised communities',
    activities: ['Theatre-based fellowships', 'Civic labs', 'Public campaigns'],
    sdgs: ['SDG 16: Peace & Institutions', 'SDG 4.7: Sustainable Education'],
    mdgs: ['MDG 8: Global Partnerships'],
  },
  {
    title: 'Van Zinda To Hum Zinda',
    subtitle: 'Climate Action & Environmental Justice',
    image: '/program_img/van-zinda.jpg',
    description: `We mobilize communities for ecological balance, sustainability, and green campaigns. Over 1,500 people have participated in our forest and eco-social efforts.`,
    beneficiaries: 'Climate-vulnerable communities, youth leaders, farmers',
    activities: ['Forest campaigns', 'Seed bomb drives', 'Sustainability workshops'],
    sdgs: ['SDG 13: Climate Action', 'SDG 15: Life on Land'],
    mdgs: ['MDG 7: Environmental Sustainability'],
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-[#fffaf5] text-[#1c1c1c]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute w-full h-full object-cover brightness-[0.3]"
        >
          <source src="/hero-bg2.mp4" type="video/mp4" />
        </video>
        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-300  to-red-500 text-transparent bg-clip-text"
            initial={{ y: -40 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Programs
          </motion.h1>
          <p className="text-lg mt-4 max-w-xl mx-auto text-orange-100">
            Explore how Vishoka Foundation drives transformation through grassroots initiatives.
          </p>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="py-24 px-6 md:px-20">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Impactful Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-lg hover:shadow-orange-300 transition-all duration-300 transform hover:scale-[1.015] overflow-hidden border border-orange-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={prog.image}
                alt={prog.title}
                className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-pink-600 mb-1">{prog.title}</h3>
                <p className="text-sm italic text-gray-500 mb-3">{prog.subtitle}</p>
                <p className="text-gray-800 mb-4 leading-relaxed">{prog.description}</p>

                <div className="mb-3">
                  <span className="font-semibold text-gray-700">Beneficiaries:</span>{' '}
                  <span className="text-gray-600">{prog.beneficiaries}</span>
                </div>
                <div className="mb-4">
                  <span className="font-semibold text-gray-700">Key Activities:</span>
                  <ul className="list-disc list-inside text-gray-600">
                    {prog.activities.map((act, i) => (
                      <li key={i}>{act}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <span className="font-semibold text-gray-700">SDGs Aligned:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {prog.sdgs.map((goal, i) => (
                      <span
                        key={i}
                        className="bg-green-200 text-green-900 text-sm px-3 py-1 rounded-full"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <span className="font-semibold text-gray-700">MDGs Covered:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {prog.mdgs.map((goal, i) => (
                      <span
                        key={i}
                        className="bg-blue-200 text-blue-900 text-sm px-3 py-1 rounded-full"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-orange-50 py-24 px-6 md:px-20 text-center relative overflow-hidden">
        <motion.h2
          className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Support Our Mission
        </motion.h2>

        <motion.p
          className="text-lg max-w-2xl mx-auto mb-8 text-gray-800 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Every donation empowers us to reach more children, youth, and communities. Help us create
          lasting change through education, equity, and environmental action.
        </motion.p>

        <motion.a
    href="/donate"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-orange-500  text-white px-10 py-4 rounded-full font-semibold shadow-lg transition duration-300"
  >
    Donate Now
  </motion.a>

      </section>

      <Footer />
    </div>
  );
}
