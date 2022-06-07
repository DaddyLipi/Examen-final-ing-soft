import fs from "fs";
describe("ATDD", () => {
    beforeAll(() => {
      document.body.innerHTML = fs.readFileSync("index.html", "utf8");
      require("./presenter.js");
    });
    it("Test numero origianl", () => {
      let boton = document.querySelector("#boton");
      let numero = document.querySelector("#numero-input");
      let litnumero = document.querySelector("#numero-div");
  
      numero.value = 0;
      boton.click();
      expect(parseInt(litnumero.innerHTML)).toEqual(0);
    });
    it("Test numero iterativo", () => {
        let boton = document.querySelector("#boton");
        let numero = document.querySelector("#numero-input");
        let litnumero = document.querySelector("#resultado-div");
    
        numero.value = 0;
        boton.click();
        expect(litnumero.innerHTML).toEqual("cero");
      });
  });  