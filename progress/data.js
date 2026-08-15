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
     name         client language
     short        2 to 5 words. The current state, read at a glance in the
                  dropdown row without opening anything. e.g. "Ready to print"
     where        one short line placing it
     thumb        photo of that spot, relative to this folder
     thumbLabel   chip on the photo: "The wall today", "Patterns up", "Painted"
     steps[]      {label, done} - the dropdown panel lists these and nothing else
     status       one or two short sentences, card only
     facts[]      {label, value} - 2 or 3 concrete details, card only

   needs[]        state "needed" renders big with a red mark (client's move);
                  "received" collapses to a small checked line. NEVER delete
                  received items. Answered asks make the next ask easy.

   currentPhoto   THE photo of the storefront right now. One picture, replaced
                  each time a newer one exists. Drop new shots in
                  04-working/PROGRESSION, then point this at the web copy.

   materials[]    Craft cards. Add one when a decision is worth showing.
   decisions[]    One line each.
   payment        One quiet sentence. Never amounts.
   ========================================================================== */

window.HARU = {

  updated: "Friday night, August 14",

  rightNow: "Your files are in and your green is matched. I am printing your letters at full size.",
  next: "I punch the patterns. Then the design goes on the wall, late on a dry night.",

  signs: [
    {
      name: "The Haru sign",
      short: "Printing the letters",
      where: "Front wall, West Cary Street",
      thumb: "../img/progress/now-haru.jpg",
      thumbLabel: "The wall today",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "This empty wall is about to carry your name.",
      facts: [
        { label: "Colors",  value: "White letters and orange triangle on your green" },
        { label: "Finish",  value: "Flat green, gloss white" },
        { label: "Reads from", value: "Across West Cary Street" }
      ]
    },
    {
      name: "The 3030",
      short: "Printing the letters",
      where: "Above your front door",
      thumb: "../img/progress/now-3030.jpg",
      thumbLabel: "The wall today",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "In the darker green you picked. Your real font if it arrives in time.",
      facts: [
        { label: "Color",   value: "The darker green you approved" },
        { label: "Font",    value: "A close match for now, your real font if it arrives" },
        { label: "Reads from", value: "The sidewalk, at your door" }
      ]
    },
    {
      name: "Haru in Japanese and Korean",
      short: "Printing the letters",
      where: "By the front window",
      thumb: "../img/progress/now-characters.jpg",
      thumbLabel: "The wall today",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "White letters on the green panel, the exact forms you approved.",
      facts: [
        { label: "Colors",  value: "White, straight onto your green wall" },
        { label: "Finish",  value: "Gloss white" },
        { label: "Reads from", value: "The sidewalk and the crosswalk" }
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
      item: "The font name",
      owner: "Lea",
      state: "needed",
      note: "I need it for the 3030, and for any lettering inside later. The name alone works. The files are even better."
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
    { date: "August 1",  text: "Walked the building with Kim and Lea and marked where every sign goes." },
    { date: "July 30",   text: "Site visit to check the walls before scheduling anything." },
    { date: "July 16",   text: "Back on, focused on the signs." },
    { date: "May 7",     text: "First full estimate sent." },
    { date: "May 6",     text: "Site photos reviewed and the building measured." },
    { date: "May 5",     text: "Brand discovery session with Kim. The first real conversation about Haru." },
    { date: "April 29",  text: "Haru project opened." }
  ],

  currentPhoto: {
    src: "../img/progress/front-2026-08-14.jpg",
    date: "August 14",
    caption: "Your storefront right now, before the first letter goes up."
  },

  /* Titles are the benefit, so a scanner knows what is inside before opening.
     Bodies stay under about 60 words. These clients do not read long. */
  materials: [
    {
      title: "Readable from every angle",
      body: [
        "Nobody reads your sign straight on. They see it from the side, walking past.",
        "So the green goes flat and the letters go glossy. The two never catch light the same way, and your name stays sharp from anywhere on the sidewalk. If it were all shiny, sun would flare off the whole thing at once and your name would vanish.",
        "Most shops use one finish for everything. Doing it right costs nothing but knowing."
      ]
    },
    {
      title: "Sized to read from the street",
      body: [
        "The rule is one inch of letter for every ten feet you want to be read from.",
        "I measured your corner. The far sidewalk is 56 feet. The stoplight is 150 feet.",
        "Your name is sized for that. The small line above it only has to reach the sidewalk, where someone is already at your door."
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
    "Inside signs get chosen together after the outside is finished and you are moved in."
  ],

  payment: "Deposit received, and that is it for now. When everything is finished, outside and in, we walk it all together and the rest is due. Nothing gets added along the way.",

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
