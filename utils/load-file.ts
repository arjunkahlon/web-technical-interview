import path from "path";
import { promises as fs } from 'fs';

export async function loadFileContents(directory: string, file: string) {
    const dataDirectory: string = path.join(process.cwd(), directory);
    const data: string = await fs.readFile(dataDirectory + file, 'utf-8');
    return data;
  }