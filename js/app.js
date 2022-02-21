// let groupData = [
//     {name: "Чжан Сан", project: "Китайский язык", score: "90"},
//     {name: "Чжан Сан",project: "математика", score: "88"}, 
//     {name: "Чжан Сан",project: "Английский язык", score: "86"}, 
//     {name: "Чжан Сан",project: "«Физический»", score: "96"},
//     {name: "Ли Си",project: "Китайский язык", score: "92"},
//     {name: "Ли Си",project: "математика", score: "86"}
//    ];

// function groupByName(groupData) {
//       let result = groupData.reduce((prevValue, currentValue) => {
//           let index = -1;
//           prevValue.some((item, i) => {
//               if (item.name == currentValue.name) {
//                   index = i;
//                   return true;
//               }
//           })
//           if (index > -1) {
//               prevValue[index].projectAndScore.push({
//                   project: currentValue.project,
//                   score: currentValue.score
//               })
//           } else {
//               prevValue.push({
//                   name: currentValue.name,
//                   projectAndScore: [{
//                       project: currentValue.project,
//                       score: currentValue.score
//                   }]
//               })
//           }
//           return prevValue;
//       }, []);
//       console.log(result);
//       return result;
//   }
//   groupByName(groupData);












  let data = [
    {continent: 'Europa', country: 'Russia', region: 'Moskovska obl'},
    {continent: 'Europa', country: 'Russia', region: 'Tumenskaya obl'},
    {continent: 'North America', country: 'USA', region: 'Toronto'},
    {continent: 'North America', country: 'USA', region: 'Texas'}
];

let continents = {};
let countries = {};
let regions = {};

let grouped = data.reduce((res, reg) => {
    if (!res.continents) res.continents = [];
    if (!continents[reg.continent]) {
         let continent = {name: reg.continent, countries: []};
         res.continents.push(continent);
         continents[reg.continent] = continent;
    }
    if (!countries[reg.country]) {
         let country = {name: reg.country, regions: []};
         continents[reg.continent].countries.push(country);
         countries[reg.country] = country;
    }
    if (!regions[reg.region]) {
         let region = {name: reg.region};
         countries[reg.country].regions.push(region);
         regions[reg.region] = region;
    }
    return res;

}, {});

console.log(grouped);