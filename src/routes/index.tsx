import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
     Welcome to Kokecar11.dev
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Kokecar11',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
