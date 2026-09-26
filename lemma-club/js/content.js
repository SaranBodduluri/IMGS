// Everything the club updates week to week lives in this file.
// Edit the values below, save, and the site updates. No build step needed.

window.LEMMA = {
  club: {
    name: "Lemma Club",
    meeting: "Wednesdays, 6:30 pm",
    location: "Room TBA",
    // Leave a value empty ("") to hide its link.
    instagram: "", // e.g. "https://www.instagram.com/yourclubhandle/"
    email: "", // e.g. "lemmaclub@university.edu"
    // Shows a "draft" note at the top of every page. Set to false once the
    // placeholder names, photos and events below have been replaced.
    draft: true,
  },

  // Board members, shown as circles on the Leadership page.
  // photo: path to a square-ish image, e.g. "assets/leaders/president.jpg".
  //        Leave it empty to show the glyph instead.
  // links: remove a line (or leave it "") to hide that button.
  leaders: [
    {
      name: "Your Name",
      role: "President",
      details: "Major · Class of 20XX",
      bio: "Leads the board, runs weekly meetings, and works with the math department on the club's plans.",
      photo: "",
      glyph: "∑",
      links: { website: "#", cv: "#", linkedin: "#" },
    },
    {
      name: "Your Name",
      role: "Vice President",
      details: "Major · Class of 20XX",
      bio: "Supports the president, keeps the board coordinated, and runs meetings when the president can't.",
      photo: "",
      glyph: "∫",
      links: { website: "#", cv: "#", linkedin: "#" },
    },
    {
      name: "Your Name",
      role: "Treasurer",
      details: "Major · Class of 20XX",
      bio: "Manages the club budget, submits funding requests, and makes sure there is always enough pizza.",
      photo: "",
      glyph: "π",
      links: { website: "#", cv: "#", linkedin: "#" },
    },
    {
      name: "Your Name",
      role: "Secretary",
      details: "Major · Class of 20XX",
      bio: "Takes meeting notes, sends the weekly newsletter, and keeps the member list up to date.",
      photo: "",
      glyph: "∂",
      links: { website: "#", cv: "#", linkedin: "#" },
    },
    {
      name: "Your Name",
      role: "Events Coordinator",
      details: "Major · Class of 20XX",
      bio: "Plans problem nights, talks and socials, and books the rooms and speakers.",
      photo: "",
      glyph: "∞",
      links: { website: "#", cv: "#", linkedin: "#" },
    },
    {
      name: "Your Name",
      role: "Outreach Chair",
      details: "Major · Class of 20XX",
      bio: "Runs the club Instagram, designs posters, and works with other clubs on campus.",
      photo: "",
      glyph: "√",
      links: { website: "#", cv: "#", linkedin: "#" },
    },
  ],

  // Events, shown on the calendar and on the home page.
  // date: "YYYY-MM-DD". start/end: 24-hour "HH:MM" (leave start empty for all-day).
  // type: "meeting", "talk", "competition" or "social" (sets the colour).
  // location: optional, defaults to club.location above.
  events: [
    {
      date: "2026-09-30",
      start: "18:30",
      end: "20:00",
      type: "meeting",
      title: "First general meeting",
      description: "Meet the board, hear what's planned for the semester, and try a few warm-up problems.",
    },
    {
      date: "2026-10-07",
      start: "18:30",
      end: "20:00",
      type: "meeting",
      title: "Problem night: the pigeonhole principle",
      description: "Put n + 1 pigeons in n holes. We'll see how far that one idea goes.",
    },
    {
      date: "2026-10-14",
      start: "18:30",
      end: "19:30",
      type: "talk",
      title: "Student talk: why you can't comb a hairy ball",
      description: "A friendly tour of the hairy ball theorem, and why somewhere on Earth the wind is always still.",
    },
    {
      date: "2026-10-21",
      start: "18:30",
      end: "20:30",
      type: "competition",
      title: "Putnam practice: past problems",
      description: "We work through a few past Putnam problems in small groups. All levels welcome.",
    },
    {
      date: "2026-10-23",
      start: "17:00",
      end: "19:00",
      type: "competition",
      title: "Integration bee",
      description: "Head-to-head rounds of integrals against the clock. Prizes for the top three.",
    },
    {
      date: "2026-10-28",
      start: "18:30",
      end: "20:00",
      type: "meeting",
      title: "Problem night: invariants",
      description: "Find the quantity that never changes, and the problem falls apart.",
    },
    {
      date: "2026-11-04",
      start: "18:30",
      end: "19:30",
      type: "talk",
      title: "Talk: the math of shuffling cards",
      description: "How many riffle shuffles does it take to mix a deck? The famous answer is seven.",
    },
    {
      date: "2026-11-11",
      start: "18:30",
      end: "20:00",
      type: "meeting",
      title: "Problem night: generating functions",
      description: "Turn counting problems into algebra with power series.",
    },
    {
      date: "2026-11-13",
      start: "18:00",
      end: "21:00",
      type: "social",
      title: "Board game and puzzle night",
      description: "Games, puzzles and snacks. Bring a friend.",
    },
    {
      date: "2026-11-18",
      start: "18:00",
      end: "21:00",
      type: "competition",
      title: "Putnam practice: mock exam",
      description: "A timed three-hour session in the style of one half of the Putnam.",
    },
    {
      date: "2026-12-02",
      start: "18:30",
      end: "21:00",
      type: "social",
      title: "End-of-semester party",
      description: "Celebrate the end of the semester with the club.",
    },
  ],
};
