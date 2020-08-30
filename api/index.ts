/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import { NowRequest, NowResponse } from '@vercel/node';

export default function Index(req: NowRequest, res: NowResponse) {
  const { name = 'World' } = req.query;
  res.send(`Hello ${name}!`);
}
