/* ============================================================================
   HARU PROGRESS DASHBOARD - CONTENT FILE
   ----------------------------------------------------------------------------
   Everything Kim and Lea read lives in this one file. index.html renders it.
   To update the dashboard: edit values below, commit, push. Live in ~60 seconds.
   Never edit index.html for a content change.

   FIELD GUIDE
   updated      Human phrase for when this was last touched. No timestamps.
   rightNow     One sentence. What is happening at this moment.
   next         One sentence. What happens right after.

   signs[]      One card per sign. Order shown = order here.
     name       client language, never trade language
     where      one short line placing it
     thumb      OPTIONAL photo, path relative to this folder. As the job moves,
                swap each thumb for the newest photo of that actual spot.
     thumbLabel OPTIONAL chip drawn on the photo, e.g. "The wall today".
                Change it when the photo changes ("Patterns up", "Painted").
     steps[]    {label, done}. Flip done:true as work completes.
     status     one sentence in Spencer's voice about where this sign stands

   needs[]      Split by state:
     state      "needed" = shown big with a red mark, this is the client's move
                "received" = collapses into a small checked line under
                "Already in hand". NEVER delete received items; seeing old asks
                answered is what makes the next ask feel easy.
     owner      "Kim" or "Lea", always a person

   photos[]     Newest FIRST. photos[0] renders large. Never empty; it ships
                seeded with the approved mockup.

   materials[]  Craft cards. Add one whenever a decision is worth showing off.
   decisions[]  One line each. Settled things that stay settled.
   payment      One quiet sentence. Never amounts, never a table.
   ========================================================================== */

window.HARU = {

  updated: "Friday night, August 14",

  rightNow: "Your files are in, your green is matched, and I'm printing your letters at full size.",
  next: "Patterns get punched, then the design goes up on the wall on the first dry night.",

  signs: [
    {
      name: "The Haru sign",
      where: "Front wall, West Cary Street",
      thumb: "../img/progress/now-haru.jpg",
      thumbLabel: "The wall today",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "This blank wall is about to carry your name. White letters, the orange triangle, and your tagline on the green panel."
    },
    {
      name: "The 3030",
      where: "Above your front door",
      thumb: "../img/progress/now-3030.jpg",
      thumbLabel: "The wall today",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "Goes right above the door, in the darker green you picked. If your font shows up in time, I'll cut it in the real thing."
    },
    {
      name: "Haru in Japanese and Korean",
      where: "By the front window",
      thumb: "../img/progress/now-characters.jpg",
      thumbLabel: "The wall today",
      steps: [
        { label: "Design approved", done: true },
        { label: "Patterns made", done: false },
        { label: "On the wall", done: false },
        { label: "Painted", done: false }
      ],
      status: "That green panel next to the window is the spot. White letters, the exact forms you approved."
    },
    {
      name: "Signs inside the store",
      where: "Planned after the outside is done",
      steps: [
        { label: "Outside finished", done: false },
        { label: "Walk the store", done: false },
        { label: "Pick each sign", done: false },
        { label: "Made and installed", done: false }
      ],
      status: "Once you're moved in, we walk the store together and figure out what each spot needs. Painted, vinyl, printed, whatever does the job best. The point is simple: people walk in and find what they came for."
    }
  ],

  needs: [
    {
      item: "The font name",
      owner: "Lea",
      state: "needed",
      note: "So the 3030 can be in your real font instead of my close match, and so any lettering inside matches too. The name alone works. The files are even better."
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

  photos: [
    {
      src: "../img/final-front-2026-08-14.jpg",
      date: "August 14",
      caption: "The approved picture. This is what the wall becomes."
    }
  ],

  materials: [
    {
      title: "The paint going on your building",
      body: [
        "Sherwin-Williams Emerald Urethane Trim Enamel. It's the toughest exterior enamel they make, and it holds a crisp edge, which matters when a letter is only a few inches wide.",
        "Two finishes, and there's a reason. The green goes on flat. The white letters go on gloss.",
        "Flat green kills glare. Walk past your store at any angle, any time of day, and the green stays green instead of turning into a sheet of reflection. Gloss white flips that around. White can't really glare, it glows. On a bright afternoon your name will look lit from inside.",
        "And there's a free bonus: flat green sitting against gloss white reads a touch darker than it is, so your letters pop harder without changing your brand color at all."
      ]
    },
    {
      title: "Your green, on record",
      body: [
        "SW 6717 Lime Rickey. The exact green already on your building. It's in my file, on the paint order, and written here so none of us ever has to guess.",
        "Whatever we end up putting inside gets matched to the same can, not to a memory of it."
      ]
    },
    {
      title: "How letters get on a wall",
      body: [
        "Nothing goes up freehand. I print every letter at full size on paper and punch thousands of tiny holes along every edge.",
        "The paper gets taped to your wall and patted with a bag of chalk dust. The dust falls through the holes and leaves a dotted outline of your logo, exactly where and exactly how big. I paint over the dots, and the chalk brushes away.",
        "Sign painters call it pouncing, and it's a couple hundred years old. It's the difference between letters that look right and letters that look almost right.",
        "The transfer happens around 2:30 in the morning, when Cary Street is empty and nobody has to duck under a ladder."
      ]
    },
    {
      title: "Why paint and not vinyl",
      body: [
        "Vinyl is a sticker. It lifts at the edges, collects grime underneath, and goes chalky after a few summers. Then someone has to scrape it off.",
        "Paint soaks in and becomes part of the wall. Richmond still has hand-painted signs from a hundred years ago that read fine from across the street. Yours is built the same way."
      ]
    }
  ],

  decisions: [
    "The tagline lives on the logo, above the name.",
    "Nothing gets painted on the corner.",
    "The 3030 goes in the darker green.",
    "The green panel sits off to the side, not centered.",
    "The triangle stays orange, above the name.",
    "Inside signs get chosen together after the outside is finished and you're moved in."
  ],

  payment: "Deposit received, and that's it for now. When everything is finished, outside and in, we walk it all together and the rest is due. Nothing gets added along the way.",

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
