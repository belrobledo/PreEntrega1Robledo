import Card from "../Card/Card";
import "./ItemListContainer.css";

export default function ItemListContainer(props){
    const productList = [{
      "id": 1,
      "name": "Mouse de juego Logitech G Series Lightsync G203 blanco",
      "price": 6999,
      "category": "Mouses y Pads",
      "stock": 24,
      "imgurl": "/imgs/products/product1.webp",
      "detail": "Blanco - Utiliza cable - Resolucion 8000dpi"
    }, {
      "id": 2,
      "name": "Mouse de juego Logitech G Series Lightsync G203 negro",
      "price": 6999,
      "category": "Mouses y Pads",
      "stock": 183,
      "imgurl": "/imgs/products/product2.webp",
      "detail": "Blanco - Utiliza cable - Resolucion 8000dpi"
    }, {
      "id": 3,
      "name": "Teclado gamer inalámbrico Redragon Deimos K599-KRS QWERTY Outemu Red - Lineal inglés UK color negro con luz RGB",
      "price": 14599,
      "category": "Teclados",
      "stock": 4,
      "imgurl": "/imgs/products/product3.webp",
      "detail": "Negro - Inalambrico - QWERTY"
    }, {
      "id": 4,
      "name": "Mouse inalámbrico Logitech POP daydream",
      "price": 10499,
      "category": "Mouses y Pads",
      "stock": 5,
      "imgurl": "/imgs/products/product4.webp",
      "detail": "Es inalámbrico (Bluetooth) - Tipo de alimentación inalámbrica: pilas - Resolución de 4000dpi"
    }, {
      "id": 5,
      "name": "Teclado bluetooth Redragon Fizz Pro K616-RGB QWERTY Red inglés US color blanco y rosa con luz RGB",
      "price": 13199,
      "category": "Teclados",
      "stock": 8,
      "imgurl": "/imgs/products/product5.webp",
      "detail": "Blanco y rosa - Mecanico - Resistente a salpicaduras"
    }, {
      "id": 6,
      "name": "Mouse Pad gamer Razer Gigantus V2 de tela y goma l 400mm x 450mm x 3mm negro",
      "price": 6799,
      "category": "Mouses y Pads",
      "stock": 55,
      "imgurl": "/imgs/products/product6.webp",
      "detail": "Tamaño del mouse pad: L - Color: negro - Es antideslizante - Tiene 450mm de largo y su ancho es de 400mm - Su grosor es de 3mm."
    }, {
      "id": 7,
      "name": "Mouse Pad Logitech M Rosa Antideslizante Poliéster Reciclado",
      "price": 1999,
      "category": "Mouses y Pads",
      "stock": 27,
      "imgurl": "/imgs/products/product7.webp",
      "detail": "Tamaño del mouse pad: M - Color: rosa pálido - Es antideslizante - Tiene 230mm de largo y su ancho es de 200mm - Su grosor es de 2mm."
    }, {
      "id": 8,
      "name": "Mouse Pad Logitech Negro 200x230mm",
      "price": 1999,
      "category": "Mouses y Pads",
      "stock": 13,
      "imgurl": "/imgs/products/product8.webp",
      "detail": "Tamaño del mouse pad: M - Color: negro - Es antideslizante - Tiene 230mm de largo y su ancho es de 200mm - Su grosor es de 2mm."
    }, {
      "id": 9,
      "name": "Auriculares gamer inalámbricos HyperX Cloud Flight negro con luz rojo LED",
      "price": 34999,
      "category": "Auriculares",
      "stock": 57,
      "imgurl": "/imgs/products/product9.webp",
      "detail": "Alcance inalámbrico de 20 m - La batería dura 30 h - Con cancelación de ruido - Micrófono flexible incorporado."
    }, {
      "id": 10,
      "name": "Auriculares gamer inalámbricos Logitech G Series G435 negro y amarillo fluorescente",
      "price": 24199,
      "category": "Auriculares",
      "stock": 12,
      "imgurl": "/imgs/products/product10.webp",
      "detail": "Alcance inalámbrico de 10 m - La batería dura 18 h - Modo manos libres incluido - Con micrófono incorporado."
    }, {
      "id": 11,
      "name": "Auriculares gamer inalámbricos Logitech G Series G435 blanco crudo y lila",
      "price": 21999,
      "category": "Auriculares",
      "stock": 4,
      "imgurl": "/imgs/products/product11.webp",
      "detail": "Alcance inalámbrico de 10 m - La batería dura 18 h - Modo manos libres incluido - Con micrófono incorporado."
    }, {
      "id": 12,
      "name": "Micrófono HyperX SoloCast condensador cardioide blanco",
      "price": 14499,
      "category": "Microfonos",
      "stock": 3,
      "imgurl": "/imgs/products/product12.webp",
      "detail": "Recomendado para streaming, juegos, grabaciones - Formato: de mesa - Dispositivos compatibles: playstation, mac, pc - Conector/es de salida: usb-c."
    }, {
      "id": 13,
      "name": "Mouse de juego inalámbrico Logitech G Series Lightspeed G305 white",
      "price": 11900,
      "category": "Mouses y Pads",
      "stock": 13,
      "imgurl": "/imgs/products/product13.webp",
      "detail": "Es inalámbrico - Conectividad: receptor usb - Tipo de alimentación inalámbrica: pilas - Con sensor óptico - Resolución de 12000dpi."
    }, {
      "id": 14,
      "name": "Micrófono Razer Seiren Mini condensador supercardioide negro clásico",
      "price": 22500,
      "category": "Microfonos",
      "stock": 5,
      "imgurl": "/imgs/products/product14.webp",
      "detail": "Recomendado para streaming, grabaciones, transmisión, videollamadas, voces - Formato: de mesa - Dispositivos compatibles: pc - Conector/es de salida: usb."
    }, {
      "id": 15,
      "name": "Micrófono Razer Seiren Mini condensador supercardioide rosa cuarzo",
      "price": 22500,
      "category": "Microfonos",
      "stock": 7,
      "imgurl": "/imgs/products/product15.webp",
      "detail": "Recomendado para streaming, grabaciones, transmisión, videollamadas, voces - Formato: de mesa - Dispositivos compatibles: pc - Conector/es de salida: usb."
    }, {
      "id": 16,
      "name": "Auriculares gamer Corsair HS35 Stereo red",
      "price": 14999,
      "category": "Auriculares",
      "stock": 14,
      "imgurl": "/imgs/products/product16.webp",
      "detail": "Con cancelación de ruido - Micrófono flexible incorporado - El largo del cable es de 1.1 m."
    }, {
      "id": 17,
      "name": "Auriculares Gamer Redragon H260 Hylas Rosa Con Luz Led",
      "price": 6899,
      "category": "Auriculares",
      "stock": 8,
      "imgurl": "/imgs/products/product17.webp",
      "detail": "Con micrófono incorporado - El largo del cable es de 2 m - Sonido superior y sin límites."
    }, {
      "id": 18,
      "name": "Mouse de juego inalámbrico Logitech G Series Lightspeed G305 black",
      "price": 12499,
      "category": "Mouses y Pads",
      "stock": 20,
      "imgurl": "/imgs/products/product18.webp",
      "detail": "Es inalámbrico - Conectividad: receptor usb - Tipo de alimentación inalámbrica: pilas - Con sensor óptico - Resolución de 12000dpi."
    }, {
      "id": 19,
      "name": "Mouse de juego Redragon Storm Elite M988 black",
      "price": 8149,
      "category": "Mouses y Pads",
      "stock": 4,
      "imgurl": "/imgs/products/product19.webp",
      "detail": "Conectividad: cable - Posee rueda de desplazamiento - Con luces para mejorar la experiencia de uso - Resolución de 16000dpi."
    }, {
      "id": 20,
      "name": "Mouse Gamer Razer Deathadder V2 Lite",
      "price": 8100,
      "category": "Mouses y Pads",
      "stock": 14,
      "imgurl": "/imgs/products/product20.webp",
      "detail": "Tipo de mouse: De juego - Tipo de sensor: Óptico - Resolución del sensor: 8500 dpi"
    }, {
      "id": 21,
      "name": "Teclado gamer Razer Huntsman V2 Tenkeyless QWERTY Clicky Optical Purple inglés US color negro con luz RGB",
      "price": 50799,
      "category": "Teclados",
      "stock": 4,
      "imgurl": "/imgs/products/product21.webp",
      "detail": "Tiene reposa muñeca - Función antighosting incorporada - Tipo de teclado: opto-mecánico - Medidas: 140mm de ancho, 362mm de alto y 37mm de profundidad."
    }, {
      "id": 22,
      "name": "Teclado gamer Razer Huntsman Mini QWERTY Razer Purple inglés US color mercury con luz RGB",
      "price": 40900,
      "category": "Teclados",
      "stock": 8,
      "imgurl": "/imgs/products/product22.webp",
      "detail": "Resiste a salpicaduras - Función antighosting incorporada - Tipo de teclado: opto-mecánico - Tecla cilíndrica."
    }, {
      "id": 23,
      "name": "Mouse Pad gamer Corsair MM350 de tela y goma xl extended 400mm x 930mm x 5mm gray",
      "price": 14885,
      "category": "Mouses y Pads",
      "stock": 3,
      "imgurl": "/imgs/products/product23.webp",
      "detail": "Tamaño del mouse pad: XL Extended - Color: gray - Es antideslizante - Tiene 930mm de largo y su ancho es de 400mm - Su grosor es de 5mm."
    }, {
      "id": 24,
      "name": "Mousepad Gamer Razer Pro Glide Xxl 940x410mm Antideslizante",
      "price": 12999,
      "category": "Mouses y Pads",
      "stock": 3,
      "imgurl": "/imgs/products/product24.webp",
      "detail": "Tamaño del mouse pad: XXL - Color: gris - Es antideslizante - Tiene 410mm de largo y su ancho es de 940mm."
    }, {
      "id": 25,
      "name": "Microfono Hyperx Quadcast S Rgb Condenser Pc Ps4 Ps5 Mac",
      "price": 55999,
      "category": "Microfonos",
      "stock": 6,
      "imgurl": "/imgs/products/product25.webp",
      "detail": "Tipos de micrófono: Condensador - Patrones polares: Omnidireccional,Estéreo,Bidireccional,Cardioide - Es inalámbrico: No"
    }, {
      "id": 26,
      "name": "Microfono Usb Hyperx Solocast Streaming Pc Ps4 Mac Gaming",
      "price": 16499,
      "category": "Microfonos",
      "stock": 4,
      "imgurl": "/imgs/products/product26.webp",
      "detail": "Tipos de micrófono: Condensador - Patrones polares: Cardioide - Es inalámbrico: No"
    }, {
      "id": 27,
      "name": "Teclado gamer HyperX Alloy Origins 60 QWERTY HyperX Lineal Red inglés US color negro con luz RGB",
      "price": 23999,
      "category": "Teclados",
      "stock": 6,
      "imgurl": "/imgs/products/product27.webp",
      "detail": "Consolas compatibles: ps4, ps5, xbox series xis y xbox one - Función antighosting incorporada - Tipo de teclado: mecánico - Medidas: 296mm de ancho, 105.5mm de alto y 36.9mm de profundidad."
    }, {
      "id": 28,
      "name": "Razer Ornata V3 X Teclado Gamer Meca-membrana Rgb",
      "price": 13599,
      "category": "Teclados",
      "stock": 12,
      "imgurl": "/imgs/products/product28.webp",
      "detail": "Ergonómico y apto para diversos usos - Tipo de teclado: semi-mecánico."
    }, {
      "id": 29,
      "name": "Mouse Pad gamer Logitech G640 Serie G de tela Cloud 9 l 400mm x 460mm x 3mm negro/azul",
      "price": 7899,
      "category": "Mouses y Pads",
      "stock": 3,
      "imgurl": "/imgs/products/product29.webp",
      "detail": "Tamaño del mouse pad: L - Color: negro y azul - Es antideslizante - Tiene 460mm de largo y su ancho es de 400mm - Su grosor es de 3mm."
    }, {
      "id": 30,
      "name": "Auricular Gamer Razer Opus X Bluetooth Wireless Mercury",
      "price": 33999,
      "category": "Auriculares",
      "stock": 7,
      "imgurl": "/imgs/products/product30.webp",
      "detail": "Es inalámbrico: Sí - Duración de la batería: 25 h - Con cancelación de ruido: Sí - Con micrófono: Sí."
    }]

    return (
        <div className="item-list-container">
            <h1>{props.greeting}</h1>
            <div>
              {productList.map((product) => <Card key={product.id} product={product}/>)}
            </div>
        </div>
    );
}