import { SURFR_URL } from "@/env/constants";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = SURFR_URL + process.env.SURFR_ACCESS_TOKEN;
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error connecting to Surfr. API" });
  }
}
