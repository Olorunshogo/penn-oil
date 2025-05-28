
<script setup>
    import { useHead } from 'nuxt/app';
    import { ref, computed } from 'vue';

    useHead({
        title: 'Contact Information',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Contact Pennpetro Energy PLC | Get in Touch Today',
        ogTitle: 'Reach Out to Pennpetro Energy PLC',
        description: 'Have questions or inquiries? Contact Pennpetro Energy PLC to learn more about our services, partnerships, or career opportunities.',
        ogDescription: 'Get in touch with Pennpetro Energy PLC. Whether you’re a partner, job seeker, or investor, we’re here to connect with you.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Pennpetro Energy PLC headquarters and team members in a meeting.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/contact',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Contact Pennpetro Energy PLC | We’re Here to Help',
        twitterDescription: 'Reach out to our team at Pennpetro Energy PLC for inquiries about careers, investments, media, and more. Let’s connect.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Contact Pennpetro Energy PLC, energy company contact, oil and gas inquiries, sustainability partnerships, investor contact, energy sector communication, Penn Petro support',
    });

    import { 
        jobOpenings, toggleJobOpenings,
        serviceStation, toggleServiceStation,
        scams, toggleScams,
        pipelines, togglePipelines,
        creditCard, toggleCreditCard,
        requestDb, toggleRequestDb,
        donationRequest, toggleDonationRequest,
        fuelsTechnical, toggleFuelsTechnical,
        financialPublication, toggleFinancialPublication,
        lubricantsTechnical, toggleLubricantsTechnical,
        lubricantsWhere, toggleLubricantsWhere,
        mobileApp, toggleMobileApp,
        supplierRelations, toggleSupplierRelation,

        topics,
        selectInputFields,
        textInputFields,
    } from '~/models/contact';

    // FORM
    const selectedTopic = ref('Fraud');
    const selectedSubtopic = ref('Employment Fraud'); 

    // Based on the value selectedTopic, compute selectedOptions
    const subtopicOptions = computed(() => {
        const topic = topics.find(t => t.name === selectedTopic.value);
        if (!topic || !topic.subtopics || topic.subtopics.length === 0) {
            return [{ label: 'No subtopics available', value: '' }];
        }
        return topic.subtopics.map(name => ({ label: name, value: name }));
    });


    watch(selectedTopic, () => {
        selectedSubtopic.value = '';
    })

    const textFieldValues = reactive({
        firstName: '',
        lastName: '',
        email: '',
        newsletter: false,
        comments: ''
    })

    const success = ref(false);
    const error = ref('');

    async function submitForm() {
        success.value = false
        error.value = ''

        const payload = {
            topic: selectedTopic.value,
            subtopic: selectedSubtopic.value,
            firstName: textFieldValues.firstName,
            lastName: textFieldValues.lastName,
            email: textFieldValues.email,
            newsletter: textFieldValues.newsletter ? 'Yes' : 'No',
            comments: textFieldValues.comments
        }

        try {
            const { data, error: fetchError } = await useFetch('https://formsubmit.co/ajax/info@pennpetroenergy.com', {
                method: 'POSt',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(payload)
            })

            if (fetchError.value) {
                throw new Error(fetchError.value.message)
            }

            console.log('The form submitted successfully', data.value)
            // alert('The form submitted successfully', data.value)
            //alert('Form submitted successfully!\n\Server Response:\n' + JSON.stringify(data.value, null, 2))

            success.value = true

            selectedTopic.value = ''
            selectedSubtopic.value = ''
            Object.assign(textFieldValues, {
                firstName: '',
                lastName: '',
                email: '',
                comments: '',
                newsletter: false
            })

            
            // success.value = true
        } catch (error) {
            console.error('Form Submission failed:', error.message)
            alert('Form submission failed. Please try again:', error.message)
            error.value = 'Failed to submit form. Please try again later.'
            success.value = ''
        }
    }

</script>


