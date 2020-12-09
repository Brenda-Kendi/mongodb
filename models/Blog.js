const mongoose = require ('mongoose')
const {Schema} = mongoose
const slug = require ('mongoose-slug-generator')

//initializing the slug
mongoose.plugin(slug)

//defining the schema
const blogSchema = new Schema ({
    title : {type:String},
    author: {type: String},
    description: {type: String},
    date:{type:Date, default: Date.now()},
    slug:{type: String, slug:['title'],unique:true}
})

//define model from schema
const Blog= mongoose.model('Blog',blogSchema)

module.exports= Blog