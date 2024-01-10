import PostList from '@/components/postList/postList';
import styles from './post.module.scss';
import clsx from 'clsx';

export default function Post() {
	return (
		<div className={clsx(styles.post)}>
			<h1>Post List</h1>
			<PostList />
		</div>
	);
}
