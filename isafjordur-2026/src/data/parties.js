export const topics = [
  { id: 'housing', name: 'Húsnæðismál' },
  { id: 'schools', name: 'Skólar og fjölskyldur' },
  { id: 'welfare', name: 'Velferð og eldri borgarar' },
  { id: 'economy', name: 'Fjármál og stjórnsýsla' },
  { id: 'jobs', name: 'Atvinnulíf, hafnir og nýsköpun' },
  { id: 'environment', name: 'Umhverfi, orka og skipulag' },
  { id: 'transport', name: 'Samgöngur og innviðir' },
  { id: 'culture', name: 'Menning, íþróttir og tómstundir' }
]

export const parties = [
  {
    id: 'framsokn',
    letter: 'B',
    list: 'B-listi',
    name: 'Framsókn og óháðir',
    shortName: 'Framsókn',
    logoText: 'xB',
    logoLabel: 'Framsókn og óháðir',
    color: '#178447',
    lightColor: '#e4f6e9',
    website: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer',
    manifestoUrl: 'https://framerusercontent.com/assets/8duIPh2HtzZMoGVwPzCEsqBKD3w.pdf',
    candidatesUrl: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer#frambo%C3%B0slisti',
    status: 'Stefnuskrá og framboðslisti tengd',
    summary: 'B-listi Framsóknar og óháðra leggur áherslu á að Ísafjarðarbær verði fjölskylduvænt, öflugt og vel rekið sveitarfélag með sterka grunnþjónustu, gott atvinnulíf og trausta innviði.',
    candidates: [
      'Kristján Þór Kristjánsson — hótelstjóri',
      'Elísabet Samúelsdóttir — fjármálastjóri',
      'Hannibal Hafberg — sjávarútvegsfræðingur',
      'Tinna Rún Snorradóttir — verkfræðingur',
      'Elísabet Margrét Jónasdóttir — bóndi og fjármálastjóri',
      'Guðni Páll Viktorsson — ferðaþjónn'
    ],
    policies: [
      { title: 'Traustur rekstur', text: 'Áhersla á ábyrga fjármálastjórn, forgangsröðun og að sveitarfélagið geti fjárfest í nauðsynlegum innviðum án þess að missa tök á rekstri.' },
      { title: 'Fjölskylduvænt samfélag', text: 'Vill styrkja skóla, leikskóla, íþróttir, tómstundir og þjónustu við barnafjölskyldur í öllum byggðakjörnum.' },
      { title: 'Húsnæði fyrir ólík æviskeið', text: 'Áhersla á aukið og fjölbreytt húsnæðisframboð fyrir ungt fólk, fjölskyldur og eldri íbúa.' },
      { title: 'Atvinnulíf og nýsköpun', text: 'Vill efla atvinnulíf, nýsköpun, ferðaþjónustu, sjávarútveg, orkutengd tækifæri og verðmætasköpun.' },
      { title: 'Samgöngur og byggðakjarnar', text: 'Leggur áherslu á traustar samgöngur, tengingar milli byggðakjarna og jafnt aðgengi íbúa að þjónustu.' }
    ],
    topics: {
      housing: 'Fjölbreytt húsnæði, lóðaframboð og búsetuúrræði fyrir ólík æviskeið.',
      schools: 'Sterkir skólar, leikskólar, tómstundir og þjónusta við barnafjölskyldur.',
      welfare: 'Öryggi, reisn og þjónusta fyrir eldri borgara og fjölskyldur.',
      economy: 'Ábyrg fjármálastjórn, agaður rekstur og skýr forgangsröðun.',
      jobs: 'Atvinnulíf, nýsköpun, hafnir, ferðaþjónusta og verðmætasköpun.',
      environment: 'Sjálfbær uppbygging, orkutækifæri og skýrt skipulag.',
      transport: 'Betri samgöngur milli byggðakjarna og til og frá svæðinu.',
      culture: 'Jöfn tækifæri barna til íþrótta, tónlistar og tómstunda óháð búsetu.'
    }
  },
  {
    id: 'vidreisn',
    letter: 'C',
    list: 'C-listi',
    name: 'Viðreisn',
    shortName: 'Viðreisn',
    logoText: 'C',
    logoLabel: 'Viðreisn',
    color: '#f58219',
    lightColor: '#fff0de',
    website: 'https://vidreisn.is/isafjardarbaer/',
    manifestoUrl: 'https://vidreisn.is/isafjardarbaer/stefnan/',
    candidatesUrl: 'https://vidreisn.is/isafjardarbaer/frambjodendur/',
    status: 'Stefna og frambjóðendur tengd',
    summary: 'C-listi Viðreisnar leggur áherslu á skýra sýn, jákvæða samvinnu, skólamál, gagnsæi, inngildingu og sveitarfélag sem virkar betur fyrir alla.',
    candidates: [
      'Frambjóðendalisti tengdur með heimild',
      'Bæta má inn nöfnum beint úr framboðslista Viðreisnar'
    ],
    policies: [
      { title: 'Skólamál í forgrunni', text: 'Áhersla á vel mannaða leikskóla, metnaðarfulla grunnskóla, tónlistarskóla, íþróttastarf og félagsmiðstöðvar sem mæta ólíkum þörfum.' },
      { title: 'Jákvæð samvinna', text: 'Vill halda áfram vinnubrögðum sem byggja á samtali, hlustun og málamiðlunum án hálfkáks.' },
      { title: 'Jafnt aðgengi að sérfræðiþjónustu', text: 'Vill efla aðkomu sérfræðinga í skólunum svo börn geti fengið stuðning í heimabyggð.' },
      { title: 'Nútímaleg stjórnsýsla', text: 'Áhersla á gagnsæi, skýra ferla og þjónustu sem íbúar skilja og geta treyst.' },
      { title: 'Reynsla og fjölbreyttur listi', text: 'Framboðið leggur áherslu á reynslumikið, traust og fjölbreytt fólk sem þekkir verkefnin.' }
    ],
    topics: {
      housing: 'Vill byggja samfélag sem virkar betur fyrir alla og styður áframhaldandi búsetu.',
      schools: 'Skólamál eru í forgrunni: leikskólar, grunnskólar, sérfræðiþjónusta og inngilding.',
      welfare: 'Jafnt aðgengi að þjónustu og fagleg nálgun gagnvart ólíkum þörfum íbúa.',
      economy: 'Ábyrg og gagnsæ meðferð fjármuna og skýr forgangsröðun.',
      jobs: 'Atvinnuþróun, fjölbreytt samfélag og sterkara sveitarfélag til framtíðar.',
      environment: 'Sjálfbærni og skýr sýn í uppbyggingu sveitarfélagsins.',
      transport: 'Góðir innviðir og aðgengi styðja þjónustu og byggðaþróun.',
      culture: 'Fjölbreytt íþróttastarf og félagsstarf fyrir ólíka aldurshópa.'
    }
  },
  {
    id: 'sjalfstaedisflokkur',
    letter: 'D',
    list: 'D-listi',
    name: 'Sjálfstæðisflokkurinn',
    shortName: 'Sjálfstæðisflokkur',
    logoText: 'xD',
    logoLabel: 'Sjálfstæðisflokkurinn',
    color: '#1f67c8',
    lightColor: '#eaf2ff',
    website: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/',
    manifestoUrl: 'https://xd.is/wp-content/uploads/2026/05/xd-stefnuskra-isafjardarbaer.pdf',
    candidatesUrl: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/',
    status: 'Stefnuskrá tengd',
    summary: 'D-listi Sjálfstæðisflokksins leggur áherslu á ábyrgan rekstur, öflugt atvinnulíf, hafnir, innviði, framkvæmdir og skilvirka stjórnsýslu.',
    candidates: [
      'Frambjóðendalisti tengdur með heimild',
      'Bæta má inn nöfnum beint úr framboðslista Sjálfstæðisflokksins'
    ],
    policies: [
      { title: 'Ábyrg fjármál', text: 'Áhersla á sterkan rekstur sveitarfélagsins, hagkvæmni og að fjármunir nýtist vel.' },
      { title: 'Atvinnulíf og verðmætasköpun', text: 'Vill styrkja atvinnulíf, hafnir og forsendur verðmætasköpunar í sveitarfélaginu.' },
      { title: 'Framkvæmdir og innviðir', text: 'Leggur áherslu á uppbyggingu innviða, skipulag og framkvæmdir sem bæta búsetuskilyrði.' },
      { title: 'Skólar og fjölskyldur', text: 'Vill tryggja góða grunnþjónustu fyrir börn, fjölskyldur og íbúa í öllum byggðakjörnum.' },
      { title: 'Skilvirk stjórnsýsla', text: 'Áhersla á hraðari afgreiðslu, skýra ábyrgð og þjónustulund í stjórnsýslu.' }
    ],
    topics: {
      housing: 'Uppbygging, framkvæmdir og skipulag sem styður búsetu.',
      schools: 'Sterk grunnþjónusta, skólar og fjölskylduvænt samfélag.',
      welfare: 'Hagkvæm þjónusta sveitarfélagsins með áherslu á árangur.',
      economy: 'Ábyrg fjármál, skilvirkni og forgangsröðun.',
      jobs: 'Atvinnulíf, hafnir, framkvæmdir og verðmætasköpun.',
      environment: 'Umhverfi, skipulag og framkvæmdir í samhengi við innviði.',
      transport: 'Samgöngur og hafnir sem lykill að atvinnu og búsetu.',
      culture: 'Íþrótta- og tómstundamál sem hluti af góðu samfélagi.'
    }
  },
  {
    id: 'midflokkurinn',
    letter: 'M',
    list: 'M-listi',
    name: 'Miðflokkurinn',
    shortName: 'Miðflokkurinn',
    logoText: 'M',
    logoLabel: 'Miðflokkurinn',
    color: '#7137a8',
    lightColor: '#f1e9fb',
    website: 'https://midflokkurinn.is/isafjordur',
    manifestoUrl: '',
    candidatesUrl: '',
    status: 'Gögn vantar',
    summary: 'M-listi Miðflokksins er með heimasíðu tengda, en í samantektinni vantar enn sérstaka stefnuskrá og frambjóðendalista fyrir Ísafjarðarbæ.',
    candidates: [
      'Frambjóðendalisti vantar í samantekt',
      'Bæta þarf inn þegar heimild liggur fyrir'
    ],
    policies: [
      { title: 'Gögn vantar', text: 'Setja þarf inn staðfesta stefnuskrá M-lista þegar hún liggur fyrir.' },
      { title: 'Frambjóðendur', text: 'Setja þarf inn frambjóðendalista þegar hann er aðgengilegur.' },
      { title: 'Samanburður', text: 'Þar til stefnuskrá liggur fyrir er flokkurinn merktur sem óstaðfestur í samanburði.' }
    ],
    topics: {
      housing: 'Vantar staðfesta stefnutexta.',
      schools: 'Vantar staðfesta stefnutexta.',
      welfare: 'Vantar staðfesta stefnutexta.',
      economy: 'Vantar staðfesta stefnutexta.',
      jobs: 'Vantar staðfesta stefnutexta.',
      environment: 'Vantar staðfesta stefnutexta.',
      transport: 'Vantar staðfesta stefnutexta.',
      culture: 'Vantar staðfesta stefnutexta.'
    }
  },
  {
    id: 'samfylkingin',
    letter: 'S',
    list: 'S-listi',
    name: 'Samfylkingin',
    shortName: 'Samfylkingin',
    logoText: 'xS',
    logoLabel: 'Samfylkingin',
    color: '#ce3346',
    lightColor: '#fde8eb',
    website: 'https://xs.is/isafjardarbaer',
    manifestoUrl: 'https://samfylkingin.cdn.prismic.io/samfylkingin/afyA0MBOoF08xt4D_Horfttilframt%C3%AD%C3%B0ar-Kosningastefna26.pdf',
    candidatesUrl: 'https://xs.is/frambjodendur-i-isafjar%C3%B0arbae',
    status: 'Stefnuskrá og framboðslisti tengd',
    summary: 'S-listi Samfylkingarinnar leggur áherslu á velferð, húsnæði, barnafjölskyldur, öldrunarþjónustu, jöfnuð, menningu og framtíðarsýn fyrir Ísafjarðarbæ.',
    candidates: [
      'Frambjóðendalisti tengdur með heimild',
      'Bæta má inn nöfnum beint úr framboðslista Samfylkingarinnar'
    ],
    policies: [
      { title: 'Húsnæðismál', text: 'Áhersla á húsnæðisframboð sem hornstein þess að samfélagið haldi áfram að vaxa.' },
      { title: 'Velferð og jöfnuður', text: 'Vill styrkja félagslega þjónustu, jafna tækifæri og tryggja að fólk fái stuðning þegar á þarf að halda.' },
      { title: 'Öldrunarþjónusta', text: 'Leggur áherslu á þjónustu, öryggi og reisn eldri íbúa.' },
      { title: 'Barnafjölskyldur', text: 'Vill styðja við börn og fjölskyldur með góðri þjónustu og samfélagslegri ábyrgð.' },
      { title: 'Menning og samfélag', text: 'Menning, samvera og lífsgæði eru sett fram sem hluti af aðlaðandi bæjarfélagi.' }
    ],
    topics: {
      housing: 'Húsnæði, búsetuöryggi og framtíðaruppbygging.',
      schools: 'Stuðningur við börn, fjölskyldur, menntun og félagslegt öryggi.',
      welfare: 'Velferð, öldrunarþjónusta, jöfnuður og félagsleg þjónusta.',
      economy: 'Fjármunir tengdir velferð, þjónustu og samfélagsuppbyggingu.',
      jobs: 'Framtíðaruppbygging og gott samfélag fyrir íbúa.',
      environment: 'Sjálfbær og samfélagsleg nálgun í uppbyggingu.',
      transport: 'Samgöngur og aðgengi sem hluti af góðri þjónustu.',
      culture: 'Menning og samvera sem mikilvægur þáttur í lífsgæðum.'
    }
  }
]

