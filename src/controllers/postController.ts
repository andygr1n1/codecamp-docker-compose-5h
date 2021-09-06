import { NextFunction } from 'express'
import { Post } from '../models/postModel'

export const getAllPosts = async (req: any, res: any, next: NextFunction) => {
    try {
        const posts = await Post.find()
        console.log('req.params:::', req.params)
        console.log('posts:::', posts)
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: { posts },
        })

        next()
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('getAllPosts Error:::', e)
    }
}
