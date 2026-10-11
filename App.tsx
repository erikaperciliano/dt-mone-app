import { AuthContextProvider } from '@/context/auth.context';
// @ts-ignore CSS imports are handled by the bundler.
import './src/styles/global.css'
import { NavigationRoutes } from '@/routes';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationRoutes/>
    </AuthContextProvider>
  );
}
