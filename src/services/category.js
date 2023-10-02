const {Category} = require('../entities/category')

module.exports = {
    createCategory: async function (payload){
        try{
            const category = new Category(payload)
            await category.save()
            return category
        } catch (e) {
            console.log(e)
        }
    },
    updateCategory: async function (id, payload){
        try{
            await Category.updateOne({_id: id}, payload)
        } catch (e) {
            console.log(e)
        }
    },
    deleteCategory: async function (id){
        try{
            await Category.deleteOne({_id: id})
        } catch (e) {
            console.log(e)
        }
    },
    findCategory: async function(id){
        try{
            await Category.findById(id)
            return await Category.find()
        } catch (e){
            console.log(e)
        }
    },
}

