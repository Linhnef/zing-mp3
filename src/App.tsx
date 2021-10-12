import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"
import { SongProvider } from "./contexts/SongContext"

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <SongProvider>
          <Home />
        </SongProvider>
      </Route>
    </Switch>
  )
}

export default App