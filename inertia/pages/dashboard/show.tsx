import type { InferPageProps } from "@adonisjs/inertia/types";
import AddresuemsController from "#controllers/posts_controller";

function EditResume(props: InferPageProps<AddresuemsController, "show">) {
  const { post } = props;

  return (
    <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
      Yo {post.title}
    </div>
  );
}

export default EditResume;
