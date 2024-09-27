import { HERO_CONTENT } from "../constants";
import profilepic1 from "../assets/profilepic1.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center lg:justify-start lg:ml-[5%]">
        <div className="w-full lg:w-1/2 max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-3xl font-thin tracking-tight sm:text-4xl lg:mt-16 lg:text-5xl"
            >
              Alwin James Mueca
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg leading-relaxed mt-4"
            >
              {HERO_CONTENT}
            </motion.p>
            <br />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Add max-w and h-auto for responsive control */}
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilepic1}
              alt="Alwin James Mueca"
              className="w-full h-auto max-w-[250px] lg:max-w-[350px] rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
