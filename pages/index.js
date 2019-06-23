 import Layout from '../components/MyLayout';
 import Link from 'next/link';
 import fetch from 'isomorphic-unfetch';

const Home = (props) =>{
    console.log(props);
    
    return(
        <div>
            <Layout>
              <h2>Batman Tv shows</h2>
              <ul>
                  {props.shows.map(show =>(<li key={show.id}>
                      <Link as={`/sid/${show.id}`} href={`/show?id=${show.id}`}>
                      <a>{show.name}</a>
                      </Link>
                  </li>))}
                  </ul>         
            </Layout>
            <style jsx>{`
            h2{
                color:#ff0088;
            }
            ul{
                padding:0;
            }
            li{
                list-style-type:none;
                margin:8px;
            }
            a{
                text-decoration:none;
                color:blue;
            }
            a:hover{
                opacity:0.7;
                color:#ff0088;
            }


            `}</style>            
        </div>
        
    )
}

Home.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    return {shows:data.map(entry =>entry.show)}
}

export default Home;