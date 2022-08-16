# Map the Debris

According to Kepler's Third Law, the orbital period **T**T of two point masses orbiting each other in a circular or elliptic orbit is:

**T**=**2**π**a**3**μ**−−−√T=2πa3μ

* **a**a is the orbit's semi-major axis
* **μ**=**G**Mμ=GM is the standard gravitational parameter
* **G**G is the gravitational constant,
* **M**M is the mass of the more massive body.

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format `{name: 'name', avgAlt: avgAlt}`.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km^3^s ^-2^ .


## Tests

* `orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])` should return `[{name: "sputnik", orbitalPeriod: 86400}]`.
* `orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])` should return `[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]`.

<!-- Code Here -->
function orbitalPeriod(arr) {
 var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.map(obj => {
    let oP = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
    delete obj.avgAlt;
    obj.orbitalPeriod = oP;
  })
  return arr;
}




