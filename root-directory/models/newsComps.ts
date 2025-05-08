
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


export const newsComps: Ref<NewsItem[]> = ref([

    // 1. Delivering first oil while lowering development costs
    {
        id: 1,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/27404517/pexels-photo-27404517/free-photo-of-a-large-steel-tank-with-red-stairs-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "A large steel tank with red stairs and a blue sky",
        date: "April 21, 2025",
        description: "Delivering first oil while lowering development costs"
    },

    // 2. Empowering young athletes: Penn Petro Energy drives girls' golf forward
    {
        id: 2,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/9207378/pexels-photo-9207378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Woman in White T-shirt and Blue Denim Shorts Holding Golf Club",
        date: "April 17, 2025",
        description: "Empowering young athletes: Penn Petro Energy drives girls' golf forward"
    },

    // 3. Fueling colorado while striving to protect what makes it home
    {
        id: 3,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/6767962/pexels-photo-6767962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Panoramic View of Oil Refinery",
        date: "April 01, 2025",
        description: "Fueling colorado while striving to protect what makes it home"
    },

    // 4. Penn Petro Energy and new orleans score big at the big game
    {
        id: 4,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/3684122/pexels-photo-3684122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Man Wearing Blue Shirt Looking on Ball",
        date: "March 24, 2025",
        description: "Penn Petro Energy and new orleans score big at the big game"
    },

    // 5. Decommissioned platform transforms into reef
    {
        id: 5,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Offshore Drilling Rig on Body of Water",
        date: "March 19, 2025",
        description: "Decommissioned platform transforms into reef"
    },

    // 6. Penn Petro Energy leaders share their vision for the future at CERAWeek 2025
    {
        id: 6,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/11264965/pexels-photo-11264965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Man in Blue Suit Holding a Globe",
        date: "March 24, 2025",
        description: "Penn Petro Energy leaders share their vision for the future at CERAWeek 2025"
    }

]);

