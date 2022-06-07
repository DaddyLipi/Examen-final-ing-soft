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
    
  });
  function NumeroLiteral(numero)
  {
    let listaNumeros=["cero","uno","dos"]
    let numerolit;
    numerolit=listaNumeros[numero];
    return numerolit;
  }