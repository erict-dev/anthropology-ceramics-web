// Feature flags for toggling site sections.
// To remove a flag: search for its name across the codebase, remove all conditionals, then delete it here.

export const SHOW_OPEN_STUDIO = false;

// Kids pottery summer camp. When false, /classes/pottery-summer-camp-irvine
// returns a 404. To relaunch next year: flip to true, update the dates,
// prices, and Acuity booking links on the camp page, and restore the links to
// it (homepage section, Navbar, Footer; the homepage section was removed in
// commit 963977b).
export const SHOW_SUMMER_CAMP = false;
