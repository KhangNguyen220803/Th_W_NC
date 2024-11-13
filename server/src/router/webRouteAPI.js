import express from 'express'
import UserAPI from '../controllers/userControllerAPI.js'

const router = express.Router()
const initWebRouterAPI = (app) => {


    router.post('/api/login', UserAPI.Login)
    router.post('/api/resgister', UserAPI.Resgister);
    router.get('/api/admin', UserAPI.sendFillAdmin);
    router.get('/api/user/:username', UserAPI.sendFillUser);
    router.get('/api/admindataUser', UserAPI.sendFillAdminUser);
    router.get('/api/dataProfileUser/:username', UserAPI.sendFillProfileUser);
    
    router.post('/api/editProfileUser/:username', UserAPI.updateUser)
  
    



    return app.use('/', router)
}

export default initWebRouterAPI
