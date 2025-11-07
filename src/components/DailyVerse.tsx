import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

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
    <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 space-y-4">
          <div className="text-right">
            <p className="text-2xl md:text-3xl font-semibold text-primary leading-relaxed" dir="rtl">
              {verse.arabic}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-foreground/90 italic">
              "{verse.translation}"
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              — {verse.reference}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DailyVerse;
