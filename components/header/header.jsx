'use client'; // 'use client'; 붙이기만 하면 클라이언트 기반 컴포넌트로 변경됨. (이렇게 해두면 콘솔도 개발자도구에서 확인 가능.)
import styles from './header.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();

	return (
		<header className={styles.header}>
			<ul>
				<li>
					<Link href='/' className={pathname === '/' ? styles.on : ''}>
						main
					</Link>
				</li>
				<li>
					<Link href='/about' className={pathname === '/about' ? styles.on : ''}>
						about
					</Link>
				</li>
				<li>
					<Link href='/gallery' className={pathname === '/gallery' ? styles.on : ''}>
						gallery
					</Link>
				</li>
				<li>
					<Link href='/post' className={pathname === '/post' ? styles.on : ''}>
						post
					</Link>
				</li>
			</ul>
		</header>
	);
}
