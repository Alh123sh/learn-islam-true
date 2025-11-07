import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import DailyVerse from "@/components/DailyVerse";
import { BookOpen, Heart, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Learn Islam the Authentic Way
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Welcome to <strong>Islamic Learning Hub</strong>, a peaceful place where you can explore the beauty of Islam through the <strong>Qur'an</strong>, <strong>authentic Hadith</strong>, and the teachings of the Prophet Muhammad ﷺ.
            </p>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Our mission is to help you worship Allah with knowledge, sincerity, and love — just as the Prophet ﷺ taught his companions.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20">
              <p className="text-xl md:text-2xl text-white text-right font-semibold mb-2" dir="rtl">
                تعلّم الإسلام على الطريقة الصحيحة
              </p>
              <p className="text-sm md:text-base text-white/90 text-right" dir="rtl">
                مرحبًا بك في مركز التعلم الإسلامي، مكان هادئ تتعرّف فيه على جمال الإسلام من خلال القرآن الكريم والأحاديث النبوية الصحيحة وتعاليم النبي محمد ﷺ.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Welcome to Islamic Learning Hub
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to help Muslims and new learners understand Islam through the Qur'an and authentic Hadith. 
            Every piece of content is carefully verified from trusted sources including Sahih al-Bukhari, Sahih Muslim, 
            and other authentic collections.
          </p>
        </div>
      </section>

      {/* Daily Verse */}
      <section className="container mx-auto px-4 py-8">
        <DailyVerse />
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/salah">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Learn Salah</h3>
                <p className="text-muted-foreground">
                  Step-by-step guide on how the Prophet ﷺ prayed, with authentic references and common mistakes to avoid.
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/duas">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Duas & Adhkar</h3>
                <p className="text-muted-foreground">
                  Daily supplications from authentic Hadith for morning, evening, travel, and every occasion.
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/quran">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quran Memorization</h3>
                <p className="text-muted-foreground">
                  Structured memorization plans with tips from scholars and weekly tracking tools.
                </p>
              </div>
            </Card>
          </Link>

          <Link to="/hadith">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-full">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Hadith Corner</h3>
                <p className="text-muted-foreground">
                  Verified Hadiths categorized by topic - manners, worship, patience, and family.
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Prophet's Quote */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-accent text-white">
          <blockquote className="text-center space-y-4">
            <p className="text-2xl md:text-3xl font-semibold italic">
              "The best among you are those who learn the Qur'an and teach it."
            </p>
            <footer className="text-lg opacity-90">
              — Prophet Muhammad ﷺ (Sahih al-Bukhari 5027)
            </footer>
          </blockquote>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Begin Your Journey?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of learners studying authentic Islamic knowledge. Start with any topic that interests you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/salah">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Start with Salah
              </Button>
            </Link>
            <Link to="/quran">
              <Button size="lg" variant="outline">
                Memorize Quran
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
