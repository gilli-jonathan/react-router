import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" Component={HomePage} />
            <Route path="/chi-siamo" element={<AboutPage />} />
            <Route path="/prodotti" element={<ContactsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
