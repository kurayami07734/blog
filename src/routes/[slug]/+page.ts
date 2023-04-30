export const load = async ({ params }) => {
	const post = await import(`../../posts/${params}.md`);
	return {};
};
