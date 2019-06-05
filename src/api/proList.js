import request from '@/utils/request'

// console.log('request...', request);
// 获取首页分类
export let getProductList = params=>{
  return request.get('https://elm.cangdu.org/shopping/restaurants?latitude=40.041898&longitude=116.300096&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=239&restaurant_category_ids[]=&order_by=&delivery_mode[]=')
}

