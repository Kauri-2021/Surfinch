<div className='birdProfileContainer'>
<div style={props} className='birdBio'>
  <h1 className='birdTitle'>Canada Goose</h1>
  <h3 className='scientific'><em>Branta canadensis</em> </h3>
  <small>| General Information |</small>
  <div className='paragraphBird'>
    {taxonomy ? <p>{taxonomy}...click here for more</p> : null}
  </div>
</div>
<div className="secondRowBP">
  <div className='notesWrapper'>
    {show ?
      <div className="birdNotes">
        <h4 className='notesTitle'> My Notes</h4>
        <hr className="dash"></hr>
        <p className='notesText'>To be fair, you have to have a very high IQ to understand Rick and Morty. The humor is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head. There's also Rick's nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE. As a consequence people who dislike Rick and Morty truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in Rick's existencial catchphrase "Wubba Lubba Dub Dub," which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon's genius unfolds itself on their television screens. What fools... how I pity them. And yes by the way, I DO have a Rick and Morty tattoo. And no, you cannot see it. It's for the ladies' eyes only- And even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand.</p>
        <button className='upButton' onClick={event => handleClick(event)}><FaChevronUp size="25px" /></button>
      </div> : <button className='downButton' onClick={event => handleClick(event)}> Notes <FaChevronDown size="25px" />  </button>}
  </div>
  <div className='birdProfilePic'>
    <img src='https://images.unsplash.com/photo-1451493683580-9ec8db457610?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGlhbiUyMGdvb3NlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="Responsive image"></img>
  </div>
</div>
<div className='heatMap'>
  <Map heatMap={location} />
</div>
</div>