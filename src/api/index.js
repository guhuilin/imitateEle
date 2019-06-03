import request from '@/utils/request'

// 获取首页分类
export let getCateList = params => {
  return request.get('https://elm.cangdu.org/v2/index_entry?geohash=40.041898,116.300096&group_type=1&flags[]=F')
}

// 获取热门城市数据
export let hotCityApi = params => {
 return request.get('https://elm.cangdu.org/v1/cities?type=hot');
}

// 获取字母排序城市列表数据
export let letterCityApi = params => {
  return request.get('https://elm.cangdu.org/v1/cities?type=group');
}
