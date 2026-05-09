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
    socials: [
      { label: 'Facebook', url: 'https://www.facebook.com/framsoknisafjardarbaer' },
      { label: 'Vefsíða', url: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer' }
    ],
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
    },
    policyByTopic: {
    housing: [
        "Hafa á hverjum tíma nægar lóðir í boði í hverjum byggðarkjarna lausar til úthlutunar",
        "Leiða og styðja uppbyggingu á leiguhúsnæði með því að búa til verkefni með leigufélögum líkt og Bríet og Brák",
        "Stuðla að nýbyggingum íbúða í tilbúnum götum sem ekki hefur verið byggt í mörg ár t.d. með niðurfellingu gatnargerðagjalda",
        "Mikilvægt er að flýta nýju miðbæjarskipulagi í Skutulsfirði þar sem tækifæri eru til uppbyggingar fjölbýlishúsa",
        "Halda áfram uppbyggingu í Tungu- og Seljalandshverfi",
        "Horfra til stækkunar á Tunguhverfi til framtíðar",
        "Á Suðureyri eru spennandi möguleikar á nýju íbúðahverfi á svæði gamla flugvallarins",
        "Á Flateyri þarf að hefja skipulagningu nýrra lóða til að bregðast við eftirspurn",
        "Á Þingeyri þarf að tryggja að skipulagðar lóðir uppfylli væntingar og framboð sé ávallt nægilegt",
        "Kanna möguleika á byggingu íbúða eða íbúðakjarna í samstarfi við Þroskahjálp og Brynju hússjóð Öryrkjabandalags Íslands"
    ],
    schools: [
        "Styðja við starfstengt nám fyrir ófaglærða starfsmenn grunn- og leikskóla",
        "Stækka Grunnskóla Ísafjarðar og bæta aðstöðu nemenda og starfsfólks",
        "Byggja við leikskóla á Ísafirði og fjölga þannig leikskólaplássum með það að markmiði að tryggja samfellu frá 12 mánaða aldri",
        "Koma á fót ungmennahúsi í samstarfi við Edinborgarhúsið",
        "Innleiða símafrí í grunnskólum",
        "Halda úti öflugum félagsmiðstöðvum",
        "Efla stoðþjónustu við skólana",
        "Innleiða forvarnarstefnu með sérstaka áherslu á að tryggja velferð barna"
    ],
    welfare: [
        "Samþætta þjónustu ríkis og sveitarfélags við eldra fólk, það á að vera gott að vera eldri borgari í Ísafjarðarbæ",
        "Vinna tímasetta aðgerðaráætlun um að bæta hjólastólaaðgengi á kjörtímabilinu",
        "Taka upp móttökuáætlun fyrir innflytjendur",
        "Innleiða tekjutengda frístundastyrki fyrir eldri borgara",
        "Innleiða tekjutengda frístundastyrki fyrir foreldra í fæðingarorlofi",
        "Innleiða forvarnarstefnu með sérstaka áherslu á að tryggja velferð barna",
        "Kanna möguleika á byggingu íbúða eða íbúðakjarna í samstarfi við Þroskahjálp og Brynju hússjóð Öryrkjabandalags Íslands"
    ],
    economy: [
        "Sýna ábyrgð í fjármálum",
        "Setja fjárhagsleg markmið með jafnvægi milli þess að lækka skuldir en jafnframt fjárfesta í innviðum",
        "Byggja upp góða samvinnu milli byggðakjarna",
        "Skýra verkferla í stjórnsýslunni með áherslu á skilvirkni og gagnsæi",
        "Tryggja að erindi hverfisráða fara í úrvinnslu",
        "Minnka álögur á íbúa eins og kostur er og lækka fasteignaskattshlutfall",
        "Greina möguleika á nýtingu gervigreindar í starfsemi sveitarfélagsins til að styðja við og efla stjórnsýsluna"
    ],
    jobs: [
        "Hafa frumkvæði að því að laða starfsemi og fyrirtæki til bæjarfélagsins og ýta undir auknar fjárfestingar í sveitarfélaginu",
        "Berjast fyrir aukinni raforku á svæðinu",
        "Stunda öfluga hagsmunavörslu fyrir atvinnulíf svæðisins",
        "Vinna með Vestfjarðarstofu og fleiri aðilum að stofnun Nýsköpunarseturs og að fjölgun starfsstöðva og starfa hins opinbera á svæðinu",
        "Stuðla að heilsársferðaþjónustu"
    ],
    environment: [
        "Leiða með góðu fordæmi og halda svæðum Ísafjarðarbæjar snyrtilegum og vel hirtum",
        "Fjölga göngustígum og viðhalda þeim sem fyrir eru",
        "Fjölga vistgötum í gamla bænum á Ísafirði og helluleggja fleiri götur",
        "Útbúa tímasetta aðgerðaráætlun er varðar viðhald og nýframkvæmdir á gangstéttum",
        "Gera úttekt á leikvöllum bæjarins og gera tímaáætlun um úrbætur",
        "Setja upp ærslabelg í Holtahverfi"
    ],
    transport: [
        "Fjölga ferðum í almenningssamgöngum milli hverfa og byggðarkjarna þar sem sérstaklega er tekið tillit til íþrótta og tómstundastarfs barna",
        "Styðja við eflingu landtenginga skipa í höfnum",
        "Þrýsta á gerð Álftafjarðargangna",
        "Styðja við orkuskipti í samgöngum og uppbyggingu hleðsluinnviða",
        "Berjast fyrir bættari flugsamgöngum"
    ],
    culture: [
        "Hækka aldurstakmark frístundastyrks úr 16 í 18 ára",
        "Jafna aðgengi barna að íþrótta og tómstundastarfi",
        "Hanna og skipuleggja framtíðarskipulag íþróttamannvirkja á Torfnessvæðinu með þarfir íbúa og íþróttafélaga í fyrirrúmi",
        "Efla starfsemi skíðasvæðisins með áframhaldandi uppbyggingu",
        "Lengja opnunartíma í sundlaugum bæjarins",
        "Bæta tækjakost til líkamsræktar í öllum byggðakjörnum",
        "Styðja við uppbyggingu fyrir akstursíþróttir",
        "Bæta merkingar gönguleiða í Ísafjarðarbæ",
        "Tryggja þríhliða samning milli ríkis, sveitarfélags og Edinborgarhúss um menningarhús",
        "Bæta aðstöðu og aðkomu að Byggðasafni",
        "Frekari stuðningur við menningar- og bæjarhátíðir",
        "Framfylgja menningarstefnu og endurskoða hana reglulega",
        "Hækka menningarstyrki og endurskoða hámarksfjárhæð einstakra styrkja"
    ]
  }
  },
  {
    id: 'vidreisn',
    socials: [
      { label: 'Facebook', url: 'https://www.facebook.com/vidreisnisafjardarbaer' },
      { label: 'Instagram', url: 'https://www.instagram.com/vidreisn/' },
      { label: 'Vefsíða', url: 'https://vidreisn.is/isafjardarbaer/' }
    ],
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
    },
    policyByTopic: {
    housing: [
        "Koma ánægju íbúa með skipulagsmál upp fyrir landsmeðaltal með bættum ferlum",
        "Skipuleggja þéttingarreiti til húsbygginga í öllum byggðarkjörnum",
        "Auka viðhald á eignum Ísafjarðarbæjar, bæta merkingar og fyrirbyggja dýrar skemmdir"
    ],
    schools: [
        "Stækka Eyrarskjól og Sólborg, og setja í gang áætlun um fjölgun leikskólakennara í öllum byggðarkjörnum",
        "Móta og innleiða metnaðarfulla menntastefnu með skýrri aðgerðaáætlun",
        "Setja skýrar reglur um takmarkanir á símanotkun í grunnskólum",
        "Efla aðkomu sérfræðinga í skólunum svo hægt sé að mæta nemendum betur þar sem þeir eru staddir"
    ],
    welfare: [
        "Endurskoða akstursþjónustu bæjarins",
        "Breyta fjórðu hæðinni á Hlíf í nýjar íbúðir fyrir aldraða",
        "Innleiða farsældarlögin með metnaði",
        "Hlúa að aðgengi í víðu samhengi",
        "Auka upplýsingagjöf og auðvelda aðgengi fatlaðs fólks að húsnæði sveitarfélagsins",
        "Efla félagsstarf eldri borgara enn frekar og skapa tækifæri til virkni og samveru"
    ],
    economy: [
        "Passa upp á peninga íbúanna, lækka fasteignaskattshlutfall enn meira og halda áfram að lækka skuldir bæjarins",
        "Tryggja að æðstu stjórnendur bæjarins eigi reglulega vinnudaga í öllum byggðarkjörnum",
        "Breyta léni sveitarfélagsins úr isafjordur.is í isafjardarbaer.is",
        "Stjórnsýslan þarf að verða rafræn, ferlarnir í stjórnsýslunni einfaldari og afgreiðslutími styttri"
    ],
    jobs: [
        "Klára móttökuhús fyrir gesti skemmtiferðaskipa, rafvæða höfnina fyrir skip og stór ökutæki og klára löngu tímabærar framkvæmdir í öllum höfnum sveitarfélagsins",
        "Berjast fyrir umbótum innan fjórðungsins, svo sem með bættum samgöngum, betra raforkukerfi, aukinni notkun jarðhita og hóflegri skattheimtu",
        "Styðja áframhaldandi uppbyggingu umhverfisvæns laxeldis",
        "Sjá mikil tækifæri í ferðaþjónustu samfara samgöngubótum á sunnanverðum Vestfjörðum"
    ],
    environment: [
        "Bæta ásýnd og umhirðu sveitarfélagsins, meðal annars með því að fjarlægja númerslausa bíla og rusl úr bæjarlandinu á kostnað eigenda þeirra",
        "Klára fráveituframkvæmdir í öllum kjörnum",
        "Bæta útivistarmöguleika með betri leiksvæðum fyrir börn, göngu- og hjólastígum og fleiri svæðum fyrir hunda"
    ],
    transport: [
        "Skoða hvernig almenningssamgöngur geta betur nýst íbúum, sérstaklega börnum og ungmennum",
        "Berjast fyrir umbótum innan fjórðungsins, svo sem með bættum samgöngum",
        "Vilja sjá betri vetrarþjónustu á vegum og að reglulegt innanlandsflug sé tryggt"
    ],
    culture: [
        "Efla tómstundastarf og afþreyingarmöguleika fyrir 16–23 ára og auka framboð af afþreyingu utan íþrótta fyrir börn í 5.–10. bekk. Nýtt ungmennaráð leiði stefnumótunina",
        "Undirbúa viðbyggingu við íþróttahúsið á Torfnesi svo þar verði pláss fyrir alla",
        "Stækka styrktarsjóð hafna Ísafjarðarbæjar svo menningin og íbúar fái að njóta afrakstursins",
        "Gera tilraun til að endurvekja skapandi sumarstörf fyrir unglinga",
        "Gera samstarfsamning við Menningarmiðstöðina Edinborg"
    ]
  }
  },
  {
    id: 'sjalfstaedisflokkur',
    socials: [
      { label: 'Facebook', url: 'https://www.facebook.com/DlistinnIsafjardarbae' },
      { label: 'Vefsíða', url: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/' }
    ],
    letter: 'D',
    list: 'D-listi',
    name: 'Sjálfstæðisflokkur',
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
    },
    policyByTopic: {
    housing: [
        "Tryggja aukið framboð af nýjum íbúðum fyrir eldra fólk",
        "Tryggja nægt og fjölbreytt lóðaframboð í öllum byggðarkjörnum",
        "Auka skilvirkni og fyrirsjáanleika í skipulags- og byggingarmálum með bættum verkferlum",
        "Tengja Holtahverfi betur saman við Tungu- og Seljalandshverfi í samvinnu við Vegagerðina, t.d. með undirgöngum"
    ],
    schools: [
        "Innleiða heimgreiðslur til foreldra barna frá 12 mánaða aldri",
        "Báðir leikskólar á Ísafirði verði stækkaðir á kjörtímabilinu",
        "Bæta leikskólalóðir, taka út ónýt tæki og setja ný í staðinn",
        "Styðja starfsfólk til náms án þess að það komi niður á starfseminni",
        "Skoða möguleikann á gjaldfrjálsum leikskólum til kl. 14:00 og þannig draga úr álagi á starfsfólk",
        "Styrkja og styðja við faglegt starf",
        "Styðja ófaglært starfsfólk leikskóla til að sækja fjölbreytt námskeið sem nýtast í starfi",
        "Stækka Grunnskólann á Ísafirði og bæta með nýbyggingum, endurbótum og stórbættri skólalóð",
        "Forgangsraða fjármagni með menntun barna að leiðarljósi",
        "Efla miðlæga fagþjónustu skólanna og stytta bið eftir stuðningi",
        "Styðja ófaglært starfsfólk grunnskóla til náms og faglegra framfara",
        "Útfæra leiðir í samvinnu við nemendur og stjórnendur skóla um að gera skólana símalausa"
    ],
    welfare: [
        "Efla úrræði fyrir eldra fólk til virkni og félagslegra tengsla",
        "Kynna betur íþróttastarf eldri borgara og vinna markvisst að aukinni þátttöku",
        "Styðja eldra fólk til sjálfstæðrar búsetu svo það geti búið heima eins lengi og það kýs",
        "Tryggja aukið framboð af nýjum íbúðum fyrir eldra fólk",
        "Fjölga atvinnutækifærum fyrir fatlað fólk og gera sveitarfélagið að fyrirmynd í atvinnumöguleikum",
        "Auka áherslu á úrræði sem efla sjálfsbjargargetu og bæta lífsgæði til lengri tíma",
        "Efla forvarnarstarf í sveitarfélaginu í samvinnu við skóla, heilbrigðisþjónustu og frjáls félagasamtök",
        "Móta heildstæða stefnu í málefnum eldra fólks"
    ],
    economy: [
        "Sýna ráðdeild í rekstri og fara vel með fjármuni íbúanna, rýna reglulega hvernig megi gera betur og skila jákvæðri afkomu",
        "Lækka fasteignaskatta",
        "Hafa reglulega samráðsfundi með íbúum allra byggðakjarna til að jafna aðgengi að samtali og þjónustu",
        "Bæta stafræna þjónustu og einfalda ferla þannig að þjónusta bæjarins verði skilvirkari, hraðari og samfelldari",
        "Mæla reglulega ánægju íbúa með þjónustu sveitarfélagsins og setja markviss markmið um úrbætur"
    ],
    jobs: [
        "Styðja við atvinnulíf á svæðinu með öflugri hagsmunagæslu",
        "Tryggja skýra verkferla og boðleiðir í stjórnsýslu",
        "Einfalda úrvinnslu umsókna um atvinnulóðir og uppbyggingu fyrirtækja",
        "Bæta aðstöðu fyrir ferðamenn. Byggja móttökustöð skemmtiferðaskipa og bæta salernisaðstöðu í öllum byggðarkjörnum",
        "Lækka álögur á fyrirtæki og tryggja nægt framboð af lóðum fyrir atvinnustarfsemi",
        "Vinna með fyrirtækjum á svæðinu og þeim sem hafa hug á að hefja starfsemi í Ísafjarðarbæ"
    ],
    environment: [
        "Setja skýrar kröfur um umgengi, umhirðu og faglega ásýnd innan sveitarfélagsins",
        "Hlúa markvisst að opnum svæðum og almenningsrýmum í öllum byggðarkjörnum",
        "Endurvekja Græna viku í Ísafjarðarbæ og efla umhverfisvitund íbúa",
        "Gera heildstæða framtíðarsýn fyrir svæðið í Tunguskógi og þróa það sem fjölbreytt útivistarsvæði",
        "Laga gangstéttir, leggja nýjar og malbika götur"
    ],
    transport: [
        "Bjóða upp á frístundaferðir og almenningssamgöngur í samræmi við þarfir barna og ungmenna",
        "Efla frístundaakstur og almenningssamgöngur",
        "Tengja Holtahverfi betur saman við Tungu- og Seljalandshverfi í samvinnu við Vegagerðina, t.d. með undirgöngum"
    ],
    culture: [
        "Rýmka opnunartíma félagsmiðstöðva með þarfir ungmenna í öllum kjörnum í huga",
        "Setja á fót öflugt ungmennaráð sem hefur raunveruleg áhrif á málefni ungs fólks",
        "Bæta aðgengi og möguleika fatlaðra barna að íþrótta- og tómstundastarfi í samstarfi við íþróttahreyfinguna",
        "Tryggja aðgengi allra barna á aldrinum 6 til 18 ára, óháð efnahag að íþrótta- og tómstundastarfi með hækkun frístundastyrkja",
        "Auka framlög til íþróttafélaga og endurskoða verkefnasamninga",
        "Gera uppbyggingarsamninga við íþróttafélög til lengri tíma en eins árs",
        "Ljúka vinnu við framtíðarskipulag og hefja uppbyggingu á Torfnessvæði með knatthús, sundlaug og stækkun íþróttahúss sem langtímamarkmið",
        "Hækka styrki til menningarmála",
        "Efla starfsemi menningarhúsanna og tryggja áframhaldandi opnun og virka nýtingu fyrir íbúa svæðisins",
        "Styðja skapandi verkefni ungs fólks"
    ]
  }
  },
  {
    id: 'midflokkurinn',
    socials: [
      { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61572070263010' },
      { label: 'Vefsíða', url: 'https://midflokkurinn.is/isafjordur' }
    ],
    letter: 'M',
    list: 'M-listi',
    name: 'Miðflokkur og hin',
    shortName: 'Miðflokkur og hin',
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
    },
    policyByTopic: {
    housing: [
        "Tryggja framboð lóða fyrir íbúðir og atvinnustarfsemi",
        "Styðja við framkvæmdir sem hefjast á kjörtímabilinu",
        "Bæta nærumhverfi með göngustígum, leikvöllum og grænum svæðum"
    ],
    schools: [
        "Tryggja leikskólapláss frá 12 mánaða aldri",
        "Halda leikskólagjöldum í lágmarki",
        "Efla grunnskóla og fagþjónustu í samráði við kennara",
        "Opna ungmennahús fyrir framhaldsskólanema",
        "Bæta samstarf heimila og skóla"
    ],
    welfare: [
        "Markviss þjónusta við eldri borgara",
        "Tryggja jöfn tækifæri fyrir alla íbúa",
        "Byggja samfélag samstöðu, virðingar og samhjálpar"
    ],
    economy: [
        "Rýna rekstur og hagræða þar sem hægt er",
        "Stöðva sjálfvirka útgjaldaaukningu",
        "Tryggja að fjárhagslegur meðbyr skili sér í uppbyggingu en ekki skrifræði",
        "Fara vel með eignir bæjarins með langtímahugsun"
    ],
    jobs: [
        "Virk þjónusta við fyrirtæki og einfaldari leið að uppbyggingu",
        "Stjórnsýslan verði leiðbeinandi og lausnamiðuð",
        "Skjót og fagleg afgreiðsla erinda"
    ],
    environment: [
        "Viðhald og uppbygging gatna og bæjarrýmis",
        "Leikvellir og græn svæði í forgangi",
        "Bæta upplifun íbúa og gesta í sveitarfélaginu"
    ],
    transport: [
        "Setja Suðavíkurveg í forgang",
        "Þrýsta á tvöföldun Vestfjarðaganga",
        "Efla göngu- og hjólastíga",
        "Styrkja fjarskipti og áreiðanlega tengingu"
    ],
    culture: [
        "Hafa öflugar félagsmiðstöðvar",
        "Fjárfesta í samfélagi og fólki",
        "Huga að íþróttamannvirkjum og fjölnota íþróttahúsi",
        "Vinna að samfélagi fyrir alla án útilokunar"
    ]
  }
  },
  {
    id: 'samfylkingin',
    socials: [
      { label: 'Facebook', url: 'https://www.facebook.com/samfylkinginisafjardarbae' },
      { label: 'Instagram', url: 'https://www.instagram.com/samfylkingin/' },
      { label: 'Vefsíða', url: 'https://xs.is/isafjardarbaer' }
    ],
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
    },
    policyByTopic: {
    housing: [
        "Stuðla að byggingu nýs íbúðarhúsnæðis með samtali við óhagnaðardrifin leigufélög",
        "Sveitarfélagið verði virkur þátttakandi í uppbyggingu húsnæðis, meðal annars í samstarfi við óhagnaðardrifin leigufélög",
        "Sérstök áhersla á húsnæði fyrir ungt fólk og eldri íbúa",
        "4. hæð Hlífar verði breytt í íbúðir",
        "Móta skýra framtíðarsýn í húsnæðismálum grunnskóla",
        "Ljúka gerð aðalskipulags og samræmd þróun byggðar"
    ],
    schools: [
        "Endurskoða leikskólamál með tilliti til gjaldskrár, forvarna og framtíðarhúsnæðis",
        "Setja þarf þak á greiðslur fyrir leikskólavist og endurskoða gjaldskrá, afsláttarkerfi og tekjutengingu til að draga úr kostnaði fyrir barnafólk",
        "Bæta þarf starfsumhverfi barna og kennara sem felst meðal annars í aukningu stöðugilda",
        "Ráðast þarf í uppbyggingu nýs leikskóla á Ísafirði og tryggja að bráðabirgða lausnir verði ekki til langs tíma",
        "Setja á laggirnar opinn leikskóla þar sem foreldrar ungra barna geta komið saman með börn sín í öruggu og styðjandi umhverfi",
        "Skoða uppbyggingu sérstaks húsnæðis fyrir unglingastig og félagsmiðstöð",
        "Öflugur leiðtogi í forvarnarstarfi",
        "Tryggja að samþætt þjónusta barna skili áfram árangri í kjölfar innleiðingar farsældar laganna"
    ],
    welfare: [
        "Eflum þjónustu við eldra fólk",
        "Þjónusta við eldri borgara þarf að vera samfelld og taka mið af þörfum hvers og eins",
        "Þjónustan á fyrst og fremst að byggja á stuðningi í heimahúsum",
        "Auka þarf áherslu á samþættingu þjónustu, svo stuðningur berist á réttum tíma og taki mið af raunverulegum þörfum",
        "Mikilvægt er að starfandi sé öldrunarráð og að öldrunarfulltrúi haldi áfram utan um virkt félagsstarf og góða aðstöðu fyrir eldri borgara",
        "Eflum þjónustu við fatlaða",
        "Þjónustan á að tryggja jöfn tækifæri til þátttöku í samfélaginu",
        "Sérstök áhersla verður lögð á skýrar boðleiðir, aðgengilegar upplýsingar og virka leiðbeiningarskyldu"
    ],
    economy: [
        "Endurskoða verkferla bæjarins með það fyrir augum að bæta flæði í þjónustu við íbúa",
        "Einfalda ferla og bæta þjónustu við íbúa og fyrirtæki",
        "Leggja áherslu á skýrari ferla, betri samhæfingu milli deilda og hraðari afgreiðslu mála",
        "Styðja áframhaldandi niðurgreiðslu skulda og ábyrga fjármálastjórn",
        "Halda jafnvægi í rekstri á sama tíma og byggt er upp til framtíðar",
        "Bæta skipulag íbúalýðræðis",
        "Efla samstarf við hverfaráð og móta skýrari og virkari farvegi fyrir aðkomu íbúa að ákvörðunum"
    ],
    jobs: [
        "Auðvelda rekstur og uppbyggingu",
        "Fyrirtæki hafi fastan tengipunkt í samskiptum við sveitarfélagið",
        "Virkt og reglulegt samtal við atvinnulífið í Ísafjarðarbæ",
        "Styðja við uppbyggingu og stuðla að traustu umhverfi fyrir rekstur",
        "Efla hafnsækna starfsemi",
        "Styðja áfram við uppbyggingu hafnsækinnar starfsemi, jafnt í tengslum við sjávarútveg, fiskeldi sem og ferðaþjónustu",
        "Gæta að viðhaldi og uppbyggingu hafna í öllum byggðarkjörnum Ísafjarðarbæjar"
    ],
    environment: [
        "Hreint og aðgengilegt nærumhverfi",
        "Viðhalda gangstéttum og göngustígum í sveitarfélaginu",
        "Tryggja að svæði bæjarins séu ekki aðeins hreinsuð heldur haldist hrein til lengri tíma",
        "Leggja áherslu á græn svæði með góðu aðgengi og aðstöðu",
        "Standa vörð um náttúruperlur í umhverfinu",
        "Hafa umhverfisvernd að leiðarljósi í öllum ákvarðanatökum",
        "Vinna eftir aðgerðarbundinni umhverfis- og loftslagsstefnu sem verður endurskoðuð á tveggja ára fresti",
        "Bærinn sem eigandi fasteigna sinni viðhaldi á eignum"
    ],
    transport: [
        "Endurskoða aksturs fyrirkomulag milli byggðarkjarna",
        "Stuðla að öruggum flugsamgöngum fyrir sveitarfélagið",
        "Vera virkur þátttakandi í samtalinu um framtíð flugsamgangna á svæðinu",
        "Þrýsta á um langtímalausn sem tryggir öryggi og stöðugleika í samgöngum til og frá Ísafjarðarbæ",
        "Vera í fararbroddi í baráttunni fyrir úrbótum í raforkumálum",
        "Styðja áfram kröfu sveitarfélaga á Vestfjörðum um að tvítengja afhendingarstaði Landsnets"
    ],
    culture: [
        "Jöfn tækifæri til íþrótta- og tómstundastarfs",
        "Efla frístundastyrki enn frekar",
        "Auka framboð í öllum byggðarkjörnum og styðja við starfsemi lista og tónlistarskóla",
        "Koma á fót ungmennahúsi með fjölbreyttri aðstöðu fyrir mismunandi áhugasvið",
        "Endurvekja ungmennaráð Ísafjarðarbæjar og eiga við það virkt samtal um félagslegt umhverfi þeirra",
        "Ísafjarðarbær sem listamanna samfélag",
        "Hækka menningastyrki",
        "Styðja við söfn og menningarrými í sveitarfélaginu",
        "Auka aðgengi að lista- og menningar viðburðum",
        "Tryggja að íbúar alls sveitarfélagsins geti notið menningar, óháð búsetu"
    ]
  }
  }
]

