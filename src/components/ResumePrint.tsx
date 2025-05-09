import React, { useRef } from "react";
import html2pdf from "html2pdf.js"; 
import { Template1 } from "./Templates/Template1";
import { Template2 } from "./Templates/Template2";
import type { ResumeData } from "../types/types";

interface ResumeTemplateForPrintProps {
  resumeData: ResumeData;
  selectedTemplate: number;
}

export const ResumePrint: React.FC<ResumeTemplateForPrintProps> = ({
  resumeData,
  selectedTemplate,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  // Function to handle PDF generation
  const handleDownloadPdf = () => {
    if (componentRef.current) {
      const options = {
        filename: `${resumeData.name}_Resume.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf()
        .from(componentRef.current) 
        .set(options)
        .save();
    }
  };

  return (
    <div>
      <button
        onClick={handleDownloadPdf}
        className="bg-blue-500 text-white p-2 rounded-md mb-4"
      >
        Download Resume as PDF
      </button>


      <div ref={componentRef}>
        {selectedTemplate === 1 ? (
          <Template1 data={resumeData} />
        ) : selectedTemplate === 2 ? (
          <Template2 data={resumeData} />
        ) : (
          <div>Select a Template First</div>
        )}
      </div>
    </div>
  );
};
