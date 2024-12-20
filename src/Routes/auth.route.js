import express from 'express'
import { checkAuth, logIn, logOut, signUp, updateProfile } from '../Controllers/auth.controller.js'
import { protectRoute } from '../Middlewares/auth.middleware.js'


const router = express.Router()

router.post('/signup', signUp)

router.post('/login', logIn)

router.get('/logout', logOut)

router.put('/profile-update', protectRoute, updateProfile)

router.get('/check', protectRoute, checkAuth);

export default router