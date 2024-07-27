import express from 'express'
import pagesRouter from './pagesRouter.js'
import navbarOptionsRouter from './navbarOptionsRouter.js'

const apiRouter = express.Router()

apiRouter.use('/pages', pagesRouter)
apiRouter.use('/navbarOptions', navbarOptionsRouter)

export default apiRouter