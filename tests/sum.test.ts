import { summ } from "../controllers/sum";
describe('Sum function test',()=>{
    it('should sum numbers correctly',()=>{
        expect(summ(1,2)).toBe(3)
    })
})