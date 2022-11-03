import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetail = () => {
    const { id } = useParams()
    const history = useHistory()
    const handleClick = (blogId) => {
        console.log('This is the blog id', blogId)
        fetch('http://localhost:8000/blogs/' + blogId, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog &&
                <article>
                    <h2>{blog.title}</h2>
                    <div>{blog.body}</div>
                    <button onClick={() => {
                        handleClick(blog.id)
                    }}>Deleted</button>
                </article>
            }
        </div>
    )
}

export default BlogDetail