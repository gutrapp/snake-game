import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const ranking = async (req: NextApiRequest, res: NextApiResponse) => {
  const rankings = await prisma.ranking.findMany();
  res.status(200).json(rankings);
};

export default ranking;
