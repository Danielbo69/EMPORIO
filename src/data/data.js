import ImgCenter from "../assets/img/Yellow.jpg";
import carouselImg from "../assets/img/carousel.jpg"
import carouselImg1 from "../assets/img/carousel1.jpg"
import carouselImg2 from "../assets/img/carousel3.jpg"
import carouselImg3 from "../assets/img/carousel4.jpg"
import carouselImg4 from "../assets/img/carousel0.jpg"

export const infoEmpresa = [
  {
    description:
      "Emporio, un laboratorio óptico de destacado, ha experimentado un impresionante crecimiento a lo largo de los años, posicionándose como un referente en su industria. Su firme compromiso con la sostenibilidad y la calidad de sus productos, respaldado por la tecnología free form, lo ha convertido en un referente destacado en el sector. El nivel profesional de sus colaboradores es excepcional, respaldando la reputación de Emporio como un lugar donde la innovación y la excelencia en soluciones ópticas se combinan para satisfacer las necesidades más exigentes de los clientes.",
    vision:
      "“Ser el laboratorio óptico líder en innovación y tecnología, comprometido con la responsabilidad en la satisfacción de las necesidades visuales de nuestros clientes, aportando al desarrollo de soluciones ópticas de vanguardia.”",
    mision:
      "“Nuestra misión es brindar servicios ópticos de alta calidad mediante tecnología avanzada, con un compromiso sólido hacia la responsabilidad social y el desarrollo tecnológico en pro del bienestar visual de nuestros clientes y el entorno.”",
    ubication: [
      {
        title: "MONEDA 772",
        description: "Galerias nacionales local 315 A",
      },
      {
        title: "MACIVER 180",
        description: "Piso 3 oficina 103",
      },
      {
        title: "PUENTE ALTO",
        description: "pendiente información",
      },
    ],
    imgCentral: ImgCenter,
  },
];

export const services = [
  // {
  //   id: 0,
  //   title: "LABORATORIO OPTICO",
  //   description: "",
  // },
  {
    id: 1,
    title: "MONTAJE",
    description:
      "Para todo tipo de monturas, con equipos 100% automatizados lo cual proporciona el mejor acabado y ajuste de los cristales en la montura seleccionada por el paciente. Todo el proceso de montaje es verificado de forma permanente por nuestros ópticos, así garantizamos la calidad del producto. Además, podemos reducir el tiempo de espera para entregar los lentes acabados y la reparación de cristales o monturas.",
  },
  {
    id: 2,
    title: "STOCK ",
    description: "",
  },
  {
    id: 3,
    title: "CLARITY VISION",
    description:
      "Recubrimientos de lentes: aunque son prácticamente invisibles, hacen de un par de lentes una herramienta eficaz. Tanto si se trata de una dura capa para proteger la lente de arañazos o un recubrimiento antideslumbrante especial que reduce los reflejos molestos, estos recubrimientos pueden mejorar mucho su confort visual, hacer que la limpieza de los lentes sea más fácil e incluso garantizar que sus gafas duren más tiempo. En particular, los lentes de plástico con un recubrimiento para protección de arañazos puede hacer que los lentes sean mucho más resistentes a este tipo de daños. En la actualidad, existen tratamientos modernos para los lentes que incluyen un filtro para la luz azul UV y que puede ayudarle a proteger sus ojos en cualquier situación, p. ej. cuando pasa muchas horas frente a la pantalla del computador.",
  },
  {
    id: 4,
    title: "TEÑIDO SOLIDO O DEGRADE",
    description:
      "Este tratamiento consiste en el teñido de las lentes que pueden ser orgánicas y/o de policarbonato. Dependiendo del material elegido existe a su disposición una gran variedad de colores y diferentes intensidades.",
  },
  {
    id: 5,
    title: "PRISMA",
    description:
      "Un prisma en los lentes oftálmicos es un dispositivo óptico que desvía la luz en diferentes direcciones. Se utiliza en la corrección de problemas de visión relacionados con la desviación ocular, como el estrabismo. Los prismas se incorporan en los lentes oftálmicos para ayudar a alinear los ojos y mejorar la visión binocular.",
  },
];

