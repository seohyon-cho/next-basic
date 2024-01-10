import styles from './main.module.scss';
import clsx from 'clsx';
import pic from './pic.jpg';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>main Page</h1>
			<div className={clsx(styles.pic)}>
				<img src={pic.src} alt='image' />
			</div>
		</main>
	);
}
