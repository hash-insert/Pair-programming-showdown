orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

const orbitPeriod =(arr) => {
  const GM=398600.4418 
  const earthR =6367.4447 
  arr.map(obj => {
    let T = Math.round(2 * 3.14* Math.sqrt(Math.pow(earthR + obj.avgAlt, 3) / GM));
    delete obj.avgAlt;
    obj.orbitPeriod = T;
})
return arr
}