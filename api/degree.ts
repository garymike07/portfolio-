import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendPdf } from './_download';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	return sendPdf(req, res, {
		fileNameOnDisk: 'degree_1755952081915.pdf',
		downloadAs: 'Mike_Kagera_Degree_Certificate.pdf',
	});
}