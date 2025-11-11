import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface PrayerTime {
  name: string;
  time: string;
  nameAr: string;
}

const PrayerTimes = () => {
  const { isArabic } = useLanguage();
  const [prayers, setPrayers] = useState<PrayerTime[]>([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<string>("");
  const [currentPrayer, setCurrentPrayer] = useState<string>("");

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        // Get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            
            // Fetch prayer times from Aladhan API
            const response = await fetch(
              `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
            );
            const data = await response.json();
            
            if (data.code === 200) {
              const timings = data.data.timings;
              const prayerData: PrayerTime[] = [
                { name: "Fajr", time: timings.Fajr, nameAr: "الفجر" },
                { name: "Dhuhr", time: timings.Dhuhr, nameAr: "الظهر" },
                { name: "Asr", time: timings.Asr, nameAr: "العصر" },
                { name: "Maghrib", time: timings.Maghrib, nameAr: "المغرب" },
                { name: "Isha", time: timings.Isha, nameAr: "العشاء" },
              ];
              
              setPrayers(prayerData);
              setLocation(data.data.meta.timezone);
              
              // Determine current prayer
              const now = new Date();
              const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
              
              for (let i = 0; i < prayerData.length; i++) {
                if (currentTime < prayerData[i].time) {
                  setCurrentPrayer(prayerData[i].name);
                  break;
                }
              }
            }
            setLoading(false);
          }, () => {
            // Fallback to default location (Mecca)
            fetchDefaultPrayerTimes();
          });
        } else {
          fetchDefaultPrayerTimes();
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        setLoading(false);
      }
    };

    const fetchDefaultPrayerTimes = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity?city=Makkah&country=Saudi Arabia&method=2`
        );
        const data = await response.json();
        
        if (data.code === 200) {
          const timings = data.data.timings;
          const prayerData: PrayerTime[] = [
            { name: "Fajr", time: timings.Fajr, nameAr: "الفجر" },
            { name: "Dhuhr", time: timings.Dhuhr, nameAr: "الظهر" },
            { name: "Asr", time: timings.Asr, nameAr: "العصر" },
            { name: "Maghrib", time: timings.Maghrib, nameAr: "المغرب" },
            { name: "Isha", time: timings.Isha, nameAr: "العشاء" },
          ];
          
          setPrayers(prayerData);
          setLocation("Makkah, Saudi Arabia");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching default prayer times:", error);
        setLoading(false);
      }
    };

    fetchPrayerTimes();
  }, []);

  if (loading) {
    return (
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">
            {isArabic ? "أوقات الصلاة" : "Prayer Times"}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="wait">
            {prayers.map((prayer, index) => (
              <motion.div
                key={prayer.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex justify-between items-center p-3 rounded-lg transition-all ${
                  currentPrayer === prayer.name
                    ? "bg-primary/10 border border-primary/30"
                    : "bg-muted/30"
                }`}
              >
                <span className="font-medium text-foreground">
                  {isArabic ? prayer.nameAr : prayer.name}
                </span>
                <span className="font-mono text-lg text-foreground font-semibold">
                  {prayer.time}
                </span>
                {currentPrayer === prayer.name && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-2 w-2 h-2 rounded-full bg-primary animate-pulse"
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};

export default PrayerTimes;
