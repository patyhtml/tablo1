import './index.css';
import AuthProvider from './providers/authProvider';
import Routes from './Routes';

export default function App(){
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}