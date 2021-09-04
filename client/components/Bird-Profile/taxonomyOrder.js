exports.taxonomySplit = (data) => {
  var text = data.split('\n');

  var info = text[1].split(',');

  console.log(info);


};



// SCIENTIFIC_NAME,
// COMMON_NAME,
// SPECIES_CODE,
// CATEGORY,
// TAXON_ORDER,
// COM_NAME_CODES,
// SCI_NAME_CODES,
// BANDING_CODES,
// ORDER,
// FAMILY_COM_NAME,
// FAMILY_SCI_NAME,
// REPORT_AS,
// EXTINCT,
// EXTINCT_YEAR

// "Branta canadensis,
//  Canada Goose,
//  cangoo,
//  species,
//  303.0,
//  CAGO,
//  BRCA,
//  CANG,
//  Anseriformes,
//  "Ducks, Geese, and Waterfowl",
//  Anatidae,
//  ,
//  ,"