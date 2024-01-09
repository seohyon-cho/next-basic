import styles from './gallery.module.scss';
/*
  next 에서는 기본적으로 app 폴더 안쪽에 폴더명을 라우터 이름으로 설정하고, 
  그 안쪽에 있는 page.jsx 페이지를 해당 라우터명에 연결하는 구조.
*/
export default function Gallery() {
	return (
		<main className={styles.gallery}>
			<h1>gallery Page</h1>
		</main>
	);
}
