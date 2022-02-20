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
        imagePath: "/bookCovers/the_subtle_art_of_not_giving_a_fuck.png",
        author: "Mark Manson",
        rating: 10,
        review: "Some really cool ideas and interesting takes on society, life, media and habits. ",
        takeAways: ["The idea that striving to be better like traditional self help can be a negative experience because the implication is that you aren't good enough right now.", "Hapiness comes from solving problems, so choose good ones. ", "Ask lots of why questions -> why do I want to be rich, why does something bother me.", "Problems shoudl be continuous, goals should revolve around consistency rather than metrics and thusly you can constantly be the kind of person you want to be, also align goals with values."],
        publishDate: "2016",
    },
    {
        title: "Come As You Are",
        imagePath: "/bookCovers/come_as_you_are.jpg",
        author: "Emily Nagoski",
        rating: 10,
        review: "Different ways to think about sex, with amazing insight.",
        takeAways: ["Think of arousal as an accelorator (things that excite you) and a brakes (things that stress/distract you). People have different sensitivity on each and different things trigger each for different people", "Context is everything", "Expecting/anticipating, eagerness/wanting and enjoying/liking are 3 seperate things that can exist in any combination with or without one another", "If you're stressed, can do a few things to help, (exercise/dance, primal scream or crying, meditate or do yoga, something relaxing like a shower, massage, nails etc)", "You can learn to find certain things more arousing and learn to find other things as less of a turn off", "nonconcordance: your body can respond as if aroused even if you aren't mentally and vice versa", ],
    },
    {
        title: "How to Invent Everything",
        imagePath: "/bookCovers/how_to_invent_everything.jpg",
        author: "Ryan North",
        rating: 9,
        review: "Rebuilding civilization from scratch with all our knowledge, lots of interesting science, history and invention. No particularly big take aways but neat to know how records, engines, turbines and electricity work. Plus smelting and smithing and how to use animals to do all sorts of agriclture and how to rediscover penecillin if needed",
        takeAways: ["Knowledge is pretty neat"],
    },
    {
        title: "Declutter Your Mind",
        imagePath: "/bookCovers/declutter_your_mind.jpg",
        author: "S.J. Scott & Barrie Davenport",
        rating: 7,
        review: "Kinda generic / obvious but had a few standout point. ",
        takeAways: ["Like forgiving yourself for past mistakes with the attitude that you were doing the best you could with what you had at the time, also applying the same idea to other in your life who might have wronged you like your parents"],
    },
    {
        title: "Getting to Yes",
        imagePath: "/bookCovers/getting_to_yes.png",
        author: "Roger Fisher & William Urgy",
        rating: 10,
        review: "A bit thick but revolutionary ideas with regards to negotiation with enhancing examples. ",
        takeAways: ["Argue with interest over position, if 2 people wanted an orange each persons postiion is I want a Orange, and traditional wisdom would say cut the orange in half. But if one persons interest was in the fruit and the others was in the rine for zest for a cake a better arangement could have been reached. Israel and Egypt both wanted the saini desert (their position), Israels interest was in protection and Egypts was in heritage and culture and eventually an agreement was reached wher Egypt would own the land but it would be demiliterized. ", "Appeal to a neutral third party for standards, for example if you're getting and insruance claim for your car ask them how they got their estimate and use the Blue Book values as a baseline for features and parts.", "BATNA best alternative to a negotiated agreement. Have a real, ready to go alternative is sometimes the best thing because if negotations really aren't going your way you have something to fall back on.", "Invent options for mutual gain", "Be aware of dirty negotiation tricks (putting pressure on your for time, being in a room thats to hot or cold) and point them out as problems and offer to come back later once these problems are resolved."],
    },
    {
        title: "Tax Free Wealth",
        imagePath: "/bookCovers/tax_free_wealth.jpg",
        author: "Tom Wheelwright",
        rating: 7,
        review: "A bit thick but good and important ideas. Also the meta idea that american tax code is made to encourage businesses to exist here and thats why we've stayed such a power hosue of economics. ",
        takeAways: [" Mainly, businesses & investors get some awesome write offs & the best tax rates, houses are good for amortization and decpreciation (so know and use both),"," choose a good CPA who knows thing and will actively help you reduce taxes rather than being afraid of an auditor.", "Also make a trust and give some owner ship to children to avoid inheritance taxes.","Own and spread out businesses to reduce taxes/backet.","Don't just look at income tax but also sales, property and excise.","401k income derived isn't taxed under capital gains but normal income rules so if you plan on retiring with a higher income it might not be better to use a IRA. (ROTH is still awesome, until you don't qualify because your income is to high :/) "],
    },
    {
        title: "The 4 Hour Work Week",
        imagePath: "/bookCovers/the_4_hour_work_week.jpg",
        author: "Tim Ferris",
        rating: 10,
        review: "Revolutionary concepts with regards to efficiency and value created for work",
        takeAways: ["Learn to cultivate real focus (get your rest, eliminate phones and distraction) to accomplish most of what you have to do in a day in record time (plus after you run out of work energy you aren't going to be very productive anyways)", "Batch tasks, do a bunch of the same type of thing all together because constant switching/distractions take time/effort", "You don't have to wait until retirement to do retirement like things (and you probably shouldn't)","Focus on effictiveness (getting towards your goal), over efficiency (doing well at a task that may or maynot be important), 80/20 rule (80% of benefit comes from 20% of the effort so eliminate wisely that which isn't helping much), Parkinsons Law (tasks grow to fill the time alloted for them, -> short clear deadlines)", "Avoid information/interruptions that are irrelevant, unimportant or unactionable. Most info is time consuming, negative, irrelevant to your goals and outside your influence", "Delegate tasks you don't want to do"],
    },
    {
        title: "Rich Dad Poor Dad",
        imagePath: "/bookCovers/rich_dad_poor_dad.jpg",
        author: "Robert Kiyosaki",
        rating: 9,
        review: "A classic that introcudes new ways to think about money",
        takeAways: ["No ones gonna teach you financial literacy, its up to you to go get it yourself and its important to understand money because its the cause of many problems for most people", "Make your money work for you, invest in stocks or real estate or create a business (money generating assets)", "Knowledge is power, never stop learning", "Pay yourself first (the first thing I do is invest a large percentage of every check and then portion that goes to necesities like food and rent)"],
    },
    {
        title: "The 5 Love Languages",
        imagePath: "/bookCovers/the_5_love_languages.jpg",
        author: "Gary Chapman",
        rating: 6,
        review: "A few examples were useful but mostly the core concept from the web is enough",
        takeAways: ["Talk to your partner about how you can show them you care about them and vice versa.", "General idea is their are 5 categories of potential ways to show or recieve affection, phyiscal touch, gifts, words of affirmation, acts of service and quality time"],
    },
    {
        title: "10% Happier",
        imagePath: "/bookCovers/10_happier.jpg",
        author: "Dan Harris",
        rating: 9,
        review: "Kinda slow at the beginning as he's just explaining his life story. Some very good take aways though and the writing style is generally pretty good. ",
        takeAways: ["Take some take to conciously be more aware of your sense and emotions (look at nature, feel how soft your cloths are on your skin).","Meditate as a way to practice focus, try to just focus on your breath, when you get distracted realize this and gently go back to focus on your breath. ","Respond don't react. When you find yourself feeling a way, identify the emtions, notice how they're impacting your body (sweaty palms, heart racing, etc), look at why your feel those emotions, what can be done about the situation, then gently nudge away the feelings.","Worry is useful until its not -> worry is good so long as its motiviating action that is productive like planning or counter measure but after that its pointless and you should stop"],
    },
    {
        title: "Show Your Work",
        imagePath: "/bookCovers/show_your_work.png",
        author: "Austin Kleon",
        rating: 9,
        review: "I really cool book, covering the importance of documenting your journey as a way to sharing valuble knowledge and finding likeminded people. Show and cute book, very easy read",
        takeAways: ["You don't have to be a genuis/ultra refined", "have an amateurs curiosity", "Think Process over Product", "Share small and often", "Only share what you think would be genuinely helpful, and/or entertaining and you would let your mother see, internet is here forever", "Never feel bad for what you genuinely enjoy", "Listen/absorb/pay your dues", "Hearts over eyeballs", "Take out people/things that don't matter and suck to much of your energy"],
    },
    {
        title: "Purple Cow",
        imagePath: "/bookCovers/purple_cow.jpg",
        author: "Seth Godin",
        rating: 9,
        review: "Recommended to me by my current employer Fearless it details how new marketing needs to rely on particulalry remarkable products over traditional things like TV advertising",
        takeAways: ["We live in an era when most easy remarkable problems have been solved and people are no longer proactively looking for something genericly useful that everyone needs (like pain killers)", "To differentiate yourself you need to be remarkable in some fashion", "Being remarkable leads to the few people who use your product becoming 'sneezers' and thus spreading the product to all their friends", "Remarkable is a very loose term and can range wildly from extremely niche like disgusting horror films, excessively cheap like while still solid quality like McDonalds or Ikea, process shifting like Amazon and the popularization of online shopping, extremely high end like the $2000 hand made silk scarves, outstanding service like people who will take hours and walk you through complex tasks or return policies that extend out decades and cover everything, extreme ease of use or simplicity like with touch screens", "Related but not in the book is the concept of differentation in a variety of 6 categories Product (Features, Performance, Efficacy, Durability, Reliability), Service (Ordering Ease, Delivery, Installation, Customer Training), Channel (Coverage, Expertise, Performance), Relationship (Competency, Courtesy, Reliability, Responsiveness), Reputation, Price (cheap/expensive, payment model)", ],
    },
    {
        title: "I Will Teach You To Be Rich",
        imagePath: "/bookCovers/i_will_teach_you_to_be_rich.jpg",
        author: "Ramit Sethi",
        rating: 8,
        review: "I good sum of the major do's and don't of personal finance as an adult. I knew a lot of these already but doesn't hurt repeating and I definielty learned a few things",
        takeAways: ["Create systems to pay bills and invest automatically and then just spend the rest of your money as you please (this is a concious spending plan and is a lot easier than traditional budgeting)", "Don't nit pick, instead knock out the most valuble things and then call it good", "Negotiate with banks all over the place", "Use credit cards for their insuance benefits, always pay them off", "High interest savings accounts are good", "Max out your retirement accounts", "You want to keep a diversification not only between various stocks but also across sectors (with more intention, like REITS, Large caps, Small caps, Foreign, Growth Value) and across asset classes (stocks, bonds, real estate) -> if you manage yourself will require rebalancing. Lifecycle funds do this for you and adjust over time", ""],
    },
    {
        title: "The Ultimate RPG Gameplay Guide",
        imagePath: "/bookCovers/the_ultimate_rpg_gameplay_guide.png",
        author: "James D'Amato",
        rating: 9,
        review: "Always cool to see story telling from a different point of view and get pointers from the masters regards to creating atmosphere, themes in a campaign, carying ideas with imagery, resolving conflict, pacing and so much more. A great read for anyone who plays RPGS",
        takeAways: ["Pick a system that fits your goals (action, romance, exploration, politics/social etc)", "system vs story led creation", "You can collaberate on world building as a GM ask questions", "More disscussion and transparency -> say this action might have consequences or may make your character feel this way or such. Check before forcing someone's character into certain situations, ask what they had in mind and why (potentially different ways to accomplish goals or general ideas)", "Atmosphere is tied to how you describe things as a DM", "Make choices important", "yes and...", "for pacing be aware of which rooms are which types of encouter and whether they're upbeats or down beats (Action, Discovery, Interpersonal, Emotional, Challenge, Preparation)", "Make a Theme and enforce it via imagery and world building", "Telling PCs to look for Trouble rather than playing protectively", "Personal Flaws and motivations"],
    },
    {
        title: "Sum",
        imagePath: "/bookCovers/sum.png",
        author: "David Eagleman",
        rating: 10,
        review: "A great book exploring various ideas of what happens after death and various paradigms underwhich the universe might actually work",
        takeAways: ["The book doesn't really have takeaways in that it was mostly a fun, lighter, though provoking read"],
    },
    {
        title: "The Design of Everyday Things",
        imagePath: "/bookCovers/the_design_of_everyday_things.jpg",
        author: "Donal Norman",
        rating: 9,
        review: "Really intesteresting and talks a lot about how to design things well. A bit dated but most of the concepts still apply to today. Plus its cool to see how these some of the predictions came to fruition. Like how if you've ever pulled on a door that should have been pushed, that shouldn't have happened. It should have been obvious",
        takeAways: ["Visibility, Good Conceptual Models, Good Mappings, Feedback for User Action","Memory is only precise enought to ditinguish among often and existing choice ex coins vs fake coins","Long Term Memomory: Rote: Bad b/c no undersatnding of ability to fix okay sometimes alphabet and emergency proceedure","LTM: Relationship: Propper interpretation/mental mapping -> controll design will make sense, relates model to actions","LTM: Mental: model -> derive behavior, slow but can extrapolate to situations unsean or troubleshoot", "If you need to label its probably wrong", "limit user choice w/ constraints logical, cultural, semantic, physical", "Visibility, relevant parts visible, feedback, actions create visible change", "Confirm name over action when deleting or better yet make rec overy easily possible for a while", "Errors created by various means: social pressure, expensive, false reporting of dange and threat of punishment, time pressure. For instance if a plane needed to be delayed for saftey concern their would be all those pressure to ignore in favor of all of these", "Warnings tend not to work because we someone want to violate for specific use cases and the system can't distinguish intentional vs accidental behavior", "Forcing functionas: Interlock. saftey pin for grenade. Lockin. auto save file. Lockout. Make unsafe action hard to do. ", "Keyboards and a good enough design for the vast majority", "More features -> more complexity of controls. Limit features and group logically"],
    },
    {
        title: "A Philosophy of Software Design",
        imagePath: "/bookCovers/a_philosopy_of_software_design.jpg",
        author: "John Ousterhout",
        rating: 10,
        review: "A fantastic book that details a lot of what make a good developer vs a bad one and what patterns, philosophies and general ideas lead to problem in large code bases. So cool to seem many ideas I've had to struggle with and learn on my own be incorporated and de-mystified. Plus a bunch I didn't even know.",
        takeAways: ["Complexity makes code hard to understand and/or modify","Change amplification: requireing changes in many places for repeated code","Cognative load: have to remember/learn lots required info","Unknown Unknowns: unclear what code must be modified or what info is needed to complete, hard coded exceptions that need to be changed with a global var (color)","Obscurity: important info isn't obvious","Dependencies: other code must be understood and/or modified as well (can be done well sometimes)","Constantly invest in good design/solving tech debt, rather than solving bugs/features ASAP","Interfaces should be simple/clear, Implementations should be deep and complex","Red Flag: information leakage, when 2 classes both need the same knowledge, like a particular file format","Temporal decomposition: don'tdivide based on time, like having to have a read, then a write sequentially. Both might need to be modified if something like file format changes","Red flag: Overexposure, if an API forces users to configure rarely used features and learn configuration and flags for it, it increases cognative load which is bad. Instead just have defaults and optional flags","Be general purpose but easy to use for current case. eliminate or abstract ouf or push lwer/higher special cases","Red Flag: Pass through Method, A method that just passes args to a different function. Usually a sign that 2 classes/function don't have distinct enough roles/responsibbilities","When developing modules, look to take a bit of extra suffering yourself for ease of your users","Bring code together when: They share info, they are used together, they overlap conceptually and their is a high level category that encapsulates both, its hard to understand one without the other","Red Flag: Special General Mixture, Occurs when general purpose mechanism also contains code specialized for a particular use of that mechanism","The desicision to split modules is based on complexity, choose for fewest, dependencies, best info hiding and deepest interfaces","When commenting, Units for variables, inclusive or exclusive boundaries, null implies?, freed? and who is responsibles, are their certain properties that are always true (like list always contains 1 entry)","Comments: high level, what is code trying to do as simply stated as possible, why/when is this code executed","Comments shoudl explain what/why not how","If its hard to pick a concise clear name that s a red flag for design","Write comments first as part of design","Don't duplicate documentation instead poitn to a global design dock with section that refer to that one point, useful for distributed system or calls and API's that always need to match","For agile, increment of development should be abstractions not features","The issue with Test Driven Development is that it focuses on getting specific features working rather than the best design","When thinking about performance consider what most expensive in the system, usually (Network communication, I/O to secondary storage, dynamic memory allocation, cache misses)","When trying to improve performance always measure before and after"],
    },
    {
        title: "How to Win Friends and Influence People",
        imagePath: "",
        author: "Dale Carnegie",
        rating: 9.5,
        review: "Was a lot less annoying as an audio book, lots of good points on general pleasent and productive social interaction. A bit repetitive at times and a bit cheesy/preachy. Otherwise would be a 10",
        takeAways: [
        "Don't criticise, everyone always thinks they're in the right (people don't like to be wrong)",  "Be genuinely interested in other people", "Be happy/excited", "Smile", "Listen Intently", "Encourage others to talk about themselves/Ask about their interests", "Don't correct others", "avoid arguments", "Look for points of agreeemnt", "Start with, I may be wrong I often am, lets examine the facts -> Talk of your own mistakes before theirs", "Think about what they want and show them how to get it", "Desire to be appreciated and important", "Give people lots genuine of appreciation and encouragement as a leader, praise any and all improvement", "if they make a mistake, give lots of encouragement and make the fault seem easy to correct","Arouse and eager want", "Let them feel the idea is theirs, Put out evidence and let them draw their own conclusions", "Dramatize, show don't tell, play/be creative, be new/different", "Let people save face", "Give the other person a reputation to live up to", "Ask questions over orders", "Appeal to the noble motives -> can we not do that, I don't want my children around that kind of behavior etc", "Praise then criticise, don't say but, say and. I'm so proud of you for how to did on your math test this semester and I'm sure you science grades are sure to follow", "I don't blame you one iota for feeling as you do, if I were in your shoes I'm sure I'd feel the same way", "Get them saying yes, yes", "Ask for their ideas and input on drafts with the frame of we want to server you as best as possible also makes them feel important", "Cruel truths aren't useful (most of the time)", "Admit when you're wrong, do it before it can be pointed out", "Actually think and be sympathetic from their POV and their problems", ],
    },
    {
        title: "How not to die alone",
        imagePath: "",
        author: "Logan Ury",
        rating: 10,
        review: "",
        takeAways: [
        "Peopel are flawed because they have unrealistic expectations for themselves, the other person, or the relationship at large",
        "Romanticisers- unrealist expectations for the relationship - hold the idea that love happens to you, very specific look for their soul mate and they won't even consider anyone who looks/seems different, sky high expectations, give up with issues rather than solve, have to realize they aren't perfect, don't be passive in looking, relationships aren't effortless - social media bias",  
        "Maximizer - unrealistic expectaions of partner - Always a what if better or perfect, lots of indecision, people who don't do this are happier even with objectively worse decisions/outcomes, once something meets your expectations be happy and don'tworry about what else is out there, its how you feel about the decision not what is was. Secretary problem if you have to choose a secretary out of 100 candidates mathmatically speaking best way is after 37% take think of the best one so far and then pick then next person who is greater than or equal to that person, can apply the same idea to dating as 37% of time you plan on dating",
        "Hesitator - unrealistic expectations of self - I'll be ready when xyz mentality, aspirations turn into excuses, opprotunity cost loosing the chance to learn and learning by doing, Gulf between wanting to date and actually dating, help by having short deadlines, bit of prep for profile pics and improve class and therapy? Tell others, start smol, be compasionate with yourself",
        "stop talking to your ex, we are less comitted to choices we think we can reverse and comittment is crucial to happiness, we retroactively give positive thought to things we chose and negative thought to things we didn't",
        "When dating think of if you'd trust them help raise your child / how reliable they are",
        "No correlations between partner similarities and happiness",
        "Their is a correlation between happiness and emotional stability, and kindness. Can be judged via how they respond to stress and how they respond to people they dont' need something from",
        "Look for loyalty and reliability in hard times, can estimae via friends from different stages of their life",
        "You want a Growth mindset, estimate via how they react to challenges, shoudl persist and see risk as opprotunity rather than potential embarrassment, self talk should be compassionate",
        "What do they bring out of you, pay attention to hwo you feel w/ and after hangingout with them",
        "Pay attention to how you fihgt, fight well rather than avoiding",
        "Reflect on how you make hard decisions together",
        "We're sugggestable, see a metric and assume its importance",
        "you're unlikely to change perferces or delete profiles/subscriptions in general",
        "Experience goods must be experienced and are more subjective and searchable goods can be reasearched are more objective",
        "Don't treat it like an interview", "Whether or not you believe you can do something or not, you're right.", "Negativity is self fulfilling", "Activity oriented. A task to do together, cooking KBBQ, board games, art stuff, cooking, so the focus isn't on you and then doing conversation. Arcade, painting or museum", "You value something more when you know how much effort went in", "Start in the middle, oh, hey you'll never guess what's been going on or i heard this great story recently that you'll love.", "Ask for advice Actually listen, be interested", "Both ask questions that let them continue and shift focus back to you with comments about your own opinions and ideas (even mix)", 'Keep your phone out of sight. Perhaps ask to commit to both doing so from beginning of date.', "Memory is based on most intense moment and the end so end with a bang", "Post date questions. What side of me did they bring out? How did body feel? Do I feel more or less energized? Curious? Laughed? Did I feel heard? Did I feel attractive?", "The Spark is dumb", "Familiarity breeds attraction.", "People confuse anxiety for chemistry", "We imagine people flattering when we have less details and create unrealistic fantasies This is bad because meeting reveals normal flaws and leads to disappointment Make less assumptions and don't presume you know things until you talk to them", "Pace yourself, don't date wayyy to many people at once", "App advice, males, smile without teeth stand alone, look at camera. No filters, no people who could possibly be SO's. Candid is good. Test against friends Black and white kills Profile should be true to you and not who you want to be. Should be specific and contain conversation starting potential. Focus on what you like not what you don't Put effort into opener, be specific. Get to a date IRL fast Date transition: im really enjoying this conversation, wanna continue it over coffee this Sunday afternoon?", "Event should allow you to meet people, talk to people, enjoy in a vacuum Talk to people consistently, at event", "Environment for the date matters",         
        "We end to assume actions say something about personality/character rather than that they are just a result of circumstances, try to assume circumstances on purpose, give people the benefit of the doubt",
        "Look for poistives in people",
        "People tne dot take the defaults, design defaults into your life",
        "Try to go on the second date most of the time",
        "Pet peeves != deal breakers",
        "We stop auto behavrior at decision poitns, like with eating until the end of a bucket of popcorn vs the end of a smol bag",
        "Define the relationship, start with hey, I feel awkward about this but ... (this creates known vulnerability and more empathy),Thank them for their clarity and honesty after",
        "After moving in you are less likely to be honest about flawa sn less likely to stop dating because it is very inconvenient",
        "Sunk cost fallacy and loos aversion (teh idea that loss is scarrier than gains are good), keep people in relationships",
        "Wardrbe test: what peice of clothing is your partner, gut reaction.",
        "People expect spark to be around forever and leave once its gone. ",
        "Have you been bringing your best self (when thinking about breaking up)",
        "Missing on a goal is usually due to a lack of plan",
        "When breaking up wirte down reasons for breaking up to help when sad later",
        "Select time and place with care",
        "Have a script, be compassionate but direct.",
        "If someone says whats wrong with me -> I respect you but I dno't think this will work long term and I don't want to wast your time or mine. ",
        "Time limit 90 min, with the assurance that you can talk again tomorrow",
        "Prep and consider: Goal, core message, tone to use, tone to avaoid, opener, what needs to be said, concerns about how they will react and counters to that",
        "If someone says What did I do wrong -> this isn't about anything you did or who you are, its about what we create when we're together. You did nothing wrong and I dont' want you to blame yourself",
        "If she says mean things -> I understand you're mad and I've hurt you so now you want to hurt me, you have every right to be upset but I don't want this to be any more painful thanit has to be so please don't attack me",
        "Avoid breakup sex",
        "Post breakup Plan for yourself",
        "After, Frame the breakup positively for yourself, focuse on th negatives of the relationship, reconnect with parts of yourself you lost when in the relationship, ",
        "Reflect about what shoudl be different in future relationships, who were you in the relationship and who do you wnat to be in future relationships",
        "Expect the relationships to grow and change, rather than stay the same as it starts", "Studies find that we think we'll be the same in the future even though we've changed a lot in the past. Which just isn't true ", "Wedding contract or relationships contract. Things to check in every year or so. Ammendments", "Life should be intentional. You should look back and see choices you made on purpose and honesty toward yourself. Course correct when you need to."
    
        ],
    },
]  

