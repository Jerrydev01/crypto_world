import SharedLayout from './components/SharedLayout'
import Services from './pages/Services'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/Services.jsx" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
