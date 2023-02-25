import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import GlobalStyle from './styles/GlobalStyle';

export const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  );
};
