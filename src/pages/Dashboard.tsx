import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import PrayerTracker from "@/components/PrayerTracker";
import MemorizationHeatmap from "@/components/MemorizationHeatmap";
import AchievementBadges from "@/components/AchievementBadges";
import { Card } from "@/components/ui/card";
import { TrendingUp, BookMarked, Award } from "lucide-react";

const Dashboard = () => {
  const { isArabic } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      label: isArabic ? "معدل الاتساق" : "Consistency Rate",
      value: "87%",
      change: "+12%",
      positive: true,
    },
    {
      icon: BookMarked,
      label: isArabic ? "الآيات المحفوظة" : "Verses Memorized",
      value: "142",
      change: "+8",
      positive: true,
    },
    {
      icon: Award,
      label: isArabic ? "الإنجازات المفتوحة" : "Achievements Unlocked",
      value: "15/30",
      change: "+3",
      positive: true,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {isArabic ? "لوحة التقدم الروحي" : "Spiritual Progress Dashboard"}
          </h1>
          <p className="text-lg text-muted-foreground">
            {isArabic
              ? "تتبع رحلتك في تعلم الإسلام وتطورك الروحي"
              : "Track your journey in learning Islam and spiritual growth"}
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      stat.positive ? "text-accent" : "text-destructive"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Prayer Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <PrayerTracker />
        </motion.div>

        {/* Memorization Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <MemorizationHeatmap />
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AchievementBadges />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
