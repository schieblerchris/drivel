import {IAttribution, ISoftware} from "#/lib/credits_types";

export const attributions: IAttribution[] = [
    {
        img: 'flaticon_freepik_conversation.png',
        description: 'App Logo',
        link: 'https://www.flaticon.com/free-icons/conversation',
        linkTitle: 'conversation icons',
        linkText: 'Conversation icons created by Freepik - Flaticon'
    },
    {
        img: 'flaticon_freepik_rostrum.png',
        description: 'Profile Placeholder',
        link: 'https://www.flaticon.com/free-icons/rostrum',
        linkTitle: 'rostrum icons',
        linkText: 'Rostrum icons created by Freepik - Flaticon'
    }
]

export const software: ISoftware[] = [
    {
        name: 'Bootstrap',
        version: '5.2.2',
        link: 'https://g,etbootstrap.com/docs/5.2',
        linkTitle: 'Get Bootstrap',
        license: 'MIT',
    },
    {
        name: 'Bootstrap Icons',
        version: '1.10.2',
        link: 'https://icons.getbootstrap.com/',
        linkTitle: 'Get Bootstrap Icons',
        license: 'MIT'
    },
    {
        name: 'next.js',
        version: '13.0.3',
        link: 'https://nextjs.org',
        linkTitle: 'next.js',
        license: 'MIT'
    },
    {
        name: 'React',
        version: '18.2.0',
        link: 'https://reactjs.org',
        linkTitle: 'React',
        license: 'MIT'
    }
]