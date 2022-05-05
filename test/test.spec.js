import chai from 'chai';
import {expect , should, assert} from 'chai';
import { getStateById, getDistrict } from '../controller/controller.spec.js';
describe('Testing user data for vaccine', ()=>{
    it('should have some user data', async()=>{
        const districts= await getDistrict(512 , 31-11-2021);
        var district = JSON.parse(districts.body)["sessions"];
        for (let i in district){
            expect(district[i].fee_type).to.equal('Free');
            expect(district[i].min_age_limit).to.equal(18)
        }
})
})    
    