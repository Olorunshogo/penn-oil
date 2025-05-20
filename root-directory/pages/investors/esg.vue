
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
    } from '~/stores/investoresVariables';
    import {
        esgBusinessConductNavLinks,
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
                            class="flex gap-8 p-4 w-9/10 mx-auto"
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
                                                <Icon name="mdi:arrow-down"/>
                                            </div>
                                            
                                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                <Icon name="mdi:arrow-down" />
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
                                                <Icon name="mdi:arrow-down"/>
                                            </div>
                                            
                                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                <Icon name="mdi:arrow-down" />
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
                                                <Icon name="mdi:arrow-down"/>
                                            </div>
                                            
                                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                <Icon name="mdi:arrow-down" />
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
                                                <Icon name="mdi:arrow-down"/>
                                            </div>
                                            
                                            <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                <Icon name="mdi:arrow-down" />
                                            </div>
                                        </div>
                                        <span class="group-hover:underline-text font-bold text-sm">Approach to Tax and Transparency</span>
                                    </NuxtLink>

                                </div>

                            </div>
                            
                        </div>
                    </Transition>

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

