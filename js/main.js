

const countrys = [
   {id: 1, country: 'Russia'},
   {id: 2, country: 'Canada'},
   {id: 3, country: 'USA'},
   {id: 4, country: 'China'},
];

const players = [
   {
       countryId: 1,
       regionId: 20, 
       name: 'Ivan',
       club: [ 
         {
            id: 231, name: 'AkumovTim', 
         } 
      ],
   },
   {
      countryId: 2, 
      regionId: 2,  
      name: 'Tom',
      club: [ 
         {
            id: 251, name: 'TeamCanada', 
         } 
      ],
   },
   {
      countryId: 3, 
      regionId: 42, 
      name: 'John',
      club: [ 
         {
            id: 248, name: 'TeamTexas', 
         } 
      ],
   },
   {
      countryId: 4, 
      regionId: 3,  
      name: 'Jack',
      club: [ 
         {
            id: 244, name: 'TeamUSA', 
         } 
      ],
   },
   {
      countryId: 1, 
      regionId: 10, 
      name: 'Alex',
      club: [ 
         {
            id: 201, name: 'TeamPetrburg', 
         } 
      ],
   },
];

const regions = [
   {countryId: 1, regionId: 20, region: 'Samara'},
   {countryId: 2, regionId: 2,  region: 'null'},
   {countryId: 3, regionId: 42, region: 'Texas'},
   {countryId: 4, regionId: 3,  region: 'null'},
   {countryId: 1, regionId: 10, region: 'Petrburg'},
];




const result = countrys.map((i) => {
   return {
     country: i.country,
     users: regions.map((r) => {
        return {
           players: players.filter((p) => p.regionId == r.id)
        }
     }),
   }
});

console.log(result);




// RESULT ARRAY
const res = [
   {
      country: {id: 1, country: 'Russia'},
      regions: [
         {
            region: { countryId: 1, regionId: 20, region: 'Samara'},
               clubs: [
                  {
                     club: { id: 231, name: 'AkumovTeam'},
                     players: [
                        { countryId: 1, regionId: 20, name: 'Ivan',}
                     ],
                  },
                  {
                     club: { id: 201, name: 'TeamPetrburg'},
                     players: [
                        { countryId: 1, regionId: 20, name: 'Alex',}
                     ],
                  }
               ],
         }
      ]
       
   },
   {
      country: {id: 2, country: 'Canada'},
      regions: [
         {
            region: { countryId: 2, regionId: 2, region: 'null'},
            clubs: [
               {
                  club: { id: 251, name: 'TeamCanada'},
                  players: [
                     { countryId: 2, regionId:  2, name: 'John',}
                  ],
               },
            ],
         }
      ]
   },
   {
      country: {id: 3, country: 'USA'},
      regions: [
         {
            region: { countryId: 3, regionId: 42, region: 'null'},
            clubs: [
               {
                  club: { id: 248, name: 'TeamTexas'},
                  players: [
                     { countryId: 3, regionId:  42, name: 'Tom',}
                  ],
               },
            ],
         }
      ]
   },
   {
      country: {id: 4, country: 'China'},
      users: [
         {countryId: 4, name: 'Jack'},
      ]
   }
];

console.log(res);