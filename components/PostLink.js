import Link from 'next/link';

const PostLink = (props)=>(
<li> 
<Link as={`/pid/${props.id}`} href={`/post?title=${props.title}`}>
<a>{props.title}</a>
</Link>
</li>
);

export default PostLink;