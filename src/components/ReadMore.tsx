import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReadMoreProps {
  children: React.ReactNode;
  preview?: string;
}

const ReadMore = ({ children, preview }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isArabic } = useLanguage();

  return (
    <div className="space-y-2">
      {preview && !isExpanded && (
        <p className="text-muted-foreground">{preview}</p>
      )}
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary hover:text-primary/80"
      >
        {isExpanded ? (
          <>
            {isArabic ? "إخفاء" : "Show Less"}
            <ChevronUp className="ml-1 h-4 w-4" />
          </>
        ) : (
          <>
            {isArabic ? "اقرأ المزيد" : "Read More"}
            <ChevronDown className="ml-1 h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
};

export default ReadMore;
