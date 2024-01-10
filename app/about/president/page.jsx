/*
  특정 폴더 안쪽에 다시 폴더를 만들고, page.jsx를 생성하면
  특정 페이지에 종속된 하위 페이지 라우팅 설정 가능. (중첩라우팅, Nested Routing 이라고 함.)
*/

async function fetchPresident() {
	const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const resultData = data.json();
	return resultData;
}

// 해당 컴포넌트는 server 컴포넌트이기 때문에 기본적으로 클라이언트에서만 동작하는 리액트 내장 훅 (useState, useRef, useEffect) 사용 불가능.
// 해당 비동기 데이터는, server 쪽에서 해당 페이지가 빌드될 때 정적으로 한 번 만들어지고, 클라이언트측에서 요청이 들어올 때 미리 빌드된 페이지를 보내줌으로써 브라우저가 불필요한 비동기 데이터 통신을 안 해도 됨.
export default async function President() {
	const data = await fetchPresident();
	console.log(data);
	return (
		<div className='president'>
			<h2>president</h2>
		</div>
	);
}
