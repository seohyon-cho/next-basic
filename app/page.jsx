import styles from './main.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import pic1 from '../public/pic1.jpg';
import pic2 from '../public/pic2.jpg';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>main Page</h1>

			<div className={clsx(styles.pic)}>
				<Image src={pic2} alt='image' fill quality={100} />
			</div>

			<div className={clsx(styles.pic)}>
				<Image src={pic1} alt='image' fill quality={75} priority />
			</div>
		</main>
	);
}

/*
	Next 에서의 image optimizing (<Image /> 컴포넌트를 사용하여 이미지 최적화) 해야 하는 이유 

	1. 원본 빌드 시에, import 한 뒤에 브라우저 크기에 따른 이미지 용량을 자동으로 최적화시켜주고, 
	2. 클라이언트 요청이 들어올 때, 미리 최적화시킨 이미지를 렌더링.
	3. 브라우저 폭을 인지해서 그때마다 폭에 따른 최적화된 이미지를 제공함.
	4. quality 속성을 활용하여, 직접 최적화 가능. (0~100, default 75)
	5. priority 속성을 이용해서, 우선적으로 출력해야 하는 이미지에 우선순위 부여 가능.
	6. 기본적으로 <Image /> 컴포넌트에 lazy loading 기능을 적용하는데, priority 적용 시 lazy loading 기능은 강제로 해제됨. (주의)
*/
