// 클래스 Estimate. 속성: 재료, 단가: 재료와 부피 => 총금액

class Estimate {
    constructor(param) {
        this.unit = param;
    }
    getEstimate(unitType, width, height){ // 총금액 : wood 20 20 => 100 * 20 * 20
        let priceInfo = this.unit.find(function(val){
            return val.type == unitType;
        })      
        return priceInfo.price * width * height;
    }
    addUnit(unit){
        this.unit.push(unit);
    }
}

let unitInfo = [
    {type: 'wood', price: 100},
    {type: 'iron', price: 300},
    {type: 'plastic', price: 200}
]

let estimate = new Estimate(unitInfo);
let result = estimate.getEstimate('wood',30, 50);

estimate.addUnit({type:'ceramic', price: 400});
result = estimate.getEstimate('ceramic', 10, 20);

console.log(`계산값은 ${result}`);
