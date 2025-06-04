import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Java', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['ReactJS', 'Tailwind CSS', 'Node.js', 'Express'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'SQL'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'Visual Studio Code', 'Eclipse'],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      aria-label="Skills and expertise"
      className="bg-black text-white py-10 px-6"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        Skills
      </h2>

      <motion.div
        className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skillsData.map(({ category, skills }) => (
          <div
            key={category}
            className="bg-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500 transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold text-white mb-4 tracking-wide uppercase">
              {category}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {skills.map((skill) => (
                <li
                  key={skill}
                  tabIndex={0}
                  className="hover:text-yellow-500 focus:text-yellow-500 focus:outline-none transition-colors duration-200 cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
