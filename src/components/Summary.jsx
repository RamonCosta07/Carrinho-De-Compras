import React from "react";

const Summary = () => {
  return (
    <>
      <div className="box">
        <header>Resumo da Compra</header>
        <div className="info">
          <div>
            <span>Sub-total</span>
            <span>R$ 440,00</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <button>
              Adicionar Cupom de Desconto
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>R$ 440,00</span>
        </footer>
      </div>
      <button>Finalizar Pedido</button>
    </>
  );
};

export default Summary;
