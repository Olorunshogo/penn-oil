
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Contact Information',
        titleTemplate: '%s | Penn Petro Energy'
    });

    useSeoMeta({
        title: 'Contact Penn Petro Energy | Get in Touch Today',
        ogTitle: 'Reach Out to Penn Petro Energy',
        description: 'Have questions or inquiries? Contact Penn Petro Energy to learn more about our services, partnerships, or career opportunities.',
        ogDescription: 'Get in touch with Penn Petro Energy. Whether you’re a partner, job seeker, or investor, we’re here to connect with you.',
        ogImage: '/images/contact-page-hero.jpg',
        ogImageAlt: 'Penn Petro Energy headquarters and team members in a meeting.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/contact',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Contact Penn Petro Energy | We’re Here to Help',
        twitterDescription: 'Reach out to our team at Penn Petro Energy for inquiries about careers, investments, media, and more. Let’s connect.',
        twitterImage: '/images/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'contact Penn Petro Energy, energy company contact, oil and gas inquiries, sustainability partnerships, investor contact, energy sector communication, Penn Petro support',
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
        supplierRelations, toggleSupplierRelation
    } from '~/stores/whoVariables';

</script>


<template>
    <div>
        <!-- Section: PageContact -->
        <section>
            <div class="grid bg-(--white) gap-12 w-full h-full overflow-hidden py-(--section-py) lg:py-(--section-py-lg)">
                
                <div class="flex flex-col gap-12 items-center justify-center max-w-7xl mx-auto">

                    <div class="flex flex-col gap-4 items-center justify-center py-12 w-full mx-auto">
                        <h2 class="text-(--dark-blue) text-center font-extrabold text-4xl lg:text-7xl">
                            Contact Penn Petro Energy
                        </h2>
                        <p class="text-(--black) text-lg text-center">
                            Find answers to your questions and useful contacts.
                        </p>                
                    </div> 

                    <div class="flex flex-col gap-20 items-center justify-center w-full mx-auto max-w-4xl">
                        <h2 class="text-(--dark-blue) text-center font-extrabold text-3xl lg:text-4xl">
                            Important Information
                        </h2>

                        <div class="flex flex-col gap-0 w-full h-full bg-(--light-gray)/40">

                            <!-- Job Openings -->
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">                                                                 
                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Job Openings</span>
                                    <button 
                                        @click="toggleJobOpenings"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : jobOpenings }"
                                        />
                                    </button>
                                </div> 
                                <Transition name="slideDown">
                                    <div 
                                        v-if="jobOpenings"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>Open jobs at Chevron are available for review and application at our Chevron careers page.</p>
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">                                                                 
                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Service Station inquiries</span>
                                    <button 
                                        @click="toggleServiceStation"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : serviceStation }"
                                        />
                                    </button>
                                </div> 
                                <Transition name="slideDown">
                                    <div 
                                        v-if="serviceStation"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>We welcome your feedback and inquiries about any of our service stations. Customer service representatives are available between the hours of 7 a.m. to 7 p.m. CT, Monday through Friday.</p>
                                                <address>
                                                    Consumer connection center <br>
                                                    9401 Williamsburg Plaza, Suite 201 <br>
                                                    Louisville, KY 40222
                                                </address>
                                                <span class="flex items-center gap-2">
                                                    <span class="flex">Toll-free:</span>
                                                    <NuxtLink
                                                        to="tel:+18552859595"
                                                        target="_blank"
                                                        class="decoration-1 underline-offset-2 underline decoration-(--light-gray) hover:decoration-(--dark-gray) duration-300 ease-in-out transition-all"
                                                    >
                                                        +1 855-285-9595
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Scams</span>
                                    <button 
                                        @click="toggleScams"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : scams }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
                                    <div 
                                        v-if="scams"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>
                                                    Individuals claiming to represent Penn Petro Evergy have engaged in fraudulent transactions. 
                                                    Penn Petro Energy informs law enforcement when these activities occur, but perpetrators are hard to locate and prosecute. 
                                                    Report any such offers to the appropriate authorities. We regret any inconvenience caused. 
                                                    Below are examples of common frauds; new ones are frequently reported.
                                                </p>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Penn Petro Energy and texaco promotion scam</h4>
                                                    <p>
                                                        Individuals may falsely claim Penn Petro Energy will offer promotional winnings or proceeds after first receiving “insurance payments.” 
                                                        This is called Advance Fee Fraud or 419 Fraud. 
                                                        Penn Petro Energy and its subsidiaries are not associated with these promotions or individuals. 
                                                        These offers are not valid.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Penn Petro Energy online endowment fund award scam</h4>
                                                    <p>
                                                        Individuals claiming to represent the Penn Petro Energy Online Endowment Award Fund (COEFA) will offer fraudulent cash prizes, asking victims to first fill out forms and send “insurance payments” via check or money order. 
                                                        This is Advance Fee Fraud or 419 Fraud. Penn Petro Energy and its subsidiaries do not offer donations or grants in exchange for insurance payments. 
                                                        These offers are not valid.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Deceased employee inquiry scam</h4>
                                                    <p>
                                                        Individuals falsely claiming to represent the estate of a deceased Penn Petro Energy employee approach victims, claiming there are no heirs. 
                                                        The fraudsters offer to transfer an inheritance for a fee.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Fictitious job offer scam</h4>
                                                    <p>
                                                        Fraudsters claiming to be contracted by Penn Petro Energy may claim they are seeking prospective employees for projects, typically via email. 
                                                        They may also claim to manage a Penn Petro Energy promotion, asking for a simple entry form or “insurance payment.”
                                                    </p>  
                                                    <p>
                                                        Victims are told they've been hired or can get a job with Penn Petro Energy for a fee, which covers employment papers, offers, applications and work permits. 
                                                        Fees are sent via check or money order to a post office box. 
                                                        Promised checks for relocation expenses are fake. 
                                                        This is Advance Fee Fraud or 419 Fraud. Penn petro Energy does not charge fees for job positions. 
                                                        Report any fraudulent offers to the U.S. Secret Service.
                                                    </p>                                                   
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Grant and donation scam</h4>
                                                    <p>
                                                        Fraudsters claiming to represent Penn Petro Energy or Penn Petro Energy/Texaco Exploration and Production may offer fake cash grants or donations and asking victims to fill out an entry form. 
                                                        Victims may be asked to send an insurance payment via check or money order. 
                                                        This is Advance Fee Fraud or 419 Fraud. 
                                                        Penn Petro Energy and its subsidiaries do not offer donations or grants in exchange for insurance payments. 
                                                        These offers are not valid.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Lottery winner scam</h4>
                                                    <p>
                                                        Individuals may claim to manage a Penn Petro Energy-sponsored lottery, asking participants to fill out an entry form or send an “insurance payment” via check or money order. 
                                                        This is Advance Fee Fraud or 419 Fraud. 
                                                        Penn Petro Energy and its subsidiaries do not offer lottery proceeds in exchange for insurance payments. 
                                                        These offers are not valid.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Procurement scam</h4>
                                                    <p>
                                                        Individuals claiming to represent Penn Petro Energy or a subsidiary may approach vendors, often by email, inviting them to bid on large orders and requesting a qualification fee. 
                                                        This is Advance Fee Fraud or 419 Fraud. Penn Petro Energy does not charge fees for doing business. 
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Pipelines</span>
                                    <button 
                                        @click="togglePipelines"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : pipelines }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
                                    <div 
                                        v-if="pipelines"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>
                                                    Penn Petro Energy Pipe Line Company operates pipelines that transport crude oil, refined petroleum products, liquefied petroleum gas, natural gas and chemicals within the U.S.
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

                                            <!-- Visit the Penn Petro Energy pipe line company website -->
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Credit card inquiries</span>
                                    <button 
                                        @click="toggleCreditCard"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : creditCard }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
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
                                                <h4 class="font-bold">Penn Petro Energy and Texaco credit services</h4>
                                                <p>
                                                    Toll-free: +1 800-243-8766 <br>
                                                    Option 1 for Penn Petro Energy and Texaco consumer account
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
                                                <h4 class="font-bold">Penn Petro Energy and Texaco credit services</h4>
                                                <p>
                                                    Toll-free: +1 866-448-4367
                                                </p>   
                                                <p>
                                                    Customer service hours: 24/7
                                                </p>                                                
                                            </div>

                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Business card services services</h4>
                                                <p>
                                                    Toll-free: +1 888-531-3698
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Request a datasheet</span>
                                    <button 
                                        @click="toggleRequestDb"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : requestDb }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Donation requests</span>
                                    <button 
                                        @click="toggleDonationRequest"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : donationRequest }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
                                    <div 
                                        v-if="donationRequest"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 text-(--black) w-full h-full">
                                            <p>
                                                Penn Petro Energy supports communities through strategic social investments and partnerships with governments, nongovernmental organizations (NGOs), and international organizations.
                                                See our 
                                                    <NuxtLink
                                                    to="/who/sustainability"
                                                    class="underline decoration-1 underline-offset-2 decoration-(--light-gray) hover:decoration-(--dark-gray) duration-500 ease-in transition-all"
                                                >
                                                    corporate sustainability page                                                
                                                </NuxtLink>.
                                                Through
                                                    <NuxtLink
                                                        to="/who/sustainability"
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
                                                to="/who/sustainability"
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Fuels-technical question</span>
                                    <button 
                                        @click="toggleFuelsTechnical"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : fuelsTechnical }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
                                    <div 
                                        v-if="fuelsTechnical"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 text-(--black) w-full h-full">
                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Gasoline</h4>
                                                <p>
                                                    Penn Petro Energy, Texaco and Caltex gasolines with Techron are designed to deliver lower emissions, higher performance and a cleaner engine.
                                                </p>                                                    
                                            </div>

                                            <div class="grid gap-4 tex-(--black) w-full h-full">
                                                <h4 class="font-bold">Technical questions about our fuels</h4>
                                                <p>
                                                    Telephone: 
                                                    <NuxtLink
                                                        to="tel:+15102425357"
                                                        target="_blank"
                                                        class="group relative flex items-center text-sm font-extrabold text-(--black) duration-500 ease-in transition-all"
                                                    >
                                                        <span class="relative overflow-hidden">
                                                            <span class="group-hover:underline-text">+1 510-242-5357</span>
                                                        </span>
                                                    </NuxtLink> 
                                                </p>                                                    
                                            </div>
                                                
                                        </div>                                                                            
                                    
                                    </div>
                                </Transition>
                            </div>

                            <!-- Financial Publication request -->
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Financial Publication request</span>
                                    <button 
                                        @click="toggleFinancialPublication"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : financialPublication }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
                                    <div 
                                        v-if="financialPublication"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 tex-(--black) w-full h-full">
                                            <h4 class="font-bold">Gasoline</h4>
                                            <p>
                                                For address changes, inquiries about Penn Petro Energy stock and dividend reinvestment programs, please contact our Stock Transfer Agent.
                                            </p>                                                    
                                        </div>
                                                
                                    </div>
                                </Transition>
                            </div>

                            <!-- Lubricants-technical information -->
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Lubricants-technical information</span>
                                    <button 
                                        @click="toggleLubricantsTechnical"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : lubricantsTechnical }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
                                    <div 
                                        v-if="lubricantsTechnical"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">Technical information</h4>
                                                    <p>
                                                        Penn Petro Energy Global Lubricants provides advanced products for industrial, commercial and consumer applications.
                                                    </p>                                                    
                                                </div>

                                                <div class="grid gap-4 tex-(--black) w-full h-full">
                                                    <h4 class="font-bold">For information about a specific product</h4>
                                                    <!-- Toll-free: +1 800-582-3835 -->
                                                    <NuxtLink
                                                        to="tel:+18005823835"
                                                        target="_blank"
                                                        class="group relative flex items-center text-sm text-(--black) duration-500 ease-in transition-all"
                                                    >
                                                        Toll-free:
                                                        <span class="relative overflow-hidden">
                                                            <span class="group-hover:underline-text">+1 800-582-3835</span>
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">      

                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Lubricants-where to buy</span>
                                    <button 
                                        @click="toggleLubricantsWhere"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : lubricantsWhere }"
                                        />
                                    </button>
                                </div> 

                                <Transition name="slideDown">
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
                                                    If you are interested in providing quality Penn Petro Energy products in your local community, please contact us.
                                                </p>                                                    
                                            </div>

                                            <!-- Penn Petro Energy Lubricants locator -->
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

                                            <!-- Visit the Penn Petro Energy pipe line company website -->
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">                                                                 
                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Mobile app inquiries</span>
                                    <button 
                                        @click="toggleMobileApp"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : mobileApp }"
                                        />
                                    </button>
                                </div> 
                                <Transition name="slideDown">
                                    <div 
                                        v-if="mobileApp"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <p>Open jobs at Chevron are available for review and application at our Chevron careers page.</p>
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
                            <div class="flex flex-col gap-6 text-(--black) py-6 border-2 border-transparent border-b-(--border-gray)">                                                                 
                                <div class="flex items-center justify-between text-(--black)">                                
                                    <span class="flex text-xl">Supplier relations</span>
                                    <button 
                                        @click="toggleSupplierRelation"
                                        class="flex items-center cursor-pointer ease-in-out duration-300 transition-all"
                                    >
                                        <Icon 
                                            name="mdi:chevron-down"
                                            class="flex text-xl font-bold ease-in-out duration-300 transition-all"
                                            :class="{ 'rotate-180' : supplierRelations }"
                                        />
                                    </button>
                                </div> 
                                <Transition name="slideDown">
                                    <div 
                                        v-if="supplierRelations"
                                        class="grid gap-0 w-full h-full"
                                    >
                                        <div class="grid gap-4 w-full h-full">
                                            <div class="grid gap-4 text-(--black)">
                                                <h4 class="font-bold">Assistance</h4>
                                                <p>For assistance, email Supplier Relations. An email response can be expected within three business days.</p>
                                                
                                                <!-- Email supplier relations -->
                                                <NuxtLink
                                                    to="mailto:chvcips@chevron.com"
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
                                                        <span class="group-hover:underline-text">Email supplier relations</span>
                                                    </span>
                                                </NuxtLink>
                                            </div>

                                                <div class="grid gap-4 text-(--black)">
                                                <h4 class="font-bold">Check status</h4>
                                                <p>To check the status of invoices and payments online, visit the Penn Petro Energy Invoice and Payment Status (CIPS) system.</p>
                                                
                                                <!-- Visit the CIPS site -->
                                                <NuxtLink
                                                    to="https://cips.chevron.com/"
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
                                                        <span class="group-hover:underline-text">Visit the CIPS site</span>
                                                    </span>
                                                </NuxtLink>
                                            </div>

                                        </div>
                                    </div>
                                </Transition>
                            </div>                        

                        </div>
                    </div> 

                    <!-- More ways to contact us -->
                    <div class="flex flex-col gap-20 items-center justify-center w-full mx-auto max-w-4xl h-full">
                        <h2 class="text-(--dark-blue) text-center font-extrabold text-3xl lg:text-4xl">
                            More ways to contact us
                        </h2>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="flex flex-col gap-4 items-center justify-center w-full mx-auto">
                                <h3 class="text-(--dark-blue) text-centern text-wrap font-bold text-xl">
                                    Penn Petro Energy headquarters
                                </h3>

                                <p class="text-(--black) text-lg text-center">
                                    1400 Smith Street <br>
                                    Houston, TX 77002, USA <br>
                                    Telephone: 
                                        <NuxtLink
                                            to="tel:+18328541000" target="_blank"
                                            class="hover:text-(--medium-blue) underline decoration-1 underline-offset-2 decoration-(--light-gray) hover:decoration-(--medium-blue) hover:cursor-pointer ease-in-out duration-300 transition-all"
                                        >
                                            +1 832.854.1000
                                        </NuxtLink>
                                </p> 
                            </div>
                            <div class="flex flex-col gap-4 items-center justify-center w-full mx-auto">
                                <h3 class="text-(--dark-blue) text-centern text-wrap font-bold text-xl">
                                    Global contacts
                                </h3>
                                <p>
                                    Find contact information for the countries where we operate.
                                </p>

                                <!-- Visit Penn worldwide -->
                                <NuxtLink
                                    to="/"
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
                                        <span class="group-hover:underline-text">Visit Penn worldwide</span>
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div class="grid gap-8 w-full h-full bg-(--light-gray)/30 p-20">
                        <!-- Email Penn -->
                        <NuxtLink
                            to="mailto:pennpetroenergy@gmail.com"
                            class="group relative flex items-center text-lg w-fit px-6 py-2 font-bold text-(--black) hover:text-(--white) hover:bg-(--medium-blue) border-2 border-(--medium-blue) mx-auto shadow-lg rounded-lg duration-500 ease-in transition-all"
                        >
                            <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                <div class="absolute flex items-center left-4 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                    <Icon name="mdi:arrow-right"/>
                                </div>
                                
                                <div class="absolute flex items-center left-4 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                    <Icon name="mdi:arrow-right" />
                                </div>
                            </div>
                            <span>
                                Email Penn
                            </span>
                        </NuxtLink>

                        <!-- Social links -->
                        <div class="flex items-center flex-wrap gap-4 *:flex *:items-center *:text-xl *:lg:text-3xl mx-auto *:ease-in-out *:duration-500 *:transition-all">

                            <!-- Facebook -->
                            <NuxtLink
                                to="/"
                                class="hover:text-(--dark-blue)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                                        <path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
                                        </path>
                                        <path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"/>
                                        </path>
                                    </g>
                                </svg>
                            </NuxtLink>

                            <!-- X -->
                            <NuxtLink
                                to="/"
                                class="hover:text-(--medium-blue)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <g fill="currentColor"><path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
                                        <animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"/></path>
                                        <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
                                            <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"/>
                                        </path>
                                        <path d="M18.5 2h3.5L22 2h-3.5z"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"/></path>
                                    </g>
                                </svg>
                            </NuxtLink>

                            <!-- Instagram -->
                            <NuxtLink
                                to="/"
                                class="hover:text-(--medium-red)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <circle cx="17" cy="7" r="1.5" fill="currentColor" fill-opacity="0">
                                        <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"/>
                                    </circle>
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/>
                                        </path>
                                        <path stroke-dasharray="28" stroke-dashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"/>
                                        </path>
                                    </g>
                                </svg>
                            </NuxtLink>

                            <!-- TikTok -->
                            <NuxtLink
                                to="/"
                                class="hover:text-(--light-red)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <mask id="lineMdTiktok0">
                                        <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                            <path fill="#fff" stroke="none" d="M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z"/>
                                            <path stroke="#000" stroke-dasharray="36" stroke-dashoffset="72" stroke-width="4" d="M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;36"/>
                                            </path>
                                            <path stroke="#000" stroke-dasharray="10" stroke-dashoffset="20" stroke-width="4" d="M18 2.5v8">
                                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.1s" values="20;10"/>
                                            </path>
                                        </g>
                                    </mask>
                                    <rect width="24" height="24" fill="currentColor" mask="url(#lineMdTiktok0)"/>
                                </svg>
                            </NuxtLink>

                            <!-- YouTube -->
                            <NuxtLink
                                to="/"
                                class="hover:text-(--dark-red)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-opacity="0" d="M12 11L12 12L12 13z">
                                        <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"/>
                                            <set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"/>
                                    </path>
                                    <path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
                                    </path>
                                </svg>
                            </NuxtLink>

                            <!-- LinkedIn -->
                            <NuxtLink
                                to="/"
                                class="hover:text-(--light-blue)"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0">
                                        <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1"/>
                                    </circle>
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10v10">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0"/>
                                        </path>
                                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M10 10v10">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0"/>
                                        </path>
                                        <path stroke-dasharray="24" stroke-dashoffset="24" d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0"/>
                                        </path>
                                    </g>
                                </svg>
                            </NuxtLink>


                        </div>   
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

</style>

