/* ============================================================
   SALTY HORIZON — interactions, i18n (EN/FR/ES), booking
   ============================================================ */
const WA_PHONE = '50687759641'; // WhatsApp number, international format

/* ---------------- Translations ---------------- */
const I18N = {
  en:{
    'nav.experiences':'Experiences','nav.charters':'Private Charters','nav.about':'About',
    'nav.gallery':'Gallery','nav.reviews':'Reviews','nav.contact':'Contact','cta.book':'Book a dive',

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
    'price.from':'from','price.pp':'per person','price.request':'on request',

    'card.intro.t':'Intro to Scuba (Pool)','card.intro.d':'Experience the sensations of scuba diving during a pool introduction, ideal for a safe first approach. With an instructor by your side, you’ll learn to use the equipment, breathe underwater and master the basics of diving in a calm, secure environment. A fun and reassuring experience, perfect before heading out to sea.',
    'card.discover.t':'Discover Scuba Diving','card.discover.d':'Discover scuba diving with the Discover Scuba Diving program, a beginner-friendly introduction with no prior certification required. After a briefing with your instructor, enjoy two dives of about 45 minutes to 1 hour to explore the seabed and observe the richness of Costa Rica’s marine life: tropical fish, sea turtles, rays, moray eels and, depending on the season, the majestic manta rays. An unforgettable first experience, in complete safety.',
    'card.catalinas.t':'Fun Dive · Las Catalinas','card.catalinas.d':'Two private guided dives at the Las Catalinas Islands, one of Costa Rica’s most iconic dive destinations. Explore the volcanic rock formations and encounter incredible marine life including giant manta rays (seasonal), eagle rays, reef sharks, sea turtles, schools of tropical fish, and countless macro species. Perfect for certified divers looking for unforgettable underwater adventures.',
    'card.bat.t':'Fun Dive · Bat Islands','card.bat.d':'The Bat Islands (Islas Murciélagos), off Santa Rosa National Park in Guanacaste, offer one of Costa Rica’s most legendary dives. Accessible from May to November, they let experienced divers observe the impressive bull sharks in their natural habitat. An intense experience in the heart of exceptional marine life.',
    'card.snorkel.t':'Snorkeling','card.snorkel.d':'Discover the seabed of the Catalina Islands during two snorkeling sessions of 45 minutes to 1 hour, accompanied by a guide. Explore crystal-clear waters home to tropical fish, sea turtles, rays and, depending on the season, the majestic manta rays. An activity accessible to everyone, ideal for observing the richness of Costa Rica’s marine life.',
    'card.courses.t':'PADI Courses','card.courses.d':'Develop your skills and progress at your own pace with our PADI courses, from Open Water Diver to Rescue Diver. Whether you want to earn your first certification, gain more independence or deepen your knowledge, our instructors guide you throughout your training to make you a more confident, skilled and experienced diver.',
    'label.beginner':'Beginner','label.popular':'Most popular','label.advanced':'Advanced','label.season':'May–Nov','label.allLevels':'All levels','label.certified':'Certified',

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
    'book.perk1':'Free cancellation up to 24h before','book.perk2':'Photos & videos included','book.perk3':'We reply within a few hours',
    'book.step1':'1 · Pick','book.step2':'2 · Send','book.step3':'3 · We confirm',
    'book.alert':'Please choose an experience first.',

    'contact.eyebrow':'Get in touch',
    'contact.title':'Let’s plan your dive',
    'contact.lead':'Questions, custom requests or large groups, we are happy to help in English, French or Spanish.',
    'contact.locT':'Location','contact.loc':'Playa Langosta, Tamarindo, Costa Rica',
    'contact.phoneT':'WhatsApp','contact.emailT':'Email','contact.hoursT':'Languages','contact.hours':'English · Français · Español',

    'footer.tagline':'Private, personalized scuba diving in Tamarindo, Costa Rica. Quality over quantity, every dive designed around you.',
    'footer.explore':'Explore','footer.contactH':'Contact','footer.rights':'All rights reserved.','footer.made':'Designed for the ocean.',

    /* subpages */
    'exp.page.h1':'Experiences',
    'exp.page.intro':'Fully private, fully flexible. Thanks to trusted partnerships with selected dive centers, we adapt locations, schedules and formats to you, and every session includes unedited photos and videos.',
    'exp.incl.dives':'guided dives','exp.incl.gear':'All scuba equipment included','exp.incl.snacks':'Snacks & drinks included','exp.incl.private':'Fully private experience','exp.incl.photos':'Photos & videos included','exp.incl.pool':'Private pool session included','exp.incl.certonly':'For certified divers only','exp.incl.advancedOnly':'For Advanced Open Water divers only',
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
    'wa.charter':'Hi Salty Horizon! I would like to organize a PRIVATE CHARTER from Tamarindo. Could you share availability and pricing?'
  },

  fr:{
    'nav.experiences':'Expériences','nav.charters':'Charters privés','nav.about':'À propos',
    'nav.gallery':'Galerie','nav.reviews':'Avis','nav.contact':'Contact','cta.book':'Réserver',

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
    'price.from':'dès','price.pp':'par personne','price.request':'sur demande',

    'card.intro.t':'Initiation Scuba (piscine)','card.intro.d':'Découvrez les sensations de la plongée sous-marine lors d’une initiation en piscine, idéale pour une première approche en toute sécurité. Accompagné d’un instructeur, vous apprendrez à utiliser l’équipement, à respirer sous l’eau et à maîtriser les bases de la plongée dans un environnement calme et sécurisé. Une expérience ludique et rassurante, parfaite avant de se lancer en mer.',
    'card.discover.t':'Baptême de plongée','card.discover.d':'Découvrez la plongée sous-marine avec le Discover Scuba Diving, une initiation accessible aux débutants, sans certification préalable. Après un briefing avec votre instructeur, profitez de deux plongées d’environ 45 minutes à 1 heure pour explorer les fonds marins et observer la richesse de la vie marine du Costa Rica : poissons tropicaux, tortues marines, raies, murènes et, selon la saison, les majestueuses raies manta. Une première expérience inoubliable, en toute sécurité.',
    'card.catalinas.t':'Fun Dive · Las Catalinas','card.catalinas.d':'Deux plongées privées guidées aux îles Las Catalinas, l’une des destinations de plongée les plus emblématiques du Costa Rica. Explorez les formations rocheuses volcaniques et rencontrez une vie marine incroyable : raies mantas géantes (selon la saison), raies aigles, requins de récif, tortues de mer, bancs de poissons tropicaux et une multitude d’espèces macro. Parfait pour les plongeurs certifiés en quête d’aventures sous-marines inoubliables.',
    'card.bat.t':'Fun Dive · Bat Islands','card.bat.d':'Bat Islands (Islas Murciélagos), au large du parc national Santa Rosa (Guanacaste), offrent l’une des plongées les plus mythiques du Costa Rica. Accessibles de mai à novembre, elles permettent aux plongeurs expérimentés d’observer les impressionnants requins bouledogues dans leur habitat naturel. Une expérience intense au cœur d’une vie marine exceptionnelle.',
    'card.snorkel.t':'Snorkeling','card.snorkel.d':'Découvrez les fonds marins des îles Catalina lors de deux sessions de snorkeling de 45 minutes à 1 heure, accompagnées d’un guide. Explorez des eaux cristallines où évoluent poissons tropicaux, tortues marines, raies et, selon la saison, les majestueuses raies manta. Une activité accessible à tous, idéale pour observer la richesse de la vie marine du Costa Rica.',
    'card.courses.t':'Cours PADI','card.courses.d':'Développez vos compétences et progressez à votre rythme grâce à nos formations PADI, du Open Water Diver au Rescue Diver. Que vous souhaitiez obtenir votre première certification, gagner en autonomie ou renforcer vos connaissances, nos instructeurs vous accompagnent tout au long de votre apprentissage pour faire de vous un plongeur plus confiant, compétent et expérimenté.',
    'label.beginner':'Débutant','label.popular':'Le plus prisé','label.advanced':'Confirmé','label.season':'Mai–Nov','label.allLevels':'Tous niveaux','label.certified':'Certifié',

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
    'book.perk1':'Annulation gratuite jusqu’à 24h avant','book.perk2':'Photos & vidéos incluses','book.perk3':'Réponse en quelques heures',
    'book.step1':'1 · Choisir','book.step2':'2 · Envoyer','book.step3':'3 · On confirme',
    'book.alert':'Veuillez d’abord choisir une expérience.',

    'contact.eyebrow':'Contactez-nous',
    'contact.title':'Planifions votre plongée',
    'contact.lead':'Questions, demandes sur mesure ou grands groupes, avec plaisir, en français, anglais ou espagnol.',
    'contact.locT':'Lieu','contact.loc':'Playa Langosta, Tamarindo, Costa Rica',
    'contact.phoneT':'WhatsApp','contact.emailT':'E-mail','contact.hoursT':'Langues','contact.hours':'English · Français · Español',

    'footer.tagline':'Plongée sous-marine privée et personnalisée à Tamarindo, Costa Rica. La qualité avant la quantité, chaque plongée pensée pour vous.',
    'footer.explore':'Explorer','footer.contactH':'Contact','footer.rights':'Tous droits réservés.','footer.made':'Conçu pour l’océan',

    'exp.page.h1':'Expériences',
    'exp.page.intro':'100 % privé, 100 % flexible. Grâce à nos partenariats de confiance avec des centres sélectionnés, nous adaptons lieux, horaires et formats à vous, et chaque sortie inclut des photos et vidéos non retouchées.',
    'exp.incl.dives':'plongées guidées','exp.incl.gear':'Tout l’équipement de plongée inclus','exp.incl.snacks':'Snacks & boissons inclus','exp.incl.private':'Expérience 100 % privée','exp.incl.photos':'Photos & vidéos incluses','exp.incl.pool':'Séance privée en piscine incluse','exp.incl.certonly':'Réservé aux plongeurs certifiés','exp.incl.advancedOnly':'Réservé aux plongeurs Advanced Open Water',
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
    'wa.charter':'Bonjour Salty Horizon ! J’aimerais organiser un CHARTER PRIVÉ au départ de Tamarindo. Pouvez-vous m’indiquer les disponibilités et tarifs ?'
  },

  es:{
    'nav.experiences':'Experiencias','nav.charters':'Charters privados','nav.about':'Nosotros',
    'nav.gallery':'Galería','nav.reviews':'Reseñas','nav.contact':'Contacto','cta.book':'Reservar',

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
    'price.from':'desde','price.pp':'por persona','price.request':'a consultar',

    'card.intro.t':'Iniciación al buceo (piscina)','card.intro.d':'Descubre las sensaciones del buceo en una iniciación en piscina, ideal para un primer contacto con total seguridad. Acompañado por un instructor, aprenderás a usar el equipo, a respirar bajo el agua y a dominar las bases del buceo en un entorno tranquilo y seguro. Una experiencia divertida y tranquilizadora, perfecta antes de lanzarte al mar.',
    'card.discover.t':'Bautismo de buceo','card.discover.d':'Descubre el buceo con el programa Discover Scuba Diving, una iniciación accesible para principiantes, sin certificación previa. Tras un briefing con tu instructor, disfruta de dos inmersiones de unos 45 minutos a 1 hora para explorar los fondos marinos y observar la riqueza de la vida marina de Costa Rica: peces tropicales, tortugas marinas, rayas, morenas y, según la temporada, las majestuosas mantarrayas. Una primera experiencia inolvidable, con total seguridad.',
    'card.catalinas.t':'Fun Dive · Las Catalinas','card.catalinas.d':'Dos inmersiones privadas guiadas en las Islas Las Catalinas, uno de los destinos de buceo más icónicos de Costa Rica. Explora las formaciones rocosas volcánicas y encuentra una vida marina increíble: mantarrayas gigantes (según la temporada), rayas águila, tiburones de arrecife, tortugas marinas, cardúmenes de peces tropicales y un sinfín de especies macro. Perfecto para buceadores certificados que buscan aventuras submarinas inolvidables.',
    'card.bat.t':'Fun Dive · Bat Islands','card.bat.d':'Las Islas Murciélagos, frente al Parque Nacional Santa Rosa (Guanacaste), ofrecen una de las inmersiones más míticas de Costa Rica. Accesibles de mayo a noviembre, permiten a los buzos experimentados observar los impresionantes tiburones toro en su hábitat natural. Una experiencia intensa en el corazón de una vida marina excepcional.',
    'card.snorkel.t':'Snorkeling','card.snorkel.d':'Descubre los fondos marinos de las Islas Catalinas durante dos sesiones de snorkel de 45 minutos a 1 hora, acompañado por un guía. Explora aguas cristalinas donde nadan peces tropicales, tortugas marinas, rayas y, según la temporada, las majestuosas mantarrayas. Una actividad accesible para todos, ideal para observar la riqueza de la vida marina de Costa Rica.',
    'card.courses.t':'Cursos PADI','card.courses.d':'Desarrolla tus habilidades y progresa a tu propio ritmo con nuestros cursos PADI, desde Open Water Diver hasta Rescue Diver. Ya sea que quieras obtener tu primera certificación, ganar autonomía o ampliar tus conocimientos, nuestros instructores te acompañan durante toda tu formación para convertirte en un buceador más seguro, competente y experimentado.',
    'label.beginner':'Principiante','label.popular':'Más popular','label.advanced':'Avanzado','label.season':'Mayo–Nov','label.allLevels':'Todos los niveles','label.certified':'Certificado',

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
    'book.perk1':'Cancelación gratis hasta 24h antes','book.perk2':'Fotos y videos incluidos','book.perk3':'Respondemos en pocas horas',
    'book.step1':'1 · Elige','book.step2':'2 · Envía','book.step3':'3 · Confirmamos',
    'book.alert':'Por favor elige una experiencia primero.',

    'contact.eyebrow':'Contáctanos',
    'contact.title':'Planeemos tu inmersión',
    'contact.lead':'Preguntas, peticiones a medida o grupos grandes, con gusto, en español, inglés o francés.',
    'contact.locT':'Ubicación','contact.loc':'Playa Langosta, Tamarindo, Costa Rica',
    'contact.phoneT':'WhatsApp','contact.emailT':'Correo','contact.hoursT':'Idiomas','contact.hours':'English · Français · Español',

    'footer.tagline':'Buceo privado y personalizado en Tamarindo, Costa Rica. Calidad antes que cantidad, cada inmersión pensada para ti.',
    'footer.explore':'Explorar','footer.contactH':'Contacto','footer.rights':'Todos los derechos reservados.','footer.made':'Diseñado para el océano.',

    'exp.page.h1':'Experiencias',
    'exp.page.intro':'100 % privado, 100 % flexible. Gracias a alianzas de confianza con centros seleccionados, adaptamos lugares, horarios y formatos a ti, y cada salida incluye fotos y videos sin editar.',
    'exp.incl.dives':'inmersiones guiadas','exp.incl.gear':'Todo el equipo de buceo incluido','exp.incl.snacks':'Snacks y bebidas incluidos','exp.incl.private':'Experiencia 100 % privada','exp.incl.photos':'Fotos y videos incluidos','exp.incl.pool':'Sesión privada en piscina incluida','exp.incl.certonly':'Solo para buceadores certificados','exp.incl.advancedOnly':'Solo para buceadores Advanced Open Water',
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
    'wa.charter':'¡Hola Salty Horizon! Me gustaría organizar un CHARTER PRIVADO desde Tamarindo. ¿Podrían indicarme disponibilidad y precios?'
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

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});
