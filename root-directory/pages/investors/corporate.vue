
<script lang="ts" setup>
    import { useHead } from 'nuxt/app';
    useHead({
        title: 'Pennpetro Energy PLC Corporate Governance',
        titleTemplate: '%s | Pennpetro Energy PLC'
    });

    useSeoMeta({
        title: 'Corporate Governance | Pennpetro Energy PLC - Leadership with Integrity',
        ogTitle: 'Corporate Governance - Pennpetro Energy PLC | Ethical Leadership & Accountability',
        description: 'Explore Pennpetro Energy PLC’s corporate governance practices. Learn how our leadership ensures ethical operations, accountability, and long-term shareholder value.',
        ogDescription: 'Pennpetro Energy PLC’s commitment to strong corporate governance ensures transparency, integrity, and responsible leadership in all business practices.',
        ogImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',
        ogImageAlt: 'Board meeting at Pennpetro Energy PLC reflecting ethical corporate governance.',
        ogUrl: 'https://vercel.com/bom-projects/pen-oil/investors/corporate',

        twitterCard: 'summary_large_image',
        twitterTitle: 'Corporate Governance at Pennpetro Energy PLC | Transparency & Leadership',
        twitterDescription: 'Discover how Pennpetro Energy PLC upholds high standards of corporate governance to build trust and deliver long-term value.',
        twitterImage: '/Logo/Full_Penn_Petro_Energy_Logo.jpg',

        keywords: 'Pennpetro Energy PLC corporate governance, board of directors, ethical leadership, investor trust, energy company governance, shareholder transparency, ESG leadership, governance policies, board oversight',

        author: "Olorunshogo (Moses) BAMTEFA"
    });

    import {
        roleOfBoard, toggleRoleOfBoard,
        boardSuccession, toggleBoardSuccession,
        directorOfIndependence, toggleDirectorOfIndependence,
        boardSize, toggleBoardSize,
        termsOfOffice, toggleTermsOfOffice,

        electionOfDirectors, toggleElectionOfDirectors,
        otherBoardMemberships, toggleOtherBoardMemberships,
        directorRetirementPolicy, toggleDirectorRetirementPolicy,
        numberOfBoardCommittees, toggleNumberOfBoardCommittees,
        boardLeadership, toggleBoardLeadership,

        executiveSessions, toggleExecutiveSessions,
        businessConduct, toggleBusinessConduct,
        confidentiality, toggleConfidentiality,
        successionPlanning, toggleSuccessionPlanning,
        boardCompensation, toggleBoardCompensation,

        boardAccess, toggleBoardAccess,
        directorOrientation, toggleDirectorOrientation,
        evaluationBoard, toggleEvaluationBoard,
        ceoPerformance, toggleCEOPerformance,
        directorStock, toggleDirectorStock,

        accessToOutside, toggleAccessToOutside,
        boardAgenda, toggleBoardAgenda,
        strategicPlanning, toggleStrategicPlanning,
        policyOnStockholders, togglePolicyOnStockholders,
        confidentialStockholder, toggleConfidentialStockholder,

        communicationWithBoard, toggleCommunicationWithBoard,
        reportingConcerns, toggleReportingConcerns,
        policyOnStockholdersRights, togglePolicyOnStockholdersRights,
        periodicReview, togglePeriodicReview,

    } from '~/stores/investorsVariables';


</script>


