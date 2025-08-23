import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export async function sendPdf(
	req: VercelRequest,
	res: VercelResponse,
	options: { fileNameOnDisk: string; downloadAs: string }
) {
	const filePath = path.join(process.cwd(), 'attached_assets', options.fileNameOnDisk);
	if (!fs.existsSync(filePath)) {
		return res.status(404).json({ error: 'File not found' });
	}
	res.setHeader('Content-Type', 'application/pdf');
	res.setHeader('Content-Disposition', `attachment; filename="${options.downloadAs}"`);
	const buffer = await fs.promises.readFile(filePath);
	return res.status(200).send(buffer);
}