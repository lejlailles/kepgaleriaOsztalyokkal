$(function () {
  //betesszük a kártyák adatait egy tömbbe
  const kepAdat = [
    {
      Cim: "1. kép címe",
      EleresiUt: "kepek/kep1.jpg",
      Leiras: "1. kép leírása",
    },
    {
      Cim: "2. kép címe",
      EleresiUt: "kepek/kep2.jpg",
      Leiras: "2. kép leírása",
    },
    {
      Cim: "3. kép címe",
      EleresiUt: "kepek/kep3.jpg",
      Leiras: "3. kép leírása",
    },
  ];

  let aktIndex=0;

  //van egy sablon elemünk, ezt klónozzuk és hozzácsatoljuk a szülőelemhez, végigmegyünk a tömbön és a klónozott elemmel és a tömb adataival példányosítjuk a kártya osztályunkat
  const szuloElem = $("#galeria");

  let sablonElem = $(".kartya");

  /*
 kepAdat.forEach(function(elem)){
    let ujElem = sablonElem.clone().appendTo(szuloElem);

    const ujKartya = new Kartya(ujElem,elem);
 })
 */

  for (let index = 0; index < kepAdat.length; index++) {
    let ujElem = sablonElem.clone().appendTo(szuloElem);

    const ujKartya = new Kartya(ujElem, kepAdat[index],index);
  }
  const fokepSzulo = $("#fokep");
  let ujElem = sablonElem.clone().appendTo(fokepSzulo);
  const ujFokep = new Kartya(ujElem, kepAdat[aktIndex],aktIndex);
  sablonElem.remove();

  $(window).on("kepcsere", (esemeny) => {
    console.log(esemeny.detail);
    /*$("#fokep img").attr("src",esemeny.detail.EleresiUt);
      $("#fokep h3").html(esemeny.detail.Cim);
      $("#fokep p").html(esemeny.detail.Leiras);*/
    ujFokep.setAdatok(esemeny.detail);

    //nagykép aktuális indexe
    aktIndex=esemeny.detail.index;
  });

 //gombokra kattintva lépjen
  
$('#bal').on( 'click', function() {
    aktIndex--;
    if(aktIndex<0){
        aktIndex=kepAdat.length-1
    }
    ujFokep.setAdatok(kepAdat[aktIndex]);

});

$('#jobb').on( 'click', function() {
    aktIndex++;

    if(aktIndex>kepAdat.length-1){
        aktIndex=0;
        
    }

    ujFokep.setAdatok(kepAdat[aktIndex]);
});


});
