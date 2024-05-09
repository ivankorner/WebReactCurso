export const products = [
  {
    nombre: "Samsung Galaxy Z Flip5 Cream",
    id: 1,
    type: "Importado",
    precio: 180000,
    stock: 3,
    descripcion: "Capacidad de la batería: 3,700 mAh, Material del cuerpo: Aluminio, Vidrio, Generación de banda ancha: 5G,  Red móvil: CDMA, GSM, Prepago, Wcdma, Wlan",
    image: "https://i.postimg.cc/BbVZrN7v/1.png",
   
  },
  {
    nombre: "Samsung Galaxy A34 5g Lime",
    id: 2,
    type: "Importado",
    precio: 330000,
    stock: 5,
    descripcion:"Capacidad de la batería: 5,000 mAh, Generación de banda ancha: 5G, Fuente de luz de la cámara: Luz LED, Red móvil: CDMA, GSM, Prepago, Wcdma, Wlan",
      image: "https://i.postimg.cc/QN9ZYXt9/2.png",
  },
  {
    nombre: "XIAOMI REDMI Ocean Blue",
    id: 2,
    type: "Importado",
    precio: 290000,
    stock: 5,
    descripcion: "Pantalla IPS de 6.71, Tiene 2 cámaras traseras de 50Mpx/2Mpx, Cámara delantera de 5Mpx, Procesador Snapdragon 680 Octa-Core de 2.4GHz con 4GB de RAM, Batería de 5000mAh,    Memoria interna de 128GB",
    image: "https://i.postimg.cc/Pfm25cVV/3.png",
  },
  {
    nombre: "Alcatel 1 Ultra 32 GB negro 1 GB RAM",
    id: 4,
    type: "Importado",
    precio: 58000,
    stock: 4,
    descripcion: "Pantalla IPS de 5, Cámara delantera de 2Mpx, Procesador MediaTek MT6739 Quad-Core de 1.3GHz con 1GB de RAM, Batería de 2000mAh, Memoria interna de 32GB",
      image: "https://i.postimg.cc/J4Jb7BTN/4.png",
    
  },
  {
    nombre: "Celular Zte Blade A72s 128/4 Gb Sky Blue Color Celeste",
    id: 5,
    type: "Nacional",
    precio: 254000,
    stock: 5,
    descripcion: "Pantalla de 6.75, Cámara delantera de 5Mpx, Batería de 5000mAh, Memoria interna de 128GB.",
      image: "https://i.postimg.cc/h4QmMdRk/5.png",
  },
  {
    nombre: "Motorola Moto G42",
    id: 6,
    type: "Nacional",
    precio: 364000,
    stock: 7,
    descripcion: "Memoria RAM: 4 GB, Pantalla OLED de 6.4, 3 cámaras traseras de 50Mpx/8Mpx/2Mpx, Cámaras delanteras de 16Mpx, Procesador Snapdragon 680 4G Octa-Core de 2.4GHz con 4GB de RAM",
      image: "https://i.postimg.cc/NfzCrTY5/6.png",
  },
  {
    nombre: "TCL 40 SE",
    id: 7,
    type: "Nacional",
    precio: 170000,
    stock: 3,
    descripcion: "Pantalla IPS de 6.75, Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx, Cámara delantera de 8Mpx, Procesador MediaTek MT6765 Helio G37 Octa-Core de 2.3GHz con 6GB de RAM, Batería de 5010mAh, Memoria interna de 256GB.",
    image: "https://i.postimg.cc/cH0FNB75/7.png",
  },
  {
    nombre: "Noblex A50+ Dual SIM",
    id: 8,
    type: "Nacional",
    precio: 120000,
    stock: 3,
    descripcion: "Pantalla de 5, Cámara delantera de 5Mpx, Procesador Unisoc SC9832E Quad-Core de 1.4GHz con 2GB de RAM, Batería de 2050mAh, Memoria interna de 32GB.",
    image: "https://i.postimg.cc/wxW0SJ10/8.png",
  },
  
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);

      //reject
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((elem) => elem.type === categoryId));

      //reject
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(productId)
      const product = products.find((elem) => elem.id === parseInt(productId));
      resolve(product)
      //reject
    }, 1000);
  });
};