/**
 * Created by linyuhua on 2017/5/17.
 */

const router = require('koa-router')();
const userInfoController = require('./../controller/user-info');
const GoodsController = require('./../controller/goods-list');

const routers = router
    .get('/', async (ctx) => {
        const title = 'login home';
        await ctx.render('home', {
            title
        })
    })
    .post('/signup', userInfoController.signUp)
    .post('/signin', userInfoController.signIn)
    .post('/addGoods', GoodsController.addGoods)

module.exports = routers;