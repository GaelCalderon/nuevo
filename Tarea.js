const troca = {
    marca: "Ram",
    color: "negro",
    tipo: "de carga",
    llanta: 4,
  
   
    cambiarColor: function(nuevoColor) {
      this.color = nuevoColor;
      console.log("El color de la troca ha sido cambiado a:", this.color);
    },
  
  
    obtenerDescripcion: function() {
      return `Esta es una troca de marca ${this.marca}, color ${this.color}, tipo ${this.tipo} y tiene ${this.llanta} llantas.`;
    },
   // Método para añadir llantas a la troca
    añadirLlantas: function(cantidad) {
      this.llanta += cantidad;
      console.log(`Se han añadido ${cantidad} llantas. Ahora la troca tiene ${this.llanta} llantas en total.`);
    }
  };
  
  troca.cambiarColor("azul");
  console.log(troca.obtenerDescripcion());
  troca.añadirLlantas(2);
  

 

 



 