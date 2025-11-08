import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DailyVerse from "@/components/DailyVerse";
import { BookOpen, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const { isArabic } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <motion.div 
            className="max-w-3xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              variants={fadeInUp}
            >
              {isArabic ? "تعلّم الإسلام على الطريقة الصحيحة" : "Learn Islam the Authentic Way"}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-6"
              variants={fadeInUp}
            >
              {isArabic ? (
                <>
                  مرحبًا بك في <strong>مركز التعلم الإسلامي</strong>، مكان هادئ تتعرّف فيه على جمال الإسلام من خلال <strong>القرآن الكريم</strong> و<strong>الأحاديث النبوية الصحيحة</strong> وتعاليم النبي محمد ﷺ.
                </>
              ) : (
                <>
                  Welcome to <strong>Islamic Learning Hub</strong>, a peaceful place where you can explore the beauty of Islam through the <strong>Qur'an</strong>, <strong>authentic Hadith</strong>, and the teachings of the Prophet Muhammad ﷺ.
                </>
              )}
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-8"
              variants={fadeInUp}
            >
              {isArabic 
                ? "هدفنا أن نعينك على عبادة الله بالعلم والإخلاص والمحبة، كما علّم النبي ﷺ أصحابه."
                : "Our mission is to help you worship Allah with knowledge, sincerity, and love — just as the Prophet ﷺ taught his companions."
              }
            </motion.p>
            
            {!isArabic && (
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20"
                variants={fadeInUp}
              >
                <p className="text-xl md:text-2xl text-white text-right font-semibold mb-2" dir="rtl">
                  تعلّم الإسلام على الطريقة الصحيحة
                </p>
                <p className="text-sm md:text-base text-white/90 text-right" dir="rtl">
                  مرحبًا بك في مركز التعلم الإسلامي، مكان هادئ تتعرّف فيه على جمال الإسلام من خلال القرآن الكريم والأحاديث النبوية الصحيحة وتعاليم النبي محمد ﷺ.
                </p>
              </motion.div>
            )}
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                {isArabic ? "ابدأ التعلم" : "Start Learning"}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                {isArabic ? "انضم إلى مجتمعنا" : "Join Our Community"}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {isArabic ? "مرحباً بك في مركز التعلم الإسلامي" : "Welcome to Islamic Learning Hub"}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isArabic 
              ? "هدفنا مساعدة المسلمين والمتعلمين الجدد على فهم الإسلام من خلال القرآن والأحاديث الصحيحة. كل محتوى يتم التحقق منه بعناية من مصادر موثوقة بما في ذلك صحيح البخاري وصحيح مسلم والمجموعات الأخرى الصحيحة."
              : "Our mission is to help Muslims and new learners understand Islam through the Qur'an and authentic Hadith. Every piece of content is carefully verified from trusted sources including Sahih al-Bukhari, Sahih Muslim, and other authentic collections."
            }
          </p>
        </div>
      </motion.section>

      {/* Daily Verse */}
      <motion.section 
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <DailyVerse />
      </motion.section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {isArabic ? "ماذا ستتعلم" : "What You'll Learn"}
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <Link to="/salah">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {isArabic ? "تعلّم الصلاة" : "Learn Salah"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isArabic 
                      ? "دليل خطوة بخطوة حول كيف صلى النبي ﷺ، مع المراجع الصحيحة والأخطاء الشائعة التي يجب تجنبها."
                      : "Step-by-step guide on how the Prophet ﷺ prayed, with authentic references and common mistakes to avoid."
                    }
                  </p>
                </div>
              </Card>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link to="/duas">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {isArabic ? "الأدعية والأذكار" : "Duas & Adhkar"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isArabic
                      ? "أدعية يومية من الأحاديث الصحيحة للصباح والمساء والسفر وكل مناسبة."
                      : "Daily supplications from authentic Hadith for morning, evening, travel, and every occasion."
                    }
                  </p>
                </div>
              </Card>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link to="/quran">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {isArabic ? "حفظ القرآن" : "Quran Memorization"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isArabic
                      ? "خطط حفظ منظمة مع نصائح من العلماء وأدوات تتبع أسبوعية."
                      : "Structured memorization plans with tips from scholars and weekly tracking tools."
                    }
                  </p>
                </div>
              </Card>
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link to="/hadith">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    {isArabic ? "ركن الحديث" : "Hadith Corner"}
                  </h3>
                  <p className="text-muted-foreground">
                    {isArabic
                      ? "أحاديث موثقة مصنفة حسب الموضوع - الآداب والعبادة والصبر والأسرة."
                      : "Verified Hadiths categorized by topic - manners, worship, patience, and family."
                    }
                  </p>
                </div>
              </Card>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Prophet's Quote */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-accent text-white">
          <blockquote className="text-center space-y-4">
            <p className="text-2xl md:text-3xl font-semibold italic">
              {isArabic 
                ? "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
                : "The best among you are those who learn the Qur'an and teach it."
              }
            </p>
            <footer className="text-lg opacity-90">
              {isArabic 
                ? "— النبي محمد ﷺ (صحيح البخاري 5027)"
                : "— Prophet Muhammad ﷺ (Sahih al-Bukhari 5027)"
              }
            </footer>
          </blockquote>
        </Card>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            {isArabic ? "هل أنت مستعد لبدء رحلتك؟" : "Ready to Begin Your Journey?"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isArabic 
              ? "انضم إلى آلاف المتعلمين الذين يدرسون المعرفة الإسلامية الأصيلة. ابدأ بأي موضوع يثير اهتمامك."
              : "Join thousands of learners studying authentic Islamic knowledge. Start with any topic that interests you."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/salah">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                {isArabic ? "ابدأ بالصلاة" : "Start with Salah"}
              </Button>
            </Link>
            <Link to="/quran">
              <Button size="lg" variant="outline">
                {isArabic ? "احفظ القرآن" : "Memorize Quran"}
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
