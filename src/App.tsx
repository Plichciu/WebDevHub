import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './Pages/Home'
import '@fontsource-variable/league-spartan'
import NotFoundPage from './Pages/NotFoundPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import { useEffect } from 'react'

const App = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
