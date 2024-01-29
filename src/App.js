import './App.css';
import cardsData from './formData';
import Card from './components/Card'

function App() {
  console.log(cardsData);
  const cards = cardsData.map(cardItemData => <Card cardData={cardItemData} key={cardItemData[1].value} />)

  return (
    <div className="container">
      <div class="row g-4">
        {cards}
      </div >
    </div>
  );
}

export default App;
