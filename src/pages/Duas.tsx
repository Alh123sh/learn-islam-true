import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Duas = () => {
  const morningDuas = [
    {
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
      transliteration: "Asbahna wa asbahal-mulku lillah, walhamdu lillah",
      translation: "We have entered a new day and with it all dominion belongs to Allah, and all praise is for Allah.",
      reference: "Sahih Muslim 2723",
    },
    {
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
      transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaykan-nushur",
      translation: "O Allah, by You we enter the morning, by You we enter the evening, by You we live, by You we die, and to You is the resurrection.",
      reference: "Jami' at-Tirmidhi 3391",
    },
  ];

  const eveningDuas = [
    {
      arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
      transliteration: "Amsayna wa amsal-mulku lillah, walhamdu lillah",
      translation: "We have entered the evening and with it all dominion belongs to Allah, and all praise is for Allah.",
      reference: "Sahih Muslim 2723",
    },
  ];

  const dailyDuas = [
    {
      title: "Before Sleeping",
      arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
      transliteration: "Bismika Allahumma amutu wa ahya",
      translation: "In Your name, O Allah, I die and I live.",
      reference: "Sahih al-Bukhari 6312",
    },
    {
      title: "Upon Waking",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur",
      translation: "All praise is for Allah who gave us life after having taken it from us, and to Him is the resurrection.",
      reference: "Sahih al-Bukhari 6312",
    },
    {
      title: "Before Eating",
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillah",
      translation: "In the name of Allah",
      reference: "Sunan Ibn Majah 3264",
    },
    {
      title: "After Eating",
      arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
      transliteration: "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana muslimeen",
      translation: "All praise is for Allah who fed us and gave us drink and made us Muslims.",
      reference: "Sunan Abu Dawud 3850",
    },
  ];

  const specialDuas = [
    {
      title: "For Anxiety & Worry",
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الهَمِّ وَالْحَزَنِ",
      transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan",
      translation: "O Allah, I seek refuge in You from anxiety and grief.",
      reference: "Sahih al-Bukhari 6369",
    },
    {
      title: "For Forgiveness",
      arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
      transliteration: "Rabbighfir li wa tub 'alayya innaka antat-Tawwabur-Rahim",
      translation: "My Lord, forgive me and accept my repentance, for You are the Accepting of Repentance, the Most Merciful.",
      reference: "Sunan Abu Dawud 1516",
    },
    {
      title: "For Travel",
      arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ",
      transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrineen, wa inna ila Rabbina lamunqalibun",
      translation: "Glory is to Him who has provided this for us though we could never have had it by our efforts. Surely, to our Lord we are returning.",
      reference: "Sunan Abu Dawud 2602",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Duas & Adhkar</h1>
          <p className="text-lg text-muted-foreground">
            Authentic supplications from the Prophet Muhammad ﷺ for daily life
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="morning" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="morning">Morning</TabsTrigger>
              <TabsTrigger value="evening">Evening</TabsTrigger>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="special">Special Occasions</TabsTrigger>
            </TabsList>

            <TabsContent value="morning" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Morning Adhkar</h2>
              {morningDuas.map((dua, index) => (
                <Card key={index} className="p-6">
                  <div className="bg-primary/5 rounded-lg p-6 mb-4">
                    <p className="text-2xl font-semibold text-primary text-right leading-relaxed mb-4" dir="rtl">
                      {dua.arabic}
                    </p>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      {dua.transliteration}
                    </p>
                    <p className="text-foreground/90">
                      "{dua.translation}"
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground border-l-2 border-primary/30 pl-3">
                    Reference: {dua.reference}
                  </p>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="evening" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Evening Adhkar</h2>
              {eveningDuas.map((dua, index) => (
                <Card key={index} className="p-6">
                  <div className="bg-primary/5 rounded-lg p-6 mb-4">
                    <p className="text-2xl font-semibold text-primary text-right leading-relaxed mb-4" dir="rtl">
                      {dua.arabic}
                    </p>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      {dua.transliteration}
                    </p>
                    <p className="text-foreground/90">
                      "{dua.translation}"
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground border-l-2 border-primary/30 pl-3">
                    Reference: {dua.reference}
                  </p>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="daily" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Daily Duas</h2>
              {dailyDuas.map((dua, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-accent">{dua.title}</h3>
                  <div className="bg-primary/5 rounded-lg p-6 mb-4">
                    <p className="text-2xl font-semibold text-primary text-right leading-relaxed mb-4" dir="rtl">
                      {dua.arabic}
                    </p>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      {dua.transliteration}
                    </p>
                    <p className="text-foreground/90">
                      "{dua.translation}"
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground border-l-2 border-primary/30 pl-3">
                    Reference: {dua.reference}
                  </p>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="special" className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Special Occasions</h2>
              {specialDuas.map((dua, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-accent">{dua.title}</h3>
                  <div className="bg-primary/5 rounded-lg p-6 mb-4">
                    <p className="text-xl font-semibold text-primary text-right leading-relaxed mb-4" dir="rtl">
                      {dua.arabic}
                    </p>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      {dua.transliteration}
                    </p>
                    <p className="text-foreground/90">
                      "{dua.translation}"
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground border-l-2 border-primary/30 pl-3">
                    Reference: {dua.reference}
                  </p>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Duas;
