
type LinkName = "home" | "overview" | "kanban" | "joplin" | "radio" | "disclaimer" | "copyrights" | "zugabe" | "skills" | "contact"

export interface Link {
    hash?: string,
    location: string
}

const links: Record<LinkName, Link> = {
    home: { location: '/' },
    overview: { hash: 'projects', location: '/' },
    kanban: { location: '/kanban' },
    joplin: { location: '/joplin' },
    radio: { location: '/radio-applet' },
    disclaimer: { location: '/disclaimer' },
    copyrights: { location: '/copyrights' },
    zugabe: { location: '/zugabe' },
    skills: { hash: 'skills', location: '/' },
    contact: { hash: 'contact', location: '/' }
}

export { links }