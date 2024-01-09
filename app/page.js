import styles from './page.module.scss';
console.log(styles);

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>메인 페이지</h1>
		</main>
	);
}
