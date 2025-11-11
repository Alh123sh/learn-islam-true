import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Verse {
  arabic: string;
  translation: string;
  reference: string;
  referenceAr: string;
}

const verses: Verse[] = [
  {
    arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ",
    translation: "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive",
    reference: "Surah Al-Baqarah (2:45)",
    referenceAr: "سورة البقرة (٢:٤٥)",
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    translation: "For indeed, with hardship [will be] ease. Indeed, with hardship [will be] ease",
    reference: "Surah Ash-Sharh (94:5-6)",
    referenceAr: "سورة الشرح (٩٤:٥-٦)",
  },
  {
    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    translation: "And He is with you wherever you are. And Allah is Seeing of what you do",
    reference: "Surah Al-Hadid (57:4)",
    referenceAr: "سورة الحديد (٥٧:٤)",
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
    translation: "Indeed, Allah does not allow to be lost the reward of those who do good",
    reference: "Surah At-Tawbah (9:120)",
    referenceAr: "سورة التوبة (٩:١٢٠)",
  },
  {
    arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
    translation: "And whoever fears Allah - He will make for him a way out",
    reference: "Surah At-Talaq (65:2)",
    referenceAr: "سورة الطلاق (٦٥:٢)",
  },
];

const DailyVerse = () => {
  const { isArabic } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    // Change verse daily
    const today = new Date().getDate();
    setCurrentIndex(today % verses.length);
  }, []);

  const handleRefresh = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % verses.length);
  };

  const currentVerse = verses[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover-lift relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {isArabic ? "آية اليوم" : "Daily Verse"}
              </h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRefresh}
              className="hover:bg-primary/10"
            >
              <RefreshCw className="h-4 w-4 text-primary" />
            </Button>
          </div>
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <motion.p 
                className="text-2xl text-center font-amiri text-foreground leading-loose"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                {currentVerse.arabic}
              </motion.p>
              
              <motion.p 
                className="text-center text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                "{currentVerse.translation}"
              </motion.p>
              
              <motion.p 
                className="text-sm text-center text-primary font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {isArabic ? currentVerse.referenceAr : currentVerse.reference}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};

export default DailyVerse;
