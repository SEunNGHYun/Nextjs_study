import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const date = new Date();
    return res.json({ time: date.toLocaleDateString( ) });
}
