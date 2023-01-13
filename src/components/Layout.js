import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {useTheme} from './Context'

export default function Layout() {
  const darkTheme = useTheme()

  return (
    <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
        <Header/>
        <main className="content">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
