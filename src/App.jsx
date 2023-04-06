import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import ItemList from './pages/ItemList';
import TreeList from './pages/TreeList';
import Layout from './Components/Layout';
import { NotFound } from './pages/NotFound';


function App() {
  return (
    <>
      <main>
        <Routes basename="/elecard">
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<ItemList />} />
            <Route path="/tree" element={<TreeList />} />
            <Route path="/login" element={<Auth />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
