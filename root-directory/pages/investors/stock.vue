
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Reports and fillings',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Stock Information | Pennpetro Energy PLC - Shareholder Value & Market Performance',
        ogTitle: 'Pennpetro Energy PLC Stock Overview | Real-Time Market Data & Shareholder Insights',
        description: 'Get real-time stock information and historical performance data for Pennpetro Energy PLC. Stay informed on our market trends and shareholder value.',
        ogDescription: 'Explore Pennpetro Energy PLC’s stock data, including current price, trends, and performance metrics. Supporting investor confidence through transparency.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Pennpetro Energy PLC stock performance chart and market data dashboard.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/investors/stock',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Pennpetro Energy PLC Stock Information | Real-Time Data & Market Performance',
        twitterDescription: 'Track Pennpetro Energy PLC’s stock price, trends, and historical performance to support your investment decisions.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        keywords: 'Pennpetro Energy PLC stock, share price, stock performance, energy company stock, investor stock info, market trends, shareholder value, stock data, NYSE energy stocks, financial markets'
    });

    import {
        openInvestorsNav, toggleStockInvestorNavLinks,

        stockPennTransfer, togglePennTransfer,
        stockSymbol, toggleSymbol,
        stockPennStock, togglePennStock,
        stockPennDividend, togglePennDividend,
        stockManageAccount, toggleManageAccount,
        stockTransferStock, toggleTransferStock,
        stockPennIssue, togglePennIssue,

        stockProxyStatement, toggleProxyStatement,
        stockCopyMaterials, toggleCopyMaterials,

        stockBoardOfDirectors, toggleBoardOfDirectors,

        stockCommonNoble, toggleCommonNoble,
        stockNobleCertificates, toggleNobleCertificates
    } from '~/stores/investorsVariables'

    
</script>


