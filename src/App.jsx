import { Routes, Route} from "react-router-dom";
import Dash from "./App/dash";
import Browse from "./App/browse";
import Profile from "./App/profile";

function App() {
  return (
    <Routes>
        <Route path="dash" element={<Dash />}>
        <Route path="browse" element={<Browse />}>
        <Route path="profile" element={<Profile />}>
        </Route>            
    </Routes>
  );
}

export default App;