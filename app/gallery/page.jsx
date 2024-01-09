import styles from './gallery.module.scss';
/*
  next 에서는 기본적으로 app 폴더 안쪽에 폴더명을 라우터 이름으로 설정하고, 
  그 안쪽에 있는 page.jsx 페이지를 해당 라우터명에 연결하는 구조.
*/
export default function Gallery() {
	return (
		<main className={styles.gallery}>
			<h1>갤러리 목록 페이지</h1>
		</main>
	);
}

export const generateMetadata = () => {
	return {
		title: 'Gallery Page',
		description: 'Information of my Gallery including President, crew info',
	};
};
