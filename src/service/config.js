const TIMEOUT = 5000;

const DEV_BASEURL = 'http://123.207.32.32:9001';
const PROD_BASEURL = '';
const BASEURL = process.env.NODE_ENV === 'development' ? DEV_BASEURL : PROD_BASEURL

export { TIMEOUT, BASEURL }