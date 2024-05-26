import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [showAlert, setShowAlert] = useState(false)
  const alert = (
    <Alert dissmissed={() => setShowAlert(false)}>
      <strong>Hold Up!</strong> You just clicked this button!
    </Alert>
  );
  return (
    <div>
      {showAlert && alert}
      <Button onClick={() => setShowAlert(true)} color="primary">
        Click Me 😀
      </Button>
    </div>
  );
}

export default App;
