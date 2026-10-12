import { AuthContextProvider } from '@/context/auth.context';
// @ts-ignore CSS imports are handled by the bundler.
import './src/styles/global.css'
import { NavigationRoutes } from '@/routes';
import { SnackbarContextProvider } from '@/context/snackbar.context';
import { Snackbar } from '@/components/Snackbar';
import { BottomSheetProvider } from '@/context/bottomsheet.context'

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <BottomSheetProvider>
          <NavigationRoutes />
          <Snackbar />
        </BottomSheetProvider>
      </AuthContextProvider>
    </SnackbarContextProvider>
  );
}
