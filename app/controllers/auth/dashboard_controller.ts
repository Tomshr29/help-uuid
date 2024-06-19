import Post from "#models/post";
import type { HttpContext } from "@adonisjs/core/http";
import vine from "@vinejs/vine";

export default class DashboardController {
  static validator = vine.compile(
    vine.object({
      fullName: vine.string().trim(),
      email: vine.string().email().trim(),
    }),
  );

  async index({ inertia }: HttpContext) {
    const posts = await Post.all();
    return inertia.render("dashboard/index", { posts });
  }
}
