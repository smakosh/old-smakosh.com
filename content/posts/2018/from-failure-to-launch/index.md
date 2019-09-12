---
id: 11
path: '/from-failure-to-launch-hajj-hackathon'
thumbnail: './launch.jpg'
date: 2018-08-06T12:38:01.889Z
edited: 2018-08-14T1:26:01.889Z
next: '/we-are-truly-living-in-a-simulation'
title: 'From failure to launch - Hajj Hackathon'
tags:
  - tech
  - dev
  - hackathon
  - travel
popular: false
---

![Cleanify](launch.jpg 'Follow me on Instagram to see more : https://www.instagram.com/smakosh19')

While travelling to Rabat in order to visit the Moroccan office of [Obytes](https://obytes.com) (the company I work for), I got invited to participate in Hajj hackathon which was looking for people who would like to solve some main problems related to [Hajj](https://en.wikipedia.org/wiki/Hajj), especially these nine topics:

- Waste management
- Food and beverage
- Transportation
- Crowd management and traffic control
- Travel and accommodations arrangements
- Public health
- Housing
- Communications solutions
- Financial solutions

The hackathon's organizers covered all our expenses including the flight (economy class at [Saudi airlines](https://www.saudia.com/?ref=https://smakosh.com)), it was so nice as they provided an awesome service, the hotel stay was also covered and each group was staying at different hotels, I was staying at Hotel [Salsabil](https://warwickhotels.com/salsabil/)).

I started coding a boilerplate rest api as soon as I got into the plane, I used express js, mongoose, mongodb, postman and I was working offline, I set up my models (user, post) and an authenticated middleware so not everyone could access some private routes, I forgot to add another middleware so only admin user can send requests to some post routes.

Once I arrived to the hotel, my friends were checking out the rooms, while I was just sitting on a couch at the reception setting up my react app (a simple auth app that redirects you to your profile once registered or logged in), I used `create-react-app` boilerplate but as I usually do, I had to eject it to add sass, setup my react-router v4, the private and public routes, structure of my project, reducers, actions and the redux store etc...

I didn't sleep that night and the next day they took us to a stadium where we registered as participants, we got our badges and an idea about the program, then they carried us to where the event will be hosted.

I couldn't support the crowd and went back to my hotel room to finish the progressive web app and while I was taking a shower, I got more ideas of what I was willing to make which was to show nearby trash cans on a map to users, reward those who help improving the platform by reporting full trash cans. The worker (second type of user) get a notification when a single trash can gets a number of reports that is full, then goes to check with a trash vehicle, if true, all first reporters get points which they can use to get rewards, else, they get penalties.

The admin (third type of user) subscribes to a plan (basic or pro) to be able to manage the platform, admin is the one with the privileges to manage trash cans and workers.

The next day was the second day of the hackathon when [they successfully broke a Guinness world record for most participants in a hackathon with 2950 person](http://www.arabnews.com/node/1350066/saudi-arabia).

I spent that day redesigning my progressive web app, making it more UX friendly, designed a simple logo and some avatars, prepared the presentation as well as my pitch, then I went to sleep in the hotel after 2 sleepless days while my whole team was playing around.

I was looking for an adapter USB type C to HDMI during the last day of the hackathon but sadly one of the organizers told me that I won't even make it to the finals so why asking for the adapter. I got mad and went back to my table over thinking why did he say that until I went into of the rooms to pitch then I understood that the whole event was just for the sake of the media, as no one was listening to my pitch nor paying attention to my demo when I was presenting the idea and the working app to the judges, you can check my slides [here](https://docs.google.com/presentation/d/1NT1ganL9jGxdlnRllixDjfvApM3hcC2IyXvP9zncLNo)

During the last day of my stay in Jeddah, while walking near the red sea, I come up with better ideas, I wrote them down and started thinking critically and comparing my idea to other business models of successful startups and I could come up with a better idea that uses maps as well, a SAAS platform that offers a online reservation for restaurants on the go, user can see nearby restaurants on the map, filter or sort by specific params, add items to his reservation, choose the time and table number then pay half the price to confirm it.

The issue with my idea is it requires a lot of money but I’ve decided to build a fully working app and seek investments from VCs or angel investors.

Here are the pros and cons of Hajj Hackathon in my opinion:

Pros:

- Well organized
- They solved internet problems by providing ethernet cables to each table
- Free food and drinks
- Covered our flights and accommodations

Cons:

- Lack of adapters
- Rules of the hackathon haven't been respected by the judges and the organizers as the winners didn't have a working app
- They should have picked 9 winners as there were 9 problems to solve
- Lack of designers and developers, I had to design, code and prepare the pitch alone

You can subscribe to the news letter down bellow to get early access to the app and latest posts delivered right to your inbox.
