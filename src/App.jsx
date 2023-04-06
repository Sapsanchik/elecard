import { Route, Routes, Link } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Auth from './pages/Auth';
import ItemList from './pages/ItemList';
import TreeList from './pages/TreeList';
import Layout from './Components/Layout';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<ItemList />} />
            <Route path="/tree" element={<TreeList />} />
            <Route path="/login" element={<Auth />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;