import React, { useState, useRef, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Mail, Check } from "lucide-react";

const EMAIL = "hello@adriastudio.co";

const JobPostingAfter = () => {
  const [copied, setCopied] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setClickCount(c => c + 1);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#FAFAFA] flex flex-col items-center px-4 py-12 font-geist text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-xl font-extrabold text-gray-900">
          Full Time/Part Time Designer Role
        </h1>

        <div className="space-y-4 text-[15px] md:text-base text-gray-800 font-medium">
          <p>
            Hey, want to apply as Adria Studio's next Product or
            <br />
            Web/Brand designer?
          </p>

          <p>
            If you're not someone who pours meticulous attention to
            <br />
            detail, then you're not a good fit.
          </p>

          <p>
            If your application starts with your "seniority" level then
            <br />
            you're not a good fit.
          </p>
        </div>

        <div className="space-y-1.5 text-[15px] md:text-base text-gray-500">
          <p>
            Please submit your best work. Your coolest photos. Your
            <br />
            proudest dumb project. Your writings.
          </p>
          <p>Let's see how you sell your work.</p>
          <p className="pt-4">
            If you wish to apply, or refer someone, reach out
            <br />
            to us via email.
          </p>
        </div>

        <div style={{ marginTop: "32px" }} className="flex justify-center">
          <MotionConfig reducedMotion="user">
            <motion.button
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 250, damping: 25 }}
              onClick={handleCopy}
              className="group inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <div className="grid place-items-center [&>*]:col-start-1 [&>*]:row-start-1">
                <motion.span
                  animate={
                    copied
                      ? { opacity: 0, scale: 0.5, filter: "blur(7px)" }
                      : { opacity: 1, scale: 1, filter: "blur(0px)" }
                  }
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Mail
                    size={20}
                    className="text-gray-400 group-hover:text-gray-900 transition-colors"
                  />
                  Copy Email
                </motion.span>
                <motion.span
                  key={clickCount}
                  initial={{ opacity: 0, scale: 0.5, filter: "blur(7px)" }}
                  animate={
                    copied
                      ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                      : { opacity: 0, scale: 0.5, filter: "blur(7px)" }
                  }
                  transition={{ duration: 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Check size={20} className="text-gray-800" />
                  Copied
                </motion.span>
              </div>
            </motion.button>
          </MotionConfig>
        </div>
      </div>

    </div>
  );
};

export default JobPostingAfter;
