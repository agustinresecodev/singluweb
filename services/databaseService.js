const databaseService = () => {

    const knex = require('knex')({
        client:'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_DATABASE,
                }
    
    });
    const table = 'places';

    const getLugares = () => {
        return knex(table).select('*');
    } 

    const crearLugar =({
        name,
        city,
        state,
        cp,
        address,
        lat,
        lng,
        phone,
        email,
        website,
        description,
        profilePhoto,
        instagramProfile,
        facebookProfile,
        xProfile,
        created_at,
        verified,
        verified_at}
        )=>{
            return knex(table).insert({
                name: name,
                city: city,
                state: state,
                cp : cp,
                address : address,
                lat: lat,
                lng: lng,
                phone: phone,
                email: email,
                website: website,
                description: description,
                profilePhoto: profilePhoto,
                instagramProfile: instagramProfile,
                facebookProfile: facebookProfile,
                xProfile: xProfile,
                created_at: created_at,
                verified: verified,
                verified_at: verified_at
            });
    };

    return {
        crearLugar,
        getLugares
    };

    
}
module.exports = {
    databaseService,
    
};