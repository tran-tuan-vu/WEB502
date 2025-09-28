import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import List from './pages/List'
import Detail from './pages/Detail'

function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route path="products" element={<List/>} />
      <Route path="products/:id" element={<Detail/>} />
      <Route path="news" element={<h1>Tin tức</h1>} />
      <Route path="about" element={<h1>About</h1>} />
    </Route>
    <Route path="*" element={<h1>Not found</h1>} />
  </Routes>
  )
}

export default App
