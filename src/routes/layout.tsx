import { $, component$, Slot, useContext, useVisibleTask$ } from '@builder.io/qwik';
import { Link, routeLoader$, useLocation } from '@builder.io/qwik-city';
import { GlobalStore } from '~/core/context';
import {getColorPreference, setPreference } from '~/components/toggle-theme/Toggle-theme';
import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import type { NavItemsMenuI } from '~/core/interfaces/menu';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {

  const pathname = useLocation().url.pathname;

  const state = useContext(GlobalStore);

  useVisibleTask$(() => {
    state.theme = getColorPreference();
    setPreference(state.theme);
  });
  
  const onClick$ = $(() => {

    state.theme = state.theme === 'light' ? 'dark' : 'light';
    console.log(state.theme)
    setPreference(state.theme);
  });

  const navItems: NavItemsMenuI[] = [
    {name:'Blog', route:'/blog/'},
    {name:'Proyectos', route:'/projects/'},
  ]
  return (
    <div class="page">
      <main class={"bg-white text-primary-800 dark:text-white dark:bg-primary-900 min-h-screen"}>
        <Navbar>
          <div q:slot='navLogo' class={""}>
            <span class={"font-bold text-lg"}>KokeCar11</span>
          </div>
          <div q:slot='navItemsEnd' class={"flex flex-none items-center justify-center"}>
            {
              navItems.map( (navItem) => 
              <Link key={navItem.route} href={navItem.route} class={{'nav-link':true, 'active-nav-item': pathname.startsWith(navItem.route)}}>{navItem.name}</Link>
              )
            }
            <button class={"text-primary-800 dark:text-white mx-2"} onClick$={onClick$}>
              <span class="material-symbols-outlined text-2xl p-2 hover:text-primary-500 dark:hover:text-primary-200">
                {
                  state.theme === 'light' ? 'dark_mode' : 'light_mode'
                }
              </span>
            </button>       
          </div>
          <div q:slot='navItemsMobile'>
          {
            navItems.map( (navItem) => 
            <Link key={navItem.route} href={navItem.route}  class={{ 'block': true,'nav-link':true, 'active-nav-item': pathname.startsWith(navItem.route)}}>{navItem.name}</Link>
            )
          }
            <button class={"text-primary-900 mx-2 dark:text-primary-100 rounded-lg"} onClick$={onClick$}>{state.theme === 'light' ? 'Dark' : 'Light'}
              <span class="material-symbols-outlined">
                dark_mode
              </span>
            </button>  
                 
          </div>
        </Navbar>
        <div class={"mx-auto px-2 sm:px-6 lg:px-12 prose lg:prose-lg dark:prose-invert"}>
          <article>

            <Slot />
          </article>
        </div>
      </main>
      <div class="section dark">
          <Footer />
      </div>
    </div>
  );
});
