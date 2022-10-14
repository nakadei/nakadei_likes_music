// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { randomSelect } from '../../../helpers/array'
import { trackIds } from '../../../store/trackIds'

type Data = {
  trackIds: string[]
}

// NOTE: とりあえず5件拾う
const pickTrackIds = 5

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const selectedTrackIds = randomSelect(trackIds, pickTrackIds)
  res.status(200).json({ trackIds: selectedTrackIds })
}
