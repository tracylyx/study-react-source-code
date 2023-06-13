import logo from './logo.svg';
import './App.css';
import InputHookComp from "./components/InputHook";
import createPortalDemo from './components/createPortalDemo';
import UseEffectDemo from "./components/hooksDemo/UseEffectDemo";

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
	// <InputHookComp></InputHookComp>
	// createPortalDemo()
  	<UseEffectDemo></UseEffectDemo>
  );
}

export default App;
