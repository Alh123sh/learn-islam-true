import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, CheckCircle } from "lucide-react";
import QuranMemorizationCalendar from "@/components/QuranMemorizationCalendar";

const Quran = () => {
  const beginnerSurahs = [
    { number: 1, name: "Al-Fatihah", translation: "The Opening", verses: 7 },
    { number: 112, name: "Al-Ikhlas", translation: "The Sincerity", verses: 4 },
    { number: 113, name: "Al-Falaq", translation: "The Daybreak", verses: 5 },
    { number: 114, name: "An-Nas", translation: "Mankind", verses: 6 },
    { number: 110, name: "An-Nasr", translation: "The Victory", verses: 3 },
    { number: 108, name: "Al-Kawthar", translation: "The Abundance", verses: 3 },
  ];

  const tips = [
    "Start with short surahs and be consistent",
    "Recite daily, even if it's just a few verses",
    "Understand the meaning of what you memorize",
    "Recite to someone who can correct your mistakes",
    "Review previously memorized portions regularly",
    "Make dua for Allah to make it easy for you",
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Memorize the Qur'an — 6-Month Journey</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Our structured 6-month plan helps you memorize the Qur'an deeply — with focus on <strong>mutashabihat (similar verses)</strong> so you avoid confusion between them.
          </p>
          <p className="text-muted-foreground mb-6">
            Each week includes: daily schedule with review sections, tafsir and context of verses, mutashabihat highlighting, memorization tracker, and dua for knowledge.
          </p>
          <Card className="p-6 bg-primary/10 border-primary/30">
            <p className="text-lg font-semibold">
              "The one who recites and memorizes the Qur'an will be with the noble, righteous scribes."
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              — Prophet Muhammad ﷺ (Sahih al-Bukhari 4937)
            </p>
          </Card>
          <Card className="mt-6 p-6 bg-accent/5 border-accent/20">
            <p className="text-right text-muted-foreground mb-2" dir="rtl">
              خطّة منظّمة لحفظ القرآن الكريم في ستة أشهر، مع التركيز على المتشابهات لتجنّب الخلط بينها.
            </p>
            <p className="text-right text-sm text-muted-foreground" dir="rtl">
              تشمل الخطة اليومية: المراجعة، تفسير الآيات، جدول الحفظ، والدعاء بالتوفيق.
            </p>
          </Card>
        </div>

        {/* Memorization Calendar */}
        <div className="max-w-4xl mx-auto mb-12">
          <QuranMemorizationCalendar />
        </div>

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Tips for Successful Memorization</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <Card key={index} className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/90">{tip}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Surahs for Beginners */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6">Recommended Surahs for Beginners</h2>
          <p className="text-muted-foreground mb-6">
            Start your journey with these shorter surahs from the end of the Qur'an
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {beginnerSurahs.map((surah) => (
              <Card key={surah.number} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{surah.name}</h3>
                    <p className="text-sm text-muted-foreground">{surah.translation}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{surah.number}</div>
                    <p className="text-xs text-muted-foreground">{surah.verses} verses</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Surah
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Weekly Plan */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-3xl font-bold mb-6">Weekly Memorization Plan</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Week 1-2: Al-Fatihah</h3>
                  <p className="text-muted-foreground">Master the opening chapter with proper Tajweed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Week 3: Al-Ikhlas, Al-Falaq, An-Nas</h3>
                  <p className="text-muted-foreground">The three protective surahs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Week 4: Review & Perfect</h3>
                  <p className="text-muted-foreground">Solidify what you've learned and improve recitation</p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent hover:opacity-90">
              <Download className="h-4 w-4 mr-2" />
              Download Printable Tracker
            </Button>
          </Card>
        </div>

        {/* Scholar Advice */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-accent/10 border-accent/30">
            <h2 className="text-2xl font-bold mb-6">Advice from Scholars</h2>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-primary pl-4">
                <p className="text-lg mb-2">
                  "Whoever wishes to memorize the Qur'an must be consistent in reciting it, day and night, even if it's a little."
                </p>
                <footer className="text-sm text-muted-foreground">— Ibn al-Jazari</footer>
              </blockquote>
              <blockquote className="border-l-4 border-primary pl-4">
                <p className="text-lg mb-2">
                  "The best time for memorization is the early morning after Fajr prayer, when the mind is fresh and focused."
                </p>
                <footer className="text-sm text-muted-foreground">— Traditional Islamic Teaching</footer>
              </blockquote>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quran;
