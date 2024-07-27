import express from 'express'
import { pageModel } from '../database/schemas/pageSchema.js'

const pagesRouter = express.Router()

pagesRouter.get('/:page', async (req,res) => {
    const page = await pageModel.find({"name": req.params.page})
    if(page.length > 0) {
        return res.send(page[0].html)
    }
    const notFoundPage = await pageModel.find({"name": "notFound"})

    return res.send(notFoundPage[0].html)
})

pagesRouter.post('/:page', async (req,res) => {
    const page = new pageModel({
        "name": req.params.page,
        "html": req.body.html,
        "isNavbarOption": req.body.isNavbarOption
    })
    await page.save()

    return res.send(page.html)
})

pagesRouter.put('/:page', async (req, res) => {
    const page = req.params.page;
    const html = req.body.html;

    try {
        let updatedPage = await pageModel.findOneAndUpdate(
            { name: page },
            { html: html },
            { new: true }
        );
        console.log(updatedPage.html)
        return res.send(updatedPage.html);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
});

export default pagesRouter