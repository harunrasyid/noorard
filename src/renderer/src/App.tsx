import { Route, Routes } from 'react-router'
import { DisplayScreen } from '@renderer/modules'

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DisplayScreen />} />
    </Routes>
  )
}

export default App
