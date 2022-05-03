 import chai from 'chai';
import {expect , should, assert} from 'chai';
import { getStateById, getDistrict } from '../controller/controller.js';
describe('Testing stateById' , () => {
    it('stateId' , async ()=>{
        const state2 = await getStateById(16);
        var districts = state2.body["districts"];
        for (let i = 0; i < districts.length; i++) {
            assert.typeOf(districts[i]["district_name"], "string");
            assert.typeOf(districts[i]["district_id"], "number");
            expect(districts[i]["district_name"].length && districts[i]["district_id"]).to.above(1);
          }
    })
    it('districtId', async()=>{
        const district2= await getDistrict(512 , 31-11-2021);
        var d3 = JSON.parse(district2.body)["sessions"];
        console.log(d3);
        for (let i in d3){
            expect(d3[i].fee_type).to.equal('Free');
            expect(d3[i].min_age_limit).to.equal(18)
        }
    })
});
