import {
  Anchor,
  Building2,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Home,
  Info,
  Landmark,
  School,
  Search,
  ShieldCheck,
  Users,
  Waves
} from 'lucide-react'

const parties = [
  {
    letter: 'B',
    name: 'Framsókn og óháðir',
    color: '#19a463',
    summary: 'Áhersla á fjölskyldur, húsnæði, skóla, atvinnu, innviði og ábyrga fjármálastjórn.',
    status: 'Stefna komin inn',
    source: 'Stefnuskrá B-lista'
  },
  {
    letter: 'C',
    name: 'Viðreisn',
    color: '#f28c28',
    summary: 'Áhersla á gagnsæi, skilvirka stjórnsýslu, atvinnuþróun og nútímalega þjónustu.',
    status: 'Drög / þarf yfirferð',
    source: 'Bæta þarf við frumheimild'
  },
  {
    letter: 'D',
    name: 'Sjálfstæðisflokkur',
    color: '#1f66d1',
    summary: 'Áhersla á fjármál, framkvæmdir, atvinnulíf, lægri álögur og sterka innviði.',
    status: 'Drög / þarf yfirferð',
    source: 'Bæta þarf við frumheimild'
  },
  {
    letter: 'M',
    name: 'Miðflokkur',
    color: '#26518b',
    summary: 'Stefnuskrá þarf að setja inn þegar frumheimild liggur fyrir.',
    status: 'Vantar fulla stefnu',
    source: 'Vantar heimild'
  },
  {
    letter: 'S',
    name: 'Samfylkingin',
    color: '#d83a5b',
    summary: 'Áhersla á velferð, húsnæðismál, barnafjölskyldur, jöfnuð og framtíðaruppbyggingu.',
    status: 'Drög / þarf yfirferð',
    source: 'Bæta þarf við frumheimild'
  }
]

const topics = [
  {
    icon: Home,
    title: 'Húsnæðismál',
    points: {
      B: 'Fjölbreytt húsnæði, lóðaframboð og aðgerðir til að auðvelda fólki að búa í sveitarfélaginu.',
      C: 'Þarf að fylla út úr stefnuskrá.',
      D: 'Þarf að fylla út úr stefnuskrá.',
      M: 'Vantar gögn.',
      S: 'Áhersla á húsnæðisuppbyggingu og öruggari búsetukosti.'
    }
  },
  {
    icon: School,
    title: 'Skólar og fjölskyldur',
    points: {
      B: 'Sterkir leik- og grunnskólar, þjónusta við börn og fjölskylduvænt samfélag.',
      C: 'Þarf að fylla út úr stefnuskrá.',
      D: 'Þarf að fylla út úr stefnuskrá.',
      M: 'Vantar gögn.',
      S: 'Stuðningur við börn, fjölskyldur og menntun.'
    }
  },
  {
    icon: Anchor,
    title: 'Hafnir og atvinnulíf',
    points: {
      B: 'Uppbygging innviða, hafna og atvinnusvæða til að styrkja byggðina.',
      C: 'Áhersla þarf að staðfesta með heimild.',
      D: 'Áhersla þarf að staðfesta með heimild.',
      M: 'Vantar gögn.',
      S: 'Þarf að fylla út úr stefnuskrá.'
    }
  },
  {
    icon: Users,
    title: 'Velferð og eldri borgarar',
    points: {
      B: 'Þjónusta nær íbúum og gott samfélag fyrir alla aldurshópa.',
      C: 'Þarf að fylla út úr stefnuskrá.',
      D: 'Þarf að fylla út úr stefnuskrá.',
      M: 'Vantar gögn.',
      S: 'Áhersla á öldrunarþjónustu, jöfnuð og félagslega þjónustu.'
    }
  },
  {
    icon: Landmark,
    title: 'Fjármál og stjórnsýsla',
    points: {
      B: 'Ábyrg fjármálastjórn og skýr forgangsröðun.',
      C: 'Gagnsæi, skilvirkni og nútímaleg stjórnsýsla.',
      D: 'Ábyrg rekstur, framkvæmdaáherslur og lægri álögur.',
      M: 'Vantar gögn.',
      S: 'Þarf að fylla út úr stefnuskrá.'
    }
  }
]

const sources = [
  'Framboðslistar Ísafjarðarbæjar 2026',
  'Stefnuskrá B-lista Framsóknar og óháðra',
  'Stefnuskrár annarra lista verða settar inn með beinum heimildum'
]

