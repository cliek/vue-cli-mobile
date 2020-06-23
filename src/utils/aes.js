import CryptoJS from 'crypto-js';

const key=CryptoJS.enc.Hex.parse('3132333435363738393041424344454631323334353637383930414243444566');
const iv=CryptoJS.enc.Hex.parse('30313233343536373839414243444546');

export default function encrypt(src) {
    var enc = CryptoJS.AES.encrypt(src ,key,{
        iv:iv,
        mode: CryptoJS.mode.CBC,  
        padding: CryptoJS.pad.Pkcs7
    })
    return enc.ciphertext.toString()
}