import massimo from './images/branded-work/massimo1.png';
import jpMorgan from './images/jp-morgan.jpg';
import galaxyDigital from './images/Galaxy-Digital.jpg';
import ciscoDashboard from './images/cisco-app/Dashboard.jpg';
import tapLogo from './images/tap-logo.png';
import tapInfluence from './images/tapInfluence.png';
import payPalLogo from './images/payPal-logo.png';
import payPal from './images/paypal-tagmanager.png';
import pureStorage from './images/login_v3.png';
import pureStorageLogo from './images/pureStorageDark.png';
import sollars from './images/sollars.jpg';
import talkoftown from './images/talkofthetown.png';
import visualLaw from './images/visual-law.png';
import pointcloud from './images/pointcloud.png';
import ciscoLogo from './images/ciscoLogoDark.png';
import ciscoApp1 from './images/cisco-app/not-loggedin-sidemenu.png';
import ciscoModal from './images/modal-cisco.png';
import ezcms1 from './images/ezcms/ezcms-1.png';
import becor from './images/becor.png';
import avayaLogo from './images/avaya-logo.png';
import avayaMap from './images/design.png';
import sollarsCalc from './images/sollars-calculator.png';
import law1 from './images/law/law-UI.png';
import sozoBrand1 from './images/sozo/sozo-branding.jpg';
import flexzone from './images/flexzone/flex-ui1.png';
import popUpSf from './images/pop-up_web.jpg';
import sozoCards from './images/sozo/sozo-brand4.png';
import mgaWeb from './images/mga-1.png';
import litApp from './images/lit-app.png';
import massimo2 from './images/branded-work/massimo2.jpg';
import solidChip from './images/branded-work/solid-chip.png';
import medium1 from './images/medium.png';
import ourCosmos from './images/ourcosmos.png';

