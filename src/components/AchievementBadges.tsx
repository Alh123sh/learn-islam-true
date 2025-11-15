import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Star,
  Flame,
  BookOpen,
  Heart,
  Zap,
  Target,
  TrendingUp,
  Crown,
} from "lucide-react";

const AchievementBadges = () => {
  const { isArabic } = useLanguage();

  const achievements = [
    {
      icon: Flame,
      title: isArabic ? "سلسلة أسبوع" : "Week Streak",
      description: isArabic ? "7 أيام متتالية من الصلاة" : "7 consecutive days of prayer",
      unlocked: true,
      date: "2024-03-10",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BookOpen,
      title: isArabic ? "قارئ مخلص" : "Devoted Reader",
      description: isArabic ? "حفظ أول جزء" : "Memorized first Juz",
      unlocked: true,
      date: "2024-03-05",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      title: isArabic ? "بداية قوية" : "Strong Start",
      description: isArabic ? "أكمل 10 دروس" : "Complete 10 lessons",
      unlocked: true,
      date: "2024-02-28",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Heart,
      title: isArabic ? "محب للأدعية" : "Dua Enthusiast",
      description: isArabic ? "حفظ 25 دعاء" : "Memorized 25 duas",
      unlocked: true,
      date: "2024-03-01",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Target,
      title: isArabic ? "الاتساق مهم" : "Consistency Matters",
      description: isArabic ? "30 يومًا من الصلاة بدون انقطاع" : "30 days prayer streak",
      unlocked: false,
      date: null,
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: isArabic ? "سريع المتعلم" : "Fast Learner",
      description: isArabic ? "حفظ 5 آيات في يوم واحد" : "Memorize 5 verses in one day",
      unlocked: false,
      date: null,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: isArabic ? "في تحسن" : "On the Rise",
      description: isArabic ? "زيادة الحفظ بنسبة 50%" : "Increase memorization by 50%",
      unlocked: false,
      date: null,
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Crown,
      title: isArabic ? "سيد القرآن" : "Quran Master",
      description: isArabic ? "حفظ 5 أجزاء" : "Memorize 5 Juz",
      unlocked: false,
      date: null,
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: Award,
      title: isArabic ? "العالم" : "The Scholar",
      description: isArabic ? "أتمم 100 درس" : "Complete 100 lessons",
      unlocked: false,
      date: null,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const unlockedCount = achievements.filter((a) => a.unlocked).length;

  return (
    <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {isArabic ? "شارات الإنجاز" : "Achievement Badges"}
          </h2>
          <Badge variant="secondary" className="text-lg px-4 py-2">
            {unlockedCount}/{achievements.length}
          </Badge>
        </div>
        <p className="text-muted-foreground">
          {isArabic
            ? "افتح شارات جديدة من خلال الاستمرار في رحلتك التعليمية"
            : "Unlock new badges by continuing your learning journey"}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">
            {isArabic ? "التقدم الإجمالي" : "Overall Progress"}
          </span>
          <span className="text-sm font-bold text-primary">
            {Math.round((unlockedCount / achievements.length) * 100)}%
          </span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: achievement.unlocked ? 1.05 : 1 }}
            className="relative"
          >
            <Card
              className={`p-4 text-center transition-all ${
                achievement.unlocked
                  ? "bg-gradient-to-br " + achievement.color + " text-white cursor-pointer hover-lift"
                  : "bg-muted/50 text-muted-foreground"
              }`}
            >
              {/* Lock Overlay */}
              {!achievement.unlocked && (
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] rounded-lg flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <svg
                      className="w-8 h-8 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </motion.div>
                </div>
              )}

              <motion.div
                animate={
                  achievement.unlocked
                    ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: achievement.unlocked ? Infinity : 0,
                  repeatDelay: 3,
                }}
                className="mb-3"
              >
                <achievement.icon className="h-12 w-12 mx-auto" />
              </motion.div>

              <h3 className="font-bold text-sm mb-1">{achievement.title}</h3>
              <p className="text-xs opacity-90 line-clamp-2">
                {achievement.description}
              </p>

              {achievement.unlocked && achievement.date && (
                <p className="text-xs mt-2 opacity-75">
                  {new Date(achievement.date).toLocaleDateString()}
                </p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Achievements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg"
      >
        <h3 className="font-semibold text-foreground mb-2">
          {isArabic ? "قريبًا من الفتح" : "Close to Unlocking"}
        </h3>
        <p className="text-sm text-muted-foreground">
          {isArabic
            ? "استمر في الصلاة 3 أيام أخرى لفتح 'الاتساق مهم'!"
            : "Keep praying for 3 more days to unlock 'Consistency Matters'!"}
        </p>
      </motion.div>
    </Card>
  );
};

export default AchievementBadges;
