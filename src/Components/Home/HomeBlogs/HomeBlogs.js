import React, {useEffect, useState} from 'react';
import "./HomeBlogs.css"

const HomeBlogs = () => {
	const [Blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch("./blogs.json")
		.then(res => res.json())
		.then(data => setBlogs(data.slice(0, 3)))
	}, []);
	
	return (
		<div>
			<div className="container">
				<h1 className="home_blogs_title">Latest News & Our Blog</h1>
				<p className="home_blogs_moto">
					Sed doming virtute honestatis at, graece tamquam docendi eum an,
					alterum reformidans est ei nec aliquando voluptatum an, eu quidam
					civibus qui
				</p>
				<div className="home_blogs_container">
					{
						Blogs.map(blog => <HomeBlog key={blog.id} blog={blog} />)
					}
				</div>
			</div>
		</div>
	);
};

const HomeBlog = (props) => {
	const {title, blog} = props.blog;
	return (
		<div className="home_blog">
			<div>
				<h2 className="blog_title">{title}</h2>
				<p className=" blog">{blog}</p>
				<a href="" className="more">More</a>
			</div>
		</div>
	);
};

export default HomeBlogs;
