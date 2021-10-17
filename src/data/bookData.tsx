export interface ReadInterface {
    title: string;
    author: string;
    imagePath: string;
    rating: number; //rating out of 10
    review: string;
    publishDate?: string;
    takeAways?: string[];
};



export const learningReadBookData: ReadInterface[] = [
    {
        title: "The Subtle Art of Not Giving a F*ck",
        imagePath: "/data/bookCovers/the_subtle_art_of_not_giving_a_fuck.png",
        author: "Mark Manson",
        rating: 10,
        review: "Some really cool ideas and interesting takes on society, life, media and habits. ",
        takeAways: ["The idea that striving to be better like traditional self help can be a negative experience because the implication is that you aren't good enough right now.", "Hapiness comes from solving problems, so choose good ones. ", "Ask lots of why questions -> why do I want to be rich, why does something bother me.", "Problems shoudl be continuous, goals should revolve around consistency rather than metrics and thusly you can constantly be the kind of person you want to be, also align goals with values."],
        publishDate: "2016",
    },
    {
        title: "Come As You Are",
        imagePath: "/data/bookCovers/come_as_you_are.jpg",
        author: "Emily Nagoski",
        rating: 10,
        review: "Different ways to think about sex, with amazing insight.",
        takeAways: ["Think of arousal as an accelorator (things that excite you) and a brakes (things that stress/distract you). People have different sensitivity on each and different things trigger each for different people", "Context is everything", "Expecting/anticipating, eagerness/wanting and enjoying/liking are 3 seperate things that can exist in any combination with or without one another", "If you're stressed, can do a few things to help, (exercise/dance, primal scream or crying, meditate or do yoga, something relaxing like a shower, massage, nails etc)", "You can learn to find certain things more arousing and learn to find other things as less of a turn off", "nonconcordance: your body can respond as if aroused even if you aren't mentally and vice versa", ],
    },
    {
        title: "How to Invent Everything",
        imagePath: "/data/bookCovers/how_to_invent_everything.jpg",
        author: "Ryan North",
        rating: 9,
        review: "Rebuilding civilization from scratch with all our knowledge, lots of interesting science, history and invention. No particularly big take aways but neat to know how records, engines, turbines and electricity work. Plus smelting and smithing and how to use animals to do all sorts of agriclture and how to rediscover penecillin if needed",
        takeAways: ["Knowledge is pretty neat"],
    },
    {
        title: "Declutter Your Mind",
        imagePath: "/data/bookCovers/declutter_your_mind.jpg",
        author: "S.J. Scott & Barrie Davenport",
        rating: 7,
        review: "Kinda generic / obvious but had a few standout point. ",
        takeAways: ["Like forgiving yourself for past mistakes with the attitude that you were doing the best you could with what you had at the time, also applying the same idea to other in your life who might have wronged you like your parents"],
    },
    {
        title: "Getting to Yes",
        imagePath: "/data/bookCovers/getting_to_yes.png",
        author: "Roger Fisher & William Urgy",
        rating: 10,
        review: "A bit thick but revolutionary ideas with regards to negotiation with enhancing examples. ",
        takeAways: ["Argue with interest over position, if 2 people wanted an orange each persons postiion is I want a Orange, and traditional wisdom would say cut the orange in half. But if one persons interest was in the fruit and the others was in the rine for zest for a cake a better arangement could have been reached. Israel and Egypt both wanted the saini desert (their position), Israels interest was in protection and Egypts was in heritage and culture and eventually an agreement was reached wher Egypt would own the land but it would be demiliterized. ", "Appeal to a neutral third party for standards, for example if you're getting and insruance claim for your car ask them how they got their estimate and use the Blue Book values as a baseline for features and parts.", "BATNA best alternative to a negotiated agreement. Have a real, ready to go alternative is sometimes the best thing because if negotations really aren't going your way you have something to fall back on.", "Invent options for mutual gain", "Be aware of dirty negotiation tricks (putting pressure on your for time, being in a room thats to hot or cold) and point them out as problems and offer to come back later once these problems are resolved."],
    },
    {
        title: "Tax Free Wealth",
        imagePath: "/data/bookCovers/tax_free_wealth.jpg",
        author: "Tom Wheelwright",
        rating: 7,
        review: "A bit thick but good and important ideas. Also the meta idea that american tax code is made to encourage businesses to exist here and thats why we've stayed such a power hosue of economics. ",
        takeAways: [" Mainly, businesses & investors get some awesome write offs & the best tax rates, houses are good for amortization and decpreciation (so know and use both),"," choose a good CPA who knows thing and will actively help you reduce taxes rather than being afraid of an auditor.", "Also make a trust and give some owner ship to children to avoid inheritance taxes.","Own and spread out businesses to reduce taxes/backet.","Don't just look at income tax but also sales, property and excise.","401k income derived isn't taxed under capital gains but normal income rules so if you plan on retiring with a higher income it might not be better to use a IRA. (ROTH is still awesome, until you don't qualify because your income is to high :/) "],
    },
    {
        title: "The 4 Hour Work Week",
        imagePath: "/data/bookCovers/the_4_hour_work_week.jpg",
        author: "Tim Ferris",
        rating: 10,
        review: "Revolutionary concepts with regards to efficiency and value created for work",
        takeAways: ["Learn to cultivate real focus (get your rest, eliminate phones and distraction) to accomplish most of what you have to do in a day in record time (plus after you run out of work energy you aren't going to be very productive anyways)", "Batch tasks, do a bunch of the same type of thing all together because constant switching/distractions take time/effort", "You don't have to wait until retirement to do retirement like things (and you probably shouldn't)","Focus on effictiveness (getting towards your goal), over efficiency (doing well at a task that may or maynot be important), 80/20 rule (80% of benefit comes from 20% of the effort so eliminate wisely that which isn't helping much), Parkinsons Law (tasks grow to fill the time alloted for them, -> short clear deadlines)", "Avoid information/interruptions that are irrelevant, unimportant or unactionable. Most info is time consuming, negative, irrelevant to your goals and outside your influence", "Delegate tasks you don't want to do"],
    },
    {
        title: "Rich Dad Poor Dad",
        imagePath: "/data/bookCovers/rich_dad_poor_dad.jpg",
        author: "Robert Kiyosaki",
        rating: 9,
        review: "A classic that introcudes new ways to think about money",
        takeAways: ["No ones gonna teach you financial literacy, its up to you to go get it yourself and its important to understand money because its the cause of many problems for most people", "Make your money work for you, invest in stocks or real estate or create a business (money generating assets)", "Knowledge is power, never stop learning", "Pay yourself first (the first thing I do is invest a large percentage of every check and then portion that goes to necesities like food and rent)"],
    },
    {
        title: "The 5 Love Languages",
        imagePath: "/data/bookCovers/the_5_love_languages.jpg",
        author: "Gary Chapman",
        rating: 6,
        review: "A few examples were useful but mostly the core concept from the web is enough",
        takeAways: ["Talk to your partner about how you can show them you care about them and vice versa.", "General idea is their are 5 categories of potential ways to show or recieve affection, phyiscal touch, gifts, words of affirmation, acts of service and quality time"],
    },
    {
        title: "10% Happier",
        imagePath: "/data/bookCovers/10_happier.jpg",
        author: "Dan Harris",
        rating: 9,
        review: "Kinda slow at the beginning as he's just explaining his life story. Some very good take aways though and the writing style is generally pretty good. ",
        takeAways: ["Take some take to conciously be more aware of your sense and emotions (look at nature, feel how soft your cloths are on your skin).","Meditate as a way to practice focus, try to just focus on your breath, when you get distracted realize this and gently go back to focus on your breath. ","Respond don't react. When you find yourself feeling a way, identify the emtions, notice how they're impacting your body (sweaty palms, heart racing, etc), look at why your feel those emotions, what can be done about the situation, then gently nudge away the feelings.","Worry is useful until its not -> worry is good so long as its motiviating action that is productive like planning or counter measure but after that its pointless and you should stop"],
    },
    {
        title: "Show Your Work",
        imagePath: "/data/bookCovers/show_your_work.png",
        author: "Austin Kleon",
        rating: 9,
        review: "I really cool book, covering the importance of documenting your journey as a way to sharing valuble knowledge and finding likeminded people. Show and cute book, very easy read",
        takeAways: ["You don't have to be a genuis/ultra refined", "have an amateurs curiosity", "Think Process over Product", "Share small and often", "Only share what you think would be genuinely helpful, and/or entertaining and you would let your mother see, internet is here forever", "Never feel bad for what you genuinely enjoy", "Listen/absorb/pay your dues", "Hearts over eyeballs", "Take out people/things that don't matter and suck to much of your energy"],
    },
    {
        title: "Purple Cow",
        imagePath: "/data/bookCovers/purple_cow.jpg",
        author: "Seth Godin",
        rating: 9,
        review: "Recommended to me by my current employer Fearless it details how new marketing needs to rely on particulalry remarkable products over traditional things like TV advertising",
        takeAways: ["We live in an era when most easy remarkable problems have been solved and people are no longer proactively looking for something genericly useful that everyone needs (like pain killers)", "To differentiate yourself you need to be remarkable in some fashion", "Being remarkable leads to the few people who use your product becoming 'sneezers' and thus spreading the product to all their friends", "Remarkable is a very loose term and can range wildly from extremely niche like disgusting horror films, excessively cheap like while still solid quality like McDonalds or Ikea, process shifting like Amazon and the popularization of online shopping, extremely high end like the $2000 hand made silk scarves, outstanding service like people who will take hours and walk you through complex tasks or return policies that extend out decades and cover everything, extreme ease of use or simplicity like with touch screens", "Related but not in the book is the concept of differentation in a variety of 6 categories Product (Features, Performance, Efficacy, Durability, Reliability), Service (Ordering Ease, Delivery, Installation, Customer Training), Channel (Coverage, Expertise, Performance), Relationship (Competency, Courtesy, Reliability, Responsiveness), Reputation, Price (cheap/expensive, payment model)", ],
    },

] 

