import type { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const nome = controleEditora.getNomeEditora(Number(req.query.codEditora));
    res.status(200).json({ nome });
  } else {
    res.status(405).json({ mensagem: 'Método não permitido' });
  }
}
