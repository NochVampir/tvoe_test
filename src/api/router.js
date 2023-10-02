const express = require('express');
const News = require('../services/news')
const Category = require('../services/category')

const Router = express.Router();

Router.get('/news', async (req, res) => {
    try{
        let news = await News.findNews(req.query)
        console.log(news)
        res.send(news)
    } catch (e){
        console.log(e)
    }
})

Router.post('/createNews', async (req, res) => {
    try{
        let news = await News.createNews(req.body)
        res.send(news)
    } catch (e){
        console.log(e)
    }
})

Router.get('/deleteNews', async (req, res) => {
    try{
        let news = await News.deleteNews(req.query.id)
        res.send(news)
    } catch (e){
        console.log(e)
    }
})

Router.post('/updateNews', async (req, res) => {
    try{
        let news = await News.updateNews(req.query.id, req.body)
        res.send(news)
    } catch (e){
        console.log(e)
    }
})

Router.post('/createCategory', async (req, res) => {
    try{
        let category = await Category.createCategory(req.body)
        res.send(category)
    } catch (e){
        console.log(e)
    }
})

Router.post('/deleteCategory', async (req, res) => {
    try{
        let category = await Category.deleteCategory(req.query.id)
        res.send(category)
    } catch (e){
        console.log(e)
    }
})

module.exports = Router
