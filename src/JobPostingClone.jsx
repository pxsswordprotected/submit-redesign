import React, { useState } from "react";

const EMAIL = "hello@adriastudio.co";

const JobPostingClone = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copied) return;
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-full bg-[#FAFAFA] flex flex-col items-center px-4 py-12 font-geist text-center">
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

        <div
          style={{ marginTop: "24px" }}
          className="relative flex justify-center"
        >
          {copied && (
            <div className="toast-copied-old absolute bottom-full mb-1 bg-black text-white text-[15px] font-medium px-[6px] py-[1px] rounded-[4px] whitespace-nowrap pointer-events-none">
              Copied
            </div>
          )}
          <button
            onClick={handleCopy}
            disabled={copied}
            className="group inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-800
                     -hover:bg-gray-100 disabled:bg-gray-100 transition-colors disabled:cursor-default"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-400 group-hover:text-gray-900 group-disabled:text-gray-900 transition-colors"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            Copy Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostingClone;
