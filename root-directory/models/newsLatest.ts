
import { ref } from "vue";
import type { Ref } from "vue";

// Data definition
interface LatestNewsItem {
    id: any,
    imgSrc: string,
    imgAlt: string,
    heading: string,
    link: string,
    operation: string,
    date: string
}


export const latestNews: Ref<LatestNewsItem[]> = ref([

    // 1. Building a stronger future powered by american energy
    {
        id: 1,
        imgSrc: 'https://images.pexels.com/photos/12257901/pexels-photo-12257901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Image 1',
        heading: 'Building a stronger future powered by american energy',
        link: '/what/energy',
        operation: 'Our operations |',
        date: 'May 05, 2025'
    },

    // 2. Penn Petro Energy reports first quarter 2025 results
    {
        id: 2,
        imgSrc: 'https://images.pexels.com/photos/6767963/pexels-photo-6767963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Image 2',
        heading: 'Penn Petro Energy reports first quarter 2025 results',
        link: '/who/culture',
        operation: '',
        date: 'May 02, 2025'
    },

    // 3. The Penn Petro Energy championship
    {
        id: 3,
        imgSrc: '/Logo/Logo_transparent_bg.png',
        imgAlt: "Penn Petro Energy's Logo with a transparent background",
        heading: 'The Penn Petro Energy championship',
        link: '/sustainability/social',
        operation: '',
        date: 'April 24, 2025'
    },

    // 4. Penn Petro Energy starts oil production from ballymore project in gulf of america
    {
        id: 4,
        imgSrc: '/Logo/Logo_transparent_bg.png',
        imgAlt: "Penn Petro Energy's Logo with a transparent background",
        heading: 'Penn Petro Energy starts oil production from ballymore project in gulf of america',
        link: '/what/energy',
        operation: '',
        date: 'April 21, 2025'
    }

]);

export const isArchiveOpen = ref<boolean>(false);

export const archivedNews: Ref<LatestNewsItem[]> = ref([

    // 1. Building a stronger future powered by american energy
    {
        id: 1,
        imgSrc: 'https://images.pexels.com/photos/12257901/pexels-photo-12257901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Archive Image 1',
        heading: 'Building a stronger future powered by american energy',
        link: '/what/energy',
        operation: 'Our operations |',
        date: 'April 19, 2025'
    },

    // 2. Penn Petro Energy reports first quarter 2025 results
    {
        id: 2,
        imgSrc: '/Logo/Logo_transparent_bg.png',
        imgAlt: "Penn Petro Energy's Logo with a transparent background",
        heading: 'Penn Petro Energy reports first quarter 2025 results',
        link: '/who/culture',
        operation: '',
        date: 'April 12, 2025'
    },

    // 3. The Penn Petro Energy championship
    {
        id: 3,
        imgSrc: 'https://images.pexels.com/photos/6767963/pexels-photo-6767963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: "Penn Petro Energy's Logo with a transparent background",
        heading: 'The Penn Petro Energy championship',
        link: '/sustainability/social',
        operation: '',
        date: 'April 09, 2025'
    },

    // 4. Penn Petro Energy starts oil production from ballymore project in gulf of america
    {
        id: 4,
        imgSrc: '/Logo/Logo_transparent_bg.png',
        imgAlt: "Penn Petro Energy's Logo with a transparent background",
        heading: 'Penn Petro Energy starts oil production from ballymore project in gulf of america',
        link: '/what/energy',
        operation: '',
        date: 'April 05, 2025'
    },
]);

