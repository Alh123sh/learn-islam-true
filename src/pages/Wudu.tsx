import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ChevronLeft, Droplets } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface WuduStep {
  number: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  arabic: string;
  transliteration: string;
  translation: string;
  reference: string;
  referenceAr: string;
}

const wuduSteps: WuduStep[] = [
  {
    number: 1,
    title: "Intention (Niyyah)",
    titleAr: "النية",
    description: "Make the intention in your heart to perform wudu for the sake of Allah.",
    descriptionAr: "انو في قلبك أن تتوضأ لله تعالى",
    arabic: "نَوَيْتُ الوُضُوءَ لِرَفْعِ الحَدَثِ",
    transliteration: "Nawaytul wudu'a liraf'il hadath",
    translation: "I intend to perform wudu to remove impurity",
    reference: "The Prophet (ﷺ) said: 'Actions are by intentions' (Bukhari 1)",
    referenceAr: "قال النبي ﷺ: 'إنما الأعمال بالنيات' (البخاري ١)",
  },
  {
    number: 2,
    title: "Say Bismillah",
    titleAr: "البسملة",
    description: "Begin by saying Bismillah (In the name of Allah).",
    descriptionAr: "ابدأ بقول بسم الله",
    arabic: "بِسْمِ اللهِ",
    transliteration: "Bismillah",
    translation: "In the name of Allah",
    reference: "The Prophet (ﷺ) said: 'There is no wudu for one who does not mention Allah's name' (Abu Dawud 101)",
    referenceAr: "قال النبي ﷺ: 'لا وضوء لمن لم يذكر اسم الله عليه' (أبو داود ١٠١)",
  },
  {
    number: 3,
    title: "Wash Both Hands",
    titleAr: "غسل اليدين",
    description: "Wash both hands up to the wrists three times, making sure water reaches between the fingers.",
    descriptionAr: "اغسل يديك إلى الرسغين ثلاث مرات مع التخليل بين الأصابع",
    arabic: "",
    transliteration: "",
    translation: "Wash hands thoroughly including between fingers",
    reference: "As practiced by the Prophet (ﷺ) (Bukhari 159)",
    referenceAr: "كما كان يفعل النبي ﷺ (البخاري ١٥٩)",
  },
  {
    number: 4,
    title: "Rinse Mouth",
    titleAr: "المضمضة",
    description: "Take water in your right hand, rinse your mouth three times, and spit it out.",
    descriptionAr: "خذ ماء بيدك اليمنى وتمضمض ثلاث مرات",
    arabic: "",
    transliteration: "",
    translation: "Rinse the mouth thoroughly",
    reference: "As practiced by the Prophet (ﷺ) (Muslim 235)",
    referenceAr: "كما كان يفعل النبي ﷺ (مسلم ٢٣٥)",
  },
  {
    number: 5,
    title: "Rinse Nose",
    titleAr: "الاستنشاق",
    description: "Sniff water into your nostrils three times with your right hand, then blow it out with your left hand.",
    descriptionAr: "استنشق الماء في أنفك ثلاث مرات ثم استنثر بيدك اليسرى",
    arabic: "",
    transliteration: "",
    translation: "Sniff water into nostrils and blow out",
    reference: "The Prophet (ﷺ) said: 'Exaggerate in rinsing the nose unless you are fasting' (Tirmidhi 788)",
    referenceAr: "قال النبي ﷺ: 'وبالغ في الاستنشاق إلا أن تكون صائماً' (الترمذي ٧٨٨)",
  },
  {
    number: 6,
    title: "Wash Face",
    titleAr: "غسل الوجه",
    description: "Wash your entire face from the hairline to the chin and from ear to ear three times.",
    descriptionAr: "اغسل وجهك كاملاً من منابت الشعر إلى الذقن ومن الأذن إلى الأذن ثلاث مرات",
    arabic: "",
    transliteration: "",
    translation: "Wash the entire face thoroughly",
    reference: "As commanded in the Quran (5:6)",
    referenceAr: "كما أمر الله في القرآن (المائدة:٦)",
  },
  {
    number: 7,
    title: "Wash Arms",
    titleAr: "غسل الذراعين",
    description: "Wash your right arm from fingertips to elbow three times, then the left arm.",
    descriptionAr: "اغسل ذراعك الأيمن من أطراف الأصابع إلى المرفق ثلاث مرات ثم الأيسر",
    arabic: "",
    transliteration: "",
    translation: "Wash arms including elbows",
    reference: "As commanded in the Quran (5:6)",
    referenceAr: "كما أمر الله في القرآن (المائدة:٦)",
  },
  {
    number: 8,
    title: "Wipe Head",
    titleAr: "مسح الرأس",
    description: "Wipe your head once with wet hands from front to back and back to front.",
    descriptionAr: "امسح رأسك مرة واحدة من الأمام إلى الخلف ثم من الخلف إلى الأمام",
    arabic: "",
    transliteration: "",
    translation: "Wipe over the head once",
    reference: "As practiced by the Prophet (ﷺ) (Bukhari 185)",
    referenceAr: "كما كان يفعل النبي ﷺ (البخاري ١٨٥)",
  },
  {
    number: 9,
    title: "Wipe Ears",
    titleAr: "مسح الأذنين",
    description: "Wipe the inside and outside of both ears with wet fingers.",
    descriptionAr: "امسح داخل وخارج الأذنين بأصابع مبللة",
    arabic: "",
    transliteration: "",
    translation: "Wipe inside and outside of ears",
    reference: "The Prophet (ﷺ) said: 'The ears are part of the head' (Tirmidhi 37)",
    referenceAr: "قال النبي ﷺ: 'الأذنان من الرأس' (الترمذي ٣٧)",
  },
  {
    number: 10,
    title: "Wash Feet",
    titleAr: "غسل القدمين",
    description: "Wash your right foot up to the ankle three times, including between the toes, then the left foot.",
    descriptionAr: "اغسل قدمك اليمنى إلى الكعبين ثلاث مرات مع التخليل بين الأصابع ثم القدم اليسرى",
    arabic: "",
    transliteration: "",
    translation: "Wash feet including ankles and between toes",
    reference: "As commanded in the Quran (5:6)",
    referenceAr: "كما أمر الله في القرآن (المائدة:٦)",
  },
  {
    number: 11,
    title: "Dua After Wudu",
    titleAr: "دعاء بعد الوضوء",
    description: "Recite the dua after completing wudu.",
    descriptionAr: "ادع بالدعاء المأثور بعد إتمام الوضوء",
    arabic: "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    transliteration: "Ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh",
    translation: "I bear witness that there is no deity except Allah alone, without partner, and I bear witness that Muhammad is His slave and Messenger",
    reference: "The Prophet (ﷺ) said: 'Whoever says this after wudu, the eight gates of Paradise are opened for him' (Muslim 234)",
    referenceAr: "قال النبي ﷺ: 'من قالها فتحت له أبواب الجنة الثمانية' (مسلم ٢٣٤)",
  },
];

