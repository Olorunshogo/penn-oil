
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
        link: "/sustainability/social",
        imgSrc: "https://images.pexels.com/photos/27404517/pexels-photo-27404517/free-photo-of-a-large-steel-tank-with-red-stairs-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "A large steel tank with red stairs and a blue sky",
        date: "April 21, 2025",
        description: "Delivering first oil while lowering development costs"
    },

    // 2. Empowering young athletes: Penn Petro Energy drives girls' golf forward
    {
        id: 2,
        link: "/sustainability/social",
        imgSrc: "https://images.pexels.com/photos/9207378/pexels-photo-9207378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Woman in White T-shirt and Blue Denim Shorts Holding Golf Club",
        date: "April 17, 2025",
        description: "Empowering young athletes: Penn Petro Energy drives girls' golf forward"
    },

    // 3. Fueling colorado while striving to protect what makes it home
    {
        id: 3,
        link: "/what/energy",
        imgSrc: "https://images.pexels.com/photos/6767962/pexels-photo-6767962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Panoramic View of Oil Refinery",
        date: "April 01, 2025",
        description: "Fueling colorado while striving to protect what makes it home"
    },

    // 4. Penn Petro Energy and new orleans score big at the big game
    {
        id: 4,
        link: "/sustainability/social",
        imgSrc: "https://images.pexels.com/photos/3684122/pexels-photo-3684122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Man Wearing Blue Shirt Looking on Ball",
        date: "March 24, 2025",
        description: "Penn Petro Energy and new orleans score big at the big game"
    },

    // 5. Decommissioned platform transforms into reef
    {
        id: 5,
        link: "/what/penn",
        imgSrc: "https://images.pexels.com/photos/87236/pexels-photo-87236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Offshore Drilling Rig on Body of Water",
        date: "March 19, 2025",
        description: "Decommissioned platform transforms into reef"
    },

    // 6. Penn Petro Energy leaders share their vision for the future at CERAWeek 2025
    {
        id: 6,
        link: "/who/leadership",
        imgSrc: "https://images.pexels.com/photos/11264965/pexels-photo-11264965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imgAlt: "Man in Blue Suit Holding a Globe",
        date: "March 24, 2025",
        description: "Penn Petro Energy leaders share their vision for the future at CERAWeek 2025"
    }

]);

// Data definition
interface InvestorsEventItem {
    [x: string]: PropertyKey | undefined;   

    heading: string;
    date: string;
    link: string;
    linkName: string;
}

export const investorsEvent: Ref<InvestorsEventItem[]> = ref([
    // 1. 1Q 2025 Penn Petro Energy earnings conference call
    {
        id: 1,
        heading: '1Q 2025 Penn Petro Energy earnings conference call',
        date: 'May 02, 2025',
        link: '/investors/events',
        linkName: 'View event details'
    },

    // 2. Consolidated previous guidance and company statements
    {
        id: 2,
        heading: 'Consolidated previous guidance and company statements',
        date: 'May 28, 2025',
        link: '/investors/events',
        linkName: 'View document'
    },

    // 3. Current Investor presentation
    {
        id: 3,
        heading: 'Current Investor presentation',
        date: 'February 26, 2025',
        link: '/investors/events',
        linkName: 'View presentation'
    },

    // 4. 4Q 2024 Penn Petro Energy earnings conference call
    {
        id: 4,
        heading: '4Q 2024 Penn Petro Energy earnings conference call',
        date: 'January 31, 2025',
        link: '/investors/events',
        linkName: 'View details'
    },

    // 5. Goldman sachs energy, cleantech & utilities conference
    {
        id: 5,
        heading: 'Goldman sachs energy, cleantech & utilities conference',
        date: 'January 08, 2025',
        link: '/investors/events',
        linkName: 'View details'
    },

    // 6. 3Q 2024 Penn Petro Energy earnings conference call
    {
        id: 6,
        heading: '3Q 2024 Penn Petro Energy earnings conference call',
        date: 'November 01, 2024',
        link: '/investors/events',
        linkName: 'View event details'
    },

    // 2. 3Q 2024 Penn Petro Energy earnings conference call
    {
        id: 7,
        heading: '2Q 2024 Penn Petro Energy earnings conference call',
        date: 'August 02, 2024',
        link: '/investors/events',
        linkName: 'View event details'
    },

    // 8. 1Q 2024 Penn Petro Energy earnings conference call
    {
        id: 8,
        heading: '1Q 2024 Penn Petro Energy earnings conference call',
        date: 'April 26, 2024',
        link: '/investors/events',
        linkName: 'View event details'
    },

    // 9. 4Q 2023 Penn Petro Energy earnings conference call
    {
        id: 9,
        heading: '4Q 2023 Penn Petro Energy earnings conference call',
        date: 'February 02, 2024',
        link: '/investors/events',
        linkName: 'View event details'
    },

    // 10. 3Q 2023 Penn Petro Energy earnings conference call
    {
        id: 10,
        heading: '3Q 2023 Penn Petro Energy earnings conference call',
        date: 'October 27, 2023',
        link: '/investors/events',
        linkName: 'View event details'
    },

    // 11. Penn Petro Energy announces agreement to acquire hess
    {
        id: 11,
        heading: 'Penn Petro Energy announces agreement to acquire hess',
        date: 'October 23, 2023',
        link: '/investors/events',
        linkName: 'View event details'
    },

    // 12. 3Q 2024 Penn Petro Energy earnings conference call
    {
        id: 12,
        heading: '2Q 2023 Penn Petro Energy earnings conference call',
        date: 'September 01, 2023',
        link: '/investors/events',
        linkName: 'View event details'
    }
]);

