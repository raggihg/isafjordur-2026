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
        Unnið af Ragnari Högna í samstarfi við ChatGPT.<br />
        Upplýsingar byggja á opinberum gögnum og efni frá framboðunum sjálfum.
      </div>
    </section>
  )
}
