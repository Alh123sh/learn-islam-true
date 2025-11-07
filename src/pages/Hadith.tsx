import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Users, BookOpen, Sparkles } from "lucide-react";

const Hadith = () => {
  const categories = {
    worship: [
      {
        hadith: "The best among you are those who learn the Qur'an and teach it.",
        reference: "Sahih al-Bukhari 5027",
        narrator: "Uthman ibn Affan (RA)",
      },
      {
        hadith: "The most beloved deeds to Allah are those that are consistent, even if small.",
        reference: "Sahih al-Bukhari 6464, Sahih Muslim 783",
        narrator: "Aisha (RA)",
      },
    ],
    manners: [
      {
        hadith: "None of you truly believes until he loves for his brother what he loves for himself.",
        reference: "Sahih al-Bukhari 13, Sahih Muslim 45",
        narrator: "Anas ibn Malik (RA)",
      },
      {
        hadith: "The believer is the one from whose tongue and hand the people are safe.",
        reference: "Jami' at-Tirmidhi 2627",
        narrator: "Abu Hurairah (RA)",
      },
      {
        hadith: "A true Muslim is one from whose tongue and hands others are safe.",
        reference: "Sahih al-Bukhari 10",
        narrator: "Abdullah ibn Amr (RA)",
      },
    ],
    patience: [
      {
        hadith: "How wonderful is the affair of the believer, for his affairs are all good. If something good happens to him, he is grateful, and that is good for him. And if something bad happens to him, he bears it with patience, and that is good for him.",
        reference: "Sahih Muslim 2999",
        narrator: "Suhaib (RA)",
      },
      {
        hadith: "The believer who mixes with people and bears their annoyance with patience will have a greater reward than the one who does not mix with people and does not put up with their annoyance.",
        reference: "Sunan Ibn Majah 4032",
        narrator: "Ibn Umar (RA)",
      },
    ],
    family: [
      {
        hadith: "The one who does not show mercy will not be shown mercy.",
        reference: "Sahih al-Bukhari 6013",
        narrator: "Abu Hurairah (RA)",
      },
      {
        hadith: "The best of you are those who are best to their families.",
        reference: "Jami' at-Tirmidhi 3895",
        narrator: "Aisha (RA)",
      },
      {
        hadith: "The most complete of believers in faith are those best in character.",
        reference: "Jami' at-Tirmidhi 1162",
        narrator: "Abu Hurairah (RA)",
      },
    ],
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hadith Corner</h1>
          <p className="text-lg text-muted-foreground">
            Verified Hadiths from authentic collections, categorized by topic
          </p>
        </div>

        {/* Featured Hadith */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-gradient-to-br from-primary to-accent text-white">
            <div className="flex items-start gap-4">
              <Sparkles className="h-8 w-8 flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Featured Hadith</h2>
                <blockquote className="text-xl italic leading-relaxed">
                  "Actions are judged by intentions, so each man will have what he intended."
                </blockquote>
                <div className="space-y-1 text-white/90">
                  <p className="text-sm">— Sahih al-Bukhari 1, Sahih Muslim 1907</p>
                  <p className="text-sm">Narrated by Umar ibn al-Khattab (RA)</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Categories */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="worship" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="worship" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Worship
              </TabsTrigger>
              <TabsTrigger value="manners" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Manners
              </TabsTrigger>
              <TabsTrigger value="patience" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Patience
              </TabsTrigger>
              <TabsTrigger value="family" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Family
              </TabsTrigger>
            </TabsList>

            <TabsContent value="worship" className="space-y-6">
              {categories.worship.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <blockquote className="text-lg mb-4 leading-relaxed">
                    "{item.hadith}"
                  </blockquote>
                  <div className="space-y-1 text-sm text-muted-foreground border-l-2 border-primary/30 pl-4">
                    <p className="font-medium">Reference: {item.reference}</p>
                    <p>Narrated by {item.narrator}</p>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="manners" className="space-y-6">
              {categories.manners.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <blockquote className="text-lg mb-4 leading-relaxed">
                    "{item.hadith}"
                  </blockquote>
                  <div className="space-y-1 text-sm text-muted-foreground border-l-2 border-primary/30 pl-4">
                    <p className="font-medium">Reference: {item.reference}</p>
                    <p>Narrated by {item.narrator}</p>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="patience" className="space-y-6">
              {categories.patience.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <blockquote className="text-lg mb-4 leading-relaxed">
                    "{item.hadith}"
                  </blockquote>
                  <div className="space-y-1 text-sm text-muted-foreground border-l-2 border-primary/30 pl-4">
                    <p className="font-medium">Reference: {item.reference}</p>
                    <p>Narrated by {item.narrator}</p>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="family" className="space-y-6">
              {categories.family.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <blockquote className="text-lg mb-4 leading-relaxed">
                    "{item.hadith}"
                  </blockquote>
                  <div className="space-y-1 text-sm text-muted-foreground border-l-2 border-primary/30 pl-4">
                    <p className="font-medium">Reference: {item.reference}</p>
                    <p>Narrated by {item.narrator}</p>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8 bg-muted/50">
            <h2 className="text-2xl font-bold mb-4">About Our Sources</h2>
            <p className="text-muted-foreground mb-4">
              All Hadiths presented on Islamic Learning Hub are from authentic collections verified by Islamic scholars:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>Sahih al-Bukhari</strong> - The most authentic Hadith collection</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>Sahih Muslim</strong> - Second most authentic collection</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>Jami' at-Tirmidhi</strong> - One of the six major Hadith books</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span><strong>Sunan Abu Dawud, Ibn Majah</strong> - Reliable Hadith collections</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hadith;
