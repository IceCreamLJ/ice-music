import { SONG_URL } from '@/common/constants'

export function getFitUrl(url, size = 100){
  return `${url}?param=${size}x${size}`
}

export function getCount(count){
  if(count < 10000){
    return count
  }else if(count > 1000 && count / 10000 < 10000){
    return Math.round(count/1000) / 10 + '万'
  }else{
    return Math.round(count / 100000000) + '亿'
  }
}

export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function getPlayUrl(id){
  return `${SONG_URL}?id=${id}.mp3`
}