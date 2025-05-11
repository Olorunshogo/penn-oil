
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

    // 1. Michael K. (Mike) Wirth
    {
        id: 1,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Michael K. (Mike) Wirth wearing White Dress Shirt and Black Blazer',
        linkName: 'Michael K. (Mike) Wirth',
        link: '/',
        description: "Chairman of the Board and Chief Executive Officer"
    },

    // 2. Wanda M. Austin
    {
        id: 2,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Wanda M. Austin in Collared Shirt',
        linkName: 'Wanda M. Austin',
        link: '/',
        description: "Lead Director; Retired President and Chief Executive Officer, The Aerospace Corporation"
    },

    // 3. John B. Frank
    {
        id: 3,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'John B. Frank wearing White Dress Shirt and Black Blazer',
        linkName: 'John B. Frank',
        link: '/',
        description: "Vice Chairman, Oaktree Capital Group, LLC"
    },

    // 4. Alice P. Gast
    {
        id: 4,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Alice P. Gast in Collared Shirt',
        linkName: 'Alice P. Gast',
        link: '/',
        description: "Retired President and Professor Emeritus of Chemical Engineering, Imperial College London"
    },

    // 5. Enrique Hernandez, Jr. 
    {
        id: 5,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Enrique Hernandez, Jr.  wearing White Dress Shirt and Black Blazer',
        linkName: 'Enrique Hernandez, Jr. ',
        link: '/',
        description: "Executive Chairman, Inter-Con Security Systems, Inc."
    },

    // 6. Marillyn A. Hewson
    {
        id: 6,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Marillyn A. Hewson in Collared Shirt',
        linkName: 'Marillyn A. Hewson',
        link: '/',
        description: "Retired Chairman, President and Chief Executive Officer, Lockheed Martin Corporation"
    },

    // 7. Jon M. Huntsman, Jr. 
    {
        id: 7,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Jon M. Huntsman, Jr.  wearing White Dress Shirt and Black Blazer',
        linkName: 'Jon M. Huntsman, Jr. ',
        link: '/',
        description: "Vice Chairman and President, Strategic Growth, Mastercard Incorporated"
    },

    // 8. Charles W. Moorman 
    {
        id: 8,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Charles W. Moorman wearing White Dress Shirt and Black Blazer',
        linkName: 'Charles W. Moorman',
        link: '/',
        description: "Former Senior Advisor to Amtrak and Retired Chairman and Chief Executive Officer, Norfolk Southern Corporation"
    },

    // 9. Damisa F. Moyo
    {
        id: 9,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Damisa F. Moyo in Collared Shirt',
        linkName: 'Damisa F. Moyo',
        link: '/',
        description: "Co-principal, Versaca Investments"
    },

    // 10. Debra Reed-Klages
    {
        id: 10,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Debra Reed-Klages in Collared Shirt',
        linkName: 'Debra Reed-Klages',
        link: '/',
        description: "Retired Chairman, President and Chief Executive Officer, Lockheed Martin Corporation"
    },

    // 11. D. James Umpleby III
    {
        id: 11,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'D. James Umpleby III wearing White Dress Shirt and Black Blazer',
        linkName: 'D. James Umpleby III',
        link: '/',
        description: "Executive Chairman, Caterpillar Inc."
    },

    // 12. Cynthia J. Warner
    {
        id: 12,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Cynthia J. Warner in Collared Shirt',
        linkName: 'Cynthia J. Warner',
        link: '/',
        description: "Former President and Chief Executive Officer, Renewable Energy Group, Inc"
    },
]);

