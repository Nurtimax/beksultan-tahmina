import React from "react";
import { IonIcon } from "@ionic/react";
import { calendarOutline, locationOutline, timeOutline } from "ionicons/icons";
import { motion, Transition } from "framer-motion";
import classes from "./WeddingInvitation.module.css";

const WeddingInvitation: React.FC = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Child animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const itemVariantsTransition: Transition = {
    type: "spring",
    damping: 12,
    stiffness: 100,
  };

  // Card entrance animation
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
  };

  const cardVariantsTransition: Transition = {
    type: "spring",
    damping: 20,
    stiffness: 80,
    duration: 0.8,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={classes.invitationContent}
    >
      <div className={classes.invitationContainer}>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className={classes.invitationCard}
          transition={cardVariantsTransition}
        >
          {/* Decorative elements - using animate directly instead of variants */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`${classes.decorativeRing} ${classes.leftRing}`}
          >
            💍
          </motion.div>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className={`${classes.decorativeRing} ${classes.rightRing}`}
          >
            💍
          </motion.div>

          {/* Header */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className={classes.invitationHeader}
            transition={itemVariantsTransition}
          >
            <motion.h2
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={classes.greetingText}
            >
              Урматтуу коноктор!
            </motion.h2>
          </motion.div>

          {/* Main content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={classes.invitationContentText}
          >
            <motion.p
              variants={itemVariants}
              className={classes.invitationText}
              transition={itemVariantsTransition}
            >
              Сиздерди <strong>Бексултан</strong> жана <strong>Тахмина</strong>
              ның үйлөнүү тоюна арналган салтанатка
            </motion.p>
            <motion.p
              variants={itemVariants}
              className={classes.invitationText}
              transition={itemVariantsTransition}
            >
              келип, ак дасторконубуздан даам татып,
            </motion.p>
            <motion.p
              variants={itemVariants}
              className={`${classes.invitationText} ${classes.highlight}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              батаңыздарды берип, кадырлуу коногубуз болуп кетүүгө чакырабыз!
            </motion.p>
          </motion.div>

          {/* Event details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={classes.eventDetails}
          >
            {[
              { icon: calendarOutline, text: "26-июль 2026-жыл" },
              { icon: timeOutline, text: "Саат 19:00" },
              { icon: locationOutline, text: '"Ала-Too" рестораны' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={classes.detailItem}
                whileHover={{ x: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IonIcon icon={item.icon} />
                </motion.span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative line */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className={classes.divider}
            transition={itemVariantsTransition}
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ✦
            </motion.span>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className={classes.invitationFooter}
            transition={itemVariantsTransition}
          >
            <motion.p
              className={classes.footerText}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Күтөбүз жана кубанабыз! ❤️
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeddingInvitation;
