const countrys = [
    {id: 1, country: 'Russia'},
    {id: 2, country: 'Canada'},
    {id: 3, country: 'USA'},
    {id: 4, country: 'China'},
 ];
 
 const players = [
    {countryId: 1, name: 'Ivan', club: {name: 'RussianClub'}, regionId: 2},
    {countryId: 2, name: 'Tom',  club: {name: 'CanadaClub'}},
    {countryId: 3, name: 'John',  club: {name: 'USAClub'}},
    {countryId: 3, name: 'Bob',  club: {name: 'USAClub2'}},
    {countryId: 4, name: 'Jack',  club: {name: 'ChinaClub'}},
    {countryId: 1, name: 'Aleksandr',  club: {name: 'RussianClub2'}, regionId: 19},
 ];

 const regions = [
    {id: 2, countryId: 1, name: 'Samara'},
    {id: 245, countryId: 2, name: 'Ottava'},
    {id: 56, countryId: 3, name: 'Texas'},
    {id: 14, countryId: 3, name: 'Los-Angles'},
    {id: 84, countryId: 4, name: 'Pekin'},
    {id: 19, countryId: 1, name: 'Moscow'},
 ];


const regionClubs = regions.map((r) => {
    const clubsAdd = players.filter((c) => c.regionId === r.id)
    return {
      regions: r,
      clubs: clubsAdd,
    }
  });

  console.log(regionClubs);
  
  const res = countrys.map((i) => {
    const regionsAdd = regionClubs.filter((p) => p.countryId === i.id)
    // const clubs = players.filter((p) => p.countryId === i.id)
    return {
      countrys: {
        players: i,
        regions: regionsAdd,
      },
    }
  });


  console.log(res);



  










// const res = [
//     {
//       country: {id: 1, country: 'Russia'},
            
//                region: {id: 2, countryId: 1, name: 'Samara'},
//                clubs: 
//                      {
//                   club: {name: 'RussianClub'},
//                   users: [
//                      {countryId: 1, name: 'Ivan', regionId: 2},
//                ]
//             }
        
//       },
//       {
//          region: {id: 19, countryId: 1, name: 'Moscow'},
//          clubs: 
//                {
//                club: {name: 'RussianClub2'},
//                users: [
//                   {countryId: 1, name: 'Aleksandr', regionId: 19},
//                ]
//             }
         
    
//     },
//    {
//       country: {id: 2, country: 'Canada'},
//             regions: [{
//             region: {id: 245, countryId: 2, name: 'Ottava'},
//                clubs: [{
//                   club: {name: 'CanadaClub'},
//                   users: [
//                      {countryId: 2, name: 'Tom', regionId: 245},
//                ]
//             }
//          ]
//       }]
//    },
//     {
//        country: {id: 3, country: 'USA'},
//          regions: [{
//                region: {id: 56, countryId: 3, name: 'Texas'},
//                clubs: [
//                      {
//                   club: {name: 'USAClub'},
//                   users: [
//                      {countryId: 1, name: 'John', regionId: 56},
//                ]
//             }
//          ],
//       }],
//          regions: [{
//          region: {id: 14, countryId: 3, name: 'Los-Angles'},
//          clubs: [
//                {
//                club: {name: 'USAClub2'},
//                users: [
//                   {countryId: 3, name: 'Bob', regionId: 14},
//                ]
//             }
//          ]
//       }]
//     },
//     {
//        country: {id: 4, country: 'China'},
//        regions: [{
//          region: {id: 84, countryId: 4, name: 'Pekin'},
//             clubs: [{
//                club: {name: 'ChinaClub'},
//                users: [
//                   {countryId: 4, name: 'Jack', regionId: 84},
//                ]
//             }
//          ]
//       }]
//     }
//  ];


 
//  console.log(res);