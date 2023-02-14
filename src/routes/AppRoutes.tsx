import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateAccount } from '../pages/user/CreateAccount';

export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
