import { ref } from "vue";
import type { Ref } from "vue";

// Data definition
interface CountryItem {
    id: number;
    flagImgSrc: string;
    flagImgAlt: string,
    flagName: string;
    ctaLink: string;
    ctaName: string;
}


export const pennCountries: Ref<CountryItem[]> = ref([

    // 1. Angola
    {
        id: 1,
        flagImgSrc: '../public/images/Angola.jpeg',
        flagImgAlt: 'Flag of Angola',
        flagName: 'Angola',
        ctaLink: 'https://angola.chevron.com/en/',
        ctaName: 'Visit the angola website',
    },

    // 2. Argentina
    {
        id: 2,
        flagImgSrc: '../public/images/Argentina.jpeg',
        flagImgAlt: 'Flag of Argentina',
        flagName: 'Argentina',
        ctaLink: 'https://www.chevron.com/worldwide/argentina',
        ctaName: 'View our argentina summary',
    },

    // 3. Bangladesh
    {
        id: 3,
        flagImgSrc: '../public/images/Bangladesh.jpg',
        flagImgAlt: 'Flag of Bangladesh',
        flagName: 'Bangladesh',
        ctaLink: 'https://bangladesh.chevron.com/',
        ctaName: 'Visit the bangladesh website',
    },

    // 4. Brazil
    {
        id: 4,
        flagImgSrc: '../public/images/Brazil.jpeg',
        flagImgAlt: 'Flag of Brazil',
        flagName: 'Brazil',
        ctaLink: 'https://bangladesh.chevron.com/',
        ctaName: 'Visit the brazil website',
    },

    // 5. Cambodia
    {
        id: 5,
        flagImgSrc: '../public/images/Cambodia.png',
        flagImgAlt: 'Flag of Cambodia',
        flagName: 'Cambodia',
        ctaLink: 'https://www.chevron.com/worldwide/cambodia',
        ctaName: 'Visit our cambodia summary',
    },

    // 6. Canada
    {
        id: 6,
        flagImgSrc: '../public/images/Canada.jpeg',
        flagImgAlt: 'Flag of Canada',
        flagName: 'Canada',
        ctaLink: 'https://canada.chevron.com/',
        ctaName: 'Visit the canada website',
    },

    // 7. China
    {
        id: 7,
        flagImgSrc: '../public/images/China.jpg',
        flagImgAlt: 'Flag of China',
        flagName: 'China',
        ctaLink: 'https://china.chevron.com/',
        ctaName: 'Visit the china website',
    },

    // 8. France
    {
        id: 8,
        flagImgSrc: '../public/images/France.png',
        flagImgAlt: 'Flag of France',
        flagName: 'France',
        ctaLink: 'https://www.oronite.com/france-fr.html',
        ctaName: 'View our france summary',
    },

    // 9. Colombia
    {
        id: 9,
        flagImgSrc: '../public/images/Colombia.png',
        flagImgAlt: 'Flag of Colombia',
        flagName: 'Colombia',
        ctaLink: 'https://www.chevron.com/worldwide/colombia',
        ctaName: 'View our colombia summary',
    },

    // 10. India
    {
        id: 10,
        flagImgSrc: '../public/images/India.png',
        flagImgAlt: 'Flag of India',
        flagName: 'India',
        ctaLink: 'https://www.chevron.com/worldwide/india',
        ctaName: 'View our india summary',
    },

    // 11. Indonesia
    {
        id: 11,
        flagImgSrc: '../public/images/Indonesia.png',
        flagImgAlt: 'Flag of Indonesia',
        flagName: 'Indonesia',
        ctaLink: 'https://indonesia.chevron.com/en/',
        ctaName: 'Visit the Indonesia website',
    },

    // 12. Israel
    {
        id: 12,
        flagImgSrc: '../public/images/Israel.png',
        flagImgAlt: 'Flag of Israel',
        flagName: 'Israel',
        ctaLink: 'https://israel.chevron.com/en',
        ctaName: 'View the israel website',
    },

    // 13. Kazakhstan
    {
        id: 13,
        flagImgSrc: '../public/images/Kazakhstan.png',
        flagImgAlt: 'Flag of Kazakhstan',
        flagName: 'Kazakhstan',
        ctaLink: 'https://www.chevron.com/worldwide/kazakhstan',
        ctaName: 'Visit our kazakhstan summary',
    },

    // 14. Kuwait
    {
        id: 14,
        flagImgSrc: '../public/images/Kuwait.png',
        flagImgAlt: 'Flag of Kuwait',
        flagName: 'Kuwait',
        ctaLink: 'https://www.chevron.com/worldwide/kuwait',
        ctaName: 'View our kuwait summary',
    },

    // 15. Malaysia
    {
        id: 15,
        flagImgSrc: '../public/images/Malaysia.png',
        flagImgAlt: 'Flag of Malaysia',
        flagName: 'Malaysia',
        ctaLink: 'https://www.chevron.com/worldwide/malaysia',
        ctaName: 'Visit our malaysia summary',
    },

    // 16. Netherlands
    {
        id: 16,
        flagImgSrc: '../public/images/Netherland.jpeg',
        flagImgAlt: 'Flag of Netherlands',
        flagName: 'Netherlands',
        ctaLink: 'https://www.chevron.com/worldwide/netherlands',
        ctaName: 'View our netherlands summary',
    },

    // 17. Nigeria
    {
        id: 17,
        flagImgSrc: '../public/images/Nigeria.png',
        flagImgAlt: 'Flag of Nigeria',
        flagName: 'Nigeria',
        ctaLink: 'https://www.chevron.com/worldwide/nigeria',
        ctaName: 'Visit our nigeria summary',
    },

    // 18. Philippines
    {
        id: 18,
        flagImgSrc: '../public/images/Philippines.png',
        flagImgAlt: 'Flag of Philippines',
        flagName: 'Philippines',
        ctaLink: 'https://www.chevron.com/worldwide/philippines',
        ctaName: 'View our philippines summary',
    },

    // 19. Saudi Arabia
    {
        id: 19,
        flagImgSrc: '../public/images/Saudi_Arabia.png',
        flagImgAlt: 'Flag of Saudi Arabia',
        flagName: 'Saudi Arabia',
        ctaLink: 'https://www.chevron.com/worldwide/saudi-arabia',
        ctaName: 'Visit our saudi arabia summary',
    },

    // 20. Singapore
    {
        id: 20,
        flagImgSrc: '../public/images/Singapore.png',
        flagImgAlt: 'Flag of Singapore',
        flagName: 'Singapore',
        ctaLink: 'https://www.chevron.com/worldwide/philippines',
        ctaName: 'View our Singapore summary',
    },

    // 21. South Korea
    {
        id: 21,
        flagImgSrc: '../public/images/South_Korea.png',
        flagImgAlt: 'Flag of South Korea',
        flagName: 'South Korea',
        ctaLink: 'https://www.chevron.com/worldwide/south-korea',
        ctaName: 'Visit our south korea summary',
    },

    // 22. Sri Lanka
    {
        id: 22,
        flagImgSrc: '../public/images/Sri_lanka.png',
        flagImgAlt: 'Flag of Sri Lanka',
        flagName: 'Sri Lanka',
        ctaLink: 'http://chevron.lk/',
        ctaName: 'Visit the sri lanka website',
    },

    // 23. Thailand
    {
        id: 23,
        flagImgSrc: '../public/images/Argentina.jpeg',
        flagImgAlt: 'Flag of Thailand',
        flagName: 'Thailand',
        ctaLink: 'https://thailand.chevron.com/en/',
        ctaName: 'Visit the thailand website',
    },

    // 24. United Kingdom
    {
        id: 24,
        flagImgSrc: '../public/images/United_Kingdom.png',
        flagImgAlt: 'Flag of United Kingdom',
        flagName: 'United Kingdom',
        ctaLink: 'https://www.chevron.com/worldwide/united-kingdom',
        ctaName: 'View our united kingdom summary',
    },

    // 25. United States
    {
        id: 24,
        flagImgSrc: '../public/images/United_States.png',
        flagImgAlt: 'Flag of United States',
        flagName: 'United States',
        ctaLink: 'https://www.chevron.com/worldwide/united-states',
        ctaName: 'View our united states summary',
    },

    // 26. Venezuela
    {
        id: 24,
        flagImgSrc: '../public/images/Venezuela.webp',
        flagImgAlt: 'Flag of Venezuela',
        flagName: 'Venezuela',
        ctaLink: 'https://www.chevron.com/worldwide/venezuela',
        ctaName: 'View our venezuela summary',
    },

]);
