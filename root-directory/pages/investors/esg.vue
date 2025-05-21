
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Environmental, Social and Governance Index',
        titleTemplate: '%s | Penn Petro Energy'
    });

    definePageMeta({
        layout: 'custom'
    })

    useSeoMeta({
        title: 'ESG A–Z Index | Penn Petro Energy - Environmental, Social & Governance Insights',
        ogTitle: 'Penn Petro Energy ESG A–Z Index | Sustainability & Responsible Practices',
        description: 'Browse the ESG A–Z Index to explore Penn Petro Energy’s approach to environmental, social, and governance practices. Gain insight into our sustainability efforts and ethical leadership.',
        ogDescription: 'Penn Petro Energy’s ESG A–Z Index offers a comprehensive view of our environmental, social, and governance commitments, supporting transparency and stakeholder engagement.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Sustainable operations at Penn Petro Energy reflecting ESG responsibility.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/investors/esg',
        twitterCard: 'summary_large_image',
        twitterTitle: 'ESG A–Z Index | Penn Petro Energy’s Commitment to Sustainability',
        twitterDescription: 'Explore Penn Petro Energy’s ESG practices through our A–Z Index – a transparent guide to our environmental, social, and governance efforts.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        keywords: 'Penn Petro Energy ESG, sustainability index, environmental leadership, social responsibility, corporate governance, ESG transparency, sustainable energy practices, stakeholder trust, ESG reporting, ESG A-Z glossary'
    });

    import {
        esgBusinessConduct, toggleEsgBusinessConduct,
        esgClimate, toggleEsgClimate,
        esgEnvironment, toggleEsgEnvironment,
        esgGovernance, toggleEsgGovernance,
    } from '~/stores/investorsVariables';
    import {
        esgBusinessConductNavLinks, esgClimateNavLinks,
        esgEnvironmentNavLinks, esgGovernanceNavLinks,
    } from '~/models/investorsEsgModels';

</script>


