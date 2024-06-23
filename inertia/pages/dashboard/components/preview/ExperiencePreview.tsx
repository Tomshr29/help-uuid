function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="mb-2 text-center text-sm font-bold"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.experience.map((exp, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {exp?.title}
          </h2>
          <h2 className="flex justify-between text-xs">
            {exp?.companyName}, {exp?.city}, {exp?.state}
            <span>
              {exp?.startDate} {exp?.currentyWorking ? "Present" : exp?.endDate}
            </span>
          </h2>
          <p className="my-2 text-xs">{exp?.workSummery}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
