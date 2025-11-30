import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { Users, BookOpen, Download, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

interface Student {
  id: string;
  full_name: string;
  totalPages: number;
  totalHours: number;
  totalDays: number;
}

interface StudentEntry {
  id: string;
  date: string;
  pages: number;
  time_minutes: number;
  attendance: 'present' | 'absent' | 'partial';
  notes: string | null;
}

const TeacherDashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [studentEntries, setStudentEntries] = useState<Record<string, StudentEntry>>({});
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    // Get all users with student role
    const { data: userRoles, error: rolesError } = await supabase
      .from('user_roles')
      .select('user_id, profiles(id, full_name)')
      .eq('role', 'student');

    if (rolesError || !userRoles) return;

    // Get memorization stats for each student
    const studentsWithStats = await Promise.all(
      userRoles.map(async (role: any) => {
        const userId = role.profiles.id;
        
        const { data: entries } = await supabase
          .from('memorization_entries')
          .select('*')
          .eq('user_id', userId);

        const totalPages = entries?.reduce((sum, e) => sum + Number(e.pages), 0) || 0;
        const totalMinutes = entries?.reduce((sum, e) => sum + e.time_minutes, 0) || 0;

        return {
          id: userId,
          full_name: role.profiles.full_name,
          totalPages,
          totalHours: totalMinutes / 60,
          totalDays: entries?.length || 0,
        };
      })
    );

    setStudents(studentsWithStats);
  };

  const viewStudentDetails = async (student: Student) => {
    setSelectedStudent(student);
    
    const { data, error } = await supabase
      .from('memorization_entries')
      .select('*')
      .eq('user_id', student.id)
      .order('date', { ascending: false });

    if (error || !data) return;

    const entriesMap = data.reduce((acc, entry) => {
      acc[entry.date] = entry;
      return acc;
    }, {} as Record<string, StudentEntry>);

    setStudentEntries(entriesMap);
  };

  const exportStudentData = (student: Student) => {
    // Create CSV content
    const csvContent = `Student: ${student.full_name}\nTotal Pages: ${student.totalPages}\nTotal Hours: ${student.totalHours.toFixed(1)}\nTotal Days: ${student.totalDays}\n`;
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${student.full_name.replace(/\s+/g, '_')}_memorization_stats.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getAttendanceColor = (attendance: 'present' | 'absent' | 'partial') => {
    switch (attendance) {
      case 'present':
        return 'bg-green-500';
      case 'absent':
        return 'bg-red-500';
      case 'partial':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const modifiers = {
    present: Object.entries(studentEntries)
      .filter(([_, entry]) => entry.attendance === 'present')
      .map(([date]) => new Date(date)),
    absent: Object.entries(studentEntries)
      .filter(([_, entry]) => entry.attendance === 'absent')
      .map(([date]) => new Date(date)),
    partial: Object.entries(studentEntries)
      .filter(([_, entry]) => entry.attendance === 'partial')
      .map(([date]) => new Date(date)),
  };

  const modifiersStyles = {
    present: {
      backgroundColor: 'rgb(34, 197, 94)',
      color: 'white',
      fontWeight: 'bold',
    },
    absent: {
      backgroundColor: 'rgb(239, 68, 68)',
      color: 'white',
      fontWeight: 'bold',
    },
    partial: {
      backgroundColor: 'rgb(234, 179, 8)',
      color: 'white',
      fontWeight: 'bold',
    },
  };

  const selectedEntry = selectedDate ? studentEntries[format(selectedDate, 'yyyy-MM-dd')] : null;

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Teacher Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor and track all students' memorization progress
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-primary" />
                <p className="text-sm font-medium text-muted-foreground">Total Students</p>
              </div>
              <p className="text-3xl font-bold text-primary">{students.length}</p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-6 w-6 text-accent" />
                <p className="text-sm font-medium text-muted-foreground">Total Pages Memorized</p>
              </div>
              <p className="text-3xl font-bold text-accent">
                {students.reduce((sum, s) => sum + s.totalPages, 0).toFixed(1)}
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="h-6 w-6 text-secondary" />
                <p className="text-sm font-medium text-muted-foreground">Active Students Today</p>
              </div>
              <p className="text-3xl font-bold text-secondary">
                {students.filter(s => s.totalDays > 0).length}
              </p>
            </Card>
          </div>

          {/* Students List */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Students</h2>
            <div className="space-y-4">
              {students.map((student, index) => (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-lg"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{student.full_name}</h3>
                    <div className="flex gap-4 mt-2">
                      <Badge variant="outline" className="gap-1">
                        <BookOpen className="h-3 w-3" />
                        {student.totalPages.toFixed(1)} pages
                      </Badge>
                      <Badge variant="outline">
                        {student.totalHours.toFixed(1)} hours
                      </Badge>
                      <Badge variant="outline">
                        {student.totalDays} days
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => viewStudentDetails(student)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{student.full_name}'s Progress</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="flex justify-center">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              modifiers={modifiers}
                              modifiersStyles={modifiersStyles}
                              className={cn("rounded-md border pointer-events-auto")}
                            />
                          </div>
                          
                          {selectedEntry && (
                            <Card className="p-4 bg-primary/5">
                              <h3 className="font-semibold mb-3">
                                {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
                              </h3>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">Attendance:</span>
                                  <Badge className={getAttendanceColor(selectedEntry.attendance)}>
                                    {selectedEntry.attendance.toUpperCase()}
                                  </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">Pages:</span>
                                  <Badge variant="secondary">{selectedEntry.pages}</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">Time:</span>
                                  <Badge variant="secondary">{selectedEntry.time_minutes} min</Badge>
                                </div>
                                {selectedEntry.notes && (
                                  <div>
                                    <span className="text-sm text-muted-foreground">Notes:</span>
                                    <p className="text-sm mt-1 p-2 bg-muted rounded">
                                      {selectedEntry.notes}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </Card>
                          )}

                          <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-green-500 rounded"></div>
                              <span className="text-sm">Present</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                              <span className="text-sm">Partial</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 bg-red-500 rounded"></div>
                              <span className="text-sm">Absent</span>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => exportStudentData(student)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </motion.div>
              ))}

              {students.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No students found. Students will appear here once they sign up.
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