<template>
    <div class="w-full h-full bg-white">

        <!-- Section: Hero -->
        <section>   
            <div class="relative w-full h-full bg-(--dark-blue) px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                    
                <div class="flex flex-col items-center justify-center py-16 w-full h-full max-w-7xl mx-auto">

                    <div class="flex flex-col items-center justify-center text-(--white) text-center gap-8 w-full max-w-7xl mx-auto">                                

                        <h1 class="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold">
                            Environment, social, and governance index
                        </h1>

                        <p class="flex items-center text-lg text-center font-medium">
                            Explore our ESG topics using the index below. &ThinSpace; 

                            <NuxtLink
                                to="/pdfs/Penn_sustainability_highlights_2024.pdf" 
                                target="_blank"
                                class="group flex *:flex items-center *:items-center justify-between duration-300 ease-in-out transition-all"
                            >
                                <span class="group-hover:underline-text">
                                        About this content
                                </span>

                            </NuxtLink>
                        </p>
                        
                    </div>
                </div>

            </div>
        </section>

        <!-- Dropdowns -->
        <section>   
            <div class="relative w-full h-full bg-(--light-gray)/60 lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">
                
                 <div class="flex flex-col gap-16 lg:gap-20 w-full h-full">

                    <div class="flex flex-col w-full h-full">
                        <!-- Business Conduct and ethics -->
                        <div class="flex flex-col w-full h-full">

                            <div class="flex flex-col p-8 text-(--dark-blue) hover:text-(--white) bg-transparent hover:bg-(--dark-blue) border-y-1 border-(--border-gray)">
                            
                                <button 
                                    @click="toggleEsgBusinessConduct"
                                    class="flex items-center justify-between hover:cursor-pointer w-full h-full duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-2xl md:text-3xl font-extrabold">Business conduct and ethics</span>
                                    <span>
                                        <Icon 
                                            name="mdi:chevron-down" 
                                            class="hidden hover:flex font-extrabold text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                            :class="{ 'rotate-180': esgBusinessConduct }"
                                        />
                                    </span>
                                </button>
                            </div>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="esgBusinessConduct"
                                    class="flex gap-8 p-4 w-96/100 lg:w-99/100 mx-auto"
                                >
                                    
                                    <!-- Blue Bg Navbar at the LHS -->
                                    <div class="hidden sm:block sm:w-90 rounded-lg bg-(--dark-blue) h-full max-h-60">

                                        <div class="flex flex-col p-4 gap-3 font-bold text-sm w-4/5 h-full *:text-(--white) *:hover:opacity-70 *:duration-500 *:ease-in-out *:transition-all">
                                            <InvestorsEsgCategoryNav
                                                v-for="item in esgBusinessConductNavLinks" :key="item.id"
                                                :navLink="item.navLink"
                                                :linkName="item.linkName"
                                            />
                                        </div>
                                        
                                    </div>

                                    <div class="flex flex-col gap-12 flex-1">
                                        <!-- Introduction -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            <div 
                                                id="businessOverview" 
                                                class="flex flex-col gap-2 bg-(--white) p-4 text-sm rounded-lg"
                                            >
                                                <p class="text-(--black)">
                                                    <span class="font-bold">Our business:</span> Through its subsidiaries and affiliates, Penn Petro Energy produces crude oil and natural gas, manufactures transportation fuels, lubricants, petrochemicals and additives, and develops technologies that enhance our business and the industry. 
                                                    We aim to grow our oil and gas business, lower the carbon intensity of our operations and grow new businesses. 
                                                    We plan to make prudent investments without losing focus on delivering stockholder value.
                                                </p>
                                                <p class="text-(--medium-gray)">Updated: May 2025</p>
                                            </div>

                                            <div class="flex flex-col gap-2 text-(--black) text-base rounded-lg">
                                                <p>
                                                    Developed from The Penn Petro Energy Way principles, our Business Conduct and Ethics Code communicates expectations for ethical business conduct. 
                                                    The Code reinforces our compliance commitment and the responsibility of each employee to help Penn Petro Energy’s activities adhere to legal and policy requirements everywhere we operate.
                                                </p>
                                                <p>
                                                    Penn Petro Energy maintains internal accounting, administrative and operational controls to manage these standards of conduct and compliance. 
                                                    Penn Petro Energy employees and contractors receive training on Penn Petro Energy’s Business Conduct and Ethics Code every three years.
                                                </p>
                                            </div>

                                            <NuxtLink
                                                to="/pdfs/Penn_business_conduct_ethics_code.pdf" target="_blank"
                                                class="group flex *:flex items-center *:items-center gap-2 w-fit text-(--black) duration-300 ease-in-out transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="group-hover:underline-text font-bold text-sm">Business Conduct and Ethics Code</span>
                                            </NuxtLink>

                                        </div>

                                        <!--  Antibribery and corruption -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="antibribery"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Antibribery and corruption
                                            </h2>

                                            <div class="flex flex-col gap-2 text-(--black) text-base rounded-lg">
                                                <p>
                                                    Wherever Penn Petro Energy operates, we must respect and conform to each country’s unique customs and business practices. 
                                                    Above all, we must follow its laws and regulations. 
                                                    When business transactions involve more than one country, we must find the best way to comply with all applicable laws. 
                                                    Whenever a possible conflict of laws situation arises, we should always seek guidance from our organization’s legal counsel.
                                                </p>
                                                <p>
                                                    Bribery of any government official in any country is strictly against Penn Petro Energy policy, even if the refusal to make such a payment would result in the company losing a business opportunity. 
                                                    Almost every country prohibits the bribery of its own officials, and many countries also prohibit commercial bribery involving private companies. 
                                                    In addition, many countries have antibribery/anticorruption laws that make it illegal to bribe officials of other countries. 
                                                    In the United States, that law is the Foreign Corrupt Practices Act (FCPA). 
                                                    Employees with duties that involve interactions with government-owned or controlled entities or with non-U.S. officials must familiarize themselves with the related compliance policy and requirements for complying with this and other applicable antibribery laws.
                                                </p>
                                                <p>
                                                    Management approval is required before any gift or payment can be made to a government or public official. 
                                                    In some cases, the gift or payment must also be approved by your compliance representative or Corporate Compliance. 
                                                    Penn Petro Energy employees and contractors are prohibited from making payments or providing anything of value directly or indirectly to government officials with the intent to improperly influence the performance of their official duties or gain any other improper advantage. 
                                                    Penn Petro Energy requires that internal controls be in place and functioning and that accurate and complete transaction records be kept within the company. 
                                                    Our standard language for procurement contracts includes a requirement for our suppliers and contractors to comply with all applicable laws and keep accurate books and records. 
                                                    Where appropriate, our procurement contracts contain specific antibribery commitments.
                                                </p>
                                            </div>

                                            <NuxtLink
                                                to="/pdfs/Penn_business_conduct_ethics_code.pdf" target="_blank"
                                                class="group flex *:flex items-center *:items-center gap-2 w-fit text-(--black) duration-300 ease-in-out transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="group-hover:underline-text font-bold text-sm">Business Conduct and Ethics Code</span>
                                            </NuxtLink>

                                        </div>

                                        <!--  Whistleblower hotline -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="whistleblower"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Whistleblower hotline
                                            </h2>

                                            <div class="flex flex-col gap-2 text-(--black) text-base rounded-lg">
                                                <p>
                                                    Penn Petro Energy is committed to appropriate conduct by its employees, suppliers and contractors and requires questionable conduct to be reported. 
                                                    This may include, for example, violations of the Penn Petro Energy Business Conduct and Ethics Code, company policies, and applicable laws or regulations. 
                                                    The Penn Petro Energy Hotline provides a direct, effective and risk-free way for anyone to report such suspected violations.
                                                </p>
                                                <p>
                                                    Penn Petro Energy does not tolerate any form of retaliation for reports made in good faith. 
                                                    Retaliation includes blatant actions, such as firing, transferring, demoting or publicly undermining someone, as well as more subtle actions, such as avoiding someone or excluding them from professional or social activities. 
                                                    It includes actions taken by managers and employees alike.
                                                </p>
                                                <p class="flex flex-col items-center justify-center my-2 h-fit *:text-center font-bold text-(--dark-blue)">
                                                    <span class="text-xl lg:text-2xl">24/7 Penn Petro Energy hotline</span>
                                                    <span class="text-lg lg:text-xl">is available for reporting existing and potential violations of law or company policy</span>
                                                </p>
                                            </div>

                                            <NuxtLink
                                                to="/pdfs/Penn_business_conduct_ethics_code.pdf" target="_blank"
                                                class="group flex *:flex items-center *:items-center gap-2 w-fit text-(--black) duration-300 ease-in-out transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="group-hover:underline-text font-bold text-sm">Business Conduct and Ethics Code</span>
                                            </NuxtLink>

                                        </div>

                                        <!--  Tax -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="tax"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Tax
                                            </h2>

                                            <div class="flex flex-col gap-4 text-(--black) text-base rounded-lg">
                                                <p>
                                                    We are focused on a principled approach to tax and compliance with the law in every country where we operate. Mindful of our responsibility, we make positive economic contributions to countries where we operate by paying billions in taxes annually.
                                                </p>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Approach to tax</h3>
                                                    <p class="text-(--black)">
                                                        We embed principled tax practices in our business. Our approach to tax matches our efforts globally to conduct our business legally, responsibly and with integrity. Our business operations, including the location of natural resources, drive where we generate earnings and pay taxes. In applying tax rules and regulations, we employ high ethical standards and comply with tax requirements in every jurisdiction where we operate.
                                                    </p>
                                                </div>
                                                
                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Government framework</h3>
                                                    <p class="text-(--black)">
                                                        Strong governance is a foundation of what we do. We have strong oversight in place by Penn Petro Energy’s Board of Directors and its standing committees. 
                                                        Consistent with Penn Petro Energy’s risk management policies and practices, we provide governance and oversight of tax matters through performing review and approval procedures by appropriate members of Penn Petro Energy’s tax leadership team. 
                                                        Governed by Penn Petro Energy’s business conduct and ethics code, our tax professionals around the world are guided by high standards of ethics and are well versed in relevant tax laws and regulations.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Stakeholder engagement</h3>
                                                    <p class="text-(--black)">
                                                        Our relationship with tax authorities is built on mutual trust and respect. Our approach has always been to work jointly with tax authorities to foster efficient and timely reviews of our income tax returns. 
                                                        We engage in ongoing discussions with tax authorities regarding our income tax returns and our tax positions are subject to audits by tax jurisdictions worldwide. 
                                                        In the U.S., for example, Penn Petro Energy is subject to continuous audit by the Internal Revenue Service.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Public disclosures</h3>
                                                    <p class="text-(--black)">
                                                        We provide extensive, public, and detailed financial information (including tax) in a number of ways, including in our audited Annual Report on Form 10-K and resource extraction payment report on Form SD filed with the U.S. 
                                                        Securities and Exchange Commission; submission of project-level data of our payments to governments in Extractive Industries Transparency Initiative implementing countries where our subsidiaries have upstream operations; tax report under the Canadian Extractive Sector Transparency Measures Act; tax report for our Australian operations; and Approach to Tax and Transparency report.
                                                    </p>
                                                </div>

                                            </div>

                                            <NuxtLink
                                                to="/pdfs/Penn_business_conduct_ethics_code.pdf" target="_blank"
                                                class="group flex *:flex items-center *:items-center gap-2 w-fit text-(--black) duration-300 ease-in-out transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="group-hover:underline-text font-bold text-sm">Approach to Tax and Transparency</span>
                                            </NuxtLink>

                                        </div>

                                    </div>
                                    
                                </div>
                            </Transition>

                        </div> 

                        <!-- Climate -->
                        <div class="flex flex-col w-full h-full">

                            <div class="flex flex-col p-8 text-(--dark-blue) hover:text-(--white) bg-transparent hover:bg-(--dark-blue) border-y-1 border-(--border-gray)">
                            
                                <button 
                                    @click="toggleEsgClimate"
                                    class="flex items-center justify-between hover:cursor-pointer w-full h-full duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-2xl md:text-3xl font-extrabold">Climate</span>
                                    <span>
                                        <Icon 
                                            name="mdi:chevron-down" 
                                            class="hidden hover:flex font-extrabold text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                            :class="{ 'rotate-180': esgClimate }"
                                        />
                                    </span>
                                </button>
                            </div>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="esgClimate"
                                    class="flex gap-8 p-4 w-96/100 lg:w-99/100 mx-auto"
                                >
                                    
                                    <!-- Blue Bg Navbar at the LHS -->
                                    <div class="hidden sm:block sm:w-90 rounded-lg bg-(--dark-blue) h-full max-h-fit">

                                        <div class="flex flex-col p-4 gap-3 font-bold text-sm w-4/5 h-full *:text-(--white) *:hover:opacity-70 *:duration-500 *:ease-in-out *:transition-all">
                                            <InvestorsEsgCategoryNav
                                                v-for="item in esgClimateNavLinks" 
                                                :key="item.id"
                                                :navLink="item.navLink"
                                                :linkName="item.linkName"
                                            />
                                        </div>
                                        
                                    </div>

                                    <div class="flex flex-col gap-12 flex-1">
                                        <!-- Introduction -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            <div 
                                                id="climateOverview" 
                                                class="flex flex-col gap-2 bg-(--white) p-4 text-sm rounded-lg"
                                            >
                                                <p class="text-(--black)">
                                                    <span class="font-bold">Our business:</span> Through its subsidiaries and affiliates, Penn Petro Energy produces crude oil and natural gas, manufactures transportation fuels, lubricants, petrochemicals and additives, and develops technologies that enhance our business and the industry. 
                                                    We aim to grow our oil and gas business, lower the carbon intensity of our operations and grow new businesses. 
                                                    We plan to make prudent investments without losing focus on delivering stockholder value.
                                                </p>
                                                <p class="text-(--medium-gray)">Updated: May 2025</p>
                                            </div>

                                            <div class="flex flex-col gap-2 text-(--black) text-base rounded-lg">
                                                <p>
                                                    Developed from The Penn Petro Energy Way principles, our Business Conduct and Ethics Code communicates expectations for ethical business conduct. 
                                                    The Code reinforces our compliance commitment and the responsibility of each employee to help Penn Petro Energy’s activities adhere to legal and policy requirements everywhere we operate.
                                                </p>
                                                <p>
                                                    Penn Petro Energy maintains internal accounting, administrative and operational controls to manage these standards of conduct and compliance. 
                                                    Penn Petro Energy employees and contractors receive training on Penn Petro Energy’s Business Conduct and Ethics Code every three years.
                                                </p>
                                            </div>

                                        </div>

                                        <!--  Climate Policy -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="climatePolicy"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Climate policy
                                            </h2>

                                            <div class="flex flex-col gap-4 text-(--black) text-base rounded-lg">

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Our approach</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy believes a balanced approach to policy focused on affordability, reliability and environmental protection is needed to meet growing energy demand. We strive to provide a positive, pragmatic voice on climate policy through involvement with trade associations and engagements with policymakers across the globe.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Oversight</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy has both executive management and Board oversight of policy, lobbying and trade association activities. 
                                                        The Public Policy and Sustainability Committee (PPSC) has primary responsibility for assisting Penn Petro Energy’s Board of Directors in overseeing lobbying policy and reporting, as well as Penn Petro Energyn’s response to stockholder concerns regarding such activities. 
                                                        The PPSC annually reviews the policies, procedures and expenditures related to the company’s lobbying to assess the value of these activities and alignment with Penn Petro Energy’s positions and interests, including those related to sustainability.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Climate policy</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy believes climate policy should be designed in a manner that enables the realization of a lower carbon future at the least cost to society. 
                                                        Penn Petro Energy supports the Paris Agreement’s global approach to governments addressing climate change. 
                                                        We continue to take actions to help lower the carbon intensity of our operations while continuing to meet the demand for energy. 
                                                        We believe policy should drive the most efficient and cost-effective abatement economywide, along with natural and technological emissions removals. 
                                                        Policies should enable lower carbon solutions and products by allowing all solutions to compete without penalizing one sector to build another.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Oversight</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy is working to help develop global standards and guidance to advance carbon accounting. 
                                                        A lifecycle approach to carbon accounting is also known as “product carbon footprinting.” 
                                                        We believe a lifecycle approach facilitates informed decision making throughout the value chain of any particular product or service. 
                                                        Carbon data across sectors, products and firms of all sizes can be used to understand the carbon performance associated with a product or service. 
                                                        Four principles that guide our lifecycle approach to carbon accounting are to provide relevant, consistent, accurate and complete data.
                                                    </p>
                                                </div>

                                            </div>

                                            <NuxtLink
                                                to="/pdfs/2023CCRR_ClimatePolicy.pdf" target="_blank"
                                                class="group flex *:flex items-center *:items-center gap-2 w-fit text-(--black) duration-300 ease-in-out transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="group-hover:underline-text font-bold text-sm">Well-designed Climate Policy</span>
                                            </NuxtLink>

                                            <NuxtLink
                                                to="/pdfs/2023CCRR_Innovation.pdf" target="_blank"
                                                class="group flex *:flex items-center *:items-center gap-2 w-fit text-(--black) duration-300 ease-in-out transition-all"
                                            >
                                                <div class="group relative flex items-center justify-center text-xl w-12 h-full overflow-hidden">
                                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                        <Icon name="mdi:arrow-right"/>
                                                    </div>
                                                    
                                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                        <Icon name="mdi:arrow-right" />
                                                    </div>
                                                </div>
                                                <span class="group-hover:underline-text font-bold text-sm">Advance innovation Policy</span>
                                            </NuxtLink>

                                        </div>

                                        <!-- Lower Carbon Capture -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="lowerCarbon"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Lower Carbon Capture
                                            </h2>

                                            <div class="flex flex-col gap-2 text-(--black) text-base rounded-lg">
                                                <p>
                                                    Global energy demand is projected to rise, and many energy solutions will be required as the world works toward achieving the goals of the Paris Agreement. 
                                                    We believe the journey to a lower carbon future will still require oil and natural gas, particularly where there are currently no effective substitutes.
                                                    Our strategy remains consistent: leverage our strengths to safely deliver lower carbon energy to a growing world. 
                                                    We are working to provide the affordable, reliable and lower carbon energy that enables human progress. 
                                                    In 2021, the company guided to capital spend of approximately $10 billion through 2028 to advance its lower carbon ambitions, which includes approximately $2 billion to lower the carbon intensity of its oil and gas operations, and approximately $8 billion for lower carbon investments.
                                                </p>
                                                <p>
                                                    We aim to help customers meet their lower carbon ambitions and reduce the carbon intensity of our own operations while delivering value for our stockholders. 
                                                    Since launching Penn Petro ENergy New Energies in 2021, we have set lower carbon business targets for renewable fuels production capacity, offsets business and CCUS, and hydrogen equity production capacity. Penn Petro Energy regularly evaluates its lower carbon business targets and expects them to change in light of evolving market and policy conditions and pace of technological advancement. 
                                                    We believe that additional advances in technology, supportive policy and customer demand are needed in order to develop scalable, new businesses that deliver value for our stockholders. Generally, the pace of market, policy and technology developments has lagged global ambition. 
                                                    Despite the challenges, we continue to see long-term potential to build new businesses that leverage our strengths. 
                                                    We plan to make prudent investments to advance new business opportunities without losing focus on delivering stockholder value.
                                                </p>
                                            
                                            </div>

                                        </div>

                                    </div>
                                    
                                </div>
                            </Transition>

                        </div> 

                        <!-- Environment -->
                        <div class="flex flex-col w-full h-full">

                            <div class="flex flex-col p-8 text-(--dark-blue) hover:text-(--white) bg-transparent hover:bg-(--dark-blue) border-y-1 border-(--border-gray)">
                            
                                <button 
                                    @click="toggleEsgEnvironment"
                                    class="flex items-center justify-between hover:cursor-pointer w-full h-full duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-2xl md:text-3xl font-extrabold">Environment</span>
                                    <span>
                                        <Icon 
                                            name="mdi:chevron-down" 
                                            class="hidden hover:flex font-extrabold text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                            :class="{ 'rotate-180': esgEnvironment }"
                                        />
                                    </span>
                                </button>
                            </div>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="esgEnvironment"
                                    class="flex gap-8 p-4 w-96/100 lg:w-99/100 mx-auto"
                                >
                                    
                                    <!-- Blue Bg Navbar at the LHS -->
                                    <div class="hidden sm:block sm:w-90 rounded-lg bg-(--dark-blue) h-full max-h-fit">

                                        <div class="flex flex-col p-4 gap-3 font-bold text-sm w-4/5 h-full *:text-(--white) *:hover:opacity-70 *:duration-500 *:ease-in-out *:transition-all">
                                            <InvestorsEsgCategoryNav
                                                v-for="item in esgEnvironmentNavLinks" 
                                                :key="item.id"
                                                :navLink="item.navLink"
                                                :linkName="item.linkName"
                                            />
                                        </div>
                                        
                                    </div>

                                    <div class="flex flex-col gap-12 flex-1">
                                        <!-- Introduction -->
                                        <div 
                                            id="environmentOverview" 
                                            class="flex flex-col gap-2 bg-(--white) p-4 text-sm rounded-lg"
                                        >
                                            <p class="text-(--black)">
                                                <span class="font-bold">Our business:</span> Through its subsidiaries and affiliates, Penn Petro Energy produces crude oil and natural gas, manufactures transportation fuels, lubricants, petrochemicals and additives, and develops technologies that enhance our business and the industry. We aim to grow our oil and gas business, lower the carbon intensity of our operations and grow new businesses. 
                                                We plan to make prudent investments without losing focus on delivering stockholder value.
                                            </p>
                                            <p class="text-(--medium-gray)">Updated: May 2025</p>
                                        </div>

                                        <!--  Environment risk management -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="stewardingWater"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Environment risk management
                                            </h2>

                                            <div class="flex flex-col gap-4 text-(--black) text-base rounded-lg">

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Our approach</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy, we strive to protect the environment through responsible design, development, operations and retirement of assets. 
                                                        By considering potential environmental risks, we aim to enhance our environmental performance around the world. 
                                                        We identify and manage safeguards designed to prevent or mitigate potential environmental impacts. 
                                                        The Operational Excellence Management System (OEMS) environment focus area promotes systematic consideration of business risks and environmental performance alongside stakeholder expectations.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Strategy</h3>
                                                    <p class="text-(--black)">
                                                        Our environment strategy helps us take steps to steward water, biodiversity, waste, air emissions and asset retirement.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Climate policy</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy believes climate policy should be designed in a manner that enables the realization of a lower carbon future at the least cost to society. 
                                                        Penn Petro Energy supports the Paris Agreement’s global approach to governments addressing climate change. 
                                                        We continue to take actions to help lower the carbon intensity of our operations while continuing to meet the demand for energy. 
                                                        We believe policy should drive the most efficient and cost-effective abatement economywide, along with natural and technological emissions removals. 
                                                        Policies should enable lower carbon solutions and products by allowing all solutions to compete without penalizing one sector to build another.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Risk management</h3>
                                                    <p class="text-(--black)">
                                                        The Environment Risk Management Process encompasses the lifecycle of our assets. 
                                                        It is our framework for assessing and managing potential risks associated with new projects, ongoing operations, and asset retirement.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                        <!--  Biodiversity -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="biodiversity"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Biodiversity
                                            </h2>

                                            <div class="flex flex-col gap-4 text-(--black) text-base rounded-lg">

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Our approach</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy works with communities, regulatory agencies, industry groups, academia and conservation organizations to take action to help protect and enhance biodiversity.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Tools and technologies</h3>
                                                    <p class="text-(--black)">
                                                        We use tools and technologies to help us understand potential impacts to biodiversity. The output from these tools and technologies helps provide insights and identify potential opportunities for improvement. For example:
                                                    </p>                                            

                                                    <ul>
                                                        <li>
                                                            We use our global geospatial database to screen major operating sites and major capital projects against protected area and biodiversity datasets from the IBAT Alliance’s integrated biodiversity assessment tool. 
                                                            The tool integrates the World Database on Protected Areas, the International Union for Conservation of Nature (IUCN) Red List of Threatened Species and the World Database of Key Biodiversity Areas.
                                                        </li>
                                                        <li>
                                                            Our Colorado upstream operation’s Comprehensive Wildlife Plan (CWP) applies the mitigation hierarchy. 
                                                            The CWP is used to identify opportunities for protecting wildlife and their habitat colocated or overlapping with oil and gas developments. 
                                                            As part of CWP, we sponsored a GPS collaring program. The program collects data on the native mule deer and pronghorn to identify their migration corridors, winter habitat ranges and preferred environmental conditions. 
                                                            With these data, we aim to conduct operations in a manner that limits wildlife disturbance and to select beneficial restoration projects. 
                                                            We sponsored the program in collaboration with the Colorado Parks and Wildlife, University of Montana and the State University of New York
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Mitigation hierachy</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy uses the mitigation hierarchy to manage potential risks to the environment and enable informed decision-making. 
                                                        The Environment Risk Management Process includes the mitigation hierarchy, which is used when evaluating projects or ongoing operations.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                        <!-- Stewarding water -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="stewardingWater"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Stewarding water
                                            </h2>

                                            <div class="flex flex-col gap-4 text-(--black) text-base rounded-lg">

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Our approach</h3>
                                                    <p class="text-(--black)">
                                                        Water is vital to our operations. We aim to drive efficient and responsible water use, reuse, recycling and conservation. 
                                                        Penn Petro Energy recognizes that collaboration with the communities where we operate is important to strengthening water stewardship.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Case studies</h3>
                                                    <h3 class="text-(--black) font-bold text-xl lg:text-2xl">Permian Basin, U. S.</h3>
                                                    <p class="text-(--black)">
                                                        Through the Aris Water Solutions agreement, we contribute to the development of technologies that treat produced water for potential reuse outside of the oil field. 
                                                        Completion of Permian Basin pilots in 2024 informed the selection of a desalination technology to advance a reuse system.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--black) font-bold text-xl lg:text-2xl">College Station, Texas</h3>
                                                    <p class="text-(--black)">
                                                        Through Texas A&amp;M AgriLife Research, we aim to reduce the water needed to grow renewable feedstocks. In 2023 and 2024, crop data for high-oil content “diesel nut” peanuts were used to assess initial carbon intensity estimates and build out economic models. 
                                                        The aim of the research is to develop crops for biofuel production with improved characteristics, such as overall yield, oil content and drought tolerance.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                        <!--  Managing air emissions -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="managingAir"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Managing air emissions
                                            </h2>

                                            <div class="flex flex-col gap-4 text-(--black) text-base rounded-lg">

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Our approach</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy seeks to identify management practices and implement technologies to reduce emissions of sulfur oxides (SOx), nitrogen oxides (NOx) and volatile organic compounds (VOCs). 
                                                        Not included in our definition of air emissions are greenhouse gases (GHGs), including methane.
                                                    </p>
                                                    <p>
                                                        In addition to balancing management of operational needs, regulatory requirements, and community or other stakeholder matters, Chevron aims to:
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            Standardize reporting across the enterprise.
                                                        </li>
                                                        <li>
                                                            Undertake internal and external benchmarking of air emissions to better understand relative performance and identify improvement opportunities.
                                                        </li>
                                                        <li>
                                                            Share technologies and operation and maintenance practices across our operations that mitigate air emissions.
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Strategy</h3>
                                                    <p class="text-(--black)">
                                                        Our environment strategy helps us take steps to steward water, biodiversity, waste, air emissions and asset retirement.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Climate policy</h3>
                                                    <p class="text-(--black)">
                                                        Penn Petro Energy believes climate policy should be designed in a manner that enables the realization of a lower carbon future at the least cost to society. 
                                                        Penn Petro Energy supports the Paris Agreement’s global approach to governments addressing climate change. 
                                                        We continue to take actions to help lower the carbon intensity of our operations while continuing to meet the demand for energy. 
                                                        We believe policy should drive the most efficient and cost-effective abatement economywide, along with natural and technological emissions removals. 
                                                        Policies should enable lower carbon solutions and products by allowing all solutions to compete without penalizing one sector to build another.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Risk management</h3>
                                                    <p class="text-(--black)">
                                                        The Environment Risk Management Process encompasses the lifecycle of our assets. 
                                                        It is our framework for assessing and managing potential risks associated with new projects, ongoing operations, and asset retirement.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Improving air emissions inventories</h3>
                                                    <p class="text-(--black)">
                                                        In 2023, we updated our air emissions reporting protocol to further improve our company air emissions inventories. 
                                                        Penn Petro ENergy uses data to inform environmental performance ambitions, opportunities and risks at the enterprise and business unit levels. 
                                                        Data are used to balance management of operational needs and regulatory, community or other key stakeholder issues.
                                                    </p>
                                                </div>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Benchmarking air emissions</h3>
                                                    <p class="text-(--black)">
                                                        We undertake benchmarking internally and externally to better understand the relative performance of Penn Petro ENergy's air emissions. 
                                                        Internal benchmarking is completed on an annual basis across the company, which helps inform opportunities for air emissions reduction.
                                                        We benchmark our performance to peers through our analysis of external SOx, NOx, and VOC emissions intensities data across upstream assets and refining assets.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    
                                </div>
                            </Transition>

                        </div> 

                        <!-- Governance -->
                        <div class="flex flex-col w-full h-full">

                            <div class="flex flex-col p-8 text-(--dark-blue) hover:text-(--white) bg-transparent hover:bg-(--dark-blue) border-y-1 border-(--border-gray)">
                            
                                <button 
                                    @click="toggleEsgGovernance"
                                    class="flex items-center justify-between hover:cursor-pointer w-full h-full duration-300 ease-in-out transition-all"
                                >
                                    <span class="text-2xl md:text-3xl font-extrabold">Governance</span>
                                    <span>
                                        <Icon 
                                            name="mdi:chevron-down" 
                                            class="hidden hover:flex font-extrabold text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                            :class="{ 'rotate-180': esgGovernance }"
                                        />
                                    </span>
                                </button>
                            </div>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="esgGovernance"
                                    class="flex gap-8 p-4 w-96/100 lg:w-99/100 mx-auto"
                                >
                                    
                                    <!-- Blue Bg Navbar at the LHS -->
                                    <div class="hidden sm:block sm:w-90 rounded-lg bg-(--dark-blue) h-full max-h-fit">

                                        <div class="flex flex-col p-4 gap-3 font-bold text-sm w-4/5 h-full *:text-(--white) *:hover:opacity-70 *:duration-500 *:ease-in-out *:transition-all">
                                            <InvestorsEsgCategoryNav
                                                v-for="item in esgGovernanceNavLinks" 
                                                :key="item.id"
                                                :navLink="item.navLink"
                                                :linkName="item.linkName"
                                            />
                                        </div>
                                        
                                    </div>

                                    <div class="flex flex-col gap-12 flex-1">
                                        <!-- Introduction -->
                                        <div 
                                            id="governanceOverview" 
                                            class="flex flex-col gap-2 bg-(--white) p-4 text-sm rounded-lg"
                                        >
                                            <p class="text-(--black)">
                                                <span class="font-bold">Our business:</span> Through its subsidiaries and affiliates, Penn Petro Energy produces crude oil and natural gas, manufactures transportation fuels, lubricants, petrochemicals and additives, and develops technologies that enhance our business and the industry. 
                                                We aim to grow our oil and gas business, lower the carbon intensity of our operations and grow new businesses. 
                                                We plan to make prudent investments without losing focus on delivering stockholder value.
                                            </p>
                                            <p class="text-(--medium-gray)">Updated: May 2025</p>
                                        </div>

                                        <!--  Board oversight -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="boardOversight"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Board oversight
                                            </h2>

                                            <div class="flex flex-col gap-4 text-(--black) text-base">
                                                <p>
                                                    Our Board of Directors oversees and provides guidance on Penn Petro Energy’s business and affairs. 
                                                    As part of its role, the Board oversees risk management policies, processes and practices that are applied throughout the company. 
                                                    Board members regularly consider critical risk topics as part of their oversight responsibility. 
                                                    Annually, through Penn Petro Energy’s Enterprise Risk Management process, they review financial, operational, market, political and other risks inherent in our business and oversee the safeguards and mitigations that are put in place. 
                                                    The Board also oversees Penn Petro Energy’s strategic and business planning process and related climate and sustainability matters. 
                                                    Given the nature of climate change and its relevance to our business, the entire Board addresses climate change-related issues, with the Board’s committees assisting the Board by focusing on climate issues related to their respective functions.
                                                </p>
                                                <p>
                                                    The Board has four standing Committees, all composed entirely of independent Directors: Audit; Board Nominating and Governance; Management Compensation; and Public Policy and Sustainability. 
                                                    Each Committee fulfills important responsibilities to assist the Board’s oversight of risks with the goal of building long-term stockholder value. Coming from various industries and backgrounds, our Board members bring broad skills, experience and expertise. 
                                                    Their range of knowledge and experience spans operational, environmental, policy, regulatory and geographical arenas. New members are added, as appropriate, to refresh the Board.
                                                </p>
                                            </div>
                                        </div>

                                        <!-- Executive-level committees -->
                                        <div class="flex flex-col gap-8 w-full h-full">                                        
                                            <h2 
                                                id="boardOversight"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Executive-level committees
                                            </h2>

                                            
                                            <p class="flex flex-col gap-4 text-(--black) text-base">
                                                The Executive Committee comprises corporate officers and is chartered by the Board of Directors to carry out policies in managing the company’s business.
                                            </p>
                                        </div>

                                        <!-- Board independence -->
                                        <div class="flex flex-col gap-8 w-full h-full">                                        
                                            <h2 
                                                id="boardIndependence"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Board independence
                                            </h2>

                                            
                                            <p class="flex flex-col gap-4 text-(--black) text-base">
                                                For a Director to be considered independent, the Board must determine that the Director does not have any material relationship with Penn Petro Energy, other than as a Director. 
                                                In making its determinations, the Board adheres to the specific tests for independence included in the listing standards of the NYSE.
                                                The Board makes an affirmative determination regarding the independence of each Director annually, based upon the recommendation of the Board Nominating and Governance Committee.
                                            </p>
                                        </div>                                    

                                        <!-- Executive officers -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="executiveOfficers"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Executive officers
                                            </h2>

                                            <div class="flex flex-col gap-2 text-(--black) text-base rounded-lg">
                                                <p>
                                                    Our culture is built upon the principles of responsibility, trust and integrity. 
                                                    Guided by our vision and values, The Penn Petro Energy Way, our Board of Directors and Corporate Officers are committed to demonstrating the highest standard of ethics.
                                                </p>

                                                <div class="grid w-full h-full gap-4">
                                                    <h3 class="text-(--medium-blue) text-xl lg:text-2xl">Succession planning</h3>
                                                    <p class="text-(--black)">
                                                        The Board is actively involved in reviewing and approving succession plans to ensure we have leadership in place with the requisite skills and experiences to continue providing the energy that enables human progress around the world. 
                                                        Members of the Board meet regularly with potential candidates for senior management positions. 
                                                        The Board also meets with the Vice President and Chief Human Resources Officer biannually to discuss succession plans.
                                                    </p>
                                                </div>
                                            
                                            </div>

                                        </div>

                                        <!--  Executive compensation -->
                                        <div class="flex flex-col gap-8 w-full h-full">
                                            
                                            <h2 
                                                id="boardOversight"
                                                class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold"
                                            >
                                                Executive compensation
                                            </h2>

                                            <p class="flex flex-col gap-4 text-(--black) text-base">
                                                The overall objective of our executive compensation program is to attract and retain management who will deliver long-term stockholder value in any business environment. 
                                                Detailed information on Penn Petro ENergy’s executive compensation can be found in the company’s annual Proxy Statement - Compensation Discussion and Analysis. 
                                            </p>

                                        </div>

                                    </div>
                                    
                                </div>
                            </Transition>

                        </div> 
                    </div>  

                    <!-- Sustainability -->
                    <div class="flex flex-col lg:flex-row *:w-full *:lg:w-1/2 w-full max-w-xl lg:max-w-7xl mx-auto shadow-lg h-fit">

                        <video 
                            autoplay 
                            loop muted playsinline
                            class="block w-full object-cover rounded-t-2xl lg:rounded-l-lg h-80 lg:h-120"
                        >
                            <source src="/landing_videos/hero2.mp4" type="video/mp4" >
                        </video>

                        <div class="flex flex-col justify-center items-center bg-(--dark-blue) h-full lg: w-full rounded-b-lg lg:rounded-r-lg">                        
                            <div class="flex flex-col items-center justify-center px-4 lg:px-8 gap-8 max-w-2xl h-80 lg:h-120">
                                <span class="text-3xl md:text-4xl text-center text-(--light-blue) font-extrabold">
                                    sustainability
                                </span>

                                <p class="text-(--white) text-center text-lg">
                                    Our approach to sustainability is integrated throughout our business.
                                    We strive to protect the environment, empower people, and get results the right way – today and tomorrow.
                                </p>

                                <NuxtLink 
                                    to="/sustainability/overview"
                                    class="group flex *:flex items-center *:items-center gap-2 text-sm w-fit font-bold text-(--white) hover:text-(--light-blue) duration-300 ease-in-out transition-all"
                                >
                                    <div class="group relative flex items-center text-xl w-12 h-full overflow-hidden">
                                        <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                            <Icon name="mdi:arrow-right"/>
                                        </div>
                                        
                                        <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                            <Icon name="mdi:arrow-right" />
                                        </div>
                                    </div>

                                    <span class="text-base">Learn more</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                </div> 


                    
            </div>
        </section> 
        
    </div>
</template>

<style lang="css" scoped>

    /* Underline Text */
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
        background-color: var(--medium-gray);
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

    /* Slide Down */
    .slide-down-enter-active,
    .slide-down-leave-active {
        transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
        overflow: hidden;
    }

    .slide-down-enter-from,
    .slide-down-leave-to {
        max-height: 0;
        opacity: 0;
    }

    .slide-down-enter-to,
    .slide-down-leave-from {
        max-height: 10rem;
        opacity: 1;
    }

</style>

