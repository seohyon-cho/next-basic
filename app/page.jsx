import styles from './main.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import pic1 from '../public/pic1.jpg';
import pic2 from '../public/pic2.jpg';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>main Page</h1>
		</main>
	);
}
