
import { ref } from "vue";
import type { Ref } from "vue";

// Data definition
interface NewsItem {
    id: number;
    link: string;
    imgSrc: string;
    alt: string;
    date: string;
    description: string;
}


export const newsComps: Ref<NewsItem[]> = ref([

    {
        id: 1,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/2183113/pexels-photo-2183113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Dets",
        date: "April 21, 2025",
        description: "Delivering first oil while lowering development costs"
    },
    {
        id: 2,
        link: "/",
        imgSrc: "",
        alt: "Dosts",
        date: "April 17, 2025",
        description: "Empowering young athletes: Penn Petro Energy drives girls' golf forward"
    },
    {
        id: 3,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/2183113/pexels-photo-2183113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Delts",
        date: "April 01, 2025",
        description: "Fueling colorado while striving to protect what makes it home"
    },
    {
        id: 4,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/2183113/pexels-photo-2183113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "Dests",
        date: "March 24, 2025",
        description: "Penn Petro Energy and new orleans score big at the big game"
    },
    {
        id: 5,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/2183113/pexels-photo-2183113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "s",
        date: "March 19, 2025",
        description: "Decommissioned platform transforms into reef"
    },
    {
        id: 6,
        link: "/",
        imgSrc: "https://images.pexels.com/photos/2183113/pexels-photo-2183113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "ts",
        date: "March 24, 2025",
        description: "Penn Petro Energy leaders share their vision for the future at CERAWeek 2025"
    }

]);

