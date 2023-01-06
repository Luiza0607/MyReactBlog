import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsReducer';
import { useNavigate } from 'react-router-dom';
import { PostForm } from './PostForm';
import shortid from 'shortid'

export function AddPostForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = (post) => {
		dispatch(addPost({ id: shortid(), ...post }));
		navigate('/');
	};

	return <PostForm action={handleSubmit} actionText='Add Post'></PostForm>;
}