export const corporateOfficers = ref([

    // 1. Michael K. (Mike) Wirth
    {
        id: 1,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Michael K. (Mike) Wirth wearing White Dress Shirt and Black Blazer',
        linkName: 'Michael K. (Mike) Wirth',
        link: '/',
        description: "Chairman of the Board and Chief Executive Officer"
    },

    // 2. Paul R. Antebi
    {
        id: 2,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Paul R. Antebi wearing White Dress Shirt and Black Blazer',
        linkName: 'Paul R. Antebi',
        link: '/',
        description: "Vice President and General Tax Counsel"
    },

    // 3. Marissa Badenhorst
    {
        id: 3,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Marissa Badenhorst in Collared Shirt',
        linkName: 'Marissa Badenhorst',
        link: '/',
        description: "Vice President, Health, Safety and Environment"
    },

    // 4. Elmear P. Bonner
    {
        id: 4,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Elmear P. Bonner in Collared Shirt',
        linkName: 'Elmear P. Bonner',
        link: '/',
        description: "Vice President and Chief Financial Officer"
    },

    // 5. Mary A. Francis
    {
        id: 5,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Mary A. Francis in Collared Shirt',
        linkName: 'Mary A. Francis',
        link: '/',
        description: "Corporate Secretary and Chief Governance Office"
    },

    // 6. Michelle R. Green
    {
        id: 6,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Michelle R. Green in Collared Shirt',
        linkName: 'Michelle R. Green',
        link: '/',
        description: "Vice President and Chief Human Resources Officer"
    },

    // 7. Jeff B. Gustavson
    {
        id: 7,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Jeff B. Gustavson wearing White Dress Shirt and Black Blazer',
        linkName: 'Jeff B. Gustavson',
        link: '/',
        description: "Vice President, Lower Carbon Energies"
    },

    // 8. Alana K. Knowles
    {
        id: 8,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Alana K. Knowles in Collared Shirt',
        linkName: 'Alana K. Knowles',
        link: '/',
        description: "Vice President and Controller"
    },

    // 9. Molly T. Laegeler
    {
        id: 9,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Molly T. Laegeler in Collared Shirt',
        linkName: 'Molly T. Laegeler',
        link: '/',
        description: "Vice President, Strategy & Sustainability"
    },

    // 10. Laura J. Lane
    {
        id: 10,
        imgSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Laura J. Lane in Collared Shirt',
        linkName: 'Laura J. Lane',
        link: '/',
        description: "Vice President and Chief Corporate Affairs Officer"
    },

    // 11. Navin K. Mahajan
    {
        id: 11,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Navin K. Mahajan wearing White Dress Shirt and Black Blazer',
        linkName: 'Navin K. Mahajan',
        link: '/',
        description: "Vice President and Treasurer"
    },

    // 12. Frank W. Mount
    {
        id: 12,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Frank W. Mount wearing White Dress Shirt and Black Blazer',
        linkName: 'Frank W. Mount',
        link: '/',
        description: "Vice President, Corporate Business Development"
    },

    // 13. Mark A. Nelson
    {
        id: 13,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'Mark A. Nelson wearing White Dress Shirt and Black Blazer',
        linkName: 'Mark A. Nelson',
        link: '/',
        description: "Vice Chairman"
    },

    // 14. R. Hewitt Page
    {
        id: 14,
        imgSrc: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imgAlt: 'R. Hewitt Page wearing White Dress Shirt and Black Blazer',
        linkName: 'R. Hewitt Page',
        link: '/',
        description: "Vice President and General Counsel"
    },
]);


//          Contact Page Important Information
// Job Openings
export const jobOpenings = ref<boolean>(false);
export function toggleJobOpenings() {
    jobOpenings.value = !jobOpenings.value;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Service Station
export const serviceStation = ref<boolean>(false);
export function toggleServiceStation() {
    jobOpenings.value = false;
    serviceStation.value = !serviceStation.value;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Scams
export const scams = ref<boolean>(false);
export function toggleScams() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = !scams.value;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Pipelines
export const pipelines = ref<boolean>(false);
export function togglePipelines() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = !pipelines.value;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Credit card
export const creditCard = ref<boolean>(false);
export function toggleCreditCard() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = !creditCard.value;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Request Database
export const requestDb = ref<boolean>(false);
export function toggleRequestDb() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = !requestDb.value;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Donation Request
export const donationRequest = ref<boolean>(false);
export function toggleDonationRequest() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = !donationRequest.value;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Fuels Technical
export const fuelsTechnical = ref<boolean>(false);
export function toggleFuelsTechnical() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = !fuelsTechnical.value;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Financial Publication
export const financialPublication = ref<boolean>(false);
export function toggleFinancialPublication() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = !financialPublication.value;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Lubricants Technical
export const lubricantsTechnical = ref<boolean>(false);
export function toggleLubricantsTechnical() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = !lubricantsTechnical.value;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Lubricants Where
export const lubricantsWhere = ref<boolean>(false);
export function toggleLubricantsWhere() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = !lubricantsWhere.value;
    mobileApp.value = false;
    supplierRelations.value = false;
}

// Mobile App
export const mobileApp = ref<boolean>(false);
export function toggleMobileApp() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = !mobileApp.value;
    supplierRelations.value = false;
}

// Supplier Relations
export const supplierRelations = ref<boolean>(false);
export function toggleSupplierRelation() {
    jobOpenings.value = false;
    serviceStation.value = false;
    scams.value = false;
    pipelines.value = false;
    creditCard.value = false;
    requestDb.value = false;
    donationRequest.value = false;
    fuelsTechnical.value = false;
    financialPublication.value = false;
    lubricantsTechnical.value = false;
    lubricantsWhere.value = false;
    mobileApp.value = false;
    supplierRelations.value = !supplierRelations.value;
}

