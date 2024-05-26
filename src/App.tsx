import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "New York",
    "San Francisco",
    "Delhi",
    "Tokyo",
    "London",
    "Paris",
  ];

  return <div><ListGroup items={items} heading="Cities" onSelectItem={(item: string) => console.log(item)}/></div>
}

export default App;