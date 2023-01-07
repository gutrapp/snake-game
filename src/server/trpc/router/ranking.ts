import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const rankingsRouter = router({
  getRankings: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.ranking.findMany({
      orderBy: [
        {
          score: "desc",
        },
      ],
    });
  }),
  createRanking: publicProcedure
    .input(
      z.object({
        name: z.string(),
        score: z.number(),
      })
    )
    .mutation(({ input: { name, score }, ctx }) => {
      return ctx.prisma.ranking.create({
        data: {
          name,
          score,
        },
      });
    }),
});
