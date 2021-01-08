import PostStyle from "../styles/posts.module.css"
import Link from 'next/link'

const Posts = ({ posts = [] }) => {
     return posts.map(post => {
        return <Link href={`/${post.id}`}  key={post.id}> 
            <div className={PostStyle.container}>{ post.title } </div> 
        </Link>
    })
};

// Dev render everytine
// Production render only at build
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    return {
        props: {
            posts
        }
    }
}

export default Posts;

