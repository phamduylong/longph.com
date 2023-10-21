import type { TechIcon, Section, SkillItem, ContactItem } from './types';
import { LinkType } from './types';

import linkedin_img_url from '$lib/assets/contact/linkedin.svg';
import discord_img_url from '$lib/assets/contact/discord.svg';
import hackerrank_img_url from '$lib/assets/contact/hackerrank.svg';
import leetcode_img_url from '$lib/assets/contact/leetcode.svg';
import stackoverflow_img_url from '$lib/assets/contact/stackoverflow.svg';
import email_img_url from '$lib/assets/contact/email.svg';
import github_img_url from '$lib/assets/contact/github.svg';
import phone_img_url from '$lib/assets/contact/phone.svg';
import whatsapp_img_url from '$lib/assets/contact/whatsapp.svg';

import bootstrap_img_url from '$lib/assets/tech/bootstrap.svg';
import c_img_url from '$lib/assets/tech/c.svg';
import chai_img_url from '$lib/assets/tech/chai.svg';
import chartjs_img_url from '$lib/assets/tech/chartjs.svg';
import cpp_img_url from '$lib/assets/tech/cpp.svg';
import c_sharp_img_url from '$lib/assets/tech/csharp.svg';
import css3_img_url from '$lib/assets/tech/css3.svg';
import cypress_img_url from '$lib/assets/tech/cypress.svg';
import dotnet_img_url from '$lib/assets/tech/dotnet.svg';
import ejs_img_url from '$lib/assets/tech/ejs.svg';
import express_img_url from '$lib/assets/tech/express.svg';
import html5_img_url from '$lib/assets/tech/html5.svg';
import javascript_img_url from '$lib/assets/tech/javascript.svg';
import jquery_img_url from '$lib/assets/tech/jquery.svg';
import mocha_img_url from '$lib/assets/tech/mocha.svg';
import mongodb_img_url from '$lib/assets/tech/mongodb.svg';
import nodejs_img_url from '$lib/assets/tech/nodejs.svg';
import nuget_img_url from '$lib/assets/tech/nuget.svg';
import python_img_url from '$lib/assets/tech/python.svg';
import robotframework_img_url from '$lib/assets/tech/robotframework.svg';
import sqldb_img_url from '$lib/assets/tech/sqldb.svg';
import svelte_img_url from '$lib/assets/tech/svelte.svg';
import tailwindcss_img_url from '$lib/assets/tech/tailwindcss.svg';
import typescript_img_url from '$lib/assets/tech/typescript.svg';
import visualbasic_img_url from '$lib/assets/tech/visualbasic.svg';

