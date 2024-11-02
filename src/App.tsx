import Preview from '@/pages/Preview/Preview'
import Profile from '@/pages/Profile/Profile'
import ProfileFormDetails from '@/pages/Profile/ProfileFormDetails/ProfileFormDetails'
import ProfileFormLinks from '@/pages/Profile/ProfileFormLinks/ProfileFormLinks'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/profile' element={<Profile />}>
        <Route index element={<ProfileFormLinks />} />
        <Route path='details' element={<ProfileFormDetails />} />
      </Route>

      <Route path='/' element={<Preview />} />
    </Routes>
  )
}

export default App
