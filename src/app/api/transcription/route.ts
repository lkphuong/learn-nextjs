import { NextRequest } from 'next/server';

import { Prisma } from '@prisma/client';

import { nextReturn } from '@utils/api';

import prisma from '@/server/database';

/**
 * Create new course
 */
export async function POST(request: NextRequest) {
	try {
		const input = (await request.json()) as Prisma.TranscriptionCreateInput;
		const result = await prisma.transcription.create({
			data: input,
		});
		return nextReturn(result);
	} catch (err: any) {
		return nextReturn(err?.message || err, 500, 'INTERNAL_SERVER_ERROR');
	}
}