export const fictionReadBookData: ReadInterface[] = [
    {
        title: "Mistborn",
        imagePath: "/data/bookCovers/mistborn.jpg",
        author: "Brandon Sanderson",
        rating: 10,
        review: "Wonderful world with an amazing and unique magic system that has very interesting weaknesses/tradeoffs",
    },
    {
        title: "Ready Player One",
        imagePath: "/data/bookCovers/ready_player_one.jpg",
        author: "Ernest Cline",
        rating: 9,
        review: "Solid story, with some nice twists and turns. References and easter eggs abound. I like the D&D ones and old game ones that my dad gave me context for.",
        publishDate: "2011",
    },
    {
        title: "Ex-Heroes",
        imagePath: "/data/bookCovers/ex_heroes.iffi",
        author: "Peter Clines",
        rating: 9.5,
        review: "Zombies and Super Heros. ",
        publishDate: "2010",
    },
    {
        title: "Hero",
        imagePath: "/data/bookCovers/hero.iffi",
        author: "Perry Moore",
        rating: 10,
        review: "Lovely vibe, morals and character development",
        publishDate: "2007",
    },
    {
        title: "Harry Potter",
        imagePath: "/data/bookCovers/harry_potter.iffi",
        author: "J. K. Rowling",
        rating: 8,
        review: "A bit darker than I remember but well described as oh, thats such a *insert main character here* thing to say/do",
        publishDate: "1997",
    },
    {
        title: "Michael Vey",
        imagePath: "/data/bookCovers/michael_vey.iffi",
        author: "Richard Paul Evans",
        rating: 10,
        review: "Love the characters and the powers. Such Michael is such a real high schooler feeling character and I love the chemistry between him and Taylor.",
        publishDate: "2011",
    },
    {
        title: "Percy Jackson",
        imagePath: "/data/bookCovers/percy_jackson.iffi",
        author: "Rick Riordan",
        rating: 10,
        review: "Tantilizing story, super well crafted characters and well written worlds and action",
        publishDate: "2005",
    },
    {
        title: "Enders Game",
        imagePath: "/data/bookCovers/enders_game.iffi",
        author: "Orson Scott Card",
        rating: 9,
        review: "The brilliance of ender and the way the entire arc of him working for the lazer tag 0 gravity teams is awesome. Some much creativity with the formations, and fighting styles. A bit slow towards the end and not a huge fan of the whole depressing overworked kid vibe",
        publishDate: "1985",
    },
    {
        title: "Creatures of Light and Darkness",
        imagePath: "/data/bookCovers/creatures_of_light_and_darkness.iffi",
        author: "Roger Zelazny",
        rating: 9,
        review: "I remember liking it a lot although I don't remember it that well, some really creative and out there stuff",
        publishDate: "1969",
    },
    {
        title: "Perks of Being a Wall Flower",
        imagePath: "/data/bookCovers/perks_of_being_a_wall_flower.iffi",
        author: "Stephen Chbosky",
        rating: 9,
        review: "So much personality and understanding of how it feels to be in highschool",
        publishDate: "1999",
    },
    {
        title: "Temeraire",
        imagePath: "/data/bookCovers/temeraire.iffi",
        author: "Niome Novak",
        rating: 7,
        review: "Napolean era warfare but with dragons and a world war II kinda vibe with air forces",
        publishDate: "2006",
    },
    {
        title: "Rangers Apprentice",
        imagePath: "/data/bookCovers/rangers_apprentice.iffi",
        author: "John Flanagan",
        rating: 9,
        review: "Fantasy/D&D vibes to the max",
        publishDate: "2004",
    },
    {
        title: "Graceling",
        imagePath: "/data/bookCovers/graceling.iffi",
        author: "Kristin Cashore",
        rating: 10,
        review: "Fantasy/D&D vibes with super skills/super power. A bit slow towards the end",
        publishDate: "2008",
    },
    {
        title: "Old Mans War",
        imagePath: "/data/bookCovers/old_mans_war.iffi",
        author: "John Scalzi",
        rating: 10,
        review: "Sci-fi where the universe is a lot bigger and more intimidating than you'd think",
        publishDate: "2005",
    },
    {
        title: "Midnight at the well of Souls",
        imagePath: "/data/bookCovers/well_of_souls.iffi",
        author: "Jack L Chalker",
        rating: 10,
        review: "Intergalactic travel, a variety of species, reincarnation and an experimental world at the center of it all",
        publishDate: "1977",
    },
    {
        title: "A Night in the Lonesome October",
        imagePath: "/data/bookCovers/a_night_in_the_lonesome_october.iffi",
        author: "Roger Zelazny",
        rating: 10,
        review: "Halloween, murder mystery vibes, well written and keeps you guessing until the very end",
        publishDate: "1993",
    },
    {
        title: "Eleanore and Park",
        imagePath: "/data/bookCovers/elenore_and_park.iffi",
        author: "Rainbow Rowell",
        rating: 7,
        review: "Another book that captures how it feels to be 17",
        publishDate: "2012",
    },
    {
        title: "City of Bones",
        imagePath: "/data/bookCovers/city_of_bones.iffi",
        author: "Cassandra Clare",
        rating: 9,
        review: "Dystopian ficition with teenagers and super powers before it was cool",
        publishDate: "2007",
    },
]; 

