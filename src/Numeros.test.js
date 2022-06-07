describe("Iterador de numeros", () => {
    it("Da el numero 0", () => {
      expect(NumeroLiteral(0)).toEqual("cero");
    });
    it("Da el numero 1", () => {
        expect(NumeroLiteral(1)).toEqual("uno");
      });
  });
  function NumeroLiteral(numero)
  {
      if(numero==0)
      {
        return "cero";
      }
      else
      {
        return "uno";
      }
  }