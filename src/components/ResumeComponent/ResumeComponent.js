import React, { useState } from "react";

const ResumeComponent = ({ resumeType }) => {
  const [type, setType] = useState(resumeType || "pdf");

  const getFile = () => {
    return type === "docx"
      ? process.env.PUBLIC_URL + "/resume.docx"
      : process.env.PUBLIC_URL + "/resume.pdf";
  };

  const download = () => {
    const link = document.createElement("a");
    link.href = getFile();
    link.download = type === "docx" ? "resume.docx" : "resume.pdf";
    link.click();
  };

  return (
    <div className="h-full w-full bg-white flex flex-col">

      {/* Top buttons */}
      <div className="flex gap-2 p-2 text-black">
        <button onClick={() => setType("docx")}>DOCX</button>
        <button onClick={() => setType("pdf")}>PDF</button>
        <button onClick={download}>Download</button>
      </div>

      {/* Viewer */}
      <div className="flex-1">
        {type === "pdf" ? (
          <iframe
            src={getFile()}
            width="100%"
            height="100%"
            title="PDF"
          />
        ) : (
          <iframe
            src={
              "https://docs.google.com/gview?embedded=true&url=" +
              window.location.origin +
              process.env.PUBLIC_URL +
              "/resume.docx"
            }
            width="100%"
            height="100%"
            title="DOC"
          />
        )}
      </div>
    </div>
  );
};

export default ResumeComponent;
