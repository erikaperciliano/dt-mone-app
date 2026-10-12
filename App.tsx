import { AuthContextProvider } from '@/context/auth.context';
// @ts-ignore CSS imports are handled by the bundler.
import './src/styles/global.css'
import { NavigationRoutes } from '@/routes';
import { SnackbarContextProvider } from '@/context/snackbar.context';
import { Snackbar } from '@/components/Snackbar';
import { BottomSheetProvider } from '@/context/bottomsheet.context'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TransactionContextProvider } from '@/context/transaction.context';

export default function App() {
  return (
    <GestureHandlerRootView className='flex-1'>
      <SnackbarContextProvider>
        <AuthContextProvider>
          <TransactionContextProvider>
               <BottomSheetProvider>
                <NavigationRoutes />
                <Snackbar />
              </BottomSheetProvider>
            </TransactionContextProvider>
          </AuthContextProvider>
      </SnackbarContextProvider>
    </GestureHandlerRootView>
  );
}
