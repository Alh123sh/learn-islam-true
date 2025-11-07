import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Heart, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Islamic Learning Hub</h1>
            <p className="text-lg text-muted-foreground">
              Dedicated to spreading authentic Islamic knowledge
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Islamic Learning Hub was created with a simple yet profound mission: to make authentic Islamic knowledge 
              accessible to everyone, whether you're a lifelong Muslim or a curious learner taking your first steps in 
              understanding Islam.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that learning Islam should be based on the Qur'an and authentic Hadith, free from cultural 
              additions or personal interpretations. Every piece of content on this platform is carefully verified from 
              trusted sources like Sahih al-Bukhari, Sahih Muslim, and other authentic collections.
            </p>
          </Card>

          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-accent" />
              <h2 className="text-2xl font-bold">About the Founder</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This website is developed by <strong>Shueyb</strong>, a pharmacist, product developer, and student of knowledge. 
              Like many Muslims, he found himself seeking reliable, authentic sources to deepen his understanding of Islam. 
              As he learned, he realized the importance of going back to the original sources - the Qur'an and Sunnah.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              His mission is to combine technology and authentic Islamic education to spread beneficial knowledge worldwide. 
              By presenting Islamic teachings in a clear, organized, and accessible way, he aims to make it easier for 
              everyone to learn and practice Islam as taught by the Prophet Muhammad ﷺ.
            </p>
          </Card>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Our Commitment to Authenticity</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                All content is based on Qur'an and authentic Hadith
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                References are clearly cited for verification
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                No personal opinions or unverified information
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                Focus on clarity and spiritual benefit
              </li>
            </ul>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">Get in Touch</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Have questions, suggestions, or feedback? We'd love to hear from you. Please feel free to reach out.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input placeholder="Your name" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Your message..." 
                  className="min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground text-center">
                You can also reach us at:{" "}
                <a href="mailto:contact@islamiclearninghub.com" className="text-primary hover:underline">
                  contact@islamiclearninghub.com
                </a>
              </p>
            </div>
          </Card>

          {/* Newsletter */}
          <Card className="p-8 mt-8 bg-accent/10 border-accent/30">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get weekly Islamic reminders, new content updates, and authentic Hadith delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-accent hover:opacity-90">Subscribe</Button>
            </div>
          </Card>

          {/* Disclaimer */}
          <Card className="p-6 mt-8 bg-muted/50">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Disclaimer:</strong> All content on Islamic Learning Hub is based on authentic Qur'an and Sunnah, 
              verified from trusted sources including Sahih al-Bukhari, Sahih Muslim, Tirmidhi, Abu Dawud, and other 
              authentic collections. We strive for accuracy but encourage readers to verify information with qualified scholars.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
