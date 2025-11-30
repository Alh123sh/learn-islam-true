import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import QuranMemorizationCalendar from '@/components/QuranMemorizationCalendar';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Calendar as CalendarIcon, TrendingUp, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Stats {
  totalPages: number;
  totalHours: number;
  totalDays: number;
  currentStreak: number;
  longestStreak: number;
}

const StudentDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats>({
    totalPages: 0,
    totalHours: 0,
    totalDays: 0,
    currentStreak: 0,
    longestStreak: 0,
  });

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  const fetchStats = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('memorization_entries')
      .select('*')
      .eq('user_id', user.id)
      .order('date', { ascending: false });

    if (error || !data) return;

    const totalPages = data.reduce((sum, entry) => sum + Number(entry.pages), 0);
    const totalMinutes = data.reduce((sum, entry) => sum + entry.time_minutes, 0);
    const totalDays = data.length;

    // Calculate streaks
    const { currentStreak, longestStreak } = calculateStreaks(data);

    setStats({
      totalPages: totalPages,
      totalHours: totalMinutes / 60,
      totalDays,
      currentStreak,
      longestStreak,
    });
  };

  const calculateStreaks = (entries: any[]) => {
    if (entries.length === 0) return { currentStreak: 0, longestStreak: 0 };

    const dates = entries.map((e) => new Date(e.date)).sort((a, b) => b.getTime() - a.getTime());
    
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 1;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check current streak
    const mostRecent = new Date(dates[0]);
    mostRecent.setHours(0, 0, 0, 0);
    
    const daysDiff = Math.floor((today.getTime() - mostRecent.getTime()) / (1000 * 60 * 60 * 24));
    
    if (daysDiff <= 1) {
      currentStreak = 1;
      
      for (let i = 1; i < dates.length; i++) {
        const prevDate = new Date(dates[i - 1]);
        const currDate = new Date(dates[i]);
        prevDate.setHours(0, 0, 0, 0);
        currDate.setHours(0, 0, 0, 0);
        
        const diff = Math.floor((prevDate.getTime() - currDate.getTime()) / (1000 * 60 * 60 * 24));
        
        if (diff === 1) {
          currentStreak++;
        } else {
          break;
        }
      }
    }

    // Calculate longest streak
    for (let i = 1; i < dates.length; i++) {
      const prevDate = new Date(dates[i - 1]);
      const currDate = new Date(dates[i]);
      prevDate.setHours(0, 0, 0, 0);
      currDate.setHours(0, 0, 0, 0);
      
      const diff = Math.floor((prevDate.getTime() - currDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diff === 1) {
        tempStreak++;
      } else {
        longestStreak = Math.max(longestStreak, tempStreak);
        tempStreak = 1;
      }
    }
    
    longestStreak = Math.max(longestStreak, tempStreak, currentStreak);

    return { currentStreak, longestStreak };
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">My Memorization Journey</h1>
            <p className="text-muted-foreground">
              Track your progress and stay consistent in your Qur'an memorization
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <p className="text-sm font-medium text-muted-foreground">Total Pages</p>
                </div>
                <p className="text-3xl font-bold text-primary">{stats.totalPages.toFixed(1)}</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-6 w-6 text-accent" />
                  <p className="text-sm font-medium text-muted-foreground">Total Hours</p>
                </div>
                <p className="text-3xl font-bold text-accent">{stats.totalHours.toFixed(1)}</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <div className="flex items-center gap-3 mb-2">
                  <CalendarIcon className="h-6 w-6 text-secondary" />
                  <p className="text-sm font-medium text-muted-foreground">Days Active</p>
                </div>
                <p className="text-3xl font-bold text-secondary">{stats.totalDays}</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-6 w-6 text-orange-500" />
                  <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
                </div>
                <p className="text-3xl font-bold text-orange-500">{stats.currentStreak} days</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-6 w-6 text-green-500" />
                  <p className="text-sm font-medium text-muted-foreground">Longest Streak</p>
                </div>
                <p className="text-3xl font-bold text-green-500">{stats.longestStreak} days</p>
              </Card>
            </motion.div>
          </div>

          {/* Calendar */}
          <QuranMemorizationCalendar onUpdate={fetchStats} />
        </motion.div>
      </div>
    </div>
  );
};

export default StudentDashboard;
