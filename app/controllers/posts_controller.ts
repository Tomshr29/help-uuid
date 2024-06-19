import Post from "#models/post";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

export default class AddresuemsController {
  static validator = vine.compile(
    vine.object({
      title: vine.string().trim(),
    }),
  );

  async create({ request, response }: HttpContext) {
    const data = request.only(["title"]);

    await Post.create({
      ...data,
      // userId: auth.user?.id,
    });

    return response.redirect().toPath("/dashboard");
  }

  async show({ inertia }: HttpContext) {
    const post = await Post.all();

    return inertia.render("dashboard/show", { post });
  }
}
