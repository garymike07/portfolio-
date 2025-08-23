import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendPdf } from './_download';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	return sendPdf(req, res, {
		fileNameOnDisk: 'kcse_1755952081949.pdf',
		downloadAs: 'Mike_Kagera_KCSE_Certificate.pdf',
	});
}