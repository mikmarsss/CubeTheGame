import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter basename="/CubeTheGame">
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)
