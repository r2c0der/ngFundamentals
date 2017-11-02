import { Injectable } from '@angular/core';



@Injectable()
export class EventService {


  constructor() { }
  getEvents(){
    return EVENTS;
  }
}

const EVENTS = [
  {
    id: 1,
    name: 'Angular Connect',
    date: new Date('9/26/2036'),
    time: '10:00 am',
    price: 599.99,
    imageUrl: '../assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    sessions: [
      {
        id: 1,
        name: "Using Angular 4 Pipes",
        presenter: "Peter Bacon Darwin",
        duration: 1,
        level: "Intermediate",
        abstract: `Learn all about the new pipes in Angular 4, both 
          how to write them, and how to get the new AI CLI to write 
          them for you. Given by the famous PBD, president of Angular 
          University (formerly Oxford University)`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 2,
        name: "Getting the most out of your dev team",
        presenter: "Jeff Cross",
        duration: 1,
        level: "Intermediate",
        abstract: `We all know that our dev teams work hard, but with 
          the right management they can be even more productive, without 
          overworking them. In this session I'll show you how to get the 
          best results from the talent you already have on staff.`,
        voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 3,
        name: "Angular 4 Performance Metrics",
        presenter: "Rob Wormald",
        duration: 2,
        level: "Advanced",
        abstract: `Angular 4 Performance is hot. In this session, we'll see 
          how Angular gets such great performance by preloading data on 
          your users devices before they even hit your site using the 
          new predictive algorithms and thought reading software 
          built into Angular 4.`,
        voters: []
      },
      {
        id: 4,
        name: "Angular 5 Look Ahead",
        presenter: "Brad Green",
        duration: 2,
        level: "Advanced",
        abstract: `Even though Angular 5 is still 6 years away, we all want 
          to know all about it so that we can spend endless hours in meetings 
          debating if we should use Angular 4 or not. This talk will look at 
          Angular 6 even though no code has yet been written for it. We'll 
          look at what it might do, and how to convince your manager to 
          hold off on any new apps until it's released`,
        voters: []
      },
      {
        id: 5,
        name: "Basics of Angular 4",
        presenter: "John Papa",
        duration: 2,
        level: "Beginner",
        abstract: `It's time to learn the basics of Angular 4. This talk 
          will give you everything you need to know about Angular 4 to 
          get started with it today and be building UI's for your self 
          driving cars and butler-bots in no time.`,
        voters: ['bradgreen', 'igorminar']
      }
    ]
  },
  {
    id: 9,
    name: 'ReactiveConf',
    date: new Date('8/15/2028'),
    time: '2:00 pm',
    price: 109.99,
    imageUrl: '../assets/images/reactive-conf.svg',
    onlineUrl: 'http://angular-onlineUrl.org'
  },
  {
    id: 2,
    name: 'ng-nl',
    date: new Date ('4/15/2037'),
    time: '9:00 am',
    price: 950.00,
    imageUrl: '../assets/images/ng-nl.png',
    location: {
      address: 'The NG-NL Convention Center & Scuba Shop',
      city: 'Amsterdam',
      country: 'Netherlands'
    },
    sessions: [
      {
        id: 1,
        name: "Testing Angular 4 Workshop",
        presenter: "Pascal Precht & Christoph Bergdorf",
        duration: 4,
        level: "Beginner",
        abstract: `In this 6 hour workshop you will learn not only how to test Angular 4, 
          you will also learn how to make the most of your team's efforts. Other topics
          will be convincing your manager that testing is a good idea, and using the new
          protractor tool for end to end testing.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "Angular 4 and Firebase",
        presenter: "David East",
        duration: 3,
        level: "Intermediate",
        abstract: `In this workshop, David East will show you how to use Angular with the new
          ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      },
      {
        id: 3,
        name: "Reading the Angular 4 Source",
        presenter: "Patrick Stapleton",
        duration: 2,
        level: "Intermediate",
        abstract: `Angular 4's source code may be over 25 million lines of code, but it's really 
          a lot easier to read and understand then you may think. Patrick Stapleton will talk
          about his secretes for keeping up with the changes, and navigating around the code.`,
        voters: ['martinfowler']
      },
      {
        id: 4,
        name: "Hail to the Lukas",
        presenter: "Lukas Ruebbelke",
        duration: 1,
        level: "Beginner",
        abstract: `In this session, Lukas will present the 
          secret to being awesome, and how he became the President 
          of the United States through his amazing programming skills, 
          showing how you too can be success with just attitude.`,
        voters: ['bradgreen']
      },
    ]
  },
  {
    id: 3,
    name: 'ng-conf 2037',
    date: new Date('5/4/2037'),
    time: '9:00 am',
    price: 759.00,
    imageUrl: '../assets/images/ng-conf.png',
    location: {
      address: 'The Palatial America Hotel',
      city: 'Salt Lake City',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "How Elm Powers Angular 4",
        presenter: "Murphy Randle",
        duration: 2,
        level: "Intermediate",
        abstract: `We all know that Angular is written in Elm, but did you
          know how the source code is really written? In this exciting look
          into the internals of Angular 4, we'll see exactly how Elm powers
          the framework, and what you can do to take advantage of this knowledge.`,
        voters: ['bradgreen', 'martinfowler', 'igorminar']
      },
      {
        id: 2,
        name: "Angular and React together",
        presenter: "Jamison Dance",
        duration: 2,
        level: "Intermediate",
        abstract: `React v449.6 has just been released. Let's see how to use 
          this new version with Angular to create even more impressive applications.`,
        voters: ['bradgreen', 'martinfowler']
      },
      {
        id: 3,
        name: "Redux Woes",
        presenter: "Rob Wormald",
        duration: 1,
        level: "Intermediate",
        abstract: `Everyone is using Redux for everything from Angular to React to 
          Excel macros, but you're still having trouble grasping it? We'll take a look
          at how farmers use Redux when harvesting grain as a great introduction to 
          this game changing technology.`,
        voters: ['bradgreen', 'martinfowler', 'johnpapa']
      },
      {
        id: 4,
        name: "ng-wat again!!",
        presenter: "Shai Reznik",
        duration: 1,
        level: "Beginner",
        abstract: `Let's take a look at some of the stranger pieces of Angular 4,
          including neural net nets, Android in Androids, and using pipes with actual pipes.`,
        voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa']
      },
      {
        id: 5,
        name: "Dressed for Success",
        presenter: "Ward Bell",
        duration: 2,
        level: "Beginner",
        abstract: `Being a developer in 2037 is about more than just writing bug-free code. 
          You also have to look the part. In this amazing expose, Ward will talk you through
          how to pick out the right clothes to make your coworkers and boss not only
          respect you, but also want to be your buddy.`,
        voters: ['bradgreen', 'martinfowler']
      },
      {
        id: 6,
        name: "These aren't the directives you're looking for",
        presenter: "John Papa",
        duration: 2,
        level: "Intermediate",
        abstract: `Coinciding with the release of Star Wars Episode 18, this talk will show how
          to use directives in your Angular 4 development while drawing lessons from the new movie,
          featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.`,
        voters: ['bradgreen', 'martinfowler']
      },
    ]
  },
  {
    id: 8,
    name: 'What do you feel you would bring to the NG table? ',
    date: new Date('1/25/2028'),
    time: '11:00 am',
    price: 99.99,
    imageUrl: '../assets/images/ng-conf.png',
    onlineUrl: 'http://ng-onlineUrl.org'
  },

  {
    id: 4,
    name: 'UN Angular Summit',
    date: new Date('6/10/2037'),
    time: '8:00 am',
    price: 800.00,
    imageUrl: '../assets/images/basic-shield.png',
    location: {
      address: 'The UN Angular Center',
      city: 'New York',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "Diversity in Tech",
        presenter: "Sir Dave Smith",
        duration: 2,
        level: "Beginner",
        abstract: `Yes, we all work with cyborgs and androids and Martians, but 
          we probably don't realize that sometimes our internal biases can make it difficult for
          these well-designed coworkers to really feel at home coding alongside us. This talk will
          look at things we can do to recognize our biases and counteract them.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "World Peace and Angular",
        presenter: "US Secretary of State Zach Galifianakis",
        duration: 2,
        level: "Beginner",
        abstract: `Angular has been used in most of the major peace brokering that has
          happened in the last decade, but there is still much we can do to remove all
          war from the world, and Angular will be a key part of that effort.`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      },
      {
        id: 3,
        name: "Using Angular with Androids",
        presenter: "Dan Wahlin",
        duration: 3,
        level: "Advanced",
        abstract: `Androids may do everything for us now, allowing us to spend all day playing 
          the latest Destiny DLC, but we can still improve the massages they give and the handmade
          brie they make using Angular 4. This session will show you how.`,
        voters: ['igorminar', 'johnpapa']
      },
    ]
  },
  {
    id: 5,
    name: 'ng-vegas',
    date: new Date('2/10/2037'),
    time: '8:00 am',
    price: 400.00,
    imageUrl: '../assets/images/ng-vegas.png',
    location: {
      address: 'The Excalibur',
      city: 'Las Vegas',
      country: 'USA'
    },
    sessions: [
      {
        id: 1,
        name: "Gambling with Angular",
        presenter: "John Papa",
        duration: 1,
        level: "Intermediate",
        abstract: `No, this talk isn't about slot machines. We all know that 
          Angular is used in most waiter-bots and coke vending machines, but
          did you know that was also used to write the core engine in the majority
          of voting machines? This talk will look at how all presidential elections
          are now determined by Angular code.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: "Angular 4 in 60ish Minutes",
        presenter: "Dan Wahlin",
        duration: 2,
        level: "Beginner",
        abstract: `Get the skinny on Angular 4 for anyone new to this great new technology.
          Dan Wahlin will show you how you can get started with Angular in 60ish minutes, 
          guaranteed!`,
        voters: ['bradgreen', 'igorminar', 'johnpapa']
      }
    ]},
  {
    id: 6 ,
    name: 'NG UX dog and pony show',
    date: new Date('7/23/2036'),
    time: '1:00 pm',
    price: 99.99,
    imageUrl: '../assets/images/ngcopenhagen.png',
    onlineUrl: 'http://nglink.com',
    sessions: [
      {
        id: 1,
        name: "NG Apps hit the ground running",
        presenter: "Peter Bacon Darwin",
        duration: 1,
        level: "Beginner",
        abstract: `I just chime in on that one we want to see more charts we need a paradigm shift. Bottleneck mice bells and whistles. Good optics after I ran into Helen at a restaurant, I realized she was just office pretty, for re-inventing the wheel gain traction and waste of resources, yet curate.`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },

      {
        id:2,
        name: "Ng Touch Base Level",
        presenter: "Peter Bacon Darwin",
        duration: 1,
        level: "Intermediate",
        abstract: `T-shaped individual. Staff engagement. We are running out of runway we are running out of runway and action item, but wheelhouse data-point, or where do we stand on the latest client ask bench mark. This vendor is incompetent translating our vision of having a market leading platfrom`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },

      {
        id: 3,
        name: "Podcasting operational change management Angular NG",
        presenter: "Peter Bacon Darwin",
        duration: 1,
        level: "Advanced",
        abstract: `Learn all about the new pipes in Angular 4, both 
          how to write them, and how to get the new AI CLI to write 
          them for you. Given by the famous PBD, president of Angular 
          University (formerly Oxford University)`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      },
      {
        id: 4,
        name: "Angular 4 Pipes - Collaboratively administrate empowered market",
        presenter: "Peter Bacon Darwin",
        duration: 1,
        level: "Intermediate",
        abstract: `Closing these latest prospects is like putting socks on an octopus shoot me an email nor baseline the procedure and samepage your department, i'll book a meeting so we can solution this before the sprint is over for one-sheet, but organic growth, for red flag.`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      }
    ]},
  {
    id: 7,
    name: 'Angular Information Highway ',
    date: new Date('2/2/2038'),
    time: '1:00 pm',
    price: 1099.99,
    imageUrl: '../assets/images/ng-conf.png',
    onlineUrl: 'http://onlineUrl.org',
    sessions:[],
  },

  {
    id:10,
    name:'Beyond the Angular CLI',
    date:new Date(1/30/2045),
    time:'9:00am',
    price: 2222.00,
    imageUrl: '../assets/images/ngATL_logo.svg',
    location:{
      address: 'The Hotel at Avalon',
      city: 'Alpharetta GA',
      country: 'United States'
    },
    sessions:[
      {
        id: 1,
        name: 'Build a full-stack application with Colmena (API/Admin/Frontend)',
        presenter:'Mike Brocchi',
        duration: 4,
        level: 'Intermediate',
        abstract: `
The cat is out of the bag, people know about the Angular CLI and what it can do for them. But what is coming? What else can it do? What changes and improvements can I expect? Come learn what the Angular CLI can do and will evolve into.`,
        voters: ['bradgreen', 'igorminar']
      },
      {
        id: 2,
        name: 'Angular Workshop - Core Concepts, CLI, Components, Data Binding, Services',
        presenter: 'John Papa',
        duration: 8,
        level: 'Advanced',
        abstract:`
        Do you want to get a jumpstart on developing with Angular so you can build robust Web applications? John Papa will help you learn how to work with data binding, build components and services, send and receive data to and from a server using Http, RxJS and observables, lazy load modules with routing, best practices you can employ in your applications, and much more! You'll also learn how to get up and running quickly with the Angular CLI. Bring your laptop, as you’ll be writing Angular code using what you learn in several hands-on exercises. What You’ll Learn: · ES2015/TypeScript core concepts · Getting started with the Angular CLI · Bootstrapping your application · The Role of Components · Using Decorators · Binding data to views · Input and output properties · Dependency injection and providers · Managing remote data calls using services · Http and RxJS Observables · Routing and page navigation · Lazy loading and route guards · Template-driven and reactive forms · Tips, tricks and best practices · More!`,
        voters: ['bradgreen', 'igorminar', 'martinfowler'
        ]
      },
      {
        id: 3,
        name: 'State Management with ngrx',
        presenter: 'Dominic Elm',
        duration: 4,
        level: 'Intermediate',
        abstract:`
With easy, fun labs, Dominic Elm will help you learn why redux and ngrx is considered an essential library for modern Angular applications. Learn how redux works and why immutable data flows are crucial to predictable UX. Learn how ngrx brings reactive redux features to your Angular application and see how effects and facades work with asynchronous processes. See how easy it is to test your application logic and explore the redux time-travel features.`,
voters:[]
},
{
id: 4,
name: 'Immersive World of Mixed Reality.',
presenter: 'Aysegul Yonet',
duration: 1,
level: 'Beginner',
abstract:`
        We will look into creating immersive virtual worlds using WebVR apis and Angular components. While creating 3D experiences on the web has not been the easiest, Angular gives us an opportunity to create sharable libraries and create experiences in a declarative way. Get to know the building blocks of 3D Web and learn how you can write your own components.`
      }

    ]
  },


]


