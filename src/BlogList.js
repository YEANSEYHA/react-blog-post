const BlogList = ({ blogs, title, handleDeleteBlog }) => {

    // const blogs = props.blogs
    // const title = props.title
    return (
        <div className="blog-list">
            <h1>{title}</h1>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}><h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <button onClick={() => {
                        handleDeleteBlog(blog.id)
                    }}>Delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;