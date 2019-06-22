import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Show = (props) =>{     
    return(
        <Layout>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary}</p>
            <img src={props.show.image.medium} />
        </Layout>
    );
}
 
Show.getInitialProps = async function(context){
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();     
    return {show};
};

export default Show;