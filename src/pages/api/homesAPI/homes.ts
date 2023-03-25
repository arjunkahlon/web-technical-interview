import { NextApiRequest, NextApiResponse } from "next"
import { loadFileContents } from "../../../../utils/load-file";

type Data = {
  message: string
}
  
  export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<Data>
  ) {
    try {
        const data = await loadFileContents('data', '/homes.json');
        res.status(200).json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({
          message: 'An unexpected error occured'
        });
    }
  }