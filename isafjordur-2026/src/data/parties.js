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
    logo: '/logos/framsokn.png',
    color: '#178447',
    lightColor: '#e4f6e9',
    website: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer',
    manifestoUrl: 'https://framerusercontent.com/assets/8duIPh2HtzZMoGVwPzCEsqBKD3w.pdf',
    candidatesUrl: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer#frambo%C3%B0slisti',
    status: 'Stefnuskrá og framboðslisti tengd',
    summary: 'B-listi Framsóknar og óháðra leggur áherslu á fjölskylduvænt, öflugt og vel rekið sveitarfélag með sterka grunnþjónustu, gott atvinnulíf og trausta innviði.',
    candidates: [
      { name: 'Kristján Þór Kristjánsson', role: 'Hótelstjóri' },
      { name: 'Elísabet Samúelsdóttir', role: 'Fjármálastjóri' },
      { name: 'Stefán Hannibal Hafberg', role: 'Sjávarútvegsfræðingur' },
      { name: 'Tinna Rún Snorradóttir', role: 'Verkfræðingur' },
      { name: 'Elísabet Margrét Jónasdóttir', role: 'Bóndi' },
      { name: 'Guðni Páll Viktorsson', role: 'Ferðaþjónn' },
      { name: 'Gerður Ásta Sigmundsdóttir', role: 'Hjúkrunarfræðingur, bóndi' },
      { name: 'Gauti Geirsson', role: 'Framkvæmdastjóri' },
      { name: 'Katarzyna Maliszewzka', role: 'Sjúkraliði' },
      { name: 'Sædís Ólöf Þórsdóttir', role: 'Framkvæmdastjóri' },
      { name: 'Guðríður Vala Atladóttir', role: 'Nemi' },
      { name: 'Jóhann Bæring Gunnarsson', role: 'Framkvæmdastjóri' },
      { name: 'Halla Signý Kristjánsdóttir', role: 'Verkefnastjóri' },
      { name: 'Halldór Karl Valsson', role: 'Matreiðslumeistari/Kennari' },
      { name: 'Dýrleif Arna Ómarsdóttir', role: 'Hjúkrunarfræðingur' },
      { name: 'Anton Helgi Guðjónsson', role: 'Framkvæmdastjóri' },
      { name: 'Sigmundur Fríðar Þórðarson', role: 'Húsasmíðameistari' },
      { name: 'Marzellíus Sveinbjörnsson', role: 'Smiður' }
    ],
    policies: [
      { title: 'Traustur rekstur', text: 'Ábyrg fjármálastjórn, forgangsröðun og fjárfestingar í nauðsynlegum innviðum.' },
      { title: 'Fjölskylduvænt samfélag', text: 'Skólar, leikskólar, íþróttir, tómstundir og þjónusta við barnafjölskyldur.' },
      { title: 'Húsnæði fyrir ólík æviskeið', text: 'Aukið og fjölbreytt húsnæðisframboð fyrir ungt fólk, fjölskyldur og eldri íbúa.' },
      { title: 'Atvinnulíf og nýsköpun', text: 'Ferðaþjónusta, sjávarútvegur, orkutengd tækifæri og verðmætasköpun.' },
      { title: 'Samgöngur og byggðakjarnar', text: 'Tengingar milli byggðakjarna og jafnt aðgengi íbúa að þjónustu.' }
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
    },,
    policyByTopic: {
      housing: [
        'Auka framboð á fjölbreyttu húsnæði fyrir ólík æviskeið.',
        'Tryggja að lóðaframboð og skipulag styðji við uppbyggingu íbúðarhúsnæðis.',
        'Stuðla að því að ungt fólk, fjölskyldur og eldri íbúar geti búið áfram í sveitarfélaginu.'
      ],
      schools: [
        'Styrkja leikskóla og grunnskóla sem grunnstoðir samfélagsins.',
        'Efla tómstundir, íþróttir og menningarstarf barna óháð búsetu.',
        'Styðja við fjölskylduvænt samfélag í öllum byggðakjörnum.'
      ],
      welfare: [
        'Tryggja góða þjónustu við eldri borgara.',
        'Styrkja nærþjónustu og stuðning við fjölskyldur.',
        'Horfa til jafns aðgengis íbúa að grunnþjónustu.'
      ],
      economy: [
        'Halda utan um ábyrga fjármálastjórn sveitarfélagsins.',
        'Forgangsraða fjárfestingum í nauðsynlegum innviðum.',
        'Tryggja að rekstur sveitarfélagsins sé sjálfbær til lengri tíma.'
      ],
      jobs: [
        'Efla atvinnulíf og nýsköpun á svæðinu.',
        'Styðja við ferðaþjónustu, sjávarútveg og orkutengd tækifæri.',
        'Horfa til hafna og atvinnusvæða sem lykilinnviða.'
      ],
      environment: [
        'Tengja umhverfismál við skipulag og búsetugæði.',
        'Nýta tækifæri í sjálfbærri uppbyggingu.',
        'Huga að orkumálum og innviðum í langtímasýn sveitarfélagsins.'
      ],
      transport: [
        'Bæta tengingar milli byggðakjarna.',
        'Styðja við betri samgöngur til og frá sveitarfélaginu.',
        'Horfa á samgöngur sem grunnforsendu búsetu og atvinnulífs.'
      ],
      culture: [
        'Tryggja börnum jöfn tækifæri til íþrótta, tónlistar og tómstunda.',
        'Styrkja félagslíf og samfélagsþátttöku.',
        'Horfa til menningar og tómstunda sem hluta af lífsgæðum.'
      ]
    }
  },
  {
    id: 'vidreisn',
    letter: 'C',
    list: 'C-listi',
    name: 'Viðreisn',
    shortName: 'Viðreisn',
    logo: '/logos/vidreisn.png',
    color: '#f58219',
    lightColor: '#fff0de',
    website: 'https://vidreisn.is/isafjardarbaer/',
    manifestoUrl: 'https://vidreisn.is/isafjardarbaer/stefnan/',
    candidatesUrl: 'https://vidreisn.is/isafjardarbaer/frambjodendur/',
    status: 'Stefna og frambjóðendur tengd',
    summary: 'C-listi Viðreisnar leggur áherslu á skýra sýn, jákvæða samvinnu, skólamál, gagnsæi, inngildingu og sveitarfélag sem virkar betur fyrir alla.',
    candidates: [
      { name: 'Gylfi Ólafsson', role: 'Formaður bæjarráðs' },
      { name: 'Sif Huld Albertsdóttir', role: 'Aðstoðarframkvæmdarstjóri' },
      { name: 'Magnús Einar Magnússon', role: 'Skrifstofustjóri og stálsmíðameistari' },
      { name: 'Arnheiður Steinþórsdóttir', role: 'Sagnfræðingur og bókavörður' },
      { name: 'Valur Richter', role: 'Pípari, húsasmiður og meindýraeyðir' },
      { name: 'Halldóra Norðdahl', role: 'Verslunareigandi' },
      { name: 'Sigþór Snorrason', role: 'Grunnskólakennari' },
      { name: 'Hanna Gerður Jónsdóttir', role: 'Hópstjóri á leikskóla' },
      { name: 'Marcel Knop', role: 'Stuðningsfulltrúi og kennaranemi' },
      { name: 'Monika Maria Wielgosz', role: 'Lögfræðingur' },
      { name: 'Einar Geir Jónasson', role: 'Nemi' },
      { name: 'Júlía Ósk Bjarnadóttir', role: 'Leikskólakennari' },
      { name: 'Hörður Christian Newman', role: 'Þjónustufulltrúi' },
      { name: 'Guðrún Helga Sigurðardóttir', role: 'Nemi' },
      { name: 'Haukur Harðarson', role: 'Vaktstjóri' },
      { name: 'Auður Helga Ólafsdóttir', role: 'Hjúkrunarfræðingur' },
      { name: 'Guðmundur M. Kristjánsson', role: 'Fyrrverandi hafnarstjóri' },
      { name: 'Sigrún Camilla Halldórsdóttir', role: 'Formaður félags eldri borgara' }
    ],
    policies: [
      { title: 'Skólamál í forgrunni', text: 'Vel mannaðir leikskólar, metnaðarfullir grunnskólar og sérfræðiþjónusta í heimabyggð.' },
      { title: 'Jákvæð samvinna', text: 'Vinnubrögð sem byggja á samtali, hlustun og skýrri sýn.' },
      { title: 'Nútímaleg stjórnsýsla', text: 'Gagnsæi, skýrir ferlar og þjónusta sem íbúar geta treyst.' },
      { title: 'Atvinnuþróun', text: 'Fjölbreytt samfélag, nýsköpun og sterkari framtíð.' }
    ],
    topics: {
      housing: 'Forsendur fyrir búsetu og fjölbreyttu samfélagi.',
      schools: 'Skólamál í forgrunni: leikskólar, grunnskólar, sérfræðiþjónusta og inngilding.',
      welfare: 'Jafnt aðgengi að þjónustu og fagleg nálgun gagnvart ólíkum þörfum íbúa.',
      economy: 'Gagnsæi, skilvirkni og ábyrg meðferð fjármuna.',
      jobs: 'Atvinnuþróun, nýsköpun og sterkara samfélag.',
      environment: 'Sjálfbærni og nútímaleg samfélagsuppbygging.',
      transport: 'Góðir innviðir og aðgengi styðja þjónustu og byggðaþróun.',
      culture: 'Fjölbreytt íþróttastarf og félagsstarf fyrir ólíka aldurshópa.'
    },,
    policyByTopic: {
      housing: [
        'Skapa forsendur fyrir áframhaldandi búsetu og fjölbreyttu samfélagi.',
        'Horfa á húsnæði og skipulag sem hluta af stærri framtíðarsýn sveitarfélagsins.',
        'Auka fyrirsjáanleika í skipulags- og stjórnsýslumálum.'
      ],
      schools: [
        'Setja skólamál í forgrunn.',
        'Tryggja vel mannaða leikskóla og metnaðarfulla grunnskóla.',
        'Efla sérfræðiþjónustu í heimabyggð og stuðla að inngildingu.'
      ],
      welfare: [
        'Tryggja jafnt aðgengi að þjónustu.',
        'Byggja upp þjónustu sem mætir ólíkum þörfum íbúa.',
        'Leggja áherslu á faglega og gagnsæja stjórnsýslu í velferðarmálum.'
      ],
      economy: [
        'Efla gagnsæi í stjórnsýslu og fjármálum.',
        'Tryggja ábyrga meðferð fjármuna.',
        'Styrkja skilvirkni og skýra forgangsröðun.'
      ],
      jobs: [
        'Styðja við atvinnuþróun og nýsköpun.',
        'Byggja upp fjölbreytt samfélag sem laðar að fólk og fyrirtæki.',
        'Horfa til langtímasýnar í atvinnumálum sveitarfélagsins.'
      ],
      environment: [
        'Setja sjálfbærni inn í uppbyggingu og ákvarðanatöku.',
        'Huga að skýrri framtíðarsýn í skipulagsmálum.',
        'Vinna að samfélagi sem virkar betur fyrir alla.'
      ],
      transport: [
        'Styðja við góða innviði og aðgengi.',
        'Horfa á samgöngur sem hluta af þjónustu og byggðaþróun.',
        'Auka skilvirkni í verkefnum sem tengjast tengingum og þjónustu.'
      ],
      culture: [
        'Styðja við fjölbreytt íþrótta- og félagsstarf.',
        'Tryggja börnum og ungmennum aðgengi að uppbyggilegu starfi.',
        'Efla samfélagsþátttöku og fjölbreytileika.'
      ]
    }
  },
  {
    id: 'sjalfstaedisflokkur',
    letter: 'D',
    list: 'D-listi',
    name: 'Sjálfstæðisflokkurinn',
    shortName: 'Sjálfstæðisflokkur',
    logo: '/logos/xd.png',
    color: '#1f67c8',
    lightColor: '#eaf2ff',
    website: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/',
    manifestoUrl: 'https://xd.is/wp-content/uploads/2026/05/xd-stefnuskra-isafjardarbaer.pdf',
    candidatesUrl: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/',
    status: 'Stefnuskrá og framboðslisti tengd',
    summary: 'D-listi Sjálfstæðisflokksins leggur áherslu á ábyrgan rekstur, öflugt atvinnulíf, hafnir, innviði, framkvæmdir og skilvirka stjórnsýslu.',
    candidates: [
      { name: 'Jónas Þór Birgisson', role: 'Lyfsali' },
      { name: 'Þóra Marý Arnórsdóttir', role: 'Deildarstjóri á velferðarsviði' },
      { name: 'Martha Kristín Pálmadóttir', role: 'Áfanga- og fjarnámsstjóri í MÍ' },
      { name: 'Grétar Örn Eiríksson', role: 'Verkefnastjóri' },
      { name: 'Þorvaldur Óli Ragnarsson', role: 'Sérfræðingur á endurskoðunarsviði' },
      { name: 'Ásgerður Þorleifsdóttir', role: 'Sérfræðingur á fjármálasviði' },
      { name: 'Snorri Karl Birgisson', role: 'Yfirverkstjóri HG' },
      { name: 'Jón Gunnar Shiransson', role: 'Stuðningsfulltrúi' },
      { name: 'Baldur Smári Ólafsson', role: 'Sölumaður hjá Olís' },
      { name: 'Gyða Björg Jónsdóttir', role: 'Verslunarstjóri' },
      { name: 'Samúel Sigurjón Samúelsson', role: 'Stöðvarstjóri FMS' },
      { name: 'Guðrún Oddný Schmidt', role: 'Yfirverkstjóri' },
      { name: 'Torfi Tímoteus Gunnarsson', role: 'Sérfræðingur á fjármálasviði' },
      { name: 'Kristján Kristjánsson', role: 'Verkfræðingur' },
      { name: 'Magdalena Tatala', role: 'Forstöðumaður fóðurmiðstöðvar' },
      { name: 'Gísli Jón Hjaltason', role: 'Framkvæmdastjóri' },
      { name: 'Kristín Karlsdóttir', role: 'Fyrrverandi móttökuritari' },
      { name: 'Jóhann Birkir Helgason', role: 'Byggingatæknifræðingur' }
    ],
    policies: [
      { title: 'Ábyrg fjármál', text: 'Sterkur rekstur, hagkvæmni og skýr forgangsröðun.' },
      { title: 'Atvinnulíf og verðmætasköpun', text: 'Styrkja atvinnulíf, hafnir og forsendur verðmætasköpunar.' },
      { title: 'Framkvæmdir og innviðir', text: 'Skipulag og framkvæmdir sem bæta búsetuskilyrði.' },
      { title: 'Skilvirk stjórnsýsla', text: 'Hraðari afgreiðsla, skýr ábyrgð og þjónustulund.' }
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
    },,
    policyByTopic: {
      housing: [
        'Styðja við uppbyggingu og framkvæmdir sem bæta búsetuskilyrði.',
        'Horfa til skipulags og innviða sem forsendu húsnæðisuppbyggingar.',
        'Auka skilvirkni í stjórnsýslu tengdri framkvæmdum.'
      ],
      schools: [
        'Tryggja sterka grunnþjónustu fyrir börn og fjölskyldur.',
        'Styðja við skóla og fjölskylduvænt samfélag.',
        'Horfa til hagkvæms reksturs og góðrar þjónustu.'
      ],
      welfare: [
        'Veita þjónustu með áherslu á árangur og hagkvæmni.',
        'Tryggja að velferðarþjónusta sé hluti af ábyrgum rekstri.',
        'Horfa til þarfa íbúa í öllum byggðakjörnum.'
      ],
      economy: [
        'Leggja áherslu á ábyrgan rekstur sveitarfélagsins.',
        'Forgangsraða fjármunum skýrt og hagkvæmt.',
        'Efla skilvirka stjórnsýslu og betri nýtingu fjármuna.'
      ],
      jobs: [
        'Styrkja atvinnulíf og verðmætasköpun.',
        'Horfa sérstaklega til hafna, innviða og framkvæmda.',
        'Skapa betri forsendur fyrir fyrirtæki og störf í sveitarfélaginu.'
      ],
      environment: [
        'Tengja umhverfismál við skipulag, framkvæmdir og innviði.',
        'Vinna að skýrri og hagkvæmri uppbyggingu.',
        'Horfa á umhverfismál sem hluta af ábyrgri sveitarstjórn.'
      ],
      transport: [
        'Horfa á samgöngur og hafnir sem lykil að atvinnu og búsetu.',
        'Styðja við uppbyggingu nauðsynlegra innviða.',
        'Auka skilvirkni í framkvæmdum og þjónustu.'
      ],
      culture: [
        'Styðja við íþrótta- og tómstundamál sem hluta af góðu samfélagi.',
        'Horfa til fjölskylduvænna lausna.',
        'Efla lífsgæði og virkni íbúa.'
      ]
    }
  },
  {
    id: 'midflokkurinn',
    letter: 'M',
    list: 'M-listi',
    name: 'Miðflokkurinn',
    shortName: 'Miðflokkurinn',
    logo: '/logos/midflokkur.png',
    color: '#7137a8',
    lightColor: '#f1e9fb',
    website: 'https://midflokkurinn.is/isafjordur',
    manifestoUrl: '',
    candidatesUrl: 'https://www.isafjordur.is/is/stjornsysla/stjornsyslan/kosningar-2026',
    status: 'Framboðslisti tengdur',
    summary: 'M-listi Miðflokksins er með framboðslista á upplýsingasíðu Ísafjarðarbæjar. Sérstök stefnuskrá fyrir Ísafjarðarbæ liggur ekki fyrir í gögnunum sem við höfum.',
    candidates: [
      { name: 'Sævar Óli Hjörvarsson', role: 'Smiður' },
      { name: 'Jón Auðun Auðunarson', role: 'Framkvæmdarstjóri' },
      { name: 'Þorbjörn Halldór Jóhannesson', role: 'Bóndi' },
      { name: 'Karlotta Dúfa Markan', role: 'Verkefnastjóri' },
      { name: 'Hákon Sturla Unnsteinsson', role: 'Bóndi' },
      { name: 'Sigríður Laufey Sigurðardóttir', role: 'Bókari' },
      { name: 'Albert Guðmundur Haraldsson', role: 'Framkvæmdastjóri' },
      { name: 'Júlíana Aðalheiður Ernisdóttir', role: 'Verslunarkona' },
      { name: 'Hákon Hermannsson', role: 'Framkvæmdastjóri' },
      { name: 'Sigurveig Gunnarsdóttir', role: 'Sjúkraþjálfari' }
    ],
    policies: [
      { title: 'Framboðslisti kominn', text: 'Framboðslistinn er skráður í kerfið samkvæmt upplýsingasíðu Ísafjarðarbæjar.' },
      { title: 'Stefnuskrá vantar', text: 'Sérstök staðbundin stefnuskrá M-lista þarf að bætast við þegar hún liggur fyrir.' }
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
    },,
    policyByTopic: {
      housing: [
        'Tryggja framboð lóða fyrir íbúðir og atvinnustarfsemi.',
        'Styðja við framkvæmdir sem hefjast á kjörtímabilinu.',
        'Bæta nærumhverfi með göngustígum, leikvöllum og grænum svæðum.'
      ],
      schools: [
        'Tryggja leikskólapláss frá 12 mánaða aldri.',
        'Halda leikskólagjöldum í lágmarki.',
        'Efla grunnskóla og fagþjónustu í samráði við kennara.',
        'Opna ungmennahús fyrir framhaldsskólanema.',
        'Bæta samstarf heimila og skóla.'
      ],
      welfare: [
        'Markviss þjónusta við eldri borgara.',
        'Tryggja jöfn tækifæri fyrir alla íbúa.',
        'Byggja samfélag samstöðu, virðingar og samhjálpar.'
      ],
      economy: [
        'Rýna rekstur og hagræða þar sem hægt er.',
        'Stöðva sjálfvirka útgjaldaaukningu.',
        'Tryggja að fjárhagslegur meðbyr skili sér í uppbyggingu en ekki skrifræði.',
        'Fara vel með eignir bæjarins með langtímahugsun.'
      ],
      jobs: [
        'Virk þjónusta við fyrirtæki og einfaldari leið að uppbyggingu.',
        'Stjórnsýslan verði leiðbeinandi og lausnamiðuð.',
        'Skjót og fagleg afgreiðsla erinda.'
      ],
      environment: [
        'Viðhald og uppbygging gatna og bæjarrýmis.',
        'Leikvellir og græn svæði í forgangi.',
        'Bæta upplifun íbúa og gesta í sveitarfélaginu.'
      ],
      transport: [
        'Setja Suðavíkurveg í forgang.',
        'Þrýsta á tvöföldun Vestfjarðaganga.',
        'Efla göngu- og hjólastíga.',
        'Styrkja fjarskipti og áreiðanlega tengingu.'
      ],
      culture: [
        'Hafa öflugar félagsmiðstöðvar.',
        'Fjárfesta í samfélagi og fólki.',
        'Huga að íþróttamannvirkjum og fjölnota íþróttahúsi.',
        'Vinna að samfélagi fyrir alla án útilokunar.'
      ]
    }
  },
  {
    id: 'samfylkingin',
    letter: 'S',
    list: 'S-listi',
    name: 'Samfylkingin',
    shortName: 'Samfylkingin',
    logo: '/logos/samfylking.png',
    color: '#ce3346',
    lightColor: '#fde8eb',
    website: 'https://xs.is/isafjardarbaer',
    manifestoUrl: 'https://samfylkingin.cdn.prismic.io/samfylkingin/afyA0MBOoF08xt4D_Horfttilframt%C3%AD%C3%B0ar-Kosningastefna26.pdf',
    candidatesUrl: 'https://xs.is/frambjodendur-i-isafjar%C3%B0arbae',
    status: 'Stefnuskrá og framboðslisti tengd',
    summary: 'S-listi Samfylkingarinnar leggur áherslu á velferð, húsnæði, barnafjölskyldur, öldrunarþjónustu, jöfnuð, menningu og framtíðarsýn fyrir Ísafjarðarbæ.',
    candidates: [
      { name: 'Svanfríður Guðrún Bergvinsdóttir', role: 'Viðskiptafræðinemi' },
      { name: 'Helgi Karl Guðmundsson', role: 'Rafmagnstæknifræðingur' },
      { name: 'Finney Rakel Árnadóttir', role: 'Aðstoðarskólastjóri' },
      { name: 'Sigurður Jón Hreinsson', role: 'Véliðnfræðingur' },
      { name: 'Hrafnhildur Hrönn Óðinsdóttir', role: 'Stjórnmálafræðingur' },
      { name: 'Gísli Már Guðjónsson', role: 'Rafvirki' },
      { name: 'Jónína Eyja Þórðardóttir', role: 'Umsjónarmaður' },
      { name: 'Úlfar Logason', role: 'Ljósmyndari/Verkefnastjóri' },
      { name: 'Iwona Maria Samson', role: 'Sérkennari' },
      { name: 'Sveinberg Þór Birgisson', role: 'Húsvörður' },
      { name: 'Sigurrós Elddís Huldudóttir', role: 'Lýðheilsufræðingur' },
      { name: 'Rúnar Helgi Haraldsson', role: 'Ráðgjafi' },
      { name: 'Ingibjörg Andrea Hallgrímsdóttir', role: 'Kynjafræðingur' },
      { name: 'Guðmundur Ólafsson', role: 'Gæðastjóri' },
      { name: 'Þórunn Sunnefa Elfarsdóttir', role: 'Fatahönnuður' },
      { name: 'Kári Jóhannsson', role: 'Fisksali' },
      { name: 'Inga María Guðmundsdóttir', role: 'Frumkvöðull' },
      { name: 'Bryndís G. Friðgeirsdóttir', role: 'Fyrrverandi bæjarfulltrúi' }
    ],
    policies: [
      { title: 'Húsnæðismál', text: 'Húsnæðisframboð sem forsenda þess að samfélagið geti vaxið.' },
      { title: 'Velferð og jöfnuður', text: 'Félagsleg þjónusta, jöfn tækifæri og stuðningur þegar á þarf að halda.' },
      { title: 'Öldrunarþjónusta', text: 'Þjónusta, öryggi og reisn eldri íbúa.' },
      { title: 'Barnafjölskyldur', text: 'Stuðningur við börn og fjölskyldur með góðri þjónustu.' },
      { title: 'Menning og samfélag', text: 'Menning, samvera og lífsgæði sem hluti af aðlaðandi bæjarfélagi.' }
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
    },,
    policyByTopic: {
      housing: [
        'Auka húsnæðisframboð sem forsenda þess að samfélagið geti vaxið.',
        'Horfa til búsetuöryggis og framtíðaruppbyggingar.',
        'Vinna að lausnum sem styðja við fjölskyldur og fólk á ólíkum æviskeiðum.'
      ],
      schools: [
        'Styðja við börn, fjölskyldur og menntun.',
        'Horfa til félagslegs öryggis barna og ungmenna.',
        'Efla þjónustu sem styður við barnafjölskyldur.'
      ],
      welfare: [
        'Styrkja velferðarþjónustu og félagslega þjónustu.',
        'Leggja áherslu á öldrunarþjónustu, öryggi og reisn eldri íbúa.',
        'Vinna að jöfnuði og jöfnum tækifærum.'
      ],
      economy: [
        'Tengja fjármál sveitarfélagsins við velferð, þjónustu og samfélagsuppbyggingu.',
        'Forgangsraða verkefnum sem styrkja lífsgæði íbúa.',
        'Horfa til samfélagslegrar ábyrgðar í rekstri.'
      ],
      jobs: [
        'Styðja við framtíðaruppbyggingu sveitarfélagsins.',
        'Byggja upp gott samfélag sem heldur í fólk og laðar að nýja íbúa.',
        'Horfa til atvinnu og þjónustu sem hluta af lífsgæðum.'
      ],
      environment: [
        'Vinna að sjálfbærri og samfélagslegri uppbyggingu.',
        'Tengja skipulag, umhverfi og lífsgæði.',
        'Horfa til framtíðarsýnar í þróun sveitarfélagsins.'
      ],
      transport: [
        'Horfa á samgöngur og aðgengi sem hluta af góðri þjónustu.',
        'Tryggja aðgengi íbúa að þjónustu og samfélagsþátttöku.',
        'Tengja samgöngur við velferð og búsetuskilyrði.'
      ],
      culture: [
        'Styrkja menningu og samveru sem hluta af lífsgæðum.',
        'Styðja við samfélagslegt starf og þátttöku.',
        'Horfa á menningu sem þátt í aðlaðandi bæjarfélagi.'
      ]
    }
  }
]

export const sources = [
  { label: 'Ísafjarðarbær — opinber framboðslisti og kosningaupplýsingar', url: 'https://www.isafjordur.is/is/stjornsysla/stjornsyslan/kosningar-2026' },
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
