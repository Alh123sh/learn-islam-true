import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, BookOpen, Save, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface MemorizationEntry {
  date: string;
  pages: number;
  timeMinutes: number;
}

const QuranMemorizationCalendar = () => {
  const { isArabic } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [pages, setPages] = useState("");
  const [timeMinutes, setTimeMinutes] = useState("");
  
  // Load entries from localStorage
  const [entries, setEntries] = useState<Record<string, MemorizationEntry>>(() => {
    const stored = localStorage.getItem("quran-memorization");
    return stored ? JSON.parse(stored) : {};
  });

  const saveEntry = () => {
    if (!date || !pages || !timeMinutes) return;
    
    const dateKey = format(date, "yyyy-MM-dd");
    const newEntries = {
      ...entries,
      [dateKey]: {
        date: dateKey,
        pages: parseFloat(pages),
        timeMinutes: parseInt(timeMinutes),
      },
    };
    
    setEntries(newEntries);
    localStorage.setItem("quran-memorization", JSON.stringify(newEntries));
    setPages("");
    setTimeMinutes("");
    setDialogOpen(false);
  };

  const deleteEntry = (dateKey: string) => {
    const newEntries = { ...entries };
    delete newEntries[dateKey];
    setEntries(newEntries);
    localStorage.setItem("quran-memorization", JSON.stringify(newEntries));
  };

  const selectedEntry = date ? entries[format(date, "yyyy-MM-dd")] : null;

  const totalPages = Object.values(entries).reduce((sum, entry) => sum + entry.pages, 0);
  const totalMinutes = Object.values(entries).reduce((sum, entry) => sum + entry.timeMinutes, 0);
  const totalDays = Object.keys(entries).length;

  // Custom day content to show attendance markers
  const modifiers = {
    attended: Object.keys(entries).map(dateStr => new Date(dateStr)),
  };

  const modifiersStyles = {
    attended: {
      backgroundColor: "hsl(var(--primary))",
      color: "hsl(var(--primary-foreground))",
      fontWeight: "bold",
    },
  };

  return (
    <Card className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              {isArabic ? "تقويم الحفظ اليومي" : "Daily Memorization Calendar"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isArabic 
                ? "سجل حفظك اليومي وتتبع تقدمك"
                : "Track your daily memorization progress"
              }
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <CalendarIcon className="h-4 w-4" />
                {isArabic ? "إضافة سجل" : "Add Entry"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {isArabic ? "سجل حفظ اليوم" : "Record Today's Memorization"}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <Label htmlFor="date">
                    {isArabic ? "التاريخ" : "Date"}
                  </Label>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{date ? format(date, "PPP") : "Select a date"}</span>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="pages">
                    {isArabic ? "عدد الصفحات" : "Pages Memorized"}
                  </Label>
                  <Input
                    id="pages"
                    type="number"
                    step="0.5"
                    placeholder={isArabic ? "مثال: 2" : "e.g., 2"}
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="time">
                    {isArabic ? "الوقت (بالدقائق)" : "Time Spent (minutes)"}
                  </Label>
                  <Input
                    id="time"
                    type="number"
                    placeholder={isArabic ? "مثال: 45" : "e.g., 45"}
                    value={timeMinutes}
                    onChange={(e) => setTimeMinutes(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Button 
                  onClick={saveEntry} 
                  className="w-full gap-2"
                  disabled={!pages || !timeMinutes}
                >
                  <Save className="h-4 w-4" />
                  {isArabic ? "حفظ" : "Save Entry"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="h-4 w-4 text-primary" />
                <p className="text-xs text-muted-foreground">
                  {isArabic ? "مجموع الصفحات" : "Total Pages"}
                </p>
              </div>
              <p className="text-2xl font-bold text-primary">{totalPages.toFixed(1)}</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-4 bg-accent/5 border-accent/20">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-accent" />
                <p className="text-xs text-muted-foreground">
                  {isArabic ? "مجموع الساعات" : "Total Hours"}
                </p>
              </div>
              <p className="text-2xl font-bold text-accent">
                {(totalMinutes / 60).toFixed(1)}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-4 bg-secondary/5 border-secondary/20">
              <div className="flex items-center gap-2 mb-1">
                <CalendarIcon className="h-4 w-4 text-secondary" />
                <p className="text-xs text-muted-foreground">
                  {isArabic ? "أيام الحضور" : "Days Attended"}
                </p>
              </div>
              <p className="text-2xl font-bold text-secondary">{totalDays}</p>
            </Card>
          </motion.div>
        </div>

        {/* Calendar */}
        <div className="flex justify-center mb-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiers={modifiers}
            modifiersStyles={modifiersStyles}
            className={cn("rounded-md border pointer-events-auto")}
          />
        </div>

        {/* Selected Day Details */}
        {selectedEntry && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6"
          >
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">
                  {date && format(date, "MMMM d, yyyy")}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteEntry(format(date!, "yyyy-MM-dd"))}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {isArabic ? "الصفحات:" : "Pages:"}
                  </span>
                  <Badge variant="secondary">{selectedEntry.pages}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {isArabic ? "الوقت:" : "Time:"}
                  </span>
                  <Badge variant="secondary">{selectedEntry.timeMinutes} {isArabic ? "دقيقة" : "min"}</Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Recent Entries */}
        {Object.keys(entries).length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-3">
              {isArabic ? "السجلات الأخيرة" : "Recent Entries"}
            </h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {Object.entries(entries)
                .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
                .slice(0, 5)
                .map(([dateKey, entry]) => (
                  <motion.div
                    key={dateKey}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-sm">
                        <p className="font-medium">{format(new Date(dateKey), "MMM d")}</p>
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(dateKey), "yyyy")}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="gap-1">
                          <BookOpen className="h-3 w-3" />
                          {entry.pages}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <Clock className="h-3 w-3" />
                          {entry.timeMinutes}m
                        </Badge>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteEntry(dateKey)}
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </motion.div>
                ))}
            </div>
          </div>
        )}
      </motion.div>
    </Card>
  );
};

export default QuranMemorizationCalendar;
