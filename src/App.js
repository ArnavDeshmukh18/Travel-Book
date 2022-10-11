
import './App.css';
import Card from './components/content/Card';

import Header from './components/header/Header';
import data from './data'

export default function App() {


  const cards = data.map((item) => {
    return (
      <Card
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    );
  });


  return (
    <div className="App">
      <Header/>
      <center>
      {cards}

      </center>
      </div>
  );
}


