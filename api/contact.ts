import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';
import { z } from 'zod';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method Not Allowed' });
	}

	try {
		const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
		insertContactSchema.parse(data);
		return res.status(200).json({ success: true, message: 'Message sent successfully!' });
	} catch (error) {
		if (error instanceof z.ZodError) {
			return res.status(400).json({ error: 'Invalid form data', details: error.errors });
		}
		return res.status(500).json({ error: 'Failed to send message' });
	}
}