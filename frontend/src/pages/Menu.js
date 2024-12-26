import React, { useEffect, useState } from "react";
import { fetchMenus } from '../service/api';
import MenuList from "../components/Menu/MenuList";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMenus = async () => {
      try {
        const data = await fetchMenus();
        setMenus(data);
      } catch (err) {
        setError("Failed to load menus");
      } finally {
        setLoading(false);
      }
    };

    loadMenus();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Our Menu</h1>
      <MenuList items={menus} />
    </div>
  );
};

export default Menu;


