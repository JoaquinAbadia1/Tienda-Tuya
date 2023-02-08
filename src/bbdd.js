const products = [
    { 
        id: '1', 
        name: 'GTA 5', 
        price:' 5.000', 
        category: 'ps5', 
        img:'https://juegosdigitalesargentina.com/files/images/productos/1619630056-grand-theft-auto-5-gta-v-gta-5-ps5.jpg', 
        stock: 20, 
        description:'Grand Theft Auto, abreviado GTA, es un videojuego del tipo sandbox abierto, desarrollado por la compañía escocesa DMA Design y publicado por BMG Interactive en octubre de 1997 para MS-DOS y Microsoft Windows. Es el primer videojuego de la serie Grand Theft Auto. La jugabilidad consiste en una combinación de acción, aventura, conducción, y modo de rol ocasional, con elementos de sigilo y carreras, y que ha generado controversia por su naturaleza adulta y su subtono violento.'
    },
    { 
        id: '2', 
        name: 'Assassin’s Creed Valhalla PS5', 
        price: '10.000', 
        category: 'ps5', 
        img:'https://playdigitalgames.com/wp-content/uploads/2021/06/PortadAPS5.jpg', 
        stock: 10 , 
        description:'Assassins Creed Valhalla es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft. Es el decimosegundo en importancia y el vigesimosegundo lanzado dentro de la saga de Assassin Creed, y sucesor al juego del 2018 Assassins Creed Odyssey.Ambientado en el siglo IX, el juego tiene lugar durante la invasión de Gran Bretaña por parte de los Vikingos, con el jugador controlando al guerrero vikingo Eivor dirigiendo a su pueblo contra el rey sajón Alfredo el Grande y sus reinos vasallos, a los que controla a través de una secta pagana llamada la Orden de los Antiguos, y que pretende cristianizarla.'
    },
   
    { 
        id: '3', 
        name: 'God of War Ragnarok', 
        price: '20.000' , 
        category: 'ps5', 
        img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/203/763/products/201-c2318b6b0bacdaae7a16585400889840-1024-1024.png', 
        stock: 50, 
        description:'God of War Ragnarök es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment (SIE). Se lanzó en todo el mundo el 9 de noviembre de 2022 para PlayStation 4 y PlayStation 5, lo que marca el primer lanzamiento entre generaciones de la serie.'
    },
   
    { 
        id: '4', 
        name: 'Sackboy: A Big Adventure.', 
        price: '9.500', 
        category: 'ps5', 
        img:'https://arsonyb2c.vtexassets.com/arquivos/ids/353814-1600-1600?v=637400955455170000&width=1600&height=1600&aspect=true', 
        stock: 10, 
        description:'Una aventura a lo grande en España) es un videojuego de plataformas desarrollado por Sumo Digital y distribuido por Sony Interactive Entertainment en exclusiva para PlayStation 4 y PlayStation 5, formando parte de la serie LittleBigPlanet. El juego sigue a Sackboy, y presenta plataformas en 3D en lugar de 2.5D en entregas anteriores. Fue anunciado en el evento de revelación de PlayStation 5 en junio de 2020. Fue lanzado en noviembre de 2020.'
    },
   
    { 
        id: '5', 
        name: 'MORTAL KOMBAT 11', 
        price: '3.000' , 
        category: 'ps5', 
        img:'https://dixgamer.com/wp-content/uploads/2021/01/Mortal-Kombat-11-PS5.jpg   ', 
        stock: 20, 
        description:'es un videojuego de lucha desarrollado por NetherRealm Studios y publicado por Warner Bros. Interactive Entertainment. Se ejecuta en una versión muy modificada de Unreal Engine 3,1​ es la undécima entrega principal de la serie Mortal Kombat y una secuela de 2015 Mortal Kombat X. Anunciado en The Game Awards 2018, el juego se lanzó en Norteamérica y Europa el 23 de abril de 2019 para Microsoft Windows, Nintendo Switch, PlayStation 4 y Xbox One. La versión Switch se retrasó en Europa y se lanzó el 10 de mayo de 2019. Tras su lanzamiento, las versiones de consola de Mortal Kombat 11 recibieron críticas generalmente favorables, que elogiaron la jugabilidad, la historia, los gráficos y el código de red mejorado, pero recibió críticas por la presencia de microtransacciones y la excesiva dependencia de grind.'
    },
   
    { 
        id: '6', 
        name: 'FarCry 6', 
        price: '8.999', 
        category: 'xbox', 
        img:'https://http2.mlstatic.com/D_NQ_NP_691813-MLA47843676141_102021-O.webp', 
        stock: 50 , 
        description:'La historia se desarrolla en Yara, una isla ficticia del Caribe, bajo un régimen comunista aparentemente inspirado en el gobierno de Fidel Castro, quien ejerció el poder de forma dictatorial en Cuba y anuncia videojuego inspirado en Cuba, un mundo "detenido en el tiempo". Por tal motivo el equipo de Ubisoft viajó a Cuba para entrevistarse con antiguos guerrilleros que participaron en el bando revolucionario.'
    },
   
    { 
        id: '7', 
        name: 'Elden Ring', 
        price: '6.000', 
        category: 'xbox', 
        img:'https://cdn-products.eneba.com/resized-products/KBHykE1S9zTC4OzLUnPrxFAdkw1zKZjvby9vevSDStk_350x200_1x-0.png', 
        stock: 10, 
        description:'Elden Ring es un título de acción RPG a cargo de From Software y Bandai Namco para PC, PlayStation 4, Xbox One, PlayStation 5 y Xbox Series. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias. Un vasto mundo perfectamente conectado en el que los territorios abiertos estarán repletos de situaciones y mazmorras enormes con diseños complejos y tridimensionales.'
    },
   
    { 
        id: '8', 
        name: 'Halo Infinite', 
        price: '11.300', 
        category: 'xbox', 
        img:'https://areajugones.sport.es/wp-content/uploads/2019/08/Halo_Infinite_cover.jpg.webp', 
        stock: 28, 
        description:'Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries. Es exclusivo para las plataformas Xbox One, Microsoft Windows y Xbox Series X|S. El juego es desarrollado por 343 Industries y distribuido por Xbox Game Studios. El juego es secuela de la historia de Halo 5: Guardians y Halo Wars 2 pero catalogado por 343 Industries como un reinicio espiritual para la saga Halo, o el inicio de una nueva era de Halo, se sabe que será un juego con inspiración de mundo abierto recordando a Halo CE que tenía un factor de exploración pero que en secuelas se fue volviendo más lineal.'
    },
   
    { 
        id: '9', 
        name: 'Rainbow Six EXTRACTION', 
        price: '5.000', 
        category: 'xbox', 
        img:'https://cdn-products.eneba.com/resized-products/LkfZvOubCEzreZAqS1pQxWPrEKxXqDS5lI2zsuynnwI_350x200_1x-0.png', 
        stock: 26 , 
        description:'Las misiones tienen lugar en 12 escenarios diseñados a mano repartidos por San Francisco, Nuevo México, Alaska y Nueva York: hoteles, instalaciones secretas de una isla, casinos… Sin embargo, ninguna misión será igual que la anterior porque habrá variables aleatorias en el objetivo y en los enemigos a los que habrá que hacer frente. Es fácil identificar las sinergias entre los 10 arquetipos de quimeras que habrá que combatir o evitar: el Sembrador pone trampas y ciega, el Tormento se desplaza por el mucílago (una especie de alquitrán que impregna las paredes y el suelo de los nidos del parásito), el Acechador se hace invisible y refuerza a las otras criaturas, el Globular expulsa gas tóxico, el Alfa invoca a otras arqueas…'
    },
   
    { 
        id: '10', 
        name: 'Dirt 5', 
        price: '1.000 ', 
        category: 'xbox', 
        img:'https://cdn-products.eneba.com/resized-products/1XfL8iDYQ3yG3iNQlUYfJ9aPV74aEsJ6SO8m3WFZaa4_350x200_2x-0.jpeg', 
        stock: 99, 
        description:'DIRT 5 es una experiencia de carreras arcade todoterreno divertida y amplificada creada por Codemasters. Ábrete camino en rutas de todo el mundo, cubriendo grava, hielo, nieve y arena, con una lista de autos que van desde íconos de rally hasta camiones y héroes GT. Con una carrera repleta de estrellas, pantalla dividida para cuatro jugadores, modos en línea innovadores, editor de librea y más características nuevas, DIRT 5 es la próxima generación de carreras extremas.'
    },
    { 
        id: '11', 
        name: 'Mario Kart™ 8 Deluxe', 
        price: '9.109,00', 
        category: 'NINTENDO', 
        img:'https://juegosdigitalesargentina.com/files/images/productos/1644881565-1638562825-mario-kart-8-deluxe-nintendo-switch.jpg', 
        stock: 5, 
        description:'¡Acelera a través de las pistas del Reino Champiñón bajo el agua, en el cielo, de cabeza y sin gravedad, y llega a la meta para obtener la victoria! Prepara motores en el modo multijugador local*, en los torneos en línea** del juego, en el modo batalla que ha sido mejorado ¡y más!'
    },
    { 
        id: '12', 
        name: 'Splatoon™ 3', 
        price: '9.109,00', 
        category: 'NINTENDO', 
        img:'https://i.3djuegos.com/juegos/17746/splatoon_3/fotos/ficha/splatoon_3-5652810.webp', 
        stock: 2, 
        description:'Entra en batallas de 4 contra 4* en este colorido juego de acción que está lleno de estilo y actitud. Como un inkling con forma de calamar deberás desparramar tinta a tus alrededores (y a tus oponentes) usando increíbles armas y nadando a través de la tinta de tu color para sorprender a tus oponentes. Disfruta de fresca diversión con tu familia y amigos y causen revuelo al formar equipos. ¿Te reventó un oponente? ¡No te preocupes! El objetivo de los combates territoriales es el entintar la mayor cantidad posible de superficie, ¡así que regenérate y regresa a la acción!'
    },
    { 
        id: '13', 
        name: 'Super Smash Bros.™ Ultimate', 
        price: '4.000', 
        category: 'NINTENDO', 
        img:'https://m.media-amazon.com/images/I/61gGP3kYiRL._SX300_SY300_QL70_FMwebp_.jpg', 
        stock: 22, 
        description:'¡Un auténtico duelo de titanes de los videojuegos que podrás jugar cuando quieras y donde quieras! Lanza a tus rivales del escenario usando uno de los nuevos personajes como Simon Belmont o King K. Rool que se unen a Inkling, Ridley y a todos los combatientes presentes en la historia de Super Smash Bros. Disfruta de la velocidad mejorada y combate en los nuevos escenarios basados en las series de Castlevania, Super Mario Odyssey y otras.'
    },
    { 
        id: '14', 
        name: 'Fall Guys', 
        price: '5.000', 
        category: 'NINTENDO', 
        img:'https://scontent.faep1-1.fna.fbcdn.net/v/t39.30808-6/289579293_5279938205387854_5532657455658499659_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGXE87aTfQwnSAanWG_HJPpAr5leUCA6gsCvmV5QIDqC4haJjz46EWhA9s3SvlCTiFn4hjthJRPCMyXT7Rne7ZG&_nc_ohc=cpyJLTBoPGgAX8KuCve&_nc_ht=scontent.faep1-1.fna&oh=00_AfDA6iJBlfNaq98FaYdz1Fj5bhE2XlqHsYopmq6dITRVxQ&oe=63D0D342', 
        stock: 55, 
        description:'Fall Guys es un juego de fiesta gratuito, multiplataforma y multijugador masivo en el que tú y tus contrincantes compiten en caóticas rondas cada vez más difíciles repletas de obstáculos absurdos hasta que solo quede un ganador.'
    },
    { 
        id: '15', 
        name: 'Kirby™ and the Forgotten Land', 
        price: '1.000', 
        category: 'NINTENDO', 
        img:'https://i5.walmartimages.ca/images/Large/938/426/6000204938426.jpg', 
        stock:10, 
        description:'Desplázate flotando en una nueva aventura como Kirby, la poderosa bola rosada. Explora escenarios en 3D mientras descubres un misterioso mundo con estructuras abandonadas de una civilización pasada, ¿como un centro comercial? Copia las nuevas habilidades de los enemigos, como Taladro y Explorador, y úsalas para atacar, explorar tus alrededores y rescatar a los Waddle Dees de las garras de la jauría junto a tu compañero, el misterioso Elfilin. ¡Esperamos que anheles emprender tu aventura!'
    },
    { 
        id: '16', 
        name: 'Cyberpunk 2077', 
        price: '6.666', 
        category: 'pc', 
        img:'https://media.vandal.net/t200/20029/cyberpunk-2077-201961217172698_1.jpg', 
        stock: 66, 
        description:'Cyberpunk 2077 es el nuevo videojuego de rol en primera persona con estructura de mundo abierto de CD Projekt RED. Los padres de The Witcher nos presentan para Xbox One, PC y PS4 una aventura de corte futurista y ciberpunk en la que encarnaremos a un personaje diseñado a nuestra medida y en la que tendremos que sobrevivir en una peligrosa urbe plagada de corporaciones, ciborgs, bandas y las más variadas amenazas tecnológicas.'
    },
    { 
        id: '17', 
        name: 'Watch Dogs 2', 
        price: '9.999', 
        category: 'pc', 
        img:'https://uvejuegos.com/img/caratulas/56986/peque_pc.jpg', 
        stock: 77, 
        description:'Explora un masivo y dinámico mundo abierto que brinda una increíble variedad de posibilidades de juego. Usa tus habilidades de hacker para abrirte paso por los diferentes vecindarios del Área de la Bahía: San Francisco, Marin County, Oakland, y Silicon Valley. Hay muchos secretos por descubrir en la cuna de la revolución tecnológica.'
    },
    { 
        id: '18', 
        name: 'Battlefield 3', 
        price: '4.000', 
        category: 'pc', 
        img:'https://i.3djuegos.com/juegos/4385/battlefield_3/fotos/ficha/battlefield_3-1729002.webp', 
        stock:88 , 
        description:'Tercera entrega de la popular saga de acción bélica Battlefield. Un poderoso nuevo motor gráfico llamado Frostbite 2 y una experiencia más cruda y más realista de lo conocido hasta ahora en la franquicia son algunas de sus principales bazas.'
    },
    { 
        id: '19', 
        name: 'GTA IV', 
        price: '7.564', 
        category: 'pc', 
        img:'https://m.media-amazon.com/images/I/51LBihKGLEL.__AC_SX300_SY300_QL70_ML2_.jpg', 
        stock: 99, 
        description:'Si eres de parte del sector que no está muy a favor de Microsoft a lo mejor no te va a gusta esta noticia. Rockstar ha firmado un acuerdo con la empresa de Redmond para que el esperado GTA IV para PC, se integre de forma exclusiva a la plataforma Games for Live. Además el juego sólo adquiere la etiqueta de Games for Windows, por tanto, los usuarios de Mac ya se pueden ir despidiendo de la compatibilidad.En definitiva, este anuncio significa que el modo multijugador pasará a estar gestionado por la plataforma Games for Live, así que hay que pasar por el ahora si quieres disfrutar de este modo añadido en la última entrega de la incombustible saga GTA.Junto a la joya de la corona de Rockstar, se unen otros títulos cuya alianza con Microsoft será también efectiva en breve, como es el caso de los muy esperados Fallout 3 y Quantum of Solace, así como una nueva entrega videojueguil de los famosas figuras, estamos hablando de Warhammer 40.000: Dawn of War II.  De este modo, se ve claramente como el éxito de Xbox Live se intenta transmitir ahora a los PC, con títulos cuyo hype garantiza ventas y por tanto un buen torrente de usuarios a los que fidelizar, y de paso darle en las narices al Steam de Valve, que tras los últimos acontecimientos ¿pueden hacer que los rumores de una adquisición por parte de Google dejen de serlo? todo es posible, habrá que estar atentos.'
    },
    { 
        id: '20', 
        name: 'Mass Effect 2', 
        price: '2.000', 
        category: 'pc', 
        img:'https://i.pinimg.com/originals/d1/52/ed/d152ede6462685d7b7eb51aec62b10cf.jpg', 
        stock:100 , 
        description:'Mass Effect 2 es un videojuego de rol de acción desarrollado por BioWare Edmonton, con la asistencia de BioWare de Montreal, y publicado por Electronic Arts. El juego es la secuela de Mass Effect, y fue lanzado para Microsoft Windows y Xbox 360 en América del Norte el 26 de enero de 2010, en Australia el 28 de enero de 2010 y en Europa el 29 de enero de 2010. También salió a la venta para PlayStation 3 el 18 de enero de 2011 en Estados Unidos y el 21 del mismo mes y año en Europa. Es una de las sagas de videojuego más exitosas por su gran trama y jugabilidad.1​'
    },
    

   
]


export const getProducts = (categoryId) => {
    console.log(categoryId)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}