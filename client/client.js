import got from 'got';
let baseUrl = 'https://cdn-api.co-vin.in/api/v2/'
async function stateById(state_id){
    return got.get(`${baseUrl}admin/location/districts/${state_id}`, {responseType: 'json'})

}
async function findByDistrict(district_id , date){
    return got.get(`${baseUrl}appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`)
}
export {stateById, findByDistrict};