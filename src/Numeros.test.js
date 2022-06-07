import NumeroLiteral from "./Numeros.js";
describe("Iterador de numeros", () => {
    it("Da el numero 0", () => {
      expect(NumeroLiteral(0)).toEqual("cero");
    });
    it("Da el numero 1", () => {
        expect(NumeroLiteral(1)).toEqual("uno");
      });
    it("Da el numero 2", () => {
      expect(NumeroLiteral(2)).toEqual("dos");
    });
    it("Da el numero 9", () => {
      expect(NumeroLiteral(9)).toEqual("nueve");
    });
  });
