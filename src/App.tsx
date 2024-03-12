import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';
import { PageOne, PageTwo } from './Pages';
import { Login } from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />}>
          <Route index element={<div>No page is selected</div>} />
          <Route path="one" element={<PageOne />} />
          <Route path="two" element={<PageTwo />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
