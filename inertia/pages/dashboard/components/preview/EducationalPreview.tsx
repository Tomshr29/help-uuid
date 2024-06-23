function EducationalPrevew({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="mb-2 text-center text-sm font-bold"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.education.map((edu, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {edu?.universityName}
          </h2>
          <h2 className="justify-between text-xs">
            {edu?.degree} in {edu?.major}
            <span>
              {edu?.startDate} - {edu?.endDate}
            </span>
          </h2>
          <p className="my-2 text-xs">{edu?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default EducationalPrevew;
