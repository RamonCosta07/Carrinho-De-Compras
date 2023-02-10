import PageHeader from "./components/PageHeader";
import PageTitle from "./components/PageTitle";
import Product from "./components/Product";
import Summary from "./components/Summary";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data="Meu Carrinho" />
        <div className="content">
          <section>
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
                <Product />
              </tbody>
            </table>
          </section>

          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
