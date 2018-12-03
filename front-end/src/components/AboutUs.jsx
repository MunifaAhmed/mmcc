import React from 'react';
import { Header, Segment, Grid } from 'semantic-ui-react'


const AboutUs = () => {
  return (
    <div id='LM'>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3} />
          <Grid.Column width={11}>
            <Segment id='contenthome' padded raised>
              <Header id='LMheader' as='h1'>Meat Carbon Calculator</Header>
              <div className='row'>
                <div className='col'>

                  <h3 id='LMsubheader'>If you're looking to reduce your carbon footprint, your diet is a good place to start—specifically and especially with beef.</h3>
                </div>
                <p>
                  <div className='col'>
                    Beef’s environmental impact dwarfs that of other meat including chicken and pork, new research reveals, with one expert saying that eating less red meat would be a better way for people to cut carbon emissions than giving up their cars.
      </div>
                  <div className='col'>
                    The heavy impact on the environment of meat production was known but the research shows a new scale and scope of damage, particularly for beef. The popular red meat requires 28 times more land to produce than pork or chicken, 11 times more water and results in five times more climate-warming emissions. When compared to staples like potatoes, wheat, and rice, the impact of beef per calorie is even more extreme, requiring 160 times more land and producing 11 times more greenhouse gases.
      </div>
                  <div className='col'>
                    Agriculture is a significant driver of global warming and causes 15% of all emissions, half of which are from livestock. Furthermore, the huge amounts of grain and water needed to raise cattle is a concern to experts worried about feeding an extra 2 billion people by 2050. But previous calls for people to eat less meat in order to help the environment, or preserve grain stocks, have been highly controversial.
      </div>
                  <div className='col'>
                    Jamais Cascio, former managing editor over at Worldchanging and current proprietor of Open the Future, recently got to wondering: with all the recent hubbub surrounding carbon footprints, credits and offsets, what do everyday, common items contribute to our warming globe? He started with an American institution: the cheeseburger, and, after a little digging and number-crunching he came up with 6.3 to 6.8 pounds (2.85 to 3.1 kg) of carbon emissions per burger. This includes a myriad of factors, from growing the feed for the cattle for the beef and cheese, growing the produce, storing and transporting the components, as well as cooking them all, and he appears to have done a fairly thorough job. So, why choose burgers? The average American eats three burgers per week, or about 150 burgers per year; that's a lot of beef, cheese, shipping and grilling, and it really adds up. According to Jamais' calculations, America's love of burgers contributes approximately 941 to 1023 pounds (that's 428-465 kg) of greenhouse gas per person, per year -- the rough equivalent of the annual carbon output from 7,500-15,000 SUVs if the 300 million US citizens hit the 3 burgers/week average. Will Carbon McCredits soon be appearing on menus across the country (and the world)? Jamais' discerning look at this common food item suggests we may want to think about it.
      </div>
                  <div className='col'>
                    After reducing intercontinental flights, dependence on cars, and living in the 'burbs, reducing your meat consumption is one of the strongest ways to reduce your carbon footprint. As reported by The Washington Post, about a third of all greenhouse gasses comes from food production and agriculture. None of this is news, but the Post shows how we can now quantify just how costly beef is to the environment, as cattle produce a staggering amount of methane, a nasty greenhouse gas.
      </div>
                  <div className='col'>
                    The article cites a recent study by the University of Minnesota, which shows how by swapping out one beef-based meal a week for beans, you can avoid releasing 331 kilograms (730 pounds) of carbon dioxide every year. While chicken and pork aren't environmentally great, they're much less carbon-intensive than beef. Lamb, however, is also pretty carbon-costly.
      </div>
                  <div className='col'>
                    That said, not all beef is equal. Farms that grass-feed and manage their cattle properly for "carbon sequestration"—long-term storage of carbon—can actually have a positive impact on the environment. When cattle graze on real grass, carbon is locked away in the soil, stopping it from entering the biosphere. “At minimum [we could produce] carbon-neutral beef but most likely a beef product that has a negative carbon-footprint,” Jason Rowntree, associate professor at Michigan State University, told The Post. But don't think that just because you're buying beef marketed as "grass-fed" you're doing your part—it's impossible to know exactly what goes on at these purportedly organic farms, and whether or not the farmers in question are managing for carbon sequestration.
      </div>
                </p>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default AboutUs