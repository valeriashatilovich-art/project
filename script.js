let button= getELementBYId("calculate_btn")
let result= getELementBYId("result_time")
function getNumber(id) {
return parseFloat(document.getElementById(id).value);
}
const speed = getNumber("speed");
button.addEventListener("click", function () {let  distance= getNumber("distance")
let  speed= getNumber("speed")
let  capacity= getNumber("capacity")
let  c_rating= getNumber("c_rating")
let  battery_weight= getNumber("battery_weight")
let  drone_weight= getNumber("drone_weight")
let  kv_motor= getNumber("kv_motor")
let  prop_size= getNumber("prop_size")

let all [distance,speed, capacity, c_rating, battery_weight, drone_weight, kv_motor, prop_size]
if all.some(isNaN) || all.some (v >= v <= 0){ result.textContent = "Заполните все поля положительными числами";
}
});

