import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Progress } from "@/components/ui/progress";

const PrayerTracker = () => {
  const { isArabic } = useLanguage();
  const [selectedPrayer, setSelectedPrayer] = useState<string | null>(null);

  const prayers = [
    { name: isArabic ? "الفجر" : "Fajr", percentage: 95, color: "from-primary to-accent" },
    { name: isArabic ? "الظهر" : "Dhuhr", percentage: 88, color: "from-accent to-primary" },
    { name: isArabic ? "العصر" : "Asr", percentage: 92, color: "from-primary to-accent" },
    { name: isArabic ? "المغرب" : "Maghrib", percentage: 97, color: "from-accent to-primary" },
    { name: isArabic ? "العشاء" : "Isha", percentage: 85, color: "from-primary to-accent" },
  ];

  const overallPercentage = Math.round(
    prayers.reduce((acc, prayer) => acc + prayer.percentage, 0) / prayers.length
  );

  return (
    <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {isArabic ? "متتبع اتساق الصلاة" : "Prayer Consistency Tracker"}
        </h2>
        <p className="text-muted-foreground">
          {isArabic
            ? "الـ 30 يومًا الماضية - استمر في العمل الرائع!"
            : "Last 30 Days - Keep up the great work!"}
        </p>
      </div>

      {/* Circular Progress */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="relative">
          <svg className="w-48 h-48 transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-muted/20"
            />
            <motion.circle
              cx="96"
              cy="96"
              r="88"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 552" }}
              animate={{
                strokeDasharray: `${(overallPercentage / 100) * 552} 552`,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="text-primary" stopColor="currentColor" />
                <stop offset="100%" className="text-accent" stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              className="text-4xl font-bold text-primary"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {overallPercentage}%
            </motion.span>
            <span className="text-sm text-muted-foreground">
              {isArabic ? "إجمالي" : "Overall"}
            </span>
          </div>
        </div>

        {/* Prayer Breakdown */}
        <div className="flex-1 w-full space-y-4">
          {prayers.map((prayer, index) => (
            <motion.div
              key={prayer.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              onHoverStart={() => setSelectedPrayer(prayer.name)}
              onHoverEnd={() => setSelectedPrayer(null)}
              className="cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-foreground">{prayer.name}</span>
                <motion.span
                  className="text-sm font-bold text-primary"
                  animate={{
                    scale: selectedPrayer === prayer.name ? 1.1 : 1,
                  }}
                >
                  {prayer.percentage}%
                </motion.span>
              </div>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${prayer.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${prayer.percentage}%` }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly Overview */}
      <div className="border-t border-border pt-6">
        <h3 className="font-semibold text-foreground mb-4">
          {isArabic ? "نظرة عامة أسبوعية" : "Weekly Overview"}
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 7 }).map((_, i) => {
            const completion = Math.floor(Math.random() * 2) + 4; // 4 or 5 prayers
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm ${
                    completion === 5
                      ? "bg-gradient-to-br from-primary to-accent text-white"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {completion}
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {["S", "M", "T", "W", "T", "F", "S"][i]}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default PrayerTracker;
