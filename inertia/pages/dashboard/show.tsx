import type { InferPageProps } from "@adonisjs/inertia/types";
import AddresuemsController from "#controllers/posts_controller";
import FormSection from "./components/FormSection";
import ResumePreview from "./components/ResumePreview";

function EditResume(props: InferPageProps<AddresuemsController, "show">) {
  // @ts-ignore
  const { post } = props;

  return (
    <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
      <FormSection />
      <ResumePreview />
    </div>
  );
}

export default EditResume;
