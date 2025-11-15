import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const MemorizationHeatmap = () => {
  const { isArabic } = useLanguage();
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  // Generate 12 weeks of data (84 days)
  const generateHeatmapData = () => {
    const data = [];
    for (let i = 0; i < 84; i++) {
      const verses = Math.floor(Math.random() * 15); // 0-14 verses per day
      data.push({
        day: i,
        verses,
        intensity: verses === 0 ? 0 : verses <= 3 ? 1 : verses <= 7 ? 2 : verses <= 10 ? 3 : 4,
      });
    }
    return data;
  };

  const heatmapData = generateHeatmapData();
  const totalVerses = heatmapData.reduce((sum, day) => sum + day.verses, 0);
  const averageDaily = Math.round(totalVerses / heatmapData.length);

  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 0:
        return "bg-muted";
      case 1:
        return "bg-primary/20";
      case 2:
        return "bg-primary/40";
      case 3:
        return "bg-primary/60";
      case 4:
        return "bg-primary";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {isArabic ? "خريطة حرارة حفظ القرآن" : "Quran Memorization Heatmap"}
        </h2>
        <p className="text-muted-foreground">
          {isArabic ? "آخر 12 أسبوعًا من التقدم" : "Last 12 weeks of progress"}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4"
        >
          <p className="text-sm text-muted-foreground mb-1">
            {isArabic ? "إجمالي الآيات" : "Total Verses"}
          </p>
          <p className="text-2xl font-bold text-primary">{totalVerses}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-4"
        >
          <p className="text-sm text-muted-foreground mb-1">
            {isArabic ? "متوسط يومي" : "Daily Average"}
          </p>
          <p className="text-2xl font-bold text-accent">{averageDaily}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4"
        >
          <p className="text-sm text-muted-foreground mb-1">
            {isArabic ? "أطول سلسلة" : "Longest Streak"}
          </p>
          <p className="text-2xl font-bold text-primary">23 {isArabic ? "يوم" : "days"}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-4"
        >
          <p className="text-sm text-muted-foreground mb-1">
            {isArabic ? "السلسلة الحالية" : "Current Streak"}
          </p>
          <p className="text-2xl font-bold text-accent">7 {isArabic ? "أيام" : "days"}</p>
        </motion.div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="flex gap-1 mb-2">
            {["Mon", "Wed", "Fri"].map((day) => (
              <div key={day} className="w-4 text-xs text-muted-foreground" style={{ marginLeft: day === "Mon" ? 0 : "calc(2 * 1rem + 2px)" }}>
                {day}
              </div>
            ))}
          </div>
          <TooltipProvider>
            <div className="grid grid-rows-7 grid-flow-col gap-1">
              {heatmapData.map((day, index) => (
                <Tooltip key={day.day}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.005 }}
                      whileHover={{ scale: 1.2 }}
                      onHoverStart={() => setHoveredDay(day.day)}
                      onHoverEnd={() => setHoveredDay(null)}
                      className={`w-4 h-4 rounded-sm cursor-pointer transition-all ${getColorClass(
                        day.intensity
                      )} ${hoveredDay === day.day ? "ring-2 ring-secondary" : ""}`}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">
                      {day.verses} {isArabic ? "آية" : "verses"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
        <span className="text-sm text-muted-foreground">
          {isArabic ? "أقل" : "Less"}
        </span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((intensity) => (
            <div
              key={intensity}
              className={`w-4 h-4 rounded-sm ${getColorClass(intensity)}`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {isArabic ? "أكثر" : "More"}
        </span>
      </div>
    </Card>
  );
};

export default MemorizationHeatmap;
