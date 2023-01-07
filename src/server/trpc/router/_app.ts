import { router } from "../trpc";
import { rankingsRouter } from "./ranking";

export const appRouter = router({
  rankings: rankingsRouter,
});

export type AppRouter = typeof appRouter;
