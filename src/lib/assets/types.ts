interface TechIcon {
    img: string,
	url: string,
	alt: string
}

interface Section {
    title: string,
    entries: SectionItem[]
}

interface SectionItem {
    title: string,
    timeline: string,
    content: string,
    stack?: TechIcon[],
    links?: SectionLink[],
    media?: Media[]
}

interface SectionLink {
    href: string,
    text: string,
    type?: string
}

interface Media {
    ytid: string,
    type: string,
    caption: string
}

interface SkillItem {
    skill: string,
    progress: number
}

interface ContactItem {
    img: string,
    content: string,
    url: string
}

export { TechIcon, Section, SectionItem, SectionLink, Media, SkillItem, ContactItem }