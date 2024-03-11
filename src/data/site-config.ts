export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'SVJ Zelenečská 510 - 512',
    logo: {
        src: 'z-small.png'
    },
    description: 'Zápisy, pozvánky, novinky a užitečné informace pro vlastníky bytů v domech Zelenečská 510 - 512 v Praze 9',
    headerNavLinks: [
        {
            text: 'Domovská stránka',
            href: '/'
        },
        {
            text: 'Archiv příspěvků',
            href: '/posts'
        },
        {
            text: 'Štítky',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'O SVJ',
            href: '/about'
        },
        {
            text: 'Kontakty',
            href: '/contact'
        }
    ],
    postsPerPage: 8
};

export default siteConfig;
