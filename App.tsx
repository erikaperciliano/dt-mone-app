import { AuthContextProvider } from '@/context/auth.context';
// @ts-ignore CSS imports are handled by the bundler.
import './src/styles/global.css'
import { NavigationRoutes } from '@/routes';
import { SnackbarContextProvider } from '@/context/snackbar.context';

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <NavigationRoutes/>
      </AuthContextProvider>
    </SnackbarContextProvider>
  );
}
