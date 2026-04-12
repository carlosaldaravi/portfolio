import path from "path";
import fs from "fs/promises";

export async function loadJsonData<T>(filename: string): Promise<T> {
  const filePath = path.join(process.cwd(), "src/data", filename);
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData) as T;
}
