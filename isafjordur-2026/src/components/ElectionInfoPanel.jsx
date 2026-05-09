import React from 'react'
import { MapPin } from 'lucide-react'

export default function ElectionInfoPanel() {
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
