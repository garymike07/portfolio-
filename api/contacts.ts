import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(_req: VercelRequest, res: VercelResponse) {
	// No persistent storage on serverless; return empty list
	return res.status(200).json([]);
}