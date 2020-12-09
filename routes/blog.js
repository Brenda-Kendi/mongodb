const express = require ('express')
const router = express.Router()
const Blog = require ('../models/Blog')


router.get('/create-blog',(req,res)=>{
res.render('create')
})

router.get('/:slug',async (req,res)=>{
  await  Blog.findOne({slug: req.params.slug}, (err,blog)=>{
        if(!err){
            res.render('blog',{ blog: blog})
        } else {
            console.log(err)
        }
    })
})
router.post('/create-blog',async(req,res)=>{
    const blog = new Blog({
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
    })
   await blog.save(err=>{
        if (!err){
            res.redirect("/")
        }
        else {
            console.log(err)
        }
    })
})


module.exports=router
