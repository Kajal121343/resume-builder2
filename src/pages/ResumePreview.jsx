import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import Template4 from "../templates/Template4";

export default function ResumePreview() {
  const navigate = useNavigate();
  const ref = useRef();

  const selectedTemplate = useSelector((state) => state.resume.template);
  const formData = useSelector((state) => state.resume);

  
  const handleDownload = () => {
    const input = ref.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${formData.personal?.first || "resume"}.pdf`);
    });
  };
  

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 1: return <Template1 data={formData} />;
      case 2: return <Template2 data={formData} />;
      case 3: return <Template3 data={formData} />;
      case 4: return <Template4 data={formData} />;
      default:
        return (
          <div style={{ padding: 40 }}>
            <h3>No template selected</h3>
          </div>
        );
    }
  };

  return (
    <div className="resume-preview">
      <div className="preview-controls">
        <button className="btn" onClick={() => navigate("/skills")}>
          Previous
        </button>

        <button className="btn" onClick={handleDownload}>
          Download PDF
        </button>
      </div>

      <div
        ref={ref}
        className="template-preview-wrapper"
        style={{
          width: "210mm",
         height: "auto",
          background: "white",
          padding: "20px",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
}
