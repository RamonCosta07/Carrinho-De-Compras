import { useEffect, useState } from "react";
import PageHeader from "./components/PageHeader";
import PageTitle from "./components/PageTitle";
import Product from "./components/Product";
import Summary from "./components/Summary";
import "./styles/styles.scss";
import { api } from "./provider";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const [cart, setCart] = useState([]);

  const productObject = {
    name: "produto",
    category: "categoria",
    price: randomNumber(90, 1200),
    quantity: 1,
  };

  const fetchData = () => {
    api.get("/cart").then((response) => {
      setCart(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = () => {
    api.post("/cart", productObject).then(() => {
      fetchData();
    });
  };

  const handleRemoveItem = (item) => {
    api.delete(`/cart/${item._id}`).then(() => {
      fetchData();
    });
  };

  const handleUpdateItem = (item, action) => {
    let newQuantity = item.quantity;
    if (action === "decrease") {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }
    if (action === "increase") {
      newQuantity += 1;
    }

    const newData = { ...item, quantity: newQuantity };
    delete newData._id;
    api.put(`/cart/${item._id}`, newData).then(() => {
      fetchData();
    });
  };

  const getTotal = () => {
    let sum = 0;
    for (let item of cart) {
      sum += item.price * item.quantity;
    }
    return sum;
  };

  const cartTotal = getTotal();

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data="Meu Carrinho" />
        <div className="content">
          <section>
            <button
              onClick={handleAddItem}
              style={{
                padding: "5px 10px",
                marginBottom: "15px",
                borderRadius: "10px",
              }}
            >
              Adicionar ao Carrinho
            </button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <Product
                    data={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                    key={item._id}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan={"5"} style={{ textAlign: "center" }}>
                      Carrinho Vazio
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>

          <aside>
            <Summary cartTotal={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
