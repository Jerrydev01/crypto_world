import SharedLayout from './components/SharedLayout'
import Market from './pages/Market'
import Home from './pages/Home'
import News from './pages/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/Market.jsx" element={<Market />} />
          <Route path="/News.jsx" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
