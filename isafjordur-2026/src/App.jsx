import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Coffee,
  ExternalLink,
  FileText,
  Globe2,
  HelpCircle,
  Info,
  Link as LinkIcon,
  MapPin,
  ShieldCheck,
  UserRound,
  Vote
} from 'lucide-react'
import { parties, sources, topics } from './data/parties.js'
import { loadEvents } from './data/eventsSheet.js'
import { articles } from './data/articles.js'

function stableShuffleOptions(options, questionIndex) {
  return [...options]
    .map((option, index) => ({
      option,
      sortKey: ((index + 1) * 37 + (questionIndex + 3) * 19) % 101
    }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map((item) => item.option)
}


const comparisonItems = [
  { area: 'Húsnæði', focus: 'Lóðaframboð', parties: { B: 'Lóðir + uppbygging', C: 'Skipulag og búseta', D: 'Framkvæmdir', M: 'Lóðir', S: 'Húsnæðisframboð' } },
  { area: 'Húsnæði', focus: 'Búsetuöryggi', parties: { B: 'Ólík æviskeið', C: 'Fjölbreytt samfélag', D: 'Búsetuskilyrði', M: 'Nærumhverfi', S: 'Búsetuöryggi' } },
  { area: 'Skólar', focus: 'Leikskólar', parties: { B: 'Sterkir leikskólar', C: 'Vel mannaðir', D: 'Grunnþjónusta', M: '12 mánaða pláss', S: 'Barnafjölskyldur' } },
  { area: 'Skólar', focus: 'Sérfræðiþjónusta', parties: { B: 'Stuðningur', C: 'Í heimabyggð', D: 'Þjónusta', M: 'Fagþjónusta', S: 'Félagslegt öryggi' } },
  { area: 'Samgöngur', focus: 'Suðavíkurvegur', parties: { B: 'Tengingar', C: 'Innviðir', D: 'Samgöngur', M: 'Í forgang', S: 'Aðgengi' } },
  { area: 'Samgöngur', focus: 'Vestfjarðagöng', parties: { B: 'Samgöngur', C: 'Tengingar', D: 'Innviðir', M: 'Tvöföldun', S: 'Aðgengi' } },
  { area: 'Fjármál', focus: 'Fjármálaagi', parties: { B: 'Ábyrg stjórn', C: 'Gagnsæi', D: 'Ábyrg rekstur', M: 'Hagræðing', S: 'Velferð í forgang' } },
  { area: 'Atvinna', focus: 'Fyrirtækjaþjónusta', parties: { B: 'Atvinnusvæði', C: 'Nýsköpun', D: 'Verðmætasköpun', M: 'Lausnamiðuð þjónusta', S: 'Framtíðaruppbygging' } },
  { area: 'Samfélag', focus: 'Eldri borgarar', parties: { B: 'Reisn og öryggi', C: 'Jafnt aðgengi', D: 'Hagkvæm þjónusta', M: 'Markviss þjónusta', S: 'Öldrunarþjónusta' } },
  { area: 'Menning', focus: 'Tómstundir', parties: { B: 'Jöfn tækifæri', C: 'Félagsstarf', D: 'Íþróttir', M: 'Félagsmiðstöðvar', S: 'Menning og samvera' } }
]

const quizQuestions = [
  {
    text: 'Hvað á að vera stærsta forgangsmálið í húsnæðismálum?',
    options: [
      { label: 'Byggja upp með óhagnaðardrifnum leigufélögum og áherslu á ungt fólk og eldri íbúa', parties: ['S'] },
      { label: 'Tryggja framboð lóða fyrir íbúðir og atvinnustarfsemi', parties: ['M'] },
      { label: 'Bæta skipulagsferla og skipuleggja þéttingarreiti í öllum byggðarkjörnum', parties: ['C'] },
      { label: 'Fjölga lóðum og styðja leiguhúsnæði með samstarfi við leigufélög', parties: ['B'] },
      { label: 'Tryggja fjölbreytt lóðaframboð og skilvirkari byggingarmál', parties: ['D'] }
    ]
  },
  {
    text: 'Hvaða leikskólaáhersla passar þér best?',
    options: [
      { label: 'Heimgreiðslur frá 12 mánaða aldri og skoða gjaldfrjálsan leikskóla til kl. 14', parties: ['D'] },
      { label: 'Endurskoða gjaldskrá, afsláttarkerfi og tekjutengingu leikskóla', parties: ['S'] },
      { label: 'Byggja við leikskóla og tryggja samfellu frá 12 mánaða aldri', parties: ['B'] },
      { label: 'Leikskólapláss frá 12 mánaða aldri og halda leikskólagjöldum í lágmarki', parties: ['M'] },
      { label: 'Stækka leikskóla og fjölga leikskólakennurum', parties: ['C'] }
    ]
  },
  {
    text: 'Hvaða nálgun finnst þér best í fjármálum bæjarins?',
    options: [
      { label: 'Rýna rekstur, hagræða og stöðva sjálfvirka útgjaldaaukningu', parties: ['M'] },
      { label: 'Ráðdeild, lægri fasteignaskattar og skilvirkari stafræna þjónusta', parties: ['D'] },
      { label: 'Ábyrg fjármál en bæta flæði, ferla og íbúalýðræði', parties: ['S'] },
      { label: 'Lækka fasteignaskatt, lækka skuldir og gera stjórnsýslu rafræna', parties: ['C'] },
      { label: 'Ábyrg fjármál, lægri fasteignaskattur og skýrari verkferlar', parties: ['B'] }
    ]
  },
  {
    text: 'Hvernig á að þjónusta eldri borgara?',
    options: [
      { label: 'Efla félagsstarf eldri borgara og breyta 4. hæð Hlífar í íbúðir', parties: ['C'] },
      { label: 'Samfelld þjónusta, stuðningur í heimahúsum og öldrunarráð', parties: ['S'] },
      { label: 'Markviss þjónusta við eldri borgara og jöfn tækifæri', parties: ['M'] },
      { label: 'Samþætta þjónustu ríkis og sveitarfélags við eldra fólk', parties: ['B'] },
      { label: 'Styðja sjálfstæða búsetu, virkni og félagsleg tengsl', parties: ['D'] }
    ]
  },
  {
    text: 'Hvaða samgönguáhersla skiptir þig mestu?',
    options: [
      { label: 'Setja Suðavíkurveg í forgang og þrýsta á tvöföldun Vestfjarðaganga', parties: ['M'] },
      { label: 'Endurskoða akstur milli byggðarkjarna og tryggja öruggar flugsamgöngur', parties: ['S'] },
      { label: 'Fjölga almenningssamgöngum milli hverfa og byggðarkjarna', parties: ['B'] },
      { label: 'Efla frístundaakstur og almenningssamgöngur', parties: ['D'] },
      { label: 'Skoða hvernig almenningssamgöngur nýtast betur, sérstaklega börnum og ungmennum', parties: ['C'] }
    ]
  },
  {
    text: 'Hvað á að gera fyrir atvinnulíf og fyrirtæki?',
    options: [
      { label: 'Laða fyrirtæki og opinber störf til bæjarins og berjast fyrir meiri raforku', parties: ['B'] },
      { label: 'Klára móttökuhús, rafvæða höfn og styðja umhverfisvænt laxeldi', parties: ['C'] },
      { label: 'Einfalda umsóknir, lækka álögur og tryggja atvinnulóðir', parties: ['D'] },
      { label: 'Gera stjórnsýslu leiðbeinandi, lausnamiðaða og hraða í erindum fyrirtækja', parties: ['M'] },
      { label: 'Fastur tengipunktur fyrir fyrirtæki og reglulegt samtal við atvinnulífið', parties: ['S'] }
    ]
  },
  {
    text: 'Hvaða umhverfis- og nærumhverfisáhersla hljómar best?',
    options: [
      { label: 'Fjölga göngustígum, vistgötum, leikvöllum og bæta umhirðu', parties: ['B'] },
      { label: 'Bæta ásýnd, fjarlægja rusl og klára fráveituframkvæmdir', parties: ['C'] },
      { label: 'Setja skýrar kröfur um umgengni og hlúa að opnum svæðum', parties: ['D'] },
      { label: 'Viðhald gatna, leikvellir og græn svæði í forgangi', parties: ['M'] },
      { label: 'Hreint nærumhverfi, græn svæði og aðgerðarbundin umhverfisstefna', parties: ['S'] }
    ]
  },
  {
    text: 'Hvaða menningar- og tómstundaáhersla passar þér?',
    options: [
      { label: 'Hækka frístundastyrk, efla skíðasvæði og menningarstyrki', parties: ['B'] },
      { label: 'Auka afþreyingu 16–23 ára og gera samning við Edinborg', parties: ['C'] },
      { label: 'Hækka frístundastyrki, styrkja íþróttafélög og byggja upp Torfnes', parties: ['D'] },
      { label: 'Öflugar félagsmiðstöðvar og fjölnota íþróttahús', parties: ['M'] },
      { label: 'Ungmennahús, ungmennaráð, frístundastyrkir og listamannasamfélag', parties: ['S'] }
    ]
  },
  {
    text: 'Hvaða áhersla í grunnskólum er mikilvægust?',
    options: [
      { label: 'Stækka Grunnskóla Ísafjarðar og innleiða símafrí', parties: ['B'] },
      { label: 'Metnaðarfull menntastefna og sérfræðingar í skólum', parties: ['C'] },
      { label: 'Stækka Grunnskólann og efla miðlæga fagþjónustu', parties: ['D'] },
      { label: 'Efla grunnskóla og fagþjónustu í samráði við kennara', parties: ['M'] },
      { label: 'Skoða sérstakt húsnæði fyrir unglingastig og félagsmiðstöð', parties: ['S'] }
    ]
  },
  {
    text: 'Hvað finnst þér mikilvægast í málefnum fatlaðs fólks og aðgengis?',
    options: [
      { label: 'Tímasett aðgerðaráætlun um hjólastólaaðgengi', parties: ['B'] },
      { label: 'Auka upplýsingagjöf og aðgengi fatlaðs fólks að húsnæði sveitarfélagsins', parties: ['C'] },
      { label: 'Fjölga atvinnutækifærum fyrir fatlað fólk', parties: ['D'] },
      { label: 'Tryggja jöfn tækifæri fyrir alla íbúa', parties: ['M'] },
      { label: 'Skýrar boðleiðir, aðgengilegar upplýsingar og virka leiðbeiningarskyldu', parties: ['S'] }
    ]
  },
  {
    text: 'Hvaða stórframkvæmd eða innviðamál ætti að vega þyngst?',
    options: [
      { label: 'Íþróttamannvirki á Torfnesi og uppbygging í öllum byggðarkjörnum', parties: ['B'] },
      { label: 'Móttökuhús, hafnir og rafvæðing hafna', parties: ['C'] },
      { label: 'Torfnes með knatthús, sundlaug og stækkun íþróttahúss', parties: ['D'] },
      { label: 'Suðavíkurvegur, Vestfjarðagöng og fjölnota íþróttahús', parties: ['M'] },
      { label: 'Húsnæði, hafnsækin starfsemi, samgöngur og raforkumál', parties: ['S'] }
    ]
  },
  {
    text: 'Hvaða heildarstefna höfðar mest til þín?',
    options: [
      { label: 'Fjölskylduvænt samfélag, innviðir og ábyrg uppbygging', parties: ['B'] },
      { label: 'Gagnsæi, skilvirkni, skólamál og jákvæð samvinna', parties: ['C'] },
      { label: 'Ráðdeild, framkvæmdir, atvinnulíf og sterk grunnþjónusta', parties: ['D'] },
      { label: 'Hagræðing, skýr forgangsröðun og framkvæmdir', parties: ['M'] },
      { label: 'Velferð, jöfnuður, húsnæði og samfélagsleg ábyrgð', parties: ['S'] }
    ]
  }
]

const electionInfo = [
  {
    title: 'Kosningadagur',
    value: '16. maí 2026',
    note: 'Kosið verður til bæjarstjórnar í Ísafjarðarbæ.'
  },
  {
    title: 'Kjörskrá',
    value: '2.976 kjósendur',
    note: '1.542 karlar, 1.430 konur og 4 kynsegin/annað samkvæmt Þjóðskrá.'
  },
  {
    title: 'Kjördeildir',
    value: '6 kjördeildir',
    note: '1.-3. á Ísafirði, 4. Suðureyri, 5. Flateyri og 6. Þingeyri.'
  },
  {
    title: 'Ísafjörður',
    value: '09:00–20:00',
    note: '1.-3. kjördeild í Grunnskólanum á Ísafirði.'
  },
  {
    title: 'Suðureyri',
    value: '09:00–18:00',
    note: '4. kjördeild í Grunnskólanum á Suðureyri.'
  },
  {
    title: 'Flateyri',
    value: '09:00–18:00',
    note: '5. kjördeild í Grunnskóla Önundarfjarðar á Flateyri.'
  },
  {
    title: 'Þingeyri',
    value: '09:00–18:00',
    note: '6. kjördeild í Grunnskólanum á Þingeyri.'
  },
  {
    title: 'Utan kjörfundar',
    value: 'Frá 17. apríl',
    note: 'Atkvæðisbréfum tekið við á bæjarskrifstofum, Hafnarstræti 1, 2. hæð.'
  },
  {
    title: 'Opnun utankjörfundar',
    value: '10–12 / 12:30–15',
    note: 'Opið alla virka daga á bæjarskrifstofum Ísafjarðarbæjar.'
  },
  {
    title: 'Talning atkvæða',
    value: 'Kl. 21:00',
    note: 'Talning hefst á kjördag í fundarsal Stjórnsýsluhússins á Ísafirði, 4. hæð.'
  }
]

const campaignInfo = [
  {
    party: 'B',
    title: 'Framsókn og óháðir',
    location: 'Hafnarstræti 8, Ísafirði',
    hours: 'Virka daga 15:00–18:00',
    cafe: 'Guðmundarbúð á kjördag 16. maí kl. 14–17',
    status: 'confirmed'
  },
  {
    party: 'C',
    title: 'Viðreisn',
    location: 'Gamla bakaríið, Ísafirði',
    hours: 'Mán–fös 12–13 & 15–17 · Helgar 14–17',
    cafe: 'Kosningamiðstöð opin alla kosningavikuna',
    status: 'confirmed'
  },
  {
    party: 'D',
    title: 'Sjálfstæðisflokkur',
    location: 'Aðalstræti 24, Ísafirði (Gamla bakaríið við Silfurtorg)',
    hours: 'Opnunartímar ekki staðfestir enn',
    cafe: 'Upplýsingar væntanlegar',
    status: 'pending'
  },
  {
    party: 'M',
    title: 'Miðflokkur og hin',
    location: 'Vesturferðir í Edinborgarhúsinu',
    hours: '9. maí kl. 12–14 · fleiri tímar væntanlegir',
    cafe: 'Heitt á könnunni ☕️',
    status: 'partial'
  },
  {
    party: 'S',
    title: 'Samfylkingin',
    location: 'Hafnarstræti 5, Ísafirði',
    hours: 'Mán–fös 11–14 & 16–19 · Lau 11–14',
    cafe: 'Laugardagssúpa 9. maí kl. 11–14',
    status: 'confirmed'
  }
]


const sourceGroups = [
  {
    title: 'Opinberir kosningavefir',
    links: [
      { label: 'Ísafjarðarbær — kosningar 2026', url: 'https://www.isafjordur.is/is/stjornsysla/stjornsyslan/kosningar-2026' },
      { label: 'Þjóðskrá — talnaefni vegna sveitarstjórnarkosninga 2026', url: 'https://www.skra.is/gogn/talnaefni/kosningar/talnaefni-vegna-sveitarstjornakosninga-2026/' },
      { label: 'Kosning.is', url: 'https://www.kosning.is/' }
    ]
  },
  {
    title: 'Framsókn og óháðir',
    links: [
      { label: 'Heimasíða framboðs', url: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer' },
      { label: 'Stefnuskrá', url: 'https://framerusercontent.com/assets/8duIPh2HtzZMoGVwPzCEsqBKD3w.pdf' },
      { label: 'Frambjóðendalisti', url: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer#frambo%C3%B0slisti' }
    ]
  },
  {
    title: 'Viðreisn',
    links: [
      { label: 'Heimasíða framboðs', url: 'https://vidreisn.is/isafjardarbaer/' },
      { label: 'Stefna', url: 'https://vidreisn.is/isafjardarbaer/stefnan/' },
      { label: 'Frambjóðendur', url: 'https://vidreisn.is/isafjardarbaer/frambjodendur/' }
    ]
  },
  {
    title: 'Sjálfstæðisflokkur',
    links: [
      { label: 'Heimasíða og frambjóðendur', url: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/' },
      { label: 'Stefnuskrá', url: 'https://xd.is/wp-content/uploads/2026/05/xd-stefnuskra-isafjardarbaer.pdf' }
    ]
  },
  {
    title: 'Miðflokkur og hin',
    links: [
      { label: 'Heimasíða framboðs', url: 'https://midflokkurinn.is/isafjordur' },
      { label: 'Facebook myndir / stefnumál', url: 'https://www.facebook.com/profile.php?id=61572070263010&sk=photos' },
      { label: 'Opinber framboðslisti hjá Ísafjarðarbæ', url: 'https://www.isafjordur.is/is/stjornsysla/stjornsyslan/kosningar-2026' }
    ]
  },
  {
    title: 'Samfylkingin',
    links: [
      { label: 'Heimasíða framboðs', url: 'https://xs.is/isafjardarbaer' },
      { label: 'Stefnuskrá', url: 'https://samfylkingin.cdn.prismic.io/samfylkingin/afyA0MBOoF08xt4D_Horfttilframt%C3%AD%C3%B0ar-Kosningastefna26.pdf' },
      { label: 'Frambjóðendur', url: 'https://xs.is/frambjodendur-i-isafjar%C3%B0arbae' }
    ]
  }
]

function LogoMark({ party, large = false }) {
  return <img className={large ? 'logoMark large' : 'logoMark'} src={party.logo} alt={`Merki ${party.name}`} />
}

function Header({ setActiveParty, setActiveTopic }) {
  const goHome = (hash) => {
    setActiveParty(null)
    setActiveTopic(null)
    window.setTimeout(() => {
      if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  return (
    <header className="topbar">
      <button className="brand brandButton" onClick={() => goHome(null)}>
        <img className="siteLogoIcon" src="/favicon.svg" alt="Ísafjarðarbær 2026" />
        <div>
          <strong>Ísafjarðarbær 2026</strong>
          <span>Stefnuskrár í einum stað</span>
        </div>
      </button>

      <nav>
        <button onClick={() => goHome('#flokkar')}>Flokkar</button>
        <button onClick={() => goHome('#malefni')}>Málefni</button>
        <button onClick={() => goHome('#vidburdir')}>Viðburðir</button>
        <button onClick={() => goHome('#greinar')}>Greinar</button>
        <button onClick={() => goHome('#kosningar')}>Kosningar</button>
        <button onClick={() => goHome('#konnun')}>Könnun</button>
        <button onClick={() => goHome('#heimildir')}>Heimildir</button>
      </nav>
    </header>
  )
}
function Hero() {
  const candidateCount = parties.reduce((sum, party) => sum + party.candidates.length, 0)

  return (
    <section className="hero">
      <div className="heroContent">
        <p className="eyebrow"><ShieldCheck size={16} /> Óháð yfirlit í vinnslu</p>
        <h1>Berðu saman stefnur flokkanna í Ísafjarðarbæ.</h1>
        <p>
          Vefurinn safnar saman stefnuskrám, framboðslistum og heimildum á einn stað svo íbúar geti séð muninn á áherslum flokkanna.
        </p>
</div>
    </section>
  )
}

function PartyCards({ setActiveParty }) {
  return (
    <section id="flokkar" className="partyStrip">
      {parties.map((party) => (
        <article className="partyCard" key={party.id}>
          <LogoMark party={party} />
          <div className="partyCardBody">
            <p className="listName">{party.list}</p>
            <h2>{party.name}</h2>
            <button onClick={() => setActiveParty(party.id)}>
              Skoða nánar <ArrowRight size={16} />
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

function PartySwitchButton({ party, direction, onClick }) {
  return (
    <button className={`partySwitch ${direction}`} onClick={onClick}>
      <span className="switchArrow">{direction === 'prev' ? '←' : '→'}</span>
      <LogoMark party={party} />
      <span className="switchText">
        <small>{party.list}</small>
        <strong>{party.name}</strong>
      </span>
    </button>
  )
}

function PartyDetail({ party, setActiveParty }) {
  const currentIndex = parties.findIndex((item) => item.id === party.id)
  const previousParty = parties[(currentIndex - 1 + parties.length) % parties.length]
  const nextParty = parties[(currentIndex + 1) % parties.length]

  return (
    <section className="partyDetail">
      <div className="partyDetailNav">
        <PartySwitchButton
          party={previousParty}
          direction="prev"
          onClick={() => setActiveParty(previousParty.id)}
        />

        <button className="backButton" onClick={() => setActiveParty(null)}>
          Allir flokkar
        </button>

        <PartySwitchButton
          party={nextParty}
          direction="next"
          onClick={() => setActiveParty(nextParty.id)}
        />
      </div>

      <div className="detailHero" style={{ '--party': party.color, '--light': party.lightColor }}>
        <LogoMark party={party} large />
        <div>
          <p className="eyebrow">{party.list}</p>
          <h1>{party.name}</h1>
          <p>{party.summary}</p>
          

          <div className="detailLinks">
            {party.socials?.map((social) => (
              <a key={social.url} href={social.url} target="_blank" rel="noreferrer">{social.label}</a>
            ))}
            <a href={party.website} target="_blank" rel="noreferrer"><Globe2 size={17} /> Heimasíða</a>
            {party.manifestoUrl ? (
              <a href={party.manifestoUrl} target="_blank" rel="noreferrer"><FileText size={17} /> Stefnuskrá</a>
            ) : (
              <span><Info size={17} /> Stefnuskrá vantar</span>
            )}
            {party.candidatesUrl ? (
              <a href={party.candidatesUrl} target="_blank" rel="noreferrer"><UserRound size={17} /> Frambjóðendur</a>
            ) : (
              <span><Info size={17} /> Frambjóðendur vantar</span>
            )}
          </div>
        </div>
      </div>

      <div className="detailGrid">
        <article className="panel">
          <h2>Í stuttu máli</h2>
          <p className="policyIntro">Helstu áherslur flokksins teknar saman úr stefnuefni og birtar sem stuttar aðgerðir.</p>
          <div className="policyList">
            {party.policies.map((policy) => (
              <section className="policyItem" key={policy.title}>
                <h3>{policy.title}</h3>
                <p>{policy.text}</p>
              </section>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>Frambjóðendur</h2>
          <p className="smallIntro">{party.candidates.length} frambjóðendur á {party.list}.</p>
          <ol className="candidateList">
            {party.candidates.map((candidate) => (
              <li key={candidate.name}>
                <strong>{candidate.name}</strong>
                <span>{candidate.role}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>

      <article className="panel">
        <h2>Stefna eftir málaflokkum</h2>
        <div className="topicCards">
          {topics.map((topic) => (
            <div className="miniTopic" key={topic.id}>
              <h3>{topic.name}</h3>
              <p>{party.topics[topic.id]}</p>
              <ul className="topicActionList">
                {(party.policyByTopic?.[topic.id] || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

function ElectionInfoPanel() {
  return (
    <section id="kosningar" className="panel electionPanel cleanElectionPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><MapPin size={15} /> Kosningaupplýsingar</p>
          <p>Helstu upplýsingar um kjördag, kjörstaði, kjósendur, utankjörfundaratkvæðagreiðslu og talningu.</p>
        </div>
      </div>

      <div className="electionSummary">
        <article>
          <span>Kjördagur</span>
          <strong>16. maí 2026</strong>
          <p>Sveitarstjórnarkosningar í Ísafjarðarbæ.</p>
        </article>

        <article>
          <span>Íbúar</span>
          <strong>4.117</strong>
          <p>Skráðir íbúar samkvæmt fyrirliggjandi gögnum.</p>
        </article>

        <article>
          <span>Kjörskrá</span>
          <strong>2.976 kjósendur</strong>
          <p>1.542 karlar, 1.430 konur og 4 kynsegin/annað.</p>
        </article>

        <article>
          <span>Kjördeildir</span>
          <strong>6 kjördeildir</strong>
          <p>Ísafjörður, Suðureyri, Flateyri og Þingeyri.</p>
        </article>
      </div>

      <div className="electionInfoRows">
        <section>
          <h3>Kjörstaðir</h3>
          <ul>
            <li><strong>Ísafjörður</strong><span>09:00–20:00 · Grunnskólinn á Ísafirði</span></li>
            <li><strong>Suðureyri</strong><span>09:00–18:00 · Grunnskólinn á Suðureyri</span></li>
            <li><strong>Flateyri</strong><span>09:00–18:00 · Grunnskóli Önundarfjarðar</span></li>
            <li><strong>Þingeyri</strong><span>09:00–18:00 · Grunnskólinn á Þingeyri</span></li>
          </ul>
        </section>

        <section>
          <h3>Utankjörfundaratkvæðagreiðsla</h3>
          <p>Kosning utan kjörfundar fer fram hjá sýslumanninum.</p>
          <p>Tekið er á móti atkvæðisbréfum á bæjarskrifstofum Ísafjarðarbæjar, Hafnarstræti 1, 2. hæð.</p>
        </section>

        <section>
          <h3>Talning atkvæða</h3>
          <p>Talning hefst kl. 21:00 á kjördag í fundarsal Stjórnsýsluhússins á Ísafirði, 4. hæð.</p>
        </section>
      </div>
    </section>
  )
}

function CampaignInfoPanel() {
  const statusMap = {
    confirmed: { label: 'Staðfestar upplýsingar', className: 'green' },
    partial: { label: 'Fleiri upplýsingar væntanlegar', className: 'yellow' },
    pending: { label: 'Beðið eftir upplýsingum', className: 'gray' }
  }

  return (
    <section className="panel campaignPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">☕ Kosningavika</p>
          
          <p>Yfirlit yfir kosningamiðstöðvar, opnunartíma og kosningakaffi framboðanna í Ísafjarðarbæ.</p>
        </div>
      </div>

      <div className="campaignGrid">
        {campaignInfo.map((item) => {
          const party = parties.find((p) => p.letter === item.party)

          return (
            <article className="campaignCard" key={item.party}>
              <div className="campaignTop">
                {party && <LogoMark party={party} />}

                <div>
                  <h3>{item.title}</h3>
                </div>
              </div>

              <div className="campaignInfoLine">
                <strong>📍 Staðsetning</strong>
                <p>{item.location}</p>
              </div>

              <div className="campaignInfoLine">
                <strong>🕒 Opnunartímar</strong>
                <p>{item.hours}</p>
              </div>

              <div className="campaignInfoLine">
                <strong>☕ Kosningakaffi / viðburðir</strong>
                <p>{item.cafe}</p>
              </div>
            </article>
          )
        })}
      </div>

      <p className="campaignUpdated">
        Síðast uppfært: maí 2026 · Upplýsingar uppfærast þegar framboð birta nýja opnunartíma eða viðburði.
      </p>
    </section>
  )
}


function QuizPanel() {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const scores = useMemo(() => {
    const result = { B: 0, C: 0, D: 0, M: 0, S: 0 }
    Object.values(answers).forEach((option) => {
      option.parties.forEach((letter) => {
        result[letter] += 1
      })
    })
    return Object.entries(result)
      .map(([letter, score]) => ({
        letter,
        score,
        party: parties.find((item) => item.letter === letter)
      }))
      .sort((a, b) => b.score - a.score)
  }, [answers])

  const answeredCount = Object.keys(answers).length
  const topScore = scores[0]?.score || 0

  return (
    <section id="konnun" className="panel quizPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><HelpCircle size={15} /> Könnun</p>
          <h2>Hvaða áherslur passa þér?</h2>
          <p>Svaraðu spurningunum og sjáðu hvaða framboð í Ísafjarðarbæ er næst þínum áherslum.</p>
        </div>
      </div>

      <div className="quizProgress">
        <div className="quizProgressBar">
          <i style={{ width: `${(answeredCount / quizQuestions.length) * 100}%` }} />
        </div>
        <span>{answeredCount} af {quizQuestions.length} spurningum</span>
      </div>

      <div className="quizGrid">
        <div className="quizQuestions">
          {quizQuestions.map((question, index) => (
            <article className="quizQuestion" key={question.text}>
              <h3>{index + 1}. {question.text}</h3>
              <div className="quizOptions">
                {stableShuffleOptions(question.options, index).map((option) => (
                  <button
                    key={option.label}
                    className={answers[index]?.label === option.label ? 'selected' : ''}
                    onClick={() => { setAnswers({ ...answers, [index]: option }); setShowResults(false) }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="quizResult">
          <h3>Niðurstaða</h3>
          <p>{answeredCount} af {quizQuestions.length} spurningum svarað.</p>

          {!showResults ? (
            <div className="quizLocked">
              <strong>Engin niðurstaða enn</strong>
              <span>Svaraðu spurningunum og smelltu svo á takkann til að sjá hvaða framboð passar best við áherslurnar þínar.</span>
              <button
                className="quizSubmit"
                disabled={answeredCount === 0}
                onClick={() => setShowResults(true)}
              >
                Sjá niðurstöðu
              </button>
            </div>
          ) : (
            <>
              <div className="resultBars">
                {scores.map(({ letter, score, party }) => (
                  <div className="resultRow" key={letter}>
                    <LogoMark party={party} />
                    <span>{party.shortName}</span>
                    <div className="bar"><i style={{ width: topScore ? `${(score / topScore) * 100}%` : '0%' }} /></div>
                    <strong>{score}</strong>
                  </div>
                ))}
              </div>
              <p className="quizDisclaimer">Niðurstaðan er vísbending byggð á svörum þínum, ekki formleg kosningaráðgjöf.</p>
            </>
          )}

          <button className="quizReset" onClick={() => { setAnswers({}); setShowResults(false) }}>
            Hreinsa svör
          </button>
        </aside>
      </div>
    </section>
  )
}

function TopicSwitchButton({ topic, direction, onClick }) {
  return (
    <button className={`topicSwitch ${direction}`} onClick={onClick}>
      <span className="switchArrow">{direction === 'prev' ? '←' : '→'}</span>
      <span className="switchText">
        <small>{direction === 'prev' ? 'Fyrra málefni' : 'Næsta málefni'}</small>
        <strong>{topic.name}</strong>
      </span>
    </button>
  )
}

function TopicDetail({ topic, setActiveTopic }) {
  const currentIndex = topics.findIndex((item) => item.id === topic.id)
  const previousTopic = topics[(currentIndex - 1 + topics.length) % topics.length]
  const nextTopic = topics[(currentIndex + 1) % topics.length]

  return (
    <section className="topicDetail">
      <div className="topicDetailNav">
        <TopicSwitchButton
          topic={previousTopic}
          direction="prev"
          onClick={() => setActiveTopic(previousTopic.id)}
        />

        <button className="backButton" onClick={() => setActiveTopic(null)}>
          Öll málefni
        </button>

        <TopicSwitchButton
          topic={nextTopic}
          direction="next"
          onClick={() => setActiveTopic(nextTopic.id)}
        />
      </div>

      <article className="detailHero topicHero">
        <div className="topicIconLarge">•</div>
        <div>
          <p className="eyebrow">Málefnasíða</p>
          <h1>{topic.name}</h1>
          <p>Hér má sjá stefnuatriði flokkanna undir þessu málefni. Atriðin eru tekin úr stefnuskrám, vefsíðum og efni flokkanna og höfð sýnileg án þess að fela neitt á bak við „sýna meira“.</p>
        </div>
      </article>

      <div className="topicPartyGrid">
        {parties.map((party) => (
          <article className="panel topicPartyCard" key={party.id}>
            <div className="topicPartyHeader">
              <LogoMark party={party} />
              <div>
                <span>{party.list}</span>
                <h2>{party.name}</h2>
              </div>
            </div>

            <p>{party.topics[topic.id]}</p>

            <ul className="topicActionList">
              {(party.policyByTopic?.[topic.id] || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function TopicsOverview({ setActiveTopic }) {
  return (
    <section id="malefni" className="panel topicsOverview">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><BarChart3 size={15} /> Málefnasíður</p>
          
          <p>Veldu málefni og sjáðu allar áherslur allra flokka á einni síðu.</p>
        </div>
      </div>

      <div className="topicOverviewGrid">
        {topics.map((topic) => (
          <button className="topicOverviewCard" key={topic.id} onClick={() => setActiveTopic(topic.id)}>
            <strong>{topic.name}</strong>
            <small>Skoða áherslur allra flokka →</small>
          </button>
        ))}
      </div>
    </section>
  )
}


function EventsPanel() {
  const [loadedEvents, setLoadedEvents] = useState([])

  useEffect(() => {
    let mounted = true

    loadEvents().then((items) => {
      if (mounted) setLoadedEvents(items)
    })

    return () => {
      mounted = false
    }
  }, [])

  const visibleEvents = [...loadedEvents]
    .filter((event) => event.date >= '2026-04-13')
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))

  return (
    <section id="vidburdir" className="panel eventsPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Viðburðir</p>
          <h2>Næstu viðburðir</h2>
          <p>Viðburðir, opið hús og kosningakaffi sem hafa verið auglýst eftir 13. apríl. Hægt er að uppfæra listann úr Google Sheet.</p>
        </div>
      </div>

      <div className="eventTimeline">
        {visibleEvents.map((event) => {
          const party = parties.find((item) => item.letter === event.party)

          return (
            <a className="eventItem" href={event.url} target="_blank" rel="noreferrer" key={`${event.date}-${event.time}-${event.title}`}>
              <div className="eventDate">
                <strong>{event.date.split('-').slice(1).reverse().join('.')}</strong>
                <span>{event.time}</span>
              </div>

              <div className="eventLogo">
                {party ? <LogoMark party={party} /> : <span>✓</span>}
              </div>

              <div>
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <small>{event.source}</small>
              </div>
            </a>
          )
        })}

        {!visibleEvents.length && (
          <div className="eventEmpty">
            Engir viðburðir fundust. Athugaðu Google Sheet tenginguna eða bættu við viðburði.
          </div>
        )}
      </div>
    </section>
  )
}

function ArticlesPanel({ setActiveTopic }) {
  const openArticle = (article) => {
    if (article.topicId) {
      setActiveTopic(article.topicId)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (article.anchor) {
      document.querySelector(`#${article.anchor}`)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="greinar" className="panel articlesPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Greinar</p>
          <h2>Kosningavakt</h2>
          <p>Stuttar samantektir sem hjálpa íbúum að bera saman málefni og upplýsingar.</p>
        </div>
      </div>

      <div className="articleGrid">
        {articles.map((article) => (
          <button
            className="articleCard"
            key={article.title}
            onClick={() => openArticle(article)}
          >
            <span>{article.category}</span>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <small>{article.date}</small>
          </button>
        ))}
      </div>
    </section>
  )
}

function Sources() {
  return (
    <section id="heimildir" className="sourcesFooter">
      <div className="sourcesFooterHeader">
        <p className="eyebrow"><LinkIcon size={15} /> Heimildir</p>
        
      </div>

      <div className="sourcesFooterGrid">
        {sourceGroups.map((group) => (
          <div className="sourceFooterGroup" key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.links.map((link) => (
                <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const [activePartyId, setActiveParty] = useState(null)
  const [activeTopicId, setActiveTopic] = useState(null)
  const activeParty = parties.find((party) => party.id === activePartyId)
  const activeTopic = topics.find((topic) => topic.id === activeTopicId)

  return (
    <div className="site">
      <Header setActiveParty={setActiveParty} setActiveTopic={setActiveTopic} />

      {activeTopic ? (
        <main className="pageWrap">
          <TopicDetail topic={activeTopic} setActiveTopic={setActiveTopic} />
        </main>
      ) : activeParty ? (
        <main className="pageWrap">
          <PartyDetail party={activeParty} setActiveParty={setActiveParty} />
        </main>
      ) : (
        <main>
          <Hero />
          <PartyCards setActiveParty={setActiveParty} />
<div className="pageWrap stackedSections">
            <TopicsOverview setActiveTopic={setActiveTopic} />
            <EventsPanel />
            <ArticlesPanel setActiveTopic={setActiveTopic} />
            <ElectionInfoPanel />
            <CampaignInfoPanel />
            <QuizPanel />
            <Sources />
          </div>
        </main>
      )}
    </div>
  )
}
