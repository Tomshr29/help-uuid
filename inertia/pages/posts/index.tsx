import type { InferPageProps } from "@adonisjs/inertia/types";
import type PostsController from "#controllers/posts_controller";
import { Link } from "@inertiajs/react";
import { Fragment } from "react";
import ListGroup from "~/components/ListGroup";

export default function PostIndexPage(
  props: InferPageProps<PostsController, "index">,
) {
  const { posts } = props;

  return (
    <section className="flex flex-col gap-4">
      {posts.data.map((post) => (
        <Fragment key={post.id}>
          <article className="flex flex-col gap-2">
            <header className="flex items-center gap-2">
              <h2 className="font-medium">{post.title}</h2>
              <a
                href={post.url}
                className="text-sm text-gray-500 hover:underline"
              >
                ({post.url})
              </a>
            </header>

            <div>
              <span>132 points</span>
              <span className="mx-2 inline-block">&middot;</span>
              <Link className="hover:underline" href={`/users/${post.user.id}`}>
                {post.user.name}
              </Link>
              <span className="mx-2 inline-block">&middot;</span>
              <Link className="hover:underline" href={`/posts/${post.id}`}>
                {post.timeAgo}
              </Link>
            </div>
          </article>

          <hr />
        </Fragment>
      ))}
      <ListGroup />
    </section>
  );
}