export interface ToReadInterface {
    title: string,
    author: string,
}


export const fictionToReadBookData: ToReadInterface[] = [
    {
        title: "Even the Darkest Stars",
        author: "Heather Fawcett",
    },
    {
        title: "Wren Hunt",
        author: "Mary Watson",
    },
    {
        title: "Shadow of the Fox",
        author: "Julie Kagawa",
    },
    {
        title: "Shadow and Bone",
        author: "Leigh Bardugo",
    },
    {
        title: "Inherits the Stars",
        author: "James P. Hogan",
    },
    {
        title: "American Gods",
        author: "Neil Gaiman",
    },
    {
        title: "Worm",
        author: "John McCrae",
    },
    {
        title: "Steel Heart",
        author: "Brandon Sanderson",
    },
    {
        title: "Bastard Gentleman",
        author: "Scott Lynch",
    },
    {
        title: "The Sharing Knife",
        author: "Lois McMaster Bujold",
    },
    {
        title: "Vicious",
        author: "V.E. Schwab",
    },
];

export const learningToReadBookData: ToReadInterface[] = [
    {
        title: 'Your Money or Your Life',
        author: 'Viki Robin',
    },
    {
        title: 'Sum',
        author: 'David Eagleman',
    },
    {
        title: 'Talking to Strangers',
        author: 'Malcom Gladwell',
    },
    {
        title: 'The Rational Optimist',
        author: 'Matt Ridley',
    },
    {
        title: 'Freakanomics',
        author: 'Stephen Dubner & Steven Levitt',
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
    },
    {
        title: 'The Automatic Millionaire',
        author: 'David Bach',
    },
    {
        title: '7 Habits of Highly Effective People',
        author: 'Stephen Covey',
    },
    {
        title: 'Mans Search for Meaning',
        author: 'Victor Frankel',
    },
    {
        title: 'Atlas Shrugged',
        author: 'Ayn Rand',
    },
    {
        title: 'Fountainhead',
        author: 'Ayn Rand',
    },
    {
        title: 'Wealth Attraction',
        author: 'Dan Kennedy',
    },
    {
        title: 'Mastery',
        author: 'Robert Greene',
    },
    {
        title: 'Influence: the Psychology of Persuasion',
        author: 'Robert Cialdini',
    },
    {
        title: 'Cashflow Quadrant',
        author: 'Robert Kiyosaki',
    },
    {
        title: 'Money Master the Game',
        author: 'Tony Robbins',
    },
    {
        title: 'Brotopia',
        author: 'Emily Chang',
    },
    {
        title: 'One up on Wall Street',
        author: 'John Rothchild & Peter Lynch',
    },
    {
        title: 'Rule #1',
        author: 'Phil Town',
    },
    {
        title: 'Attached',
        author: 'Amir Levine & Rachel S.F. Heller',
    },
    {
        title: 'Deep Work',
        author: 'Cal Newport',
    },
    {
        title: 'The Little Book of Common Sense Investing',
        author: 'John Bogie',
    },
    {
        title: 'Unwritten Laws, the Unofficial Rules of Line',
        author: 'Hugh Rawson',
    },
    {
        title: 'Quiet',
        author: 'Susan Cain',
    },
    {
        title: 'Show Your Work',
        author: 'Austin Kleon',
    },
    {
        title: 'Anything You Want',
        author: 'Derek Sivers',
    },
    {
        title: 'How to Take Smart Notes',
        author: 'S. Ahrens',
    },
    {
        title: 'Philosophy of Software Design',
        author: 'John Ousterhout',
    },
    {
        title: 'Design of Everyday Things',
        author: 'Don Norman',
    },
    {
        title: 'The Mindset',
        author: 'Carol Dweck',
    },
];