export const glasses = [
  {
    id: '0',
    title: "MONOFOCALES",
    image: carouselImg,
    description: 'Son lentes que disponen de la misma graduación en la totalidad de su superficie. Estos lentes permiten la corrección de cualquier clase de error refractivo, como la presbicia, el astigmatismo, la hipermetropía o la miopía.',
    subData: [
      {
        title: "VISION PRIME 8K",
        description:
          "Únicas con tecnología 8K Surface Definition que brinda una mayor percepción al detalle y nitidez en cualquier dirección de mirada.Desarrolladas con tratamientos de protección para conservar su salud visual a través del tiempo.",
          image: ''
      },
      {
        title: "RELAX",
        description:
          "El mejor aliado para estudiantes o personas que desarrollan actividades visuales intensivas y sufren de fatiga visual.RLX Technology provee un plus de potencia para obtener relajación y comfort visual.",
          image: ''
      },
      {
        title: "SMALL FIT",
        description:
          "Estética e innovación son las cualidades requeridas para aquellos con medianas y altas prescripciones.Blending Technology brinda una considerable reducción de espesores y peso del lente para obtener resultados estéticos insuperables.",
          image: ''
      },
    ],
  },
  {
    id: '1',
    title: "BIFOCALES",
    image: carouselImg1,
    description: 'Son un tipo de lente que se encarga de corregir los problemas relacionados con dos zonas de visión, un lente que nació en sus inicios para poder ayudar a corregir los problemas relacionados con la presbicia o vista cansada',
    subData: [
      {
        title: "INVISIBLE",
        description:
          "Especialmente ideados para usuarios adeptos a diseños bifocales. Posee una mejor estética por la invisibilidad de su segmento para leer de cerca ofreciendo la calidad y la precisión. ",
          image: ''
      },
      {
        title: "SOFT/LINE",
        description:
          "Lente desarrollado para quienes buscan un bifocal con mayor estética para mejorar la invisibilidad del segmento para el área de lectura",
          image: ''
      },
    ],
  },
  {
    id: '2',
    title: "OCUPACIONALES",
    image: carouselImg2,
    description: 'Cubren la visión a una distancia corta e intermedia y se adaptan a una demanda visual específica, muy común en la mayoría de los trabajos actuales en los que se exige un gran uso de dispositivos digitales.',
    subData: [
      {
        title: "LINEA DAILY",
        description:
          "Lente desarrollado para quienes buscan un bifocal con mayor estética para mejorar la invisibilidad del segmento para el área de lectura.",
          image: ''
      },
    ],
  },
  {
    id: '3',
    title: "PROGRESIVOS",
    image: carouselImg3,
    description: 'Son un tipo de lente que tienen un incremento continuo en el aumento desde la parte superior hasta la parte inferior del lente. Están diseñadas para corregir la visión tanto en lejos, como en distancias intermedia y cercana, todo en una misma lente.',
    subData: [
      // {
      //   title: "DIGITAL/IN",
      //   description:
      //     "Ideales para quienes buscan mejorar la performance y la estética de sus anteriores bifocales.La tecnología Soft Molding suaviza la transición entre todas las áreas de enfoque para brindarle una sensación de lectura placentera y sin limitaciones.",
      //     image: ''
      // },
      {
        title: "DIGITAL/PRO",
        description:
          "Recomendadas para quienes son usuarios de multifocales y buscan llevar su experiencia visual a otro nivel.Balanced process permite un justo equilibrio entre las áreas de enfoque. Provee campos de visión cercana que se ajustan a cualquier tipo de actividad por desarrollar.",
          image: ''
      },
      {
        title: "MID BALANCE",
        description:
          "Un lente premium para quienes solución innovadora para obtener la performance al ver de lejos y de limitaciones CDT & WearFIt las cualidades ópticas particularidades del rostro y la uso de sus lentes.",
          image: ''
      },
      {
        title: "EMPORIUM",
        description:
          "Adaptados a las exigencias de la era digital. Brindan una experiencia visual incomparable en el uso intensivo de dispositivos electrónicos.Adaptative Focus mejora los campos visuales de cerca e intermedia facilitando la transición entre las áreas de enfoque mejorando la ergonomía postural.",
          image: ''
      },
    ],
  },
  {
    id: '4',
    title: "ESPECIALIDADES",
    image: carouselImg4,
    description: 'Especialidades que tenemos directamentes desde Emporio para ti.',
    subData: [
      {
        title: "DRIVE",
        description: "Adaptado para satisfacer las necesidades de aquellos que pasan la mayor parte del tiempo en la conducción automovilística. Incorpora Free Periphery Process permitiendo lentes libres de astigmatismo periférico para lograr una conducción más confortable y segura",
        image: ''
      },
      {
        title: "MONOVISION",
        description: "Progresivo simétrico y con geometría especular diseñado para usuarios que no tienen convergencia o han sufrido la pérdida irreversible de visión en uno de sus ojos. ",
        image: ''
      },
    ],
  },
];

