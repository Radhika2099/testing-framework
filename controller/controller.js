import { stateById , findByDistrict } from '../client/client.js';
async function getStateById(state_id){
    let states = await stateById(state_id);
    
    return states;
}
async function getDistrict(district_id, date){
    let district = await findByDistrict(district_id, date);
    return district;
}
export {getStateById, getDistrict}
