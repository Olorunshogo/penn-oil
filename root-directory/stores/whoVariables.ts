
export const dollarsContributed = ref<number>(33.5);
export const employeeTotal = ref<string>('5,325');
export const volunteerTotalHours = ref<string>('95,829');
export const charitableOrgTotal = ref<string>('1,432');


import { ref } from "vue";
import type { Ref } from "vue";

// Data definition
interface NewsItem {
    id: number;
    link: string;
    imgSrc: string;
    imgAlt: string,
    date: string;
    description: string;
}

export const whoNewsroom: Ref<NewsItem[]> = ref([

    // 1. Penn Petro Energy and new orleans score big at the big game
    {
        id: 1,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/3684122/pexels-photo-3684122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Man Wearing Blue Shirt Looking on Ball",
        date: "March 24, 2025",
        description: "Penn Petro Energy and new orleans score big at the big game"
    },

    // 2. Penn Petro Energy responds to Los angeles county wildfires
    {
        id: 2,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/27404517/pexels-photo-27404517/free-photo-of-a-large-steel-tank-with-red-stairs-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "A large steel tank with red stairs and a blue sky",
        date: "April 21, 2025",
        description: "Penn Petro Energy responds to Los angeles county wildfires"
    },    

    // 3. Twenty years and running
    {
        id: 3,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/6767962/pexels-photo-6767962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Panoramic View of Oil Refinery",
        date: "February 24, 2025",
        description: "Twenty years and running"
    },

    // 4. A legacy of commitment and community
    {
        id: 6,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/11264965/pexels-photo-11264965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Man in Blue Suit Holding a Globe",
        date: "February 07, 2025",
        description: "A legacy of commitment and community"
    },    

    // 5. Preserving a threatened turtle species
    {
        id: 5,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Offshore Drilling Rig on Body of Water",
        date: "February 05, 2025",
        description: "Preserving a threatened turtle species",
    },

    // 6. Empowering young athletes: Penn Petro Energy championship drives girls' golf forward
    {
        id: 6,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/9207378/pexels-photo-9207378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Woman in White T-shirt and Blue Denim Shorts Holding Golf Club",
        date: "April 17, 2025",
        description: "Empowering young athletes: Penn Petro Energy championship drives girls' golf forward"
    }

    

]);

