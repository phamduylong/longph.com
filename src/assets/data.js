const linkedin_img_url = new URL('../assets/linkedin.svg', import.meta.url).href;
const discord_img_url = new URL('../assets/discord.svg', import.meta.url).href;
const hackerrank_img_url = new URL('../assets/hackerrank.svg', import.meta.url).href;
const leetcode_img_url = new URL('../assets/leetcode.svg', import.meta.url).href;
const stackoverflow_img_url = new URL('../assets/stackoverflow.svg', import.meta.url).href;
const email_img_url = new URL('../assets/email.svg', import.meta.url).href;
const github_img_url = new URL('../assets/github.svg', import.meta.url).href;
const phone_img_url = new URL('../assets/phone.svg', import.meta.url).href;
const whatsapp_img_url = new URL('../assets/whatsapp.svg', import.meta.url).href;


const section_datas = [

    {
        title: "About",
        entries: [
            {
                title:"", 
                timeline: "", 
                content: 
                `Junior year IT student at Metropolia University Of Applied Sciences. Passionate about Web Development on both front-end and back-end.
                I have worked with Svelte and SvelteKit mainly on the front-end side (this whole page itself was built with SvelteKit). On the server side of things,
                I have worked my way through multiple projects with NodeJs and Express framework, with MongoDB being my favorite choice 
                of database (but I can make use of SQLite if needa be a relation database 😎). On other other hand I also plenty experiences with Embedded Systems, specifically with 
                nxp's LPC1549 development board and the Raspberry Pi Pico W. I have familiarized myself with most important communication protocols: UART, I2C, Modbus RTU, MQTT
                and can work around them without much problem.`
            }
        ]
    },

    {
        title: "Education", 
        entries: [
            {
                title: "Metropolia UAS", 
                timeline: "August 2020 - July 2024 (estimated)", 
                content: `The largest college (Polytechnic/Ammattikorkeakoulu) there is in Finland. I attended the Information Technology programme 
                and have progressed quite well for 3 years so far with a GPA of 4.03/5. My major is Embedded Systems Programming but best believe 
                I'm way more versatile than just an Embedded guy 😉.`
            }
        ]
    }, 

    {
        title: "Projects", 
        entries: [

            {
                title: "Shopping List", 
                timeline: "2023", 
                content: `My first project with Svelte! All of us have had that "To Do List" project when we first started with front-end development right? I personally don't use 
                ToDo lists so I thought a Shopping List would be a bit more beneficial. This project was for me to learn the basics front-end concepts: props, modules, libraries, 
                deploying and much more than that.<br/>
                <a href="https://shopping-list-e3c6g2ttu-phamduylong.vercel.app/" style="color: blue;">Demo App</a><br/>
                <a href="https://github.com/phamduylong/ShoppingList" style="color: blue;">GitHub repository</a>`
            },

            {
                title: "ABB Ventilation Project", 
                timeline: "2022", 
                content: `The project is combination of a Ventilation Fan System with Vaisala's GMP252 Carbon Dioxide probe, HMP60 Temperature and Humidity sensor. 
                Fan speed inside the duct can be controlled with Produal MIO 12V Actuator, while pressure difference between the inside and outside of the duct 
                will be measured with Sensirion's SDP600 differential pressure sensor. The idea of the system is to measure surrounding environments attributes, 
                specifically CO2 level, relative humidity and temperature, then using the collected information as a feedback for the ventilation fan 
                to adjust power level so as to create the ideal state in terms of air conditions. I contributed to building the back-end server for the project,
                where we takes data from the physical devices through MQTT, visualize it with Chart.js and creating a User Interface so as to interact with the devices remotely.<br/>
                <a href="https://github.com/phamduylong/abb-ventilation-controller" style="color: blue;">GitHub repository</a>`
            },

            {
                title: "Ring Tone Text Transfer Language Player", 
                timeline: "2022", 
                content: `An IoT Device to play legendary ring tones. This project is about digital audio, whereas an RTTTL string will be sent by the website 
                using voice recognition to the Raspberry Pico through MQTT, or chosen from the LCD interface and the string will be parsed into playable audio 
                and played through the piezo-buzzer. My role in this project was to mainly work with the Raspberry Pi Pico W using MicroPython.<br/>
                <a href="https://www.youtube.com/watch?v=tQpu81TbtpA" style="color: blue;">Demo Video</a><br/>
                 <a href="https://github.com/IoT-project-groups-1-2/g2-voice-controller" style="color: blue;">GitHub repository</a>`
            },

            {
                title: "CuteBot", 
                timeline: "2020", 
                content: `A Discord bot to fetch quotes and jokes through an API and send it to Discord server chatboxes. Quotes are fetch from 
                <a href="https://zenquotes.io" style="color: blue;">here</a> and jokes are acquired from PyJokes. The chatbot was previously hosted on Heroku 
                but has gone offline frequently when Heroku dropped their free plans 😥<br/>
                <a href="https://discord.com/oauth2/authorize?client_id=823841679257763841&permissions=2048&scope=bot" style="color: blue;">Invite bot</a><br/>
                <a href="https://github.com/phamduylong/CuteBot" style="color: blue;">GitHub repository</a>`
            },

        ]
    }
];

const skills = [
    { skill: 'NodeJs', progress: '70' },
    { skill: 'Express', progress: '70' },
    { skill: 'EJS Template', progress: '60' },
    { skill: 'MongoDB', progress: '50' },
    { skill: 'SQL', progress: '50' },
    { skill: 'Svelte', progress: '50' },
    { skill: 'HTML5', progress: '50' },
    { skill: 'CSS3', progress: '40' },
    { skill: 'Embedded Programming', progress: '50' },
    { skill: 'C', progress: '60' },
    { skill: 'C++', progress: '70' },
    { skill: 'Python', progress: '60' },
    { skill: 'Robot Framework', progress: '50' },
    { skill: 'Jenkins', progress: '40' },
    { skill: 'Linux', progress: '50' },
    { skill: 'Git', progress: '70' }
];


const contact = [
    {img: email_img_url, content: "longph@metropolia.fi", url: "mailto:longph@metropolia.fi"},
    {img: email_img_url, content: "longphamduy2002@gmail.com", url: "mailto:longphamduy2002@gmail.com"},
    {img: discord_img_url, content: "PhDLong#0475", url: "https://discordapp.com/users/747107129625804870"},
    {img: github_img_url, content: "phamduylong", url: "https://github.com/phamduylong"},
    {img: hackerrank_img_url, content: "phdlong", url: "https://www.hackerrank.com/phdlong"},
    {img: leetcode_img_url, content: "longphd", url: "https://leetcode.com/longphd/"},
    {img: linkedin_img_url, content: "duy-long-pham", url: "https://www.linkedin.com/in/duy-long-pham/"},
    {img: stackoverflow_img_url, content: "pham-long", url: "https://stackoverflow.com/users/14126819/pham-long"},
    {img: phone_img_url, content: "+35846-888-5062", url:"tel:+358468885062"},
    {img: phone_img_url, content: "+8491-323-0502", url:"tel:+84913230502"},
    {img: whatsapp_img_url, content: "+35846-888-5062", url:"https://wa.link/lmfxj0"},
];


export { section_datas as section_datas, skills as skills, contact as contact };
