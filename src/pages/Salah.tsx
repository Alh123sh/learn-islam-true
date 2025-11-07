import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Salah = () => {
  const steps = [
    {
      title: "1. Make Intention (Niyyah)",
      arabic: "نِيَّة",
      description: "Make the intention in your heart to pray. The intention is not spoken aloud.",
      reference: "Actions are judged by intentions. (Sahih al-Bukhari 1)",
    },
    {
      title: "2. Raise Hands and Say Takbir",
      arabic: "اللّٰهُ أَكْبَر",
      transliteration: "Allahu Akbar",
      translation: "Allah is the Greatest",
      description: "Raise your hands to shoulder or ear level with palms facing forward.",
      reference: "Sahih al-Bukhari 735",
    },
    {
      title: "3. Place Right Hand Over Left",
      description: "Place your right hand over your left hand on your chest.",
      reference: "Sahih Muslim 401",
    },
    {
      title: "4. Recite the Opening Supplication",
      arabic: "سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَىٰ جَدُّكَ وَلَا إِلٰهَ غَيْرُكَ",
      transliteration: "Subhanaka Allahumma wa bihamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghayruk",
      translation: "Glory be to You, O Allah, and praise be to You. Blessed is Your name, exalted is Your majesty, and there is no deity worthy of worship except You.",
      reference: "Sunan Abu Dawud 775",
    },
    {
      title: "5. Recite Al-Fatihah",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      transliteration: "Bismillahir Rahmanir Raheem",
      translation: "In the name of Allah, the Most Gracious, the Most Merciful",
      description: "Recite Surah Al-Fatihah completely. It is a pillar of prayer.",
      reference: "There is no prayer for the one who does not recite the opening chapter of the Book. (Sahih al-Bukhari 756)",
    },
    {
      title: "6. Recite Additional Verses",
      description: "After Al-Fatihah, recite any portion of the Quran.",
      reference: "Sahih Muslim 397",
    },
    {
      title: "7. Bow in Ruku",
      arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      transliteration: "Subhana Rabbiyal Adheem",
      translation: "Glory be to my Lord, the Supreme",
      description: "Say Allahu Akbar and bow with your back straight, hands on knees. Recite the above at least three times.",
      reference: "Sahih Muslim 772",
    },
    {
      title: "8. Stand Up From Ruku",
      arabic: "سَمِعَ اللّٰهُ لِمَنْ حَمِدَهُ",
      transliteration: "Sami Allahu liman hamidah",
      translation: "Allah hears those who praise Him",
      description: "Stand up straight and say the above, then say:",
      additional: {
        arabic: "رَبَّنَا وَلَكَ الْحَمْدُ",
        transliteration: "Rabbana wa lakal hamd",
        translation: "Our Lord, to You is all praise",
      },
      reference: "Sahih al-Bukhari 789",
    },
    {
      title: "9. Prostrate in Sujood",
      arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
      transliteration: "Subhana Rabbiyal A'la",
      translation: "Glory be to my Lord, the Most High",
      description: "Say Allahu Akbar and prostrate with forehead, nose, palms, knees, and toes touching the ground. Recite the above at least three times.",
      reference: "Sahih Muslim 772",
    },
    {
      title: "10. Sit Between Two Prostrations",
      arabic: "رَبِّ اغْفِرْ لِي",
      transliteration: "Rabbighfir li",
      translation: "My Lord, forgive me",
      description: "Sit briefly and make this supplication.",
      reference: "Sunan Abu Dawud 874",
    },
    {
      title: "11. Second Prostration",
      description: "Prostrate again as before, saying the same supplication.",
      reference: "Sahih Muslim 772",
    },
    {
      title: "12. Sitting for Tashahhud",
      arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      description: "After completing two units (rakats), sit and recite the Tashahhud.",
      reference: "Sahih al-Bukhari 831",
    },
    {
      title: "13. Give Salaam (Tasleem)",
      arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
      transliteration: "Assalamu alaikum wa rahmatullah",
      translation: "Peace and mercy of Allah be upon you",
      description: "Turn your head to the right and say the above, then to the left and repeat.",
      reference: "Sahih Muslim 582",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How the Prophet ﷺ Prayed</h1>
          <p className="text-lg text-muted-foreground">
            A step-by-step guide with authentic references from Sahih al-Bukhari and Sahih Muslim
          </p>
          <Card className="mt-6 p-6 bg-accent/10 border-accent/30">
            <p className="text-lg font-semibold text-accent-foreground">
              "Pray as you have seen me praying."
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              — Prophet Muhammad ﷺ (Sahih al-Bukhari 631)
            </p>
          </Card>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  
                  {step.arabic && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-2xl font-semibold text-primary text-right leading-relaxed" dir="rtl">
                        {step.arabic}
                      </p>
                      {step.transliteration && (
                        <p className="text-sm text-muted-foreground mt-2 italic">
                          {step.transliteration}
                        </p>
                      )}
                      {step.translation && (
                        <p className="text-sm text-foreground/80 mt-1">
                          "{step.translation}"
                        </p>
                      )}
                    </div>
                  )}
                  
                  {step.description && (
                    <p className="text-muted-foreground">{step.description}</p>
                  )}
                  
                  {step.additional && (
                    <div className="bg-muted/30 rounded-lg p-3 mt-2">
                      <p className="text-lg font-semibold text-primary text-right" dir="rtl">
                        {step.additional.arabic}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 italic">
                        {step.additional.transliteration}
                      </p>
                      <p className="text-sm text-foreground/80">
                        "{step.additional.translation}"
                      </p>
                    </div>
                  )}
                  
                  <p className="text-xs text-muted-foreground border-l-2 border-primary/30 pl-3">
                    Reference: {step.reference}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Common Mistakes Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 bg-destructive/5 border-destructive/20">
            <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-destructive">•</span>
                Not reciting Al-Fatihah completely
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">•</span>
                Rushing through the prayer without proper focus
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">•</span>
                Not maintaining stillness in each position
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">•</span>
                Forgetting to say Allahu Akbar when changing positions
              </li>
              <li className="flex gap-2">
                <span className="text-destructive">•</span>
                Not placing all seven parts of the body on the ground during prostration
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Salah;
