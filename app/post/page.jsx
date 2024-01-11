import styles from './post.module.scss';
import clsx from 'clsx';

export default function Post() {
	return (
		<div className={clsx(styles.post)}>
			<h1>Post List</h1>
		</div>
	);
}

/*
	front-end  /  back-end

	front-end 
	- 사용자가 URL 요청 (링크 접속) 시, 그에 맞게 출력될 UI 컴포넌트들을 미리 설정한 라우터에 따라서 출력되는 로직을 구현
	- 사용자 이벤트 (동적) 발생 시, 비동기 데이터를 요청 (request) 해서 서버로부터 응답 (response) 받은 데이터를 다시 UI로 변환 후 출력 
	- 프론트에서, 서버로 RESTFul 방식으로 요청을 보내기 위해서는, Fetch라는 내장함수로 method 방식을 구분해서 보냄. 
			- fetch(url+QueryString(요청정보를 문자로 이어붙임), {method: 'GET'}) GET 방식 요청 
			- fetch(url, {method: 'POST', body: 저장할데이터}) POST 방식 요청 
			- fetch(url, {method: 'PUT', body: 수정할데이터}) PUT 방식 요청 
			- fetch(url+QueryString(요청정보를 문자로 이어붙임), {method: 'DELETE', body: 전달할데이터}) DELETE 방식 요청 

	back-end
	- 클라이언트로부터 넘어온 요청을, 요청의 형식에 맞게 응답 처리 로직을 분기처리. (Server routing)
	- 백엔드가 전달 받는 요청은 크게 4가지로 나뉨 (CRUD. create read update delete) -> Restful API (CRUD를 구조적으로 문법에 맞게 처리하기 위한 개발 방법론)
		- Create (POST)
		- Read (GET)
		- Update (PUT)
		- Delete (DELETE)

			- POST, PUT : 주로 중요한 데이터를 전달하는 목적. (함부로 노출되면 안되므로 브라우저 내부적으로 body 객체를 통해 전달)
			- GET, DELETE : 상대적으로 중요성이 떨어지는 (쿼리문, 파라미터 등..) 데이터를 전달하는 목적. params를 통해  전달. (URL의 queryString) 

	

*/
