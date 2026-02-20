"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  subtitle?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

const wordVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function SectionHeading({
  title,
  highlight,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  const renderText = (text: string, isHighlighted: boolean = false) => {
    return text.split(" ").map((word, wordIdx, words) => (
      <span key={wordIdx} className="inline-block whitespace-nowrap">
        {Array.from(word).map((char, charIdx) => (
          <motion.span
            key={charIdx}
            variants={charVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
        {/* Add space between words, but not after the last word */}
        {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ));
  };

  return (
    <div
      className={`relative ${isCentered ? "mx-auto text-center" : "text-left"
        } max-w-4xl ${className}`}
    >


      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={wordVariants}
        className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight"
      >
        {renderText(title)}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient inline-block">
              {renderText(highlight, true)}
            </span>
          </>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
