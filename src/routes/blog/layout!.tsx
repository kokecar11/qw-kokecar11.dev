import { $, component$, Slot, useContext } from '@builder.io/qwik';
import { Link, routeLoader$, useLocation } from '@builder.io/qwik-city';
import { GlobalStore } from '~/core/context';
import { setPreference } from '~/components/toggle-theme/Toggle-theme';
import Navbar2 from '~/components/navbar-2/Navbar-2';
import type { NavItemsMenuI } from '~/core/interfaces/menu';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {

  const pathname = useLocation().url.pathname;

  const state = useContext(GlobalStore);
  const onClick$ = $(() => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    setPreference(state.theme);
  });

  const navItems: NavItemsMenuI[] = [
    {name:'Blog', route:'/blog/'},
    {name:'Proyectos', route:'/projects/'},
  ]
  return (
    <div class="page">
      <main class={"bg-white dark:text-white dark:bg-primary-900 min-h-screen"}>
        <Navbar2>
          <div q:slot='navLogo' class={"pb-1"}>
            <span class={"font-bold text-lg"}>KokeCar11</span>
          </div>
          <div q:slot='navItemsEnd' class={"pb-1"}>
          {
            navItems.map( (navItem) => 
            <Link key={navItem.route} href={navItem.route}  class={{ 'nav-link':true, 'active-nav-item': pathname.startsWith(navItem.route)}}>{navItem.name}</Link>
            )
          }
            <button class={"text-primary-900 mx-2 dark:text-primary-100"} onClick$={onClick$}>{state.theme === 'light' ? 'Dark' : 'Light'}</button>       
          </div>
          <div q:slot='navItemsMobile' class={"pb-1"}>
          {
            navItems.map( (navItem) => 
            <Link key={navItem.route} href={navItem.route}  class={{ 'block': true,'nav-link':true, 'active-nav-item': pathname.startsWith(navItem.route)}}>{navItem.name}</Link>
            )
          }
            <button class={"text-primary-900 mx-2 dark:text-primary-100"} onClick$={onClick$}>{state.theme === 'light' ? 'Dark' : 'Light'}</button>       
          </div>
        </Navbar2>
        <div class={"mx-auto px-2 sm:px-6 lg:px-40"}>
          <Slot />
        </div>
      </main>
      <div class="section dark">
        <div class="container">
        </div>
      </div>
    </div>
  );
});
