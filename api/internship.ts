import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendPdf } from './_download';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	return sendPdf(req, res, {
		fileNameOnDisk: 'internship_1755952081988.pdf',
		downloadAs: 'Mike_Kagera_Internship_Certificate.pdf',
	});
}