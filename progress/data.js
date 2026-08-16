/* ============================================================================
   HARU PROGRESS DASHBOARD - CONTENT FILE
   ----------------------------------------------------------------------------
   Everything Kim and Lea read lives here. index.html renders it.
   To update: edit below, commit, push. Live in about a minute.
   Never edit index.html for a content change, and never rebuild CSS for one.

   WRITING RULES: short sentences, plain words, no idioms. Kim and Lea read
   English as a second language. Clear beats clever. Never name exact times of
   night or day counts we might have to walk back. "Late at night" always holds.

   FIELD GUIDE
   updated        Human phrase. No timestamps.
   rightNow/next  One sentence each.

   signs[]        Drives BOTH the at-a-glance dropdown and the card below it.
                  ORDER HERE DOES NOT SET DISPLAY ORDER. The page sorts them
                  most-finished first, down to not-started, every time it
                  loads. Tick a step off below and the sign climbs on its own.
                  Order here only breaks ties between signs at equal percent,
                  so keep related signs near each other and forget about it.
     name         client language
     short        2 to 5 words. The current state, read at a glance in the
                  dropdown row without opening anything. e.g. "Ready to print"
     where        one short line placing it
     thumb        photo of that spot, relative to this folder
     thumbLabel   chip on the photo: "The wall today", "Patterns up", "Painted"
     steps[]      {label, done} - the dropdown panel lists these and nothing else
     status       one or two short sentences, card only
     facts[]      {label, value} - 2 or 3 concrete details, card only

   needs[]        THREE states:
                  "needed"   big, red mark. A real blocker. Their move.
                  "optional" quiet row, no red. A nice-to-have, never a nag.
                  "received" small checked line under "Already in hand".
                  NEVER delete received items. Answered asks make the next
                  ask easy. If nothing is "needed", the section says so
                  outright, which is a good thing for a client to read.

   photos[]       The storefront over time, OLDEST FIRST - a timeline reads
                  left to right. The strip shows them in that order; the HERO
                  opens on the LAST one, so they see today first and can walk
                  backwards. Add a new day by pasting a block at the BOTTOM.
                  NEVER delete an older photo - the before/after is the whole
                  point, and the empty-wall shot only gets more valuable.
                    src     1500x1000 hero (3:2)
                    thumb   300x200 strip thumbnail (3:2)
                    date    short human label, e.g. "August 16"
                    caption client voice, one short line, shown under the hero
                    alt     DESCRIBES THE FRAME for screen readers. Must NOT
                            repeat the caption or it gets announced twice.
                  Drop raw shots in 04-working/PROGRESSION; only web-sized
                  derivatives go in web/img/progress/.
                  TIP: shoot from the same spot every time and the before/after
                  lines up by itself.

   materials[]    Craft cards. Add one when a decision is worth showing.
   decisions[]    One line each.
   payment        One quiet sentence. Never amounts.
   ========================================================================== */

