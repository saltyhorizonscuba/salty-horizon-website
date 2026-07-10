/* ============================================================
   SALTY HORIZON — interactions, i18n (EN/FR/ES), booking
   ============================================================ */
const WA_PHONE = '50687759641'; // WhatsApp number, international format

/* ---------------- Translations ---------------- */
const I18N = {
  en:{
    'nav.experiences':'Experiences','nav.charters':'Private Charters','nav.courses':'PADI Courses','nav.faq':'FAQ','nav.about':'About',
    'nav.gallery':'Gallery','nav.reviews':'Reviews','nav.contact':'Contact','cta.book':'Book a dive','cta.bookCourse':'Book a course','cta.learnMore':'Learn more',

    'hero.eyebrow':'Tamarindo · Costa Rica',
    'hero.sub':'Exclusive Scuba Diving',
    'hero.tag':'A rhythm defined by you.',
    'hero.cta1':'Book your dive','hero.cta2':'Explore experiences','hero.scroll':'Scroll',
    'strip.private':'Fully private','strip.padi':'PADI instructors','strip.langs':'EN · FR · ES','strip.photos':'Photos included',

    'about.eyebrow':'Who we are',
    'about.title':'Diving done the right way',
    'about.lead':'We are Camille & Julien, two PADI instructors who turned a lifelong love of the ocean into a different kind of dive experience.',
    'about.p1':'Trilingual in English, French and Spanish, we welcome travelers from all over the world and adapt every session to your comfort, goals and pace. No rushed schedules, just small, fully private groups and our full attention.',
    'about.f1t':'Fully private','about.f1d':'Small groups, your pace, maximum safety and comfort.',
    'about.f2t':'PADI certified','about.f2d':'Two professional PADI instructors who live and breathe the ocean.',
    'about.f3t':'Memories included','about.f3d':'Unedited photos & videos with every session, free.',
    'about.cta':'Meet the team',
    'badge.b':'3rd','badge.s':'generation of dive pros',

    'exp.eyebrow':'What we offer',
    'exp.title':'Our experiences',
    'exp.lead':'From your very first breath underwater to advanced shark dives, privately guided, every time.',
    'exp.cta':'See all experiences & prices',
    'nav.catalinas':'Catalinas',
    'cat.eyebrow':'Where we dive','cat.title':'Las Catalinas & its ecosystem',
    'cat.lead':'A cluster of volcanic islands off Tamarindo, one of Costa Rica’s richest dive playgrounds.',
    'cat.p1':'Rising from the Pacific just north of Tamarindo, the Catalina Islands channel cool, nutrient-rich currents that feed an extraordinary concentration of marine life across more than twenty pinnacles and reefs.',
    'cat.p2':'From December to May, giant Pacific manta rays glide through the islands, joined year-round by spotted eagle rays, white-tip reef sharks, sea turtles, moray eels, octopus and huge schools of tropical fish. Warm, clear water and gentle profiles make it ideal for first dives and unforgettable for the experienced.',
    'cat.h1':'20+ dive sites','cat.h2':'Manta season · Dec–May','cat.h3':'Eagle rays, reef sharks & turtles','cat.h4':'All levels welcome',
    'price.from':'from','price.pp':'per person','price.request':'on request','price.contact':'Contact us',

    'card.intro.t':'Intro to Scuba (Pool)','card.intro.d':'Experience the sensations of scuba diving during a pool introduction, ideal for a safe first approach. With an instructor by your side, you’ll learn to use the equipment, breathe underwater and master the basics of diving in a calm, secure environment. A fun and reassuring experience, perfect before heading out to sea.',
    'card.discover.t':'Discover Scuba Diving','card.discover.d':'Discover scuba diving with the Discover Scuba Diving program, a beginner-friendly introduction with no prior certification required. After a briefing with your instructor, enjoy two dives of about 45 minutes to 1 hour to explore the seabed and observe the richness of Costa Rica’s marine life: tropical fish, sea turtles, rays, moray eels and, depending on the season, the majestic manta rays. An unforgettable first experience, in complete safety.',
    'card.catalinas.t':'Fun Dive · Las Catalinas','card.catalinas.d':'Two private guided dives at the Las Catalinas Islands, one of Costa Rica’s most iconic dive destinations. Explore the volcanic rock formations and encounter incredible marine life including giant manta rays (seasonal), eagle rays, reef sharks, sea turtles, schools of tropical fish, and countless macro species. Perfect for certified divers looking for unforgettable underwater adventures.',
    'card.bat.t':'Fun Dive · Bat Islands','card.bat.d':'The Bat Islands (Islas Murciélagos), off Santa Rosa National Park in Guanacaste, offer one of Costa Rica’s most legendary dives. Accessible from May to November, they let experienced divers observe the impressive bull sharks in their natural habitat. An intense experience in the heart of exceptional marine life.',
    'card.snorkel.t':'Snorkeling','card.snorkel.d':'Discover the seabed of the Catalina Islands during two snorkeling sessions of 45 minutes to 1 hour, accompanied by a guide. Explore crystal-clear waters home to tropical fish, sea turtles, rays and, depending on the season, the majestic manta rays. An activity accessible to everyone, ideal for observing the richness of Costa Rica’s marine life.',
    'card.courses.t':'PADI Courses','card.courses.d':'Develop your skills and progress at your own pace with our PADI courses, from Open Water Diver to Rescue Diver. Whether you want to earn your first certification, gain more independence or deepen your knowledge, our instructors guide you throughout your training to make you a more confident, skilled and experienced diver.',
    'label.beginner':'Beginner','label.popular':'Most popular','label.advanced':'Advanced','label.season':'May–Nov','label.allLevels':'All levels','label.certified':'Certified','label.certification':'Certification',

    'padi.page.h1':'PADI Courses',
    'padi.page.intro':'Grow your diving skills at your own pace with our PADI certification courses, taught by professional instructors.',
    'padi.page.faqLink':'Common questions about PADI certification, answered',
    'course.schedule':'Schedule','course.requirements':'Requirements','course.bring':'What to Bring','course.important':'Important Information','course.startingAt':'Starting at','course.included':'Included',

    'course.ow.t':'Open Water Diver',
    'course.ow.lead':'Ready to become a certified diver? The PADI Open Water Diver course is your first full scuba certification, designed to teach you the essential skills, safety procedures, and confidence needed to dive independently with a buddy.',
    'course.ow.d':'This 3-day course includes theory, 1 pool session, and 4 open water dives. During the course, you will learn how to use scuba equipment, control your buoyancy, manage basic underwater situations, and explore the ocean safely under the guidance of a PADI instructor.',
    'course.ow.incl1':'E-learning','course.ow.incl2':'PADI certification fee','course.ow.incl3':'PADI instructor','course.ow.incl4':'Snacks & drinks','course.ow.incl5':'All equipment',
    'course.ow.schedIntro':'Before we meet, please complete your PADI e-learning.',
    'course.ow.day1':'Day 1 — Flexible hours / Approx. 4 hours','course.ow.day1a':'Theory knowledge review','course.ow.day1b':'Pool session and scuba skills practice',
    'course.ow.day2':'Day 2 — 6:45am to 12:00pm','course.ow.day2a':'Open Water Dives 1 & 2 at Las Catalinas','course.ow.day2b':'Approx. 40-minute boat ride',
    'course.ow.day3':'Day 3 — 6:45am to 12:00pm','course.ow.day3a':'Open Water Dives 3 & 4 at Las Catalinas',
    'course.ow.req1':'Minimum age: 10 years old','course.ow.req2':'Comfortable in the water','course.ow.req3':'Physically and medically fit to dive. Medical form must be completed before the course.','course.ow.medFormLink':'📄 Medical form',
    'course.ow.bring1':'Swimsuit','course.ow.bring2':'Hat','course.ow.bring3':'Reef-safe sunscreen','course.ow.bring4':'Sunglasses',
    'course.ow.note':'You must wait a minimum of 24 hours after your last dive before flying.',

    'course.aow.t':'Advanced Open Water Diver',
    'course.aow.lead':'Already certified as a PADI Open Water Diver or equivalent? The PADI Advanced Open Water Diver course is designed to sharpen your skills, build your confidence, and expand your depth limit to 30m / 100 ft.',
    'course.aow.d1':'The course includes a short theory section and 5 adventure dives.',
    'course.aow.d2':'You will complete two mandatory specialty dives: Deep Diving and Underwater Navigation.',
    'course.aow.d3':'You will also choose three elective specialty dives, such as Boat Diving, Search and Recovery, Drift Diving, Fish Identification, Peak Performance Buoyancy, or Night Diving.',
    'course.aow.schedNote':'Possibility to complete the course in 2 or 3 days.',
    'course.aow.contactOptions':'Contact us to know more about the different options.',
    'course.aow.req1':'Open Water certification','course.aow.req2':'Minimum 12 years old',
    'course.aow.incl1':'E-learning','course.aow.incl2':'PADI certification fee','course.aow.incl3':'Snacks & drinks','course.aow.incl4':'All equipment',
    'course.contactInfo':'Contact us for more information.',

    'stat.dives':'Dive sites','stat.langs':'Languages','stat.private':'Private dives','stat.rating':'Guest rating',

    'gallery.eyebrow':'In the water',
    'gallery.title':'Moments from the deep',
    'gallery.lead':'A glimpse of the reefs, rays and sharks waiting for you off Tamarindo. Tap any photo to enlarge.',

    'team.eyebrow':'Your instructors',
    'team.title':'Camille & Julien',
    'team.lead':'Two lives shaped by the ocean, now dedicated to sharing it with you, safely and authentically.',
    'camille.role':'PADI OWSI & MSDT',
    'camille.spec':'Specialties: AWARE Shark Conservation, Deep, Digital Underwater Photography, Dive Against Debris, Nitrox, Wreck, AWARE Coral Reef Conservation, PADI AWARE, Peak Performance Buoyancy, EFR',
    'camille.bio':'Raised between Costa Rica’s jungle and ocean, Camille has been diving since the age of 14. Passionate about sharks and marine conservation, she loves sharing the underwater world while inspiring others to protect it',
    'julien.role':'PADI OWSI',
    'julien.spec':'Specialties: AWARE Coral Reef Conservation Instructor, Dive Against Debris, Emergency Oxygen Provider Instructor, Nitrox, PADI AWARE, Peak Performance Buoyancy Instructor',
    'julien.bio':'Coming from a family of dive instructors in France and Guadeloupe, Julien has been immersed in the diving world from an early age. He took his first underwater breath at 13 and has been passionate about exploring and sharing the ocean ever since',

    'rev.eyebrow':'Guest stories',
    'rev.title':'Loved by our divers',
    'rev.cta':'Write a review on Google',
    'rev.q1':'Camille and Julien provided an exceptional diving experience, tailored to my preferences. Their expertise and professionalism made it truly memorable.',
    'rev.a1':'Luisa Martinez',
    'rev.q2':'The most relaxed, personal dive day I have ever had. Small group, no rush, and the photos afterwards were incredible.',
    'rev.a2':'Marco — Italy',
    'rev.q3':'Perfect for my first time. I felt safe the whole way and they speak French, which my family loved.',
    'rev.a3':'Amélie — France',
    'rev.q4':'Bull sharks at the Bat Islands with these two = unforgettable. True professionals who care about the ocean.',
    'rev.a4':'Daniel — USA',

    'book.eyebrow':'Reserve your spot',
    'book.title':'Book your experience',
    'book.lead':'Tell us what you would like to do and we will confirm everything personally on WhatsApp.',
    'book.fexp':'Experience','book.fexpPh':'Choose an experience…',
    'book.fdate':'Preferred date','book.fpeople':'People','book.fname':'Your name','book.fnamePh':'First & last name',
    'book.fmsg':'Anything else?','book.fmsgPh':'Level, questions, special requests…',
    'book.submit':'Send booking on WhatsApp','book.email':'Contact us by email',
    'book.perk1':'Free cancellation up to 7 days before','book.perk2':'Photos & videos included','book.perk3':'We reply within a few hours',
    'book.step1':'1 · Pick','book.step2':'2 · Send','book.step3':'3 · We confirm',
    'book.alert':'Please choose an experience first.',

    'faq.eyebrow':'Good to know','faq.title':'Frequently asked questions','faq.seeMore':'See the full Tamarindo diving FAQ',
    'faq.q1':'Do I need to be certified to try scuba diving in Tamarindo?',
    'faq.a1':'No certification is required for the Discover Scuba Diving experience. After a private briefing with a PADI instructor, you complete two guided dives, 45 minutes to 1 hour each, from age 10 and up.',
    'faq.q2':'How much does the PADI Open Water Diver course cost?',
    'faq.a2':'The Open Water Diver course starts at $540 and runs over 3 days, including e-learning, certification fees, all equipment, and snacks and drinks.',
    'faq.q3':'Can you see bull sharks at the Bat Islands?',
    'faq.a3':'Yes. The Bat Islands are accessible from May to November and are known for bull shark sightings. This dive is for certified Advanced Open Water divers only.',
    'faq.q4':'Are dives and courses offered in French and Spanish?',
    'faq.a4':'Yes. Camille and Julien are trilingual and teach and guide in English, French and Spanish.',
    'faq.q5':'Do I need a medical form to dive?',
    'faq.a5':'Yes, for the Open Water and Advanced Open Water courses you need to confirm you are medically fit to dive; a medical form is available to download and must be completed before the course.',

    'tfaq.crumb':'Scuba Diving FAQ',
    'tfaq.page.h1':'Scuba Diving in Tamarindo, Costa Rica: Frequently Asked Questions',
    'tfaq.intro':'Real questions about diving in Tamarindo and at the Catalina Islands, answered directly: marine life, manta ray and whale season, local diving conditions, and getting certified. Wildlife is wild — sightings mentioned below are commonly reported, never guaranteed.',
    'tfaq.h1':'Diving in Tamarindo and the Catalina Islands','tfaq.h1intro':'The Catalina Islands (Islas Catalinas) are the main dive destination for boats leaving Tamarindo — a chain of volcanic islets in the Gulf of Papagayo known for strong currents and rich marine life.',
    'tfaq.h2':'Marine Life Around Tamarindo','tfaq.h2intro':"Guanacaste's Pacific waters support a wide range of species, from resident reef life to migratory visitors passing through seasonally.",
    'tfaq.h3':'Manta Rays and Mobula Rays','tfaq.h3intro':"Manta and mobula rays are among the most sought-after sightings on Costa Rica's Pacific coast, and their movements are the subject of ongoing scientific research.",
    'tfaq.h4':'Whale Season in Guanacaste','tfaq.h4intro':"Costa Rica's position in the Pacific gives it an unusually long humpback whale season, drawing two separate migratory populations.",
    'tfaq.h5':'Pacific Ocean Diving Conditions','tfaq.h5intro':"Diving conditions off Guanacaste change noticeably between Costa Rica's two seasons, driven partly by a well-documented regional upwelling system.",
    'tfaq.h6':'Bat Islands and Bull Sharks','tfaq.h6intro':'The Bat Islands (Islas Murciélago) are a separate, more advanced dive site from the Catalina Islands, best known for bull shark encounters.',
    'tfaq.h7':'Scuba Diving for Beginners','tfaq.h7intro':'No experience or certification is needed to try scuba diving for the first time in Tamarindo.',
    'tfaq.h8':'PADI Certifications and Courses',
    'tfaq.h9':'Health and Safety','tfaq.h9intro':'Common health and safety questions from first-time and returning divers.',
    'tfaq.h10':'Planning Your Dive in Tamarindo','tfaq.h10intro':'Practical details for booking and preparing for a dive with Salty Horizon.',
    'tfaq.h11':'Snorkeling and Private Charters',
    'tfaq.sources':'Marine life, seasonal and biological information on this page references SINAC (Costa Rica\'s Sistema Nacional de Áreas de Conservación), NOAA Fisheries, the Manta Trust / MigraMar research network, and peer-reviewed research on the Gulf of Papagayo published in the Revista de Biología Tropical and related journals.',

    'tfaq.q1':'Where are the Catalina Islands and how do you get there?',
    'tfaq.a1':"The Catalina Islands are a chain of about twenty volcanic islets in the Gulf of Papagayo, off Costa Rica's Guanacaste coast. Dive boats reach them from Tamarindo in around 40 minutes.",
    'tfaq.q2':'Are the Catalina Islands a protected marine area?',
    'tfaq.a2':'Not formally. Unlike the Bat Islands (Islas Murciélago), which fall within the Marine Sector of the SINAC-managed Área de Conservación Guanacaste — a UNESCO World Heritage Site — the Catalina Islands do not currently carry that same protected-area designation. They are a naturally rich dive site, not a classified protected area.',
    'tfaq.q3':'How deep are the dives at the Catalina Islands?',
    'tfaq.a3':'Catalina Islands dive sites vary in depth and suit a range of experience levels, from supervised beginners to more advanced divers, without the depth and current demands of sites like the Bat Islands.',
    'tfaq.q4':'How long is the boat ride to the Catalina Islands?',
    'tfaq.a4':'About 40 minutes from Tamarindo, depending on sea conditions.',

    'tfaq.q5':'What marine life can you see diving in Tamarindo?',
    'tfaq.a5':"Divers in the Tamarindo area may encounter whitetip reef sharks, eagle rays, sea turtles, pufferfish, moray eels, and large schools of tropical fish, among other species typical of Guanacaste's Pacific reefs.",
    'tfaq.q6':'What marine life lives around the Catalina Islands specifically?',
    'tfaq.a6':'The Catalina Islands are known for a dense concentration of marine life, including whitetip reef sharks, eagle rays, devil rays, cownose rays, sea turtles, moray eels, pufferfish, octopus, seahorses, and large schools of jacks.',

    'tfaq.q7':'Can I see manta rays or sea turtles while diving in Tamarindo?',
    'tfaq.a7':'Divers may encounter manta rays and sea turtles in the Tamarindo area, particularly during the Discover Scuba Diving and Catalina Islands experiences. Manta ray sightings are most commonly reported from December to May, though as with all wildlife, encounters depend on season and natural conditions.',
    'tfaq.q8':'Can you see manta rays at the Catalina Islands?',
    'tfaq.a8':"The Catalina Islands are a commonly reported sighting location for giant oceanic manta rays (Mobula birostris), the world's largest ray, with a wingspan of up to 8 metres (26 feet) according to NOAA Fisheries. Sightings along Costa Rica's Pacific coast are most commonly reported from December to May. Their movements are tracked by the Mantas Costa Rica project, affiliated with the international Manta Trust / MigraMar research network, using acoustic telemetry and photo identification. As with any wild animal, a sighting is never guaranteed on a given dive.",

    'tfaq.q9':'Can you see whales near Tamarindo, and when is whale season?',
    'tfaq.a9':'According to NOAA Fisheries, two distinct humpback whale populations pass through Costa Rican waters to breed and calve: one from the North Pacific, present December to March, and one from the Southern Hemisphere, present July to mid-November — one of the longest migrations recorded for the species. Whale activity is possible in Guanacaste waters across much of the year, though sightings are opportunistic rather than a planned part of any dive.',
    'tfaq.q10':'Are whale or manta ray sightings guaranteed on a dive trip?',
    'tfaq.a10':'No. Whales, manta rays, and all other marine wildlife are wild animals, and encounters depend on natural conditions, animal movement, and season. Sightings are commonly reported at certain times of year, but no dive operator can guarantee them on any single trip.',

    'tfaq.q11':'When is the best time of year to dive in Tamarindo?',
    'tfaq.a11':'The dry season, roughly December to April, tends to bring calmer seas and is generally considered the more popular diving period. The green season, May to November, sees more rain but remains diveable, with fewer visitors on the water.',
    'tfaq.q12':'What is the water temperature like in Tamarindo, and does it change during the year?',
    'tfaq.a12':'Water temperature in the Gulf of Papagayo varies more than many visitors expect. Research on the Papagayo upwelling system shows that seasonal upwelling, driven by strong offshore winds during the dry season, brings cooler, nutrient-rich water to the surface roughly between December and April, with average sea temperatures dropping to around 23°C and occasional drops well below that during peak upwelling events. Waters are warmer, generally in the high 20s °C, from around May to November.',
    'tfaq.q13':'What causes the seasonal upwelling near Tamarindo, and how does it affect diving?',
    'tfaq.a13':"The Gulf of Papagayo is one of a small number of seasonal wind-driven upwelling zones in the region. During the Northern Hemisphere winter, strong winds funnel through gaps in the Central American mountain range and push surface water offshore, drawing cooler, nutrient-rich water up from depth. This process, documented by oceanographic research in the Gulf of Papagayo, is part of what supports the area's marine productivity, alongside cooler water temperatures during the dry season.",

    'tfaq.q14':'Can you really see bull sharks diving in Costa Rica?',
    'tfaq.a14':'Yes. The Bat Islands (Islas Murciélago), part of the Marine Sector of SINAC\'s Área de Conservación Guanacaste, are one of the few places in the world with regular bull shark encounters. A study published in the Revista de Biología Tropical documented a high residency index for bull sharks at the San Pedrillo Islet dive site within the archipelago, confirming it as an important aggregation site for the species.',
    'tfaq.q15':'When is the best time to dive the Bat Islands?',
    'tfaq.a15':'Bat Islands trips generally run from May to November.',
    'tfaq.q16':'Do you need to be certified to dive with bull sharks?',
    'tfaq.a16':'Yes. Diving at the Bat Islands is reserved for certified Advanced Open Water divers, given the depth and current conditions at the site.',
    'tfaq.q17':'Are bull shark dives dangerous?',
    'tfaq.a17':"These dives require a confirmed level of certification because of the site's depth and currents, but no incident involving these sharks has been recorded at this site; encounters are unbaited and the animals are typically seen at a respectful distance.",

    'tfaq.q18':'Do I need experience to try scuba diving in Tamarindo?',
    'tfaq.a18':'No. The Discover Scuba Diving experience requires no prior certification or experience.',
    'tfaq.q19':'What is Discover Scuba Diving, and how does it work?',
    'tfaq.a19':'It starts with a private briefing with a PADI instructor, followed by two guided dives of roughly 45 minutes to 1 hour each.',
    'tfaq.q20':"What's the minimum age to try scuba diving?",
    'tfaq.a20':'10 years old, for both the Discover Scuba Diving experience and the Open Water Diver course.',
    'tfaq.q21':'Do I need to be a strong swimmer to dive?',
    'tfaq.a21':'No competitive swimming ability is required; being comfortable in the water is enough.',
    'tfaq.q22':'How deep do beginners go on a first dive?',
    'tfaq.a22':'Depth is kept within what feels comfortable for the diver, adjusted continuously by the instructor rather than following a fixed target.',

    'tfaq.q23':'How long does the PADI Open Water Diver course take?',
    'tfaq.a23':'3 days: theory and pool sessions followed by 4 open water dives at the Catalina Islands.',
    'tfaq.q24':'How much does the Open Water Diver course cost?',
    'tfaq.a24':'The course starts at $540.',
    'tfaq.q25':"What's included in the Open Water Diver course price?",
    'tfaq.a25':'E-learning, PADI certification fees, all equipment, and snacks and drinks.',
    'tfaq.q26':'What is the Advanced Open Water Diver course, and who is it for?',
    'tfaq.a26':"It's for divers already certified as Open Water Diver who want to build confidence and extend their depth limit to 30m/100ft, through 5 adventure dives.",
    'tfaq.q27':'How much does the Advanced Open Water course cost?',
    'tfaq.a27':'The course starts at $500 and can be completed in 2 or 3 days.',
    'tfaq.q28':"What's the difference between Open Water and Advanced Open Water?",
    'tfaq.a28':'Open Water Diver is the entry-level certification, with a maximum depth of 18m. Advanced Open Water builds on it with mandatory Deep and Navigation dives, plus elective specialty dives, extending the depth limit to 30m.',
    'tfaq.q29':'Can I complete the PADI e-learning before arriving in Costa Rica?',
    'tfaq.a29':"Yes, and it's recommended to save time once you arrive.",

    'tfaq.q30':'Is scuba diving safe?',
    'tfaq.a30':'Diving is a safe activity when practiced within standard training protocols, which is why a medical form and supervision by a certified PADI instructor are required for every course.',
    'tfaq.q31':'Do I need a medical form to dive?',
    'tfaq.a31':'Yes, for the Open Water and Advanced Open Water courses, completed before the course begins.',
    'tfaq.q32':'Can I dive with asthma?',
    'tfaq.a32':'In many cases yes, if it is well controlled, but medical clearance is required; this should be discussed with a doctor before your trip.',
    'tfaq.q33':'Can I dive if I wear glasses?',
    'tfaq.a33':"Not with glasses directly, since they don't fit under a mask, but contact lenses or a prescription dive mask both work well.",
    'tfaq.q34':"What if I can't equalize my ears?",
    'tfaq.a34':'You stop, ascend slightly, and try again gently rather than forcing it; instructors guide new divers through this step by step.',
    'tfaq.q35':'Will I get seasick on the boat?',
    'tfaq.a35':"It's possible in rougher conditions; guidance is given before departure and boat rides to local sites are short.",
    'tfaq.q36':'Is there a risk of dangerous sharks while diving in Costa Rica?',
    'tfaq.a36':'Shark-related incidents are extremely rare, and bull shark encounters at the Bat Islands take place without any feeding, at a respectful distance.',

    'tfaq.q37':'How do I book a dive with Salty Horizon?',
    'tfaq.a37a':'Through the','tfaq.a37link':'booking form','tfaq.a37b':'on this site, confirmed personally over WhatsApp.',
    'tfaq.h8intro1':'Salty Horizon teaches the PADI Open Water Diver and Advanced Open Water Diver certifications in Tamarindo — see the','tfaq.h8introLink':'full PADI Courses page','tfaq.h8intro2':'for schedules and requirements.',
    'tfaq.h11intro1':'For non-divers or a custom day at sea, see the full','tfaq.h11introLink':'Private Charters page',
    'tfaq.q38':'What is the cancellation policy?',
    'tfaq.a38':"Cancellations are handled on a sliding scale: 100% refund if the tour is cancelled due to weather or because the minimum of 3 people isn't reached, and 100% refund for cancellations made 7 or more days before the start time. Refunds drop to 50% for cancellations 3-6 days before, and to 0% within 48 hours, for a missed departure, or if a customer doesn't meet the stated requirements (medical condition, physical fitness, certification level).",
    'tfaq.q39':'Are dives private, or in large groups?',
    'tfaq.a39':'Always private or in very small groups, at your pace.',
    'tfaq.q40':'Do you speak English, French and Spanish?',
    'tfaq.a40':'Yes. Camille and Julien are trilingual and teach and guide in all three languages.',
    'tfaq.q41':'What should I bring on the day of my dive?',
    'tfaq.a41':'A swimsuit and towel; all scuba equipment is provided.',

    'tfaq.q42':'Do you offer snorkeling for non-divers?',
    'tfaq.a42':'Yes, private snorkeling sessions, two outings of 45 minutes to 1 hour, starting at $80.',
    'tfaq.q43':'Can I book a private boat charter?',
    'tfaq.a43':'Yes, a fully customized day at sea combining scuba, snorkeling, paddle boarding, e-foil and jet ski.',
    'tfaq.q44':"What's included in a private charter?",
    'tfaq.a44':'A flexible itinerary built around what you want to do on the water, organized around your group.',

    'contact.eyebrow':'Get in touch',
    'contact.title':'Let’s plan your dive',
    'contact.lead':'Questions, custom requests or large groups, we are happy to help in English, French or Spanish.',
    'contact.locT':'Location','contact.loc':'Playa Langosta, Tamarindo, Costa Rica',
    'contact.phoneT':'WhatsApp','contact.emailT':'Email','contact.instaT':'Instagram','contact.hoursT':'Languages','contact.hours':'English · Français · Español',

    'footer.tagline':'Private, personalized scuba diving in Tamarindo, Costa Rica. Quality over quantity, every dive designed around you.',
    'footer.explore':'Explore','footer.contactH':'Contact','footer.rights':'All rights reserved.','footer.made':'Designed for the ocean.',
    'footer.cancelH':'Cancellation Policy',
    'footer.cancel1':'100% refund if we are cancelling for weather conditions or if the minimum of people (3) is not reached.',
    'footer.cancel2':'100% refund on cancellations received 7 days or more before the tour’s starting time.',
    'footer.cancel3':'50% refund on cancellations received 3-6 days before the tour’s starting time.',
    'footer.cancel4':'0% refund on cancellations received within 48 hours of the tour’s starting time.',
    'footer.cancel5':'0% refund if the customer misses the departure of a confirmed tour.',
    'footer.cancel6':'0% refund in case customers do not fulfill requirements as described in the tour description (i.e. medical condition, physical fitness, certification level).',

    /* subpages */
    'exp.page.h1':'Experiences',
    'exp.page.intro':'Fully private, fully flexible. Thanks to trusted partnerships with selected dive centers, we adapt locations, schedules and formats to you, and every session includes unedited photos and videos.',
    'exp.incl.dives':'guided dives','exp.incl.gear':'All scuba equipment included','exp.incl.snacks':'Snacks & drinks included','exp.incl.private':'Fully private experience','exp.incl.photos':'Photos & videos included','exp.incl.pool':'Private pool session included','exp.incl.certonly':'For certified divers only','exp.incl.advancedOnly':'For Advanced Open Water divers only',
    'exp.discover.faqLink':'Common questions about scuba diving for beginners','exp.catalinas.faqLink':'More about diving at the Catalina Islands','exp.bat.faqLink':'Questions about diving with bull sharks at the Bat Islands',
    'cta.learn':'Learn more',
    'exp.incl.age10':'10 years & up','exp.incl.kids':'Fun for kids','exp.incl.nocert':'No certification needed',
    'dsd.pool':'Pool session at your villa or our facility the afternoon before the dives (approx. 2 hours) to practice skills and get comfortable with the equipment',
    'dsd.tour':'Half-day tour (approx. 6:45 am – 12:00 pm)',
    'dsd.sites':'2 dive sites',
    'dsd.fit':'Participants must be medically and physically fit to dive.','dsd.fitLink':'Review the DSD participant statement',
    'dsd.private':'Private groups','dsd.photos':'Photos & videos included','dsd.transport':'Transportation possible',
    'charters.h1':'Private Charters',
    'charters.lead':'Your own day at sea, exactly how you want it.',
    'charters.intro':'Charter a private boat from Tamarindo and combine everything you love about the ocean in one tailor-made day. Whether it is diving, snorkeling or simply cruising the coastline, the day is built entirely around you and your group.',
    'charters.f1t':'Scuba & snorkeling','charters.f1d':'Dive or snorkel the best spots along the Guanacaste coast.',
    'charters.f2t':'Water toys','charters.f2d':'Paddle boarding, e-foil and jet ski for the thrill-seekers.',
    'charters.f3t':'Made for you','charters.f3d':'Flexible itinerary, your music, your pace, your people.',
    'charters.cta':'Plan my charter on WhatsApp',
    'charters.book':'Request a private charter',
    'wa.charter':'Hi Salty Horizon! I would like to organize a PRIVATE CHARTER from Tamarindo. Could you share availability and pricing?',
    'wa.aowInfo':'Hi Salty Horizon! I would like more information about the Advanced Open Water Diver course.',
    'wa.owInfo':'Hi Salty Horizon! I would like more information about the Open Water Diver course.'
  },

  fr:{
    'nav.experiences':'Expériences','nav.charters':'Charters privés','nav.courses':'Formations PADI','nav.faq':'FAQ','nav.about':'À propos',
    'nav.gallery':'Galerie','nav.reviews':'Avis','nav.contact':'Contact','cta.book':'Réserver','cta.bookCourse':'Réserver un cours','cta.learnMore':'En savoir plus',

    'hero.eyebrow':'Tamarindo · Costa Rica',
    'hero.sub':'Plongée sous-marine exclusive',
    'hero.tag':'A rhythm defined by you.',
    'hero.cta1':'Réserver ma plongée','hero.cta2':'Voir les expériences','hero.scroll':'Défiler',
    'strip.private':'100 % privé','strip.padi':'Instructeurs PADI','strip.langs':'EN · FR · ES','strip.photos':'Photos incluses',

    'about.eyebrow':'Qui sommes-nous',
    'about.title':'La plongée comme elle devrait être',
    'about.lead':'Nous sommes Camille & Julien, deux instructeurs PADI qui ont transformé une passion de toujours pour l’océan en une expérience de plongée différente.',
    'about.p1':'Trilingues (français, anglais, espagnol), nous accueillons des voyageurs du monde entier et adaptons chaque sortie à votre niveau, vos envies et votre rythme. Pas d’horaires pressés, juste de petits groupes 100 % privés et toute notre attention.',
    'about.f1t':'100 % privé','about.f1d':'Petits groupes, votre rythme, sécurité et confort maximum.',
    'about.f2t':'Certifiés PADI','about.f2d':'Deux instructeurs PADI professionnels, passionnés par l’océan',
    'about.f3t':'Souvenirs inclus','about.f3d':'Photos & vidéos non retouchées à chaque sortie, offertes.',
    'about.cta':'Rencontrer l’équipe',
    'badge.b':'3e','badge.s':'génération de plongeurs',

    'exp.eyebrow':'Ce que nous proposons',
    'exp.title':'Nos expériences',
    'exp.lead':'De votre toute première respiration sous l’eau aux plongées avec requins, toujours guidées en privé.',
    'exp.cta':'Voir toutes les expériences & tarifs',
    'nav.catalinas':'Catalinas',
    'cat.eyebrow':'Où nous plongeons','cat.title':'Las Catalinas & son écosystème',
    'cat.lead':'Un archipel volcanique au large de Tamarindo, l’un des plus beaux terrains de plongée du Costa Rica.',
    'cat.p1':'Surgissant du Pacifique juste au nord de Tamarindo, les îles Catalinas canalisent des courants froids et riches en nutriments qui nourrissent une concentration exceptionnelle de vie marine, répartie sur plus de vingt pitons et récifs.',
    'cat.p2':'De décembre à mai, les raies mantas géantes du Pacifique glissent entre les îles, rejointes toute l’année par les raies aigles, les requins à pointe blanche, les tortues marines, les murènes, les poulpes et d’immenses bancs de poissons tropicaux. Une eau chaude et claire et des profils doux en font un site idéal pour les premières plongées et inoubliable pour les confirmés.',
    'cat.h1':'20+ sites de plongée','cat.h2':'Saison des mantas · déc–mai','cat.h3':'Raies aigles, requins & tortues','cat.h4':'Tous niveaux',
    'price.from':'dès','price.pp':'par personne','price.request':'sur demande','price.contact':'Nous contacter',

    'card.intro.t':'Initiation Scuba (piscine)','card.intro.d':'Découvrez les sensations de la plongée sous-marine lors d’une initiation en piscine, idéale pour une première approche en toute sécurité. Accompagné d’un instructeur, vous apprendrez à utiliser l’équipement, à respirer sous l’eau et à maîtriser les bases de la plongée dans un environnement calme et sécurisé. Une expérience ludique et rassurante, parfaite avant de se lancer en mer.',
    'card.discover.t':'Baptême de plongée','card.discover.d':'Découvrez la plongée sous-marine avec le Discover Scuba Diving, une initiation accessible aux débutants, sans certification préalable. Après un briefing avec votre instructeur, profitez de deux plongées d’environ 45 minutes à 1 heure pour explorer les fonds marins et observer la richesse de la vie marine du Costa Rica : poissons tropicaux, tortues marines, raies, murènes et, selon la saison, les majestueuses raies manta. Une première expérience inoubliable, en toute sécurité.',
    'card.catalinas.t':'Fun Dive · Las Catalinas','card.catalinas.d':'Deux plongées privées guidées aux îles Las Catalinas, l’une des destinations de plongée les plus emblématiques du Costa Rica. Explorez les formations rocheuses volcaniques et rencontrez une vie marine incroyable : raies mantas géantes (selon la saison), raies aigles, requins de récif, tortues de mer, bancs de poissons tropicaux et une multitude d’espèces macro. Parfait pour les plongeurs certifiés en quête d’aventures sous-marines inoubliables.',
    'card.bat.t':'Fun Dive · Bat Islands','card.bat.d':'Bat Islands (Islas Murciélagos), au large du parc national Santa Rosa (Guanacaste), offrent l’une des plongées les plus mythiques du Costa Rica. Accessibles de mai à novembre, elles permettent aux plongeurs expérimentés d’observer les impressionnants requins bouledogues dans leur habitat naturel. Une expérience intense au cœur d’une vie marine exceptionnelle.',
    'card.snorkel.t':'Snorkeling','card.snorkel.d':'Découvrez les fonds marins des îles Catalina lors de deux sessions de snorkeling de 45 minutes à 1 heure, accompagnées d’un guide. Explorez des eaux cristallines où évoluent poissons tropicaux, tortues marines, raies et, selon la saison, les majestueuses raies manta. Une activité accessible à tous, idéale pour observer la richesse de la vie marine du Costa Rica.',
    'card.courses.t':'Cours PADI','card.courses.d':'Développez vos compétences et progressez à votre rythme grâce à nos formations PADI, du Open Water Diver au Rescue Diver. Que vous souhaitiez obtenir votre première certification, gagner en autonomie ou renforcer vos connaissances, nos instructeurs vous accompagnent tout au long de votre apprentissage pour faire de vous un plongeur plus confiant, compétent et expérimenté.',
    'label.beginner':'Débutant','label.popular':'Le plus prisé','label.advanced':'Confirmé','label.season':'Mai–Nov','label.allLevels':'Tous niveaux','label.certified':'Certifié','label.certification':'Certification',

    'padi.page.h1':'Formations PADI',
    'padi.page.intro':'Progressez à votre rythme grâce à nos formations de certification PADI, encadrées par des instructeurs professionnels.',
    'padi.page.faqLink':'Questions fréquentes sur la certification PADI',
    'course.schedule':'Programme','course.requirements':'Prérequis','course.bring':'Quoi apporter','course.important':'Informations importantes','course.startingAt':'À partir de','course.included':'Inclus',

    'course.ow.t':'Open Water Diver',
    'course.ow.lead':'Prêt à devenir plongeur certifié ? La formation PADI Open Water Diver est votre première certification complète de plongée, conçue pour vous enseigner les compétences essentielles, les procédures de sécurité et la confiance nécessaires pour plonger en autonomie avec un binôme.',
    'course.ow.d':'Cette formation de 3 jours comprend de la théorie, 1 séance en piscine et 4 plongées en milieu naturel. Vous apprendrez à utiliser l’équipement de plongée, à maîtriser votre flottabilité, à gérer les situations sous-marines de base et à explorer l’océan en toute sécurité sous la supervision d’un instructeur PADI.',
    'course.ow.incl1':'E-learning','course.ow.incl2':'Frais de certification PADI','course.ow.incl3':'Instructeur PADI','course.ow.incl4':'Collations & boissons','course.ow.incl5':'Tout l’équipement',
    'course.ow.schedIntro':'Avant notre rencontre, merci de terminer votre e-learning PADI.',
    'course.ow.day1':'Jour 1 — Horaires flexibles / environ 4 heures','course.ow.day1a':'Révision de la théorie','course.ow.day1b':'Séance en piscine et pratique des compétences de plongée',
    'course.ow.day2':'Jour 2 — 6h45 à 12h00','course.ow.day2a':'Plongées en milieu naturel 1 et 2 aux îles Catalinas','course.ow.day2b':'Environ 40 minutes de bateau',
    'course.ow.day3':'Jour 3 — 6h45 à 12h00','course.ow.day3a':'Plongées en milieu naturel 3 et 4 aux îles Catalinas',
    'course.ow.req1':'Âge minimum : 10 ans','course.ow.req2':'À l’aise dans l’eau','course.ow.req3':'En bonne condition physique et médicale pour plonger. Le formulaire médical doit être complété avant la formation.','course.ow.medFormLink':'📄 Formulaire médical',
    'course.ow.bring1':'Maillot de bain','course.ow.bring2':'Casquette ou chapeau','course.ow.bring3':'Crème solaire respectueuse des récifs','course.ow.bring4':'Lunettes de soleil',
    'course.ow.note':'Un délai minimum de 24 heures après votre dernière plongée est requis avant de prendre l’avion.',

    'course.aow.t':'Advanced Open Water Diver',
    'course.aow.lead':'Déjà certifié PADI Open Water Diver ou équivalent ? La formation PADI Advanced Open Water Diver est conçue pour affiner vos compétences, renforcer votre confiance et étendre votre limite de profondeur à 30 m.',
    'course.aow.d1':'La formation comprend une courte session théorique et 5 plongées d’aventure.',
    'course.aow.d2':'Vous réaliserez deux plongées spécialisées obligatoires : plongée profonde et navigation sous-marine.',
    'course.aow.d3':'Vous choisirez également trois plongées spécialisées optionnelles, parmi : plongée depuis un bateau, recherche et récupération, plongée dérivante, identification des poissons, maîtrise de la flottabilité, ou plongée de nuit.',
    'course.aow.schedNote':'Possibilité de suivre la formation sur 2 ou 3 jours.',
    'course.aow.contactOptions':'Contactez-nous pour en savoir plus sur les différentes options.',
    'course.aow.req1':'Certification Open Water','course.aow.req2':'Âge minimum : 12 ans',
    'course.aow.incl1':'E-learning','course.aow.incl2':'Frais de certification PADI','course.aow.incl3':'Collations & boissons','course.aow.incl4':'Tout l’équipement',
    'course.contactInfo':'Contactez-nous pour plus d’informations.',

    'stat.dives':'Sites de plongée','stat.langs':'Langues','stat.private':'Plongées privées','stat.rating':'Note clients',

    'gallery.eyebrow':'Sous l’eau',
    'gallery.title':'Instants des profondeurs',
    'gallery.lead':'Un aperçu des récifs, raies et requins qui vous attendent au large de Tamarindo. Touchez une photo pour l’agrandir.',

    'team.eyebrow':'Vos instructeurs',
    'team.title':'Camille & Julien',
    'team.lead':'Deux vies façonnées par l’océan, désormais dédiées à vous le faire découvrir, en sécurité et en authenticité.',
    'camille.role':'PADI OWSI & MSDT',
    'camille.spec':'Spécialités : AWARE Shark Conservation, Deep, Digital Underwater Photography, Dive Against Debris, Nitrox, Wreck, AWARE Coral Reef Conservation, PADI AWARE, Peak Performance Buoyancy, EFR',
    'camille.bio':'Élevée entre la jungle et l’océan du Costa Rica, Camille plonge depuis l’âge de 14 ans. Passionnée par les requins et la conservation marine, elle adore partager le monde sous-marin tout en inspirant les autres à le protéger',
    'julien.role':'PADI OWSI',
    'julien.spec':'Spécialités : AWARE Coral Reef Conservation Instructor, Dive Against Debris, Emergency Oxygen Provider Instructor, Nitrox, PADI AWARE, Peak Performance Buoyancy Instructor',
    'julien.bio':'Issu d’une famille d’instructeurs de plongée en France et en Guadeloupe, Julien baigne dans l’univers de la plongée depuis tout petit. Il a pris sa première respiration sous l’eau à 13 ans et se passionne depuis pour l’exploration et le partage de l’océan',

    'rev.eyebrow':'Ils ont plongé avec nous',
    'rev.title':'Adoré par nos plongeurs',
    'rev.cta':'Laisser un avis sur Google',
    'rev.q1':'Camille et Julien ont offert une expérience exceptionnelle, adaptée à mes envies. Leur expertise et leur professionnalisme l’ont rendue inoubliable.',
    'rev.a1':'Luisa Martinez',
    'rev.q2':'La journée de plongée la plus détendue et personnelle de ma vie. Petit groupe, aucun stress, et les photos après étaient incroyables.',
    'rev.a2':'Marco — Italie',
    'rev.q3':'Parfait pour ma première fois. Je me suis sentie en sécurité du début à la fin, et ils parlent français : ma famille a adoré.',
    'rev.a3':'Amélie — France',
    'rev.q4':'Les requins-bouledogues aux Bat Islands avec eux = inoubliable. De vrais pros qui aiment l’océan',
    'rev.a4':'Daniel — USA',

    'book.eyebrow':'Réservez votre place',
    'book.title':'Réservez votre expérience',
    'book.lead':'Dites-nous ce que vous aimeriez faire, et nous confirmons tout personnellement sur WhatsApp.',
    'book.fexp':'Expérience','book.fexpPh':'Choisissez une expérience…',
    'book.fdate':'Date souhaitée','book.fpeople':'Personnes','book.fname':'Votre nom','book.fnamePh':'Prénom & nom',
    'book.fmsg':'Autre chose ?','book.fmsgPh':'Niveau, questions, demandes particulières…',
    'book.submit':'Envoyer ma réservation sur WhatsApp','book.email':'Nous contacter par e-mail',
    'book.perk1':'Annulation gratuite jusqu’à 7 jours avant','book.perk2':'Photos & vidéos incluses','book.perk3':'Réponse en quelques heures',
    'book.step1':'1 · Choisir','book.step2':'2 · Envoyer','book.step3':'3 · On confirme',
    'book.alert':'Veuillez d’abord choisir une expérience.',

    'faq.eyebrow':'Bon à savoir','faq.title':'Questions fréquentes','faq.seeMore':'Voir toute la FAQ plongée à Tamarindo',
    'faq.q1':'Faut-il être certifié pour essayer la plongée à Tamarindo ?',
    'faq.a1':'Non, aucune certification n’est nécessaire pour le baptême de plongée (Discover Scuba Diving). Après un briefing privé avec un instructeur PADI, vous réalisez deux plongées encadrées de 45 minutes à 1 heure, dès 10 ans.',
    'faq.q2':'Combien coûte le cours PADI Open Water Diver ?',
    'faq.a2':'Le cours Open Water Diver démarre à 540 $ et se déroule sur 3 jours, incluant l’e-learning, les frais de certification, tout l’équipement, ainsi que les collations et boissons.',
    'faq.q3':'Peut-on voir des requins-taureaux aux Bat Islands ?',
    'faq.a3':'Oui. Les Bat Islands sont accessibles de mai à novembre et sont réputées pour leurs requins-taureaux. Cette plongée est réservée aux plongeurs certifiés Advanced Open Water.',
    'faq.q4':'Les cours et plongées sont-ils proposés en français et en espagnol ?',
    'faq.a4':'Oui. Camille et Julien sont trilingues et encadrent en anglais, français et espagnol.',
    'faq.q5':'Faut-il un certificat médical pour plonger ?',
    'faq.a5':'Oui, pour les cours Open Water et Advanced Open Water, vous devez confirmer votre aptitude médicale à la plongée ; un formulaire médical est disponible à télécharger et doit être complété avant le cours.',

    'tfaq.crumb':'FAQ plongée',
    'tfaq.page.h1':'Plongée sous-marine à Tamarindo, Costa Rica : questions fréquentes',
    'tfaq.intro':'De vraies questions sur la plongée à Tamarindo et aux îles Catalinas, avec des réponses directes : vie marine, saison des raies manta et des baleines, conditions de plongée locales, certification. La faune est sauvage — les observations mentionnées ci-dessous sont fréquemment rapportées, jamais garanties.',
    'tfaq.h1':'Plonger à Tamarindo et aux îles Catalinas','tfaq.h1intro':"Les îles Catalinas (Islas Catalinas) sont la principale destination de plongée des bateaux au départ de Tamarindo — une chaîne d'îlots volcaniques dans le golfe de Papagayo, réputée pour ses forts courants et sa vie marine riche.",
    'tfaq.h2':'La vie marine autour de Tamarindo','tfaq.h2intro':'Les eaux Pacifique du Guanacaste abritent une grande variété d\'espèces, entre faune résidente des récifs et visiteurs migratoires de passage selon la saison.',
    'tfaq.h3':'Raies manta et raies mobula','tfaq.h3intro':"Les raies manta et mobula comptent parmi les observations les plus recherchées sur la côte Pacifique du Costa Rica, et leurs déplacements font l'objet de recherches scientifiques en cours.",
    'tfaq.h4':'Saison des baleines au Guanacaste','tfaq.h4intro':'La position du Costa Rica dans le Pacifique lui offre une saison des baleines à bosse particulièrement longue, avec le passage de deux populations migratoires distinctes.',
    'tfaq.h5':'Conditions de plongée dans le Pacifique','tfaq.h5intro':"Les conditions de plongée au large du Guanacaste changent nettement entre les deux saisons du Costa Rica, en partie sous l'effet d'un phénomène d'upwelling régional bien documenté.",
    'tfaq.h6':'Bat Islands et requins-taureaux','tfaq.h6intro':'Les Bat Islands (Islas Murciélago) sont un site de plongée distinct des îles Catalinas, plus avancé, réputé pour ses rencontres avec les requins-taureaux.',
    'tfaq.h7':'La plongée pour les débutants','tfaq.h7intro':"Aucune expérience ni certification n'est nécessaire pour essayer la plongée pour la première fois à Tamarindo.",
    'tfaq.h8':'Certifications et formations PADI',
    'tfaq.h9':'Santé et sécurité','tfaq.h9intro':'Les questions de santé et de sécurité les plus fréquentes chez les plongeurs, débutants comme confirmés.',
    'tfaq.h10':'Organiser sa plongée à Tamarindo','tfaq.h10intro':'Les informations pratiques pour réserver et préparer une plongée avec Salty Horizon.',
    'tfaq.h11':'Snorkeling et charters privés',
    'tfaq.sources':"Les informations sur la vie marine, les saisons et l'océanographie de cette page s'appuient sur le SINAC (Sistema Nacional de Áreas de Conservación du Costa Rica), la NOAA Fisheries, le réseau de recherche Manta Trust / MigraMar, ainsi que des recherches publiées dans la Revista de Biología Tropical et d'autres revues scientifiques sur le golfe de Papagayo.",

    'tfaq.q1':'Où se trouvent les îles Catalinas et comment y accède-t-on ?',
    'tfaq.a1':"Les îles Catalinas forment une chaîne d'une vingtaine d'îlots volcaniques dans le golfe de Papagayo, au large du Guanacaste. Les bateaux de plongée les rejoignent depuis Tamarindo en environ 40 minutes.",
    'tfaq.q2':'Les îles Catalinas sont-elles une zone marine protégée ?',
    'tfaq.a2':"Pas officiellement. Contrairement aux Bat Islands (Islas Murciélago), qui font partie du Secteur Marin de l'Área de Conservación Guanacaste géré par le SINAC — site du patrimoine mondial UNESCO —, les îles Catalinas ne bénéficient pas de ce même statut de protection. C'est un site naturellement riche, mais pas une aire protégée classée.",
    'tfaq.q3':'Quelle est la profondeur des plongées aux îles Catalinas ?',
    'tfaq.a3':'Les sites de plongée des Catalinas ont des profondeurs variées et conviennent à différents niveaux, du débutant encadré au plongeur plus expérimenté, sans les exigences de profondeur et de courant des Bat Islands.',
    'tfaq.q4':'Combien de temps dure le trajet en bateau jusqu\'aux îles Catalinas ?',
    'tfaq.a4':'Environ 40 minutes depuis Tamarindo, selon les conditions de mer.',

    'tfaq.q5':'Quelle vie marine peut-on observer en plongeant à Tamarindo ?',
    'tfaq.a5':"Les plongeurs dans la région de Tamarindo peuvent croiser des requins pointe-blanche, des raies aigle, des tortues marines, des poissons-globe, des murènes et de grands bancs de poissons tropicaux, parmi d'autres espèces typiques des récifs Pacifique du Guanacaste.",
    'tfaq.q6':'Quelle est la faune spécifique aux îles Catalinas ?',
    'tfaq.a6':'Les îles Catalinas sont réputées pour une concentration dense de vie marine : requins pointe-blanche, raies aigle, raies diable, raies vaches, tortues marines, murènes, poissons-globe, poulpes, hippocampes et grands bancs de carangues.',

    'tfaq.q7':'Peut-on voir des raies manta ou des tortues en plongeant à Tamarindo ?',
    'tfaq.a7':"Les plongeurs peuvent croiser des raies manta et des tortues marines dans la région de Tamarindo, notamment lors du Discover Scuba Diving et des sorties aux Catalinas. Les observations de raies manta sont le plus souvent rapportées de décembre à mai, même si, comme pour toute faune sauvage, les rencontres dépendent de la saison et des conditions naturelles.",
    'tfaq.q8':'Peut-on voir des raies manta aux îles Catalinas ?',
    'tfaq.a8':"Les îles Catalinas sont un lieu d'observation fréquemment rapporté pour les raies manta géantes (Mobula birostris), la plus grande raie au monde, avec une envergure pouvant atteindre 8 mètres selon la NOAA Fisheries. Les observations le long de la côte Pacifique du Costa Rica sont le plus souvent rapportées de décembre à mai. Leurs déplacements sont suivis par le projet Mantas Costa Rica, affilié au réseau international Manta Trust / MigraMar, par télémétrie acoustique et photo-identification. Comme pour tout animal sauvage, une observation n'est jamais garantie lors d'une plongée donnée.",

    'tfaq.q9':'Peut-on voir des baleines près de Tamarindo, et quelle est la saison des baleines ?',
    'tfaq.a9':"D'après la NOAA Fisheries, deux populations distinctes de baleines à bosse traversent les eaux du Costa Rica pour se reproduire et mettre bas : celles du Pacifique Nord, présentes de décembre à mars, et celles de l'hémisphère sud, présentes de juillet à mi-novembre — l'une des plus longues migrations connues pour cette espèce. Une activité baleinière est possible dans les eaux du Guanacaste sur une grande partie de l'année, mais les observations restent opportunistes et ne font pas partie du programme prévu d'une plongée.",
    'tfaq.q10':'Les observations de baleines ou de raies manta sont-elles garanties lors d\'une sortie ?',
    'tfaq.a10':"Non. Les baleines, les raies manta et toute la faune marine sont des animaux sauvages, et les rencontres dépendent des conditions naturelles, des déplacements des animaux et de la saison. Les observations sont fréquemment rapportées à certaines périodes de l'année, mais aucun centre de plongée ne peut les garantir lors d'une sortie donnée.",

    'tfaq.q11':'Quelle est la meilleure période de l\'année pour plonger à Tamarindo ?',
    'tfaq.a11':"La saison sèche, environ de décembre à avril, apporte généralement une mer plus calme et est considérée comme la période la plus prisée pour la plongée. La saison verte, de mai à novembre, apporte plus de pluie mais reste tout à fait praticable, avec moins de monde sur l'eau.",
    'tfaq.q12':'Quelle est la température de l\'eau à Tamarindo, et varie-t-elle dans l\'année ?',
    'tfaq.a12':"La température de l'eau dans le golfe de Papagayo varie plus que ce à quoi s'attendent beaucoup de visiteurs. Les recherches sur le phénomène d'upwelling de Papagayo montrent que cette remontée d'eau saisonnière, provoquée par de forts vents au large pendant la saison sèche, ramène en surface une eau plus froide et riche en nutriments environ de décembre à avril, avec une température moyenne autour de 23°C et des baisses ponctuelles bien plus marquées lors des pics d'upwelling. L'eau est plus chaude, généralement proche de 28°C, de mai à novembre environ.",
    'tfaq.q13':'Qu\'est-ce qui cause l\'upwelling saisonnier près de Tamarindo, et quel est son effet sur la plongée ?',
    'tfaq.a13':"Le golfe de Papagayo est l'une des rares zones d'upwelling saisonnier entraîné par le vent dans la région. Pendant l'hiver de l'hémisphère nord, de forts vents s'engouffrent par des trouées du relief montagneux d'Amérique centrale et repoussent l'eau de surface vers le large, ce qui fait remonter une eau plus froide et riche en nutriments depuis les profondeurs. Ce phénomène, documenté par des recherches océanographiques sur le golfe de Papagayo, contribue à la productivité marine de la zone, en plus des eaux plus fraîches de la saison sèche.",

    'tfaq.q14':'Peut-on vraiment voir des requins-taureaux en plongeant au Costa Rica ?',
    'tfaq.a14':"Oui. Les Bat Islands (Islas Murciélago), qui font partie du Secteur Marin de l'Área de Conservación Guanacaste du SINAC, sont l'un des rares endroits au monde où la rencontre avec des requins-taureaux est régulière. Une étude publiée dans la Revista de Biología Tropical a documenté un indice de résidence élevé pour les requins-taureaux au site de plongée de San Pedrillo, au sein de cet archipel, confirmant qu'il s'agit d'un site d'agrégation important pour l'espèce.",
    'tfaq.q15':'Quelle est la meilleure période pour plonger aux Bat Islands ?',
    'tfaq.a15':'Les sorties aux Bat Islands ont généralement lieu de mai à novembre.',
    'tfaq.q16':'Faut-il être certifié pour plonger avec les requins-taureaux ?',
    'tfaq.a16':'Oui. La plongée aux Bat Islands est réservée aux plongeurs certifiés Advanced Open Water, en raison de la profondeur et des courants du site.',
    'tfaq.q17':'Ces plongées avec requins-taureaux sont-elles dangereuses ?',
    'tfaq.a17':"Ces plongées demandent un niveau de certification confirmé en raison de la profondeur et des courants du site, mais aucun incident impliquant ces requins n'a jamais été recensé sur ce site ; les rencontres se font sans nourrissage, à distance respectueuse.",

    'tfaq.q18':'Faut-il de l\'expérience pour essayer la plongée à Tamarindo ?',
    'tfaq.a18':"Non. L'expérience Discover Scuba Diving ne nécessite aucune certification ni expérience préalable.",
    'tfaq.q19':'Qu\'est-ce que le Discover Scuba Diving, et comment ça se passe ?',
    'tfaq.a19':"Cela commence par un briefing privé avec un instructeur PADI, suivi de deux plongées encadrées d'environ 45 minutes à 1 heure chacune.",
    'tfaq.q20':'Quel est l\'âge minimum pour essayer la plongée ?',
    'tfaq.a20':"10 ans, aussi bien pour le Discover Scuba Diving que pour le cours Open Water Diver.",
    'tfaq.q21':'Faut-il être un bon nageur pour plonger ?',
    'tfaq.a21':"Aucun niveau de nage sportif n'est requis ; être à l'aise dans l'eau suffit.",
    'tfaq.q22':'À quelle profondeur vont les débutants lors d\'une première plongée ?',
    'tfaq.a22':"La profondeur reste dans les limites du confort du plongeur, ajustée en continu par l'instructeur plutôt que fixée à l'avance.",

    'tfaq.q23':'Combien de temps dure le cours PADI Open Water Diver ?',
    'tfaq.a23':'3 jours : théorie et piscine, puis 4 plongées en mer aux îles Catalinas.',
    'tfaq.q24':'Combien coûte le cours Open Water Diver ?',
    'tfaq.a24':'Le cours démarre à 540 $.',
    'tfaq.q25':'Qu\'est-ce qui est inclus dans le prix du cours Open Water Diver ?',
    'tfaq.a25':"L'e-learning, les frais de certification PADI, tout l'équipement, ainsi que collations et boissons.",
    'tfaq.q26':'Qu\'est-ce que le cours Advanced Open Water Diver, et pour qui est-il fait ?',
    'tfaq.a26':"Il s'adresse aux plongeurs déjà certifiés Open Water Diver qui veulent gagner en confiance et étendre leur profondeur limite à 30 m, à travers 5 plongées d'aventure.",
    'tfaq.q27':'Combien coûte le cours Advanced Open Water ?',
    'tfaq.a27':'Le cours démarre à 500 $ et peut être réalisé en 2 ou 3 jours.',
    'tfaq.q28':'Quelle est la différence entre Open Water et Advanced Open Water ?',
    'tfaq.a28':"Open Water Diver est la certification d'entrée, avec une profondeur maximale de 18 m. Advanced Open Water approfondit ces compétences avec des plongées Deep et Navigation obligatoires, plus des spécialités au choix, et étend la limite à 30 m.",
    'tfaq.q29':'Peut-on faire l\'e-learning PADI avant d\'arriver au Costa Rica ?',
    'tfaq.a29':"Oui, et c'est même recommandé pour gagner du temps une fois sur place.",

    'tfaq.q30':'La plongée sous-marine est-elle sûre ?',
    'tfaq.a30':"La plongée est une activité sûre lorsqu'elle est pratiquée selon les protocoles de formation standards, ce qui explique qu'un formulaire médical et l'encadrement d'un instructeur PADI certifié soient exigés pour chaque cours.",
    'tfaq.q31':'Faut-il un formulaire médical pour plonger ?',
    'tfaq.a31':'Oui, pour les cours Open Water et Advanced Open Water, à compléter avant le début du cours.',
    'tfaq.q32':'Peut-on plonger avec de l\'asthme ?',
    'tfaq.a32':"Souvent oui, si l'asthme est bien contrôlé, mais une autorisation médicale est nécessaire ; à voir avec un médecin avant votre séjour.",
    'tfaq.q33':'Peut-on plonger avec des lunettes ?',
    'tfaq.a33':"Pas directement avec des lunettes, qui ne tiennent pas sous un masque, mais des lentilles de contact ou un masque à correction fonctionnent très bien.",
    'tfaq.q34':'Que faire si je n\'arrive pas à équilibrer mes oreilles ?',
    'tfaq.a34':"On s'arrête, on remonte légèrement, et on réessaie doucement plutôt que de forcer ; les instructeurs accompagnent les nouveaux plongeurs pas à pas sur ce point.",
    'tfaq.q35':'Risque-t-on d\'avoir le mal de mer sur le bateau ?',
    'tfaq.a35':"C'est possible par mer agitée ; des conseils sont donnés avant le départ, et les trajets vers les sites locaux sont courts.",
    'tfaq.q36':'Y a-t-il un risque de requins dangereux en plongeant au Costa Rica ?',
    'tfaq.a36':"Les incidents liés aux requins sont extrêmement rares, et les rencontres avec les requins-taureaux aux Bat Islands se font sans aucun nourrissage, à distance respectueuse.",

    'tfaq.q37':'Comment réserver une plongée avec Salty Horizon ?',
    'tfaq.a37a':'Via le','tfaq.a37link':'formulaire de réservation','tfaq.a37b':'du site, confirmé personnellement sur WhatsApp.',
    'tfaq.h8intro1':'Salty Horizon enseigne les certifications PADI Open Water Diver et Advanced Open Water Diver à Tamarindo — voir la','tfaq.h8introLink':'page complète des formations PADI','tfaq.h8intro2':'pour les horaires et prérequis.',
    'tfaq.h11intro1':'Pour les non-plongeurs ou une journée sur mesure en mer, voir la page complète','tfaq.h11introLink':'Charters privés',
    'tfaq.q38':'Quelle est la politique d\'annulation ?',
    'tfaq.a38':"L'annulation suit un barème dégressif : remboursement à 100 % si la sortie est annulée pour cause météo ou faute d'atteindre le minimum de 3 personnes, et à 100 % pour toute annulation reçue 7 jours ou plus avant le départ. Le remboursement passe à 50 % entre 3 et 6 jours avant, et à 0 % dans les 48 heures précédant le départ, en cas d'absence au départ, ou si le client ne remplit pas les conditions requises (état de santé, condition physique, niveau de certification).",
    'tfaq.q39':'Les plongées sont-elles privées, ou en grand groupe ?',
    'tfaq.a39':'Toujours privées ou en très petit groupe, à votre rythme.',
    'tfaq.q40':'Parlez-vous anglais, français et espagnol ?',
    'tfaq.a40':'Oui. Camille et Julien sont trilingues et encadrent dans les trois langues.',
    'tfaq.q41':'Que faut-il apporter le jour de la plongée ?',
    'tfaq.a41':"Un maillot de bain et une serviette ; tout l'équipement de plongée est fourni.",

    'tfaq.q42':'Proposez-vous du snorkeling pour les non-plongeurs ?',
    'tfaq.a42':'Oui, en privé, deux sessions de 45 minutes à 1 heure, à partir de 80 $.',
    'tfaq.q43':'Peut-on réserver un bateau privé ?',
    'tfaq.a43':'Oui, une journée en mer entièrement personnalisée combinant plongée, snorkeling, paddle, e-foil et jet-ski.',
    'tfaq.q44':'Qu\'est-ce qui est inclus dans un charter privé ?',
    'tfaq.a44':'Un itinéraire flexible construit autour de vos envies, organisé pour votre groupe.',

    'contact.eyebrow':'Contactez-nous',
    'contact.title':'Planifions votre plongée',
    'contact.lead':'Questions, demandes sur mesure ou grands groupes, avec plaisir, en français, anglais ou espagnol.',
    'contact.locT':'Lieu','contact.loc':'Playa Langosta, Tamarindo, Costa Rica',
    'contact.phoneT':'WhatsApp','contact.emailT':'E-mail','contact.instaT':'Instagram','contact.hoursT':'Langues','contact.hours':'English · Français · Español',

    'footer.tagline':'Plongée sous-marine privée et personnalisée à Tamarindo, Costa Rica. La qualité avant la quantité, chaque plongée pensée pour vous.',
    'footer.explore':'Explorer','footer.contactH':'Contact','footer.rights':'Tous droits réservés.','footer.made':'Conçu pour l’océan',
    'footer.cancelH':'Politique d’annulation',
    'footer.cancel1':'Remboursement à 100 % si nous annulons pour cause de météo ou si le minimum de participants (3) n’est pas atteint.',
    'footer.cancel2':'Remboursement à 100 % pour toute annulation reçue 7 jours ou plus avant le départ de la sortie.',
    'footer.cancel3':'Remboursement à 50 % pour toute annulation reçue 3 à 6 jours avant le départ de la sortie.',
    'footer.cancel4':'Aucun remboursement pour toute annulation reçue dans les 48 heures précédant le départ de la sortie.',
    'footer.cancel5':'Aucun remboursement si le client ne se présente pas au départ d’une sortie confirmée.',
    'footer.cancel6':'Aucun remboursement si le client ne remplit pas les conditions décrites dans la sortie (ex. : condition médicale, forme physique, niveau de certification).',

    'exp.page.h1':'Expériences',
    'exp.page.intro':'100 % privé, 100 % flexible. Grâce à nos partenariats de confiance avec des centres sélectionnés, nous adaptons lieux, horaires et formats à vous, et chaque sortie inclut des photos et vidéos non retouchées.',
    'exp.incl.dives':'plongées guidées','exp.incl.gear':'Tout l’équipement de plongée inclus','exp.incl.snacks':'Snacks & boissons inclus','exp.incl.private':'Expérience 100 % privée','exp.incl.photos':'Photos & vidéos incluses','exp.incl.pool':'Séance privée en piscine incluse','exp.incl.certonly':'Réservé aux plongeurs certifiés','exp.incl.advancedOnly':'Réservé aux plongeurs Advanced Open Water',
    'exp.discover.faqLink':'Questions fréquentes sur la plongée pour débutants','exp.catalinas.faqLink':'En savoir plus sur la plongée aux îles Catalinas','exp.bat.faqLink':'Questions sur la plongée avec les requins-taureaux aux Bat Islands',
    'cta.learn':'En savoir plus',
    'exp.incl.age10':'10 ans et +','exp.incl.kids':'Ludique pour les enfants','exp.incl.nocert':'Aucun brevet requis',
    'dsd.pool':'Séance en piscine chez vous ou dans nos locaux l’après-midi précédant les plongées (environ 2 heures) pour pratiquer les techniques et vous familiariser avec l’équipement',
    'dsd.tour':'Sortie d’une demi-journée (environ 6h45 – 12h00)',
    'dsd.sites':'2 sites de plongée',
    'dsd.fit':'Les participants doivent être médicalement et physiquement aptes à plonger.','dsd.fitLink':'Consultez la déclaration du participant DSD',
    'dsd.private':'Groupes privés','dsd.photos':'Photos et vidéos incluses','dsd.transport':'Transport possible',
    'charters.h1':'Charters privés',
    'charters.lead':'Votre journée en mer, exactement comme vous la voulez.',
    'charters.intro':'Privatisez un bateau au départ de Tamarindo et réunissez tout ce que vous aimez de l’océan en une journée sur mesure. Plongée, snorkeling ou simple navigation le long de la côte : la journée est entièrement construite autour de vous et de votre groupe.',
    'charters.f1t':'Plongée & snorkeling','charters.f1d':'Plongez ou snorkelez les plus beaux spots de la côte du Guanacaste.',
    'charters.f2t':'Toys nautiques','charters.f2d':'Paddle, e-foil et jet ski pour les amateurs de sensations.',
    'charters.f3t':'Sur mesure','charters.f3d':'Itinéraire flexible, votre musique, votre rythme, vos proches.',
    'charters.cta':'Organiser mon charter sur WhatsApp',
    'charters.book':'Demander un charter privé',
    'wa.charter':'Bonjour Salty Horizon ! J’aimerais organiser un CHARTER PRIVÉ au départ de Tamarindo. Pouvez-vous m’indiquer les disponibilités et tarifs ?',
    'wa.aowInfo':'Bonjour Salty Horizon ! J’aimerais avoir plus d’informations sur la formation Advanced Open Water Diver.',
    'wa.owInfo':'Bonjour Salty Horizon ! J’aimerais avoir plus d’informations sur la formation Open Water Diver.'
  },

  es:{
    'nav.experiences':'Experiencias','nav.charters':'Charters privados','nav.courses':'Cursos PADI','nav.faq':'FAQ','nav.about':'Nosotros',
    'nav.gallery':'Galería','nav.reviews':'Reseñas','nav.contact':'Contacto','cta.book':'Reservar','cta.bookCourse':'Reservar un curso','cta.learnMore':'Saber más',

    'hero.eyebrow':'Tamarindo · Costa Rica',
    'hero.sub':'Buceo exclusivo',
    'hero.tag':'A rhythm defined by you.',
    'hero.cta1':'Reserva tu inmersión','hero.cta2':'Ver experiencias','hero.scroll':'Desplázate',
    'strip.private':'100 % privado','strip.padi':'Instructores PADI','strip.langs':'EN · FR · ES','strip.photos':'Fotos incluidas',

    'about.eyebrow':'Quiénes somos',
    'about.title':'Bucear como se debe',
    'about.lead':'Somos Camille & Julien, dos instructores PADI que convirtieron un amor de toda la vida por el océano en una forma distinta de bucear.',
    'about.p1':'Trilingües (español, inglés y francés), recibimos viajeros de todo el mundo y adaptamos cada salida a tu comodidad, tus metas y tu ritmo. Sin horarios apresurados, solo grupos pequeños 100 % privados y toda nuestra atención.',
    'about.f1t':'100 % privado','about.f1d':'Grupos pequeños, tu ritmo, máxima seguridad y comodidad.',
    'about.f2t':'Certificados PADI','about.f2d':'Dos instructores PADI profesionales, apasionados por el océano.',
    'about.f3t':'Recuerdos incluidos','about.f3d':'Fotos y videos sin editar en cada salida, gratis.',
    'about.cta':'Conoce al equipo',
    'badge.b':'3ª','badge.s':'generación de buzos',

    'exp.eyebrow':'Lo que ofrecemos',
    'exp.title':'Nuestras experiencias',
    'exp.lead':'Desde tu primera respiración bajo el agua hasta inmersiones con tiburones, siempre guiadas en privado.',
    'exp.cta':'Ver todas las experiencias y precios',
    'nav.catalinas':'Catalinas',
    'cat.eyebrow':'Dónde buceamos','cat.title':'Las Catalinas y su ecosistema',
    'cat.lead':'Un archipiélago volcánico frente a Tamarindo, uno de los mejores destinos de buceo de Costa Rica.',
    'cat.p1':'Emergiendo del Pacífico justo al norte de Tamarindo, las Islas Catalinas canalizan corrientes frías y ricas en nutrientes que alimentan una concentración excepcional de vida marina en más de veinte pináculos y arrecifes.',
    'cat.p2':'De diciembre a mayo, las mantas gigantes del Pacífico se deslizan entre las islas, acompañadas todo el año por rayas águila, tiburones punta blanca, tortugas marinas, morenas, pulpos y enormes bancos de peces tropicales. Aguas cálidas y claras y perfiles suaves la hacen ideal para las primeras inmersiones e inolvidable para los experimentados.',
    'cat.h1':'20+ puntos de buceo','cat.h2':'Temporada de mantas · dic–may','cat.h3':'Rayas águila, tiburones y tortugas','cat.h4':'Todos los niveles',
    'price.from':'desde','price.pp':'por persona','price.request':'a consultar','price.contact':'Contáctanos',

    'card.intro.t':'Iniciación al buceo (piscina)','card.intro.d':'Descubre las sensaciones del buceo en una iniciación en piscina, ideal para un primer contacto con total seguridad. Acompañado por un instructor, aprenderás a usar el equipo, a respirar bajo el agua y a dominar las bases del buceo en un entorno tranquilo y seguro. Una experiencia divertida y tranquilizadora, perfecta antes de lanzarte al mar.',
    'card.discover.t':'Bautismo de buceo','card.discover.d':'Descubre el buceo con el programa Discover Scuba Diving, una iniciación accesible para principiantes, sin certificación previa. Tras un briefing con tu instructor, disfruta de dos inmersiones de unos 45 minutos a 1 hora para explorar los fondos marinos y observar la riqueza de la vida marina de Costa Rica: peces tropicales, tortugas marinas, rayas, morenas y, según la temporada, las majestuosas mantarrayas. Una primera experiencia inolvidable, con total seguridad.',
    'card.catalinas.t':'Fun Dive · Las Catalinas','card.catalinas.d':'Dos inmersiones privadas guiadas en las Islas Las Catalinas, uno de los destinos de buceo más icónicos de Costa Rica. Explora las formaciones rocosas volcánicas y encuentra una vida marina increíble: mantarrayas gigantes (según la temporada), rayas águila, tiburones de arrecife, tortugas marinas, cardúmenes de peces tropicales y un sinfín de especies macro. Perfecto para buceadores certificados que buscan aventuras submarinas inolvidables.',
    'card.bat.t':'Fun Dive · Bat Islands','card.bat.d':'Las Islas Murciélagos, frente al Parque Nacional Santa Rosa (Guanacaste), ofrecen una de las inmersiones más míticas de Costa Rica. Accesibles de mayo a noviembre, permiten a los buzos experimentados observar los impresionantes tiburones toro en su hábitat natural. Una experiencia intensa en el corazón de una vida marina excepcional.',
    'card.snorkel.t':'Snorkeling','card.snorkel.d':'Descubre los fondos marinos de las Islas Catalinas durante dos sesiones de snorkel de 45 minutos a 1 hora, acompañado por un guía. Explora aguas cristalinas donde nadan peces tropicales, tortugas marinas, rayas y, según la temporada, las majestuosas mantarrayas. Una actividad accesible para todos, ideal para observar la riqueza de la vida marina de Costa Rica.',
    'card.courses.t':'Cursos PADI','card.courses.d':'Desarrolla tus habilidades y progresa a tu propio ritmo con nuestros cursos PADI, desde Open Water Diver hasta Rescue Diver. Ya sea que quieras obtener tu primera certificación, ganar autonomía o ampliar tus conocimientos, nuestros instructores te acompañan durante toda tu formación para convertirte en un buceador más seguro, competente y experimentado.',
    'label.beginner':'Principiante','label.popular':'Más popular','label.advanced':'Avanzado','label.season':'Mayo–Nov','label.allLevels':'Todos los niveles','label.certified':'Certificado','label.certification':'Certificación',

    'padi.page.h1':'Cursos PADI',
    'padi.page.intro':'Progresa a tu propio ritmo con nuestros cursos de certificación PADI, guiados por instructores profesionales.',
    'padi.page.faqLink':'Preguntas frecuentes sobre la certificación PADI',
    'course.schedule':'Programa','course.requirements':'Requisitos','course.bring':'Qué llevar','course.important':'Información importante','course.startingAt':'Desde','course.included':'Incluye',

    'course.ow.t':'Open Water Diver',
    'course.ow.lead':'¿Listo para certificarte como buceador? El curso PADI Open Water Diver es tu primera certificación completa de buceo, diseñada para enseñarte las habilidades esenciales, los procedimientos de seguridad y la confianza necesarios para bucear de forma independiente con un compañero.',
    'course.ow.d':'Este curso de 3 días incluye teoría, 1 sesión en piscina y 4 inmersiones en aguas abiertas. Durante el curso aprenderás a usar el equipo de buceo, controlar tu flotabilidad, manejar situaciones básicas bajo el agua y explorar el océano de forma segura bajo la guía de un instructor PADI.',
    'course.ow.incl1':'E-learning','course.ow.incl2':'Tarifa de certificación PADI','course.ow.incl3':'Instructor PADI','course.ow.incl4':'Snacks y bebidas','course.ow.incl5':'Todo el equipo',
    'course.ow.schedIntro':'Antes de nuestro encuentro, completa tu e-learning de PADI.',
    'course.ow.day1':'Día 1 — Horario flexible / aprox. 4 horas','course.ow.day1a':'Repaso de la teoría','course.ow.day1b':'Sesión en piscina y práctica de habilidades de buceo',
    'course.ow.day2':'Día 2 — 6:45am a 12:00pm','course.ow.day2a':'Inmersiones en aguas abiertas 1 y 2 en las Islas Catalinas','course.ow.day2b':'Aprox. 40 minutos en bote',
    'course.ow.day3':'Día 3 — 6:45am a 12:00pm','course.ow.day3a':'Inmersiones en aguas abiertas 3 y 4 en las Islas Catalinas',
    'course.ow.req1':'Edad mínima: 10 años','course.ow.req2':'Sentirse cómodo en el agua','course.ow.req3':'Estar física y médicamente apto para bucear. El formulario médico debe completarse antes del curso.','course.ow.medFormLink':'📄 Formulario médico',
    'course.ow.bring1':'Traje de baño','course.ow.bring2':'Gorra o sombrero','course.ow.bring3':'Protector solar biodegradable','course.ow.bring4':'Gafas de sol',
    'course.ow.note':'Debes esperar un mínimo de 24 horas después de tu última inmersión antes de volar.',

    'course.aow.t':'Advanced Open Water Diver',
    'course.aow.lead':'¿Ya estás certificado como PADI Open Water Diver o equivalente? El curso PADI Advanced Open Water Diver está diseñado para perfeccionar tus habilidades, aumentar tu confianza y ampliar tu límite de profundidad a 30 m.',
    'course.aow.d1':'El curso incluye una breve sección teórica y 5 inmersiones de aventura.',
    'course.aow.d2':'Realizarás dos inmersiones de especialidad obligatorias: inmersión profunda y navegación subacuática.',
    'course.aow.d3':'También elegirás tres inmersiones de especialidad opcionales, entre ellas: buceo desde bote, búsqueda y recuperación, buceo a la deriva, identificación de peces, control de flotabilidad, o buceo nocturno.',
    'course.aow.schedNote':'Posibilidad de completar el curso en 2 o 3 días.',
    'course.aow.contactOptions':'Contáctanos para conocer más sobre las diferentes opciones.',
    'course.aow.req1':'Certificación Open Water','course.aow.req2':'Edad mínima: 12 años',
    'course.aow.incl1':'E-learning','course.aow.incl2':'Tarifa de certificación PADI','course.aow.incl3':'Snacks y bebidas','course.aow.incl4':'Todo el equipo',
    'course.contactInfo':'Contáctanos para más información.',

    'stat.dives':'Puntos de buceo','stat.langs':'Idiomas','stat.private':'Inmersiones privadas','stat.rating':'Valoración',

    'gallery.eyebrow':'Bajo el agua',
    'gallery.title':'Momentos de las profundidades',
    'gallery.lead':'Un vistazo a los arrecifes, rayas y tiburones que te esperan frente a Tamarindo. Toca una foto para ampliarla.',

    'team.eyebrow':'Tus instructores',
    'team.title':'Camille & Julien',
    'team.lead':'Dos vidas moldeadas por el océano, ahora dedicadas a compartirlo contigo, con seguridad y autenticidad.',
    'camille.role':'PADI OWSI & MSDT',
    'camille.spec':'Especialidades: AWARE Shark Conservation, Deep, Digital Underwater Photography, Dive Against Debris, Nitrox, Wreck, AWARE Coral Reef Conservation, PADI AWARE, Peak Performance Buoyancy, EFR',
    'camille.bio':'Criada entre la selva y el océano de Costa Rica, Camille bucea desde los 14 años. Apasionada por los tiburones y la conservación marina, le encanta compartir el mundo submarino e inspirar a otros a protegerlo',
    'julien.role':'PADI OWSI',
    'julien.spec':'Especialidades: AWARE Coral Reef Conservation Instructor, Dive Against Debris, Emergency Oxygen Provider Instructor, Nitrox, PADI AWARE, Peak Performance Buoyancy Instructor',
    'julien.bio':'Proveniente de una familia de instructores de buceo en Francia y Guadalupe, Julien está inmerso en el mundo del buceo desde muy joven. Tomó su primera respiración bajo el agua a los 13 años y desde entonces le apasiona explorar y compartir el océano',

    'rev.eyebrow':'Historias de buzos',
    'rev.title':'Amado por nuestros buzos',
    'rev.cta':'Escribe una reseña en Google',
    'rev.q1':'Camille y Julien ofrecieron una experiencia excepcional, adaptada a mis preferencias. Su experiencia y profesionalismo la hicieron inolvidable.',
    'rev.a1':'Luisa Martinez',
    'rev.q2':'El día de buceo más relajado y personal de mi vida. Grupo pequeño, sin prisas, y las fotos después fueron increíbles.',
    'rev.a2':'Marco — Italia',
    'rev.q3':'Perfecto para mi primera vez. Me sentí segura todo el tiempo, y hablan francés, lo que encantó a mi familia.',
    'rev.a3':'Amélie — Francia',
    'rev.q4':'Tiburones toro en las Bat Islands con ellos = inolvidable. Verdaderos profesionales que aman el océano.',
    'rev.a4':'Daniel — EE. UU.',

    'book.eyebrow':'Reserva tu lugar',
    'book.title':'Reserva tu experiencia',
    'book.lead':'Cuéntanos qué te gustaría hacer y lo confirmamos personalmente por WhatsApp.',
    'book.fexp':'Experiencia','book.fexpPh':'Elige una experiencia…',
    'book.fdate':'Fecha preferida','book.fpeople':'Personas','book.fname':'Tu nombre','book.fnamePh':'Nombre y apellido',
    'book.fmsg':'¿Algo más?','book.fmsgPh':'Nivel, preguntas, peticiones especiales…',
    'book.submit':'Enviar reserva por WhatsApp','book.email':'Contáctanos por correo',
    'book.perk1':'Cancelación gratis hasta 7 días antes','book.perk2':'Fotos y videos incluidos','book.perk3':'Respondemos en pocas horas',
    'book.step1':'1 · Elige','book.step2':'2 · Envía','book.step3':'3 · Confirmamos',
    'book.alert':'Por favor elige una experiencia primero.',

    'faq.eyebrow':'Es bueno saberlo','faq.title':'Preguntas frecuentes','faq.seeMore':'Ver todas las preguntas sobre buceo en Tamarindo',
    'faq.q1':'¿Necesito estar certificado para probar el buceo en Tamarindo?',
    'faq.a1':'No, no se necesita certificación para el bautismo de buceo (Discover Scuba Diving). Después de una charla privada con un instructor PADI, realizas dos inmersiones guiadas de 45 minutos a 1 hora, desde los 10 años.',
    'faq.q2':'¿Cuánto cuesta el curso PADI Open Water Diver?',
    'faq.a2':'El curso Open Water Diver empieza en $540 y dura 3 días, incluyendo el e-learning, la certificación, todo el equipo, y snacks y bebidas.',
    'faq.q3':'¿Se pueden ver tiburones toro en las Islas Murciélago?',
    'faq.a3':'Sí. Las Islas Murciélago son accesibles de mayo a noviembre y son conocidas por sus tiburones toro. Esta inmersión es solo para buzos certificados Advanced Open Water.',
    'faq.q4':'¿Los cursos e inmersiones se ofrecen en francés y español?',
    'faq.a4':'Sí. Camille y Julien son trilingües y enseñan y guían en inglés, francés y español.',
    'faq.q5':'¿Necesito un formulario médico para bucear?',
    'faq.a5':'Sí, para los cursos Open Water y Advanced Open Water debes confirmar tu aptitud médica para bucear; hay un formulario médico disponible para descargar que debe completarse antes del curso.',

    'tfaq.crumb':'FAQ de buceo',
    'tfaq.page.h1':'Buceo en Tamarindo, Costa Rica: preguntas frecuentes',
    'tfaq.intro':'Preguntas reales sobre el buceo en Tamarindo y en las Islas Catalinas, con respuestas directas: vida marina, temporada de rayas manta y ballenas, condiciones de buceo locales y certificación. La fauna es salvaje — los avistamientos mencionados abajo se reportan con frecuencia, pero nunca están garantizados.',
    'tfaq.h1':'Buceo en Tamarindo y las Islas Catalinas','tfaq.h1intro':'Las Islas Catalinas son el principal destino de buceo para los barcos que salen de Tamarindo: una cadena de islotes volcánicos en el golfo de Papagayo, conocida por sus fuertes corrientes y su rica vida marina.',
    'tfaq.h2':'Vida marina alrededor de Tamarindo','tfaq.h2intro':'Las aguas del Pacífico de Guanacaste albergan una gran variedad de especies, entre fauna residente de los arrecifes y visitantes migratorios de paso según la temporada.',
    'tfaq.h3':'Rayas manta y mobula','tfaq.h3intro':'Las rayas manta y mobula están entre los avistamientos más buscados en la costa Pacífica de Costa Rica, y sus movimientos son objeto de investigación científica en curso.',
    'tfaq.h4':'Temporada de ballenas en Guanacaste','tfaq.h4intro':'La posición de Costa Rica en el Pacífico le da una temporada de ballenas jorobadas inusualmente larga, con el paso de dos poblaciones migratorias distintas.',
    'tfaq.h5':'Condiciones de buceo en el Pacífico','tfaq.h5intro':'Las condiciones de buceo frente a Guanacaste cambian notablemente entre las dos temporadas de Costa Rica, impulsadas en parte por un sistema de surgencia (upwelling) regional bien documentado.',
    'tfaq.h6':'Bat Islands y tiburones toro','tfaq.h6intro':'Las Bat Islands (Islas Murciélago) son un sitio de buceo distinto de las Islas Catalinas, más avanzado, conocido por sus encuentros con tiburones toro.',
    'tfaq.h7':'Buceo para principiantes','tfaq.h7intro':'No se necesita experiencia ni certificación para probar el buceo por primera vez en Tamarindo.',
    'tfaq.h8':'Certificaciones y cursos PADI',
    'tfaq.h9':'Salud y seguridad','tfaq.h9intro':'Las preguntas de salud y seguridad más frecuentes entre buzos principiantes y experimentados.',
    'tfaq.h10':'Planifica tu inmersión en Tamarindo','tfaq.h10intro':'Información práctica para reservar y prepararte para una inmersión con Salty Horizon.',
    'tfaq.h11':'Snorkel y charters privados',
    'tfaq.sources':'La información sobre vida marina, temporadas y oceanografía en esta página se basa en el SINAC (Sistema Nacional de Áreas de Conservación de Costa Rica), NOAA Fisheries, la red de investigación Manta Trust / MigraMar, y estudios publicados en la Revista de Biología Tropical y otras revistas científicas sobre el golfo de Papagayo.',

    'tfaq.q1':'¿Dónde están las Islas Catalinas y cómo se llega?',
    'tfaq.a1':'Las Islas Catalinas son una cadena de unos veinte islotes volcánicos en el golfo de Papagayo, frente a la costa de Guanacaste. Los barcos de buceo llegan desde Tamarindo en unos 40 minutos.',
    'tfaq.q2':'¿Las Islas Catalinas son un área marina protegida?',
    'tfaq.a2':'No formalmente. A diferencia de las Bat Islands (Islas Murciélago), que forman parte del Sector Marino del Área de Conservación Guanacaste gestionada por el SINAC —sitio del Patrimonio Mundial de la UNESCO—, las Islas Catalinas no cuentan actualmente con esa misma designación de área protegida. Es un sitio naturalmente rico, pero no un área protegida clasificada.',
    'tfaq.q3':'¿Qué tan profundas son las inmersiones en las Islas Catalinas?',
    'tfaq.a3':'Los sitios de buceo de las Catalinas tienen profundidades variadas y se adaptan a distintos niveles, desde principiantes supervisados hasta buzos más experimentados, sin las exigencias de profundidad y corriente de sitios como las Bat Islands.',
    'tfaq.q4':'¿Cuánto dura el trayecto en barco hasta las Islas Catalinas?',
    'tfaq.a4':'Unos 40 minutos desde Tamarindo, según las condiciones del mar.',

    'tfaq.q5':'¿Qué vida marina se puede ver buceando en Tamarindo?',
    'tfaq.a5':'Los buzos en la zona de Tamarindo pueden encontrarse con tiburones punta blanca, rayas águila, tortugas marinas, peces globo, morenas y grandes bancos de peces tropicales, entre otras especies típicas de los arrecifes del Pacífico de Guanacaste.',
    'tfaq.q6':'¿Qué vida marina hay específicamente en las Islas Catalinas?',
    'tfaq.a6':'Las Islas Catalinas son conocidas por una alta concentración de vida marina: tiburones punta blanca, rayas águila, rayas diablo, rayas vaca, tortugas marinas, morenas, peces globo, pulpos, caballitos de mar y grandes bancos de jureles.',

    'tfaq.q7':'¿Puedo ver rayas manta o tortugas buceando en Tamarindo?',
    'tfaq.a7':'Los buzos pueden encontrarse con rayas manta y tortugas marinas en la zona de Tamarindo, sobre todo durante el Discover Scuba Diving y las salidas a las Catalinas. Los avistamientos de rayas manta se reportan con mayor frecuencia de diciembre a mayo, aunque, como con toda la fauna salvaje, los encuentros dependen de la temporada y las condiciones naturales.',
    'tfaq.q8':'¿Se pueden ver rayas manta en las Islas Catalinas?',
    'tfaq.a8':'Las Islas Catalinas son un lugar de avistamiento frecuentemente reportado para las rayas manta gigantes (Mobula birostris), la raya más grande del mundo, con una envergadura de hasta 8 metros según NOAA Fisheries. Los avistamientos a lo largo de la costa Pacífica de Costa Rica se reportan con mayor frecuencia de diciembre a mayo. Sus movimientos son rastreados por el proyecto Mantas Costa Rica, afiliado a la red internacional de investigación Manta Trust / MigraMar, mediante telemetría acústica y foto-identificación. Como con cualquier animal salvaje, un avistamiento nunca está garantizado en una inmersión concreta.',

    'tfaq.q9':'¿Se pueden ver ballenas cerca de Tamarindo, y cuál es la temporada de ballenas?',
    'tfaq.a9':'Según NOAA Fisheries, dos poblaciones distintas de ballenas jorobadas atraviesan las aguas de Costa Rica para reproducirse y parir: una del Pacífico Norte, presente de diciembre a marzo, y otra del hemisferio sur, presente de julio a mediados de noviembre, una de las migraciones más largas registradas para la especie. La actividad de ballenas es posible en aguas de Guanacaste durante gran parte del año, aunque los avistamientos son oportunistas y no forman parte del plan de ninguna inmersión.',
    'tfaq.q10':'¿Los avistamientos de ballenas o rayas manta están garantizados en una salida de buceo?',
    'tfaq.a10':'No. Las ballenas, las rayas manta y toda la fauna marina son animales salvajes, y los encuentros dependen de las condiciones naturales, el movimiento de los animales y la temporada. Los avistamientos se reportan con frecuencia en ciertas épocas del año, pero ningún centro de buceo puede garantizarlos en una salida concreta.',

    'tfaq.q11':'¿Cuál es la mejor época del año para bucear en Tamarindo?',
    'tfaq.a11':'La temporada seca, aproximadamente de diciembre a abril, suele traer un mar más tranquilo y se considera generalmente la época más popular para bucear. La temporada verde, de mayo a noviembre, trae más lluvia pero sigue siendo perfectamente practicable, con menos visitantes en el agua.',
    'tfaq.q12':'¿Cómo es la temperatura del agua en Tamarindo, y cambia durante el año?',
    'tfaq.a12':'La temperatura del agua en el golfo de Papagayo varía más de lo que muchos visitantes esperan. Las investigaciones sobre el sistema de surgencia (upwelling) de Papagayo muestran que este fenómeno estacional, impulsado por fuertes vientos en la temporada seca, trae a la superficie agua más fría y rica en nutrientes aproximadamente entre diciembre y abril, con una temperatura media alrededor de 23°C y caídas puntuales mucho más marcadas durante los picos de surgencia. El agua está más cálida, generalmente cerca de 28°C, de mayo a noviembre aproximadamente.',
    'tfaq.q13':'¿Qué causa la surgencia estacional cerca de Tamarindo, y cómo afecta al buceo?',
    'tfaq.a13':'El golfo de Papagayo es una de las pocas zonas de surgencia estacional impulsada por el viento en la región. Durante el invierno del hemisferio norte, fuertes vientos se canalizan por pasos del relieve montañoso centroamericano y empujan el agua superficial mar adentro, haciendo subir agua más fría y rica en nutrientes desde las profundidades. Este proceso, documentado por investigaciones oceanográficas en el golfo de Papagayo, contribuye a la productividad marina de la zona, junto con las aguas más frías de la temporada seca.',

    'tfaq.q14':'¿Realmente se pueden ver tiburones toro buceando en Costa Rica?',
    'tfaq.a14':'Sí. Las Bat Islands (Islas Murciélago), parte del Sector Marino del Área de Conservación Guanacaste del SINAC, son uno de los pocos lugares del mundo con encuentros regulares con tiburones toro. Un estudio publicado en la Revista de Biología Tropical documentó un alto índice de residencia de tiburones toro en el sitio de buceo de San Pedrillo, dentro de este archipiélago, confirmando que se trata de un sitio de agregación importante para la especie.',
    'tfaq.q15':'¿Cuál es la mejor época para bucear en las Bat Islands?',
    'tfaq.a15':'Las salidas a las Bat Islands se realizan generalmente de mayo a noviembre.',
    'tfaq.q16':'¿Hay que estar certificado para bucear con tiburones toro?',
    'tfaq.a16':'Sí. El buceo en las Bat Islands está reservado a buzos certificados Advanced Open Water, debido a la profundidad y las corrientes del sitio.',
    'tfaq.q17':'¿Son peligrosas estas inmersiones con tiburones toro?',
    'tfaq.a17':'Estas inmersiones requieren un nivel de certificación confirmado debido a la profundidad y las corrientes del sitio, pero nunca se ha registrado un incidente con estos tiburones en este lugar; los encuentros son sin alimentación y los animales suelen verse a una distancia respetuosa.',

    'tfaq.q18':'¿Necesito experiencia para probar el buceo en Tamarindo?',
    'tfaq.a18':'No. La experiencia Discover Scuba Diving no requiere certificación ni experiencia previa.',
    'tfaq.q19':'¿Qué es el Discover Scuba Diving, y cómo funciona?',
    'tfaq.a19':'Comienza con una charla privada con un instructor PADI, seguida de dos inmersiones guiadas de aproximadamente 45 minutos a 1 hora cada una.',
    'tfaq.q20':'¿Cuál es la edad mínima para probar el buceo?',
    'tfaq.a20':'10 años, tanto para el Discover Scuba Diving como para el curso Open Water Diver.',
    'tfaq.q21':'¿Hay que ser buen nadador para bucear?',
    'tfaq.a21':'No se requiere ningún nivel de natación competitivo; basta con sentirse cómodo en el agua.',
    'tfaq.q22':'¿A qué profundidad llegan los principiantes en una primera inmersión?',
    'tfaq.a22':'La profundidad se mantiene dentro de lo que resulte cómodo para el buzo, ajustada continuamente por el instructor en lugar de seguir un objetivo fijo.',

    'tfaq.q23':'¿Cuánto dura el curso PADI Open Water Diver?',
    'tfaq.a23':'3 días: teoría y piscina, seguidos de 4 inmersiones en mar abierto en las Islas Catalinas.',
    'tfaq.q24':'¿Cuánto cuesta el curso Open Water Diver?',
    'tfaq.a24':'El curso empieza en $540.',
    'tfaq.q25':'¿Qué incluye el precio del curso Open Water Diver?',
    'tfaq.a25':'El e-learning, las tasas de certificación PADI, todo el equipo, y snacks y bebidas.',
    'tfaq.q26':'¿Qué es el curso Advanced Open Water Diver, y para quién es?',
    'tfaq.a26':'Está pensado para buzos ya certificados como Open Water Diver que quieren ganar confianza y ampliar su límite de profundidad a 30 m, a través de 5 inmersiones de aventura.',
    'tfaq.q27':'¿Cuánto cuesta el curso Advanced Open Water?',
    'tfaq.a27':'El curso empieza en $500 y puede completarse en 2 o 3 días.',
    'tfaq.q28':'¿Cuál es la diferencia entre Open Water y Advanced Open Water?',
    'tfaq.a28':'Open Water Diver es la certificación de entrada, con una profundidad máxima de 18 m. Advanced Open Water amplía estas habilidades con inmersiones obligatorias de Deep y Navigation, además de especialidades opcionales, y extiende el límite a 30 m.',
    'tfaq.q29':'¿Puedo hacer el e-learning de PADI antes de llegar a Costa Rica?',
    'tfaq.a29':'Sí, e incluso se recomienda para ganar tiempo una vez en el destino.',

    'tfaq.q30':'¿Es segura la práctica del buceo?',
    'tfaq.a30':'El buceo es una actividad segura cuando se practica siguiendo los protocolos de formación estándar, por lo que se exige un formulario médico y la supervisión de un instructor PADI certificado en cada curso.',
    'tfaq.q31':'¿Necesito un formulario médico para bucear?',
    'tfaq.a31':'Sí, para los cursos Open Water y Advanced Open Water, que debe completarse antes de comenzar el curso.',
    'tfaq.q32':'¿Puedo bucear si tengo asma?',
    'tfaq.a32':'En muchos casos sí, si está bien controlada, pero se requiere autorización médica; conviene consultarlo con un médico antes del viaje.',
    'tfaq.q33':'¿Puedo bucear si uso lentes?',
    'tfaq.a33':'No directamente con lentes, ya que no caben bajo la máscara, pero los lentes de contacto o una máscara con corrección óptica funcionan muy bien.',
    'tfaq.q34':'¿Qué pasa si no logro igualar la presión en mis oídos?',
    'tfaq.a34':'Te detienes, subes un poco y lo intentas de nuevo con suavidad en lugar de forzar; los instructores acompañan a los buzos nuevos paso a paso en esto.',
    'tfaq.q35':'¿Puedo marearme en el barco?',
    'tfaq.a35':'Es posible en condiciones de mar agitado; se dan indicaciones antes de zarpar y los trayectos a los sitios locales son cortos.',
    'tfaq.q36':'¿Hay riesgo de tiburones peligrosos al bucear en Costa Rica?',
    'tfaq.a36':'Los incidentes con tiburones son extremadamente raros, y los encuentros con tiburones toro en las Bat Islands ocurren sin ningún tipo de alimentación, a una distancia respetuosa.',

    'tfaq.q37':'¿Cómo reservo una inmersión con Salty Horizon?',
    'tfaq.a37a':'A través del','tfaq.a37link':'formulario de reserva','tfaq.a37b':'de este sitio, confirmado personalmente por WhatsApp.',
    'tfaq.h8intro1':'Salty Horizon enseña las certificaciones PADI Open Water Diver y Advanced Open Water Diver en Tamarindo — consulta la','tfaq.h8introLink':'página completa de cursos PADI','tfaq.h8intro2':'para horarios y requisitos.',
    'tfaq.h11intro1':'Para quienes no bucean o quieren un día a medida en el mar, consulta la página completa de','tfaq.h11introLink':'Charters privados',
    'tfaq.q38':'¿Cuál es la política de cancelación?',
    'tfaq.a38':"Las cancelaciones siguen una escala decreciente: reembolso del 100 % si la salida se cancela por mal tiempo o por no alcanzar el mínimo de 3 personas, y reembolso del 100 % para cancelaciones recibidas 7 días o más antes de la salida. El reembolso baja al 50 % entre 3 y 6 días antes, y al 0 % dentro de las 48 horas previas, si el cliente falta a la salida confirmada, o si no cumple los requisitos indicados (condición médica, aptitud física, nivel de certificación).",
    'tfaq.q39':'¿Las inmersiones son privadas, o en grupos grandes?',
    'tfaq.a39':'Siempre privadas o en grupos muy pequeños, a tu ritmo.',
    'tfaq.q40':'¿Hablan inglés, francés y español?',
    'tfaq.a40':'Sí. Camille y Julien son trilingües y guían en los tres idiomas.',
    'tfaq.q41':'¿Qué debo llevar el día de mi inmersión?',
    'tfaq.a41':'Traje de baño y toalla; todo el equipo de buceo está incluido.',

    'tfaq.q42':'¿Ofrecen snorkel para quienes no bucean?',
    'tfaq.a42':'Sí, sesiones privadas de snorkel, dos salidas de 45 minutos a 1 hora, desde $80.',
    'tfaq.q43':'¿Puedo reservar un charter privado en barco?',
    'tfaq.a43':'Sí, un día en el mar totalmente personalizado que combina buceo, snorkel, paddle, e-foil y jet ski.',
    'tfaq.q44':'¿Qué incluye un charter privado?',
    'tfaq.a44':'Un itinerario flexible construido según lo que quieras hacer en el agua, organizado para tu grupo.',

    'contact.eyebrow':'Contáctanos',
    'contact.title':'Planeemos tu inmersión',
    'contact.lead':'Preguntas, peticiones a medida o grupos grandes, con gusto, en español, inglés o francés.',
    'contact.locT':'Ubicación','contact.loc':'Playa Langosta, Tamarindo, Costa Rica',
    'contact.phoneT':'WhatsApp','contact.emailT':'Correo','contact.instaT':'Instagram','contact.hoursT':'Idiomas','contact.hours':'English · Français · Español',

    'footer.tagline':'Buceo privado y personalizado en Tamarindo, Costa Rica. Calidad antes que cantidad, cada inmersión pensada para ti.',
    'footer.explore':'Explorar','footer.contactH':'Contacto','footer.rights':'Todos los derechos reservados.','footer.made':'Diseñado para el océano.',
    'footer.cancelH':'Política de cancelación',
    'footer.cancel1':'Reembolso del 100 % si cancelamos por condiciones climáticas o si no se alcanza el mínimo de participantes (3).',
    'footer.cancel2':'Reembolso del 100 % en cancelaciones recibidas 7 días o más antes de la hora de inicio del tour.',
    'footer.cancel3':'Reembolso del 50 % en cancelaciones recibidas entre 3 y 6 días antes de la hora de inicio del tour.',
    'footer.cancel4':'Sin reembolso en cancelaciones recibidas dentro de las 48 horas previas a la hora de inicio del tour.',
    'footer.cancel5':'Sin reembolso si el cliente no se presenta a la salida de un tour confirmado.',
    'footer.cancel6':'Sin reembolso si el cliente no cumple con los requisitos descritos en el tour (por ejemplo: condición médica, aptitud física, nivel de certificación).',

    'exp.page.h1':'Experiencias',
    'exp.page.intro':'100 % privado, 100 % flexible. Gracias a alianzas de confianza con centros seleccionados, adaptamos lugares, horarios y formatos a ti, y cada salida incluye fotos y videos sin editar.',
    'exp.incl.dives':'inmersiones guiadas','exp.incl.gear':'Todo el equipo de buceo incluido','exp.incl.snacks':'Snacks y bebidas incluidos','exp.incl.private':'Experiencia 100 % privada','exp.incl.photos':'Fotos y videos incluidos','exp.incl.pool':'Sesión privada en piscina incluida','exp.incl.certonly':'Solo para buceadores certificados','exp.incl.advancedOnly':'Solo para buceadores Advanced Open Water',
    'exp.discover.faqLink':'Preguntas frecuentes sobre el buceo para principiantes','exp.catalinas.faqLink':'Más información sobre el buceo en las Islas Catalinas','exp.bat.faqLink':'Preguntas sobre el buceo con tiburones toro en las Bat Islands',
    'cta.learn':'Saber más',
    'exp.incl.age10':'10 años en adelante','exp.incl.kids':'Divertido para niños','exp.incl.nocert':'Sin certificación necesaria',
    'dsd.pool':'Sesión en piscina en tu villa o en nuestras instalaciones la tarde anterior a las inmersiones (aprox. 2 horas) para practicar las técnicas y familiarizarte con el equipo',
    'dsd.tour':'Excursión de medio día (aprox. 6:45 – 12:00)',
    'dsd.sites':'2 puntos de buceo',
    'dsd.fit':'Los participantes deben estar médica y físicamente aptos para bucear.','dsd.fitLink':'Consulta la declaración del participante DSD',
    'dsd.private':'Grupos privados','dsd.photos':'Fotos y videos incluidos','dsd.transport':'Transporte posible',
    'charters.h1':'Charters privados',
    'charters.lead':'Tu día en el mar, exactamente como lo quieres.',
    'charters.intro':'Privatiza un bote desde Tamarindo y reúne todo lo que amas del océano en un día a medida. Buceo, snorkel o simplemente navegar por la costa: el día se construye por completo en torno a ti y tu grupo.',
    'charters.f1t':'Buceo y snorkel','charters.f1d':'Bucea o haz snorkel en los mejores puntos de la costa de Guanacaste.',
    'charters.f2t':'Juguetes acuáticos','charters.f2d':'Paddle, e-foil y jet ski para los más aventureros.',
    'charters.f3t':'Hecho para ti','charters.f3d':'Itinerario flexible, tu música, tu ritmo, tu gente.',
    'charters.cta':'Organizar mi charter por WhatsApp',
    'charters.book':'Solicitar un charter privado',
    'wa.charter':'¡Hola Salty Horizon! Me gustaría organizar un CHARTER PRIVADO desde Tamarindo. ¿Podrían indicarme disponibilidad y precios?',
    'wa.aowInfo':'¡Hola Salty Horizon! Me gustaría tener más información sobre el curso Advanced Open Water Diver.',
    'wa.owInfo':'¡Hola Salty Horizon! Me gustaría tener más información sobre el curso Open Water Diver.'
  }
};

