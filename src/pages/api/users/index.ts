import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Mauricio' },
    { id: 2, name: 'Bruno' },
    { id: 3, name: 'Joelson' },
  ]

  return response.json(users);
}