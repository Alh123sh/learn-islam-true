import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Navigation, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const QiblaCompass = () => {
  const { isArabic } = useLanguage();
  const { toast } = useToast();
  const [qiblaDirection, setQiblaDirection] = useState<number>(0);
  const [deviceHeading, setDeviceHeading] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const calculateQiblaDirection = (lat: number, lon: number) => {
    // Kaaba coordinates
    const kaabaLat = 21.4225;
    const kaabaLon = 39.8262;

    const dLon = ((kaabaLon - lon) * Math.PI) / 180;
    const lat1 = (lat * Math.PI) / 180;
    const lat2 = (kaabaLat * Math.PI) / 180;

    const y = Math.sin(dLon) * Math.cos(lat2);
    const x =
      Math.cos(lat1) * Math.sin(lat2) -
      Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

    let bearing = Math.atan2(y, x);
    bearing = (bearing * 180) / Math.PI;
    bearing = (bearing + 360) % 360;

    return bearing;
  };

  const requestPermission = async () => {
    try {
      if (typeof DeviceOrientationEvent !== "undefined" && 
          typeof (DeviceOrientationEvent as any).requestPermission === "function") {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        if (permission === "granted") {
          setPermissionGranted(true);
          initializeCompass();
        } else {
          toast({
            title: isArabic ? "تم رفض الإذن" : "Permission Denied",
            description: isArabic 
              ? "يرجى السماح بالوصول إلى البوصلة في إعدادات المتصفح"
              : "Please allow compass access in browser settings",
            variant: "destructive",
          });
        }
      } else {
        setPermissionGranted(true);
        initializeCompass();
      }
    } catch (error) {
      console.error("Error requesting permission:", error);
    }
  };

  const initializeCompass = () => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const qibla = calculateQiblaDirection(latitude, longitude);
          setQiblaDirection(qibla);
          setLoading(false);
        },
        (error) => {
          console.error("Geolocation error:", error);
          toast({
            title: isArabic ? "خطأ في الموقع" : "Location Error",
            description: isArabic 
              ? "يرجى تفعيل خدمات الموقع"
              : "Please enable location services",
            variant: "destructive",
          });
          setLoading(false);
        }
      );
    }

    // Device orientation
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setDeviceHeading(360 - event.alpha);
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  };

  useEffect(() => {
    if (permissionGranted) {
      return initializeCompass();
    }
  }, [permissionGranted]);

  const relativeQiblaDirection = (qiblaDirection - deviceHeading + 360) % 360;

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover-lift">
      <div className="flex items-center gap-2 mb-6">
        <Navigation className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          {isArabic ? "اتجاه القبلة" : "Qibla Direction"}
        </h3>
      </div>

      {!permissionGranted ? (
        <div className="text-center py-8">
          <Compass className="h-16 w-16 mx-auto mb-4 text-primary" />
          <p className="text-sm text-muted-foreground mb-4">
            {isArabic 
              ? "يرجى السماح بالوصول إلى البوصلة لإظهار اتجاه القبلة"
              : "Allow compass access to show Qibla direction"}
          </p>
          <Button onClick={requestPermission} className="bg-primary hover:bg-primary/90">
            {isArabic ? "تفعيل البوصلة" : "Enable Compass"}
          </Button>
        </div>
      ) : loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="relative">
          {/* Compass Circle */}
          <div className="w-64 h-64 mx-auto relative">
            {/* Outer Circle */}
            <div className="absolute inset-0 rounded-full border-4 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5" />
            
            {/* Direction Markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-2 text-xs font-semibold text-primary">N</div>
              <div className="absolute right-2 text-xs font-semibold text-muted-foreground">E</div>
              <div className="absolute bottom-2 text-xs font-semibold text-muted-foreground">S</div>
              <div className="absolute left-2 text-xs font-semibold text-muted-foreground">W</div>
            </div>

            {/* Qibla Indicator */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: relativeQiblaDirection }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <div className="absolute top-0 w-1 h-24 bg-gradient-to-b from-primary to-transparent rounded-full" />
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow">
                <Navigation className="h-8 w-8 text-primary-foreground rotate-180" />
              </div>
            </motion.div>
          </div>

          {/* Direction Info */}
          <div className="text-center mt-6">
            <p className="text-2xl font-bold text-foreground mb-2">
              {Math.round(qiblaDirection)}°
            </p>
            <p className="text-sm text-muted-foreground">
              {isArabic ? "اتجاه القبلة من موقعك" : "Qibla direction from your location"}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default QiblaCompass;
