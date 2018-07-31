import Joi from 'joi'


export default {

    valideArticleSchema(body) {
        const schema = Joi.object().keys({
            titre: Joi.string().required(),
            text: Joi.string().required(),
            author: Joi.string().required(),
            date: Joi.date()
        })

    const { value, error } = Joi.validate(body, schema)
      if(error && error.details) {
          return { error }
      }
      return { value }
    }
}