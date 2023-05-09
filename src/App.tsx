import { createContext, useState } from "react";
import AppRoutes from "./AppRoutes";

export const UserContext = createContext({} as any);

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <AppRoutes />
    </UserContext.Provider>
  );
}

export default App;
