
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin(() => {
    // onMounted(() => {
        AOS.init({
            offset: 100,
            duration:800,
            delay: 100,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            anchorPlacement: 'top-center'
        })
    // })
})