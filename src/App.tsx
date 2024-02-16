import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import '@fontsource-variable/league-spartan'


const App = () => {


	return (
		// main color - #00000
		// secondary color - #0C161F
		// yellow - #FFCA0F
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
