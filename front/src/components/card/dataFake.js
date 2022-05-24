const products = [
  {
  name: "sucette",
  image:"https://i.etsystatic.com/20425152/r/il/e40e68/3179556670/il_1588xN.3179556670_ilmp.jpg", 
  link:"https://www.etsy.com/fr/listing/1030943894/tetine-personnalisee-simba-et-prenom?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_fr_fr_fr_ps-c-bath_and_beauty-baby_and_child_care-pacifiers_and_clips&utm_custom1=_k_Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB_k_&utm_content=go_1774520397_70527613138_343206773728_aud-1408578067660:pla-354261592245_c__1030943894frfr_137178485&utm_custom2=1774520397&gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB",
  price: 3.99
},
{
  name: "doudou",
  image: "https://peluche.fr/506-large_default/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.jpg", 
  link:"https://peluche.fr/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.html?gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnHLa3CcBIVAdWe6SSNrGrkDUimzjy06V-gmIH84UT5SyagTzvwxv0UaAlm4EALw_wcB",
  price: 40.99
},
{
  name: "sucette",
  image:"https://i.etsystatic.com/20425152/r/il/e40e68/3179556670/il_1588xN.3179556670_ilmp.jpg", 
  link:"https://www.etsy.com/fr/listing/1030943894/tetine-personnalisee-simba-et-prenom?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_fr_fr_fr_ps-c-bath_and_beauty-baby_and_child_care-pacifiers_and_clips&utm_custom1=_k_Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB_k_&utm_content=go_1774520397_70527613138_343206773728_aud-1408578067660:pla-354261592245_c__1030943894frfr_137178485&utm_custom2=1774520397&gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB",
  price: 3.99
},
{
  name: "doudou",
  image: "https://peluche.fr/506-large_default/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.jpg", 
  link:"https://peluche.fr/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.html?gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnHLa3CcBIVAdWe6SSNrGrkDUimzjy06V-gmIH84UT5SyagTzvwxv0UaAlm4EALw_wcB",
  price: 40.99
},
{
  name: "sucette",
  image:"https://i.etsystatic.com/20425152/r/il/e40e68/3179556670/il_1588xN.3179556670_ilmp.jpg", 
  link:"https://www.etsy.com/fr/listing/1030943894/tetine-personnalisee-simba-et-prenom?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_fr_fr_fr_ps-c-bath_and_beauty-baby_and_child_care-pacifiers_and_clips&utm_custom1=_k_Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB_k_&utm_content=go_1774520397_70527613138_343206773728_aud-1408578067660:pla-354261592245_c__1030943894frfr_137178485&utm_custom2=1774520397&gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB",
  price: 3.99
},
{
  name: "doudou",
  image: "https://peluche.fr/506-large_default/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.jpg", 
  link:"https://peluche.fr/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.html?gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnHLa3CcBIVAdWe6SSNrGrkDUimzjy06V-gmIH84UT5SyagTzvwxv0UaAlm4EALw_wcB",
  price: 40.99
},
{
  name: "sucette",
  image:"https://i.etsystatic.com/20425152/r/il/e40e68/3179556670/il_1588xN.3179556670_ilmp.jpg", 
  link:"https://www.etsy.com/fr/listing/1030943894/tetine-personnalisee-simba-et-prenom?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_fr_fr_fr_ps-c-bath_and_beauty-baby_and_child_care-pacifiers_and_clips&utm_custom1=_k_Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB_k_&utm_content=go_1774520397_70527613138_343206773728_aud-1408578067660:pla-354261592245_c__1030943894frfr_137178485&utm_custom2=1774520397&gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB",
  price: 3.99
},
{
  name: "doudou",
  image: "https://peluche.fr/506-large_default/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.jpg", 
  link:"https://peluche.fr/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.html?gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnHLa3CcBIVAdWe6SSNrGrkDUimzjy06V-gmIH84UT5SyagTzvwxv0UaAlm4EALw_wcB",
  price: 40.99
},
{
  name: "sucette",
  image:"https://i.etsystatic.com/20425152/r/il/e40e68/3179556670/il_1588xN.3179556670_ilmp.jpg", 
  link:"https://www.etsy.com/fr/listing/1030943894/tetine-personnalisee-simba-et-prenom?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_fr_fr_fr_ps-c-bath_and_beauty-baby_and_child_care-pacifiers_and_clips&utm_custom1=_k_Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB_k_&utm_content=go_1774520397_70527613138_343206773728_aud-1408578067660:pla-354261592245_c__1030943894frfr_137178485&utm_custom2=1774520397&gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnEVaEuw052xXU_on3lgekdVRgA2oAaOaBKoG6MKdfBRAsk5v3EzBmQaAlsKEALw_wcB",
  price: 3.99
},
{
  name: "doudou",
  image: "https://peluche.fr/506-large_default/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.jpg", 
  link:"https://peluche.fr/peluche-soft-cuddly-friends-ours-teddy-jimmy-steiff.html?gclid=Cj0KCQjwhLKUBhDiARIsAMaTLnHLa3CcBIVAdWe6SSNrGrkDUimzjy06V-gmIH84UT5SyagTzvwxv0UaAlm4EALw_wcB",
  price: 40.99
},
]

export default products;