let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let a: number;
let b: number;
let c: number;
let mayor: number = 0;

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let a = Number(prompt("Ingrese el primer numero"));
  let b = Number(prompt("Ingrese el segundo numero"));
  let c = Number(prompt("Ingrese el tercer numero"));
  if (a === b && b === c) {
    console.log("Todos los numeros son iguales");
  } else {
    if (a > b && a > c) {
      mayor = a;
      console.log("El numero mayor es:" + mayor);
    } else {
      if (a < b && a < c) {
        if (b > c) {
          mayor = b;
          console.log("el numero mayor es:" + mayor);
        } else {
          mayor = c;
          console.log("El numero mayor es:" + mayor);
        }
      }
      console.log("El numero mayor es:" + mayor);
    }
  }
});
