import React from 'react'
import { Link as LinkIcon } from 'lucide-react'
import { sourceGroups } from '../data/sourceGroups.js'

export default function Sources() {
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

      <div className="siteCredit">
        Síðan er unnin af Ragnari Högna í samstarfi við ChatGPT.<br />
        Markmið síðunnar er að gera upplýsingar um sveitarstjórnarkosningarnar í Ísafjarðarbæ aðgengilegri á einum stað.<br />
        Upplýsingar byggja á opinberum gögnum, stefnuskrám og efni frá framboðunum sjálfum. Upplýsingar geta breyst og misjafnt getur verið hversu aðgengilegar þær eru frá framboðunum og samfélagsmiðlum þeirra. Ekki er ábyrgst að allar upplýsingar séu tæmandi eða fullkomlega réttar.
      </div>
    </section>
  )
}