function App() {
  return (
    <div className="page">
      <header className="siteHeader">
        <a className="brand" href="#">
          <span className="brandMark">Í26</span>
          <span>
            <strong>Ísafjörður 2026</strong>
            <small>Stefnusamanburður</small>
          </span>
        </a>
        <nav>
          <a href="#flokkar">Flokkar</a>
          <a href="#samanburdur">Samanburður</a>
          <a href="#heimildir">Heimildir</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow"><Waves size={16} /> Sveitarstjórnarkosningar í Ísafjarðarbæ</p>
          <h1>Berðu saman stefnur flokkanna á einfaldan og hlutlausan hátt.</h1>
          <p className="lead">
            Hér verða allar stefnuskrár flokkanna teknar saman, flokkaðar eftir málaflokkum
            og tengdar við frumheimildir svo kjósendur geti borið saman afstöðu á einum stað.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#samanburdur">Skoða samanburð <ChevronRight size={18} /></a>
            <a className="button secondary" href="#heimildir">Sjá heimildir</a>
          </div>
        </div>

        <div className="heroPanel">
          <div className="stat"><strong>5</strong><span>framboðslistar</span></div>
          <div className="stat"><strong>5</strong><span>málaflokkar í byrjun</span></div>
          <div className="stat"><strong>100%</strong><span>heimildir sýnilegar</span></div>
        </div>
      </section>

      <section className="introGrid">
        <article>
          <Info size={24} />
          <h2>Hvernig virkar síðan?</h2>
          <p>
            Við setjum inn beinar upplýsingar úr stefnuskrám, styttum þær í læsileg atriði
            og merkjum skýrt hvað er staðfest og hvað vantar enn heimild fyrir.
          </p>
        </article>
        <article>
          <Search size={24} />
          <h2>Leit og samanburður</h2>
          <p>
            Næsta útgáfa getur bætt við leit, síum og spurningaleik þar sem fólk getur fundið
            hvaða áherslur passa best við þeirra skoðanir.
          </p>
        </article>
        <article>
          <ShieldCheck size={24} />
          <h2>Hlutleysi</h2>
          <p>
            Markmiðið er ekki að mæla með flokki heldur að hjálpa fólki að sjá muninn á stefnumálum.
          </p>
        </article>
      </section>

      <section id="flokkar" className="section">
        <div className="sectionHeader">
          <p className="eyebrow">Framboð</p>
          <h2>Flokkarnir fimm</h2>
        </div>
        <div className="partyGrid">
          {parties.map((party) => (
            <article className="partyCard" key={party.letter} style={{ '--party': party.color }}>
              <div className="partyTop">
                <span className="partyLetter">{party.letter}</span>
                <span className="status">{party.status}</span>
              </div>
              <h3>{party.name}</h3>
              <p>{party.summary}</p>
              <small>{party.source}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="samanburdur" className="section comparisonSection">
        <div className="sectionHeader">
          <p className="eyebrow">Málaflokkar</p>
          <h2>Samanburður eftir áherslum</h2>
        </div>

        <div className="topicList">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <article className="topicCard" key={topic.title}>
                <div className="topicTitle">
                  <span><Icon size={22} /></span>
                  <h3>{topic.title}</h3>
                </div>
                <div className="comparisonGrid">
                  {parties.map((party) => (
                    <div className="comparisonCell" key={party.letter}>
                      <strong style={{ color: party.color }}>{party.letter}</strong>
                      <p>{topic.points[party.letter]}</p>
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="cta">
        <Building2 size={36} />
        <h2>Næstu skref</h2>
        <p>
          Setjum inn allar stefnuskrárnar, bætum við beinum tilvitnunum og gerum samanburðinn
          nákvæmari áður en síðan er kynnt opinberlega.
        </p>
      </section>

      <section id="heimildir" className="section sources">
        <div className="sectionHeader">
          <p className="eyebrow">Gegnsæi</p>
          <h2>Heimildir og stöðuyfirlit</h2>
        </div>
        <ul>
          {sources.map((source) => (
            <li key={source}>
              <CheckCircle2 size={18} />
              <span>{source}</span>
              <ExternalLink size={15} />
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <strong>Ísafjörður 2026</strong>
        <span>Óháð upplýsingasíða í vinnslu.</span>
      </footer>
    </div>
  )
}

export default App
