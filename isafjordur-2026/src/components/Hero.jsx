import React from 'react'
import { ShieldCheck } from 'lucide-react'
import { parties } from '../data/parties.js'

export default function Hero() {
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
