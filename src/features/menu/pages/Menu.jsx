import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../../services/apiRestaurant";

import MenueItem from "../components/MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((item) => (
        <MenueItem key={item.id} item={item}></MenueItem>
      ))}
    </ul>
  );
}

async function loader() {
  const menu = await getMenu();
  return menu;
}

export { loader };
export default Menu;
