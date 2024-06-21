import type { InferPageProps } from "@adonisjs/inertia/types";
import type PostsController from "#controllers/posts_controller";

export default function PostShowPage(
  props: InferPageProps<PostsController, "show">,
) {
  // @ts-ignore
  const { post } = props;

  return (
    <article>
      <header>
        <h1 className="text-2xl font-medium">{post?.title}</h1>
      </header>
    </article>
  );
}