let LANG = 'en';
const t = (k)=> (I18N[LANG] && I18N[LANG][k]) || (I18N.en[k] || k);

function applyLang(lang){
  if(!I18N[lang]) lang='en';
  LANG = lang;
  document.documentElement.lang = lang;
  try{ localStorage.setItem('sh_lang', lang); }catch(e){}
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ el.setAttribute('placeholder', t(el.dataset.i18nPh)); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{ el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('.lang button').forEach(b=> b.classList.toggle('active', b.dataset.lang===lang));
}

/* ---------------- Init ---------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  // language
  let saved='en';
  try{ saved = localStorage.getItem('sh_lang') || (navigator.language||'en').slice(0,2); }catch(e){}
  if(!I18N[saved]) saved='en';
  applyLang(saved);
  document.querySelectorAll('.lang button').forEach(b=> b.addEventListener('click', ()=>applyLang(b.dataset.lang)));

  // re-align to the URL hash once the whole page (images, fonts, translated
  // text) has finished loading and settled — page content loading after the
  // browser's initial anchor jump shifts section heights and throws it off.
  // Scroll instantly (bypassing the global smooth scroll-behavior) so it
  // doesn't visibly animate past the target on arrival.
  if(location.hash){
    const landOnHash=()=>{
      const target=document.querySelector(location.hash);
      if(!target) return;
      const prevBehavior=document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior='auto';
      target.scrollIntoView();
      document.documentElement.style.scrollBehavior=prevBehavior;
    };
    window.addEventListener('load', landOnHash);
    setTimeout(landOnHash, 400);
  }

  // same-page anchor links (nav, "Meet the team", hero CTAs...): clicking
  // one further up the page scrolls past lazy-loaded images (gallery, etc.)
  // that have no reserved height, so they grow mid-scroll and the smooth
  // scroll animation lands short of the target. Re-align once it settles.
  document.addEventListener('click', (e)=>{
    const a=e.target.closest('a[href^="#"]');
    if(!a || a.getAttribute('href').length<2) return;
    const target=document.querySelector(a.getAttribute('href'));
    if(target) setTimeout(()=>target.scrollIntoView(), 700);
  });

  // header scroll state
  const header=document.querySelector('.header');
  const topBtn=document.querySelector('.fab .top');
  const onScroll=()=>{
    const y=window.scrollY;
    if(header) header.classList.toggle('scrolled', y>40);
    if(topBtn) topBtn.classList.toggle('show', y>600);
  };
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // mobile nav
  const burger=document.querySelector('.burger');
  const links=document.querySelector('.nav-links');
  if(burger&&links){
    burger.addEventListener('click', ()=>{ burger.classList.toggle('open'); links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{ burger.classList.remove('open'); links.classList.remove('open'); }));
  }

  // reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.14});
  document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));

  // counters
  const counters=document.querySelectorAll('[data-count]');
  if(counters.length){
    const cio=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(!e.isIntersecting) return;
        const el=e.target, target=parseFloat(el.dataset.count), suf=el.dataset.suffix||'';
        const dec=(target%1!==0)?1:0; let cur=0; const step=target/55;
        const tick=()=>{ cur+=step; if(cur>=target){ el.textContent=target.toFixed(dec)+suf; } else { el.textContent=cur.toFixed(dec)+suf; requestAnimationFrame(tick);} };
        tick(); cio.unobserve(el);
      });
    },{threshold:.5});
    counters.forEach(c=>cio.observe(c));
  }

  // gallery lightbox
  const lb=document.querySelector('.lightbox');
  if(lb){
    const lbImg=lb.querySelector('img');
    const figs=[...document.querySelectorAll('.gallery figure')];
    const srcs=figs.map(f=>f.dataset.full || f.querySelector('img').src);
    let idx=0;
    const show=(i)=>{ idx=(i+srcs.length)%srcs.length; lbImg.src=srcs[idx]; };
    const open=(i)=>{ show(i); lb.classList.add('open'); document.body.style.overflow='hidden'; };
    const close=()=>{ lb.classList.remove('open'); document.body.style.overflow=''; };
    figs.forEach((f,i)=>f.addEventListener('click',()=>open(i)));
    lb.querySelector('.lb-next').addEventListener('click',e=>{e.stopPropagation();show(idx+1);});
    lb.querySelector('.lb-prev').addEventListener('click',e=>{e.stopPropagation();show(idx-1);});
    lb.querySelector('.lb-close').addEventListener('click',close);
    lb.addEventListener('click',e=>{ if(e.target===lb) close(); });
    document.addEventListener('keydown',e=>{ if(!lb.classList.contains('open'))return; if(e.key==='Escape')close(); if(e.key==='ArrowRight')show(idx+1); if(e.key==='ArrowLeft')show(idx-1); });
  }

  // testimonials carousel
  const slides=[...document.querySelectorAll('.tslide')];
  const dotsWrap=document.querySelector('.tdots');
  if(slides.length && dotsWrap){
    let cur=0, timer;
    slides.forEach((s,i)=>{ const b=document.createElement('button'); b.addEventListener('click',()=>{go(i);reset();}); dotsWrap.appendChild(b); });
    const dots=[...dotsWrap.children];
    const go=(i)=>{ slides[cur].classList.remove('active'); dots[cur].classList.remove('active'); cur=(i+slides.length)%slides.length; slides[cur].classList.add('active'); dots[cur].classList.add('active'); };
    const reset=()=>{ clearInterval(timer); timer=setInterval(()=>go(cur+1),6000); };
    go(0); reset();
  }

  // booking -> WhatsApp
  const bookForm=document.querySelector('#bookForm');
  if(bookForm){
    bookForm.addEventListener('submit',(e)=>{
      e.preventDefault();
      const optEl=bookForm.experience.selectedOptions[0];
      const exp=(optEl && optEl.value) ? optEl.textContent.trim() : '';
      if(!exp){ alert(t('book.alert')); bookForm.experience.focus(); return; }
      const date=bookForm.date.value, people=bookForm.people.value, name=bookForm.name.value, note=bookForm.note.value;
      const L={en:{hi:'Hi Salty Horizon! I would like to book a dive.',exp:'Experience',date:'Preferred date',people:'People',name:'Name',note:'Notes'},
               fr:{hi:'Bonjour Salty Horizon ! Je souhaite réserver une plongée.',exp:'Expérience',date:'Date souhaitée',people:'Personnes',name:'Nom',note:'Remarques'},
               es:{hi:'¡Hola Salty Horizon! Quiero reservar una inmersión.',exp:'Experiencia',date:'Fecha',people:'Personas',name:'Nombre',note:'Notas'}}[LANG];
      let msg=L.hi+'\n\n'+L.exp+': '+exp;
      if(date) msg+='\n'+L.date+': '+date;
      if(people) msg+='\n'+L.people+': '+people;
      if(name) msg+='\n'+L.name+': '+name;
      if(note) msg+='\n'+L.note+': '+note;
      const waUrl='https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(msg);
      const waLink=document.createElement('a');waLink.href=waUrl;waLink.target='_blank';waLink.rel='noopener';document.body.appendChild(waLink);waLink.click();waLink.remove();
    });
  }

  // charter WhatsApp buttons
  document.querySelectorAll('[data-wa-charter]').forEach(b=>{
    b.addEventListener('click',(e)=>{ e.preventDefault(); window.open('https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(t('wa.charter')),'_blank'); });
  });

  // Course "more info" WhatsApp buttons
  document.querySelectorAll('[data-wa-aowinfo]').forEach(b=>{
    b.addEventListener('click',(e)=>{ e.preventDefault(); window.open('https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(t('wa.aowInfo')),'_blank'); });
  });
  document.querySelectorAll('[data-wa-owinfo]').forEach(b=>{
    b.addEventListener('click',(e)=>{ e.preventDefault(); window.open('https://wa.me/'+WA_PHONE+'?text='+encodeURIComponent(t('wa.owInfo')),'_blank'); });
  });

  // generic "book this experience" links: prefill select + scroll
  document.querySelectorAll('[data-book]').forEach(el=>{
    el.addEventListener('click',(e)=>{
      const val=el.dataset.book;
      const sel=document.querySelector('#bookForm [name="experience"]');
      if(sel){ e.preventDefault(); sel.value=val; document.querySelector('#book').scrollIntoView({behavior:'smooth'}); }
    });
  });

  // learn more toggles (experiences)
  document.querySelectorAll('[data-learnmore]').forEach(b=>{
    b.addEventListener('click',()=>{ const p=document.getElementById(b.dataset.learnmore); if(p){ p.hidden=!p.hidden; b.classList.toggle('is-open'); } });
  });

  // course schedule toggle (mobile)
  document.querySelectorAll('[data-schedule-toggle]').forEach(b=>{
    b.addEventListener('click',()=>{
      const content=b.parentElement.querySelector('.schedule-content');
      if(!content) return;
      content.hidden=!content.hidden;
      b.classList.toggle('is-open');
      b.setAttribute('aria-expanded', String(!content.hidden));
    });
  });

  // FAQ accordion
  document.querySelectorAll('[data-faq-toggle]').forEach(b=>{
    b.addEventListener('click',()=>{
      const item=b.closest('.faq-item');
      const content=item ? item.querySelector('.faq-a') : b.parentElement.querySelector('.faq-a');
      if(!content) return;
      content.hidden=!content.hidden;
      b.classList.toggle('is-open');
      b.setAttribute('aria-expanded', String(!content.hidden));
    });
  });

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});
