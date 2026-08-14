/* ============================================================================
   HARU PROGRESS DASHBOARD - CONTENT FILE
   ----------------------------------------------------------------------------
   Everything Kim and Lea read lives in this one file. index.html renders it.
   To update the dashboard: edit values below, commit, push. Live in ~60 seconds.
   Never edit index.html for a content change.

   FIELD GUIDE
   updated    Human phrase for when this was last touched. No timestamps.
              e.g. "Friday evening, August 14"
   rightNow   One sentence. What is happening at this moment.
   next       One sentence. What happens immediately after.

   signs[]    One card per sign. Order shown = order here.
     id       internal only, never displayed
     name     client language, not trade language
     where    one short line placing it on the building
     thumb    path relative to this folder
     steps[]  {label, done}. Flip done:false to done:true as work completes.
              Step labels may differ per sign (the inside sign does).
     status   one sentence in Spencer's voice about where this sign stands

   needs[]    Things Spencer is waiting on.
     owner    "Kim" or "Lea" - always assign to a person
     state    "received" or "needed"
     note     received items keep a thank-you; needed items say why it matters
              RULE: received items STAY on the list, checked. Do not delete them.
              Seeing past asks get answered is what makes the next ask easy.

   photos[]   Newest FIRST. photos[0] renders large, the rest as thumbnails.
              RULE: this array is never empty. It ships seeded with the approved
              mockup so there is never a blank state before painting starts.

   materials[] Expandable craft cards. This section GROWS over the job.
              Add a card whenever a material or method decision is worth showing.

   decisions[] One line each. Settled things that stay settled.
   payment    One quiet sentence. Never amounts, never a table.
   ========================================================================== */

window.HARU = {

  updated: "Friday evening, August 14",

  rightNow: "Your logo files are in and the paint color is confirmed. I am printing your letters at full size.",
  next: "Punching the patterns, then the design goes up on the wall on a quiet night.",

  signs: [
    {
      id: "haru-sign",
      name: "The Haru sign",
      where: "Front wall, West Cary Street",
      thumb: "../img/progress/sign-haru.jpg",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "White letters and the orange triangle on the green panel, with the tagline above the name."
    },
    {
      id: "address-3030",
      name: "The 3030",
      where: "Above your front door",
      thumb: "../img/progress/sign-3030.jpg",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "In the darker green you picked. If your real font arrives in time, I will set it in that instead."
    },
    {
      id: "characters",
      name: "Haru in Japanese and Korean",
      where: "By the front window",
      thumb: "../img/progress/sign-characters.jpg",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "White, painted straight onto the green wall, exactly the letterforms you approved."
    },
    {
      id: "inside-sign",
      name: "The sign inside",
      where: "Behind the register",
      thumb: "../img/progress/sign-inside.jpg",
      steps: [
        { label: "Design approved", done: true },
        { label: "Wall measured", done: false },
        { label: "Panel painted", done: false },
        { label: "Logo painted", done: false }
      ],
      status: "Your white logo on a green panel, the way Lea asked for it. I can do this before you open if I can get inside."
    }
  ],

  needs: [
    {
      item: "The logo files",
      owner: "Lea",
      state: "received",
      note: "Got the SVG files. That is what lets me print your letters at full size without them going blurry. Thank you Lea."
    },
    {
      item: "The green paint color",
      owner: "Kim",
      state: "received",
      note: "SW 6717 Lime Rickey. Now the green inside will match the green outside exactly. Thank you Kim."
    },
    {
      item: "The font name",
      owner: "Lea",
      state: "needed",
      note: "I need this for the lettering on the inside sign. If it reaches me in time, I will also set the 3030 in your real font. Right now I am using a close match."
    }
  ],

  photos: [
    {
      src: "../img/final-front-2026-08-14.jpg",
      date: "August 14",
      caption: "The approved picture. This is what goes on the wall."
    }
  ],

  materials: [
    {
      title: "The paint on your building",
      body: [
        "Sherwin-Williams Emerald Urethane Trim Enamel. It is the toughest exterior enamel they make, and it holds a clean edge, which matters a lot when a letter is only a few inches wide.",
        "Two different finishes, on purpose. The green goes on flat. The white letters go on gloss.",
        "Flat green kills glare. Walk past your store from any angle, in any sun, and the green stays green instead of turning into a sheet of white reflection. Gloss white does the opposite, and that is exactly the point. White does not glare, it glows. On a bright day your name will look lit from the inside.",
        "There is a bonus in it. Flat green sitting next to gloss white reads a little darker than it really is, so your letters pop harder without me changing your brand color at all."
      ]
    },
    {
      title: "Your green, written down",
      body: [
        "SW 6717 Lime Rickey. That is the exact green already on your building, and it is now in my file, on the paint order, and in this document.",
        "It matters because the sign inside behind the register has to match the outside. Not close. The same can."
      ]
    },
    {
      title: "How the letters get on the wall",
      body: [
        "Nothing is drawn freehand. I print every letter at full size on paper, then punch thousands of tiny holes along every line of every letter.",
        "That paper gets taped to your wall and patted with a bag of chalk dust. The dust goes through the holes and leaves a dotted outline of your logo on the brick, exactly the size it will be painted. Then I paint the letters over the dots and the chalk brushes away.",
        "It is called pouncing. Sign painters have done it this way for a couple hundred years, and it is the reason hand-painted letters look right instead of almost right.",
        "The transfer happens around 2:30 in the morning, when Cary Street is quiet and the sidewalk is clear."
      ]
    },
    {
      title: "Paint, not vinyl",
      body: [
        "Vinyl is a sticker. It lifts at the edges, traps dirt underneath, and goes chalky after a few summers. Then somebody has to scrape it off.",
        "Paint bonds to the surface and becomes part of the wall. Richmond still has hand-painted signs from a hundred years ago that you can read from the street today."
      ]
    }
  ],

  decisions: [
    "The tagline goes on the logo, above the name.",
    "Nothing gets painted on the corner.",
    "The 3030 is painted in the darker green.",
    "The green panel sits to the side, not centered.",
    "The triangle stays orange, above the name."
  ],

  payment: "Deposit received. The balance is due only at the walkthrough, after you have seen every letter. Nothing else will ever be charged.",

  warranty: "If anything I painted lifts, peels, or fades inside the first year, I come back and fix it. That one is on me.",

  contact: {
    sms: "+12054518061",
    tel: "+12054518061",
    display: "(205) 451-8061",
    email: "hello@untitledmixedmedia.com"
  },

  /* Haru, 3030 W Cary St, Richmond VA 23221 */
  location: { lat: 37.5537, lon: -77.4839, deadline: "2026-08-20" }
};
