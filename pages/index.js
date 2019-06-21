import Link from 'next/link';
const Home = () =>{
    return(
        <div>
            <Link href="/about">
                <button>Go to about page</button>
            </Link>
            <h2>Welcome to Next.JS</h2>         
        </div>
        
    )

} 

export default Home;