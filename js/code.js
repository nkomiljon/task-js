const regions = [
    {
        countryId: 28,
        federalDistrictId: 3,
        id: 1,
        name: "Республика Адыгея",
        shortName: "Адыгея",
    },
    {
        countryId: 28,
        federalDistrictId: 5,
        id: 2,
        name: "Республика Башкортостан",
        shortName: "Башкирия",
    },
    {
        countryId: 28,
        federalDistrictId: 7,
        id: 3,
        name: "Республика Бурятия",
        shortName: "Бурятия",
    },
    {
        countryId: 28,
        federalDistrictId: 7,
        id: 4,
        name: "Республика Алтай",
        shortName: "Алтай",
    }
];


const players = [
    {
        attestationDate: "2019-05-01T00:00:00",
        attestationId: 11,
        birthDate: "2001-01-10T00:00:00",
        club: {id: 253, name: 'АкумовТим', order: 0},
        countryId: 28,
        fights: 115,
        firstName: "ПАВЕЛ",
        hasCertificate: true,
        id: 1374,
        lastName: "СОБОЛЕВ",
        photoFile: "15/1e9a4e19-f34e-4a04-afe5-962e81f5bc1e/соболев_павел.jpg",
        photoForFightFile: "15/deedf77d-2811-4072-a086-5ef95cde7f6a/-gYux0RY1Ig.jpg",
        rankId: 2,
        rating: 5733,
        regionId: 78,
        sex: true,
        stateId: 1,
        userId: 40,
        wins: 94,
    },
    {
        attestationDate: "2021-08-06T00:00:00",
        attestationId: 15,
        birthDate: "2005-03-06T00:00:00",
        club: {id: 253, name: 'АкумовТим', order: 0},
        countryId: 28,
        fights: 176,
        firstName: "ЯРОСЛАВ",
        hasCertificate: true,
        id: 8936,
        lastName: "ТИМОШИНИН",
        photoFile: "113/aa61769d-2b3a-4028-bc89-628d1b84584f/77F7EEF6-E631-4893-A687-4E97D811EC74.jpeg",
        photoForFightFile: "15/b23576ae-fa50-4136-a9c2-b9f848640f07/VFeed.jpg",
        rankId: 3,
        rating: 5457,
        regionId: 78,
        sex: true,
        stateId: 1,
        userId: 113,
        wins: 105,
    },
    {
        attestationDate: "2021-02-07T00:00:00",
        attestationId: 11,
        birthDate: "2003-01-14T00:00:00",
        club: {id: 253, name: 'АкумовТим', order: 0},
        countryId: 28,
        fights: 88,
        firstName: "ВЕРОНИКА",
        hasCertificate: true,
        id: 2375,
        lastName: "СУШИНА",
        photoFile: "15/89bc3516-c6a3-49ec-b6ad-b8935bdde301/Вероника_Сушина.jpg",
        photoForFightFile: "15/f0b01502-5463-4556-ab5a-22db0b91d942/суш.jpg",
        rankId: 3,
        rating: 4904,
        regionId: 78,
        sex: false,
        stateId: 1,
        userId: 52,
        wins: 60,
    },
    {
        attestationDate: "2020-12-26T00:00:00",
        attestationId: 36,
        birthDate: "2007-02-16T00:00:00",
        club: {id: 47, name: 'Цунами', order: 0},
        countryId: 28,
        fights: 171,
        firstName: "ЯРОСЛАВ",
        hasCertificate: false,
        id: 6947,
        lastName: "ПЛЕМЯШОВ",
        photoFile: null,
        photoForFightFile: null,
        rankId: 4,
        rating: 4865,
        regionId: 78,
        sex: true,
        stateId: 1,
        userId: null,
        wins: 140,
    }
];


const countrys = [
    {
        group: 0,
        hasRegions: false,
        id: 50,
        name: "Абхазия",
        shortName: "ABH",
    },
    {
        group: 1,
        hasRegions: false,
        id: 78,
        name: "Австралия",
        shortName: "AUS",
    },
    {
        group: 1,
        hasRegions: false,
        id: 70,
        name: "Австрия",
        shortName: "AUT",
    }, 
    {
        group: 0,
        hasRegions: false,
        id: 40,
        name: "Азербайджан",
        shortName: "AZE",
    },
    {
        group: 0,
        hasRegions: true,
        id: 28,
        name: "Россия",
        shortName: "RU",
    }
];


let result = players.map((p) => {
    
    return {
       
        players: p,
        regions: regions.filter((r) => r.countryId == p.countryId),
    }
})

console.log(result);