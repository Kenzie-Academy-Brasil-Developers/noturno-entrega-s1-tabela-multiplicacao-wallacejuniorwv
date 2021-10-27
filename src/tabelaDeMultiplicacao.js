function tabelaMultiplicacao(num){

        let meuArray = [];
      
      for(let contador = 0; contador < num+1; contador++){
        meuArray.push([]);
        
        for(let subContador = 0; subContador < num+1; subContador++){
        meuArray[contador].push(contador * subContador);
      
      }
      }
      
      return meuArray
      }
      console.table(tabelaMultiplicacao(12));
}