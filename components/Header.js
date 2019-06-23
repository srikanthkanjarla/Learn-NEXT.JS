import Link from 'next/link';

const linkStyle ={
    marginRight:15,
    textDecoration:'none',
    color:'#ff0088',
    fontSize:'18px'
}

const Header = () =>(
    <div>
        <Link href='/'>
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/blog">
            <a style={linkStyle}>Blog</a>
        </Link>
    </div>
);

export default Header;
