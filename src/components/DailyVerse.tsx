import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const verses = [
  {
    arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
    translation: "Indeed, this Qur'an guides to that which is most upright.",
    reference: "Surah Al-Isra 17:9",
  },
  {
    arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
    translation: "And We have certainly made the Qur'an easy to remember, so is there anyone who will remember?",
    reference: "Surah Al-Qamar 54:17",
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    translation: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    reference: "Surah Al-Baqarah 2:152",
  },
  {
    arabic: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
    translation: "And I did not create the jinn and mankind except to worship Me.",
    reference: "Surah Adh-Dhariyat 51:56",
  },
];

const DailyVerse = () => {
  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const verse = verses[currentVerse];

  return (
    <Card className="relative overflow-hidden border-4 border-secondary/40 shadow-glow bg-gradient-to-br from-card via-card to-secondary/5">
      <div className="absolute inset-0 gold-gradient opacity-5" />
      <div className="relative p-8">
        <div className="flex items-start gap-4">
          <motion.div 
            className="mt-1"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 6
            }}
          >
            <BookOpen className="h-6 w-6 text-secondary" />
          </motion.div>
          <div className="flex-1 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVerse}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="text-right">
                  <p className="text-2xl md:text-3xl font-amiri text-primary leading-relaxed" dir="rtl">
                    {verse.arabic}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-foreground/90 italic">
                    "{verse.translation}"
                  </p>
                  <p className="text-sm text-secondary font-semibold">
                    — {verse.reference}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {verses.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentVerse(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentVerse ? "w-8 bg-secondary" : "w-2 bg-secondary/30"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to verse ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default DailyVerse;
