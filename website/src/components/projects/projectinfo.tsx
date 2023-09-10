const projectInfoArray = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Quanticity',
      image: '../images/Spotify.png',
      description:
        '• Utilized Test-Driven Development (TDD) and followed programming best practices to construct a Spotify Higher-Lower game. \
         •Ensured code quality through rigorous testing, resulting in a robust application. • Employed a cutting-edge tech stack, including web scraping, RESTful API architecture, Spotify API integration, React, Express, and AWS deployment. Extracted monthly listener data for 2500 artists, enabled random artist retrieval, and dynamically fetched detailed information, delivering an engaging game experience',
      stack: ['React.Js', 'Node.js', 'Express', 'Jest', 'HTML', 'CSS', 'JavaScript', 'SpotiftyAPI', 'RestFulAPI'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'RoboMetrics',
      description:
      '• Developed a data analysis tool in Python using BeautifulSoup, Pandas, Numpy and Matplotlib that \
      automated the analysis of 10000+ robotics teams’ data, reducing manual analysis time by 100s of hours. \
      • Utilized web scraping to gather data from a database and sorted it into graphs and charts that were used for \
      statistical analysis performed by a team of over 20 researchers,',
      stack: ['Python', 'BeautifulSoup', 'Pandas', 'Numpy', 'Matplotlib'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'SuspiciousMaze',
      description:
        'Developed an interactive Python Pygame leveraging concepts of object-oriented programming to create a \
        seamless maze game, aimed at educating users on the potential vulnerabilities of running unknown software on \
        their devices. \
        • Implemented a Cyber-security Concepts that demonstrated networking skills by establishing a connection \
        between the victim’s device and a Digital Ocean Cloud-server, which enables the exploitation of the device, \
        showcasing the security risks of such vulnerabilities. \
        THIS PROJECT WAS CREATED ENTIRELY FOR EDUCATIONAL PURPOSES',
      stack: ['Python', 'PyGame', 'Wireshark', 'Digital Ocean', 'Linux'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
    name: 'EtherTask',
    description:
      'Implemented a decentralized to-do list application on the Ethereum blockchain using Solidity, Truffle, React,\
      and Web3.js, showcasing proficiency in blockchain development, smart contract programming, and front-end\
      integration.\
      • Utilized event handling in the smart contract code to enable real-time updates and notifications, ensuring\
      users receive instant feedback when tasks are added or marked as complete, enhancing the interactivity and\
      responsiveness of the application',
    stack: ['Solidity', 'Ganache', 'Node.js', 'Web3.js', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Solarify',
    description:
    " • Utilized Test-Driven Development (TDD) and followed programming best practices to construct a Solar-Weather Dashboard. \
      • Ensured code quality through rigorous testing, resulting in a robust application.\
      • Leveraged the powerful DONKIAPI provided by NASA to extract comprehensive insights and data pertaining to solar weather conditions over a span of seven days, \
       Implemented modern React hooks, including useState and useEffect, to enhance the efficiency and effectiveness of the application's functionality.",

    stack: ['React.Js', 'Node.js', 'Express', 'Jest', 'HTML', 'CSS', 'JavaScript', 'NASA-DONKIAPI', 'RestFulAPI'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'AdviceU.ca',
    description:
      'Co-founded a startup alongside a business partner, centered around providing comprehensive support to aspiring university applicants in their journey toward securing spots in their desired institutions. Our innovative full-stack application, meticulously crafted with Typescript, ReactJs, Node.js, Firebase, and Email.js, reflects our commitment to excellence. Adhering to programming best practices, the platform encompasses extensively tested API calls and meticulously developed website components, all rigorously evaluated using Jest. This undertaking showcases our dedication to guiding prospective students through a seamless experience while upholding the highest standards of software development.',
    stack: [
      'Jest',
      'Test-Driven Development',
      'TypeScript',
      'Firebase',
      'Collaborative Problem Solving',
      'Community Outreach',
      'Databases',
      'React.js',
      'Node.js',
    ],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'CyberAI',
    description:
      'CyberBot is an innovative AI-powered chatbot designed to revolutionize the way users engage with cybersecurity information. This interactive platform combines advanced natural language processing (NLP) with modern design elements to create a seamless and educational user experience. Whether you\'re a cybersecurity enthusiast or someone seeking quick answers to security-related queries, CyberBot is your go-to assistant.',
    stack: [
      'Artificial Intelligence (AI)',
      'Natural Language Processing (NLP)',
      'React.js',
      'Node.js',
    ],
    sourceCode: 'https://github.com/17vivekupadhyay/cyberbot',
    livePreview: 'https://github.com/17vivekupadhyay/cyberbot',
  },
  {
    name: 'PinPointer',
    description:
      'This software utilizes Python in conjunction with Wireshark to meticulously dissect network traffic. Its primary objective is to derive informed insights regarding potential vulnerabilities within the organization\'s network infrastructure. Through the integration of the Google Geolocation API, this application further enriches its functionality by meticulously mapping the origin of each connection onto an interactive geographical interface. This not only enhances the analytical process but also presents a visually intuitive representation of the network\'s connections.',
    stack: ['Cybersecurity', 'Networking', 'Wireshark', 'Python (Programming Language)'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Spam Or Ham',
    description:
      'Using Python\'s Scikit-Learn library, I designed a sophisticated spam or ham email filtering system that harnessed the synergy of cybersecurity principles and AI advancements. This project, aimed at countering Business Email Compromise (BEC), showcased my ability to merge cutting-edge technologies for practical solutions. By automating the discernment between legitimate and malicious emails, the system achieved a remarkable efficiency improvement of nearly 90%. Through meticulous dataset preprocessing, classifier selection, and comprehensive statistical evaluation, the project highlighted my capacity to innovate at the crossroads of AI and cybersecurity, contributing to heightened email security and threat mitigation.',
    stack: ['Scikit-Learn', 'Machine Learning', 'Cybersecurity', 'Python (Programming Language)'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
];

export default projectInfoArray;
