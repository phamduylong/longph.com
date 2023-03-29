type TechIcon = {
	img: string;
	url: string;
	alt: string;
	text: string;
};

type Section = {
	title: string;
	entries: SectionItem[];
};

type SectionItem = {
	title: string;
	timeline: string;
	content: string;
	stack?: TechIcon[];
	links?: SectionLink[];
	media?: Media[];
};

type SectionLink = {
	href: string;
	text: string;
	type?: string;
};

type Media = {
	ytid: string;
	type: string;
	caption: string;
};

type SkillItem = {
	skill: string;
	progress: number;
};

type ContactItem = {
	img: string;
	content: string;
	url: string;
};

export { TechIcon, Section, SectionItem, SectionLink, Media, SkillItem, ContactItem };
