import { motion } from "framer-motion";

const IslamicPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <motion.g
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              
              <path d="M 50 30 L 50 20" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <path d="M 50 70 L 50 80" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <path d="M 30 50 L 20 50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <path d="M 70 50 L 80 50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              
              <path d="M 35 35 L 30 30" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <path d="M 65 65 L 70 70" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <path d="M 65 35 L 70 30" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <path d="M 35 65 L 30 70" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            </motion.g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
      </svg>
    </div>
  );
};

export default IslamicPattern;