const Wudu = () => {
  const { isArabic } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < wuduSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / wuduSteps.length) * 100;
  const step = wuduSteps[currentStep];

  return (
    <div className="min-h-screen py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block p-4 rounded-full bg-primary/10 mb-4"
          >
            <Droplets className="h-12 w-12 text-primary" />
          </motion.div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {isArabic ? "كيفية الوضوء" : "How to Perform Wudu"}
          </h1>
          <p className="text-muted-foreground">
            {isArabic 
              ? "تعلم خطوات الوضوء الصحيحة كما علمنا النبي ﷺ"
              : "Learn the correct steps of ablution as taught by the Prophet ﷺ"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{isArabic ? "الخطوة" : "Step"} {currentStep + 1} {isArabic ? "من" : "of"} {wuduSteps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="inline-block text-6xl font-bold text-primary mb-4"
                >
                  {step.number}
                </motion.div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {isArabic ? step.titleAr : step.title}
                </h2>
                <p className="text-muted-foreground">
                  {isArabic ? step.descriptionAr : step.description}
                </p>
              </div>

              {step.arabic && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 p-6 rounded-lg bg-primary/5 border border-primary/20"
                >
                  <p className="text-2xl text-center font-amiri mb-3 text-foreground leading-loose">
                    {step.arabic}
                  </p>
                  <p className="text-center text-muted-foreground italic mb-2">
                    {step.transliteration}
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    {step.translation}
                  </p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg"
              >
                <p className="font-semibold mb-1 text-foreground">
                  {isArabic ? "المرجع:" : "Reference:"}
                </p>
                <p>{isArabic ? step.referenceAr : step.reference}</p>
              </motion.div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
            className="gap-2"
          >
            {isArabic ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            {isArabic ? "السابق" : "Previous"}
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={currentStep === wuduSteps.length - 1}
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            {isArabic ? "التالي" : "Next"}
            {isArabic ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card className="p-6 bg-accent/5 border-accent/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {isArabic ? "ملاحظات هامة" : "Important Notes"}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  {isArabic 
                    ? "يجب غسل كل عضو ثلاث مرات ما عدا مسح الرأس والأذنين مرة واحدة"
                    : "Each part should be washed three times except wiping the head and ears once"}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  {isArabic 
                    ? "يجب أن يصل الماء إلى جميع أجزاء العضو"
                    : "Water must reach all parts of each limb"}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  {isArabic 
                    ? "يستحب عدم الإسراف في استخدام الماء"
                    : "It is recommended not to waste water"}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  {isArabic 
                    ? "الترتيب والموالاة (عدم التفريق بين الأعضاء) شرط لصحة الوضوء"
                    : "Order and continuity (not delaying between limbs) are conditions for valid wudu"}
                </span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Wudu;
