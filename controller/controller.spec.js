import { stateById , findByDistrict } from '../client/client.js';

async function getStateById(state_id){
    try{
    let states = await stateById(state_id);
    
    return states;
}
catch(e){
    console.log("Error : " , e.message);
}
}
async function getDistrict(district_id, date){
    try{
    let district = await findByDistrict(district_id, date);
    return district;
    }
    catch(e){
        console.log("Error : ", e.message);
    }
}
export {getStateById, getDistrict}