window.HARU = {

  updated: "Sunday, August 16",

  rightNow: "Your Japanese and Korean letters are painted and finished.",
  next: "The green panel is up and curing. Tomorrow I paint the 3030 above your door.",

  signs: [
    {
      name: "The Haru sign",
      short: "Panel painted, curing",
      where: "Front wall, West Cary Street",
      thumb: "../img/progress/now-haru.jpg",
      thumbLabel: "The wall today",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "The green panel is painted and curing. Your name goes on top of it.",
      facts: [
        { label: "Size",    value: "12 feet wide, 6 feet tall. Your name 32 inches" },
        { label: "Finish",  value: "Flat green, gloss white" },
        { label: "Reads from", value: "320 feet, well past the corner" }
      ]
    },
    {
      name: "The 3030",
      short: "Painting Monday",
      where: "Above your front door",
      thumb: "../img/progress/now-3030.jpg",
      thumbLabel: "The wall today",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: true },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "In the darker green you picked, drawn to match your logo.",
      facts: [
        { label: "Size",    value: "33.5 inches wide, 9.5 inches tall" },
        { label: "Numbers", value: "Drawn to match your logo" },
        { label: "Reads from", value: "95 feet, the whole block front" }
      ]
    },
    {
      name: "Haru in Japanese and Korean",
      short: "Finished",
      where: "By the front window",
      thumb: "../img/progress/now-characters.jpg",
      thumbLabel: "Painted",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: true },
        { label: "On the wall", done: true },
        { label: "Painted", done: true }
      ],
      status: "Done. White on your green, the exact forms you approved.",
      facts: [
        { label: "Size",    value: "Each character 12 to 13 inches tall" },
        { label: "Finish",  value: "Gloss white on your green" },
        { label: "Reads from", value: "120 feet, including the crosswalk" }
      ]
    },
    {
      name: "Signs inside the store",
      short: "Waiting on the outside",
      where: "Planned after the outside is done",
      thumb: "../img/progress/inside-placeholder.jpg",
      thumbLabel: "Planned together",
      steps: [
        { label: "Outside finished", done: false },
        { label: "Walk the store", done: false },
        { label: "Pick each sign", done: false },
        { label: "Made and installed", done: false }
      ],
      status: "Once you are moved in, we walk the store and pick the right sign for each spot. So customers find what they came for.",
      facts: [
        { label: "Choices", value: "Hand-painted, vinyl, or printed" },
        { label: "Green",   value: "Matched to SW 6717, the same can as outside" },
        { label: "Timing",  value: "After you are moved in and can see the space" }
      ]
    }
  ],

  needs: [
    {
      item: "Your font",
      owner: "Lea",
      state: "optional",
      note: "Only if you want me to design the inside signs. If your designer is doing them, I do not need anything."
    },
    {
      item: "The logo files",
      owner: "Lea",
      state: "received",
      note: "SVG files in hand. Thank you, Lea."
    },
    {
      item: "The green paint color",
      owner: "Kim",
      state: "received",
      note: "SW 6717 Lime Rickey, matched. Thank you, Kim."
    }
  ],

  /* The record of the job, newest FIRST. The first `logShown` entries render,
     the rest hide behind "Show all". Dates are the real ones from the project
     file in Notion, so this doubles as proof of how long this has been going.
     Client-facing rules apply: no pricing history, no negotiation, nothing
     about who was or was not on an email thread. Progress only. */
  logShown: 4,
  log: [
    { date: "August 16", text: "Japanese and Korean letters painted and finished. Your first sign is done." },
    { date: "August 16", text: "Green panel painted on the front wall. It cures for a few days before your name goes on." },
    { date: "August 15", text: "Patterns punched for the 3030 and the Japanese and Korean letters." },
    { date: "August 15", text: "All paint and materials bought and on the truck." },
    { date: "August 14", text: "Deposit received. Thank you, Kim." },
    { date: "August 14", text: "Vector logo files and paint color both in hand. Nothing is blocking the start." },
    { date: "August 14", text: "Front wall approved. The tagline goes on the logo." },
    { date: "August 13", text: "Final picture sent to you both." },
    { date: "August 13", text: "Corner set aside so the front wall could move." },
    { date: "August 11", text: "Corner lettering reviewed line by line. The J redrawn by hand from Kim's own sketch." },
    { date: "August 10", text: "The 3030 settled on the darker green, after testing four colors on the wall." },
    { date: "August 10", text: "You picked your front sign, corner, and window lettering from fourteen options." },
    { date: "August 9",  text: "You approved the Japanese and Korean lettering." },
    { date: "August 7",  text: "Sign package agreed. One price, opening day on the 20th." },
    { date: "August 7",  text: "Green confirmed. Keeping the color already on the building." },
    { date: "August 1",  text: "Walked the building with Kim and marked where every sign goes." },
    { date: "July 30",   text: "Site visit to check the walls before scheduling anything." },
    { date: "July 16",   text: "Back on, focused on the signs." },
    { date: "May 7",     text: "First full estimate sent." },
    { date: "May 6",     text: "Site photos reviewed and the building measured." },
    { date: "May 5",     text: "Brand discovery session with Kim. The first real conversation about Haru." },
    { date: "April 29",  text: "Haru project opened." }
  ],

  photos: [
    {
      src:   "../img/progress/front-2026-05-06.jpg",
      thumb: "../img/progress/thumb-2026-05-06.jpg",
      date: "May 6",
      caption: "The first day I saw your building.",
      alt: "The same corner storefront before the renovation. The upper wall is mustard yellow, the lower storefront is white with a yellow door, and the window still carries the previous shop's lettering."
    },
    {
      src:   "../img/progress/front-2026-08-14.jpg",
      thumb: "../img/progress/thumb-2026-08-14.jpg",
      date: "August 14",
      caption: "Your green is on. The walls are ready for me.",
      alt: "The storefront after your painters finished. The upper wall is plain white, the lower wall is green, and no signs are painted yet."
    },
    {
      src:   "../img/progress/front-2026-08-16.jpg",
      thumb: "../img/progress/thumb-2026-08-16.jpg",
      date: "August 16",
      caption: "Your Japanese and Korean letters are up, and the green panel is painted.",
      alt: "The same storefront with white Japanese and Korean characters painted on the green wall beside the front window, and a large green rectangle painted on the upper white wall where the main sign will go."
    }
  ],

  /* Titles are the benefit, so a scanner knows what is inside before opening.
     Bodies stay under about 60 words. These clients do not read long. */
  materials: [
    {
      title: "Readable in every light",
      body: [
        "People see your sign from across Cary Street, from the sidewalk, and from passing cars. And the sun moves all day.",
        "If it were all glossy, sun would flare off the whole thing at once and your name would vanish into the shine. If it were all flat, the only thing separating white from green is the color, and that difference is weaker than it looks.",
        "So the green goes flat and the letters go glossy. The green never glares. The white brightens when light hits it. They never behave the same way, so your name stays separate from the background in any light.",
        "Most shops use one finish for everything. Doing it right costs nothing but knowing."
      ]
    },
    {
      title: "Sized to read from the street",
      body: [
        "The rule is one inch of letter for every ten feet you want to be read from.",
        "I measured your corner. The far sidewalk is 56 feet. The stoplight is 150 feet.",
        "Your name is 32 inches tall. That reads from 320 feet, well past the corner.",
        "The small line above it is 3.5 inches. It only has to reach the sidewalk, where someone is already at your door."
      ]
    },
    {
      title: "Your green, on file",
      body: [
        "SW 6717 Lime Rickey. The exact green already on your building.",
        "It is on the paint order, so anything we add inside matches the same can. Not close. The same."
      ]
    },
    {
      title: "Nothing is drawn freehand",
      body: [
        "I print every letter full size and punch tiny holes along the edges. Taped to your wall and patted with chalk dust, it leaves a perfect dotted outline.",
        "I paint the dots, then brush the chalk away.",
        "It is called pouncing. It is why letters land right instead of almost right."
      ]
    },
    {
      title: "No ladder in your doorway",
      body: [
        "You are moving a store in. The messy part happens late at night, when Cary Street is empty.",
        "Your windows, your paint, and the sidewalk get covered before I start. It all leaves with me.",
        "I carry general liability insurance. The certificate comes with your invoice."
      ]
    }
  ],

  decisions: [
    "The tagline lives on the logo, above the name.",
    "Nothing gets painted on the corner.",
    "The 3030 goes in the darker green.",
    "The green panel sits off to the side, not centered.",
    "The triangle stays orange, above the name.",
    "Inside signs get chosen together after the outside is finished and you are moved in.",
    "Nothing gets painted on a wall until you have seen the picture and said yes."
  ],

  /* This must always match Estimate #354 and the invoice. If they ever
     disagree, the paperwork wins, and the footer says so. */
  payment: "Deposit received, and that is it for now. When everything is finished, outside and in, we walk it all together and the rest is due. We pick the inside signs within 30 days of the outside being done. Nothing gets added along the way.",

  warranty: "If anything I painted lifts, peels, or fades in the first year, I come back and fix it free. One text is all it takes.",

  contact: {
    sms: "+12054518061",
    tel: "+12054518061",
    display: "(205) 451-8061",
    email: "hello@untitledmixedmedia.com"
  },

  /* Haru, 3030 W Cary St, Richmond VA 23221 */
  location: { lat: 37.5537, lon: -77.4839, deadline: "2026-08-20" }
};
