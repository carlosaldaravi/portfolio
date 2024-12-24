import { useRef, useState } from "react";
import { TRACKING_TYPES } from "@/types/track";
import useTracker from "@/hooks/useTracker";
import Page from "@/components/UI/page";
import Footer from "@/components/curriculum/footer";
import Sidebar from "@/components/curriculum/sidebar";
import Header from "@/components/curriculum/header";
import MainSection from "@/components/curriculum/main-section";
import PDFButtons from "@/components/curriculum/pdf-buttons";
import BuyMeACoffeeButton from "@/components/UI/buy-me-a-coffe-button";

const Curriculum = () => {
  const [name, setName] = useState("Carlos");
  const [surname, setSurname] = useState("Aldaravi");
  const [isEditable, setIsEditable] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const resumeRef = useRef(null);
  const tracker = useTracker();

  const downloadResumeAsPDF = () => {
    setIsGeneratingPDF(true);
    import("html2pdf.js").then((html2pdfModule) => {
      const html2pdf = html2pdfModule.default;
      const element = resumeRef.current;
      const opt = {
        margin: [0, 0, 0, 0],
        filename: `CV-${name}-${surname}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          dpi: 192,
          letterRendering: true,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          tracker.track(TRACKING_TYPES.event.downloadCV);
          setIsGeneratingPDF(false);
        })
        .catch(() => {
          setIsGeneratingPDF(false);
        });
    });
  };

  const handleEditCV = () => {
    isEditable
      ? tracker.track(TRACKING_TYPES.event.saveCV)
      : tracker.track(TRACKING_TYPES.event.editCV);

    setIsEditable(!isEditable);
  };

  return (
    <Page className="p-0">
      <div ref={resumeRef} className="relative main">
        {!isGeneratingPDF && (
          <PDFButtons
            isEditable={isEditable}
            onDownloadResumeAsPDF={downloadResumeAsPDF}
            onEditCV={handleEditCV}
          />
        )}
        <Sidebar isEditable={isEditable} isGeneratingPDF={isGeneratingPDF} />
        <div className="main__right">
          <Header
            name={name}
            surname={surname}
            onChangeName={(newName) => setName(newName)}
            onChangeSurname={(newSurname) => setSurname(newSurname)}
            isEditable={isEditable}
          />
          <MainSection isEditable={isEditable} />
          <Footer name={name} surname={surname} />
        </div>
      </div>
      <BuyMeACoffeeButton />
    </Page>
  );
};

export default Curriculum;
