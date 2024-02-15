module.exports = function(app, databaseService) {
    app.get('/', (request, response) => {
        response.status(200).json({ message: 'mensaje: Hola mundo!'});
    });

    app.post('/places',(request,response) => {
        const newLugar = request.body;
        console.log(newLugar);
        databaseService.crearLugar(newLugar)
           .then(() => {
            const result = databaseService.crearLugar(newLugar);
            response.status(201).json({message: 'Lugar creado'});

           }).catch((error) => {
                response.status(500).json({message: 'Error al crear lugar'});
                console.log(error);
              });})
            
                    
                

    app.get('/places', (request, response) => {
        databaseService.getLugares()
            .then((places) => {
                response.status(200).json(places);
            })
            .catch((error) => {
                response.status(500).json({message: 'Error al obtener lugares'});
                console.log(error);
            });
    });
}

// Users
module.exports = function(user, databaseService) {
    user.post('/users', (request, response) => {
        const newUser = request.body;
        databaseService.createUser(newUser)
            .then(() => {
                response.status(201).json({message: 'Usuario creado'});
            })
            .catch((error) => {
                response.status(500).json({message: 'Error al crear usuario'});
                console.log(error);
            });
    });

    user.get('/users', (request, response) => {
        databaseService.getUsers()
            .then((users) => {
                response.status(200).json(users);
            })
            .catch((error) => {
                response.status(500).json({message: 'Error al obtener usuarios'});
                console.log(error);
            });
    });

}