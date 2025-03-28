import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email",
      content: "omkar.desai916@gmail.com",
      link: "mailto:omkar.desai916@gmail.com",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Phone",
      content: "+91 9326913582",
      link: "tel:+919326913582",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Location",
      content: "Mumbai, India",
      link: "https://maps.google.com",
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: "GitHub",
      username: "@omkar-desai",
      link: "https://github.com/omkar-desai",
      color: "hover:text-[#2dba4e]",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: "LinkedIn",
      username: "@omkar-desai-01",
      link: "https://www.linkedin.com/in/omkar-desai-01/",
      color: "hover:text-[#0077b5]",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-tertiary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-tertiary/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(100,255,218,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities. I'm
            always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${info.color} blur-xl group-hover:blur-2xl transition-all duration-500`}
              ></div>
              <div className="relative bg-primary/80 backdrop-blur-sm rounded-xl p-8 h-full border border-secondary/10 hover:border-secondary/30 transition-colors duration-300 flex flex-col items-center text-center">
                <div className="text-secondary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-textPrimary group-hover:text-secondary transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-textSecondary">{info.content}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Connect with me</h3>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className={`group flex flex-col items-center space-y-2 text-textSecondary ${social.color} transition-colors duration-300`}
              >
                <span className="transform group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </span>
                <span className="text-sm">{social.username}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
