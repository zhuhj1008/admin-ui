
import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='http://localhost:8888';

//http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type':'application/json'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode ==2){
//       router.push({
//         path:"/login",
//         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

export function post(url,data = {}){
  return new Promise((resolve,reject) => {
    console.log(data);
    const  param = {};
    param.body= data;
    param.timeStr= JSON.stringify(new Date());
    param.signature='adafrgsdfge';
    axios.post(url,param)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}
