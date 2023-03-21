import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$( () => {
    return (
        <nav class="sticky top-0 z-10 bg-white dark:bg-primary-900 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-primary-800 border-opacity-20">
            <div class="mx-auto px-4 sm:px-40">
                <div class="flex items-center h-16">
                    <span class="text-2xl font-semibold">
                        <Link class="flex items-center mt-2 lg:mt-0 mr-1" href='/'>
                            <span class="font-bold text-xl text-primary-900 dark:text-primary-100">KokeCar11</span>
                        </Link>
                    </span>
                    <div class="flex-1 text-primary-800">
                        <Slot name="navItems" />
                    </div>
                    <div class="flex-none">
                        <Slot name="navItemsFinal" />
                    </div>
                </div>
            </div>
        </nav>
    );
})