<template>
    <div class="w-full h-full bg-white">

        <!-- Section: Hero -->
        <section>   
            <div class="relative w-full h-full px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg)">

                <div class="grid gap-12 lg:gap-16 py-8 w-full h-fit">
                    
                    <div class="flex flex-col items-center justify-center gap-8 w-full h-full max-w-7xl mx-auto">

                        <div class="flex flex-col items-center justify-center text-center gap-3 w-full max-w-7xl mx-auto">                                

                            <span class="text-base text-(--dark-blue) text-center font-bold">
                                Investor relations
                            </span>

                            <h1 class="text-3xl lg:text-6xl text-(--dark-blue) pb-4 text-center font-bold">
                                Corporate Governance
                            </h1>

                            <p class="text-(--black) text-center font-medium">
                                Promoting strong corporate governance practices
                            </p>
                            
                        </div>

                        <p class="text-(--black)">
                            The Board of Directors of Pennpetro Energy PLC directs the affairs of the Corporation and is committed to sound principles of corporate governance. 
                            Documents included in this section provide ways for investors to understand the foundation of our corporate governance.
                        </p>
                    </div>

                    <!-- Board of Directors -->
                    <div class="flex flex-col items-center justify-center gap-8 w-full">                                

                        <h2 class="text-2xl lg:text-3xl text-(--dark-blue) pb-4 text-center font-extrabold">
                            Board of Directors
                        </h2>


                        <!-- Pennpetro Energy PLC Board of Directors -->
                        <BoardOfDirectors />
                        
                    </div>
                </div>

            </div>
        </section>

        <!-- Section: Governance guidelines and its dropdown, Committtee membership -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">
                
                <div class="flex flex-col w-full max-w-7xl mx-auto h-full gap-20">

                    <!-- Governance guidelines dropdowns/category -->
                    <div class="flex flex-col w-9/10 max-w-3xl mx-auto h-full">
                        
                        <!-- Role of the Board of directors -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleRoleOfBoard"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Role of board of directors</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': roleOfBoard }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="roleOfBoard"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Board of Directors oversees and provides policy guidance on the business and affairs of the Corporation. 
                                    It monitors overall corporate performance, the integrity of the Corporation's financial controls and the effectiveness of its legal compliance and enterprise risk management programs. 
                                    The Board oversees management and plans for the succession of key executives. 
                                    The Board oversees the Corporation's strategic and business planning process. 
                                    This is generally a year-round process culminating in full meeting Board reviews of the Corporation's updated Corporate Strategic Plan, its business plan, the next year's capital expenditures budget plus key financial and supplemental objectives.
                                </p>
                            </Transition>
                        </div>

                        <!-- Board succession planning; membership criteria </sp -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleBoardSuccession"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Board succession planning; membership criteria </span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': boardSuccession }"
                                />
                            </button>

                            <Transition name="slide-down" mode="in-out">
                                <p 
                                    v-if="boardSuccession"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Board Nominating and Governance Committee engages in succession planning for the Board and key leadership roles on the Board and its Committees.
                                    Directors should have the highest professional and personal ethics and values, consistent with The Pennpetro Energy PLC Way and the Business Conduct and Ethics Code, and a commitment to building stockholder value. 
                                    They should have business acumen and broad experience and expertise at the policy-making level in one or more of the areas of particular consideration below and should be able to provide insights and practical wisdom based on their experience or expertise. 
                                    They should have sufficient time to effectively carry out their duties.
                                    The Board Nominating and Governance Committee annually reviews the composition of the Board as a whole to assess the skills and characteristics that are currently represented on the Board, and in individual Directors, as well as the skills and characteristics that the Board may find valuable in the future, in light of the current and anticipated strategic plans and operating requirements of the Corporation and the long-term interests of stockholders.
                                    In conducting this assessment, the Committee particularly considers leadership experience in business as a chief executive officer, senior executive or leader of significant business operations; experience leading business transformation; expertise in science, technology, engineering, research, or academia; extensive knowledge of governmental, regulatory, legal, or public policy issues; expertise in finance, financial disclosure, or financial accounting; global business or international affairs experience; environmental experience (including with respect to climate change issues); public company board service; ability to dedicate sufficient time to serve on the Board, and diversity, of age, gender, and ethnicity, and such other factors as it deems appropriate given the current and anticipated needs of the Board and the Corporation, to maintain a balance of knowledge, experience, background, and capability.
                                </p>
                            </Transition>
                        </div>

                        <!-- Director of independence -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleDirectorOfIndependence"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Director of independence</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': directorOfIndependence }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                
                                <div 
                                    v-if="directorOfIndependence"
                                    class="flex flex-col text-sm lg:text-base gap-2 p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        A majority of the Board consists of independent Directors, as defined by the New York Stock Exchange. 
                                        To be considered “independent,” a Director must be determined by the Board, after recommendation by the Board Nominating and Governance Committee and after due deliberation, to have no material relationship with the Company other than as a Director. 
                                        In making its determination concerning the absence of a material relationship, the Board adheres to all of the specific tests for independence included in the New York Stock Exchange listing standards. 
                                        In addition, the Board has determined that the following relationships of Pennpetro Energy PLC Directors occurring within the last fiscal year are categorically immaterial if the relevant transactions are conducted in the ordinary course of business:
                                        
                                    </p>
                                    <ul class="pl-4 grid gap-2">
                                        <li>
                                            <span class="font-bold">Director of another entity</span> if business transactions in the most recent fiscal year between Pennpetro Energy PLC and that entity do not exceed $5 million or five percent of the receiving entity's consolidated gross revenues for that year, whichever is greater;
                                        </li>
                                        <li>
                                            <span class="font-bold">Employee of another entity</span>  if business transactions in the most recent fiscal year between Pennpetro Energy PLC and that entity do not exceed $250,000 or 0.5 percent of the receiving entity’s consolidated gross revenues for that year, whichever is greater;
                                        </li>
                                        <li>
                                            <span class="font-bold">Director of another entity</span> if Pennpetro Energy PLC's discretionary charitable contributions in the most recent fiscal year to that entity do not exceed $1 million or two percent of that entity’s gross revenues for that year, whichever is greater, and if the charitable contributions are consistent with Pennpetro Energy PLC’s philanthropic practices; and
                                        </li>
                                        <li>
                                            <p>A relationship arising solely from a Director's ownership of an equity or limited partnership interest in a party that engages in a transaction with Pennpetro Energy PLC, so long as the Director's ownership interest does not exceed two percent of the total equity or partnership interest in that other party.</p>
                                        </li>
                                    </ul>
                                    <p>
                                        The Board makes an affirmative determination regarding the independence of each Director annually, based upon the recommendation of the Board Nominating and Governance Committee.
                                    </p>
                                </div>
                            </Transition>
                        </div>

                        <!-- Board size -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleBoardSize"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Board size</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': boardSize }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="boardSize"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The By-Laws provide that the number of Directors is determined by the Board. 
                                    The Board's size is assessed at least annually by the Board Nominating and Governance Committee and changes are recommended to the Board when appropriate. 
                                    If any nominee is unable to serve as a Director, the Board may reduce the number of Directors or choose a substitute.
                                </p>
                            </Transition>
                        </div>

                        <!-- Terms of Office -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleTermsOfOffice"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Terms of office</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': termsOfOffice }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="termsOfOffice"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    Directors serve for a one-year term and until their successors are elected.
                                </p>
                            </Transition>
                        </div>

                        <!-- Election of Directors -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleElectionOfDirectors"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Election of Directors</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': electionOfDirectors }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="electionOfDirectors"
                                    class="grid text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        As provided in Pennpetro Energy PLC’s By-Laws, candidates for Directors are elected annually by a majority vote in an uncontested election and by a plurality vote in a contested election. 
                                        Any Director nominated for re-election who does not receive more votes cast “for” such nominee's election than votes cast “against” such nominee’s election, excluding abstentions, is expected to submit his or her offer of resignation for consideration by the Board Nominating and Governance Committee. 
                                        The Board Nominating and Governance Committee shall consider all of the relevant facts and circumstances, including the Director’s qualifications, the Director’s past and expected future contributions to the Corporation, the overall composition of the Board and whether accepting the tendered resignation would cause the Corporation to fail to meet any applicable rule or regulation (including New York Stock Exchange listing requirements and federal securities laws) and recommend to the Board the action to be taken with respect to such offer of resignation. 
                                        The Board intends to nominate for re-election only nominees who agree to offer the resignation contemplated by this Guideline.
                                    </p>
                                    <p>
                                        The Board of Directors proposes a slate of nominees for election by the stockholders at the Annual Meeting each year. 
                                        Between Annual Meetings, the Board may select one or more Directors to serve until the next Annual Meeting. 
                                        The Board Nominating and Governance Committee identifies, investigates and recommends prospective directors to the Board with the goal of creating a balance of knowledge, experience and diversity aligned with the long-term interest of stockholders.
                                    </p>
                                    <p>
                                        Stockholders may recommend a nominee by writing to the Corporate Secretary specifying the nominee’s name and the qualifications for Board membership. 
                                        All recommendations are brought to the attention of the Board Nominating and Governance Committee. 
                                        Stockholders may submit a nomination for Director if done in accordance with Article IV., Section 6, of the By-Laws of the Corporation (the “Advance Notice By-Law”). 
                                        Under the Advance Notice By-Law, the Board or the chairman of the meeting have the power to determine whether Director nominee submissions under the Advance Notice By-Law and for inclusion on a universal proxy card under Rule 14a-19 of the Securities Exchange Act of 1934 (“Rule 14a-19”) meet the procedural requirements necessary for such nominee to be included on the universal proxy card. 
                                        Any such determination that such procedural requirements have been met is not a recommendation of such nominee and signifies only that the chairman of the meeting or the Board is not aware of any information that would disqualify the nominee from serving on the Board for purposes of Rule 14a-19 and the Corporation’s By-Laws. 
                                        Stockholders also may submit a nomination for Director for inclusion in the Corporation’s proxy statement if done in accordance with the proxy access provisions in Article IV, Section 7 of the By-Laws.
                                    </p>
                                </div>
                            </Transition>
                        </div>

                        <!-- Other board membershps -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleOtherBoardMemberships"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Other board membershps</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': otherBoardMemberships }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="otherBoardMemberships"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    Directors should limit their other board memberships to a number that permits them, given their individual circumstances, to responsibly perform all of their Director duties, with no Director serving on the boards of more than four publicly traded companies. 
                                    A Director who also serves as board Chair or Lead Director of a publicly traded company should not serve on more than three boards of publicly traded companies (including the company for which the Director is board Chair or Lead Director). 
                                    A Director who also serves as the CEO of a publicly traded company should not serve on more than two boards of publicly traded companies (including the company for which the Director is CEO). 
                                    When recommending individuals as nominees for the Board under the “Election of Directors” section above and in connection with Director evaluations under the “Evaluation of Board Performance” section below, the Board Nominating and Governance Committee will consider each Director’s outside commitments, including directorships or leadership positions at other publicly traded and private companies and non[1]profit entities, to help determine whether such outside commitments impair the Director’s effectiveness as a member of the Board. 
                                    To avoid any potential conflict of interest, Directors will not accept a seat on any additional public or private company board without first notifying the Lead Director and the Chairman of the Board. 
                                    The Board Nominating and Governance Committee reviews and approves the election of any employee Director to outside, for-profit board positions.
                                </p>
                            </Transition>
                        </div>

                        <!-- Number and composition of board committees -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleDirectorRetirementPolicy"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Director retirement policy</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': directorRetirementPolicy }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="directorRetirementPolicy"
                                    class="grid text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        Non-employee Directors may not stand for re-election after reaching age 74. 
                                        Employee Directors may not serve as Directors once their employment with the Corporation ends. Mandatory retirement for employee Directors is age 65.
                                    </p>
                                    <p>
                                        A non-Employee Director is expected to submit to the Board Nominating and Governance Committee a letter offering to resign if his or her principal occupation or business association changes substantially during his or her tenure as a Director. 
                                        The Board Nominating and Governance Committee will review and recommend to the Board the action, if any, to be taken with respect to the offer of resignation. 
                                        The Board intends to nominate for re-election only nominees who agree to offer the resignation contemplated by this Guideline.
                                    </p>
                                </div>
                            </Transition>
                        </div>

                        <!-- Number and composition of board committees -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleNumberOfBoardCommittees"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Number and composition of board committees</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': numberOfBoardCommittees }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="numberOfBoardCommittees"
                                    class="grid text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        The Board has four standing Committees: Audit, Board Nominating and Governance, Management Compensation, and Public Policy and Sustainability. 
                                        Board Committee members shall be appointed annually by the Board upon the recommendation from the Board Nominating and Governance Committee. 
                                        All Committees are comprised solely of independent Directors. 
                                        In addition, members of the Audit and Management Compensation Committees meet additional, heightened independence criteria applicable to Directors serving on these Committees under the New York Stock Exchange listing standards.
                                        Each standing Committee is chaired by an independent Director who determines the agenda, the frequency and length of the meetings and who has unlimited access to management, information and outside advisors, as necessary and appropriate. 
                                        Each independent Director generally serves on one or two Committees. Committee members serve staggered terms enabling Directors to rotate periodically to different Committees. 
                                        Four- to six-year terms for Committee Chairpersons facilitate rotation of Committee chairpersons while preserving experienced leadership.
                                    </p>
                                    <p>
                                        Each standing Committee operates under a written charter that sets forth the purposes and responsibilities of the Committee as well as qualifications for Committee membership. 
                                        Each standing Committee assesses the adequacy of its charter periodically and recommends changes to the Board Nominating and Governance Committee, as appropriate. 
                                        All Committees report regularly to the full Board of Directors with respect to their activities.
                                    </p>
                                </div>
                            </Transition>
                        </div>

                        <!-- Board leadership and lead director -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleBoardLeadership"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Board leadership and lead director</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': boardLeadership }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="boardLeadership"
                                    class="grid text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        The Board Nominating and Governance Committee reviews the Board’s leadership structure annually and in planning for a leadership transition, and recommends changes to the Board of Directors as appropriate.
                                        The independent Directors select the Chairman of the Board annually. 
                                        The independent Directors review the propriety of combining or separating the offices of Chairman and CEO annually in connection with its selection of the Chairman. 
                                        The independent Directors may select the Corporation’s CEO to serve as Chairman.
                                    </p>
                                    <p>
                                        When the Board selects the CEO to serve as Chairman, the independent Directors will annually select a Lead Director from among the independent Directors serving on the Corporation’s Board. 
                                        The Lead Director will chair all meetings of the Board in the Chairman’s absence, chair the executive sessions, lead non-management Directors in an annual discussion of the performance evaluation of the CEO as well as communicate that evaluation to the CEO, oversee the process for CEO succession planning, lead the Board’s review of the Board Nominating and Governance Committee’s assessment and recommendations from the Board self-evaluation process, lead the individual Director evaluation process, serve as a liaison between the Chairman and the independent Directors, consult with the Chairman on and approve agendas and schedules for Board meetings and other matters pertinent to the Corporation and the Board, be available to advise the Committee chairs of the Board in fulfilling their designated roles and responsibilities, and participate in the interview process for prospective directors with the Board Nominating and Governance Committee.
                                        The Lead Director will have the authority to call meetings of the independent Directors and will be available as appropriate for consultation and direct communication with major stockholders.
                                    </p>
                                </div>
                            </Transition>
                        </div>

                        <!-- Executive sessions -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleExecutiveSessions"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Executive sessions</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': executiveSessions }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="executiveSessions"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    Independent Directors meet in executive session at each regularly scheduled Board meeting. The sessions are chaired by the Lead Director if the CEO serves as Chairman; otherwise, the sessions are chaired by the Chairman. 
                                    Any independent Director can request that an executive session be scheduled. 
                                </p>
                            </Transition>
                        </div>

                        <!-- Business conduct and ethics code -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleBusinessConduct"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Business conduct and ethics code</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': businessConduct }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="businessConduct"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Board expects all Directors, as well as officers and employees, to display the highest standard of ethics, consistent with The Pennpetro Energy PLC Way. 
                                    The Board also expects Directors, officers and employees to acknowledge their adherence to the Corporation's Business Conduct and Ethics Code.
                                    The Corporation has and will continue to maintain the Business Conduct and Ethics Code. 
                                    The Board's Audit Committee periodically reviews compliance with this Code. 
                                </p>
                            </Transition>
                        </div>

                        <!-- Confidentiality -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleConfidentiality"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Confidentiality</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': confidentiality }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="confidentiality"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The proceedings and deliberations of the Board and its Committees are confidential. 
                                    Each Director will maintain the confidentiality of all proprietary, privileged or otherwise protected information about the Corporation and other entities that the Director obtains in connection with his or her service as a Director, except where the disclosure is authorized or required by law.
                                </p>
                            </Transition>
                        </div>

                        <!-- Succession planning -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleSuccessionPlanning"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Succession planning</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': successionPlanning }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="successionPlanning"
                                    class="grid text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        Annually, the Lead Director will lead the independent Directors’ review of candidates for all senior management positions to assess the candidates who are available for these positions and understand the development plans being utilized to strengthen the skills and qualifications of the candidates.
                                    </p>
                                    <p>
                                        The succession planning process includes consideration of both ordinary course succession, in the event of planned promotions and retirements, and planning for situations where the CEO or another member of senior management unexpectedly become unable to perform the duties of their positions.
                                    </p>
                                </div>
                            </Transition>
                        </div>

                        <!-- Board compensation -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleBoardCompensation"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Board compensation</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': boardCompensation }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="boardCompensation"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    Non-employee Directors receive compensation that is competitive, links rewards to business results and stockholder returns, and facilitates increased ownership of the Corporation's stock. 
                                    The compensation consists of cash and equity components with a goal of providing greater than 50 percent of compensation in equity. 
                                    The Corporation does not have a retirement plan for non-employee Directors. 
                                    Employee Directors are not paid additional compensation for their services as Directors. 
                                    The Board Nominating and Governance Committee periodically reviews and recommends changes to Board compensation to maintain total compensation that is competitive and appropriate. 
                                </p>
                            </Transition>
                        </div>

                        <!-- Board access to employees -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleBoardAccess"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Board access to employees</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': boardAccess }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="boardAccess"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The proceedings and deliberations of the Board and its Committees are confidential. 
                                    Each Director will maintain the confidentiality of all proprietary, privileged or otherwise protected information about the Corporation and other entities that the Director obtains in connection with his or her service as a Director, except where the disclosure is authorized or required by law.
                                </p>
                            </Transition>
                        </div>

                        <!-- Director orientation and education -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleDirectorOrientation"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Director orientation and education</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': directorOrientation }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="directorOrientation"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Corporation has and will continue to maintain an orientation program that contains written material, oral presentations and site visits. 
                                    The Corporation maintains a list of continuing director education opportunities and all directors are encouraged to periodically attend, at Company expense, director continuing education programs offered by various organizations.
                                     The Corporation also provides ongoing Director education through presentations at Board and Committee meetings and Board briefings.
                                </p>
                            </Transition>
                        </div>

                        <!-- Evaluation of board performance -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleEvaluationBoard"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Evaluation of board performance</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': evaluationBoard }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="evaluationBoard"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Corporation has and will continue to maintain an orientation program that contains written material, oral presentations and site visits. 
                                    The Corporation maintains a list of continuing director education opportunities and all directors are encouraged to periodically attend, at Company expense, director continuing education programs offered by various organizations.
                                     The Corporation also provides ongoing Director education through presentations at Board and Committee meetings and Board briefings.
                                </p>
                            </Transition>
                        </div>

                        <!-- Chief executive officer performance review -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleCEOPerformance"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Chief executive officer performance review</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': ceoPerformance }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="ceoPerformance"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Board annually reviews the CEO performance. 
                                    To conduct this review, the Board Nominating and Governance and Management Compensation Committee chairpersons gather and consolidate input from all Directors. 
                                    The consolidated input is reviewed at a meeting in executive session with all independent Directors after which the chairpersons present the results of the review to the CEO.
                                </p>
                            </Transition>
                        </div>

                        <!-- Director and officer stock ownership guidelines -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleDirectorStock"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Director and officer stock ownership guidelines</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': directorStock }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="directorStock"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Board expects all Directors and executive officers to display confidence in the Corporation by ownership of a significant amount of stock. 
                                    The Board has structured its compensation to strive to result in ownership of at least seven times the annual cash retainer amount or 15,000 shares of stock or stock units after five years of service as a Director. 
                                    The Board Nominating and Governance Committee periodically assesses the guidelines and Directors' ownership relative to these guidelines, and makes recommendations as appropriate. 
                                    The Board has also established stock ownership guidelines for executive officers of the Corporation. 
                                    Targets are based on a multiple of base salary: CEO six times; Vice Chairman, Executive Vice Presidents and Chief Financial Officer four times; all other executive officers two times. 
                                    Executives are expected to achieve targets within five years of assuming their positions. 
                                    The Management Compensation Committee periodically assesses the guidelines and the executive officers' ownership relative to these guidelines, and makes recommendations as appropriate.
                                </p>
                            </Transition>
                        </div>

                        <!-- Access to outside advisors -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleAccessToOutside"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Access to outside advisors</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': accessToOutside }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="accessToOutside"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Board and each Board Committee have the right at any time to retain outside financial, legal or other advisors.
                                </p>
                            </Transition>
                        </div>

                        <!-- Board agenda and meetings -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleBoardAgenda"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Board agenda and meetings</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': boardAgenda }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="boardAgenda"
                                    class="grid text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        The Chairman in coordination with the Lead Director sets the schedule for Board meetings and determines the timing and length of the meetings of the Board. 
                                        In addition to regularly scheduled meetings, unscheduled Board meetings may be called, upon proper notice, at any time to address specific needs of the Corporation. 
                                        The Annual Meeting of stockholders generally will be scheduled in conjunction with a regularly scheduled Board meeting. 
                                        The Board expects all Directors to attend regularly scheduled Board meetings and the Annual Meeting of stockholders, unless there are extenuating circumstances.
                                    </p>
                                    <p>
                                        The Chairman in consultation with the Lead Director establishes the agenda for each Board meeting, taking into account input and suggestions from other Directors and management. 
                                        The Directors also provide input for additional pre-meeting materials. 
                                        They make suggestions to the appropriate Committee chairperson at any time. 
                                        The agendas for Board meetings provide opportunities for the operating heads of the major businesses of the Corporation to make presentations to the Board.
                                    </p>
                                </div>
                            </Transition>
                        </div>
                        
                        <!-- Strategic planning -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleStrategicPlanning"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Strategic planning</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': strategicPlanning }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="strategicPlanning"
                                    class="grid text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        Each year the Board reviews the long-term strategic plan for the Corporation and the principal issues that the Corporation expects to face in the future.
                                    </p>
                                    <p>
                                        The Board dedicates at least one Board meeting each year to focus on strategic planning.  
                                        In addition, various elements of strategy are discussed at every regular Board meeting, as well as at meetings of the Board’s Committees. 
                                        In order to assess performance against the strategic plan, the Board receives regular updates on progress and execution and provides guidance and direction throughout the year.
                                    </p>
                                </div>
                            </Transition>
                        </div>

                        <!-- Policy on stockholder proposals receiving majority approval -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="togglePolicyOnStockholders"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Policy on stockholder proposals receiving majority approval</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': policyOnStockholders }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="policyOnStockholders"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Board will reconsider any stockholder proposal not supported by the Board that receives a majority of the votes cast at the Annual Meeting at which a quorum is present. 
                                    Action taken on the proposal will be reported to stockholders in a timely manner. 
                                </p>
                            </Transition>
                        </div>

                        <!-- Confidential stockholder voting policy -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleConfidentialStockholder"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Confidential stockholder voting policy</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': confidentialStockholder }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <div 
                                    v-if="confidentialStockholder"
                                    class="grid text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    <p>
                                        Pennpetro Energy PLC has a confidential voting policy to protect stockholders' voting privacy. 
                                        Under this policy, ballots, proxy forms and voting instructions returned to brokerage firms, banks and other holders of record are kept confidential. 
                                        Only the proxy solicitor, proxy tabulator and the Inspector of Election have access to the ballots, proxy forms and voting instructions.
                                    </p>
                                    <p>
                                        Anyone who processes or inspects ballots, proxy forms or voting instructions signs a pledge to treat them as confidential. 
                                        None of these persons is a Pennpetro Energy PLC employee. 
                                        The proxy solicitor and the proxy tabulator will disclose information taken from the ballots, proxy forms and voting instructions only in the event of a proxy contest or as otherwise required by law.
                                    </p>
                                </div>
                            </Transition>
                        </div>

                        <!-- Communication with the board of directors -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleCommunicationWithBoard"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Communication with the board of directors</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': communicationWithBoard }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="communicationWithBoard"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    Interested parties wishing to communicate their concerns or questions about Pennpetro Energy PLC to the Lead Director or to independent Directors may do so by U.S. mail to Lead Director or to Independent Directors, c/o Office of the Corporate Secretary, Pennpetro Energy PLC Corporation, 5001 Executive Parkway, Suite 200, San Ramon, CA 94583. 
                                    The Corporate Secretary will compile the communications, summarize lengthy or repetitive communications and forward to the Lead Director or the independent Directors. The Corporate Secretary will also coordinate any requests from stockholders for additional communications with the Lead Director. 
                                </p>
                            </Transition>
                        </div>

                        <!-- Reporting of concerns regarding accounting, internal accounting controls or auditing matters -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="toggleReportingConcerns"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Reporting of concerns regarding accounting, internal accounting controls or auditing matters</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': reportingConcerns }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="reportingConcerns"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                    The Audit Committee has procedures in place to receive, retain and treat complaints received regarding accounting, internal accounting controls or auditing matters and to allow for the confidential and anonymous submission by anyone of concerns regarding questionable accounting or auditing matters. 
                                    These procedures can be found on the Pennpetro Energy PLC website at
                                    <NuxtLink
                                        to="/investors/corporate"
                                        target="_blank"
                                        class="text-(--medium-blue) underline underline-offset-3 decoration-1 decoration-transparent hover:decoration-(--medium-blue) duration-300 ease-in-out transition-all"
                                    >
                                        https://pen-oil-bom-projects.vercel.app/investors/corporate
                                    </NuxtLink>
                                </p>
                            </Transition>
                        </div>

                        <!-- Policy on stockholder rights plans -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="togglePolicyOnStockholdersRights"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Policy on stockholder rights plans</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': policyOnStockholdersRights }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="policyOnStockholdersRights"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                   The Board will obtain stockholder approval of any stockholder rights plan. 
                                   The Board will obtain such approval prior to the implementation of a stockholder rights plan, except in the following limited circumstance. 
                                   If a majority of the independent Directors conclude that it would be detrimental to the best interests of the Corporation and the holders of the majority of the shares of its common stock to defer the effectiveness of a stockholder rights plan until stockholder approval of the plan can be obtained, then the Board may implement a rights plan prior to obtaining stockholder approval. 
                                   In such a case, the Board will submit the stockholder rights plan to stockholders for approval at the first meeting of stockholders for which a record date passes after the adoption of the stockholder rights plan. 
                                   If stockholder approval is not obtained, the rights plan would terminate not later than 30 days after the vote has been certified by the inspector of elections
                                </p>
                            </Transition>
                        </div>

                        <!-- Periodic Review -->
                        <div class="flex flex-col">
                            
                            <button 
                                @click="togglePeriodicReview"
                                class="flex *:flex items-center justify-between py-3 text-(--medium-blue) font-bold border-b-1 border-(--border-gray) hover:border-(--medium-blue) cursor-pointer duration-300 ease-in-out transition-all"
                            >
                                <span>Periodic Review</span>
                                <Icon 
                                    name="mdi:chevron-down" 
                                    class="text-2xl md:text-3xl duration-500 ease-in-out transition-all"
                                    :class="{ 'rotate-180': periodicReview }"
                                />
                            </button>

                            <Transition name="slide-down" mode="out-in">
                                <p 
                                    v-if="periodicReview"
                                    class="text-sm lg:text-base p-3 border-b-1 border-(--border-gray)"
                                >
                                   The Board Nominating and Governance Committee and the Board review these Corporate Governance Guidelines and related corporate governance documents at least annually and revise as appropriate
                                </p>
                            </Transition>
                        </div>

                    </div>

                    <p class="text-(--black)">
                        These guidelines have been adopted by the Pennpetro Energy PLC Board of Directors. 
                        The guidelines, in conjunction with the Restated Certificate of Incorporation, By-Laws and Board Committee charters, form the framework for governance of the Corporation.
                    </p>

                </div>

            </div>

        </section>


        <!-- Section: Charters, Business conduct and ethics, Contact the board -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) w-full h-full">
                
                <div class="flex flex-col w-full max-w-7xl mx-auto h-full gap-20">

                    <!-- Charters -->
                    <div class="flex flex-col gap-4 w-full h-full">
                        <h3 class="text-xl lg:text-2xl text-(--dark-blue) pb-4 text-center font-bold">Charters</h3>

                        <!-- Audit committee -->
                        <div class="flex flex-col gap-4 w-full h-full">
                            <h4 class="text-lg font-bold text-(--dark-blue)">Audit committee</h4>

                            <p class="text-(--black)">
                                The Audit Committee assists the Board of Directors in ensuring that the corporation’s financial statements are properly audited, that the corporation maintains an effective internal audit function and that the corporation complies with legal and regulatory requirements, among other duties.
                            </p>                                                       
                        </div>

                        <!-- Board nominating and governance committee -->
                        <div class="flex flex-col gap-4 w-full h-full">
                            <h4 class="text-lg font-bold text-(--dark-blue)">Board nominating and governance committee</h4>

                            <p class="text-(--black)">
                                The Board Nominating and Governance Committee assists the Board of Directors in defining and assessing qualifications for membership on the Board, identifying qualified candidates, and in devoting appropriate attention and effective response to stockholder concerns regarding corporate governance, among other duties.
                            </p>                                                      
                        </div>

                        <!-- Management compensation committee -->
                        <div class="flex flex-col gap-4 w-full h-full">
                            <h4 class="text-lg font-bold text-(--dark-blue)">Management compensation committee</h4>

                            <p class="text-(--black)">
                                The Management Compensation Committee assists the Board of Directors in determining salary and other compensation matters for executive officers and in establishing and administering incentive compensation and equity-based compensation plans for company management, among other duties.
                            </p>                                                      
                        </div>

                        <!-- Public policy and sustainability committee -->
                        <div class="flex flex-col gap-4 w-full h-full">
                            <h4 class="text-lg font-bold text-(--dark-blue)">Public policy and sustainability committee</h4>

                            <p class="text-(--black)">
                                The Public Policy and Sustainability Committee assists the Board of Directors in overseeing environmental, social, human rights, political, and public policy matters that are relevant to the Corporation’s activities and performance. It also assists the Board of Directors in response to stockholder concerns regarding environmental, social, human rights, political, and public policy matters.
                            </p>                                                      
                        </div>

                    </div>

                    <!-- Business conduct and ethics -->
                    <div class="flex flex-col gap-4 w-full h-full">
                        <h3 class="text-2xl lg:text-4xl text-(--dark-blue) pb-4 text-center font-bold">Business conduct and ethics</h3>

                        <p class="text-(--black)">
                            Pennpetro Energy PLC and its employees have a worldwide reputation for conducting business with honesty and integrity. Our Business Conduct and Ethics Code provides information about how we conduct our day-to-day business activities according to the principles of The Pennpetro Energy PLC Way. The Business Conduct and Ethics Code is required reading for all directors and employees.
                        </p>
                    </div>

                    <!-- Contact the board -->
                    <div class="flex flex-col gap-4 w-full h-full">
                        <h3 class="text-xl lg:text-3xl text-(--dark-blue) text-center font-bold">Contact the board</h3>

                        <div class="flex flex-col gap-4 w-full h-full">
                            <h4 class="text-lg font-bold text-(--dark-blue)">Board of directors</h4>

                            <p class="text-(--black)">
                                Interested parties wishing to communicate their concerns or questions about Pennpetro Energy PLC may do so by mail to:
                            </p>

                            <p class="text-(--black)">
                                <span class="font-bold">Head office: </span>6 Heddon Street London,<br>
                                W1B 4BT,<br>
                                United Kingdom <br>
                                Telephone: 
                                <NuxtLink
                                    to="tel:+447700105171" target="_blank"
                                    class="hover:text-(--medium-blue) underline decoration-1 underline-offset-2 decoration-(--dark-gray) hover:decoration-(--medium-blue) hover:cursor-pointer ease-in-out duration-300 transition-all"
                                >
                                    +44 7700 105171
                                </NuxtLink>
                            </p> 

                            <p class="text-(--black)">
                                Check the
                                <NuxtLink
                                    to="/contact"
                                    class="hover:text-(--medium-blue) underline decoration-1 underline-offset-3 decoration-(--dark-gray) hover:decoration-(--medium-blue) hover:cursor-pointer ease-in-out duration-300 transition-all"
                                >contact</NuxtLink>
                                page for more information on how to contact us at Pennpetro Energy PLC.
                            </p>
                                                       
                        </div>


                    </div>  
                </div>

            </div>

        </section>

        <!-- Section: Resources -->
        <section>
            <div class="relative px-(--section-px) lg:px-(--section-px-lg) py-(--section-py) lg:py-(--section-py-lg) bg-(--light-gray) w-full h-full">
                
                <div class="flex flex-col w-full max-w-7xl mx-auto h-full gap-8 py-20">

                   <h2 class="text-xl font-extrabold text-(--dark-blue) text-center">Resources</h2>

                   <div class="flex flex-col items-center gap-4 justify-center w-full h-full sm:flex-wrap sm:flex-row *:w-4/5 *:max-w-sm *:lg:w-3/5">

                        <div class="flex flex-col items-center justify-center w-full mx-auto h-full border-1 border-(--border-gray) hover:border-(--medium-gray) bg-(--white) shadow-sm hover:shadow-2xl duration-300 ease-in-out transition-all">
                            <NuxtLink
                                to="/newsroom" 
                                class="group flex *:flex items-center *:items-center justify-between w-full h-14 p-3 duration-300 ease-in-out transition-all"
                            >
                                <span class="text-xs font-extrabold text-(--medium-blue) group-hover:underline-text">
                                    2024 Annual Report
                                </span>
                                <span class="text-(--medium-blue) hover:text-(--light-blue)">
                                    <Icon name="mdi:chevron-right" />
                                </span>
                            </NuxtLink>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full mx-auto h-full border-1 border-(--border-gray) hover:border-(--medium-gray) bg-(--white) shadow-sm hover:shadow-2xl duration-300 ease-in-out transition-all">
                            <a
                                href="/sustainability/overview#sustainabilityHighlight" 
                                class="group flex *:flex items-center *:items-center justify-between w-full h-14 p-3 duration-300 ease-in-out transition-all"
                            >
                                <span class="text-xs font-extrabold text-(--medium-blue) group-hover:underline-text">
                                    2024 Corporate Sustainability Highlights
                                </span>
                                <span class="text-(--medium-blue) hover:text-(--light-blue)">
                                    <Icon name="mdi:chevron-right" />
                                </span>
                            </a>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full mx-auto h-full border-1 border-(--border-gray) hover:border-(--medium-gray) bg-(--white) shadow-sm hover:shadow-2xl duration-300 ease-in-out transition-all">
                            <NuxtLink
                                to="/newsroom" 
                                class="group flex *:flex items-center *:items-center justify-between w-full h-14 p-3 duration-300 ease-in-out transition-all"
                            >
                                <span class="text-xs font-extrabold text-(--medium-blue) group-hover:underline-text">
                                    View archive of previous years' reports
                                </span>
                                <span class="text-(--medium-blue) hover:text-(--light-blue)">
                                    <Icon name="mdi:chevron-right" />
                                </span>
                            </NuxtLink>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full mx-auto h-full border-1 border-(--border-gray) hover:border-(--medium-gray) bg-(--white) shadow-sm hover:shadow-2xl duration-300 ease-in-out transition-all">
                            <NuxtLink
                                to="/newsroom" 
                                class="group flex *:flex items-center *:items-center justify-between w-full h-14 p-3 duration-300 ease-in-out transition-all"
                            >
                                <span class="text-xs font-extrabold text-(--medium-blue) group-hover:underline-text">
                                    Political contributions and lobbying
                                </span>
                                <span class="text-(--medium-blue) hover:text-(--light-blue)">
                                    <Icon name="mdi:chevron-right" />
                                </span>
                            </NuxtLink>
                        </div>

                        <div class="flex flex-col items-center justify-center w-full mx-auto h-full border-1 border-(--border-gray) hover:border-(--medium-gray) bg-(--white) shadow-sm hover:shadow-2xl duration-300 ease-in-out transition-all">
                            <a
                                href="/who/leadership#boardOfDirectors" 
                                class="group flex *:flex items-center *:items-center justify-between w-full h-14 p-3 duration-300 ease-in-out transition-all"
                            >
                                <span class="text-xs font-extrabold text-(--medium-blue) group-hover:underline-text">
                                    Penn Board of Directors
                                </span>
                                <span class="text-(--medium-blue) hover:text-(--light-blue)">
                                    <Icon name="mdi:chevron-right" />
                                </span>
                            </a>
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

