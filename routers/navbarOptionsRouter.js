import express from 'express'
import { navbarOptionsModel } from '../database/schemas/navbarOptionsSchema.js'
import { pageModel } from '../database/schemas/pageSchema.js'

const navbarOptionsRouter = express.Router()

navbarOptionsRouter.get('/', async (req,res) => {
    const navbarOptions = await navbarOptionsModel.find({})
    return res.json(navbarOptions)
})

navbarOptionsRouter.get('/names', async (req,res) => {
    const navbarOptionsNames = await pageModel.find({ isNavbarOption: true }, 'name');
    return res.json(navbarOptionsNames)
})

navbarOptionsRouter.post('/', async (req,res) => {
    const navbarOption = new navbarOptionsModel({
        "html": req.body.html
    })
    await navbarOption.save()

    return res.send(navbarOption.html)
})


export default navbarOptionsRouter