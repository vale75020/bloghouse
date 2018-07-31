import express from "express"
import articlesController from "./articles.ctrl"
import passport from 'passport'
import { isAdmin } from '../../middlewares/admin'


export const articleRouter = express.Router()

const adminPolicy = [passport.authenticate('jwt', {session:false}), isAdmin]

articleRouter.route('/')
  .get(articlesController.findAll)

articleRouter.route('/add')
  .post(articlesController.create)

articleRouter.route('/:id')
  .get(articlesController.findOne)
  .put(articlesController.update)
  .delete(articlesController.delete)