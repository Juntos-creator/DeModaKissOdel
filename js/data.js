// ============================================
// De Moda KissOdel — Datos de la Colección (Look 1, Look 2 & Look 3)
// ============================================

const COLLECTION_DATA = [
  {
    id: 1,
    number: "01",
    title: "Look 1 - Conjunto Estructural con Rosa",
    subtitle: "Alta Costura — Frente, Espalda e Ilustración",
    category: "TOPS & PANTS",
    image: "./MIS_DISENOS/LOOK1/LOOK1_Diseno_Frente_Con_Rosa_Fondo_Blanco.jpeg",
    secondaryImage: "./MIS_DISENOS/LOOK1/LOOK1_Diseno_Espalda_Fondo_Blanco.jpeg",
    description: "Conjunto de alta costura estructurado en tonos beige, con detalles de rosa esculpida y silueta estilizada.",
    
    illustrations: [
      "./MIS_DISENOS/LOOK1/look1_acuarela.jpeg",
      "./MIS_DISENOS/LOOK1/look1_lapiz.jpeg"
    ],

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
  },
  {
    id: 2,
    number: "02",
    title: "Look 2 - Vestido Velvet Burgundy & Mangas Organza",
    subtitle: "Alta Costura — Terciopelo Borgoña & Verde Olivo",
    category: "DRESSES",
    image: "./MIS_DISENOS/LOOK 2/LOOK2_Diseno_Frente_Ghost_Mannequin_Fondo_Blanco.jpg",
    secondaryImage: "./MIS_DISENOS/LOOK 2/LOOK2_Diseno_Espalda_Fondo_Blanco.jpg",
    description: "Vestido largo de alta costura en terciopelo elástico borgoña con abertura lateral profunda y mangas de cascada en organza cristal verde olivo.",
    
    illustrations: [
      "./MIS_DISENOS/LOOK 2/loo2_acuarela.jpeg",
      "./MIS_DISENOS/LOOK 2/LOOK2_Board_Completo_Textiles_Reales_FW26.jpg"
    ],

    materialsList: [
      {
        name: "Stretch Velvet Burgundy (90% Poly / 10% Spandex)",
        image: "./MIS_DISENOS/LOOK 2/LOOK2_Material_1_Stretch_Velvet_Burgundy_90Poly_10Spandex.jpg"
      },
      {
        name: "Crystal Organza Olive Green (100% Poly)",
        image: "./MIS_DISENOS/LOOK 2/LOOK2_Material_2_Crystal_Organza_Olive_Green_100Poly.jpg"
      }
    ],

    materials: ["Stretch Velvet Burgundy", "Crystal Organza Olive Green"],
    spec: {
      fabric: "Stretch Velvet 320GSM Burgundy #4B0082 / Crystal Organza Olive Green",
      lining: "Stretch Silk Habotai Burgundy",
      trims: "Invisible back zipper YKK, elastic neck casing",
      stitch: "Overlock 4-thread stretch, micro rolled hem on ruffles",
      finishing: "Tiered ruffle sleeve assembly, leg slit edge binding",
      measurements: "Bust 86cm / Waist 66cm / Length 155cm"
    }
  },
  {
    id: 3,
    number: "03",
    title: "Look 3 - Corset Estructural & Shorts Taupe",
    subtitle: "Alta Costura — Ponte di Roma, Organza Ivory & Power Mesh",
    category: "CORSET & SHORTS",
    image: "./MIS_DISENOS/LOOK 3/LOOK3_Diseno_Frente_Ghost_Mannequin_Fondo_Blanco.jpg",
    secondaryImage: "./MIS_DISENOS/LOOK 3/LOOK3_Diseno_Frente_Ghost_Mannequin_Fondo_Blanco.jpg",
    description: "Conjunto de corset esculpido y shorts en tono taupe con sobrefalda dramática en organza marfil y capas de malla power mesh.",
    
    illustrations: [
      "./MIS_DISENOS/LOOK 3/LOOK 3_ACUARELA.jpeg",
      "./MIS_DISENOS/LOOK 3/LOOK 3_LAPIZ.jpeg",
      "./MIS_DISENOS/LOOK 3/LOOK3_Board_Completo_Textiles_Reales_FW26.jpg"
    ],

    materialsList: [
      {
        name: "Ponte di Roma Taupe (92% Poly / 8% Spandex)",
        image: "./MIS_DISENOS/LOOK 3/LOOK3_Material_1_Ponte_di_Roma_Taupe_92Poly_8Spandex.jpg"
      },
      {
        name: "Crystal Organza Ivory (100% Poly 25GSM)",
        image: "./MIS_DISENOS/LOOK 3/LOOK3_Material_2_Crystal_Organza_Ivory_100Poly_25GSM.jpg"
      },
      {
        name: "Power Mesh Nude (80% Nylon / 20% Spandex)",
        image: "./MIS_DISENOS/LOOK 3/LOOK3_Material_3_Power_Mesh_Nude_80Nylon_20Spandex.jpg"
      }
    ],

    materials: ["Ponte di Roma Taupe", "Crystal Organza Ivory", "Power Mesh Nude"],
    spec: {
      fabric: "Ponte di Roma Taupe 300GSM / Crystal Organza Ivory 25GSM",
      lining: "Power Mesh Nude (80% Nylon / 20% Spandex)",
      trims: "Spiral steel boning, metallic gold eyelets & back lacing",
      stitch: "Coutil reinforced stitching, narrow rolled organza hem",
      finishing: "Sculpted ruffle peplum, edge-bound corset panels",
      measurements: "Bust 84cm / Waist 64cm / Short Length 38cm"
    }
  }
];