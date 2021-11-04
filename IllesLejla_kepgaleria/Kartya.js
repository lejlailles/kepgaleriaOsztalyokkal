class Kartya {
  constructor(elem, adat,index) {
    //létrehozunk változókat az új elemhez
    this.elem = elem;
    this.cim = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.adat = adat;
    this.adat.index=index;

    //console.log(elem);
    this.setAdatok(this.adat);

    this.elem.on("click", () => {
  
        this.KattintasTrigger(); 

      });
    }
   //konkrét elemeknek értéket
   

      setAdatok(ertekek){
        this.cim.html(ertekek.Cim);
        this.kep.attr("src",ertekek.EleresiUt);
        this.leiras.html(ertekek.Leiras);

      }

 
    
  

  KattintasTrigger() {
    let esemeny = new CustomEvent("kepcsere", { detail: this.adat });
   
    window.dispatchEvent(esemeny);
  }
}

