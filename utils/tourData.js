const tours = [
  {
    id: 1,
    name: "Viaje al este",
    price: '14,560.00',
    country: "República Dominicana",
    travelers: { quantity: 20, full: 50 },
    available: true,
    pictures: ["image1.jpg", "image2.jpg"],
    time: { days: 2, nights: 1 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa En Punta Cana, encontrarás un equilibrio perfecto entre lujo y aventura. Los resorts de primera categoría ofrecen alojamiento de lujo, restaurantes gourmet y spas de clase mundial, mientras que las actividades al aire libre te invitan a explorar las maravillas naturales de la región. Desde emocionantes deportes acuáticos hasta excursiones a selvas tropicales y visitas a emocionantes parques temáticos, Punta Cana ofrece algo para todos los gustos. La rica cultura dominicana se refleja en la música, la danza y la deliciosa cocina local. No puedes dejar de probar platos típicos como el mofongo o el sancocho. Además, la calidez y la hospitalidad de la gente local hacen que te sientas como en casa en este paraíso tropical. Ya sea que estés buscando unas vacaciones relajantes en la playa, una escapada romántica, una emocionante aventura en familia o una experiencia de golf de primer nivel, Punta Cana tiene todo lo que necesitas para crear recuerdos inolvidables. Prepárate para disfrutar del sol, el mar y la cultura en este destino de ensueño que te robará el corazón. ¡Bienvenido a Punta Cana!'
  },
  {
    id: 2,
    name: "Aventura en la selva",
    price: '14,560.00',
    country: "Brazil",
    travelers: { quantity: 15, full: 30 },
    available: false,
    pictures: ["image3.jpg", "image4.jpg"],
    time: { days: 5, nights: 4 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa.'
  },
  {
    id: 3,
    name: "Exploración en las montañas",
    price: '14,560.00',
    country: "Switzerland",
    travelers: { quantity: 10, full: 20 },
    available: true,
    pictures: ["image5.jpg", "image6.jpg"],
    time: { days: 7, nights: 6 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa.'
  },
  {
    id: 4,
    name: "Recorrido cultural en Kyoto",
    price: '14,560.00',
    country: "Japan",
    travelers: { quantity: 25, full: 40 },
    available: true,
    pictures: ["image7.jpg", "image8.jpg"],
    time: { days: 4, nights: 3 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa.'
  },
  {
    id: 5,
    name: "Safari en la sabana",
    price: '14,560.00',
    country: "Kenya",
    travelers: { quantity: 12, full: 25 },
    available: false,
    pictures: ["image9.jpg", "image10.jpg"],
    time: { days: 6, nights: 5 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa.'
  },
  {
    id: 6,
    name: "Tour gastronómico en París",
    price: '14,560.00',
    country: "France",
    travelers: { quantity: 18, full: 30 },
    available: true,
    pictures: ["image11.jpg", "image12.jpg"],
    time: { days: 3, nights: 2 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa.'
  },
  {
    id: 7,
    name: "Expedición en la Antártida",
    price: '14,560.00',
    country: "Antarctica",
    travelers: { quantity: 8, full: 15 },
    available: false,
    pictures: ["image13.jpg", "image14.jpg"],
    time: { days: 10, nights: 9 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa.'
  },
  {
    id: 8,
    name: "Aventura en las islas griegas",
    price: '14,560.00',
    country: "Greece",
    travelers: { quantity: 22, full: 35 },
    available: true,
    pictures: ["image15.jpg", "image16.jpg"],
    time: { days: 5, nights: 4 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa.'
  },
  {
    id: 9,
    name: "Recorrido histórico en Roma",
    price: '14,560.00',
    country: "Italy",
    travelers: { quantity: 30, full: 50 },
    available: true,
    pictures: ["image17.jpg", "image18.jpg"],
    time: { days: 4, nights: 3 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa En Punta Cana, encontrarás un equilibrio perfecto entre lujo y aventura. Los resorts de primera categoría ofrecen alojamiento de lujo, restaurantes gourmet y spas de clase mundial, mientras que las actividades al aire libre te invitan a explorar las maravillas naturales de la región. Desde emocionantes deportes acuáticos hasta excursiones a selvas tropicales y visitas a emocionantes parques temáticos, Punta Cana ofrece algo para todos los gustos. La rica cultura dominicana se refleja en la música, la danza y la deliciosa cocina local. No puedes dejar de probar platos típicos como el mofongo o el sancocho. Además, la calidez y la hospitalidad de la gente local hacen que te sientas como en casa en este paraíso tropical. Ya sea que estés buscando unas vacaciones relajantes en la playa, una escapada romántica, una emocionante aventura en familia o una experiencia de golf de primer nivel, Punta Cana tiene todo lo que necesitas para crear recuerdos inolvidables. Prepárate para disfrutar del sol, el mar y la cultura en este destino de ensueño que te robará el corazón. ¡Bienvenido a Punta Cana!'
  },
  {
    id: 10,
    name: "Aventura en las cataratas del Iguazú",
    price: '14,560.00',
    country: "Argentina",
    travelers: { quantity: 15, full: 25 },
    available: false,
    pictures: ["image19.jpg", "image20.jpg"],
    time: { days: 3, nights: 2 },
    description: 'Punta Cana, un rincón paradisíaco en la República Dominicana, es un destino de ensueño que cautiva con su belleza natural y su oferta turística de clase mundial. Situada en la costa este de la isla, esta joya caribeña es conocida por sus playas de arena blanca y aguas cristalinas, que se extienden a lo largo de kilómetros de costa.'
  },
];

export default tours;
