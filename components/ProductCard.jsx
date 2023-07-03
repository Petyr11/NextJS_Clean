import React from "react";

function ProductCard() {
  return (
    <section className="item-card">
      <img
        src="https://http2.mlstatic.com/D_953070-MLA40176282442_122019-W.jpg"
        alt="Imagem do produto"
        className="item-img"
      />

      <div className="item-info">
        {" "}
        <h1 className="item-price">R$ 200,00 </h1>
        <h2 className="item-name">Computador </h2>{" "}
      </div>

      <button className="item-addCartButton"> Adicionar ao carrinho</button>
    </section>
  );
}

export default ProductCard;
