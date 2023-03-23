import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Navbar from '~/components/navbar/Navbar';


export default component$( () => {
    return ( 
<div class="page">
      <main class={"bg-white text-primary-800 dark:text-white dark:bg-primary-900 min-h-screen"}>
        <Navbar>
          <div q:slot='navLogo' class={"pb-1"}>
            <span class={"font-bold text-lg"}>KokeCar11</span>
          </div>
          
        </Navbar>
        <div class={"mx-auto px-2 sm:px-6 lg:px-40"}>
        <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div class="max-w-md text-center">
                    <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span class="sr-only">Error</span>404
                    </h2>
                    <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p class="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <a rel="noopener noreferrer" href="#" class="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</a>
                </div>
            </div>
        </section>
        </div>
      </main>
      </div>
        
        
    );
})

export const head: DocumentHead = {
    title: 'Página no encontrada | KokeCar11',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };