import List from "./components/List";
import User from "./components/User";
import Loader from "./components/Loader";
import "./components/Users.css";
import { useEffect, useState } from "react";

const responseURL = "https://jsonplaceholder.typicode.com/users";
const getItems = () =>
  fetch(responseURL)
    .then((response) => response.json())
    .catch((error) => console.error(error));

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getItems().then((data) => {
      setUsers(data);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        {isLoaded ? (
          <List className='grid users'>
            {users.map((user, index) => (
              <User user={user} key={`user_${index}`} />
            ))}
          </List>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
