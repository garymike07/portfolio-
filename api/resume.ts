import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendPdf } from './_download';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	return sendPdf(req, res, {
		fileNameOnDisk: 'MikeKagera_FullstackEngineerWeb3AIEnthusiast_2025583.pdf',
		downloadAs: 'Mike_Kagera_Resume.pdf',
	});
}