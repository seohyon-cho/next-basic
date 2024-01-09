import styles from './main.module.scss';
console.log(styles);

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>main Page</h1>
		</main>
	);
}
