import {
  AcademicCapIcon,
  DownloadIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import testimonialImage from '../images/testimonial.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Randi Dees',
  description: "It's Randi's portfolio website.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Randi Dees.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Cullman based <strong className="text-stone-100">Full Stack Software Engineer</strong>, loves working
        in <strong className="text-stone-100">Web3 and Fintech projects</strong> to build modern, fast and intuitive technical solutions to resolve bottlenecks.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me <strong className="text-stone-100">playing basketball, swimming</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Smith Lake</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `A dedicated software engineer who specializes in blockchain and back-end programming primarily in Rust and Python.`,
  aboutItems: [
    {label: 'Location', text: 'Cullman, AL', Icon: MapIcon},
    {label: 'Interests', text: 'Basketball, Swimming, Climbing', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Hong Kong', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Lugalabs', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 10,
      },
      {
        name: 'Golang',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
  {
    name: 'Blockchain development',
    skills: [
      {
        name: 'Solidity',
        level: 9,
      },
      {
        name: 'Rust',
        level: 10,
      },
      {
        name: 'Ethereum',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Hotei Energy',
    description: '',
    url: 'https://hoteienergy.com/',
    image: porfolioImage1,
  },
  {
    title: 'Color Museum',
    description: '',
    url: 'https://www.color.museum/',
    image: porfolioImage2,
  },
  {
    title: 'Cryptozoon',
    description: '',
    url: 'https://cryptozoon.io/',
    image: porfolioImage3,
  },
  {
    title: 'Spookyboys',
    description: '',
    url: 'https://www.spookyboys.io/',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2003',
    location: 'University of Hong Kong',
    title: 'Bachelor of Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2021 - Present',
    location: 'Lugalabs Ltd',
    title: 'Senior Full Stack Engineer',
    content: (
      <p>
        - Created a fast arbitrage trading bot in Rust, designed to operate seamlessly across 6 CEX / DEX platforms, leveraged the async-await trait of the Tokio library to enhance the bot's asynchronous capabilities, ensuring uninterrupted 24/7 operation, and achieved a stable annual ROI factor of 35% - 40% over the past 2 years<br/>
        - Led the development of 5 python desktop applications serving more than 5,000 US customers for over 3 years, communicated with the client directly and wrote tickets on the scrum board by identifying his specific needs/goals while leading an agile team of 5 people, increasing the user engagement rate by 40% and the sales growth by 55%<br/>
        - Worked on the improvement of licensed medical data download and utlized python libraries like threading, mechanize, ssl, paramiko, zipfile, and ftplib to download the zipped data file from the third-party website, or SFTP server, reducing the average download time by 40%<br/>
        - Improved the local database security with AES encryption and weekly backup / restore by employing libraries such as pyAescrypt, tempfile, sqlite3 and shutil, increasing the security rate by 25% while implementing the offline browsing feature<br/>
        - Participated in the Bazel CAS server development in Rust, used gRPC and protobuf to implement BRE protocol, AWS S3 bucket and LZ4 compression for build artifacts storage, and applied FastCDC window based scrolling checksum to de-duplicate data, increased the average build execution time by 40% and reduced the resource usage cost by 40%<br/>
        - Engaged in a synthetics protocol development of implementing Mirror-like protocol on Ethereum, a stablecoin development of forking DAI-like stablecoin protocol on multiple EVM chains - resolved 100+ critical issues, reviewed and merged 100+ PRs to the main branch<br/>
        - Supervised the development of the NFT marketplace on Ethereum chain - Color Museum, a unique NFT marketplace selling colors as NFTs, facilitated the contract back-end and redux front-end part of the NFT mining / listing / sales system, helped them raise $2M in their early series of Initial Public Offering campaign<br/>
      </p>
    ),
  },
  {
    date: 'August 2020 - July 2023',
    location: 'Consensys',
    title: 'Blockchain Engineer',
    content: (
      <p>
        - Composed the python back-end of chatbots for food and travel agencies with OpenAI and Flask framework, increasing their sales productivity by 50%<br/>
        - Designed and developed a recursive lending / liquidation bot interacting with Venus protocol, and employed Hardhat and ethers.js for protocol simulation, unit testing and integration testing, acquiring an overall success rate of 95% throughout the Venus ecosystem<br/>
        - Created a crypto tax report assistant program interacting with Cointracking by applying filters and trading pair matching logic in Node.js and web3.js, reducing the report review time by 40%<br/>
        - Wrote 20+ security audit papers and whitepapers for crypto startups like DUBX, CryptoBeez, and Pizza NFTs and 100+ guide and review documents for the team collaboration and sharing personal ideas<br/>
        - Involved in the development of meme token and its ecosystem development, playing around Hardhat sandbox to write, deploy and test smart contracts and boosted the smart contract development of the project by 40%<br/>
        - Took part in the forking of Sunflower P2E game on Polygon chain, promoted web3.js to integrate blockchain logic with Redux based React components, delivering it 5 days before due<br/>
      </p>
    )
    },
    {
      date: 'August 2020 - July 2023',
      location: 'Consensys',
      title: 'Blockchain Engineer',
      content: (
        <p>
          - Composed the python back-end of chatbots for food and travel agencies with OpenAI and Flask framework, increasing their sales productivity by 50%<br/>
          - Designed and developed a recursive lending / liquidation bot interacting with Venus protocol, and employed Hardhat and ethers.js for protocol simulation, unit testing and integration testing, acquiring an overall success rate of 95% throughout the Venus ecosystem<br/>
          - Created a crypto tax report assistant program interacting with Cointracking by applying filters and trading pair matching logic in Node.js and web3.js, reducing the report review time by 40%<br/>
          - Wrote 20+ security audit papers and whitepapers for crypto startups like DUBX, CryptoBeez, and Pizza NFTs and 100+ guide and review documents for the team collaboration and sharing personal ideas<br/>
          - Involved in the development of meme token and its ecosystem development, playing around Hardhat sandbox to write, deploy and test smart contracts and boosted the smart contract development of the project by 40%<br/>
          - Took part in the forking of Sunflower P2E game on Polygon chain, promoted web3.js to integrate blockchain logic with Redux based React components, delivering it 5 days before due<br/>
        </p>
      ),
    },
    {
      date: 'September 2017 - July 2020',
      location: 'Intellectsoft',
      title: 'Software Developer',
      content: (
        <p>
          - Built the extraordinary media captioning / editing tool for BON2 Media Services in Objective C, resulting in a 30 % increase in customer base<br/>
          - Adapted the python application UI for various display resolutions and resolutions by leveraging the PyQt5 GUI library, and spearheaded a smart database update method without interrupting the user's browsing, cutting 30% of UI / UX issues<br/>
          - Overhauled the 30+ pages of the real estate app including dashboard, login, signup, location, home type and agent selection pages with Next.js, OAuth and socket streaming, solved problem of slow the load time by reducing it to 60%<br/>
          - Introduced a python desktop application protection method for remote sharing on Windows platform using win32 API wrapper libraries, and prevented the application from 90% of the remote sharing attempts<br/>
          - Demonstrated and proved the MFA idea for the existing python desktop app with SMS phone verification and email verification using SendGrid, and deducted the unauthorized user access by 70%<br/>
        </p>
      ),
    },
    {
      date: 'August 2016 - July 2017',
      location: 'Belitsoft',
      title: 'Junior Software Developer',
      content: (
        <p>
          - Worked on the AsiaType document automatic processing system in Java and Spark server, improved the overall processing time of one document by 50%<br/>
          - Reviewed and fixed 100+ bottlenecks inside the 30k LOC heavy data mapping script written in Pandas library and resolved the long execution time issue from 2 hours to 30 mins<br/>
          - Promoted Adobe Flash ActionScript 3.0 for 15+ tiny web games, and achieved 20% sales increase on advertizing campaign<br/>
          - Succeeded in building a web-based video annotation tool with opencv-js running demo as a POC for an AI video compressing startup while obtaining maximum productivity within 10 days of project timeline<br/>
        </p>
      ),
    },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Lubomir Bourdev',
      text: 'Working with him has been an absolute pleasure. His expertise and attention to detail have been instrumental in delivering outstanding results. Highly recommended.',
    },
    {
      name: 'Harjeet Padda',
      text: 'In the relam of blockchain, Randi stands as a true visionary. A master of innovation, his technical prowess transforms challenges into triumphs. Their communication fitnesse weaves cohesion within the team, making him an indispensable force in driving success. A rare blend of skill and mindset, Randi redefines excellence in blockchain development!',
    },
    {
      name: 'Jimmy Savillie',
      text: 'He\'s a great game-changer. His expertise in blockchain is unmatched, turning complexity into simplicity. A true collaborator, Randi communicates seamlessly and elevates the entire team. An incredible asset, Randi is the driving force behind our success...',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please reach me out if you have great projects in mind.',
  items: [
    {
      type: ContactType.Email,
      text: 'randidees0516@gmail.com',
      href: 'mailto:randidees0516@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'randidees',
      href: 'https://github.com/randidees',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/randidees'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/randi-dees-2520922a3/'},
];
