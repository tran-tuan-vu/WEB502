import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import List from './pages/List'

function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path="products" element={<List/>} />
      <Route path="news" element={<h1>Tin tức</h1>} />
      <Route path="about" element={<h1>About</h1>} />
    </Route>
    <Route path="*" element={<h1>Not found</h1>} />
  </Routes>
  )
}

export default App
