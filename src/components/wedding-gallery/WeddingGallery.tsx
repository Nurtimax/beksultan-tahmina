// components/WeddingGallery.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY_IMAGES } from "../../utils/constants/gallery.constant";
import classes from "./WeddingGallery.module.css";
import { IonCol, IonGrid, IonImg, IonRow } from "@ionic/react";
import { motion, AnimatePresence, Transition } from "framer-motion";

interface Photo {
  id: number;
  src: string;
  alt: string;
  name?: string;
  role?: string;
  groupIndex?: number;
}

interface WeddingGalleryProps {
  title?: string;
  subtitle?: string;
  photos?: Photo[];
}

const lastImage = GALLERY_IMAGES[GALLERY_IMAGES.length - 1];

const WeddingGallery: React.FC<WeddingGalleryProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<Photo[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChangeImage = useCallback(
    (index?: number) => {
      // Эски таймаутту тазалоо
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Жаңы сүрөттүн индексин аныктоо
      let randomIndex = index;
      if (randomIndex === undefined) {
        randomIndex = Math.floor(Math.random() * GALLERY_IMAGES.length);
      }

      // Сүрөттөрдү чыпкалоо
      let filteredImages;
      if (lastImage.id - 1 !== randomIndex) {
        filteredImages = GALLERY_IMAGES.filter((_, idx) => idx !== randomIndex);
      } else {
        filteredImages = [...GALLERY_IMAGES];
      }

      setImages(filteredImages);
      setActiveIndex(randomIndex);

      // Жаңы таймаут коюу (10 секунд)
      timeoutRef.current = setTimeout(() => {
        handleChangeImage(); // randomIndex жок, автоматтык түрдө
      }, 10000);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lastImage.id],
  );

  useEffect(() => {
    // Баштапкы сүрөттү коюу
    if (images.length === 0) {
      handleChangeImage();
    }

    // Тазалоо
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [handleChangeImage, images.length]);

  const mainImage = GALLERY_IMAGES[activeIndex];

  // Сүрөттөрдү 4төн топко бөлүү
  const groupedImages = images.reduce((acc: Photo[][], image, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push({ ...image });
    return acc;
  }, []);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const transition: Transition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <div className={classes.galleryContainer}>
      <div className={classes.header}>
        <h2 className={classes.title}>💕 Тойго чакыруу</h2>
        <p className={classes.subtitle}>Биздин бактылуу күнүбүзгө чакырабыз</p>
        <div className={classes.divider}>
          <span className={classes.dividerHeart}>💕</span>
          <span className={classes.dividerLine}></span>
          <span className={classes.dividerHeart}>💕</span>
        </div>
      </div>

      <IonGrid className={classes.galleryGrid}>
        {groupedImages.map((group, groupIndex) => {
          // Бул топто активдүү сүрөт барбы?
          const hasActiveImage = mainImage.groupIndex === groupIndex;

          // Эгер активдүү сүрөт бар болсо, аны чоңойтуп көрсөтөбүз
          if (hasActiveImage) {
            const groupsWithoutMainImage =
              group?.filter((image) => image.id !== mainImage.id) || [];

            return (
              <IonRow key={groupIndex}>
                <IonCol size="6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mainImage.id}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={transition}
                      layout
                    >
                      <IonImg
                        className={classes.mainImage}
                        src={mainImage.src}
                        alt={mainImage.alt}
                      />
                    </motion.div>
                  </AnimatePresence>
                </IonCol>

                <IonCol size="6">
                  <IonRow>
                    {groupsWithoutMainImage.map((image) => (
                      <IonCol
                        size="6"
                        key={image.id}
                        onClick={() => handleChangeImage(image.id - 1)}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={image.id}
                            variants={imageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={transition}
                            layout
                          >
                            <IonImg
                              className={classes.galleryImage}
                              src={image.src}
                              alt={image.alt}
                            />
                          </motion.div>
                        </AnimatePresence>
                      </IonCol>
                    ))}
                  </IonRow>
                </IonCol>
              </IonRow>
            );
          }

          // Активдүү сүрөт жок болсо, кадимкидей 4 сүрөттү көрсөтөбүз
          return (
            <IonRow key={groupIndex}>
              {group.map((image) => (
                <IonCol
                  key={image.id}
                  size="3"
                  onClick={() => handleChangeImage(image.id - 1)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={image.id}
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={transition}
                      layout
                    >
                      <IonImg
                        className={classes.galleryImage}
                        src={image.src}
                        alt={image.alt}
                      />
                    </motion.div>
                  </AnimatePresence>
                </IonCol>
              ))}
            </IonRow>
          );
        })}
      </IonGrid>
    </div>
  );
};

export default WeddingGallery;
