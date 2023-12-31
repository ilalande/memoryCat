import { NavLink } from 'react-router-dom';
import styles from '@styles/modules/NavItems.module.css';
import { routes } from '@utils/router';

const NavItems = ({ cat }: { cat: string }) => {
  return (
    <ul className={styles.navItems}>
      {routes
        .filter((item) => item.catNav === cat)
        .map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={`/${item.path}`}
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ''
                }
                title={item.title}
              >
                {item.img ? <img src={item.img} title={item.title} /> : <></>}{' '}
                {item.text ? <span>{item.text}</span> : <></>}
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};
export default NavItems;
