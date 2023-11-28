import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = (profile) => {
    setProfiles([...profiles, profile]);
  };

  return (
    <div>
      <h1>The Github Cards App</h1>
      <Form onSubmit={addNewProfile} />
      <List profiles={profiles} />
    </div>
  );
}

export default App;
