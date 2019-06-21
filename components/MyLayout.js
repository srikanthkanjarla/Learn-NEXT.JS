import Header from '../components/Header';

const layoutStyle ={
margin:20,
padding:20,
border:'2px solid #eef'
}

const MyLayout = (props)=>(
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default MyLayout;