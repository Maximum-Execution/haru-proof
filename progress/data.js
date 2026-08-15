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
      status: "This empty wall is about to carry your name. White letters, the orange triangle, and your tagline on the green panel.",
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
      status: "Painted above the door, in the darker green you picked. If your font arrives in time, I will paint the numbers in your real font.",
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
      status: "The green panel next to the window is the spot. White letters, the exact forms you approved.",
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
      status: "After the outside is done and you are moved in, we walk the store together and pick the right sign for each spot. Painted, vinyl, or printed. The goal is simple: customers find what they came for.",
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

  currentPhoto: {
    src: "../img/progress/front-2026-08-14.jpg",
    date: "August 14",
    caption: "Your storefront right now, before the first letter goes up."
  },

  materials: [
    {
      title: "The Paint Going On Your Building",
      body: [
        "Sherwin-Williams Emerald Urethane Trim Enamel. It is the toughest exterior enamel they make, and it holds a crisp edge. That matters when a letter is only a few inches wide.",
        "Two finishes, for a reason. The green goes on flat. The white letters go on gloss.",
        "Flat green kills glare. Walk past your store at any angle, at any hour, and the green stays green instead of turning into reflection. White is the opposite. White cannot really glare, it glows. On a bright afternoon your name will look lit from inside.",
        "One more benefit: flat green next to gloss white looks a little darker than it is. Your letters stand out more, and your brand color does not change at all."
      ]
    },
    {
      title: "Your Green, Written Down",
      body: [
        "SW 6717 Lime Rickey. The exact green already on your building. It is in my file and on the paint order, so none of us ever has to guess.",
        "Anything we make for the inside gets matched to the same can, not to a memory of it."
      ]
    },
    {
      title: "How Letters Get On A Wall",
      body: [
        "Nothing goes up freehand. I print every letter at full size on paper, then punch thousands of tiny holes along every edge.",
        "The paper gets taped to your wall and patted with a bag of chalk dust. The dust falls through the holes and leaves a dotted outline of your logo, exactly where it belongs and exactly the right size. I paint over the dots, and the chalk brushes away.",
        "Sign painters call this pouncing. It is a couple hundred years old, and it is the difference between letters that look right and letters that look almost right.",
        "The transfer happens late at night, when Cary Street is empty and nobody has to walk around a ladder."
      ]
    },
    {
      title: "Why Paint And Not Vinyl",
      body: [
        "Vinyl is a sticker. It lifts at the edges, collects dirt underneath, and turns chalky after a few summers. Then someone has to scrape it off.",
        "Paint becomes part of the wall. Richmond still has hand-painted signs from a hundred years ago that read fine from across the street. Yours is built the same way."
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
