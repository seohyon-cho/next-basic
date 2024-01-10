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
				<Image src={pic2} alt='image' width={300} height={300} quality={100} placeholder='blur' />
			</div>

			<div className={clsx(styles.pic)}>
				{/* sizes="" : fill 속성이 있을 때, next가 크기 산정하는 데에 어려움이 있으므로, 특정 크기 미만의 브라우저 폭에 대한 이미지 사이즈 크기를 함께 지정해주는 것이 권장사항임. 
				별다른 폭 지정이 없으면 100vw, 최소폭 808px까지는 50vw로 적용 */}
				<Image src={pic1} alt='image' fill quality={75} sizes='(min-width: 808px) 50vw, 100vw' />
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
	7. placeholder="blur" 로 지정 시 (로컬 이미지일 때) 미리 용량이 작은 blur이미지를 먼저 출력하고, 전체 이미지 렌더링 완료 시 바꿔치기해서 원래 이미지로 출력 (주의점: placeholder 지정 시 lazy-loading 기능이 제거되며, priority 속성과 함께 쓸 수 없음.(priority 적용 시 placeholder 동작이 안 됨.))
	8. 처음 마운트 화면에 보일 큰 이미지에 적용할 수 있는 2가지 옵션 
			- (1) priority 속성 부여 
			- (2) placeholder 



	LCP 를 향상시키기 위해서는, 보편적으로
	물리적인 위치상 가장 먼저 보이게 될 이미지에 priority 를 넣음.
	priority를 남발하면 lazy loading이 풀리게 되므로 잘 생각하고 써야 함. 

	[ Lazy Loading ]
	: viewport에 보이는 이미지만 렌더링을 하고, 문서에는 있지만 viewport 상에서 아직 보이지 않는 것들은 로딩을 미뤘다가 viewport 내에 들어오게 되면 그때 로딩

	[ LCP ]
	: Largest Contentful Paint
	: 웹페이지 로딩 속도 측정 시, 컨텐츠에 있는 이미지나 영상처럼 용량이 큰 소스의 용량까지 모두 포함해서 로딩속도를 측정하는 방식.
		(결론적으로, next에서 <Image /> 컴포넌트의 사용 목적은 LCP에서의 성능 점수를 향상시키기 위함임.)

	* <Image /> 컴포넌트 호출 시, 가급적 width={}, height={} 속성을 지정해야 next가 빌드 시에 해당 사이즈에 맞게끔 최적화 작업을 함.
	* 이미지의 크기가 고정 값이 아닐 때에는, width={}, height={} 대신 fill 속성을 부여해주면 됨. (이 경우 연결되어있는 scss에서의 넓이값과 높이값을 판단해서 최적화)

		( * ) fill 속성 적용 시 추가적으로 넣으면 좋은 속성 (권장사항) (예) : sizes="(min-width: 808px) 50vw, 100vw"


	
*/