const bootstrap: TechIcon = {
	img: bootstrap_img_url,
	url: 'https://getbootstrap.com/',
	alt: 'Bootstrap Logo',
	text: 'Bootstrap'
};
const c: TechIcon = {
	img: c_img_url,
	url: 'https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html',
	alt: 'C Programming Language Logo',
	text: 'C'
};
const chai: TechIcon = {
	img: chai_img_url,
	url: 'https://www.chaijs.com/',
	alt: 'Chai Assertion Library',
	text: 'Chai Assertion Library'
};
const chartjs: TechIcon = {
	img: chartjs_img_url,
	url: 'https://www.chartjs.org/',
	alt: 'Chart.js Logo',
	text: 'Chart.js'
};
const cpp: TechIcon = {
	img: cpp_img_url,
	url: 'https://cplusplus.com/',
	alt: 'C++ Programming Language Logo',
	text: 'C++'
};
const csharp: TechIcon = {
	img: c_sharp_img_url,
	url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
	alt: 'C# Programming Language Logo',
	text: 'C#'
};
const css3: TechIcon = {
	img: css3_img_url,
	url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	alt: 'CSS Logo',
	text: 'CSS'
};
const cypress: TechIcon = {
	img: cypress_img_url,
	url: 'https://www.cypress.io/',
	alt: 'Cypress Logo',
	text: 'Cypress Testing Framework'
};
const dotnet: TechIcon = {
	img: dotnet_img_url,
	url: 'https://dotnet.microsoft.com/',
	alt: '.NET Logo',
	text: '.NET Framework'
};
const ejs: TechIcon = {
	img: ejs_img_url,
	url: 'https://ejs.co/',
	alt: 'EJS Template Language Logo',
	text: 'EJS Template Language'
};
const express: TechIcon = {
	img: express_img_url,
	url: 'https://expressjs.com/',
	alt: 'Express Framework Logo',
	text: 'Express Framework'
};
const html5: TechIcon = {
	img: html5_img_url,
	url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
	alt: 'HTML5 Markup Language Logo',
	text: 'HTML'
};
const javascript: TechIcon = {
	img: javascript_img_url,
	url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	alt: 'JavaScript Programming Language Logo',
	text: 'JavaScript'
};
const jquery: TechIcon = {
	img: jquery_img_url,
	url: 'https://jquery.com/',
	alt: 'JQuery Logo',
	text: 'JQuery'
};
const mocha: TechIcon = {
	img: mocha_img_url,
	url: 'https://mochajs.org/',
	alt: 'Mocha Testing Framework',
	text: 'Mocha Testing Framework'
};
const mongodb: TechIcon = {
	img: mongodb_img_url,
	url: 'https://www.mongodb.com/',
	alt: 'MongoDB Logo',
	text: 'MongoDB'
};
const nodejs: TechIcon = {
	img: nodejs_img_url,
	url: 'https://nodejs.org/en/',
	alt: 'NodeJs Logo',
	text: 'NodeJs'
};
const nuget: TechIcon = {
	img: nuget_img_url,
	url: 'https://www.nuget.org/',
	alt: 'NuGet Logo',
	text: 'NuGet Package Manager'
};
const python: TechIcon = {
	img: python_img_url,
	url: 'https://www.python.org/',
	alt: 'Python Programming Language Logo',
	text: 'Python'
};
const robotframework: TechIcon = {
	img: robotframework_img_url,
	url: 'https://robotframework.org/',
	alt: 'Robot Framework Logo',
	text: 'Robot Framework'
};
const sqldb: TechIcon = {
	img: sqldb_img_url,
	url: 'https://www.microsoft.com/en-us/sql-server/',
	alt: 'SQL Database Logo',
	text: 'SQL Database'
};
const svelte: TechIcon = {
	img: svelte_img_url,
	url: 'https://svelte.dev/',
	alt: 'Svelte Framework Logo',
	text: 'Svelte Framework'
};
const tailwindcss: TechIcon = {
	img: tailwindcss_img_url,
	url: 'https://tailwindcss.com/',
	alt: 'Tailwind CSS Logo',
	text: 'Tailwind CSS'
};
const typescript: TechIcon = {
	img: typescript_img_url,
	url: 'https://www.typescriptlang.org/',
	alt: 'TypeScript Programming Language Logo',
	text: 'TypeScript'
};
const visualbasic: TechIcon = {
	img: visualbasic_img_url,
	url: 'https://docs.microsoft.com/en-us/dotnet/visual-basic/',
	alt: 'Visual Basic Programming Language Logo',
	text: 'Visual Basic'
};

