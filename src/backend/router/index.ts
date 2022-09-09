import prisma from "../../db";
import * as trpc from "@trpc/server";
import { resolve } from "path";
import { z } from "zod";
const { marked } = require("marked");
const slugify = require("slugify");
const createDomPurify = require("dompurify");
const { JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

export const appRouter = trpc
  .router()
  .query("getPosts", {
    async resolve() {
      return await prisma.post.findMany();
    },
  })
  .mutation("createPost", {
    input: z.object({
      title: z.string(),
      content: z.string(),
      imageUrl: z.string(),
      slug: z.string(),
    }),
    async resolve({ input }) {
      input.content = dompurify.sanitize(marked(input.content));
      input.slug = slugify(input.title, { lower: true, strict: true });
      return await prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
          imageUrl: input.imageUrl,
          slug: input.slug,
        },
      });
    },
  });
// export type definition of API
export type AppRouter = typeof appRouter;
