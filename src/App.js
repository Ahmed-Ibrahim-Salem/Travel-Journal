import "./styles.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((card) => {
    return (
      <div>
        <Card key={card.id} card={card} />
        <hr></hr>
      </div>
    );
  });

  return (
    <div className="app">
      <Header />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