export const tecnology = [
  {
    id: '0',
    title: "CONTINUUM DESIGN TECHNOLOGY",
    description:
      "CDT es una innovadora tecnología de diseño a partir de un moderno modelo matemático continuo que permite mejorar la fabricación de lentes oftálmicas. CONTINUUM DESIGN TECHNOLOGY permite tener el control de la óptica sobre toda la superficie del lente y enviarle al generador matrices de ságitas más grandes. Esto se traduce en lentes con mayores resoluciones ópticas para optimizar los campos.",
  },
  {
    id: '1',
    title: "8K DEFINITION SURFACE",
    description:
      "La tecnología Continuum Design permite producir lentes con hasta 8 veces más definición óptica que otras de tecnología Freeform.Al igual que los pixeles en pantallas digitales U-HD, una mayor resolución en la superficie oftálmica hace que la lente producida tenga más definición óptica y en consecuencia beneficios reales en cuanto amplitud de campo y resolución de imágenes.",
  },
  {
    id: '2',
    title: "ADAPTATIVE FOCUS TECHNOLOGY",
    description:
      "Con el incremento exponencial del uso de medios digitales tales como smartphones, tablets, navegadores, etc se comenzaron a adoptar hábitos de enfoque que desafían la adaptabilidad de nuestros ojos. A raíz de esto desarrollamos la tecnología Adaptative Focus, la cual permite optimizar el campo visual de intermedia y cerca, áreas más utilizadas para la lectura de medios digitales e impresos, para lograr dejar atrás cualquier problemática inherente a los nuevos hábitos de lectura. ",
  },
  {
    id: '3',
    title: "WEAR FIT",
    description:
      "Desarrollamos un sistema basado en algoritmos matemáticos que se aplican en el proceso de diseño y producción de lentes que consiste en la inserción minuciosa de todos los datos característicos de cada uno de los usuarios tales como distancias interpupilares, ángulo panorámico, distancia al vértice y ángulo pantoscópico que dan como resultado de la ecuación, lentes personalizadas y únicas que se ajustan al usuario.",
  },
  {
    id: '4',
    title: "AUTOMATIC CORRIDOR",
    description:
      "Al momento de elegir un armazón, por ejemplo, debemos tener en cuenta sus características intrínsecas y su interacción con las lentes prescriptas para la presbicia. Fue así como con el afán de reducir cualquier error, creamos un algoritmo matemático capaz de establecer el corredor ideal considerando prescripción, adición, alturas, ángulo pantoscópico y distancia al vértice para lograr maximizar el confort del usuario y la versatilidad en todas las áreas de visión.",
  },
  {
    id: '5',
    title: "SMART FIT",
    description:
      'En la actualidad, el cálculo de optimización de espesores está supeditado al diámetro de la lente o a las medidas del armazón conjuntamente a los datos del usuario. SMART FIT, en cambio, incorpora cálculos avanzados que se nutren del "trace format" del marco. Es decir, toma en cuenta la forma geométrica de la montura (todos los puntos que forman la circunferencia -TRCFMT) para que al culminar el tallado, se logre una reducción de espesores de hasta un 40%.',
  },
  {
    id: '6',
    title: "RAY TRACING",
    description:
      "La tecnología Ray Tracing (o trazado de rayos) es el método standard utilizado para el diseño óptico en general y, ya hace algunos años, para el diseño de lentes asféricas y progresivas en particular. El método consiste en hacer incidir virtualmente un conjunto de rayos sobre la superficie de la lente que se desea diseñar, optimizando su forma según las propiedades ópticas requeridas.",
  },
];

export const treatments = [
  {
    title: "PROTECCIÓN U.V.",
    description:
      "Las lentes Novar protegen sus ojos de los nocivos rayos ultravioletas que emite el sol.",
  },
  {
    title: "PROTECCIÓN BLUE TECH",
    description:
      "Adicione la exclusiva “dual blue cut protection”, que inhibe la nociva luz azul-violeta que puede provocar DME y daño prolongado a la retina.",
  },
  {
    title: "TRANSPARENCIA",
    description:
      "Con su tratamiento anti-reflejo DURAX PROTECT en cámara de alto vacío, las lentes Novar son 100% transparentes.",
  },
  {
    title: "ANTI-RAYAS",
    description:
      "Máxima protección anti-rayas por su exclusivo tratamiento PETRA. Sus lentes tendrán una mejor calidad de visión y mayor durabilidad por más tiempo",
  },
  {
    title: "REPELEN LA SUCIEDAD, EL POLVO Y EL AGUA",
    description:
      "Contienen mejores propiedades hidrofóbicas, oleofóbicas y antiestáticas para tenerlas siempre más limpias.",
  },
  {
    title: "FOTOSENSIBLE",
    description:
      "Tecnología adicional para que sus lentes se adapten instantáneamente a los distintos ambientes por cambios de luz. Claras y transparentes en ambientes internos y oscuras ante la exposición del sol",
  },
  {
    title: "ANTI-DESLUMBRANTES",
    description:
      "El polarizado Adventra atenúa los reflejos de aquello que pueda deslumbrar al ojo provocado por reflejantes. Ideal para actividades al aire libre.",
  },
  {
    title: "ULTRADELGADOS",
    description:
      "Disponibles en materiales delgados y ultradelgados para reducir los espesores de borde hasta 40%",
  },
];
