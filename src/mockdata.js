import image1 from './assets/images/users/1.png';
import image2 from './assets/images/users/2.png';
import image3 from './assets/images/users/3.png';
import slideImg1 from './assets/images/slides/soundtrap-UKyJ3rWHNt8-unsplash.png';
import slideImg2 from './assets/images/slides/convertkit-iUvLnysxOnQ-unsplash.png';
import slideImg3 from './assets/images/slides/convertkit-BOI9jki3nzY-unsplash.png';
import slideImg4 from './assets/images/slides/convertkit-BOI9jki3nzY-unsplash.png';


export const users=[
    {
        name:'Samantha James',
        userid:'@samyjames',
        image:image1,
        id:1
    },
    {
        name:'Quentin Villard',
        userid:'@quentin789',
        image:image2,
        id:2
    },
    {
        name:'Oliver Martinez',
        userid:'@OliverMarti',
        image:image3,
        id:3
    },
];

export const podcastsData=[
    {
        content:"Jason's first podcast ever",
        timeStamp:'0:55',
        id:1,
    },
    {
        content:"Helen's been on other podcasts: Startups for the Rest of Us, Indie Bites, Indie Worldwide",
        timeStamp:'1:12',
        id:2,
    },
    {
        content:"Should we invest in the 'auto publish to YouTube' feature?",
        timeStamp:'3:06',
        id:3,
    },
    {
        content:"The best features the ones that feel like 'magic' when a customer uses them",
        timeStamp:'13:32',
        id:4,
    },
    {
        content:"The 'wait and see' product development philosophy",
        timeStamp:'18:46',
        id:5,
    },
    {
        content:"A new podcast website builder CMS and website designs ",
        timeStamp:'20:27',
        id:6,
    },
    {
        content:"Making a few new podcast website themes",
        timeStamp:'32:24',
        id:7,
    },
    {
        content:"How we run our weekly team meetings",
        timeStamp:'34:30',
        id:8,
    }
]

export const contributors=[
    {
        name:"Jon Buda",
        about:"lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002",
        id:1
    },
    {
        name:"Mark Mitchel",
        about:"lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002.",
        id:2
    },
    {
        name:"Marry James",
        about:"lives in London, UK. He's been involved in the podcasting world since 2013, and has been building software since 2002",
        id:3
    }
];

export const slides=[
    {
        title:'Sick Leave for Indie Founders?',
        description:'Indie Stories · Jan 24 · Episode 234',
        image:slideImg1,
        color:`linear-gradient(295deg, rgba(14, 165, 233, 0.00) 0%, #0EA5E9 51.22%, #0EA5E9 100%),url('${slideImg1}')`,
        isPlayed:false,
        id:1
    },
    {
        title:'When Should You Let People Pay You?',
        description:'Indie Stories · Jan 24 · Episode 234',
        color:`linear-gradient(295deg, rgba(139, 92, 246, 0.00) 0%, #8B5CF6 51.22%, #8B5CF6 100%),url('${slideImg2}')`,
        image:slideImg2,
        isPlayed:false,
        id:2
    },
    {
        title:'Super Pumped (aka The Saturday Edition)',
        description:'Indie Stories · Jan 24 · Episode 234',
        color:`linear-gradient(295deg, rgba(244, 114, 182, 0.00) 0%, #F472B6 52.77%, #F472B6 100%),url('${slideImg3}')`,
        image:slideImg3,
        isPlayed:false,
        id:3
    },
    {
        title:'Getting Into Public Speaking as a Developer',
        description:'Indie Stories · Jan 24 · Episode 234',
        color:`linear-gradient(295deg, rgba(14, 165, 233, 0.00) 0%, #0EA5E9 51.22%, #0EA5E9 100%),url('${slideImg4}')`,
        image:slideImg4,
        isPlayed:false,
        id:4
    }
];