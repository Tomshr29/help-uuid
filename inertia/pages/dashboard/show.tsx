import type { InferPageProps } from "@adonisjs/inertia/types";
import AddresuemsController from "#controllers/posts_controller";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";
import { ResumeInfoContext } from "~/context/ResumeInfoContext";
import { useEffect, useState } from "react";
import dummy from "~/data/dummy";

function EditResume(props: InferPageProps<AddresuemsController, "show">) {
  // @ts-ignore
  const { post } = props;
  const [resumeInfo, setResumeInfo] = useState();
  useEffect(() => {
    // @ts-ignore
    setResumeInfo(dummy);
  }, []);

  return (
    // @ts-ignore
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
        <FormSection postId={post.id} />
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
