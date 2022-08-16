function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    let narr = [...arr];
    narr.map(obj => {
      let orbPeriod = Math.round((2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)));
      obj.orbitalPeriod = orbPeriod;
      delete obj.avgAlt;
    });
    return narr;
  }
  
  // console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));