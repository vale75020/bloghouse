import Article from './articles.model'
import articlesService from "./articles.service"
import Joi from 'joi'


export default {

    async create(req, res) {

        try {
            const { value, error } = articlesService.valideArticleSchema(req.body)
              if(error) {
                  return res.status(400).json(error)
              }
              const article =  await Article.create({
                  titre: value.titre,
                  author: value.author,
                  text: value.text,
                  date: value.date,
                  
              })
              return res.json({ success:  true})

            } catch (err) {
                console.log(err)
                return res.status(500).send(err)
            }
        },


    async findAll(req, res){
        try{
          const { page, perPage } = req.query
          const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(perPage, 10) || 10,
            populate : {
              path:'articles',
              select: 'titre text'
           },
          };
          const articles = await Article.paginate({}, options)
          res.json(articles)
        }catch (e) {
          console.error(e)
            return res.status(500).send(e)
          }
      },


      async findOne(req, res){
        try{
          const{ id } = req.params
          const article = await Article.findById(id).populate('article', 'titre text')
          if(!article){
            return res.status(404).json({err:'could not find this article'})
          }
          return res.json(article)
        }catch (err){
          console.error(err)
          return res.status(500).send(err)
        }
      },

      async update(req, res){
        try {
          const { id } = req.params;
          const schema = Joi.object().keys({
            titre: Joi.string().required(),
            text:Joi.string().required(),
          })
          const { value, error } = Joi.validate(req.body, schema)
          if(error && error.details){
            return res.status(400).json(error)
          }
          const article = await Article.findOneAndUpdate({_id: id}, value, {new: true})
          if(!article){
            return res.status(404).json({err: 'could not find the article'})
          }
          return res.json(article)
        } catch(err){
          console.error(err)
          return res.status(500).send(err)
        }
      },

      async delete(req, res){
        try {
          const { id } = req.params
          const article = await Article.findOneAndRemove({_id:id})
          if(!article){
            return res.status(404).json({err: 'could not find the article'})
          }
          return res.json({ success:  true})
        } catch(err){
          console.error(err)
          return res.status(500).send(err)
          }
      }

    }