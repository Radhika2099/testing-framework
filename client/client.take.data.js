import got from 'got';
let baseUrl = 'https://cdn-api.co-vin.in/api/v2/'
async function generateOTP(){
    return got.post(`${baseUrl}auth/public/generateOTP`);
}
console.log(generateOTP());