import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import store from './ReduxTK/store.js'
import Loading from './components/Loading/Loading.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* Locale */}
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
