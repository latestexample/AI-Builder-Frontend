import { Toaster } from 'react-hot-toast';
import Application from './Application';

function App() {
  return (
    <>
      <Application />
      <Toaster
        toastOptions={{ className: 'custom-toast' }}
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
