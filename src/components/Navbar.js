import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
import {useGenreList} from './Context'

export default function Navbar() {
    
/*   const menuItems2 = useGenreList()
  console.log("🚀 ~ menuItems2", menuItems2) */

    return (
      <nav>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
          })}
        </ul>
      </nav>
    )
}
