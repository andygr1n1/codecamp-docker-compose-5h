import express from 'express'
import { getAllPosts } from '../controllers/postController'

export const postRouter = express.Router()

postRouter.route('/').get(getAllPosts)
