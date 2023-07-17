import "./App.css";
import LoginButton from "./components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Application</h1>

      {isAuthenticated ? <LogoutButton /> : <LoginButton />}

      <Profile />

      {/* <button onClick={() => loginWithRedirect()}>Login</button> */}
    </div>
  );
}
export default App;
