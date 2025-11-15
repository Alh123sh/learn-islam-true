import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Compass, Heart, MessageCircle, Droplets } from "lucide-react";
import DailyVerse from "@/components/DailyVerse";
import PrayerTimes from "@/components/PrayerTimes";
import QiblaCompass from "@/components/QiblaCompass";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const { isArabic } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: isArabic ? "تعلم الصلاة" : "Learn Salah",
      description: isArabic ? "دليل خطوة بخطوة للصلاة الصحيحة" : "Step-by-step guide to correct prayer",
      link: "/salah",
    },
    {
      icon: Droplets,
      title: isArabic ? "الوضوء" : "Wudu",
      description: isArabic ? "تعلم كيفية الوضوء الصحيح" : "Learn the proper way to perform ablution",
      link: "/wudu",
    },
    {
      icon: Heart,
      title: isArabic ? "الأدعية والأذكار" : "Duas & Adhkar",
      description: isArabic ? "أدعية من القرآن والسنة" : "Supplications from Quran and Sunnah",
      link: "/duas",
    },
    {
      icon: Compass,
      title: isArabic ? "القرآن الكريم" : "Holy Quran",
      description: isArabic ? "اقرأ وحفظ القرآن الكريم" : "Read and memorize the Quran",
      link: "/quran",
    },
    {
      icon: MessageCircle,
      title: isArabic ? "الأحاديث" : "Hadith",
      description: isArabic ? "أحاديث صحيحة من السنة النبوية" : "Authentic Hadith collections",
      link: "/hadith",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/90" />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              {isArabic ? "تعلّم الإسلام الأصيل" : "Learn Authentic Islam"}
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-secondary via-secondary/80 to-transparent rounded-full" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto mb-8 drop-shadow"
          >
            {isArabic 
              ? "بناءً على القرآن الكريم والسنة الصحيحة"
              : "Based on Qur'an and Sahih Sunnah"
            }
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6 text-lg shadow-glow animate-pulse"
            >
              {isArabic ? "استكشف الدورات" : "Explore Courses"}
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            {isArabic ? "ابدأ رحلتك الروحانية" : "Start Your Spiritual Journey"}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={feature.link}>
                  <Card className="p-6 h-full hover-lift cursor-pointer bg-card/50 backdrop-blur-sm border-primary/20">
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Access Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Daily Verse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <DailyVerse />
            </motion.div>

            {/* Prayer Times */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <PrayerTimes />
            </motion.div>

            {/* Qibla Compass */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <QiblaCompass />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