const section_datas: Section[] = [
	{
		title: 'About',
		entries: [
			{
				title: '',
				timeline: '',
				content: `I'm a Junior Software Developer & 3rd year IT Student based in Espoo, Finland. Passionate about most areas of Software Development, 
				from Desktop application to Web APIs and Front-end components, I am always looking for new challenges and opportunities to learn new things 🤓
				You can write to me using the <a href="#hitmeup" target="_self" rel="internal">form</a> at the end of this page 👇`
			}
		]
	},

	{
		title: 'Work Experiences',
		entries: [
			{
				title: 'Digia Oyj',
				timeline: 'Mar 2023 - Present',
				content: `Currently, I'm working as Junior Software Developer at <a href="https://digia.com/en/" target="_blank" rel="external">Digia</a>. 
				Digia is a Finnish SaaS company that provides Financial Solutions to clients. My main responsibilities are to develop and maintain the software 
				according to the customers requirements.<br/><br/>`,
				stack: [csharp, visualbasic, dotnet, nuget, sqldb, jquery, typescript, css3]
			}
		]
	},

	{
		title: 'Educations',
		entries: [
			{
				title: 'Metropolia UAS',
				timeline: 'Aug 2020 - Jul 2024 (Expected)',
				content: `<a href="https://www.metropolia.fi/en" target="_blank" rel="external">Metropolia</a> is the largest college (Polytechnic/Ammattikorkeakoulu) there is in Finland. I attended the Information Technology programme 
                and have progressed quite well for 3 years so far with a GPA of 4.03/5. My major is Embedded Systems Programming but
                I'm way more versatile than just an Embedded guy 😉`
			}
		]
	},

	{
		title: 'Projects',
		entries: [
			{
				title: 'Random Netflix Quotes Generator',
				timeline: '2023',
				content: `A website to generate random quotes from Netflix series. Currently supporting 
				<a href="https://www.imdb.com/title/tt3032476/" target="_blank" rel="external">Better Call Saul</a>, 
				<a href="https://www.imdb.com/title/tt4052886/" target="_blank" rel="external">Lucifer</a>, 
				<a href="https://www.imdb.com/title/tt4574334/" target="_blank" rel="external">Strangers Things</a> and 
				<a href="https://www.imdb.com/title/tt0903747/" target="_blank" rel="external">Breaking Bad</a>. 
				Random tab will generate quotes from all 4 series, while others generate quote from their own series. A quote can be generated by reloading the page 
				or click the roll button below the quote 🔃<br/><br/>`,
				stack: [svelte, html5, css3, tailwindcss, javascript],
				links: [
					{
						href: 'https://random-netflix-quotes.vercel.app/',
						text: 'Demo App',
						type: LinkType.Demo
					},
					{
						href: 'https://github.com/phamduylong/RandomNetflixQuotes',
						text: 'GitHub repository',
						type: LinkType.GitRepo
					}
				]
			},

			{
				title: 'Shopping List',
				timeline: '2023',
				content: `My first project with Svelte! All of us have had that "To Do List" project when we first started with front-end development right? I personally don't use 
                ToDo lists so I thought a Shopping List would be a bit more beneficial. This project was for me to learn the basics front-end concepts: props, event emitting, modules, 
                libraries, deploying and much more than that.<br/><br/>`,
				stack: [svelte, html5, css3, tailwindcss, typescript],
				links: [
					{
						href: 'https://shopping-list-phamduylong.vercel.app/',
						text: 'Demo App',
						type: LinkType.Demo
					},
					{
						href: 'https://github.com/phamduylong/ShoppingList',
						text: 'GitHub repository',
						type: LinkType.GitRepo
					}
				]
			},

			{
				title: 'BLV Anh Ngok Quotes API',
				timeline: '2023',
				content: `An API to generate quotes from Commentator Anh Ngoc Truong (The only Vietnamese journalist to vote for Ballon d'Or). Request limit is 10000 requests/day. 
				Quotes will be returned in JSON format on requests (see demo). The server is written with Express, tested with unit tests written in Mocha & Chai 
				and end-to-end tests with Cypress. This project is also my first time in touch with a CI-CD pipeline using GitHub Actions. The pipeline with build the project, 
				run test cases and then trigger a deployment to the hosting site if everything is OK (built successfully and all tests passed).<br/><br/>`,
				stack: [nodejs, express, javascript, mocha, chai, cypress],
				links: [
					{
						href: 'https://blv-anh-ngok-said.onrender.com',
						text: 'Demo API',
						type: LinkType.Demo
					},

					{
						href: 'https://github.com/phamduylong/truong-anh-ngok-quotes',
						text: 'GitHub repository',
						type: LinkType.GitRepo
					}
				]
			},

			{
				title: 'Technical Quiz Web App',
				timeline: '2023',
				content: `A web app containing random technical quizzes for people to test their knowledge. The app is written with ASP.NET Core MVC
				and Razor pages along with Bootstrap 5.`,
				stack: [csharp, dotnet, nuget, html5, bootstrap, javascript, jquery],
				links: [
					{
						href: 'https://github.com/phamduylong/TechnicalQuiz',
						text: 'GitHub repository',
						type: LinkType.GitRepo
					}
				]
			},

			{
				title: 'ABB Ventilation Project',
				timeline: '2022',
				content: `The project is combination of a Ventilation Fan System with Vaisala's GMP252 Carbon Dioxide probe, HMP60 Temperature and Humidity sensor. 
                Fan speed inside the duct can be controlled with Produal MIO 12V Actuator, while pressure difference between the inside and outside of the duct 
                will be measured with Sensirion's SDP600 differential pressure sensor. The idea of the system is to measure surrounding environments attributes, 
                specifically CO2 level, relative humidity and temperature, then using the collected information as a feedback for the ventilation fan 
                to adjust power level so as to create the ideal state in terms of air conditions. I contributed to building the back-end server for the project,
                where we take data from the physical devices through MQTT, visualize it with Chart.js and creating a User Interface so as to interact with the devices remotely. 
                Another task that I worked on this project was to write automation test cases with Robot Framework and Selenium.<br/><br/>`,
				stack: [c, cpp, nodejs, express, ejs, css3, mongodb, chartjs, robotframework],
				links: [
					{
						href: 'https://github.com/phamduylong/abb-ventilation-controller',
						text: 'GitHub repository',
						type: LinkType.GitRepo
					}
				]
			},

			{
				title: 'RTTTL Player',
				timeline: '2022',
				content: `An IoT Device to play legendary ring tones. This project is about digital audio, whereas an RTTTL string will be sent by the website 
                using voice recognition to the Raspberry Pico through MQTT, or chosen from the LCD interface and the string will be parsed into playable audio 
                and played through the piezo-buzzer. My role in this project was to mainly work with the Raspberry Pi Pico W using MicroPython.<br/><br/>`,
				stack: [python, nodejs, express, ejs, css3, mongodb],
				links: [
					{
						href: 'https://github.com/IoT-project-groups-1-2/g2-voice-controller',
						text: 'GitHub repository',
						type: LinkType.GitRepo
					}
				],
				media: [{ ytid: 'tQpu81TbtpA', type: 'youtube', text: 'Demo Video' }]
			}
		]
	}
];

