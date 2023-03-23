import { component$ } from '@builder.io/qwik';


export default component$( () => {
    return (
        <div class={"bg-slate-400 p-3 rounded-lg"}>
            <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-primary-800 dark:text-white">
                    <a href="#">
                        <span class="absolute inset-0"></span>
                        Titulo
                    </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Descripción</p>
            </div>
        </div>
    );
})