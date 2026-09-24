// Image rights checked 2026-09-24. See content/research/arita-images.md.
const met = { credit: "The Metropolitan Museum of Art", sourceLabel: "The Met", license: "CC0 1.0" };
const commons = { credit: "Daderot", sourceLabel: "Wikimedia Commons", license: "CC0 1.0" };

export const aritaPhotos = {
  earlyImari: {
    ...met, src: "/images/arita/early-imari.jpg", width: 4000, height: 3001,
    alt: "Early Imari dish with a single figure loosely painted in cobalt blue on a largely undecorated white surface.",
    caption: "Small dish with a Chinese male figure, ca. 1620–30s. The Metropolitan Museum of Art.",
    source: "https://www.metmuseum.org/art/collection/search/50322",
  },
  sometsuke: {
    ...met, src: "/images/arita/sometsuke.jpg", width: 1440, height: 1498,
    alt: "Blue-and-white deep dish painted with birds, flowers, and insects, with fine cobalt outlines and washes.",
    caption: "Deep dish with birds, flowers, and insects, first half of the 18th century; catalogued as Kakiemon type. The Metropolitan Museum of Art.",
    source: "https://www.metmuseum.org/art/collection/search/49313",
  },
  kakiemon: {
    ...commons, src: "/images/arita/kakiemon.jpg", width: 3121, height: 3043,
    alt: "Kakiemon dish with a bird on a rock, red flowers and green foliage arranged around open white space.",
    caption: "Kakiemon dish with a bird on a rock, Arita, ca. 1670. Gardiner Museum, Toronto.",
    source: "https://commons.wikimedia.org/wiki/File:Kakiemon_Dish_with_Bird_on_a_Rock_Design,_c._1670,_Arita,_hard-paste_porcelain_with_overglaze_enamels_-_Gardiner_Museum,_Toronto_-_DSC00383.JPG",
  },
  iroe: {
    ...commons, src: "/images/arita/iroe.jpg", width: 3627, height: 3970,
    alt: "Covered porcelain bowl decorated with red peonies and green foliage in overglaze enamels.",
    caption: "Covered bowl with peonies, Kakiemon type, 17th century. Tokyo National Museum. An example of iroe within the Kakiemon tradition.",
    source: "https://commons.wikimedia.org/wiki/File:Covered_Bowl,_Imari_ware,_Kakiemon_type,_Edo_period,_17th_century,_peony_design_in_overglaze_enamel_-_Tokyo_National_Museum_-_DSC05327.JPG",
  },
  kinrande: {
    ...commons, src: "/images/arita/kinrande.jpg", width: 3563, height: 3926,
    alt: "Imari bowl with a blue fish among waves, surrounded by red panels, gold flowers, and gold scrolling ornament.",
    caption: "Imari bowl with a stormy seascape, 17th–18th century. Tokyo National Museum. Blue, red, and gold illustrate the kinrande palette.",
    source: "https://commons.wikimedia.org/wiki/File:Bowl_2,_Imari_ware,_Edo_period,_17th-18th_century,_stormy_seascape_design_in_overglaze_enamel_-_Tokyo_National_Museum_-_DSC05316.JPG",
  },
} as const;
