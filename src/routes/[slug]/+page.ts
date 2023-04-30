import type { Post } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const post = await import(`../../posts/${params.slug}.md`);
		return {
			content: post.default,
			metadata: post.metadata as Post
		};
	} catch (_) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
