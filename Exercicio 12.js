function removerPropriedade(objeto, propriedade) {
    // Cria uma cópia do objeto original
    const copiaObjeto = Object.assign({}, objeto);
  
    // Verifica se a propriedade existe no objeto
    if (propriedade in copiaObjeto) {
      // Remove a propriedade da cópia do objeto
      delete copiaObjeto[propriedade];
    }
  
    // Retorna a cópia do objeto sem a propriedade especificada
    return copiaObjeto;
  }

  const meuObjeto = { nome: 'João', idade: 30, cidade: 'São Paulo' };
  const novoObjeto = removerPropriedade(meuObjeto, 'idade');
console.log(novoObjeto); // { nome: 'João', cidade: 'São Paulo' }