<template>
    <div>
        <!-- Section: Contact Page -->
        <section>
            <div class="grid bg-(--white) gap-12 w-full h-full overflow-hidden py-(--section-py) lg:py-(--section-py-lg)">
                
                <div class="flex flex-col gap-12 items-center justify-center max-w-7xl mx-auto">

                    <div class="flex flex-col gap-4 items-center justify-center py-12 w-full mx-auto">
                        <h2 class="text-(--dark-blue) text-center font-extrabold text-3xl sm:text-4xl lg:text-7xl">
                            Contact Pennpetro Energy PLC
                        </h2>
                        <p class="text-(--black) text-lg font-medium text-center">
                            Find answers to your questions and useful contacts.
                        </p>                
                    </div> 

                    <!-- Important Information -->
                    <div class="flex flex-col gap-20 items-center justify-center w-full mx-auto max-w-4xl">
                        <h2 class="text-(--dark-blue) text-center font-extrabold text-2xl sm:text-3xl lg:text-4xl">
                            Important Information
                        </h2>

                        <div class="flex flex-col gap-0 *:px-4 w-9/10 mx-auto h-full bg-(--light-gray)/40">

                            <!-- Job Openings -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">                                                                                               
                                    
                                <button 
                                    @click="toggleJobOpenings"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex text-base">Job Openings</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex text-lg text-(--dark-blue) font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : jobOpenings }"
                                    />
                                </button>
                          
                                <Transition name="slide-down">
                                    <div 
                                        v-if="jobOpenings"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>Open jobs at Pennpetro Energy PLC are available for review and application at our Pennpetro Energy PLC careers page.</p>
                                                <p>Resumes sent to the general mailbox will not be considered and requests for status updates to applications will not be provided.</p>
                                            </div>

                                            <!-- Visit Penn career -->
                                            <NuxtLink
                                                to="/careers"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Visit Penn careers</span>
                                                </span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </Transition>
                            </div>

                            <!-- Service Station Inquiries -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">                                                                 
                                <button 
                                    @click="toggleServiceStation"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Service Station inquiries</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex text-lg text-(--dark-blue) font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : serviceStation }"
                                    />
                                </button>
                                <Transition name="slide-down">
                                    <div 
                                        v-if="serviceStation"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>We welcome your feedback and inquiries about any of our service stations. Customer service representatives are available between the hours of 7 a.m. to 7 p.m. CT, Monday through Friday.</p>
                                                
                                                <div>
                                                    <span class="font-bold">Head office: </span>6 Heddon Street London,<br>
                                                    W1B 4BT,<br>
                                                    United Kingdom
                                                </div>
                                                <span class="flex items-center gap-2">
                                                    <span class="flex">Toll-free:</span>
                                                    <NuxtLink
                                                        to="tel:+447700105171"
                                                        target="_blank"
                                                        class="decoration-1 underline-offset-2 underline decoration-(--light-gray) hover:decoration-(--dark-gray) duration-300 ease-in-out transition-all"
                                                    >
                                                        +44 7700 105171
                                                    </NuxtLink>
                                                </span>
                                            </div>

                                            <!-- Submit an inquiry online -->
                                            <NuxtLink
                                                to="/careers"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Submit an inquiry online</span>
                                                </span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </Transition>
                            </div>

                            <!-- Scams -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <button 
                                    @click="toggleScams"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Scams</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : scams }"
                                    />
                                </button>
                              

                                <Transition name="slide-own">
                                    <div 
                                        v-if="scams"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>
                                                    Individuals claiming to represent Penn Petro Evergy have engaged in fraudulent transactions. 
                                                    Pennpetro Energy PLC informs law enforcement when these activities occur, but perpetrators are hard to locate and prosecute. 
                                                    Report any such offers to the appropriate authorities. We regret any inconvenience caused. 
                                                    Below are examples of common frauds; new ones are frequently reported.
                                                </p>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Pennpetro Energy PLC and texaco promotion scam</h4>
                                                    <p>
                                                        Individuals may falsely claim Pennpetro Energy PLC will offer promotional winnings or proceeds after first receiving “insurance payments.” 
                                                        This is called Advance Fee Fraud or 419 Fraud. 
                                                        Pennpetro Energy PLC and its subsidiaries are not associated with these promotions or individuals. 
                                                        These offers are not valid.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Pennpetro Energy PLC online endowment fund award scam</h4>
                                                    <p>
                                                        Individuals claiming to represent the Pennpetro Energy PLC Online Endowment Award Fund (COEFA) will offer fraudulent cash prizes, asking victims to first fill out forms and send “insurance payments” via check or money order. 
                                                        This is Advance Fee Fraud or 419 Fraud. Pennpetro Energy PLC and its subsidiaries do not offer donations or grants in exchange for insurance payments. 
                                                        These offers are not valid.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Deceased employee inquiry scam</h4>
                                                    <p>
                                                        Individuals falsely claiming to represent the estate of a deceased Pennpetro Energy PLC employee approach victims, claiming there are no heirs. 
                                                        The fraudsters offer to transfer an inheritance for a fee.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Fictitious job offer scam</h4>
                                                    <p>
                                                        Fraudsters claiming to be contracted by Pennpetro Energy PLC may claim they are seeking prospective employees for projects, typically via email. 
                                                        They may also claim to manage a Pennpetro Energy PLC promotion, asking for a simple entry form or “insurance payment.”
                                                    </p>  
                                                    <p>
                                                        Victims are told they've been hired or can get a job with Pennpetro Energy PLC for a fee, which covers employment papers, offers, applications and work permits. 
                                                        Fees are sent via check or money order to a post office box. 
                                                        Promised checks for relocation expenses are fake. 
                                                        This is Advance Fee Fraud or 419 Fraud. Pennpetro Energy PLC does not charge fees for job positions. 
                                                        Report any fraudulent offers to the U.S. Secret Service.
                                                    </p>                                                   
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Grant and donation scam</h4>
                                                    <p>
                                                        Fraudsters claiming to represent Pennpetro Energy PLC or Pennpetro Energy PLC/Texaco Exploration and Production may offer fake cash grants or donations and asking victims to fill out an entry form. 
                                                        Victims may be asked to send an insurance payment via check or money order. 
                                                        This is Advance Fee Fraud or 419 Fraud. 
                                                        Pennpetro Energy PLC and its subsidiaries do not offer donations or grants in exchange for insurance payments. 
                                                        These offers are not valid.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Lottery winner scam</h4>
                                                    <p>
                                                        Individuals may claim to manage a Pennpetro Energy PLC-sponsored lottery, asking participants to fill out an entry form or send an “insurance payment” via check or money order. 
                                                        This is Advance Fee Fraud or 419 Fraud. 
                                                        Pennpetro Energy PLC and its subsidiaries do not offer lottery proceeds in exchange for insurance payments. 
                                                        These offers are not valid.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Procurement scam</h4>
                                                    <p>
                                                        Individuals claiming to represent Pennpetro Energy PLC or a subsidiary may approach vendors, often by email, inviting them to bid on large orders and requesting a qualification fee. 
                                                        This is Advance Fee Fraud or 419 Fraud. Pennpetro Energy PLC does not charge fees for doing business. 
                                                        These offers are not valid. 
                                                        Report such offers to the U.S. Secret Service or your local law enforcement.
                                                    </p>                                                    
                                                </div>
                                                
                                            </div>

                                            <!-- Contact us information about Scams-->
                                            <NuxtLink
                                                to="mailto:pennpetrolenergy@gmail.com"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Contact us information about scams</span>
                                                </span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </Transition>
                            </div>

                            <!-- Pipelines -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">      
                                <button 
                                    @click="togglePipelines"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Pipelines</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : pipelines }"
                                    />
                                </button> 

                                <Transition name="slide-own">
                                    <div 
                                        v-if="pipelines"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>
                                                    Pennpetro Energy PLC Pipe Line Company operates pipelines that transport crude oil, refined petroleum products, liquefied petroleum gas, natural gas and chemicals within the U.S.
                                                </p>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Call before you dig</h4>
                                                    <p>
                                                        The primary cause of pipeline accidents is damage from excavation-related activities, particularly from equipment digging into pipelines. 
                                                        If you are planning to dig on your property or perform excavation work, please call your local One Call center.
                                                    </p>                                                    
                                                </div>
                                            
                                            </div>

                                            <!-- Contact us about Pipelines -->
                                            <NuxtLink
                                                to="/"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Contact us about pipelines</span>
                                                </span>
                                            </NuxtLink> 

                                            <!-- Visit the Pennpetro Energy PLC pipe line company website -->
                                            <NuxtLink
                                                to="/"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Visit the pipe line company website</span>
                                                </span>
                                            </NuxtLink>   
                                        </div>                                                                             
                                    
                                    </div>
                                </Transition>
                            </div>

                            <!-- Credit card inquiries -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <button 
                                    @click="toggleCreditCard"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Credit card inquiries</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : creditCard }"
                                    />
                                </button>  

                                <Transition name="slide-down">
                                    <div 
                                        v-if="creditCard"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 text-(--black) w-full h-full">
                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Credit card inquiries hotline and support</h4>
                                                <p>
                                                    For assistance with all of your credit card inquiries and complaints, you may call these numbers:
                                                </p>                                                    
                                            </div>

                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Pennpetro Energy PLC and Texaco credit services</h4>
                                                <p>
                                                    Toll-free: +44 7700 105171<br>
                                                </p>   
                                                <p>
                                                    Customer service hours
                                                </p>  
                                                <p>
                                                    Mon–Fri 8 a.m.–1 a.m. EST <br>
                                                    Sat–Sun 9 a.m.–10 p.m. EST
                                                </p>                                                
                                            </div>

                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Pennpetro Energy PLC and Texaco credit services</h4>
                                                <p>
                                                    Toll-free: +44 7700 105171
                                                </p>   
                                                <p>
                                                    Customer service hours: 24/7
                                                </p>                                                
                                            </div>

                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Business card services services</h4>
                                                <p>
                                                    Toll-free: +44 7700 105171
                                                </p>   
                                                <p>
                                                    WEX customer service advisors: 24/7/365
                                                </p>  
                                                <p>
                                                    Always keep account number ready and security details for account verification.
                                                </p>                                               
                                            </div>
                                        </div>                                                                             
                                    
                                    </div>
                                </Transition>
                            </div>

                            <!-- Request a datasheet -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <button 
                                    @click="toggleRequestDb"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Request a datasheet</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : requestDb }"
                                    />
                                </button>  

                                <Transition name="slide-down">
                                    <div 
                                        v-if="requestDb"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 text-(--black) w-full h-full">
                                            <p>
                                                Find a material safety data sheet (MSDS) or product data sheet (PDS) for our motor gasoline, diesel, lubricants, aviation and asphalt products..
                                            </p>                                                    

                                            <!-- Contact us information about Scams-->
                                            <NuxtLink
                                                to="/contact"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Access the MSDS database</span>
                                                </span>
                                            </NuxtLink>   
                                        </div>                                                                             
                                    
                                    </div>
                                </Transition>
                            </div>

                            <!-- Donation requests -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">      
                                <button 
                                    @click="toggleDonationRequest"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                     <span class="flex">Donation requests</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : donationRequest }"
                                    />
                                </button> 

                                <Transition name="slide-down">
                                    <div 
                                        v-if="donationRequest"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 text-(--black) w-full h-full">
                                            <p>
                                                Pennpetro Energy PLC supports communities through strategic social investments and partnerships with governments, nongovernmental organizations (NGOs), and international organizations.
                                                See our 
                                                    <NuxtLink
                                                    to="/sustainability/social"
                                                    class="underline decoration-1 underline-offset-2 decoration-(--light-gray) hover:decoration-(--dark-gray) duration-500 ease-in transition-all"
                                                >
                                                    corporate sustainability page                                                
                                                </NuxtLink>.
                                                Through
                                                    <NuxtLink
                                                        to="/sustainability/social"
                                                        class="underline decoration-1 underline-offset-2 decoration-(--light-gray) hover:decoration-(--dark-gray) duration-500 ease-in transition-all"
                                                    >
                                                        Penn Petro Humankind                                               
                                                    </NuxtLink>,
                                                    we also offer matching and volunteer grants for employees and retirees.
                                            </p>    

                                            <p>
                                                We focus on proactive partnerships in communities where we operate. Unfortunately, we cannot accept unsolicited requests for donations or charitable contributions.
                                            </p>                                                 

                                            <!-- Learn about our sustainability efforts -->
                                            <NuxtLink
                                                to="/sustainability/social"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Learn about our sustainability efforts</span>
                                                </span>
                                            </NuxtLink>   
                                        </div>                                                                             
                                    
                                    </div>
                                </Transition>
                            </div>

                            <!-- Fuels-technical question -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">      
                                <button 
                                    @click="toggleFuelsTechnical"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Fuels-technical question</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : fuelsTechnical }"
                                    />
                                </button>  
                                <Transition name="slide-down">
                                    <div 
                                        v-if="fuelsTechnical"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 text-(--black) w-full h-full">
                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Gasoline</h4>
                                                <p>
                                                    Pennpetro Energy PLC, Texaco and Caltex gasolines with Techron are designed to deliver lower emissions, higher performance and a cleaner engine.
                                                </p>                                                    
                                            </div>

                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Technical questions about our fuels</h4>
                                                <p>
                                                    Telephone: 
                                                    <NuxtLink
                                                        to="tel:+447700105171"
                                                        target="_blank"
                                                        class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                                    >
                                                        <span class="relative overflow-hidden">
                                                            <span class="group-hover:underline-text">+44 7700 105171</span>
                                                        </span>
                                                    </NuxtLink> 
                                                </p>                                                    
                                            </div>
                                                
                                        </div>                                                                            
                                    
                                    </div>
                                </Transition>
                            </div>

                            <!-- Financial Publication request -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <button 
                                    @click="toggleFinancialPublication"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Financial Publication request</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : financialPublication }"
                                    />
                                </button>  

                                <Transition name="slide-down">
                                    <div 
                                        v-if="financialPublication"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 tex-(--black) w-full h-full">
                                            <h4 class="font-bold">Gasoline</h4>
                                            <p>
                                                For address changes, inquiries about Pennpetro Energy PLC stock and dividend reinvestment programs, please contact our Stock Transfer Agent.
                                            </p>                                                    
                                        </div>
                                                
                                    </div>
                                </Transition>
                            </div>

                            <!-- Lubricants-technical information -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <button 
                                    @click="toggleLubricantsTechnical"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Lubricants-technical information</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : lubricantsTechnical }"
                                    />
                                </button>

                                <Transition name="slide-down">
                                    <div 
                                        v-if="lubricantsTechnical"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Technical information</h4>
                                                    <p>
                                                        Pennpetro Energy PLC Global Lubricants provides advanced products for industrial, commercial and consumer applications.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">For information about a specific product</h4>
                                                    <!-- Toll-free: +44 7700 105171 -->
                                                    <NuxtLink
                                                        to="tel:+447700105171"
                                                        target="_blank"
                                                        class="group relative flex items-center text-sm text-(--black) duration-500 ease-in transition-all"
                                                    >
                                                        Toll-free:
                                                        <span class="relative overflow-hidden">
                                                            <span class="group-hover:underline-text">+44 7700 105171</span>
                                                        </span>
                                                    </NuxtLink>                                                     
                                                </div>
                                            
                                            </div>

                                            <!-- Contact us about lubricants technical support -->
                                            <NuxtLink
                                                to="/careers"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Contact us about lubricants</span>
                                                </span>
                                            </NuxtLink> 

                                                
                                        </div>                                                                             
                                    
                                    </div>
                                </Transition>
                            </div>

                            <!-- Lubricants-where to buy -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">       
                                <button 
                                    @click="toggleLubricantsWhere"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Lubricants-where to buy</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : lubricantsWhere }"
                                    />
                                </button>

                                <Transition name="slide-down">
                                    <div 
                                        v-if="lubricantsWhere"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Business opportunities</h4>
                                                <p>
                                                    Locate a source for our products in your area.
                                                </p>
                                                <p>
                                                    If you are interested in providing quality Pennpetro Energy PLC products in your local community, please contact us.
                                                </p>                                                    
                                            </div>

                                            <!-- Pennpetro Energy PLC Lubricants locator -->
                                            <NuxtLink
                                                to="/careers"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Penn lubricants locator</span>
                                                </span>
                                            </NuxtLink> 

                                            <!-- Visit the Pennpetro Energy PLC pipe line company website -->
                                            <NuxtLink
                                                to="/"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Visit the pipe line company website</span>
                                                </span>
                                            </NuxtLink>   
                                        </div>                                                                             
                                    
                                    </div>
                                </Transition>
                            </div>

                            <!-- Mobile app inquiries -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">                                                                 
   
                                <button 
                                    @click="toggleMobileApp"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Mobile app inquiries</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : mobileApp }"
                                    />
                                </button>
                                <Transition name="slide-down">
                                    <div 
                                        v-if="mobileApp"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>Open jobs at Pennpetro Energy PLC are available for review and application at our Pennpetro Energy PLC careers page.</p>
                                                <p>Resumes sent to the general mailbox will not be considered and requests for status updates to applications will not be provided.</p>
                                            </div>

                                            <!-- Penn mobile support -->
                                            <NuxtLink
                                                to="/contact"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Penn mobile support</span>
                                                </span>
                                            </NuxtLink>

                                            <!-- Texaco mobile support -->
                                            <NuxtLink
                                                to="https://www.texaco.com/en_us/home/mobile-apps.html"
                                                target="_blank"
                                                class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="relative overflow-hidden">
                                                    <span class="group-hover:underline-text">Texaco mobile support</span>
                                                </span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </Transition>
                            </div>

                            <!-- Supplier relations -->
                            <div class="flex flex-col gap-6 text-(--black) py-4 lg:py-6 border-2 border-transparent border-b-(--border-gray)">                                                                 
                                <button 
                                    @click="toggleSupplierRelation"
                                    class="flex items-center justify-between cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    <span class="flex">Supplier relations</span>
                                    <Icon 
                                        name="mdi:chevron-down"
                                        class="flex font-bold ease-in-out duration-300 transition-all"
                                        :class="{ 'rotate-180' : supplierRelations }"
                                    />
                                </button>
                                <Transition name="slide-down">
                                    <div 
                                        v-if="supplierRelations"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <h4 class="font-bold">Assistance</h4>
                                                <p>For assistance, email Supplier Relations. An email response can be expected within three business days.</p>
                                            </div>

                                                <div class="grid gap-4 text-(--black)">
                                                <h4 class="font-bold">Check status</h4>
                                                <p>To check the status of invoices and payments online, visit the Pennpetro Energy PLC Invoice and Payment Status (CIPS) system.</p>
                                        
                                            </div>

                                        </div>
                                    </div>
                                </Transition>
                            </div>                        

                        </div>
                    </div> 

                    <!-- Form -->
                    <!-- @submit.prevent="handleFormSubmit"  -->
                    <form 
                        id="contact-form"
                        @submit.prevent="submitForm" 
                        class="w-full h-full"
                        autocomplete="on"
                    >                      

                        <div class="flex flex-col gap-4 w-9/10 max-w-3xl mx-auto h-fit">

                            <!-- Topics -->
                            <CustomInputSelect
                                :label="selectInputFields[0].label"
                                :id="selectInputFields[0].id"
                                :name="selectInputFields[0].name"
                                :inputValue="selectedTopic"
                                @update:inputValue="selectedTopic = $event"
                                :options="topics.map(t => ({ label: t.name, value: t.name }))"
                                :error="selectInputFields[0].error"
                                :required="selectInputFields[0].required"
                                :ariaDescribedby="selectInputFields[0].ariaDescribedby"
                            />

                            <!-- Sub topics -->
                            <CustomInputSelect
                                :label="selectInputFields[1].label"
                                :id="selectInputFields[1].id"
                                :name="selectInputFields[1].name"
                                :inputValue="selectedSubtopic"
                                @update:inputValue="selectedSubtopic = $event"
                                :options="subtopicOptions"
                                :error="selectInputFields[1].error"
                                :required="selectInputFields[1].required"
                                :ariaDescribedby="selectInputFields[1].ariaDescribedby"
                            />                           
                            
                            <!-- First name, Last name and Email -->
                            <CustomInputText
                                v-for="input in textInputFields"
                                :key="input.id"
                                :label="input.label"
                                :type="input.type"
                                :id="input.id"
                                :name="input.name"
                                :disabled="input.disabled"
                                :required="input.required"
                                :displayError="input.displayError"
                                :error="input.error"
                                :aria-describedby="input.ariaDescribedby"
                                v-model="textFieldValues[input.valueKey]"
                            />
                            <div class="flex items-center gap-2">
                                
                                <!-- Input Field -->
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    name="newsletter"
                                    aria-describedby="newsletter"
                                    v-model="textFieldValues.newsletter"
                                    class="text-(--dark-blue) border-2 border-(--light-blue) outline-none hover:cursor-pointer focus:border-(--light-blue) duration-300 ease-in-out transition-all"
                                />

                                <!-- Label -->
                                <label for="newsletter" class="text-sm font-medium text-(--dark-blue)">
                                    Newsletter opt-in
                                </label>
                            </div>


                            <CustomInputTextarea
                                label="Comments"
                                :maxWordCount="1000"
                                v-model="textFieldValues.comments"
                                placeholder="Enter your comments here"
                            />
                                
                            <!-- <div class="mt-6 p-4 border rounded bg-gray-50">
                                <p><strong>Selected Topic:</strong> {{ selectedTopic }}</p>
                                <p><strong>Selected Subtopic:</strong> {{ selectedSubtopic }}</p>
                                <h2>First name: {{ textFieldValues.firstName }}</h2>
                                <h2>Last name: {{ textFieldValues.lastName }}</h2>
                                <h2>Email: {{ textFieldValues.email }}</h2>
                                <h2>Newsletter: {{ textFieldValues.newsletter }}</h2>
                                <h2>Comments: {{ textFieldValues.comments }}</h2>
                            </div> -->

                            <!-- Submit Button -->
                            <button 
                                type="submit"
                                class="px-8 py-3 w-50 mx-auto text-(--white) font-bold bg-(--medium-blue) shadow-sm hover:opacity-85 hover:shadow-lg cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                Submit
                            </button>

                            <div class="flex items-center justify-center">
                                <p
                                    v-if="success"
                                    class="px-4 py-3 border border-green-300 bg-green-100 text-green-800 rounded-lg text-sm font-medium"
                                >
                                    Form has been submitted successfully!
                                </p>
                            </div>
                            <p v-if="error" class="text-red-600">{{ error }}</p>
                        </div>
                    </form>

                    <!-- More ways to contact us -->                        
                    <div class="flex flex-col gap-4 items-center justify-center w-full mx-auto">
                        <h3 class="text-(--dark-blue) text-centern text-wrap font-bold text-xl">
                            Pennpetro Energy headquarters
                        </h3>

                        <p class="text-(--black) text-lg">
                            <span class="font-bold">Head office: </span>6 Heddon Street London,<br>
                            W1B 4BT,<br>
                            United Kingdom <br>
                            Telephone: 
                                <NuxtLink
                                    to="tel:+447700105171" target="_blank"
                                    class="hover:text-(--medium-blue) underline decoration-1 underline-offset-2 decoration-(--light-gray) hover:decoration-(--medium-blue) hover:cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    +44 7700 105171
                                </NuxtLink>
                        </p> 
                    </div>
                            

                </div>               


            </div>

        </section>

    </div>
</template>



<style lang="css" scoped>

    .group-hover\:underline-text {
        position: relative;
        display: inline-block;
    }

    .group-hover\:underline-text::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: var(--dark-gray);
        transition: width 0.5s ease-in-out;
    }

    .group:hover .group-hover\:underline-text::after {
        width: 100%;
    }

    .arrow-icon {
        transition: transform 1s ease-in-out;
    }

    .group:hover .arrow-icon {
        transform: translateX(12px);
    }

    .group-hover\:arrow-move {
        animation: moveArrow 3s infinite alternate ease-in-out;
    }  

    select:disabled {
        cursor: not-allowed;
        background-color: #f0f0f0;
        color: #888;
    }

</style>

