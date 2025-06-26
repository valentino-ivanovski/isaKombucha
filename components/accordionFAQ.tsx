import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem } from "@heroui/accordion";

const AccordionFAQ = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-xl",
    trigger: "px-4 py-3 hover:underline rounded-lg h-16 flex items-center transition-colors",
    indicator: "text-lg transition-transform duration-300 data-[open=true]:-rotate-90",
    content: "text-center px-4 w-full max-w-lg mx-auto py-4 text-lg",
  };

const answers = {
    question1: "Kombucha is an ancient fermented tea that has been made for the past two-thousand years.  Some believe it started in Japan others believe it started in Siberia, wherever it started it is a beautiful gift I am happy we received.  It is made with tea, sugar, and fermented with a Scoby (symbiotic-culture-of-bacteria-and-yeast), in this process the tea transforms from a plain sweet tea to a tea that is literally full of life.",
    question2: "Because kombucha is fermented, it all contains trace amounts of alcohol. For kombucha to be considered a non-alcoholic beverage by EFSA standards, it must contain under 1.2% alcohol. Isa's kombucha has a consistent control of our alcohol levels at our Quality Control lab overseen by a biochemist and lab analyst who measure each batch of kombucha (in each stage of the fermentation process) to ensure it is safe throughout its shelf-life. Therefore we can guarantee alcohol levels below 0.5%.",
    question3: "The sediment at the bottom is supposed to be there. It shows that the product is indeed RAW and contains ALIVE and good-for-you bacteria and yeast.  It shows that (Nature and Life) is still present in the Kombucha, so don’t worry it’s not the “nutritional prize” or nucleus and it tastes no different rest of the drink. It's just a sign that shows it was brewed right.",
    question4: "Kombucha can often taste sour if fermented for too long.  The scoby will continue to ferment and eat the sugar until it's gone, just like sauerkraut (which is also fermented and has that sour taste).  With kombucha it’s important to just find the right timeline for the fermentation process, it took me almost two years to figure it out.  We now ferment our kombucha for 8 days, giving it the perfect balance of sweet/sour.",
    question5: "Kombucha is 100% vegan friendly, as it consists of water, tea, beet sugar, and cold-pressed juices.",
    question6: "In all dm and Mercator stores in Slovenia, certain Tuš stores, and certain Spar stores.  It is also available in  bars/restaurants around Slovenia.",
    question7: "Isa’s Kombucha is raw, and will never be pasteurized.  Therefore it must remain refrigerated 24/7.",
    question8: "Isa’s Kombucha is not carbonated, all the bubbles are naturally occurring and wild.",
    question9: "Isa’s Kombucha lasts up to six months if it stays below 8 degrees Celsius at all times.",
    question10: "If a bottle is unopened on the counter, you should have up to 4 hours before you'll notice any flavor change. You may notice slight differences in the flavor after that, and you will experience a stronger change in flavor after 48 hours if left unrefrigerated.  If a bottle is left open and put in the refrigerator, it will go flat within a few hours but the flavors will change less over time. We always recommend drinking Isa’s straight out of the fridge.",
    question11: (
        <>
            If you experience a bottle that tastes a bit strange, please share your feedback and let us know at{" "}
            <a href="mailto:hello@isakombucha.com" className="underline text-black">
                hello@isakombucha.com
            </a>
            . Please include where you bought it, the flavor, and the best-before date so we can figure out why the batch tasted different than usual.
        </>
    ),
    question12: "My flavors I like to think are unique, I like to challenge people's palates, I like to gather info on what people don’t really like and twist it.  I like to push people out of their comfort zone and show them crazy flavors,  like putting cayenne peppers with apples, or cucumbers with basil can be interesting. I like to challenge the social norm of drink flavors here in Slovenia.",
    question13: "Isa’s Kombucha differentiates itself from its competitors because, first of all, we’re unpasteurized, meaning we don’t heat our finished kombucha and kill all the good things. We are small-batch, which means that all of our kombucha is brewed in 6L glass jars the way they have been doing it for centuries. It is a lot of work for our backs but we believe quality comes first.  We have a shorter fermentation process, don’t worry still the same benefits just without the vinegary sour taste. We take pride in using real whole-foods such as fresh basil leaves, whole cayenne peppers, fresh ginger, lemons. Then everything is cold-pressed and added to the boouch. Finally, instead of forcing CO2, we let the bottles work their magic, and make their own wild bubbles. We want to break the stereotype that kombucha is sour, vinegary, and unappealing. Shine a new light and show people its refreshing crisp and just what your body needs",
    question14: "We love new kombucha brewers and would love to help, however, we do NOT GIVEAWAY our Scoby.",
    question15: "Sadly we do not take bottles back because at the size we are it is not cost-effective, reusing bottles for us at this stage means using more electricity, manpower, and time. Things we don’t have extra of in a startup.",
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" bg-white/5 rounded-2xl mt-8 mb-8"
    >
    <Accordion
      className="p-4 flex flex-col gap-2 w-full mx-auto"
      itemClasses={itemClasses}
      showDivider={true}
      selectionMode="multiple"
    >
      <AccordionItem key="1" aria-label="What is Kombucha?" title="WHAT IS KOMBUCHA?" className="text-center">
        {answers.question1}
      </AccordionItem>
      <AccordionItem key="2" aria-label="How much alcohol is in kombucha?" title="HOW MUCH ALCOHOL IS IN KOMBUCHA?" className="text-center">
        {answers.question2}
      </AccordionItem>
      <AccordionItem key="3" aria-label="What is the sediment at the bottom of my bottle?" title="WHAT IS THE SEDIMENT AT THE BOTTOM OF MY BOTTLE?" className="text-center">
        {answers.question3}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Why does some kombucha taste really sour?" title="WHY DOES SOME KOMBUCHA TASTE REALLY SOUR?" className="text-center">
        {answers.question4}
      </AccordionItem>
      <AccordionItem key="5" aria-label="Is it vegan?" title="IS IT VEGAN?" className="text-center">
        {answers.question5}
      </AccordionItem>
      <AccordionItem key="6" aria-label="Where can I find Isa’s?" title="WHERE CAN I FIND ISA’S?" className="text-center">
        {answers.question6}
      </AccordionItem>
      <AccordionItem key="7" aria-label="Is our kombucha pasteurized?" title="IS OUR KOMBUCHA PASTEURIZED?" className="text-center">
        {answers.question7}
      </AccordionItem>
      <AccordionItem key="8" aria-label="Do you carbonate?" title="DO YOU CARBONATE?" className="text-center">
        {answers.question8}
      </AccordionItem>
      <AccordionItem key="9" aria-label="What is the shelf life?" title="WHAT IS THE SHELF LIFE?" className="text-center">
        {answers.question9}
      </AccordionItem>
      <AccordionItem key="10" aria-label="How long will an open bottle of Isa’s last?" title="HOW LONG WILL AN OPEN BOTTLE OF ISA’S LAST?" className="text-center">
        {answers.question10}
      </AccordionItem>
      <AccordionItem key="11" aria-label="Why does my bottle of Isa’s taste different than it normally does?" title="WHY DOES MY BOTTLE OF ISA’S TASTE DIFFERENT THAN IT NORMALLY DOES?" className="text-center">
        {answers.question11}
      </AccordionItem>
      <AccordionItem key="12" aria-label="How did you choose your flavor palate?" title="HOW DID YOU CHOOSE YOUR FLAVOR PALATE?" className="text-center">
        {answers.question12}
      </AccordionItem>
      <AccordionItem key="13" aria-label="How is Isa’s kombucha different from its competitors?" title="HOW IS ISA’S KOMBUCHA DIFFERENT FROM ITS COMPETITORS?" className="text-center">
        {answers.question13}
      </AccordionItem>
      <AccordionItem key="14" aria-label="Can I buy a SCOBY from you?" title="CAN I BUY A SCOBY FROM YOU?" className="text-center">
        {answers.question14}
      </AccordionItem>
      <AccordionItem key="15" aria-label="Can I return bottles to you?" title="CAN I RETURN BOTTLES TO YOU?" className="text-center">
        {answers.question15}
      </AccordionItem>
    </Accordion>
    </motion.div>
  );
};

export default AccordionFAQ;