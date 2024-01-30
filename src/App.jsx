import { Container } from "react-bootstrap";
import Mensaje from "./components/Mensaje";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
    <Container className="my-3 text-center">
      <Mensaje />
    </Container>
    </>
  );
}

export default App;
