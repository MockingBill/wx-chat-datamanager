var CryptoJS = require('./lib/AES.js');  //引用AES源码js
var key = CryptoJS.enc.Utf8.parse("AA11ABDC1AB777AB"); //十六位十六进制数作为秘钥
var iv = CryptoJS.enc.Utf8.parse('AEB13ADC9438AE28'); //十六位十六进制数作为秘钥偏移量
//解密方法
function Decrypt(word) {
  var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  var decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
//加密方法
function Encrypt(word) {
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString().toUpperCase();
}

function getTimeToken() {
  var myDate = new Date();
  return myDate.getFullYear() + "" + (myDate.getMonth() + 1) + "" + myDate.getDate() + "" + myDate.getHours()+"illidan";
}

module.exports.Decrypt = Decrypt;
module.exports.Encrypt = Encrypt;
module.exports.getTimeToken = getTimeToken;