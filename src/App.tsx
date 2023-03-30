import { AppProviders } from "./providers/app.provider";
import "./App.css";
// import { Application } from "./components/application/application";
// import { Counter } from "./components/counter/counter";
import { MuiMode } from "./components/mui/mui-mode";
// import { Skills } from "./components/skills/skills";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Skills skills={[]} /> */}
        {/* <Application /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
