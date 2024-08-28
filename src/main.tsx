import { createRoot } from 'react-dom/client'
import { MsalProvider } from '@azure/msal-react'
import App from './App'
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './Authentication/authConfig';
import { TokenContextProvider } from './Contexts/TokenContextProvider';
import './index.css'
import { UserContextProvider } from './Contexts/UserContextProvider';

const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById('root')!).render(
  <TokenContextProvider>
    <UserContextProvider>
  <MsalProvider instance={msalInstance}>
      <App />
  </MsalProvider>
  </UserContextProvider>
  </TokenContextProvider>,
)


