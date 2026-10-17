// Site configuration — replace these when official details are available.
export const SITE = {
  title: "The Art of Locking In",
  author: "Andrew Rusch",
  // TODO: replace with the official purchase URL. Leave empty to show "coming soon".
  purchaseUrl: "",
  // Add verified social links here, e.g. { label: "Instagram", href: "https://..." }
  social: [] as { label: string; href: string }[],
  // Add a verified contact email to display it on the contact page.
  contactEmail: "",
};

export type Chapter = { n: string; title: string; opening: string; summary: string };

// Openings are verbatim first lines from the manuscript.
export const CHAPTERS: Chapter[] = [
  { n: "01", title: "The Attention War", opening: "You are not lazy. You are being trained.",
    summary: "Understand how phones, algorithms, entertainment and comfort quietly train your mind to choose distraction over discipline — and why reclaiming your attention is the first step toward meaningful change." },
  { n: "02", title: "Dopamine Addiction", opening: "You do not just crave pleasure. You crave escape.",
    summary: "Explore the pull of the quick hit — the scroll, the snack, the notification — and how reaching for escape trains your mind to run from effort, making the hard task feel heavier every time." },
  { n: "03", title: "Comfort Is Killing Ambition", opening: "Comfort does not always look dangerous. That is what makes it dangerous.",
    summary: "Rest is human. But when comfort becomes your automatic response to every challenge, it stops being rest and becomes a cage that keeps you from the life growth requires." },
  { n: "04", title: "Identity Before Discipline", opening: "You do not become locked in by trying harder for one day.",
    summary: "Discipline lasts only when who you believe you are changes. Stop waiting to feel ready — readiness is often an excuse disguised as preparation." },
  { n: "05", title: "Discipline, Consistency, and Motivation", opening: "Motivation is not the foundation. It is the spark.",
    summary: "Feelings are unstable, so a life built on motivation is unstable. Learn why discipline moves without asking how you feel, and how consistency carries you when the spark fades." },
  { n: "06", title: "Mastering Execution", opening: "Ideas do not change your life. Execution does.",
    summary: "Most people are not missing ideas — they are missing follow-through. Turn identity and discipline into movement, because potential without execution becomes frustration." },
  { n: "07", title: "Focus Is a Superpower", opening: "Focus is not normal anymore. That is why it is powerful.",
    summary: "In a distracted world, the person who can give full attention to one thing long enough to become good at it becomes exceptional. A scattered mind cannot build a focused life." },
  { n: "08", title: "The Locked-In Routine", opening: "A locked-in life is not built by random energy. It is built by routine.",
    summary: "Real transformation is quieter than a perfect Monday. It happens in the first hour of the day and the small choices you repeat — your routine is where your identity becomes real." },
  { n: "09", title: "Becoming Unrecognizable", opening: "The goal is not to improve a little. The goal is to become unrecognizable.",
    summary: "Not because you hate who you are, but because you understand who you could become. When the way you think, choose and work changes, people feel it before they can explain it." },
  { n: "10", title: "Destroying Distraction", opening: "Distraction does not disappear because you become better.",
    summary: "The algorithm does not care that you are changing. Stop playing defense, stop trusting willpower alone, and become harder to distract by design." },
  { n: "11", title: "Build a System That Captures Money", opening: "Discipline gives you control. Money systems give you leverage.",
    summary: "Discipline needs a target. Direct the person you are becoming toward something that produces value — a skill, a product, a service, a business, a brand or a repeatable offer." },
  { n: "12", title: "The Art of Locking In", opening: "Locking in is not something you do once. It is something you return to.",
    summary: "The real test is whether you keep returning to your standard when life gets loud, boring or heavy. Attention, energy, habits, identity, execution and value — combined into one practice." },
];

// Verbatim from the back cover.
export const BACK_COVER = [
  "What if the biggest thing standing between you and the life you want isn't a lack of talent, time, or opportunity—but your inability to stay focused long enough to build it?",
  "The Art of Locking In is about taking back control of the things that shape your life: your attention, your habits, your time, your energy, your discipline, and ultimately your future.",
  "In a world designed to keep you distracted, comfortable, and constantly consuming, Andrew Rusch challenges you to stop letting everything compete for your attention. Through practical principles on focus, discipline, identity, execution, routines, distraction, and ownership, this book explores what it really takes to become intentional about the life you're building.",
  "You will learn how to break the cycles that keep you stuck, protect your attention, execute when motivation disappears, build habits that compound, and turn discipline into something that creates real freedom and value.",
];

export type Article = { slug: string; title: string; topic: string; excerpt: string; chapter: string; body: string[] };

// EDITORIAL SAMPLE CONTENT — drafted from the manuscript's themes; not yet approved by the author.
export const ARTICLES: Article[] = [
  { slug: "attention-is-trained", topic: "Attention", chapter: "01", title: "Your Attention Is Being Trained",
    excerpt: "Control is not always taken by force. Sometimes it is taken through pleasure.",
    body: ["Most people believe they are in control because no one is forcing them to waste time. The book argues the opposite: every scroll and every notification is a small lesson in choosing the easy thing.", "The first move is noticing. Before you can reclaim attention, you have to see where it is going — and decide what deserves it."] },
  { slug: "motivation-is-the-spark", topic: "Discipline", chapter: "05", title: "Motivation Is the Spark, Not the Foundation",
    excerpt: "If your whole life depends on feeling motivated, your life will always be unstable.",
    body: ["Some days you wake up ready. Other days the old version of you starts talking again. Motivation comes and goes.", "Discipline is what moves when the feeling is gone. Consistency is what turns those moves into a life."] },
  { slug: "routine-tells-the-truth", topic: "Routines", chapter: "08", title: "Your Routine Tells the Truth",
    excerpt: "You can say you are disciplined, but your routine tells the truth.",
    body: ["Transformation is usually quieter than we want it to be. It happens in what you do when nobody is clapping.", "Look at your first hour. It is a more honest description of your priorities than anything you say about them."] },
  { slug: "harder-to-distract", topic: "Distraction", chapter: "10", title: "Become Harder to Distract",
    excerpt: "Becoming stronger alone is not enough.",
    body: ["The world will not stop competing for your attention because you decided your future matters.", "Instead of trusting willpower every time, design an environment where distraction has fewer ways in."] },
  { slug: "discipline-needs-a-target", topic: "Building Value", chapter: "11", title: "Discipline Needs a Target",
    excerpt: "You can become disciplined and still spend all your energy building someone else's dream.",
    body: ["That does not mean discipline has failed. It means it needs direction.", "Point the person you are becoming toward something that produces value — a skill, a service, a product — and build it consistently. The book offers principles, not guarantees."] },
  { slug: "stop-waiting-to-feel-ready", topic: "Identity", chapter: "04", title: "Stop Waiting to Feel Ready",
    excerpt: "Ready is usually just another excuse disguised as preparation.",
    body: ["People wait for the perfect plan, routine and moment. The book suggests change starts deeper: with who you believe you are.", "Every kept promise to yourself is evidence for a new identity."] },
];
