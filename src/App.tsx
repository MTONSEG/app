import Preview from '@/components/pages/Preview/Preview'
import Profile from '@/components/pages/Profile/Profile'
import ProfileFormDetails from '@/components/pages/Profile/ProfileFormDetails/ProfileFormDetails'
import ProfileFormLinks from '@/components/pages/Profile/ProfileFormLinks/ProfileFormLinks'
import { PATH } from '@/constants'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path={PATH.PROFILE} element={<Profile />}>
        <Route index element={<ProfileFormLinks />} />
        <Route path={PATH.DETAILS} element={<ProfileFormDetails />} />
      </Route>

      <Route path={PATH.PREVIEW} element={<Preview />} />
    </Routes>
  )
}

export default App
