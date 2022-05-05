import chai from 'chai';
import {expect , should, assert} from 'chai';
import { getStateById, getDistrict } from '../controller/controller.spec.js';
describe('Testing stateById' , () => {
    it('should have district_id and name' , async ()=>{
        const state2 = await getStateById(16);
        var districts = state2.body["districts"];
        for (let i = 0; i < districts.length; i++) {
            assert.typeOf(districts[i]["district_name"], "string");
            assert.typeOf(districts[i]["district_id"], "number");
            expect(districts[i]["district_name"].length && districts[i]["district_id"]).to.above(1);
          }
    })
    
});
