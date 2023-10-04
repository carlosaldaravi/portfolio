import { SURFR_URL } from "@/env/constants";
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const url = SURFR_URL + process.env.SURFR_ACCESS_TOKEN;
    console.log("url: ", url);
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error connecting to Surfr. API" });
  }
}
