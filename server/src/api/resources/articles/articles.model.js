import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const Schema = mongoose.Schema


const articleSchema = new Schema({

        titre: {
                type: String,
                required: true
        },

        author: {
                type: String,
                required: true
        },

        text: {
                type: String,
                required: true
        },


        date: {
                type: Date,
                default: Date.now
        },


        //img: { type: String }
})

articleSchema.plugin(mongoosePaginate)


export default mongoose.model('Article', articleSchema);