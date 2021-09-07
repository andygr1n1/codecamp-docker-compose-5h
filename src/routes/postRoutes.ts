import express from 'express'
import { getAllPosts, getOnePost, createPost, updatePost, deletePost } from '../controllers/postController'

export const postRouter = express.Router()

postRouter.route('/').get(getAllPosts).post(createPost)
postRouter.route('/:id').get(getOnePost).patch(updatePost).delete(deletePost)