export const sources = [
  { label: 'Þjóðskrá — talnaefni vegna sveitarstjórnarkosninga 2026', url: 'https://www.skra.is/gogn/talnaefni/kosningar/talnaefni-vegna-sveitarstjornakosninga-2026/' },
  { label: 'Kosning.is — opinber kosningavefur', url: 'https://www.kosning.is/' },
  { label: 'Ísafjarðarbær — opinber framboðslisti og kosningaupplýsingar', url: 'https://www.isafjordur.is/is/stjornsysla/stjornsyslan/kosningar-2026' },
  { label: 'Framsókn og óháðir — heimasíða', url: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer' },
  { label: 'Framsókn og óháðir — stefnuskrá', url: 'https://framerusercontent.com/assets/8duIPh2HtzZMoGVwPzCEsqBKD3w.pdf' },
  { label: 'Miðflokkurinn — heimasíða', url: 'https://midflokkurinn.is/isafjordur' },
  { label: 'Samfylkingin — heimasíða', url: 'https://xs.is/isafjardarbaer' },
  { label: 'Samfylkingin — stefnuskrá', url: 'https://samfylkingin.cdn.prismic.io/samfylkingin/afyA0MBOoF08xt4D_Horfttilframt%C3%AD%C3%B0ar-Kosningastefna26.pdf' },
  { label: 'Sjálfstæðisflokkur — heimasíða og frambjóðendur', url: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/' },
  { label: 'Sjálfstæðisflokkur — stefnuskrá', url: 'https://xd.is/wp-content/uploads/2026/05/xd-stefnuskra-isafjardarbaer.pdf' },
  { label: 'Viðreisn — heimasíða', url: 'https://vidreisn.is/isafjardarbaer/' },
  { label: 'Viðreisn — stefna', url: 'https://vidreisn.is/isafjardarbaer/stefnan/' },
  { label: 'Viðreisn — frambjóðendur', url: 'https://vidreisn.is/isafjardarbaer/frambjodendur/' }
]
