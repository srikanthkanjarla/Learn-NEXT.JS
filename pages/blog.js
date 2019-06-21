import Layout from '../components/MyLayout';
import PostLink from '../components/PostLink';
const Blog = () =>(
<Layout>
    <h1>My Blog</h1>
    <ul>
    <PostLink title="Hello Next.js" />
    <PostLink title="Learn Next.js is awesome" />
    <PostLink title="Deploy apps with zeit" />
    </ul>
</Layout>
)
export default Blog;