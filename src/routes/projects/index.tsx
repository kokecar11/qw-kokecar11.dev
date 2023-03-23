import { component$ } from '@builder.io/qwik';
import Card from '~/components/card/Card';


export default component$( () => {
    return (
        <div>
            <h1 class={"text-3xl"}>Proyectos</h1>
            <Card />
        </div>
    );
})