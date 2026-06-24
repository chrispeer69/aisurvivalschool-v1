// Blog posts ("Field Reports"). Newest date first controls ordering.
// Block text supports **bold**; prompt blocks highlight [bracketed] fill-ins.
// Dates are editable — adjust to your real publish dates.

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "prompt"; text: string }
  | { type: "callout"; text: string; linkLabel?: string; href?: string };

export type BlogPost = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  date: string; // YYYY-MM-DD
  readTime: string;
  byline: string;
  blocks: BlogBlock[];
  cta: { heading: string; body: string };
};

export const posts: BlogPost[] = [
  {
    slug: "ai-changed-the-math",
    eyebrow: "The Thesis · Field Report 003",
    title: "AI Just Changed the Math for Small Business",
    subtitle:
      "For thirty years the big guys had tools you couldn't afford. That just ended. Most owners haven't noticed yet.",
    date: "2026-06-23",
    readTime: "~6 min read",
    byline: "Chris · Roadside Towing & Recovery, Columbus OH",
    blocks: [
      { type: "p", text: `Here's a thing that was true my entire working life, right up until about a year ago: if you wanted custom software for your business, you needed money you didn't have. A developer was $100,000-plus a year. An agency wanted six figures and six months for anything real. So small operators didn't build. We rented. We paid the monthly tax to whatever vendor owned our category, and we lived with whatever they decided to ship.` },
      { type: "p", text: `That was the deal. The big companies had custom tools built exactly for how they worked. You and I had off-the-shelf software built for the average of ten thousand businesses that weren't quite ours. We competed at a permanent disadvantage and called it normal.` },
      { type: "quote", text: `That deal is over. The math flipped, and almost nobody in our world has caught up to it.` },
      { type: "h2", text: `What actually changed` },
      { type: "p", text: `The cost of building the tools your business needs dropped to near zero. Not "got cheaper." Near zero. The expensive part of software was never the idea — it was the army of people you needed to type it into existence. AI does the typing now. What it can't do is know your business. **You know your business.** That's the part that was always scarce, and it turns out it's the part that matters.` },
      { type: "p", text: `I'm not theorizing. I'm a tow company owner who can't write code, and I built a working operations platform with AI as my co-founder — the kind of thing my old vendor charged me $650 a month to half-deliver. If I can do that, the math has obviously changed. The only question left is who notices and who doesn't.` },
      { type: "h2", text: `The hype is the problem, not the help` },
      { type: "p", text: `Every small business owner I know is getting buried in AI noise right now. LinkedIn gurus. Tools-of-the-day. Threads promising to "10x your business" that never once mention what business you're in. It's loud, it's constant, and it's almost entirely useless to someone who has trucks to roll or a shop to open.` },
      { type: "p", text: `So most owners do the rational thing: they tune it out. They decide it's a fad for tech people and get back to work. And I get it. But tuning out the hype and tuning out the capability are two different moves, and a lot of good operators are accidentally doing both.` },
      { type: "quote", text: `You don't need a guru. You need a translator who's used this stuff in a business like yours.` },
      { type: "h2", text: `Who this actually helps — and who it doesn't` },
      { type: "p", text: `Let me be honest, because honesty is the whole brand. This doesn't make you a software company overnight. It won't run your business for you. It won't fix a broken operation — it'll just make a broken operation move faster.` },
      { type: "p", text: `What it does is this:` },
      {
        type: "list",
        items: [
          `**It collapses the cost of the tools you need.** The thing you used to rent or do without, you can now build or replace.`,
          `**It hands you back hours.** The writing, sorting, drafting, and documenting that eats an owner's day — most of it can move off your plate today.`,
          `**It closes the gap with the big guys.** Their advantage was custom tools and staff you couldn't match. That moat just got a lot shallower.`,
        ],
      },
      { type: "p", text: `The owners who'll get crushed aren't the ones who lack the skill. The skill is learnable in an afternoon. They're the ones who decide it's not for them and keep paying the old tax while a competitor down the road quietly stops paying it.` },
      { type: "h2", text: `The uncomfortable part` },
      { type: "p", text: `AI is going to teach every operator the new math eventually. The only choice you get is whether you learn it on your terms — a little ahead of the curve, with somebody who speaks your language — or whether it teaches you the hard way, when the competitor who figured it out first starts taking your contracts.` },
      { type: "p", text: `I'd rather you learn it the first way. That's the entire reason AI Survival School exists. Not to sell you on the future. To get you through it standing up.` },
      {
        type: "callout",
        text: `New to this? Start with the post on exactly how I use AI before the trucks roll — four things, no theory.`,
        linkLabel: "Read the morning workflow →",
        href: "/blog/my-morning-before-the-trucks-roll",
      },
    ],
    cta: {
      heading: "Get ahead of the math",
      body: "AI Survival School teaches small business owners, blue-collar operators, and Main Street entrepreneurs to use AI for their actual job — in practice, not in theory. Workshops, cohorts, and a self-paced course. First cohort opens soon.",
    },
  },
  {
    slug: "my-morning-before-the-trucks-roll",
    eyebrow: "The Workflow · Field Report 002",
    title: "My Morning Before the Trucks Roll",
    subtitle:
      "Exactly how I use AI in the first 30 minutes of the day. Copy it. No theory.",
    date: "2026-06-16",
    readTime: "~6 min read",
    byline: "Chris · Roadside Towing & Recovery, Columbus OH",
    blocks: [
      { type: "p", text: `Most "how I use AI" posts are written by people who don't run anything. They'll tell you about prompt frameworks and productivity systems and the future of work. I run a towing company. My day starts before the sun and I've got drivers waiting on me. So here's the unglamorous version: the four things I actually do with AI before the trucks roll, in the order I do them.` },
      { type: "p", text: `None of this is advanced. That's the point. If it required a degree, it wouldn't help you.` },
      { type: "h2", text: `06:10 — Clear the inbox in one pass` },
      { type: "p", text: `Overnight the inbox fills up — motor club emails, a customer complaint, an invoice question, three things that don't matter. I don't read them one at a time anymore. I dump the list in and let AI sort it.` },
      { type: "prompt", text: `Here are my unread emails: [paste subjects + senders].
Sort into: (1) Reply now (2) This week (3) Delegate (4) Archive.
For each "Reply now," draft a 2-sentence response I can approve.` },
      { type: "p", text: `Five minutes and I've got a triaged list and rough replies waiting. I read them, fix what's wrong, send. The trap here is thinking the draft has to be perfect on the first try. It doesn't. **It just has to be faster to fix than to write from scratch.** It always is.` },
      { type: "h2", text: `06:18 — Handle the one ugly customer` },
      { type: "p", text: `There's almost always one. Somebody who got towed off a private lot at 2am and is furious, or thinks we scratched a bumper. Early in the day my patience is thin and that's exactly when I shouldn't be writing that reply myself.` },
      { type: "quote", text: `The angrier the customer, the less I should be the one typing.` },
      { type: "p", text: `So I hand it off. I paste what they said and ask for a reply that acknowledges the frustration, states the facts, admits nothing, and offers one next step. What comes back is calmer and more professional than what I'd have fired off with a coffee in me. I read it, make it sound like me, send it. The situation gets smaller instead of bigger.` },
      { type: "h2", text: `06:24 — Write the driver briefing` },
      { type: "p", text: `My drivers get a short text every morning: road conditions, a safety reminder, what today's priority is. Used to skip it when I was slammed. Now it takes ninety seconds.` },
      { type: "prompt", text: `Write a short morning briefing text for my drivers, [date].
Weather + road conditions in [city], one safety reminder,
today's priority ([contract coverage / heavy volume]), quick close.
Under 100 words. Sound like a boss who's been in the seat, not a memo.` },
      { type: "p", text: `That last line matters. If you don't tell it the voice you want, it'll hand you corporate mush. Tell it to sound like you, and it will.` },
      { type: "h2", text: `06:28 — Turn yesterday's mess into tomorrow's system` },
      { type: "p", text: `This is the one that compounds. Every day something happens that should've been written down already — a weird billing situation, a step a new driver got wrong, a winch-out that went sideways. Instead of letting it evaporate, I spend two minutes turning it into an SOP.` },
      { type: "prompt", text: `Turn this into a clean SOP a day-one driver could follow:
[describe what happened and how it should be handled].
Purpose, numbered steps, safety notes, what to do if it goes wrong.` },
      { type: "p", text: `Do that a few times a week and after a couple months you've got an operations manual you never sat down to "write." It built itself out of your actual problems. That's the whole trick — **you're not adding work, you're capturing work you already did.**` },
      { type: "h2", text: `The part that matters more than the prompts` },
      { type: "p", text: `You could copy these four things tomorrow and get value. But the real shift isn't the prompts — it's the habit underneath them. I stopped asking "can I find time to deal with this later" and started asking "can AI take the first 80% of this right now." Almost always, yes.` },
      { type: "p", text: `The owners who win with this aren't the technical ones. They're the ones who build the reflex: **before I do a thinking-or-writing task by hand, I check if I should hand the first draft to my coworker.** Thirty days of that and it's automatic.` },
      {
        type: "callout",
        text: `The exact prompts in this post — plus customer service, marketing, hiring, and dispatch — are in the free Operator Prompts Library.`,
        linkLabel: "Grab the library →",
        href: "/operator-prompts-library.html",
      },
    ],
    cta: {
      heading: "Want me to walk you through it live?",
      body: "That's what the cohorts are for — a small group, real businesses, building these habits together instead of guessing alone. First one opens soon.",
    },
  },
  {
    slug: "i-fired-my-software-company",
    eyebrow: "The Build · Field Report 001",
    title: "I Fired My Software Company",
    subtitle:
      "For two years I paid $650 a month for software that stopped showing up. Here's what I did about it.",
    date: "2026-06-09",
    readTime: "~5 min read",
    byline: "Chris · Roadside Towing & Recovery, Columbus OH",
    blocks: [
      { type: "p", text: `Every operator I know has a vendor like this one. You signed up years ago because you needed dispatch software and they were the option everybody used. The price crept up. The product stopped moving. And somewhere along the way the monthly invoice turned into a tax you just pay for the privilege of staying in business.` },
      { type: "p", text: `Mine was $650 a month. Sixteen trucks, a real dispatch operation, and a piece of software that — by 2025 — hadn't shipped a meaningful new feature in close to two years. I'd email support with an idea. I'd get a ticket number. Nothing would happen. I wasn't a customer to them. I was a recurring charge.` },
      { type: "p", text: `The math is the part that should make you uncomfortable: $650 a month is $7,800 a year. For software standing still. And I wasn't alone — half the operators I talked to were stuck in the exact same spot, paying the exact same kind of tax, telling themselves the same thing I was. **What else are you gonna do? Build it yourself?**` },
      { type: "h2", text: `The thing I almost didn't try` },
      { type: "p", text: `Spring of 2026 I started using Claude. Not for novelty, not to make memes — for the boring stuff that eats an owner's day. Drafting customer responses. Cleaning up spreadsheets. Writing hiring docs. Turning the way I do a job in my head into an SOP a new driver could actually follow.` },
      { type: "p", text: `A few weeks in, something clicked that I wasn't expecting.` },
      { type: "quote", text: `This wasn't a chatbot. It was a tool that did real work — if you knew how to talk to it.` },
      { type: "p", text: `That's the whole turn right there. Most people poke an AI twice, get a generic answer, and decide it's hype. What they're actually running into is that they haven't learned to give it a real job, with real context, the way you'd brief a sharp new hire. Once I started treating it like a coworker instead of a magic 8-ball, the quality of what came back changed completely.` },
      { type: "h2", text: `From "draft my email" to "build my software"` },
      { type: "p", text: `I'm not a software engineer. I want to be clear about that, because the temptation is to read this and assume I had some hidden skill. I didn't. I'm an operator who got dangerous in a terminal — somebody who was willing to be bad at something new for a few weeks.` },
      { type: "p", text: `But the same tool that cleaned up my emails could also write code. So I started small, then stopped being small. With Claude as my co-founder, I built the foundation of the US Tow Alliance and a suite of AI-native tools for towing — the stuff my old vendor wouldn't ship. Native mobile. Multi-tenant. Motor-club fluent. Built in days, not the months-and-a-roadmap-meeting a software company would've quoted me.` },
      { type: "p", text: `And then I did the thing I'd been afraid to do for two years.` },
      { type: "quote", text: `I cancelled the $650 a month.` },
      { type: "h2", text: `What I actually want you to take from this` },
      { type: "p", text: `Not "go build your own dispatch software this weekend." That's not the lesson, and anyone who tells you it's that easy is selling something.` },
      { type: "p", text: `The lesson is about leverage. The cost of building the tools your business needs just dropped to near zero — **if** you know how to use AI as a coworker. That "if" is the whole game. It's the difference between paying the tax forever and firing the vendor.` },
      { type: "p", text: `Here's where to start, in order:` },
      {
        type: "list",
        ordered: true,
        items: [
          `**Pick one annoying task you do every week.** Not your whole business. One task. The email you hate writing, the report you dread.`,
          `**Brief the AI like a new hire.** Tell it who you are, what the job is, what "good" looks like, and what to avoid. Vague in, vague out.`,
          `**Make it fix its own work.** First answer is a rough draft. Tell it what's off. "Too formal." "You missed the price." "Shorter." Watch it tighten up.`,
          `**Add up what that task costs you.** Time, money, or sanity. That number is your motivation to do it again tomorrow.`,
        ],
      },
      {
        type: "callout",
        text: `I built the prompts I run my company with into a free library — customer service, marketing, hiring, dispatch. Same ones in this story.`,
        linkLabel: "Grab the Operator Prompts Library →",
        href: "/operator-prompts-library.html",
      },
      { type: "p", text: `Two years I told myself I had no choice. I had a choice the whole time. I just didn't have the skill yet — and the skill turned out to be learnable in an afternoon, not a degree program.` },
      { type: "p", text: `That's the part nobody's telling small business owners. So I will.` },
    ],
    cta: {
      heading: "Don't learn this the hard way",
      body: "AI Survival School is for operators who know they're falling behind and want a teacher who runs a real business — not a consultant in a hoodie. First cohort opens soon.",
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function sortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatBlogDate(d: string): string {
  return new Date(d).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
