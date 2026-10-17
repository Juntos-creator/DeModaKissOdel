// ============================================
// De Moda KissOdel — EDITA SOLO ESTE ARCHIVO PARA AGREGAR/MODIFICAR DISEÑOS
// ============================================

const COLLECTION_DATA = [
  {
    id: 1,
    number: "01",
    title: "Asymmetrical Organza Blouse",
    subtitle: "Blouse — Gold Ruching Detail",
    category: "TOPS",
    image: "./MIS_DISENOS/LOOK 1/LOOK 1 DISE O.jpeg",
    description: "Asymmetrical organza blouse with gathered ruching and hand-embroidered gold thread. Transparent lace yoke with sculptural draping.",
    materials: ["Silk Organza", "Gold Thread", "Crepe de Chine"],
    spec: {
      fabric: "Silk Organza 100% — 18mm, off-white #fbf9f5",
      lining: "Crepe de Chine lining, nude",
      trims: "Gold metallic thread #d4af37, invisible zipper YKK",
      stitch: "French seam, rolled hem organza",
      finishing: "Hand-rolled edges, gold smocking",
      measurements: "Bust 88cm / Waist adjustable / Length 62cm asymmetric"
    }
  },
  {
    id: 2,
    number: "02",
    title: "Burgundy Plaid Cascade Skirt",
    subtitle: "Skirt — Plaid + Organza Train",
    category: "BOTTOMS",
    image: "./MIS_DISENOS/LOOK 2/LOOK 2 DISE O.jpeg",
    description: "Mini plaid skirt in burgundy/gold Scottish check with dramatic asymmetric organza cascade tail.",
    materials: ["Wool Plaid", "Silk Organza", "Gold Hardware"],
    spec: {
      fabric: "Wool blend plaid Burgundy/Gold 340gsm",
      lining: "Anti-static satin burgundy",
      trims: "Gold D-ring, organza ruffle 2.5m",
      stitch: "Flat-felled seam, blind hem",
      finishing: "Hand-pressed pleats",
      measurements: "Waist 68cm / Hip 92cm / Front 38cm / Cascade 110cm"
    }
  },
  {
    id: 3,
    number: "03",
    title: "Chocolate Suede Corset Set",
    subtitle: "Corset — Wine Lace & Wide Leg",
    category: "CORSET",
    image: "./MIS_DISENOS/LOOK 3/LOOK 3 DISE O.jpeg",
    description: "Chocolate suede corset with wine-red lace bust, paired with wide-leg trousers. Couture boning.",
    materials: ["Chocolate Suede", "Wine Lace", "Gold Boning"],
    spec: {
      fabric: "Suede Chocolate #3d2314 / Lace Wine burgundy",
      lining: "Cotton coutil corset lining",
      trims: "Spiral steel boning, gold eyelets",
      stitch: "Lapped seam suede, zig-zag lace appliqué",
      finishing: "Edge-coated suede, hand lace",
      measurements: "Bust 84cm / Waist 66cm / Trouser inseam 82cm"
    }
  },
  {
    id: 4,
    number: "04",
    title: "Sculptural Gold Thread Gown",
    subtitle: "Evening Gown — Asymmetrical Draping",
    category: "DRESSES",
    image: "./MIS_DISENOS/LOOK 4/LOOK 4 DISE O.jpeg",
    description: "Floor-length evening gown featuring hand-embroidered gold motifs and structural asymmetric shoulder drape.",
    materials: ["Silk Crepe", "Gold Thread Embroidery", "Tulle"],
    spec: {
      fabric: "Heavy Silk Crepe Ivory / Sheer Tulle",
      lining: "Silk Habotai full lining",
      trims: "Artisanal gold metallic thread, side concealed zip",
      stitch: "Micro-zigzag embroidery stitch, French seams",
      finishing: "Hand-finished neckline and hem",
      measurements: "Bust 86cm / Waist 68cm / Length 155cm"
    }
  },
  {
    id: 5,
    number: "05",
    title: "Baroque Lace Structured Bodice",
    subtitle: "Top — Couture Boning & Tulle",
    category: "TOPS",
    image: "./MIS_DISENOS/LOOK 5/LOOK 5 DISE O.jpeg",
    description: "Intricate baroque lace top reinforced with architectural boning and semi-sheer tulle sleeve accents.",
    materials: ["Chantilly Lace", "Nude Mesh", "Gold Accents"],
    spec: {
      fabric: "Black & Gold Chantilly Lace on nude base",
      lining: "Soft nude stretch mesh",
      trims: "Flexible boning, metallic covered buttons",
      stitch: "Overlock seam, appliqué embroidery stitch",
      finishing: "Scalloped lace hem detailing",
      measurements: "Bust 88cm / Waist 66cm / Length 48cm"
    }
  },
  {
    id: 6,
    number: "06",
    title: "Burgundy Tailored Trench Cape",
    subtitle: "Outerwear — Asymmetric Silhouette",
    category: "OUTERWEAR",
    image: "./MIS_DISENOS/LOOK 6/LOOK 6 DISE O.jpeg",
    description: "Couture trench cape in deep burgundy wool with dramatic draped shoulder lapels and gold hardware closures.",
    materials: ["Wool Cashmere Blend", "Gold Buckles", "Satin"],
    spec: {
      fabric: "Burgundy Wool Cashmere 420gsm",
      lining: "Gold Jacquard logo lining",
      trims: "Custom gold metal buckles & eyelets",
      stitch: "Tailored welt stitching, bound seams",
      finishing: "Hand-stitched lapels and buttonholes",
      measurements: "Shoulder 40cm / Full Length 115cm"
    }
  },
  {
    id: 7,
    number: "07",
    title: "Organza Tiered Ruffle Dress",
    subtitle: "Cocktail Dress — Layered Volume",
    category: "DRESSES",
    image: "./MIS_DISENOS/LOOK 7/LOOK 7 DISE O.jpeg",
    description: "Voluminous cocktail dress with cascading organza ruffles and an internal structured corset bodice.",
    materials: ["Silk Organza", "Satin Back Crepe", "Gold Wire"],
    spec: {
      fabric: "Silk Organza Layers / Satin Back Crepe base",
      lining: "Cotton Coutil inner bodice",
      trims: "Horsehair braid in hem for volume, back zip",
      stitch: "Rolled narrow hem on all ruffles",
      finishing: "Hand-tacked ruffle placement",
      measurements: "Bust 84cm / Waist 65cm / Length 90cm"
    }
  },
  {
    id: 8,
    number: "08",
    title: "Asymmetric Pleated Trouser Set",
    subtitle: "Two-Piece — High Waist & Drape",
    category: "SUITS",
    image: "./MIS_DISENOS/LOOK 8/LOOK 8 DISE O.jpeg",
    description: "Modern two-piece tailored ensemble featuring high-waisted pleated trousers and a matching draped top.",
    materials: ["Stretch Wool Crepe", "Silk Satin"],
    spec: {
      fabric: "Stretch Wool Crepe Beige / Silk Satin accents",
      lining: "Viscose lining in trousers",
      trims: "Concealed front zip, horn buttons",
      stitch: "Blind hem, pressed pleat retention stitch",
      finishing: "Tailored waistband with inner piping",
      measurements: "Waist 68cm / Hip 94cm / Inseam 85cm"
    }
  },
  {
    id: 9,
    number: "09",
    title: "Artisanal Embroidered Mini Dress",
    subtitle: "Mini Dress — Gold Leaf Appliqué",
    category: "DRESSES",
    image: "./MIS_DISENOS/LOOK 9/LOOK 9 DISE O.jpeg",
    description: "Statement mini dress covered in hand-placed gold leaf embroidery and structured geometric shoulders.",
    materials: ["Velvet", "Gold Metallic Embroidery", "Silk"],
    spec: {
      fabric: "Deep Chocolate Velvet / Metallic Embroidery",
      lining: "Stretch Silk Habotai",
      trims: "Gold metallic zip, shoulder pads",
      stitch: "Couching embroidery stitch, invisible hem",
      finishing: "Hand-applied bead and thread work",
      measurements: "Bust 86cm / Waist 67cm / Length 82cm"
    }
  },
  {
    id: 10,
    number: "10",
    title: "Sheer Lace & Organza Jumpsuit",
    subtitle: "Jumpsuit — Sculptural Overskirt",
    category: "JUMPSUITS",
    image: "./MIS_DISENOS/LOOK 10/LOOK 10 DISE O.jpeg",
    description: "Avant-garde fitted jumpsuit in sheer embroidered lace paired with a detachable asymmetrical organza overskirt.",
    materials: ["Embroidered Tulle", "Crepe", "Organza"],
    spec: {
      fabric: "Embroidered Sheer Tulle / Organza overskirt",
      lining: "Nude bodystocking inner layer",
      trims: "Detachable gold metal belt mechanism",
      stitch: "Stretch overcast stitching, narrow roll hem",
      finishing: "Seamless edge bonding on mesh",
      measurements: "Bust 88cm / Waist 68cm / Inseam 84cm"
    }
  },
  {
    id: 11,
    number: "11",
    title: "Couture Gold-Thread Statement Coat",
    subtitle: "Evening Coat — Oversized Lapel",
    category: "OUTERWEAR",
    image: "./MIS_DISENOS/LOOK 11/LOOK 11 DISE O.jpeg",
    description: "Dramatic full-length evening coat featuring hand-embroidered gold filigree and dramatic oversized lapels.",
    materials: ["Heavy Brocade", "Gold Filigree Thread", "Silk Satin"],
    spec: {
      fabric: "Gold Brocade / Heavy Silk Satin",
      lining: "Full Silk Satin inner lining in Burgundy",
      trims: "Handmade frog closures with gold thread",
      stitch: "Heavy-duty tailored stitching, bound seams",
      finishing: "Hand-stitched hem and lapel canvas",
      measurements: "Shoulder 42cm / Chest 92cm / Full Length 140cm"
    }
  }
];