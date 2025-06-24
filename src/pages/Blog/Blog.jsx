import { Helmet } from "react-helmet";
import "./Blog.scss";

const Blog = () => {
	return (
		<>
			<Helmet>
				<title>MaxFlow | Blog</title>
				<link rel="canonical" href="https://maxflow.cz/blog" />
			</Helmet>
			<h1>Blog</h1>
		</>
	);
};

export default Blog;
