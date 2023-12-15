// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log('1');
  if (process.env.ACCESS_CONTROL_HEADERS === 'on') {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  console.log('2');
  res
    .status(200)
    .json({ name: process.env.RESPONSE_VARIABLE || 'Default response value' });
}
