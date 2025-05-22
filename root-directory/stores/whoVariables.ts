
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

export const boardOfDir = ref([

    // Stephen Gary Lunn – Chairman',
    {
        id: 1,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Michael K. (Mike) Wirth wearing White Dress Shirt and Black Blazer',
         title: 'Stephen Gary Lunn – Chairman',
        description: "Stephen Lunn was appointed Chairman of Penn Petro Energy PLC in September 2024. With an extensive background in corporate governance and senior leadership roles across the energy sector, he brings strategic oversight and board-level expertise to the company. His guidance supports Penn Petro’s long-term growth and shareholder value creation."
    },

    // 2. Robert Martin Menzel – Chief Executive Officer & Executive Director
    {
        id: 2,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Robert Martin Menzel – Chief Executive Officer & Executive Director in Collared Shirt',
        title: 'Robert Martin Menzel – Chief Executive Officer & Executive Director',
        description: "Robert Menzel was appointed CEO and Executive Director in January 2025. He has over two decades of leadership experience in global energy operations and infrastructure development. Known for his operational excellence and strategic foresight, Robert leads the company’s executive management and global expansion initiatives."
    },

    // 3. Olof Nils Anders Rapp – Non-Executive Director
    {
        id: 3,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Olof Nils Anders Rapp – Non-Executive Director wearing White Dress Shirt and Black Blazer',
        title: 'Olof Nils Anders Rapp – Non-Executive Director',
        description: "Olof Rapp has served as a Non-Executive Director since 2016. With a background in international business and energy sector advisory, Olof provides independent insight and governance to the board. He supports the company’s compliance, risk management, and international partnerships."
    },
]);

