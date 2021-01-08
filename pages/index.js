
import Link from 'next/link'

export default function Home() {

  return (
      <div className="container">
         <Link href="/posts">
          <h3>Posts</h3>
      </Link>  
      </div>
  );
}
