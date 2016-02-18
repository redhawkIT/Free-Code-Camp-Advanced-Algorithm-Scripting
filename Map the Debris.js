// Map the Debris.js

// Return a new array that transforms the element's average altitude into their orbital periods.
// The formula needed is: T = 2_pi _ sqrt(earthRadius + avgAlt to the cube / GM)

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.map(function(oribit) {
    var a = oribit.avgAlt + earthRadius;
    var orbitalPeriod = Math.round((2 * Math.PI) * Math.pow((Math.pow(a, 3) / GM), 1 / 2));

    //deleting the avgAlt property
    delete oribit.avgAlt;
    //adding orbitalPeriod property
    oribit.orbitalPeriod = orbitalPeriod;
  });
  return arr;
}

orbitalPeriod([{
  name: "sputnik",
  avgAlt: 35873.5553
}]);
//  [{name: "sputnik", orbitalPeriod: 86400}].
