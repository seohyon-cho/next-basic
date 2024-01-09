'use client';

/*
  [ Dynamic Routing ]
  : 중첩 폴더 안쪽에 '[변수명]' 이라는 이름으로 폴더를 만들고, 그 폴더 안쪽에 page.jsx 생성
  해당 페이지 컴포넌트에서는 params 객체가 props로 전달되고,
  props 객체 안에, 변수명 property 로 url에 전달된 params 값을 전달 가능.
*/
export default function GalleryDetail({ params }) {
	console.log(params);
	return (
		<div className='detail'>
			<h3>{params.id + '번째 갤러리 상세 페이지'}</h3>
		</div>
	);
}
