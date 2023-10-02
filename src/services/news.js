const {News} = require('../entities/news')

module.exports = {
    createNews: async function (payload){
        try{
            const news = new News(payload)
            await news.save()
            return news
        } catch (e) {
            console.log(e)
        }
    },
    updateNews: async function (id, payload){
        try{
             return await News.updateOne({_id: id}, payload)
        } catch (e) {
            console.log(e)
        }
    },
    deleteNews: async function (id){
        try{
            return await News.deleteOne({_id: id})
        } catch (e) {
            console.log(e)
        }
    },
    findNews: async function (payload, options){
        try {
            let obj = {
                'categories': {
                    $in: Object.values(payload)
                }
            }
            let newsQuery =  News.find(obj)
            console.log(newsQuery)
            const limit = options?.limit ?? 10
            const skip = options?.skip || 0
            newsQuery = newsQuery.skip(skip).limit(limit)
            return await newsQuery
        } catch (e){
            console.log(e)
        }
    },
    changeStat: async function (id, options){
        try {
            let news = await News.findById(id)
            news[options] += 1;
            await news.save()
            return  news
        } catch (e){
            console.log(e)
        }
    },
}