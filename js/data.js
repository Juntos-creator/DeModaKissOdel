// ============================================
// De Moda KissOdel — Datos estructurados del Look 1
// ============================================

const COLLECTION_DATA = [
  {
    id: 1,
    number: "01",
    title: "Look 1 - Conjunto Estructural con Rosa",
    subtitle: "Alta Costura — Frente, Espalda e Ilustración",
    category: "TOPS & PANTS",
    // Imagen principal que se ve en la tarjeta de colecciones
    image: "./MIS_DISENOS/LOOK1/LOOK1_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpeg",
    // Imágenes secundarias para la vista de colección o detalles (Frente y Espalda)
    secondaryImage: "./MIS_DISENOS/LOOK1/LOOK1_Diseno_Espalda_Fondo_Blanco.jpeg",
    description: "Conjunto de alta costura estructurado en tonos beige, con detalles de rosa esculpida y silueta estilizada.",
    
    // Imágenes para la sección de ilustración / bocetos
    illustrations: [
      "./MIS_DISENOS/LOOK1/look1_acuarela.jpeg",
      "./MIS_DISENOS/LOOK1/look1_lapiz.jpeg"
    ],

    // Materiales detallados con sus respectivas imágenes
    materialsList: [
      {
        name: "Stretch Wool Crepe Beige",
        image: "./MIS_DISENOS/LOOK1/LOOK1_Material_1_Stretch_Wool_Crepe_Beige_Main.jpeg"
      },
      {
        name: "Bonded Faux Suede Dark Brown",
        image: "./MIS_DISENOS/LOOK1/LOOK1_Material_2_Bonded_Faux_Suede_Dark_Brown_Paneles.jpeg"
      },
      {
        name: "Silk Taffeta Organza Beige Rose",
        image: "./MIS_DISENOS/LOOK1/LOOK1_Material_3_Silk_Taffeta_Organza_Beige_Rose.jpeg"
      },
      {
        name: "Power Mesh Nude Lining",
        image: "./MIS_DISENOS/LOOK1/LOOK1_Material_4_Power_Mesh_Nude_Lining.jpeg"
      }
    ],

    materials: ["Stretch Wool Crepe", "Faux Suede", "Silk Taffeta", "Power Mesh"],
    spec: {
      fabric: "Stretch Wool Crepe 100% / Bonded Faux Suede",
      lining: "Power Mesh Nude Lining",
      trims: "Gold metallic structured hardware & hidden zip",
      stitch: "French seam, tailored construction",
      finishing: "Hand-rolled edges, sculpted textile rose",
      measurements: "Bust 88cm / Waist 68cm / Inseam 85cm"
    }
  }
  // Aquí puedes seguir agregando los siguientes looks (Look 2, Look 3, etc.)
];