export const sources = [
  { label: 'Framsókn og óháðir — heimasíða', url: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer' },
  { label: 'Framsókn og óháðir — stefnuskrá', url: 'https://framerusercontent.com/assets/8duIPh2HtzZMoGVwPzCEsqBKD3w.pdf' },
  { label: 'Miðflokkurinn — heimasíða', url: 'https://midflokkurinn.is/isafjordur' },
  { label: 'Samfylkingin — heimasíða', url: 'https://xs.is/isafjardarbaer' },
  { label: 'Samfylkingin — stefnuskrá', url: 'https://samfylkingin.cdn.prismic.io/samfylkingin/afyA0MBOoF08xt4D_Horfttilframt%C3%AD%C3%B0ar-Kosningastefna26.pdf' },
  { label: 'Sjálfstæðisflokkurinn — heimasíða og frambjóðendur', url: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/' },
  { label: 'Sjálfstæðisflokkurinn — stefnuskrá', url: 'https://xd.is/wp-content/uploads/2026/05/xd-stefnuskra-isafjardarbaer.pdf' },
  { label: 'Viðreisn — heimasíða', url: 'https://vidreisn.is/isafjardarbaer/' },
  { label: 'Viðreisn — stefna', url: 'https://vidreisn.is/isafjardarbaer/stefnan/' },
  { label: 'Viðreisn — frambjóðendur', url: 'https://vidreisn.is/isafjardarbaer/frambjodendur/' }
]
