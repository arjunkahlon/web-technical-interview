import type { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../../types/user";
import { loadFileContents } from "../../../../utils/load-file";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (!req.body) {
    res.status(404).json({Error: 'Invalid Request'});
  }

  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({Error: 'Email or Password not provided'});
    }

    const data: string = await loadFileContents('data', '/users.json');
    const users: User[] = JSON.parse(data);

    const user = users.find(function (user: User) { return user.email === email; });

    if (!user) {
      res.status(400).json({Error: 'User does not exist'});
    } else {
        if (user.password === password) {
          const { id, firstname, lastname } = user;
          const usrObj = { email, id, firstname, lastname };
          res.json({ usrObj });
        } else {
          res.status(401).json({Error: 'Invalid Login Credentials'})
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ Error: 'An error occured'})
  }
}