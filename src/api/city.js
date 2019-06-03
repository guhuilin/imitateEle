import request from '@/utils/request'

export let hotCityApi = params => {
  request.get('https://elm.cangdu.org/v1/cities?type=hot');
}

