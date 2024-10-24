import express from 'express'
import UserAPI from '../controllers/userControllerAPI.js'

const router = express.Router()
const initWebRouterAPI = (app) => {


    router.post('/api/login', UserAPI.Login)
    router.post('/api/resgister', UserAPI.Resgister);



    return app.use('/', router)
}

export default initWebRouterAPI