export const data: any[] = [
    {
        job: 'Brand Identity: Graphic Design',
        company: 'Branded Solid',
        description: 'Solid needed to introduce itself as a branding consultant.  I leaned on Vignelli design principals and fused my own design symbols to introduce myself as a graphic designer and brand identity consultant.',
        toolTip: 'Graphic Design inpired by Mr. & Mrs. Vegnelli.  circa 2012',
        image: massimo,
    },
    {
        job: 'Lead Full Stack JavaScript Software Engineer',
        company: 'JP Morgan Chase Investment Banking',
        description: 'Joined the client facing investment banking platform development team. Restructured their main codebase of 40+ React components into individual React Applications.',
        detailBullet: [
            'Engineered and deployed a SQLServer DB and CRUD Node JS Endpoint for onboarding  banking clients.',
            'Architected a starter app repository to migrate 15+ React Apps to a micro serviced frontend.',
            'Reduced App by 60% in size by dynamically injecting lib dependencies into a distributed react frontend.',
            'Created 3 libraries of a 100 common React components, configured webpack bundles for private npm registry.',
            'Configured CI/CD  reducing deployment from 4 hours to 15 minutes on a proprietary Jenkins platform.'
        ],
        toolTip: 'JP Morgan Codebase Redesign & Optimization, Oct-2018 to July Jul-2019',
        image: jpMorgan,
    },
    {
        job: 'Lead Front End Software Engineer & UI/UX Designer',
        company: 'Galaxy Digital',
        description: 'Galaxy Digital needed a turn key repository set up for their long-term offshore development strategy within a three months time budget.  I set up code standards via eslint and onboarded there offshore team for a seamless transition ofproduct  ownership',
        detailBullet: [
            'Designed a UI/UX New Settlements dashboard from a Microsoft Excel mock up sheet.',
            'Developed an ag-grid React calculator for crypto-currencies exposure and mark-to-market values.',
            'Engineered a TS New Settlements 6 data table dashboard and defined GET and POST backend contracts.',
            '80% reduction of React’s rerendering triggers, by applying referential instantiations using React Hooks.',
        ],
        toolTip: 'Galaxy Digital Investment Dashboard Consulting and Development. Aug-2019 to Oct-2019',
        image: galaxyDigital,
    },
    {
        job: 'Lead UX/UI Designer',
        logo: pureStorageLogo,
        company: 'Design Reactor: Pure Storage',
        description: 'Designed UIs and mockups with Adobe Creative Suite, HTML5, and CSS3 used by 5+ Fortune 500 companies.',
        detailBullet: [
            'Designed a UI/UX mobile app for Pure Storage.'
        ],
        toolTip: 'Consultant and UI Developer via Design Reactor. circa 2014',
        image: pureStorage,
    },
    {
        job: 'Lead UX/UI Designer',
        logo: ciscoLogo,
        company: 'Design Reactor: Cisco Systems',
        description: 'Designed UIs and mockups with Adobe Creative Suite, HTML5, and CSS3 used by 5+ Fortune 500 companies.',
        detailBullet: [
            'Designed a UI/UX feature for a real time social media feed for Cisco’s internal CMS platform',
        ],
        toolTip: 'Cisco feature design and development via Design Rector. circa 2016',
        image: ciscoModal,
    },
    {
        job: 'Full Stack Software Engineer',
        logo: tapLogo,
        company: 'TapInfluence',
        detailBullet: [
            'Engineered a new React-redux frontend architecture to help close Izea’s acquisition deal of TapInfluence.',
            'Traced 20+ bugs across multiple frameworks running on Ruby, Node, Spring, and React-redux.',
            'Integrated AWS, Zuul, and Java Spring API onto a new React-redux Onboarding app without a platform crash.',
            'Developed profile image browser upload, cropping, and S3 bucket image using JS with AWS Cognito.',
            'Developed 4 CI ENV  using Bitbucket Pipelines, BASH,  and  AWS CLI resulting in daily prod deployments.',
            'Contributed to a JS snippet, installed in 3K blogs, collecting visitor and marketing conversion data',
        ],
        toolTip: 'Fullstack Engineer refactored legacy code and developed new frontend platform. Oct-2017 to July-2018',
        image: tapInfluence,
    },
    {
        job: 'Technical Author',
        company: 'Medium',
        description: 'Part 1 of a 3 part tutorial, written for Junior developers, that walks the developer on setting up a React repo and how to create an audio context that can be analyzed visually with HTML Canvas.',
        detailBullet: [
            'Generate a repository using Create React App.',
            'Import a wav/mp3 file and add Play/Pause controls (You’ll need to find your own audio files)',
            'Create a frequency array from the audio file using the browsers AudioContext',
        ],
        toolTip: 'A Tutorial on React and Canvas. Published on Medium.com 2019',
        image: medium1,
    },
    // {
    //     toolTip: 'Personal Project: WeCliques streaming video social media clip generator. 2011 to present',
    //     image:
    // },
    {
        job: 'Full Stack Software Engineer',
        company: 'Personal Project',
        description: 'Website creation tool offering a competitive option to Wordpress by allowing for more complex UI’s and faster load times.',
        detailBullet: [
            'Built a RESTful architecture with Golang to get and serve NASA’s Astronomy  and Curiosity Rover Data.',
            'Designed a React-Redux patterned UI that is served from a separate Node-express server.',
            'Integrated a member authentication feature using  Auth0’s API services',
        ],
        toolTip: 'Personal Project: Ourcosmos.us is a search engine for NASA\'/s Database. 2018 to present',
        image: ourCosmos,
    },
    {
        job: 'Lead UX/UI Designer',
        logo: ciscoLogo,
        company: 'Design Reator: Cisco Systems',
        description: 'Designed UIs and mockups with Adobe Creative Suite, HTML5, and CSS3 used by 5+ Fortune 500 companies.',
        detailBullet: [
            'Designed a UI/UX feature for a real time social media feed for Cisco’s internal CMS platform',
        ],
        toolTip: 'Cisco dashboard frontend consulting and development. circa 2013',
        image: ciscoDashboard,
    },
    {
        job: 'Full Stack Software Engeineer',
        logo: payPalLogo,
        company: 'Capgemini: PayPal',
        description: 'Full time employee for Capgemini as React focused developer.',
        detailBullet: [
            'Architected a new React-Redux platform for onboarding B2B clients for Tagmanager a new PayPal product.',
            'Built and deployed React-Redux admin portal to control Tagmanager features.',
            'Created a React calendar algorithm, under 175 lines of code, for PayPal’s Kepler Share React library.',
            'Developed an API proxy for authenticating  legacy SOAP credentials with our new platform’s restful API.',
        ],
        toolTip: 'Consultant for new PayPal b2b platform. Jan-2017 to July-2018',
        image: payPal,
    },
    {
        job: 'Full Stack Software Engineer & Lead UX/UI Designer',
        description: 'Brand and Technology consultant developing UI/UX and web applications',
        detailBullet: [
            'Designed and developed 3 User Interfaces  for a new website, inventory filter, and calculator.',
            'Engineered a calculator, designing the data structure and methods in JavaScript, resulting in 40% conversion.',
            'Minimized page load times by 70% with  an inhouse developed server-side PHP tool.',
            'Lead UI/UX designer for all products.',
        ],
        toolTip: 'Sollars Brand and Technology Consultant and Developer, Jan-2012 to July-2018',
        image: sollars,
    },
    {
        job: 'Full Stack Software Engineer & Lead UX/UI Designer',
        company: 'Talk of the Town',
        description: 'PHP and Wordpress developer for a non profit entity.  Talk of the Town is a youth out reach program serving Oakland and San Jose Califronia comunities.',
        toolTip: 'Not for profit Talk of the Town Branding and Web Development.  Jan-2014 to July-2018',
        image: talkoftown,
    },
    {
        job: 'Full Stack Software Engineer & Lead UX/UI Designer',
        logo: visualLaw,
        description: 'Consulted technology within a litigation context.  Litigation is a story and Visual Law utilized my branding and technology skills to help tell the story of fact and evidence for US Court Cases',
        detailBullet: [
            'Constructed a hybrid mobile cross platform application with PhoneGap, and VisJS to present trial evidence.',
            'Architected SPA leveraging ReactJS to minimize HTTP requests and eliminate server side rendering.',
            'Incorporated lazy loading with JavaScript and CSS3, reducing by 30% download time of ortho-images.',
            'Lead UI/UX designer for all web and mobile products.'
        ],
        toolTip: 'Visual Law Brand and Web Development. Jan-2013 to Dec-2017',
        image: pointcloud,
    },
    {
        job: 'Lead UX/UI Designer',
        logo: ciscoLogo,
        company: 'Design Reator: Cisco Systems',
        description: 'Designed UIs and mockups with Adobe Creative Suite, HTML5, and CSS3 used by 5+ Fortune 500 companies.',
        detailBullet: [
            'Developed a prototype for Cisco’s internal CMS app using JS and PhoneGap.',
        ],
        toolTip: 'Cisco UI Mock and Development. circa 2016',
        image: ciscoApp1,
    },
    {
        job: 'Full Stack Software Engineer & UX/UI Designer',
        company: 'Branded Solid',
        description: 'Templating library for static HTML5 pages designed for non-engineers to build websites by simply pointing and clicking.',
        detailBullet: [
            'Filtered user content with JavaScript and formatted it into JSON, allowing users to directly edit HTML5 data.',
            'Data stamped all HTML5 edits to enable version control for non-engineers to EDIT and UNDO page changes.',
            'Removed back-end integration of static pages during the development process Javascript, PHP, and JSON.',
        ],
        toolTip: 'EZCMS is a personal project that converts static websites into react apps. circa 2016',
        image: ezcms1,
    },
    {
        job: 'Full Stack Software Engineer',
        toolTip: 'Becor Brand and Web Development consultant. Jan-2012 to July-2018',
        image: becor,
    },
    {
        toolTip: 'Branding and Desing for Branded SOLID. circa 2012',
        image: massimo2
    },
    {
        logo: avayaLogo,
        toolTip: 'Map redesign for Avaya Event. circa 2016',
        image: avayaMap,
    },
    {
        toolTip: 'Design and Development of Sollars Home Calculator. circa 2016',
        image: sollarsCalc,
    },
    {
        toolTip: 'McGuinn, Hillsman & Palefsky Redesign and Web Development. circa 2013',
        image: law1,
    },
    {
        toolTip: 'Sozo Brand Identity Consulting. circa 2017',
        image: sozoBrand1,
    },
    {
        toolTip: 'Flexzone Branding and Web Development Consulting. circa 2016',
        image: flexzone,
    },
    {
        toolTip: 'Pop-up SF Branding and Web Development. circa 2014',
        image: popUpSf,
    },
    {
        toolTip: 'Branding design for Branded Solid. circa 2013',
        image: solidChip,
    },
    {
        toolTip: 'Sozo Branding: Business cards. circa 2017',
        image: sozoCards,
    },
    {
        toolTip: 'Personal Project MGA: Branding and Web Development, circa 2014',
        image: mgaWeb,
    },
    {
        logo: visualLaw,
        toolTip: "Visual Law: Litigation App for presenting evidence. circa 2016",
        image: litApp,
    }
]