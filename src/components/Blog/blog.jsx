import './blog.css'
import blog1 from '/blog1.jpg'
import blog2 from '/blog2.jpg'
import blog3 from '/blog3.jpg'
import blog4 from '/blog4.jpg'
import blog5 from '/blog5.jpg'
import blog6 from '/blog6.jpg'

const blog = () => {
  return (
    <div className='main-blog' id='blog'>
        <h2>Blog</h2>
      <div className='blog-container'>
         <div className='blog-box'>
            <img src={blog1} alt="" />
            <img src={blog2} alt="" />
            <img src={blog3} alt="" />
         </div>
         <div className='blog-box'>
            <img src={blog4} alt="" />
            <img src={blog5} alt="" />
            <img src={blog6} alt="" />
         </div>
      </div>
    </div>
  )
}

export default blog
