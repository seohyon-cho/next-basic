export default function PostDetail({ params }) {
	const { id } = params;
	return (
		<div>
			<h2>{id}번째 게시글 상세페이지</h2>
		</div>
	);
}
