import type { InferPageProps } from "@adonisjs/inertia/types";
import type PostsController from "#controllers/posts_controller";

export default function PostShowPage(
  props: InferPageProps<PostsController, "show">,
) {
  // @ts-ignore
  const { post } = props;

  return <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2"></div>;
}
