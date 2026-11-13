import type { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classes/controle/ControleEditora';

export const controleEditora = new ControleEditora();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(controleEditora.getEditoras());
  } else {
    res.status(405).json({ mensagem: 'Método não permitido' });
  }
}