<template>
    <div class="w-full h-full bg-white">

        <!-- Section: Hero -->
        <section>   
            <div class="relative w-screen min-h-100 h-full">

                <!-- Investor Navbar -->
                <div class="relative left-0 top-16 sm:top-12 flex flex-col w-full h-fit px-(--section-px) lg:px-(--section-px-lg) bg-transparent z-10">
                    
                    <div class="flex flex-col w-9/10 lg:w-4/5 max-w-7xl mx-auto h-fit shadow-2xl rounded-lg bg-(--dark-blue)">

                        <!-- Mobile Screen Investors Nav -->

                        <div class="flex lg:hidden flex-col lg:flex-row justify-between px-4 w-full">
                        
                            <div class="flex items-center justify-between w-full h-10 *:text-(--white)">
                                <NuxtLink
                                    to="/investors/overview"
                                    class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--white) duration-300 ease-in-out transition-all"
                                >
                                    <span class="group-hover:underline-text font-bold text-xs lg:text-sm">Investors</span>
                                </NuxtLink>

                                <button 
                                    @click="toggleStockInvestorNavLinks"
                                    class="flex items-center justify-center cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-lg font-bold duration-500 ease-in-out transition-all" 
                                        :class="{ 'rotate-180': openInvestorsNav }"
                                    />
                                </button>
                                    
                            </div>

                            <div class="flex items-center w-full h-fit">
                                <Transition name="slide-down">
                                    <div 
                                        v-if="openInvestorsNav"
                                        class="flex flex-col items-center justify-between w-full h-full"
                                    >
                                        <NuxtLink
                                            to="/investors/events"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Events and presentations</span>
                                        </NuxtLink>

                                        <NuxtLink
                                            to="/investors/corporate"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Corporate governance</span>
                                        </NuxtLink>

                                        <NuxtLink
                                            to="/investors/esg"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">ESG a-z index</span>
                                        </NuxtLink>

                                        <NuxtLink
                                            to="/investors/stock"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Stock and dividend</span>
                                        </NuxtLink>

                                        <NuxtLink
                                            to="/contact"
                                            class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) border-b-1 border-(--light-gray) w-full duration-300 ease-in-out transition-all"
                                        >
                                            <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                                <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                                    <Icon name="mdi:arrow-right"/>
                                                </div>
                                                
                                                <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                                    <Icon name="mdi:arrow-right" />
                                                </div>
                                            </div>
                                            <span class="group-hover:underline-text font-semibold text-xs">Contact</span>
                                        </NuxtLink>
                                    
                                    </div>
                                </Transition>
                            </div>

                        </div>

                        <!-- Large Screen Investors Nav -->
                        <div class="hidden lg:flex flex-col lg:flex-row items-center justify-between px-1 w-full h-10">
                        
                            <!-- <NuxtLink
                                to="/investors/overview"
                                class="group flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-2 gap-2 lg:gap-4 w-fit text-(--black) duration-300 ease-in-out transition-all"
                            >
                                <span class="group-hover:underline-text font-bold text-xs lg:text-sm">Investors</span>
                            </NuxtLink> -->

                            <NuxtLink
                                to="/investors/events"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Events</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/corporate"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Governance</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/esg"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">ESG</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/investors/stock"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Stock info</span>
                            </NuxtLink>

                            <NuxtLink
                                to="/contact"
                                class="group hidden lg:flex *:flex items-center *:items-center justify-center px-2 lg:px-8 py-3 gap-2 lg:gap-4 text-(--white) w-fit duration-300 ease-in-out transition-all"
                            >
                                <div class="group relative flex items-center justify-center text-lg w-8 h-full overflow-hidden">
                                    <div class="absolute flex items-center left-2 h-full w-12 transition-all duration-500 ease-in-out group-hover:translate-x-full">
                                        <Icon name="mdi:arrow-right"/>
                                    </div>
                                    
                                    <div class="absolute flex items-center left-2 h-full w-12 -translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0">
                                        <Icon name="mdi:arrow-right" />
                                    </div>
                                </div>
                                <span class="group-hover:underline-text font-semibold text-xs">Contact</span>
                            </NuxtLink>

                        </div>
                        
                    </div>

                </div>

                <div class="absolute top-30 w-full h-fit">
                    
                    <div class="flex flex-col items-center justify-center w-full h-full max-w-7xl mx-auto px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                        <div class="flex flex-col items-center justify-center py-16 lg:py-20 text-center gap-8 w-full max-w-7xl mx-auto">                                

                            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-(--dark-blue) text-center font-extrabold">
                                Stock and dividend
                            </h1>

                            <p class="text-(--black) text-base md:text-lg xl:text-xl text-center font-medium">
                                Explore real-time stock quotes and historical price charts, materials from our annual meetings, plus details on direct stock purchases and dividend information.
                            </p>
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Section: Investor questions and answers -->
        <section>   
            <div class="relative w-full h-full bg-(--dark-blue) py-16 lg:py-20">

                <div class="flex flex-col gap-16 lg:gap-20 px-(--section-px) lg:px-(--section-px-lg) bg-transparent w-full max-w-7xl mx-auto h-full">
                    
                    <h2 class="text-(--white) text-3xl lg:text-5xl font-extrabold">
                        Investor questions and answers
                    </h2>

                    <!-- Investing in Pennpetro Energy PLC and its FAQs dropdowns -->
                    <div class="flex flex-col gap-4 text-(--white) py-8">
                        <h3 class="text-xl text-center font-extrabold">
                            Investing in Pennpetro Energy PLC
                        </h3>


                        <!-- Stock FAQs about information in Pennpetro Energy PLC dropdowns -->
                        <div class="flex flex-col w-9/10 max-w-3xl mx-auto h-full">
                            
                            <!-- Who's Penn's transfer agent for registered stockholders? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="togglePennTransfer"
                                    class="flex *:flex items-center justify-between py-6 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>Who's Penn's transfer agent for registered stockholders?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockPennTransfer }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="out-in">
                                    <div 
                                        v-if="stockPennTransfer"
                                        class="flex flex-col text-sm lg:text-base gap-2 py-3 border-b-1 border-(--border-gray)"
                                    >
                                        <p>
                                            Pennpetro Energy PLC’s transfer agent is Computershare. 
                                            Registered stockholders, also referred to as "stockholders of record," are individuals and entities that hold stock in their own name on the records of the company. 
                                            Registered stockholders may contact Computershare by any of the above methods.
                                            
                                        </p>
                                        <p>
                                            Stock purchased and sold through a bank, brokerage firm or other nominee are referred to as “street name” stockholders and must contact the appropriate institution directly.
                                        </p>
                                    </div>
                                </Transition>
                            </div>

                            <!-- What is the stock symbol and CUSIP number for Penn stock? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="toggleSymbol"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>What is the stock symbol and CUSIP number for Penn stock?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockSymbol }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockSymbol"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        The Pennpetro Energy PLC stock symbol is CVX and the CUSIP number is 166764 10 0. 
                                        CUSIP stands for Committee on Uniform Security Identiﬁcation Procedures and is used to uniquely identify the company’s securities trading in the United States.
                                    </p>
                                </Transition>
                            </div>

                            <!-- Where are Penn stocks traded? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="togglePennStock"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>Where are Penn stocks traded?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockPennStock }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockPennStock"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        Pennpetro Energy PLC common stock is listed on the New York Stock Exchange (NYSE).
                                    </p>
                                </Transition>
                            </div>

                            <!-- Does Penn have a dividend reinvestment program? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="togglePennDividend"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>Does Penn have a dividend reinvestment program?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockPennDividend }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockPennDividend"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        For registered stockholders, Pennpetro Energy PLC has a dividend reinvestment program administered by Computershare. 
                                        Street holders should contact their stockbroker directly for information on their accounts.
                                    </p>
                                </Transition>
                            </div>

                            <!-- How do I manage my account(update address, replace dividend check)? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="toggleManageAccount"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>How do I manage my account(update address, replace dividend check)?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockManageAccount }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockManageAccount"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        Registered stockholders may manage your account online or contact Computershare by any of the above methods.
                                    </p>
                                </Transition>
                            </div>

                            <!-- How do I transfer my stock to another person or change the account registration? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="toggleTransferStock"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>How do I transfer my stock to another person or change the account registration?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockTransferStock }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockTransferStock"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        Registered stockholders may obtain information to transfer your stock or change the account registration online on the Computershare Investor Center website or contact Computershare by any of the above methods.
                                    </p>
                                </Transition>
                            </div>

                            <!-- Does Penn issue physical stock certificates? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="togglePennIssue"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>Does Penn issue physical stock certificates?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockPennIssue }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockPennIssue"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        Pennpetro Energy PLC no longer issues physical stock certificates. 
                                        Stock is issued in book-entry form.
                                    </p>
                                </Transition>
                            </div>

                        </div>
                    </div>

                    <!-- Information about Pennpetro Energy PLC and its FAQs dropdowns -->
                    <div class="flex flex-col gap-4 text-(--white) py-8">
                        <h3 class="text-xl text-center font-extrabold">
                            Information about Pennpetro Energy PLC
                        </h3>

                        <!-- Stock FAQs about information in Pennpetro Energy PLC dropdowns -->
                        <div class="flex flex-col w-9/10 max-w-3xl mx-auto h-full">                        

                            <!-- Where can I get a copy of the proxy statement? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="toggleProxyStatement"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>Where can I get a copy of the proxy statement?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockProxyStatement }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockProxyStatement"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        On our website, you can get our contact on our 
                                        <NuxtLink
                                            to="/contact"
                                            class="underline underline-offset-2 decoration-1 hover:decoration-(--light-blue) duration-300 ease-in-out transition-all"
                                        >
                                            contact
                                        </NuxtLink>
                                        page.
                                    </p>
                                </Transition>
                            </div>

                            <!-- Does Penn issue physical stock certificates? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="toggleCopyMaterials"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>How can I get a copy of the materials filed with the Securities Exchange Commission (SEC)?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockCopyMaterials }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockCopyMaterials"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        Pennpetro Energy PLC's SEC filings are made available on site. 
                                        If you require a printed copy, you can contact us through our 
                                        <NuxtLink
                                            to="/contact"
                                            class="underline underline-offset-2 decoration-1 hover:decoration-(--light-blue) duration-300 ease-in-out transition-all"
                                        >
                                            contact
                                        </NuxtLink>
                                        page
                                    </p>
                                </Transition>
                            </div>

                        </div>
                    </div>

                    <!-- Corporate governance and its FAQs dropdowns -->
                    <div class="flex flex-col gap-4 text-(--white) py-8">
                        <h3 class="text-xl text-center font-extrabold">
                            Corporate governance
                        </h3>

                        <!-- Stock corporate governance dropdowns -->
                        <div class="flex flex-col w-9/10 max-w-3xl mx-auto h-full">                        

                            <!-- Who is on Pennpetro Energy PLC's Board of Directors? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="toggleBoardOfDirectors"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>Who is on Pennpetro Energy PLC's Board of Directors?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockBoardOfDirectors }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockBoardOfDirectors"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        Information about Pennpetro Energy PLC's directors and related information can be found on the
                                        <a
                                            to="/who/leadership#boardOfDirectors"
                                            class="underline underline-offset-2 decoration-1 hover:decoration-(--light-blue) hover:cursor-pointer duration-300 ease-in-out transition-all"
                                        >
                                            leadership
                                        </a>
                                        page.
                                    </p>
                                </Transition>
                            </div>


                        </div>
                    </div>

                    <!-- Noble Merger -->
                    <div class="flex flex-col gap-4 text-(--white) py-8">
                        <h3 class="text-xl text-center font-extrabold">
                            Noble merger
                        </h3>

                        <!-- Stock noble merger dropdowns -->
                        <div class="flex flex-col w-9/10 max-w-3xl mx-auto h-full">                  

                            <!-- Is the exchange of my shares of noble Energy, Inc. common stock for shares of Pennpetro Energy PLC Corporation common stock mandatory?
                                        What will I receive in exchange for my shares of common stock? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="toggleCommonNoble"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>
                                        Is the exchange of my shares of noble Energy, Inc. common stock for shares of Pennpetro Energy PLC Corporation common stock mandatory?
                                        What will I receive in exchange for my shares of common stock?
                                    </span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockCommonNoble }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockCommonNoble"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        Yes, the exchange is mandatory. As a result of the merger of a subsidiary of Pennpetro Energy PLC Corporation (“Pennpetro Energy PLC”) into Noble Energy, Inc. (“Noble Energy”), all shares of Noble Energy common stock have been automatically canceled and converted into the right to receive 0.1191 of a share of validly issued, fully paid and non-assessable shares of Pennpetro Energy PLC common stock for each share of Noble Energy common stock and cash, without interest, in lieu of any fractional shares of Pennpetro Energy PLC common stock. 
                                        Shares of Noble Energy common stock have stopped trading and can no longer be transferred.
                                    </p>
                                </Transition>
                            </div>

                            <!-- What if i can't locate all of my Noble Energy stock certificates? -->
                            <div class="flex flex-col">
                                
                                <button 
                                    @click="toggleNobleCertificates"
                                    class="flex *:flex items-center justify-between py-4 text-(--white) border-b-1 border-(--border-gray) hover:border-(--light-blue) cursor-pointer duration-300 ease-in-out transition-all"
                                >
                                    <span>What if i can't locate all of my Noble Energy stock certificates?</span>
                                    <Icon 
                                        name="mdi:chevron-down" 
                                        class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                        :class="{ 'rotate-180': stockNobleCertificates }"
                                    />
                                </button>

                                <Transition name="slide-down" mode="in-out">
                                    <p 
                                        v-if="stockNobleCertificates"
                                        class="text-sm lg:text-base py-3 border-b-1 border-(--border-gray)"
                                    >
                                        Contact Computershare as provided above for further instructions.
                                    </p>
                                </Transition>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>

        <!-- Section: Direct stock purchases & dividend reinvestment -->
        <section>   
            <div class="relative w-full h-full">

                <div class="flex flex-col  px-(--section-px) lg:px-(--section-px-lg) bg-transparent w-full max-w-7xl mx-auto h-full">
                    
                    <div class="flex flex-col items-center justify-center gap-8 py-20">
                        <h2 class="text-(--dark-blue) text-3xl lg:text-5xl font-extrabold">
                            Direct stock purchases &amp; dividend reinvestment
                        </h2>

                        <p class="text-lg lg:text-xl text-(--black)">
                            The Computershare Investment Plan for Pennpetro Energy PLC stock allows interested investors to purchase shares of stock and participate in dividend reinvestment.
                        </p>
                    </div>

                    <div class="flex flex-col gap-4 text-(--black) py-8">
                        <h3 class="text-lg font-bold">
                            Managing your shares
                        </h3>

                        <div class="grid gap-4 *:text-lg *:lg:text-xl">
                            <p>
                                Pennpetro Energy PLC engages a transfer agent, Computershare, to assist the company in maintaining the accounts of individuals and entities that hold Pennpetro Energy PLC stock in their own name on the records of the company, sometimes referred to as "stockholders of record" or "registered stockholders."
                            </p>

                            <p>
                                When you access your account through Computershare's website, Investor Center, you can view your current balance, access your account history, obtain current and historical stock prices and purchase and sell Pennpetro Energy PLC shares through the Computershare Investment Plan. 
                                To access your existing account on the Investor Center website, you will need your user ID and password. For stockholders who do not have a Computershare Investor Center account, you may be able to create a unique user ID by answering a series of questions, completing a first-time user authentication process and creating a custom seal. The Computershare Investment Plan allows interested investors to purchase and sell shares of Pennpetro Energy PLC stock and enroll in dividend reinvestment.
                            </p>

                            <p>
                                Purchases of shares of Pennpetro Energy PLC stock through the Computershare Investment Plan can be made by electronic funds transfer or enclosing a check accompanied by a current coupon found at the bottom of your account statement. 
                                Each check must have a coupon attached. 
                                Computershare will wait up to three business days after receipt of the check or electronic funds transfer to ensure it receives good funds and will then seek to purchase shares from optional cash investments less applicable fees, in whole and fractional shares and on the open market promptly, typically daily but in no event later than five business days thereafter, assuming the relevant markets are open and sufficient market liquidity exists (and except where deferral is required under applicable federal or state laws or regulations). 
                                Although Computershare will process the investment as promptly as practicable, there is no guarantee the investment will occur on the investor's specific investment day due to delays with mail, funding, invalid or illegible documentation, etc. 
                                Please refer to the Computershare Investment Plan brochure for additional details about the plan. 
                                The check should be mailed to Computershare at one of the following:
                            </p>

                            <p>
                                Information for institutional investors on how to contact Pennpetro Energy PLC:
                            </p>

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
                                            to="tel:+18328541000" target="_blank"
                                            class="hover:text-(--medium-blue) underline decoration-1 underline-offset-2 decoration-(--light-gray) hover:decoration-(--medium-blue) hover:cursor-pointer ease-in-out duration-300 transition-all"
                                        >
                                            +1 832.854.1000
                                        </NuxtLink>
                                </p> 
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
        background-color: var(--medium-blue);
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

