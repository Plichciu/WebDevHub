import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import '@fontsource-variable/league-spartan'
import NotFoundPage from './Pages/NotFoundPage'

const App = () => {
	return (
		// main color - #00000
		// secondary color - #0C161F
		// yellow - #FFCA0F
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
