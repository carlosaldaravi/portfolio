import Page from "@/components/UI/page";
import Education from "@/components/curriculum/education";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useContext, useRef, useState } from "react";
import Experience from "@/components/curriculum/experience";
import Certification from "@/components/curriculum/certification";
import HonorAndAward from "@/components/curriculum/honor-and-award";
import OtherInfo from "@/components/curriculum/other-info";
import Footer from "@/components/curriculum/footer";
import Sidebar from "@/components/curriculum/sidebar";
import Header from "@/components/curriculum/header";
import { FormattedMessage } from "react-intl";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import useTracker from "@/hooks/useTracker";
import ThemeContext from "@/store/theme-context";
import { getBgSecondaryColor } from "@/tools/theme";
import { TRACKING_TYPES } from "@/types/track";

const Curriculum = () => {
  const resumeRef = useRef(null);
  const tracker = useTracker();
  const themeCtx = useContext(ThemeContext);
  const theme = themeCtx.theme;
  const bgSecondaryColor = getBgSecondaryColor(theme);

  const downloadResumeAsPDF = () => {
    html2canvas(resumeRef.current, {
      scale: 2,
      windowWidth: resumeRef.current.scrollWidth,
      windowHeight: resumeRef.current.scrollHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.getHeight();

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();
      }

      pdf.save("curriculum-carlos-aldaravi.pdf");
      tracker.track(TRACKING_TYPES.event.downloadCV);
    });
  };
  return (
    <Page className="p-0">
      <div ref={resumeRef} className="main">
        <Sidebar />
        <div className="main__right">
          <Header />
          <div className="main__right__body">
            <Experience />
            <Education />
            <Certification />
            <HonorAndAward />
            <OtherInfo />
            <Footer />
          </div>
        </div>
      </div>
      <div
        className="mt-12 cursor-pointer flex justify-center items-center gap-8"
        onClick={downloadResumeAsPDF}
      >
        <h3>
          <FormattedMessage id="page.developer.download" />
        </h3>
        <span className={`download-button ${bgSecondaryColor}`}>
          <ArrowDownTrayIcon className="download-icon w-10 h-10" />
        </span>
      </div>
    </Page>
  );
};

export default Curriculum;
