import { useContext } from "react";
import { ResumeInfoContext } from "~/context/ResumeInfoContext";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import SummeryPreview from "./preview/SummeryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationalPrevew from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";

function ResumePreview() {
  // @ts-ignore
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="h-full border-t-[20px] p-14 shadow-lg"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />

      <SummeryPreview resumeInfo={resumeInfo} />

      <ExperiencePreview resumeInfo={resumeInfo} />

      <EducationalPrevew resumeInfo={resumeInfo} />

      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreview;
