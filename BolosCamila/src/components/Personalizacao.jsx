import React, { useState } from "react";
import "./personalizacao.css";

const opcoes = {
  Recheio: ["Brigadeiro", "Beijinho", "Doce de Leite", "Nutella"],
  Biscoito: ["Maisena", "Negresco", "Oreo"],
  Cobertura: ["Chocolate", "Leite Ninho", "Chantilly"],
  Adicional: ["Granulado", "Confete", "Morango"],
  Embalagem: ["Caixa simples", "Caixa decorada", "Saquinho"],
  Tipo: ["Trufa", "Bem Casado", "Cajuzinho", "Churros"]
};

const Personalizacao = () => {
  const [quantidade, setQuantidade] = useState(1);
  const [selecionados, setSelecionados] = useState({
    Recheio: "",
    Biscoito: "",
    Cobertura: "",
    Adicional: "",
    Embalagem: "",
    Tipo: "",
  });

  const [listaFinal, setListaFinal] = useState([]);

  const alterarQuantidade = (delta) => {
    setQuantidade((qtd) => Math.max(1, qtd + delta));
  };

  const adicionarIngrediente = (tipo) => {
    const valor = selecionados[tipo];
    if (valor) {
      setListaFinal([...listaFinal, `${tipo}: ${valor}`]);
    }
  };

  const atualizarSelecionado = (tipo, valor) => {
    setSelecionados({ ...selecionados, [tipo]: valor });
  };

  return (
    <div className="personalizacao">
      <h2 className="titulo">Personalize seu doce</h2>

      <div className="itens-personalizacao">
        {Object.keys(opcoes).map((tipo) => (
          <div key={tipo} className="linha-item">
            <span>{tipo}</span>
            <select
              value={selecionados[tipo]}
              onChange={(e) => atualizarSelecionado(tipo, e.target.value)}
            >
              <option value="">Selecione</option>
              {opcoes[tipo].map((op) => (
                <option key={op} value={op}>{op}</option>
              ))}
            </select>
            <button onClick={() => adicionarIngrediente(tipo)}>+</button>
          </div>
        ))}
      </div>

      <div className="lista-escolhidos">
        <h3>Ingredientes Selecionados:</h3>
        {listaFinal.length === 0 ? (
          <p>Nenhum ingrediente adicionado ainda.</p>
        ) : (
          <ul>
            {listaFinal.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="quantidade">
        <span>Quantidade: {quantidade}</span>
        <button onClick={() => alterarQuantidade(1)}>+</button>
        <button onClick={() => alterarQuantidade(-1)}>-</button>
      </div>

      <button className="btn-comprar">Comprar</button>
    </div>
  );
};

export default Personalizacao;
