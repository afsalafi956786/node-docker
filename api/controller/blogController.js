import Blog from '../models/Blog.js'
import User from '../models/User.js';

 export async function getAllBlogs(req,res){
   
    try{ 
        let blogs; 
        blogs=await Blog.find();
        if(!blogs){
         return res.status(404).json({message:'No Blogs found'})
          }
        res.status(200).json({blogs})
    }catch(err){
        console.log(err.message)
    }
}

export async function addBlogs(req,res){
    try{
        const {title,description,image,user}=req.body;
        let existUser= await User.findById(user)
        if(!existUser){
            return res.status(400).json({message:'unable ot find user by this id'})
        }
        const blog=new Blog({
            title,
            description,
            image,
            user,
        })
        await blog.save()
       return res.status(200).json({blog})
    }catch(error){
        console.log(error.message);
        return res.status(404).json({message:'something error'})
    }
}

export async function updateBlog(req,res){
    try{
        const blogId=req.params.id;
        const {title,description}=req.body;
        const blog=await Blog.findByIdAndUpdate(blogId,{
          title,
          description
        })   
        if(!blog){
            return res.status(500).json({message:'unable to update the bolg'})
        }
        return res.status(200).json({blog})
  

    }catch(error){
        console.log(error.message)
    }
}


export async function getBlogId(req,res){
    try{
        const blogId=req.params.id;
        let blog= await Blog.findById(blogId)
        if(!blog){
            return res.status(404).json({message:'No blogs exists!'})
        }
        return res.status(200).json({blog})
    }catch(error){
        console.log(error.message)
    }
}

export async function deleteBlog(req,res){
    try{
      const   blogId=req.params.id;
     const blog= await Blog.findByIdAndDelete(blogId);
     if(!blog){
        return res.status(500).json({message:'Unable to Delete.'})
     }
      return res.status(200).json({message:'the blog is delelted'})


    }catch(error){
        console.log(error.message)
    }
}