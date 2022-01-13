import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {

  const { id } = request.query;

  const users = [
    { id: 1, name: 'Mauricio' },
    { id: 2, name: 'Bruno' },
    { id: 3, name: 'Joelson' },
  ];

  const user = users.find(user => user.id === Number(id));

  return response.json(user);
}