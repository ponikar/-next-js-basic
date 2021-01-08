import { useRouter } from 'next/router'
import PostStyle from '../styles/post.module.css'
const Post = ({ post }) => {

    const { title, body } = post;
    const router = useRouter();
    if(router.isFallback) {
        return <div>Loading....</div>;
    }

    return <section className={PostStyle.container}>
        <h2> { title} </h2>
        <article>
            <div> { body } </div>
        </article>
    </section>
}


export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    const paths = posts.map(post => ({ params: { postid: String(post.id) } }));

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async ({ params }) => {
   
    const { postid } = params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
    const post = await res.json();

    return {
        props: { post }
    };
}


export default Post;