const skills: SkillItem[] = [
	{ skill: 'ExpressJs', progress: 70 },
	{ skill: 'MongoDB', progress: 50 },
	{ skill: 'SQL Server', progress: 50 },
	{ skill: 'SvelteKit', progress: 50 },
	{ skill: 'TypeScript', progress: 40 },
	{ skill: 'HTML5', progress: 50 },
	{ skill: 'Tailwind CSS', progress: 40 },
	{ skill: 'C#', progress: 50 },
	{ skill: 'Visual Basic', progress: 40 },
	{ skill: '.NET Framework', progress: 50 },
	{ skill: 'C++', progress: 60 },
	{ skill: 'Python', progress: 60 },
	{ skill: 'Linux', progress: 50 },
	{ skill: 'Bash', progress: 50 },
	{ skill: 'Git Version Control', progress: 60 }
];

const contact: ContactItem[] = [
	{ img: email_img_url, content: 'longph@metropolia.fi', url: 'mailto:longph@metropolia.fi' },
	{
		img: email_img_url,
		content: 'longphamduy2002@gmail.com',
		url: 'mailto:longphamduy2002@gmail.com'
	},
	{
		img: discord_img_url,
		content: 'longph',
		url: 'https://discordapp.com/users/longph'
	},
	{ img: github_img_url, content: 'phamduylong', url: 'https://github.com/phamduylong' },
	{ img: hackerrank_img_url, content: 'phdlong', url: 'https://www.hackerrank.com/phdlong' },
	{ img: leetcode_img_url, content: 'longphd', url: 'https://leetcode.com/longphd/' },
	{
		img: linkedin_img_url,
		content: 'duy-long-pham',
		url: 'https://www.linkedin.com/in/duy-long-pham/'
	},
	{
		img: stackoverflow_img_url,
		content: 'pham-long',
		url: 'https://stackoverflow.com/users/14126819/pham-long'
	},
	{ img: phone_img_url, content: '+35846-888-5062', url: 'tel:+358468885062' },
	{
		img: whatsapp_img_url,
		content: '+35846-888-5062',
		url: 'https://api.whatsapp.com/send?phone=358468885062'
	}
];

export { section_datas, skills, contact };
