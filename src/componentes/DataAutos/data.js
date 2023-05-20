/*Array de Autos(20 autos en total), se exporta la archivo asyncMock donde se lo trabaja*/

export const Autos = [
    {   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Fiat_Grande_Punto_20090402_front.JPG/250px-Fiat_Grande_Punto_20090402_front.JPG",
        titulo:"fiat punto",
        cantidad:20, 
        marca:"fiat", 
        id: 1,
        descripcion:"Motor y transmisión: Cilindrada 1.368 N° de cilindros y disposición 4 en linea Potencia máxima (CV/rpm) 85 / 5.750",
        precio: 1500000,
    },

    {
        img: "https://http2.mlstatic.com/D_NQ_NP_716025-MLA51545173254_092022-W.jpg",
        titulo: "Wolsvagen Vento",
        cantidad:15,
        marca: "wolsvagen", 
        id: 2,
        descripcion:"Motor y transmisión: Cilindrada 1984 N° de cilindros y disposición 4 Potencia máxima (CV/rpm) 211",
        precio:4265156
    },

    {
        img: "https://www.compraensanjuan.com/fotos_vehiculos/1397869_1.jpg",
        titulo: "Wolsvagen Bora",
        cantidad:2,
        marca:"wolsvagen", 
        id: 3,
        descripcion:"Motor y transmisión: Cilindrada 1.781 N° de cilindros Valvulas 4 20V Potencia 180 CV " ,
        precio: 6325148 ,
    },

    {
        img: "https://fotos.perfil.com/2022/12/15/chevrolet-corsa-1473562.jpg",
        titulo:"Chevrolet Corsa",
        cantidad:95,
        marca:"chevrolet",
        id: 4,
        descripcion:"Motor y transmisión: Cilindrada 1.389 Número de Cilindros: 4 Potencia Máxima (CV): 60", 
        precio: 1200145
    },

    {
        img: "https://d171xgro1r36rb.cloudfront.net/1CVNNxaef0be4uDNsWczhpd5ZsU2pbx-X.jpg",
        titulo: "Ford Fiesta",
        cantidad:45,
        marca:"ford", 
        id: 5,
        descripcion:"Motor y transmisión: Cilindrada: 1.596 Número de Cilindros: 4 Potencia Máxima (CV): 120" , 
        precio: 8544168
    },

    {
        img: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_3732eca042e541839df92633006280ca.jpg",
        titulo: "wolsvagen up",
        cantidad:90,
        marca:"wolsvagen", 
        id: 6,
        descripcion:"Motor y transmisión: Cilindrada: 999 Número de cilindros: 3 Potencia máxima: 75 CV" , 
        precio: 9221147
    },

    {
        img:"https://http2.mlstatic.com/D_NQ_NP_726797-MLA53826304995_022023-O.jpg",
        titulo:"Ford Ka",
        cantidad:100,
        marca:"ford", 
        id: 7,
        descripcion:"Motor y transmisión: Cilindrada: 1.499 c.c. Número de Cilindros: 3 Potencia Máxima (CV): 123 CV", 
        precio: 10152000 
    },

    {
        img:"https://cdn.motor1.com/images/mgl/b3qZk/s3/lanzamiento-fiat-siena-el.jpg",
        titulo:"Fiat Siena",
        cantidad:8,
        marca:"fiat", 
        id:8,
        descripcion: "Motor y transmisión: Cilindrada: 1598 c.c. Número de Cilindros: 4 Potencia máxima (CV): 115 ", 
        precio: 3874168
    },

    {
        img:"https://media.toyota.com.ar/33eadc1b-866b-4d9a-a7a6-7307ba4c0b02.png",
        titulo:"Toyota Yaris",
        cantidad:63,
        marca:"toyota", 
        id:9,
        descripcion:"Motor y transmisión:  Cilindrada: 1496 c.c. Número de Cilindros: 4 Potencia máxima (CV): 107" , 
        precio: 7111125
    },

    {
        img:"https://cdn.motor1.com/images/mgl/vkekA/s1/toyota-hilux-2021.jpg",
        titulo:"Toyota Hilux",
        cantidad:23, 
        marca:"toyota", 
        id:10,
        descripcion:"Motor y transmisión:  Cilindrada: 2.755 c.c. Número de Cilindros: 4 Potencia máxima (CV): 177" , 
        precio: 4882975
    },

    {
        img:"https://autotest.com.ar/wp-content/uploads/2022/01/Ford-F-150-Raptor-tierra.jpg",
        titulo:"Ford Raptor",
        cantidad:41,
        marca:"ford", 
        id: 11,
        descripcion:"Motor y transmisión: Cilindrada:3.500 c.c. Número de Cilindros: 6 Potencia máxima (CV):456 " , 
        precio: 8547999
    },

    {
        img:"https://autotest.com.ar/wp-content/uploads/2021/07/FIAT-CRONOS-SDESIGN-2022.jpg",
        titulo:"Fiat Cronos",
        cantidad:2,
        marca:"fiat", 
        id:12,
        descripcion:"Motor y transmisión: Cilindrada:1.332 c.c. Número de Cilindros: 4 Potencia máxima (CV): 99 ",
        precio: 5213697
    },
    
    {
        img:"https://chevcar.com/wp-content/uploads/2022/01/La-historia-del-Volkswagen-Gol-Trend.jpg",
        titulo:"Wolsvagen Gol Trend",
        cantidad:26,
        marca:"wolsvagen",
        id:13,
        descripcion:"Motor y transmisión: Cilindrada: 1.599 c.c. Número de Cilindros: 4 Potencia máxima (CV): 101", 
        precio: 7114777
    },

    {
        img:"https://www.carsmagazine.com.ar/wp-content/uploads/2022/08/volkswagen-polo-trend-plan-ahorro-argentina-1.jpg",
        titulo: "Wolsvagen Polo Trend",
        cantidad:47,
        marca:"wolsvagen", 
        id:14,
        descripcion:"Motor y transmisión: Cilindrada: 1.589 c.c. Número de Cilindros: 4 Potencia máxima (CV): 110",
        precio: 5347987
    },

    {
        img:"https://media.gm.com/content/dam/Media/images/AR/Vehicles/Chevrolet/automoviles/Cruze/2021/Chevrolet%20Cruze%20Premier%20Hatch.jpg",
        titulo:"Chevrolet Cruze",
        cantidad:95,
        marca:"chevrolet", 
        id:15,
        descripcion:"Motor y transmisión: Cilindrada: 1399 c.c. Número de Cilindros: 4 Potencia máxima (CV): 153" , 
        precio: 78111169
    },

    {
        img: "https://mobi.fiat.com.ar/content/dam/fiat/products/341/ac1/0/2023/page/360/806/05.png.thumb.1280.1280.png",
        titulo:"Fiat Mobi",
        cantidad:12,
        marca:"fiat", 
        id:16,
        descripcion:"Motor y transmisión: Cilindrada: 999 c.c. Número de Cilindros: 4 Potencia máxima (CV): 70" , 
        precio: 12000000
    },

    {
        img: "https://d171xgro1r36rb.cloudfront.net/1Z9Gy2sbTuyg841OLA52bufP9rDNm1vMQ.jpg",
        titulo:"Ford Focus",
        cantidad:9,
        marca:"ford", 
        id:17,
        descripcion:"Motor y transmisión: Cilindrada: 1599 c.c. Número de Cilindros: 4 Potencia máxima (CV): 125", 
        precio: 3000000
    },

    {
        img: "https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/bhp/lineup/Jeep-Renegade-2022-new.jpg.img.300.jpg",
        titulo:"Jeep renegade",
        cantidad:36,
        marca:"jeep", 
        id:18,
        descripcion: "Motor y transmisión:  Cilindrada: 3605 c.c. Número de Cilindros: 4 Potencia máxima (CV): 286", 
        precio: 7588498
    },

    {
        img:"https://autotest.com.ar/wp-content/uploads/2023/01/Fiat-Argo-2023-frente.jpg",
        titulo:"Fiat Argo",
        cantidad:13,
        marca:"fiat",
        id:19,
        descripcion:"Motor y transmisión:  Cilindrada: 1.747 c.c. Número de Cilindros: 4 Potencia máxima (CV): 130 ",
        precio: 6589000

    },

    {
        img:"https://www.autodrive.com.ar/templates/yootheme/cache/47/Compass_Longitude_Carbon_Black2022-471492aa.jpeg",
        titulo:"Jeep Compass",
        cantidad:21,
        marca:"jeep",
        id:20,
        descripcion:"Motor y transmisión:  Cilindrada: 2360 c.c. Número de Cilindros: 4 Potencia máxima (CV): 175",
        precio: 9672123 
    },

    {
        img:"https://autotest.com.ar/wp-content/uploads/2022/12/Toyota-GR-86-Trompa.jpg",
        titulo:"Toyota GR 86",
        cantidad:5,
        marca:"toyota",
        id:21,
        descripcion:"Motor y transmisión:  Cilindrada: 2400 c.c. Número de Cilindros: 4 Potencia máxima (CV): 235 CV",
        precio: 5672123 
    },
    
    {
        img:"https://www.carsmagazine.com.ar/wp-content/uploads/2020/11/toyota-corolla-gr-sport-5.jpg",
        titulo:"Toyota Corolla GR",
        cantidad:89,
        marca:"toyota",
        id:22,
        descripcion:"Motor y transmisión:  Cilindrada: 2000 c.c. Número de Cilindros: 4 Potencia máxima (CV): 170 CV",
        precio: 10672123 
    }


]