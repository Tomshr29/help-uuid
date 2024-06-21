import { useContext } from "react";
import { ResumeInfoContext } from "~/context/ResumeInfoContext";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";

function ResumePreview() {
  // @ts-ignore
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="h-full border-t-[20px] p-14 shadow-lg"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreview;
