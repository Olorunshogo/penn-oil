
//          Contact Page Important Information
// // Job Openings
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

// // Scams
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

// // Pipelines
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

// // Credit card
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

// // Request Database
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

// // Donation Request
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

// // Fuels Technical
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

// // Financial Publication
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

// // Lubricants Technical
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

// // Lubricants Where
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

// // Mobile App
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

// // Supplier Relations
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

interface Topic {
    name: string
    subtopics: string[]
}

export const topics: Topic[] = [
    // Select Topic
    { 
        name: 'Select Topic', 
        subtopics: [] 
    },
    // // Service Stations
    // { 
    //     name: 'Service Stations', 
    //     subtopics: [] 
    // },
    // // MSDS
    // { 
    //     name: 'MSDS', 
    //     subtopics: [] 
    // },
    // Products
    { 
        name: 'Products', 
        subtopics: ['Fuels', 'Lubricants', 'Where to Buy', 'Chemicals', 'Aviation', 'Diesel', 'Crude Oil'] 
    },
    // Research
    { 
        name: 'Research', 
        subtopics: ['Historical Research', 'Climate Change', 'Greenhouse Gas', 'Environment, Social and Governance'] 
    },
    // Jobs, Internships and Employment
    { 
        name: 'Jobs, Internships and Employment', 
        subtopics: ['Retirement & Benefits', 'Employment', 'Internship', 'Employment Verification'] 
    },
    // Pipelines
    { 
        name: 'Pipelines', 
        subtopics: [] 
    },
    // Unclaimed Property
    { 
        name: 'Unclaimed Property', 
        subtopics: [] 
    },
    // Media Relations
    { 
        name: 'Media Relations', 
        subtopics: [] 
    },
    // Investor Relations
    { 
        name: 'Investor Relations', 
        subtopics: [] 
    },
    // Sponsorships & Donations
    { 
        name: 'Sponsorships & Donations', 
        subtopics: ['Grants', 'Donations', 'Sponsorship', 'Human Kind'] 
    },
    // Fraud
    { 
        name: 'Fraud', 
        subtopics: ['Employment Scam', 'Station Fraud'] 
    },
    // Vendor Inquiry
    { 
        name: 'Vendor Inquiry', 
        subtopics: ['New Business Inquiry', 'Supplier Diversity Program', 'Crude Oil', '1099 Forms', 'Accounts Payable'] 
    },
    // Supply and Trading
    { 
        name: 'Supply and Trading', 
        subtopics: [] 
    },
    // Credit card & Gift Cards
    { 
        name: 'Credit card & Gift Cards', 
        subtopics: ['Credit Card', 'Gift Card'] 
    },
    // Land & Leasing Opportunities
    { 
        name: 'Land & Leasing Opportunities', 
        subtopics: [] 
    },
    // Accessibility
    { 
        name: 'Accessibility', 
        subtopics: [] 
    },
    // Privacy
    { 
        name: 'Privacy', 
        subtopics: [] 
    },
    // Terms of Use
    { 
        name: 'Terms of Use', 
        subtopics: [] 
    },
    // Unsubscribe from Email
    { 
        name: 'Unsubscribe from Email', 
        subtopics: [] 
    },

]

export const selectInputFields = ref([
    // Topic
    {
        label: 'Topic',
        id: 'topic',
        name: 'topic',
        modelKey: 'selectedTopic',
        error: '',
        required: true,
        ariaDescribedby: 'topics'
    },

    {
        label: 'Subtopic',
        id: 'subtopic',
        name: 'subtopic',
        modelKey: 'selectedSubtopic',
        error: '',
        required: false,
        ariaDescribedby: 'subtopics'
    },
])

export const textInputFields = ref([
    // First name
    {
        label: 'First name',
        type: 'text',
        placeholder: 'First name',
        id: 'firstName',
        name: 'firstname',
        disabled: false,
        required: true,
        displayAsterik: true,
        displayError: false,
        error: 'Please input your full name',
        ariaDescribedby: 'first name',
        valueKey: 'firstName'
    },

    // Last name
    {
        label: 'Last name',
        type: 'text',
        placeholder: 'Last name',
        id: 'lastName',
        name: 'lastName',
        disabled: false,
        required: false,
        displayAsterik: false,
        displayError: false,
        error: 'Please input your last name',
        ariaDescribedby: 'last name',
        valueKey: 'lastName'
    },

    // Email
    {
        label: 'Email',
        type: 'email',
        placeholder: '',
        id: 'email',
        name: 'email',
        disabled: false,
        required: true,
        displayAsterik: true,
        displayError: false,
        error: 'Please enter a valid email address',
        ariaDescribedby: 'email',
        valueKey: 'email'
    }
])




// FORM
export const textFieldValues = reactive({
    firstName: '',
    lastName: '',
    email: '',
    newsletter: false,
    comments: ''
})
<<<<<<< HEAD
=======




// const form = ref({ name: '', email: '', message: '' })

// async function submitForm() {
//     try {
//         const res = await fetch('/api/submit-form', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(form.value)
//         });
//         const data = await res.json()
//         if (data.success) {
//             alert('Form submitted!')
//         } else {
//             alert('Submission failed.')
//         }
//     } catch (err) {
//         console.error(err)
//         alert('Error submitting form.')
//     }
// }
>>>>>>> 2b9387f7857f67d96bf76691c0d208fbe075f284
