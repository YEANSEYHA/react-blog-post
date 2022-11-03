import { useState, useEffect } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'Lorem ipsum', author: 'A', id: 1 },
        { title: 'My new Website21', body: 'Lorem ipsum', author: 'A', id: 12 },
        { title: 'My new Website22', body: 'Lorem ipsum', author: 'A', id: 13 },
        { title: 'My new Website23', body: 'Lorem ipsum', author: 'A', id: 14 },
        { title: 'My new Website24', body: 'Lorem ipsum', author: 'seyha', id: 15 },
    ])
    const handleDeleteBlog = (blogId) => {
        const newBlogs = blogs.filter(blog => blog.id !== blogId)
        setBlogs(newBlogs)
    }
    useEffect(() => {
        console.log('Use effect run')
        console.log(blogs)
    })

    return (
        <div className="home">
            <div>
                <BlogList blogs={blogs} handleDeleteBlog={handleDeleteBlog} title="All Blog"></BlogList>
                <BlogList blogs={blogs.filter((blog) => blog.author === 'seyha')} title="Seyha Blog"></BlogList>
            </div>
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
    );
}

export default Home;