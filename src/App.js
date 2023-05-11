import logo from './logo.svg';
import './App.css';
import InputHookComp from "./components/InputHook";

const originalView = (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	</div>
);

function App() {
  return (
	<InputHookComp></InputHookComp>
  );
}

export default App;
