import axios from 'axios';
import baseHosts from '../../../config';
let userId = null;

export let configObj = {
  host: baseHosts.baseApiUrlDev
  // host: baseHosts.baseApiUrlTest
  // host: baseHosts.baseApiUrlUat
  // host: baseHosts.baseApiUrlPro
};
export const auth = configObj.host + 'authority-api';
export const showFile = auth + '/oss/file/';
axios.defaults.withCredentials = true; //让ajax携带cookie

// 创建axios实例
const service = axios.create({
  baseURL: configObj.host,
  // url: baseUrl,    // api的base_url
  timeout: 100000, // 请求超时时间（毫秒）
  withCredentials: true, //请求是否携带凭证
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    config.url = configObj.host + config.url;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    response.headers['Content-type'] = 'application/json;charset=UTF-8';

    if (__DEV__) {
      console.log('返回结果-->', response.data);
    }
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (__DEV__) {
      console.log('请求错误-->', error);
    }
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          vant.Toast.fail("身份验证失败，请关闭重新进入。");
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          vant.Toast.fail("登录过期，请关闭重新进入。");
          // 清除token
          break;

        // 404请求不存在
        case 404:
          vant.Toast.fail("您访问的网页不存在。");
          break;
        // 其他错误，直接抛出错误提示
        default:
          vant.Toast.fail(error.response.data.message);
      }
      return Promise.reject(error.response);
    }
  },
);

export function fetchGet(url, params, config) {
  return new Promise((resolve, reject) => {
    service.get(
      url,
      { params },
      config,
    ).then((response) => {
      if (response) {
        resolve(response.data);
      }
    },
      (err) => {
        reject(err);
      },
    )
      .catch((error) => {
        reject(error);
      });
  });
}

export function fetchPost(url, params, config) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params, config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        reject(error);
      });
  });
}

export function uploadImage(url, params) {
  return new Promise(function (resolve, reject) {
    let formData = new FormData(); //如果需要上传多张图片,需要遍历数组,把图片的路径数组放入formData中
    if (Platform.OS == 'android') {
      let file = { uri: params, type: 'multipart/form-data', name: 'image.png' }; //这里的key(uri和type和name)不能改变,
      formData.append('file', file);
    } else {
      formData = params;
    }
    fetch(showFile + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data;charset=utf-8',
        'Current-User-Id': userId,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseData) => {
        resolve(responseData);
      })
      .catch((err) => {
        reject(err);
      });
  });
}


export function fetchPostUrl(url, params, config) {
  return new Promise((resolve, reject) => {
    let ret = '';
    for (let it in params) {
      ret +=
        encodeURIComponent(it) + '=' + encodeURIComponent(params[it]) + '&';
    }
    ret = ret.slice(0, -1);
    url = url + '?' + ret;
    service
      .post(url, params, config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        reject(error);
      });
  });
}
export function fetchPostImg(url, params, config) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params, config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        reject(error);
      });
  });
}

export function fetchPostFormData(url, params, config) {
  return new Promise((resolve, reject) => {
    let formData = new FormData();
    for (let i in params) {
      formData.append(i, params[i]);
    }
    service
      .post(url, formData, config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        reject(error);
      });
  });
}

//和以post形式发送数据一样
export function fetchPut(url, params, config) {
  return new Promise((resolve, reject) => {
    service
      .put(url, params, config)
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        reject(error);
      });
  });
}

export function fetchDel(url, params, config) {
  return new Promise((resolve, reject) => {
    service
      .delete(url, params, config)
      .then(
        (response) => {
          if (response) {
            resolve(response.data);
          }
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        reject(error);
      });
  });
}