export const fictionReadBookData: ReadInterface[] = [
    {
        title: "Mistborn",
        imagePath: "/bookCovers/mistborn.jpg",
        author: "Brandon Sanderson",
        rating: 10,
        review: "Wonderful world with an amazing and unique magic system that has very interesting weaknesses/tradeoffs",
    },
    {
        title: "Ready Player One",
        imagePath: "/bookCovers/ready_player_one.jpg",
        author: "Ernest Cline",
        rating: 9,
        review: "Solid story, with some nice twists and turns. References and easter eggs abound. I like the D&D ones and old game ones that my dad gave me context for.",
        publishDate: "2011",
    },
    {
        title: "Ex-Heroes",
        imagePath: "/bookCovers/ex_heroes.iffi",
        author: "Peter Clines",
        rating: 9.5,
        review: "Zombies and Super Heros. ",
        publishDate: "2010",
    },
    {
        title: "Hero",
        imagePath: "/bookCovers/hero.iffi",
        author: "Perry Moore",
        rating: 10,
        review: "Lovely vibe, morals and character development",
        publishDate: "2007",
    },
    {
        title: "Harry Potter",
        imagePath: "/bookCovers/harry_potter.iffi",
        author: "J. K. Rowling",
        rating: 8,
        review: "A bit darker than I remember but well described as oh, thats such a *insert main character here* thing to say/do",
        publishDate: "1997",
    },
    {
        title: "Michael Vey",
        imagePath: "/bookCovers/michael_vey.iffi",
        author: "Richard Paul Evans",
        rating: 10,
        review: "Love the characters and the powers. Such Michael is such a real high schooler feeling character and I love the chemistry between him and Taylor.",
        publishDate: "2011",
    },
    {
        title: "Percy Jackson",
        imagePath: "/bookCovers/percy_jackson.iffi",
        author: "Rick Riordan",
        rating: 10,
        review: "Tantilizing story, super well crafted characters and well written worlds and action",
        publishDate: "2005",
    },
    {
        title: "Enders Game",
        imagePath: "/bookCovers/enders_game.iffi",
        author: "Orson Scott Card",
        rating: 9,
        review: "The brilliance of ender and the way the entire arc of him working for the lazer tag 0 gravity teams is awesome. Some much creativity with the formations, and fighting styles. A bit slow towards the end and not a huge fan of the whole depressing overworked kid vibe",
        publishDate: "1985",
    },
    {
        title: "Creatures of Light and Darkness",
        imagePath: "/bookCovers/creatures_of_light_and_darkness.iffi",
        author: "Roger Zelazny",
        rating: 9,
        review: "I remember liking it a lot although I don't remember it that well, some really creative and out there stuff",
        publishDate: "1969",
    },
    {
        title: "Perks of Being a Wall Flower",
        imagePath: "/bookCovers/perks_of_being_a_wall_flower.iffi",
        author: "Stephen Chbosky",
        rating: 9,
        review: "So much personality and understanding of how it feels to be in highschool",
        publishDate: "1999",
    },
    {
        title: "Temeraire",
        imagePath: "/bookCovers/temeraire.iffi",
        author: "Niome Novak",
        rating: 7,
        review: "Napolean era warfare but with dragons and a world war II kinda vibe with air forces",
        publishDate: "2006",
    },
    {
        title: "Rangers Apprentice",
        imagePath: "/bookCovers/rangers_apprentice.iffi",
        author: "John Flanagan",
        rating: 9,
        review: "Fantasy/D&D vibes to the max",
        publishDate: "2004",
    },
    {
        title: "Graceling",
        imagePath: "/bookCovers/graceling.iffi",
        author: "Kristin Cashore",
        rating: 10,
        review: "Fantasy/D&D vibes with super skills/super power. A bit slow towards the end",
        publishDate: "2008",
    },
    {
        title: "Old Mans War",
        imagePath: "/bookCovers/old_mans_war.iffi",
        author: "John Scalzi",
        rating: 10,
        review: "Sci-fi where the universe is a lot bigger and more intimidating than you'd think",
        publishDate: "2005",
    },
    {
        title: "Midnight at the well of Souls",
        imagePath: "/bookCovers/well_of_souls.iffi",
        author: "Jack L Chalker",
        rating: 10,
        review: "Intergalactic travel, a variety of species, reincarnation and an experimental world at the center of it all",
        publishDate: "1977",
    },
    {
        title: "A Night in the Lonesome October",
        imagePath: "/bookCovers/a_night_in_the_lonesome_october.iffi",
        author: "Roger Zelazny",
        rating: 10,
        review: "Halloween, murder mystery vibes, well written and keeps you guessing until the very end",
        publishDate: "1993",
    },
    {
        title: "Eleanore and Park",
        imagePath: "/bookCovers/elenore_and_park.iffi",
        author: "Rainbow Rowell",
        rating: 7,
        review: "Another book that captures how it feels to be 17",
        publishDate: "2012",
    },
    {
        title: "City of Bones",
        imagePath: "/bookCovers/city_of_bones.iffi",
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
