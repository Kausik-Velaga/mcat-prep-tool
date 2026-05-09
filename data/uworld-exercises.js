(() => {
  const store = window.CARS_EXERCISE_STORE;
  if (!store) {
    throw new Error("Load data/exercise-store.js before data/uworld-exercises.js.");
  }
  const uworldExercises = [
  {
    "id": "uworld-passage-a",
    "title": "The Knights Templar",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3
      ],
      [
        4,
        5,
        6,
        7,
        8
      ],
      [
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ],
      [
        16,
        17,
        18,
        19,
        20
      ],
      [
        21,
        22,
        23,
        24,
        25,
        26,
        27
      ]
    ],
    "sentences": [
      "The seal of the Knights Templar depicts two knights astride a single horse, a visual testament of the order's poverty at its inception in 1119.",
      "Nevertheless, these Knights of the Temple - who swore oaths not only of poverty but of chastity, loyalty, and bravery - would eventually become one of the wealthiest and most powerful organizations in the medieval world.",
      "So far-reaching was their strength and acclaim that their destruction must have seemed as sudden and surprising as it was utter and irrevocable.",
      "The signs of danger could not have been wholly invisible, however, as the Templars growing influence became perceived as a threat to European rulers.",
      "The first Templars were nine knights who took an oath to defend the Holy Land and any pilgrims who journeyed there after the First Crusade.",
      "Having secured a small benefice from Jerusalem's King Baldwin II, the knights inaugurated their mission at the site of the great Temple of Solomon.",
      "The order quickly attracted widespread admiration as well as many recruits from crusaders and other knights.",
      "Within a year of its founding, the order received a financial endowment from the deeply impressed Count of Anjou, whose example was soon followed by other nobles and monarchs.",
      "As early as 1128, the Templars even gained official papal recognition, and their wealth, holdings, and numbers swelled both in the Holy Land and throughout Europe, especially in France and England.",
      "However, this growing power contained the seeds of the order's downfall.",
      "Although the Templars were generally held in high esteem, the passage of time saw censure and suspicion directed toward them.",
      "The failure of the disastrous siege of Ascalon in 1153 was attributed by some to Templar greed.",
      "Similarly, in 1208 Pope Innocent III condemned the wickedness he believed to exist within their ranks.",
      "Moreover, their increasingly elevated status brought them into conflict with established authorities.",
      "One revealing example occurred in 1252 when, because of the Templars \"many liberties\" as well as their \"pride and haughtiness,\" England's King Henry III proposed to curb the order's strength by reclaiming some of its possessions.",
      "The Templars response was unambiguous: \"So long as thou dost exercise justice thou wilt reign; but if thou infringe it, thou wilt cease to be King!\"",
      "Ultimately, the impoverished Philip the Fair of France joined forces with Pope Clement V to engineer the Templars downfall beginning in 1307.",
      "Conspiring to seize the order's wealth, Clement invited the Templar Master, Jacques de Molay, to meet with him on the pretext of organizing a new crusade to retake the Holy Land.",
      "Shortly thereafter, Philip's forces arrested de Molay and his knights on charges the preponderance of which were almost certainly fabricated.",
      "Ranging from the mundane to the unspeakably perverse, the accusations even included an incredible entry citing \"every crime and abomination that can be committed.\"",
      "Suffering tortures nearly as horrific as the acts of which they were accused, many Templars confessed.",
      "Not everyone believed these charges.",
      "Despite Philip's urging, Edward II of England remained convinced that the accusations were false, a view seemingly shared by other rulers.",
      "Nevertheless, Clement ordered Edward to extract confessions, a task the king tried to carry out with some measure of mercy.",
      "By 1313, the Templar Order had been dissolved by papal decree, and many of its members were dead.",
      "The following year, Jacques de Molay was burned at the stake after declaring that the Templars confessions were lies obtained under torture.",
      "Stories would spread that as he died, he condemned Clement and Philip to join him within a year.",
      "Although it is impossible to say whether he truly called divine vengeance down upon them, within a few months time both pope and king had gone to their graves."
    ],
    "questions": [
      {
        "id": "uworld-1a-main-idea-or-purpose-question-1",
        "type": "Main Idea",
        "originalPrompt": "The author's main point is that the Knights Templar:",
        "choices": [
          "grew to possess power far beyond what might be expected from their humble beginnings.",
          "were actually a more powerful force in Europe than they were in the Holy Land.",
          "possessed great power as an organization, which ironically brought them to ruin.",
          "possessed sufficient power to challenge the rule of monarchs."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 1,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1a. Main Idea or Purpose Question 1",
        "correctChoice": "C"
      },
      {
        "id": "uworld-2d-connecting-claims-with-evidence-question-1",
        "type": "Evidence Connection",
        "originalPrompt": "Which of the following passage claims most strongly supports the assertion that the Templars influence seemed threatening to European rulers?",
        "choices": [
          "Nobles throughout Europe provided money to the Order.",
          "The Templars defied the attempted reforms of Henry III.",
          "The Templars were absorbing crusaders and other knights into their ranks.",
          "Clement V conspired to condemn the Templars on false charges."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 14,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2d. Connecting Claims With Evidence Question 1"
      },
      {
        "id": "uworld-2e-determining-passage-perspectives-question-1",
        "type": "Perspective",
        "originalPrompt": "Which of the following items of passage information most clearly indicates that the author believes the Templars were innocent of the accusations against them?",
        "choices": [
          "The Templars swore oaths of poverty, chastity, loyalty, and bravery.",
          "The list of charges included every crime and abomination.",
          "Jacques de Molay declared that the Templars confessions were lies.",
          "The rulers of many countries did not believe the accusations."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 17,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2e. Determining Passage Perspectives Question 1"
      },
      {
        "id": "uworld-3d-external-scenario-support-or-challenge-question-5",
        "type": "Challenge or Support",
        "originalPrompt": "Which of the following statements, if true, would most challenge the author's claims about the Knights Templar?",
        "choices": [
          "The Templars acquired most of their extensive wealth from King Baldwin II.",
          "The Templars had at times given assistance to Philip the Fair before he plotted against them.",
          "The Templars who originally founded their order had previously considered just living as monks in the Holy Land.",
          "The Templars required their recruits to swear that they would never retreat in battle."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 17,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3d. External Scenario Support or Challenge Question 5"
      },
      {
        "id": "uworld-3f-additional-conclusions-from-new-information-question-2",
        "type": "New Information",
        "originalPrompt": "In 1187, Jerusalem fell to an opposing army and the Templar capital was moved to Paris, where it would remain until the order was dissolved. Based on the passage, this information would most reasonably suggest that:",
        "choices": [
          "the number of recruits to the Templar Order began to decline.",
          "European nations abandoned their goal of controlling the Holy Land.",
          "fewer knights were willing to embark on crusades.",
          "the Templars would have seemed particularly dangerous to Philip the Fair."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 17,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3f. Additional Conclusions From New Information Question 2"
      }
    ]
  },
  {
    "id": "uworld-passage-b",
    "title": "Jackie in 500 Words",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      [
        6,
        7,
        8,
        9
      ],
      [
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19
      ],
      [
        20,
        21,
        22
      ]
    ],
    "sentences": [
      "Born in New York in 1929, Jacqueline Bouvier first came into the public eye as the wife of the 35th president of the United States, John F. Kennedy.",
      "The president was assassinated in 1963, and by the end of what turned out to be a turbulent decade, Mrs. Kennedy had transformed herself into the enigmatic Jackie O., wife of Greek shipping magnate Aristotle Onassis.",
      "Multifaceted and always elusive, the former first lady never ceased to fascinate; however, people had to be satisfied with only glimpses of this fashion icon, culture advocate, historic preservationist, polyglot, equestrienne, and book editor.",
      "Indeed, upon her death in 1994, Jacqueline Kennedy Onassis was described as \"the most intriguing woman in the world.\"",
      "Often topping lists of the most admired individuals of the second half of the 20th century, this celebrated woman is likely someone many wish they had known.",
      "Barring such a possibility, the best way to fully appreciate Jackie's exceptional nature might be to consider the people she wished she had known.",
      "It is unsurprising that this woman who captured the public's imagination for decades distinguished herself from her peers early on.",
      "Notably, in 1951, Ms. Bouvier entered a scholarship contest sponsored by Vogue and open to young women in their final undergraduate year, the annual Prix de Paris.",
      "Among other assignments, applicants were asked to compose a 500-word essay, \"People I Wish I Had Known,\" spotlighting three individuals influential in art, literature, or culture.",
      "The future first lady chose an iconoclastic trio from the Victorian era: the French symbolist poet Charles Baudelaire, the Irish wit Oscar Wilde, and the innovative Ballets Russes dance company founder Sergei Diaghilev.",
      "In a brief composition, Jackie provided deep insights into this bohemian threesome of poet, aesthete, and impresario with whom she strongly identified.",
      "She concluded that Baudelaire deployed \"venom and despair\" as \"weapons\" in his poetry.",
      "She idolized Wilde for being able \"with the flash of an epigram to bring about what serious reformers had for years been trying to accomplish.\"",
      "Diaghilev she defined as an artist of a different sort, someone who \"possessed what is rarer than artistic genius in any one field - the sensitivity to take the best of each man and incorporate it into a masterpiece.\"",
      "As Jackie poignantly observed, such a work is \"all the more precious because it lives only in the minds of those who have seen it,\" dissipating soon after.",
      "Furthermore, although these men espoused different disciplines, she discerned that \"a common theory runs through their work, a certain concept of the interrelation of the arts.\"",
      "Finally, foreshadowing her self-assumed role in the White House as the nation's unofficial minister of the arts, Jackie paid homage with her vision: \"If I could be a sort of Overall Art Director of the Twentieth Century, watching everything from a chair hanging in space, it is their theories of art that I would apply to my period.\"",
      "The contest committee judged Jackie's essay to have exhibited a profound appreciation for the arts combined with a truly outstanding level of intellectual maturity and originality of thought.",
      "Similarly, biographer Donald Spoto deemed Jackie \"remarkably unorthodox,\" not unlike the men about whom she wrote in her unusual composition, which he pronounced \"a masterpiece of perceptive improvisation.\"",
      "Thus, from a pool of 1,279 applicants representing 224 colleges, Jacqueline Bouvier was declared the winner.",
      "Although Ms. Bouvier went on to decline the prestigious award, which would have involved living and working in Paris, she never gave up her dream of being the century's art director.",
      "As first lady, she tirelessly promoted the arts and culture.",
      "Today, the John F. Kennedy Center for the Performing Arts in Washington, DC, is a legacy of Jackie's vision."
    ],
    "questions": [
      {
        "id": "uworld-1a-main-idea-or-purpose-question-2",
        "type": "Main Idea",
        "originalPrompt": "The primary purpose of the passage is to:",
        "choices": [
          "explore Jackie's many facets.",
          "outline Jackie's early life.",
          "emphasize Jackie's uniqueness.",
          "investigate Jackie's popularity."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 2,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1a. Main Idea or Purpose Question 2",
        "correctChoice": "C"
      },
      {
        "id": "uworld-1b-meaning-of-term-question-3",
        "type": "Meaning of Term",
        "originalPrompt": "In the context of the passage, Spoto's phrase \"remarkably unorthodox\" (Paragraph 4) suggests that Jackie's scholarship application:",
        "choices": [
          "displayed her surprising viewpoints.",
          "reflected her unconventional education.",
          "bent the contest rules.",
          "portrayed individuals who seemed unlike her."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 18,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1b. Meaning of Term Question 3"
      },
      {
        "id": "uworld-1c-direct-passage-claims-question-4",
        "type": "Direct Claim",
        "originalPrompt": "Based on the passage, when evaluating essays for the Prix de Paris scholarship contest, the committee seemed to consider: I. the applicant's level of intellectual maturity. II.the applicant's appreciation for the arts. III. the degree of original thought displayed by the applicant's essay.",
        "choices": [
          "II only",
          "III only",
          "I and II only",
          "I, II, and III"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 17,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1c. Direct Passage Claims Question 4",
        "correctChoice": "D"
      },
      {
        "id": "uworld-1d-implicit-claims-or-assumptions-question-1",
        "type": "Implicit Claim",
        "originalPrompt": "The passage suggests that Jackie's admiration for the individuals discussed in her essay was related to her:",
        "choices": [
          "dislike for the artists of her own day.",
          "passion for the social causes highlighted in their works.",
          "appreciation for a holistic approach to artistic expression.",
          "emphasis on the actual artworks rather than artistic principles."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 16,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1d. Implicit Claims or Assumptions Question 1",
        "correctChoice": "C"
      },
      {
        "id": "uworld-3a-exemplar-scenario-for-passage-claims-question-1",
        "type": "Exemplar",
        "originalPrompt": "Which of the following significant accomplishments of Jackie's was most in accord with her stated aspiration?",
        "choices": [
          "Promoting the establishment of a memorial library for the Kennedy presidency",
          "Organizing exhibitions of famous artworks and concerts by renowned musicians",
          "Setting fashion trends with elegant and sophisticated clothing styles",
          "Initiating a \"historic restoration\" of the White House and its furnishings"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 16,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3a. Exemplar Scenario for Passage Claims Question 1"
      }
    ]
  },
  {
    "id": "uworld-passage-c",
    "title": "Probability and The Universe",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      [
        9,
        10,
        11,
        12
      ],
      [
        13,
        14,
        15,
        16,
        17
      ],
      [
        18,
        19,
        20,
        21
      ],
      [
        22,
        23,
        24,
        25,
        26
      ],
      [
        27,
        28,
        29,
        30
      ]
    ],
    "sentences": [
      "The idea of probability is frequently misunderstood, in large part because of a conceptual confusion between objective probability and subjective probability.",
      "The failure to make this distinction leads to an erroneous conflation of genuine possibility with what is in fact merely personal ignorance of outcome.",
      "An example will clarify.",
      "A standard die is rolled on a table, but the outcome of the roll is concealed.",
      "Should an observer be asked the chance that a particular number was rolled - five, say - the natural response is 1/6.",
      "However, this answer is incorrect.",
      "To say there is a one-in-six chance that a five was rolled implies there is an equal chance that any of the other numbers were rolled.",
      "But there is no equal chance, because the roll has already occurred.",
      "Hence, the probability that the result of the roll is a five is either 100% or 0%, and the same is true for each of the other numbers.",
      "It might be objected that such an analysis is an issue of semantics rather than a substantive claim.",
      "For declaring the probability to be 1/6 is merely an expression that, for all we know, any number from 1 through 6 might have been rolled.",
      "But the difference between for all we know and what remains is crucially important, because it forestalls a tendency to make scientific assertions from a perspective biased by human perception....",
      "[T]hus, it should be clear that claims about the purpose of the universe rest on shaky ground.",
      "In particular, we must be wary of inferences drawn from juxtaposing the existence of intelligent life with the genuinely improbable cosmological conditions that make such life possible.",
      "Joseph Zycinski provides an instructive account of those conditions: \"If twenty billion years ago the rate of expansion were minimally smaller, the universe would have entered a stage of contraction at a time when temperatures of thousands of degrees were prevalent and life could not have appeared.",
      "If the distribution of matter were more uniform the galaxies could not have formed.",
      "If it were less uniform, instead of the presently observed stars, black holes would have formed from the collapsing matter.\"",
      "In short, the existence of life (let alone intelligent life) depends upon the initial conditions of the universe having conformed to an extremely narrow range of possible values.",
      "It is tempting to go beyond Zycinski's factual point to draw deep cosmological, teleological, and even theological conclusions.",
      "But no such conclusions follow.",
      "The reason why a life-sustaining universe exists is that if it did not, there would be no one to wonder why a life-sustaining universe exists.",
      "This fact is a function not of purpose, but of pre-requisite.",
      "For instance, suppose again that a five was rolled on a die.",
      "We now observe a five on its face, not because the five was \"meant to be\" but because one side of the die had to land face up.",
      "Even if we imagine that the die has not six but six billion sides, that analysis is unaffected.",
      "Yes, it was unlikely that any given value would be rolled, but some value had to be rolled.",
      "That \"initial condition\" then set the parameters for what kind of events could possibly follow; in this case, the observation of the five.",
      "Similarly, the existence of intelligent beings is evidence that certain physical laws obtained in the universe.",
      "However, it is not evidence that those beings or laws were necessary or intended rather than essentially random.",
      "The subjective probability of that outcome is irrelevant, because in this universe the objective probability of its occurrence is 100%.",
      "Thus, the seemingly low initial chance that such a universe would exist is not in itself indicative of a purpose to its existence."
    ],
    "questions": [
      {
        "id": "uworld-1a-main-idea-or-purpose-question-3",
        "type": "Main Idea",
        "originalPrompt": "The author's main point regarding the existence of the universe is that:",
        "choices": [
          "facts about the universe do not justify inferences about its purpose.",
          "the initial conditions of the universe should guide how we understand other facts about it.",
          "facts about the universe are inevitably framed by biases of human perception.",
          "facts about the universe depend on a subjective understanding of probability."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 13,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1a. Main Idea or Purpose Question 3",
        "correctChoice": "A"
      },
      {
        "id": "uworld-1e-identifying-passage-perspectives-question-1",
        "type": "Perspective",
        "originalPrompt": "Given the information in the passage, with which of the following statements about the quote from Joseph Zycinski would the author be most likely to agree?",
        "choices": [
          "It explains objective and subjective probability.",
          "It exaggerates the point in question.",
          "It entails an erroneous conclusion.",
          "It provides clarifying information."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 14,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1e. Identifying Passage Perspectives Question 1"
      },
      {
        "id": "uworld-2a-logical-relationships-within-passage-question-1",
        "type": "Logical Relationship",
        "originalPrompt": "How could the author more clearly demonstrate the point that, in the die-rolling example, \"the probability that the result of the roll is a five is either 100% or 0%\"?",
        "choices": [
          "Allowing multiple rolls to be made in order to give repeated results",
          "Allowing a die with more than six sides to be used for the roll",
          "Allowing observers to see the result of the die roll instead of concealing it",
          "Allowing observers to predict the probability of a five being rolled before the roll is actually made"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 8,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2a. Logical Relationships Within Passage Question 1",
        "correctChoice": "C"
      },
      {
        "id": "uworld-2b-function-of-passage-claim-question-2",
        "type": "Claim Function",
        "originalPrompt": "Why does the author ask readers to \"imagine that the die has nobillion sides\" t six but six (Paragraph 5)\"",
        "choices": [
          "To explain the tendency for people to confuse objective probability and subjective probability",
          "To illustrate that the improbability of an event does not imply that its occurrence has meaning",
          "To provide a counterpoint to the position advanced by Zycinski",
          "To show that there is no larger purpose to the existence of the universe"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 24,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2b. Function of Passage Claim Question 2"
      },
      {
        "id": "uworld-2e-determining-passage-perspectives-question-5",
        "type": "Perspective",
        "originalPrompt": "Based on the passage, with which of the following statements would the author most likely agree?",
        "choices": [
          "Some things must simply be accepted.",
          "Math is the only universal language.",
          "God does not play dice.",
          "Everything happens for a reason."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 13,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2e. Determining Passage Perspectives Question 5"
      },
      {
        "id": "uworld-3a-exemplar-scenario-for-passage-claims-question-3",
        "type": "Exemplar",
        "originalPrompt": "Which of the following scenarios best exemplifies \"a conceptual confusion between objective probability and subjective probability\" (Paragraph 1), as the author describes it?",
        "choices": [
          "A researcher approximates the starting values for a computer simulation on population growth, runs the simulation twice, and is surprised to receive very different ending values each time.",
          "A law school graduate takes the bar exam, and while waiting for the results to be released she calculates how likely she is to pass.",
          "A gambler counts the number of aces that have been dealt, determines how many are left in the deck, and then judges whether another ace will be dealt.",
          "A hiker views a weather report predicting clear skies for the day, but when she is rained on during her hike, she realizes the meteorologist had been wrong."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 0,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3a. Exemplar Scenario for Passage Claims Question 3"
      }
    ]
  },
  {
    "id": "uworld-passage-d",
    "title": "American Local Motives",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      [
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16
      ],
      [
        17,
        18,
        19,
        20,
        21
      ],
      [
        22,
        23,
        24,
        25
      ]
    ],
    "sentences": [
      "Locomotives were invented in England, with the first major railroad connecting Liverpool and Manchester in 1830.",
      "However, it was in America that railroads would be put to the greatest use in the nineteenth century.",
      "On May 10, 1869, the Union Pacific and Central Pacific lines met at Promontory Point, Utah, joining from opposite directions to complete a years-long project - the Transcontinental Railroad.",
      "This momentous event connected the eastern half of the United States with its western frontier and facilitated the construction of additional lines in between.",
      "As a result, journeys that had previously taken several months by horse and carriage now required less than a week's travel.",
      "By 1887 there were nearly 164,000 miles of railroad tracks in America, and by 1916 that number had swelled to over 254,000.",
      "While the United States still has the largest railroad network in the world, it operates largely in the background of American life, and citizens no longer view trains with the sense of importance those machines once commanded.",
      "Nevertheless, the economic and industrial advantages those citizens enjoy today would not have been possible without America's history of trains; as Tom Zoellner reminds us, \"Under the skin of modernity lies a skeleton of railroad tracks.\"",
      "Although airplanes and automobiles have now assumed greater prominence, the time has arrived for the resurgence of railroads.",
      "A revitalized and advanced railway system would confer numerous essential benefits on both the United States and the globe.",
      "The chief obstacles to garnering support for such a project are the current dominance of the automobile and the languishing technology of existing railroads.",
      "In a sense these two obstacles are one, as American dependence on personal automobiles is partially due to the paucity of rapid public transportation.",
      "The railroads of Europe and Japan, by comparison, have vastly outpaced their American counterparts.",
      "Japan has operated high-speed rail lines continuously since 1964, and in 2007, a French train set a record of 357 miles per hour.",
      "While that speed was achieved under tightly controlled conditions, it still speaks to the great disparity in railroad development between the United States and other countries since the mid-twentieth century.",
      "British trains travel at speeds much higher than those in America, where both the trains themselves and the infrastructure to support them have simply been allowed to fall behind.",
      "In much of Europe it is common for trains to travel at close to 200 miles per hour.",
      "To invest in a modern network of railroads would improve the United States in much the same way that the first railroads did in the nineteenth and early twentieth centuries.",
      "A high-speed passenger rail system would dramatically transform American life as travel between cities and states became quicker and more convenient, encouraging commerce, business, and tourism.",
      "Such a system would also make important strides in environmental preservation.",
      "According to a 2007 British study, \"CO2 emissions from aircraft operations are...at least five times greater\" than those from high-speed trains.",
      "For similar reasons, Osaka, Japan, was ranked as \"the best...green transportation cityGreen City Index. in Asia\" by the 2011 As Lee-in Chen Chiu notes in The Kyoto Economic Review, Osakans travel by railway more than twice as much as they travel by car.",
      "It is true that developing a countrywide high-speed rail system would come with significant costs.",
      "However, that was also true of the original Transcontinental Railroad, as indeed it is with virtually any great project undertaken for the public good.",
      "We should thus move ahead with confidence that the rewards will outweigh the expenditure as citizens increasingly choose to travel by train.",
      "Both for society's gain and the crucial well-being of the planet, our path forward should proceed upon rails."
    ],
    "questions": [
      {
        "id": "uworld-1b-meaning-of-term-question-1",
        "type": "Meaning of Term",
        "originalPrompt": "In the context of the passage, which of the following best explains Zoellner's claim that \"[u]nder the skin of modernity lies a skeleton of railroad tracks\"?",
        "choices": [
          "American trains now represent an obsolete technology.",
          "American trains have been overshadowed by other forms of transportation.",
          "American trains have been largely retired from use in current society.",
          "American trains have been crucial in producing the country as we know it."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 7,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1b. Meaning of Term Question 1",
        "correctChoice": "D"
      },
      {
        "id": "uworld-2a-logical-relationships-within-passage-question-2",
        "type": "Logical Relationship",
        "originalPrompt": "Which of the following passage assertions is the most essential for readers to accept in order for them to find the author's argument reasonable?",
        "choices": [
          "The airline and car industries have undue influence over American travel.",
          "A high-speed railroad network would encourage economic activity.",
          "The superiority of foreign railroads disadvantages America in international trade.",
          "The public would readily adopt high-speed rail travel if it were available."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 21,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2a. Logical Relationships Within Passage Question 2",
        "correctChoice": "B"
      },
      {
        "id": "uworld-2c-extent-of-passage-evidence-question-1",
        "type": "Evidence Scope",
        "originalPrompt": "For which of the following passage claims does the author provide supporting evidence?",
        "choices": [
          "Developing a countrywide high-speed rail system would come with significant costs.",
          "A high-speed passenger rail system would dramatically transform American life.",
          "The United States still has the largest railroad network in the world.",
          "Increasing the use of high-speed railroads would be beneficial for the environment."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 21,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2c. Extent of Passage Evidence Question 1"
      },
      {
        "id": "uworld-2d-connecting-claims-with-evidence-question-3",
        "type": "Evidence Connection",
        "originalPrompt": "Strategy-based Explanation Of the following passage claims, which could most easily be confirmed or refuted?",
        "choices": [
          "Americans no longer view trains with the sense of importance they once commanded.",
          "The railroads of Europe and Japan have vastly outpaced their American counterparts.",
          "An advanced railway system would benefit America economically.",
          "A high-speed passenger rail system would dramatically transform American life."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 7,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2d. Connecting Claims With Evidence Question 3"
      },
      {
        "id": "uworld-3c-new-claim-support-or-challenge-question-4",
        "type": "New Claim",
        "originalPrompt": "How would the author's argument be impacted if studies suggest there is an increasing trend of people using ride-sharing services for transportation?",
        "choices": [
          "It would refute the author's suggestion that trains would help fill a transportational need.",
          "It would weaken the author's comparison between the Transcontinental Railroad and high- speed rail.",
          "It would support the author's assumption that the public could be willing to depend less on vehicle ownership.",
          "It would reinforce the author's claim that automobiles have made public transportation less important."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 14,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3c. New Claim Support or Challenge Question 4"
      },
      {
        "id": "uworld-3d-external-scenario-support-or-challenge-question-1",
        "type": "Challenge or Support",
        "originalPrompt": "Which of the following statements, if true, would most challenge the author's argument for the value of building a high-speed rail system in America?",
        "choices": [
          "On average, the distance between travel destinations is shorter in Europe than it is in America.",
          "The slower speeds of trains in America compared to those in Europe are due to safety issues with American trains.",
          "The primary use of existing American trains is the transport of freight rather than passengers.",
          "The process of constructing high-speed rail could affect the environment in unpredictable ways."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 21,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3d. External Scenario Support or Challenge Question 1"
      },
      {
        "id": "uworld-3g-identifying-analogies-question-3",
        "type": "Analogy",
        "originalPrompt": "Which of the following is most like the relationship between American railroads and British railroads as they are described in the passage?",
        "choices": [
          "An apprentice artist surpasses a master's early works but does not live up to the master's later works.",
          "A financial investor earns large sums of money in the short term but loses a larger amount over time.",
          "A rookie athlete sets a team record but in later seasons his record is broken by a newer player.",
          "An investigative journalist races to break a story but is beaten to the punch by a rival network."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 14,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3g. Identifying Analogies Question 3"
      }
    ]
  },
  {
    "id": "uworld-passage-e",
    "title": "The Divine Sign of Socrates",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      [
        7,
        8,
        9,
        10
      ],
      [
        11,
        12,
        13,
        14,
        15
      ],
      [
        16,
        17,
        18,
        19,
        20,
        21
      ],
      [
        22,
        23,
        24
      ]
    ],
    "sentences": [
      "From his bare feet to his bald pate, the potentially shapeshifting figure of Socrates found in the literary tradition that arose after his controversial trial and death presents an intriguing array of oddities and unorthodoxies.",
      "Most conspicuously, his unshod and shabby sartorial state flaunted poverty at a time when the city of Athens had become obsessed with wealth and its trappings.",
      "Yet the philosopher's peculiar appearance was but a hint of the strange new calling he embraced.",
      "Inspired perhaps by the famous Delphic dictum \"Know thyself,\" he embarked on a mission devoted to finding truth through dialogue.",
      "In what struck some as a dangerous new method of inquiry, he subjected nearly everyone he encountered to intense cross-examination, mercilessly exposing the ignorance of his interlocutors.",
      "Moreover, in a culture that still put stock in magic, the highly charismatic, entertaining, and at times infuriating Socrates appeared to be a sorcerer bewitching the aristocratic young men of Athens who followed him fanatically about the agora.",
      "By all credible accounts, this exceedingly eccentric, self-styled radical truth-seeker had more than a whiff of the uncanny about him.",
      "As Socrates himself explains in Plato's Republic, he was both blessed and burdened with a supernatural phenomenon in the form of a daimonion or inner spirit that always guided him: \"This began when I was a child.",
      "It is a voice, and whenever it speaks, it turns me away from something I am about to do, but it never encourages me to do anything.\"",
      "An overtly rational thinker, Socrates nonetheless considered these warnings - or, in James Miller's words, \"the audible interdictions he experienced as irresistible\" - to be infallible.",
      "Such oracular injunctions were highly anomalous as tutelary spirits were thought to assume a more nuanced presence.",
      "Some scholars have dismissed Socrates recurring sign as a hallucination or psychological aberration.",
      "Others have conjectured that the internal voice might be attributable to the cataleptic or trancelike episodes from which the philosopher purportedly suffered.",
      "Indeed, as Miller notes, \"Socrates was storied for the abstracted states that overtook him\"; not infrequently, his companions would see him stop in his tracks and stand still for hours, completely lost in thought.",
      "As Socrates further insisted, it was only the protestations of this apotreptic voice that held him back from entering the political arena.",
      "Even so, its personal admonitions could not spare him persecution.",
      "Despite the political amnesty extended by the resurgent democracy that succeeded the interim pro-Spartan oligarchy, the thinker's notoriety and ambiguous allegiances aroused suspicions.",
      "In 399 BCE, Socrates was brought before the court on trumped-up charges of impiety; these included willfully neglecting the traditional divinities, flagrantly introducing new gods to the city, and wittingly corrupting the youth.",
      "Athenian society recognized no division between religious and civic duties, and capricious gods demanded constant appeasement through sacrifices and rituals.",
      "Consequently, belief in a purely private deity - particularly a wholly benevolent deity conveying unequivocal messages - was inadmissible.",
      "Worse, as Socrates own testimony revealed, he honored this personal god's authority above even the laws of the city.",
      "Hence, the philosopher's daimonion loomed over his indictment, conviction, and sentencing.",
      "Nevertheless, in his defense speech as reconstructed by Plato in the Apology, Socrates maintained n the confidence in the protective nature and prophetic powers of his inner monitor.",
      "He never questioned its affirmatory silence toward his predicament, remarking, \"The divine faculty would surely have opposed me had I been going to evil and not to good.\" daimonionThus, Socrates acknowledged that his had its reasons, however inscrutable.",
      "Variously described as malcontent and martyr, public nuisance and prophet, laughingstock and hero, the mercurial Athenian, like the sign that guided him, was difficult to fathom yet impossible to ignore."
    ],
    "questions": [
      {
        "id": "uworld-1b-meaning-of-term-question-2",
        "type": "Meaning of Term",
        "originalPrompt": "As the passage author uses the term, apotreptic most likely means:",
        "choices": [
          "strongly discouraging.",
          "irritatingly inconvenient.",
          "highly ambiguous.",
          "seemingly arbitrary."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 13,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1b. Meaning of Term Question 2"
      },
      {
        "id": "uworld-1d-implicit-claims-or-assumptions-question-2",
        "type": "Implicit Claim",
        "originalPrompt": "The passage suggests that the most problematic aspect of Socrates guiding spirit was:",
        "choices": [
          "its show of benevolence.",
          "its manifestation as a voice.",
          "its clarity as an oracle.",
          "its threat to society."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 17,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1d. Implicit Claims or Assumptions Question 2",
        "correctChoice": "D"
      },
      {
        "id": "uworld-2e-determining-passage-perspectives-question-3",
        "type": "Perspective",
        "originalPrompt": "In describing Socrates as being \"uncanny\" and like \"a sorcerer,\" the author seems to suggest that:",
        "choices": [
          "only Socrates followers could understand his method.",
          "Socrates tried to trick people into following him.",
          "Socrates was involved in magic or underhanded practices.",
          "Socrates motivations were not easy for many people to discern."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 5,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2e. Determining Passage Perspectives Question 3",
        "correctChoice": "D"
      },
      {
        "id": "uworld-2e-determining-passage-perspectives-question-4",
        "type": "Perspective",
        "originalPrompt": "The passage author's view of Socrates many eccentricities is that they constituted:",
        "choices": [
          "a means of disguising deceptive practices.",
          "an essential part of his mission and message.",
          "a pattern of behavior characteristic of a political rebel.",
          "symptoms of an identifiable syndrome from which he suffered."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 0,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2e. Determining Passage Perspectives Question 4"
      },
      {
        "id": "uworld-2f-drawing-additional-inferences-question-2",
        "type": "Inference",
        "originalPrompt": "Information in the passage would suggest that Socrates heavy influence on the aristocratic young men of ancient Athens was largely due to his: I. powerful personal magnetism. II. intense engagement in purposeful dialogue. III.intense devotion to civic duties.",
        "choices": [
          "I only",
          "II only",
          "I and II only",
          "I, II, and III"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 5,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2f. Drawing Additional Inferences Question 2"
      },
      {
        "id": "uworld-3b-passage-applications-to-new-context-question-2",
        "type": "Application",
        "originalPrompt": "In the Theages, an ancient dialogue traditionally attributed to Plato, a student asks Socrates whether he ought to train for an athletic competition. Given the information in the passage, which of the following would best explain why the student would have sought Socrates counsel?",
        "choices": [
          "Socrates was a highly eccentric character.",
          "Socrates behavior had made him a well-known figure in Athenian society.",
          "Socrates was dedicated to discovering the truth through deliberative conversation.",
          "Socrates wore shabby clothing and was unconcerned with the appearance of wealth."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 5,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3b. Passage Applications to New Context Question 2"
      }
    ]
  },
  {
    "id": "uworld-passage-f",
    "title": "The Victorian Internet",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2
      ],
      [
        3,
        4,
        5,
        6
      ],
      [
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
      ],
      [
        15,
        16,
        17,
        18,
        19,
        20
      ],
      [
        21,
        22,
        23
      ]
    ],
    "sentences": [
      "Lasting roughly from 1820 to 1914, the Victorian Era is often defined by its many distinctive sociological conditions, including industrialization, urbanization, railroad travel, imperialism, territorial expansionism, and the frictions sparked by Darwinism and democratic reform.",
      "However, descriptors that may not come as readily to mind are \"the Information Age\" and \"the Age of Communication\"; nor would we likely associate this era with something called the \"highway of thought,\" which emanated from the electric telegraph - an invention that, in retrospect, could be renamed \"the Victorian Internet.\"",
      "Yet the rise of the electric telegraph in the mid-1800s constituted the greatest revolution in communication since the invention of the printing press in the fifteenth century and until the launch of the World Wide Web at the end of the twentieth century.",
      "Historically, messages could be conveyed only as fast as a person could travel from one location to another.",
      "However, by the end of the eighteenth century, the Chappe brothers had constructed a rudimentary optical telegraph on a hilltop tower in France.",
      "Using the large, jointed arms attached to the roof, operators could form various configurations to communicate a message to a similar tower farther away, which would then relay the message to a third tower, and so on, in a long-distance chain.",
      "Nevertheless, even with telescopes, visibility severely hampered the efficacy of this semaphore system.",
      "After countless attempts by scientists to use electricity to transmit messages, innovators in both Britain and America, including the painter and polymath Samuel F.B. Morse, worked at harnessing electromagnetic forces to send communications via cable.",
      "But while in Britain the technology was initially reserved for railway signaling, in the U.S. it culminated in the transmission of a message along a 40-mile telegraphic wire from Washington, D.C., to Baltimore in 1844.",
      "Using a binary code of short and long electrical impulses, or \"dots and dashes,\" Morse dispatched the words: \"What hath God wrought?\"",
      "Within 20 years, telegraph cables crisscrossed the continental U.S. and much of Europe.",
      "The telegraph office became ubiquitous, and telegrams - often bouncing from one office to another like emails tossed from server to server - reached ever more remote destinations.",
      "Following some spectacular failures, a durable cable was stretched across the floor of the Atlantic Ocean, enabling Europe and the U.S. to exchange messages within minutes.",
      "In the 1870s, the British Empire connected London with outposts in India and Australia.",
      "While individual telegram speed remained relatively constant, an endless deluge of information began to pour through the wires.",
      "There was, as Tom Standage observes, \"an irreversible acceleration in the pace of business life,\" reflecting how \"telegraphy and commerce thrived in a virtuous circle.\"",
      "It was as though \"rapid long-distance communication had effectively obliterated time and space,\" begetting the phenomenon known as \"globalization.\"",
      "A new type of skilled worker, the telegrapher, was born.",
      "He or she belonged to a vast, online community, whose semi-anonymous members shared a unique intermediary role as well as a language of dots and dashes - vaguely prefiguring the exchange of bits and bytes along modern computer networks.",
      "Like today's online communities, these telegraphers fostered their own subculture: jokes and anecdotes flew over the wires; some operators invented systems to play games; and occasional romances blossomed.",
      "Regrettably, hackers, scammers, and shady entrepreneurs also frequented the byways of this early internet.",
      "Predictably, newer forms of the original telegraphic technology - first the telephone and, much later, the fax machine - eventually encroached.",
      "The last telegram departed from India in 2013, but the twenty-first century has arguably seen a revival of this communication form in the text message.",
      "As Standage claims, texting has not only \"reincarnate[d] a defunct nineteenth-century technology\" but reinforced \"the democratization of telecommunications\" inaugurated by the miraculous Victorian Internet."
    ],
    "questions": [
      {
        "id": "uworld-1c-direct-passage-claims-question-1",
        "type": "Direct Claim",
        "originalPrompt": "Given passage information, which of the following assertions most aptly describes how the economic climate of the Victorian Era was transformed as a result of the telegraph?",
        "choices": [
          "It adapted to regulations controlling the pace of business.",
          "It adapted to an acceleration of foreign communications.",
          "It adapted to an increase in the localization of markets.",
          "It adapted to a reduction in domestic trade deals."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 12,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1c. Direct Passage Claims Question 1",
        "correctChoice": "B"
      },
      {
        "id": "uworld-1d-implicit-claims-or-assumptions-question-4",
        "type": "Implicit Claim",
        "originalPrompt": "Which of the following statements is implied by passage information?",
        "choices": [
          "The transatlantic telegraph system provided less reliable service than the domestic system.",
          "The telegraph can be considered an essentially American invention.",
          "The speed of the typical telegram was continually increasing.",
          "European markets became heavily dominated by telegraphic communication."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 7,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1d. Implicit Claims or Assumptions Question 4",
        "correctChoice": "D"
      },
      {
        "id": "uworld-1e-identifying-passage-perspectives-question-2",
        "type": "Perspective",
        "originalPrompt": "In the last paragraph, the author compares telegrams with text messages. Based on this comparison, the author considers the telegram to be a communication mode that was:",
        "choices": [
          "elitist.",
          "commonplace.",
          "overrated.",
          "unique."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 22,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1e. Identifying Passage Perspectives Question 2"
      },
      {
        "id": "uworld-1f-further-implications-of-passage-claims-question-2",
        "type": "Further Implication",
        "originalPrompt": "Based on the passage, the comparison between Victorian and modern online subcultures suggests:",
        "choices": [
          "that even when two cultures are distinct, their online subcultures tend to be similar.",
          "that the development of a subculture is the most significant effect of online communication.",
          "that an online subculture is defined solely by a shared language.",
          "that the transmission of messages cannot be trusted due to online criminal activity."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 18,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1f. Further Implications of Passage Claims Question 2"
      },
      {
        "id": "uworld-2b-function-of-passage-claim-question-1",
        "type": "Claim Function",
        "originalPrompt": "Why does the author most likely introduce the topic of the Victorian Internet by discussing the sociological conditions prevalent between 1820 and 1914?",
        "choices": [
          "To explore the details of an era of change leading to the inevitable development of the telegraph",
          "To reveal the socioeconomic factors that made improvements in communication possible",
          "To suggest that the many dramatic changes of the period cause people to overlook the telegraph's impact",
          "To overcome the notion of the telegraph as a phenomenon that transcended its time"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 1,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2b. Function of Passage Claim Question 1"
      }
    ]
  },
  {
    "id": "uworld-passage-g",
    "title": "Food Costs and Disease",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      [
        7,
        8,
        9,
        10
      ],
      [
        11,
        12,
        13,
        14
      ],
      [
        15,
        16,
        17,
        18
      ],
      [
        19,
        20,
        21
      ]
    ],
    "sentences": [
      "Because frequent consumption of unhealthy foods is strongly linked with cardiometabolic diseases, one way for governments to combat those afflictions may be to modify the eating habits of the general public.",
      "Applying economic incentives or disincentives to various types of foods could potentially alter people's diets, leading to more positive health outcomes.",
      "Utilizing national data from 2012 regarding food consumption, health, and economic status, Penalvo et al. concluded that such price adjustments would help to prevent deaths related to cardiometabolic diseases.",
      "According to their analysis, increasing the prices of unhealthy foods such as processed meats and sugary sodas by 10%, while reducing the prices of healthy foods such as fruit and vegetables by 10%, would prevent an estimated 3.4% of yearly deaths in the U.S. Changing prices by 30% would have an even stronger effect, preventing an estimated 9.2% of yearly deaths.",
      "This data comports with that found in other countries, such as \"previous modeling studies in South Africa and India, where a OMB SSB [sugar- sweetened beverage] tax was estimated to reduce diabetes prevalence by 4% over 20 years.\"",
      "The effects of price adjustments would be most pronounced on persons of lower socioeconomic status, as the researchers \"found an overall 18.2% higher price-responsiveness for low versus high SES [socioeconomic status] groups.\"",
      "This differential effect based on socioeconomic status contributes to concerns about such interventions, however.",
      "In the Harvard Public Health Review, Kates and Hayward ask: \"Well intentioned though they may be, at what point do these taxes overstep government influence on an individual's right to autonomy in decision-making?",
      "On whom does the increased financial burden of this taxation fall?\"",
      "They note that taxes on sugar-sweetened beverages, for instance, \"are likely to have a greater impact on low-income individuals...because individuals in those settings are more likely to be beholden to cost when making decisions about food.\"",
      "However, \"well intentioned though they may be,\" the worries that Kates and Hayward express are to some extent misguided.",
      "In particular, the idea that taxing unhealthy foods would burden those least able to afford it misses the point.",
      "Although the increased taxes would affect anyone who continued to purchase the items despite the higher prices, the goal of raising prices on unhealthy foods is precisely to dissuade people from buying them.",
      "As Kates and Hayward themselves remark, \"Those in low-income environments may also be the largest consumers of obesogenic foods and therefore most likely to benefit from such a lifestyle change indirectly posed by SSB taxes.\"",
      "As the goal of the taxes is to promote those lifestyle changes, the financial burden objection is a non-starter.",
      "Given this recognition, the question regarding autonomy constitutes a more substantial issue.",
      "Nevertheless, that concern also rests on a dubious assumption, as people's autonomy is not necessarily respected in the current situation either.",
      "The fact that those of lower socioeconomic status are more likely to have poorer diets suggests that such persons food choices are the result of financial constraint, not fully autonomous, rational deliberation.",
      "Hence, by making healthy foods more affordable relative to unhealthy ones, government intervention might actually facilitate autonomous choices rather than hindering them.",
      "On the other hand, suppose that the disproportionate consumption of unhealthy foods - and associated higher incidence of disease - among certain groups is not the result of financial hardship but rather the result of those persons perceived self-interest.",
      "If so, that would suggest that members of these groups are being encouraged to persist in harmful dietary habits for the sake of corporate profits.",
      "In that case, violating autonomy for the sake of health may be permissible, as that practice would be morally preferable to the present system of corporate exploitation."
    ],
    "questions": [
      {
        "id": "uworld-1c-direct-passage-claims-question-2",
        "type": "Direct Claim",
        "originalPrompt": "The author argues that concern about the financial burden of taxes on unhealthy foods is misguided because:",
        "choices": [
          "that burden is a less substantial issue than questions regarding autonomy.",
          "the people most affected by price increases would also be most able to afford them.",
          "the increased cost of those foods is designed to prevent people from buying them.",
          "the added expense of buying some foods would be offset by the reduced prices on others."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 12,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1c. Direct Passage Claims Question 2"
      },
      {
        "id": "uworld-1e-identifying-passage-perspectives-question-4",
        "type": "Perspective",
        "originalPrompt": "According to the author, a reason it might be legitimate for government interventions to violate some citizens autonomy would be if implementing those interventions:",
        "choices": [
          "is supported by the available research data.",
          "is supported by a majority of all citizens.",
          "is aimed at citizens disproportionately affected by an issue.",
          "is less problematic than not implementing them."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 19,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1e. Identifying Passage Perspectives Question 4"
      },
      {
        "id": "uworld-2b-function-of-passage-claim-question-3",
        "type": "Claim Function",
        "originalPrompt": "The passage author mentions some of Kates and Hayward's words again in Paragraph 4 most likely in order to:",
        "choices": [
          "illustrate an irony in these researchers concerns about proposed price adjustments.",
          "affirm these researchers point that lower-income persons would benefit most from proposed price adjustments.",
          "argue that social class is irrelevant to evaluating proposed price adjustments.",
          "support these researchers concerns about the effects of proposed price adjustments."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 7,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2b. Function of Passage Claim Question 3"
      },
      {
        "id": "uworld-3b-passage-applications-to-new-context-question-1",
        "type": "Application",
        "originalPrompt": "A government worries that if price adjustments on food are implemented, citizens autonomy will be violated to an unacceptable degree. Which recommendation represents the most reasonable compromise between the government's worry and the author's public health goals?",
        "choices": [
          "Explain planned price adjustments to the public in advance of their implementation.",
          "Use nutritional education to shift consumers toward healthier foods without price adjustments.",
          "Exclude sugar-sweetened beverages from price increases to reduce disproportionate impact on certain groups.",
          "Reduce prices on healthy foods without increasing prices on unhealthy foods."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 3,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3b. Passage Applications to New Context Question 1"
      },
      {
        "id": "uworld-3d-external-scenario-support-or-challenge-question-2",
        "type": "Challenge or Support",
        "originalPrompt": "Which of the following statements, if true, would most support the author's argument for price adjustments?",
        "choices": [
          "A study conducted in Mexico reported higher price responsiveness among low-income groups.",
          "Many corporations are willing to decrease prices to avoid losing customers.",
          "Kates and Hayward are funded by a sugar-sweetened beverage corporation.",
          "Pe\u00f1alvo et al. inferred people's socioeconomic status from their educational attainment."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 3,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3d. External Scenario Support or Challenge Question 2"
      },
      {
        "id": "uworld-3e-applying-passage-perspectives-question-3",
        "type": "Applied Perspective",
        "originalPrompt": "Information in the passage suggests that the author would most likely NOT agree with which of the following assertions?",
        "choices": [
          "For people to make fully autonomous decisions, they need to be free from economic hardship.",
          "Preserving people's autonomy is of little concern when considering the good of society.",
          "People may be mistaken about what is in their own best interest.",
          "When products are taxed, the financial burden typically falls on consumers."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 19,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3e. Applying Passage Perspectives Question 3"
      }
    ]
  },
  {
    "id": "uworld-passage-h",
    "title": "For Whom the Bell Toils",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3,
        4
      ],
      [
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14
      ],
      [
        15,
        16
      ],
      [
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24
      ]
    ],
    "sentences": [
      "In nineteenth-century America, most people dismissed the notion that someone might assassinate the president.",
      "The presumption was based not only on ethics but practicality: a president's term is inherently limited, and an unpopular one could be voted out of office.",
      "Therefore, it was reasoned, there would be no need to consider removal through violence.",
      "This belief persisted even after the shocking murder of Abraham Lincoln in 1865, which was viewed as an aberration.",
      "Thus it was that on July 2, 1881, Charles Guiteau could simply walk up to President James A. Garfield and shoot him in broad daylight.",
      "As Richard Menke portrays events, \"Guiteau was in fact a madman who had come to identify with a disgruntled wing of the Republican Party after his deranged fantasies of winning a post from the new administration had come to nothing.\"",
      "Believing that God had told him to kill the president, Guiteau thought this act would garner fame for his religious ideas and thereby help to usher in the Apocalypse.",
      "In an interesting parallel, Garfield had felt a sense of divine purpose for his own life after surviving a near- drowning as a young man.",
      "Unlike Guiteau's fanatical ravings, however, Garfield's vision worked to the betterment of himself and the world.",
      "Candice Millard describes his ascent from extreme poverty to incredible excellence in college, where \"by his second year...they made him a professor of literature, mathematics, and ancient languages.\"",
      "Garfield would go on to join the Union Army, where he attained the rank of major general and argued that black soldiers should receive the same pay as their white compatriots.",
      "While serving in the war he was nominated for the House of Representatives but accepted the seat only after President Lincoln declared that the country had more need of him as a congressman than as a general.",
      "The reluctant politician would later himself become president under similar circumstances, after multiple factions of a deadlocked Republican convention unexpectedly nominated him instead of their original candidates in 1880.",
      "An honest man who opposed corruption within the party, Garfield strove both to heal the fractures of the Civil War and to uphold the aims for which it was fought, until \"the equal sunlight of liberty shall shine upon every man, black or white, in the Union.\"",
      "Although Guiteau's bullet would ultimately dim this light for Garfield, the president actually survived the initial attack and for a time appeared headed for recovery.",
      "Tragically, however, the hubris shown by his main physician, Dr. Willard Bliss, would lead instead to weeks of prolonged suffering.",
      "None of the doctors who examined Garfield were able to locate the bullet, and its lingering presence - along with the unwashed hands of the doctors who probed for it - led to an infection.",
      "As the president's condition worsened, inventor Alexander Graham Bell attempted to adapt his patented telephone technology to locate foreign metal in the human body.",
      "Inspired by speculation that the bullet's electromagnetic properties might be detectable, Bell used his newly developed \"Induction Balance\" device to listen for the sounds of electrical interference he hoped would isolate the site of the bullet.",
      "Unfortunately, Bell's searches were unsuccessful.",
      "Like Garfield's doctors, he had been looking for the bullet in the wrong area.",
      "Menke asserts that Bell's efforts \"would probably have fallen short\" regardless.",
      "However, other historians suggest that Dr. Bliss, unwilling to consider challenges to his original assessment, prevented Bell from more thoroughly searching the president's body.",
      "Certainly, Bliss ignored the advice and protestations of other physicians, even as Garfield continued to decline.",
      "With death imminent, Garfield asked to be taken to his seaside cottage, where he died on the 19th of September."
    ],
    "questions": [
      {
        "id": "uworld-1c-direct-passage-claims-question-3",
        "type": "Direct Claim",
        "originalPrompt": "Which of the following individuals took actions that contributed to President Garfield's eventual death from infection? I. Dr. Willard Bliss II.Alexander Graham Bell III. Charles Guiteau",
        "choices": [
          "III only",
          "I and II only",
          "I and III only",
          "I, II, and III"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 18,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1c. Direct Passage Claims Question 3",
        "correctChoice": "C"
      },
      {
        "id": "uworld-1f-further-implications-of-passage-claims-question-3",
        "type": "Further Implication",
        "originalPrompt": "In his ascent to the presidency, Garfield was probably LEAST motivated by which of the following?",
        "choices": [
          "Duty",
          "Justice",
          "Service",
          "Ambition"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 12,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1f. Further Implications of Passage Claims Question 3",
        "correctChoice": "D"
      },
      {
        "id": "uworld-2f-drawing-additional-inferences-question-1",
        "type": "Inference",
        "originalPrompt": "The author's description of Charles Guiteau (Paragraph 1) seems to imply that:",
        "choices": [
          "Guiteau viewed religion as a necessary tool for achieving his political ends.",
          "Guiteau viewed achieving religious and political ends as essentially interconnected.",
          "Guiteau pretended to hold religious views as an excuse for achieving his political ends through violence.",
          "Guiteau pretended to hold religious and political views as an excuse for avenging a personal grievance."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 5,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2f. Drawing Additional Inferences Question 1"
      },
      {
        "id": "uworld-3c-new-claim-support-or-challenge-question-2",
        "type": "New Claim",
        "originalPrompt": "The Republican convention of 1880 required 36 separate rounds of voting over the course of three days before the delegates were finally able to agree on a presidential candidate. This information most strongly supports which of the following passage claims?",
        "choices": [
          "Some members of the Republican Party were engaged in corrupt politics.",
          "Garfield's nomination was a compromise to resolve a deadlock.",
          "Some Republicans were disgruntled with the state of the party.",
          "America still suffered from the lingering divisions of the Civil War."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 13,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3c. New Claim Support or Challenge Question 2",
        "correctChoice": "B"
      },
      {
        "id": "uworld-3f-additional-conclusions-from-new-information-question-1",
        "type": "New Information",
        "originalPrompt": "Which of the following would most likely have occurred if Dr. Bliss had displayed more humility as a physician?",
        "choices": [
          "Another doctor would have taken over as Garfield's main physician.",
          "The medical treatment given to Garfield would have been modified.",
          "Alexander Graham Bell would have identified the location of the bullet.",
          "The wound caused by the bullet would not have become infected."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 18,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3f. Additional Conclusions From New Information Question 1",
        "correctChoice": "B"
      }
    ]
  },
  {
    "id": "uworld-passage-i",
    "title": "Meaning: Readers or Authors?",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      [
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18
      ],
      [
        19,
        20,
        21,
        22,
        23,
        24
      ],
      [
        25,
        26,
        27,
        28
      ],
      [
        29,
        30
      ]
    ],
    "sentences": [
      "Of late it has become popular among linguists and literary theorists to assert that a work's meaning depends upon the individual reader.",
      "It is readers, we are told, not authors, who create meaning, by interacting with a text rather than simply receiving it.",
      "Thus, a reader transcends the aims of the author, producing their own reading of the text.",
      "Indeed, on this line of thinking, even to speak of \"the\" text is to commit a conceptual error; every text is in fact many texts, a plurality of interpretations that resist comparative evaluation.",
      "This view is nonsense.",
      "That many otherwise sensible scholars should be attracted to it can perhaps be readily explained, but we should first delineate why the theory goes so far astray....",
      "The absurdity of the view can be demonstrated by a practical analogy.",
      "Suppose Smith is conveying his ideas to Jones in conversation (the particular topic is of no consequence).",
      "Afterward, we discover that the men differ in their accounts of what Smith had expressed.",
      "At this point, Jones may decide that he misunderstood Smith, or perhaps that Smith was unclear.",
      "A more complex supposition might be that Smith misused some key term, so his words did not fully match his intentions.",
      "Any of these possibilities would reasonably describe why Jones and Smith possessed different opinions about what Smith had said.",
      "What Jones may not justifiably conclude is that his own interpretation is what Smith really meant.",
      "He may not, in effect, say: \"Yes, I admit that Smith honestly claims to have been saying something different, but I have formed my own equally correct understanding.\"",
      "Someone who made such an assertion would be suspected of making a joke; if he proved to be serious, we could only conclude that he was deeply confused or else being deliberately quarrelsome.",
      "For in questions about what Smith meant, it is surely Smith whose answer must be accepted....",
      "[T]his is not a matter of agreeing with a speaker; Jones might f judge Smith's ideas to be wrong, unfounded, etc.",
      "But whether Smith's ideas are right or wrong is a different matter from what those ideas are.",
      "On that count, Smith must be the authority.",
      "However, this observation is in no way changed if Smith's ideas are written rather than spoken - sent by letter, for instance.",
      "Regardless of any interpretation Jones may produce, the letter's true meaning is whatever Smith intended to convey.",
      "Likewise it is, then, with a book, poem, or whatsoever object of literature a scholar (or ordinary reader) encounters.",
      "The writing down of ideas does not magically imbue them with malleability or render their content amorphous.",
      "From the loftiest tomes of Shakespeare or Milton to the lowliest of yellowed paperbacks, authors produce works with a particular message in mind.",
      "It is readers task to discern that message, not to superimpose their own volitional perspectives.",
      "To think otherwise is to undermine the foundation of literary scholarship.",
      "For what is the purpose of such scholarship, if not to seek understanding of an author's creation?",
      "One examines the text, taking note of style, historical context, allusions to other works, and other factors, in addition, of course, to the surface sense of the words themselves.",
      "If such an enterprise is to be reasonable, it must presume the existence of standards for success: accuracy and inaccuracy, depth or shallowness of analysis, grounds for preferring one interpretation to another.",
      "Different readers may come to different conclusions about a text, it is true.",
      "But to excise authorial intent from the evaluation of those conclusions does a disservice both to individual works and to literary study as a discipline."
    ],
    "questions": [
      {
        "id": "uworld-1c-direct-passage-claims-question-5",
        "type": "Direct Claim",
        "originalPrompt": "Which of the following distinctions between related concepts is NOT made by the passage author?",
        "choices": [
          "Greater and lesser types of literature",
          "An idea's content and its correctness",
          "Credible and non-credible scholars",
          "Accurate and inaccurate interpretations"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 3,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1c. Direct Passage Claims Question 5",
        "correctChoice": "C"
      },
      {
        "id": "uworld-2f-drawing-additional-inferences-question-3",
        "type": "Inference",
        "originalPrompt": "The author's \"more complex supposition\" in Paragraph 2 implies that speakers:",
        "choices": [
          "are not responsible for whether listeners correctly interpret the meaning of their ideas.",
          "cannot fail to accurately convey the meaning of their ideas.",
          "may sometimes be mistaken about the actual meaning of their ideas.",
          "can fail to accurately convey the meaning of their ideas."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 10,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2f. Drawing Additional Inferences Question 3",
        "correctChoice": "C"
      },
      {
        "id": "uworld-3d-external-scenario-support-or-challenge-question-4",
        "type": "Challenge or Support",
        "originalPrompt": "Which of the following statements, if true, would most support the passage author's argument about interpretation?",
        "choices": [
          "Novelists often express confusion about the meanings people assign to their works.",
          "Poets often construct verses based on the way words sound regardless of their content.",
          "Psychological studies suggest that authors are often unaware of their own motivations.",
          "Interpretations of famous texts often differ widely between scholars and ordinary readers."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 3,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3d. External Scenario Support or Challenge Question 4",
        "correctChoice": "D"
      },
      {
        "id": "uworld-3e-applying-passage-perspectives-question-2",
        "type": "Applied Perspective",
        "originalPrompt": "Based on the passage, a poetry student who encounters an established scholar's interpretation of a poem should do which of the following?",
        "choices": [
          "Evaluate the factors that might support or challenge that interpretation.",
          "Develop their own personal interpretation of the poem.",
          "Treat the scholar's greater experience as irrelevant to determining the best interpretation of the poem.",
          "Presume that the scholar's interpretation is probably correct."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 3,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3e. Applying Passage Perspectives Question 2"
      },
      {
        "id": "uworld-3g-identifying-analogies-question-2",
        "type": "Analogy",
        "originalPrompt": "Based on the view of interpretation described by the passage author in Paragraph 1, which of the following areas of study would be most similar to literary scholarship?",
        "choices": [
          "Code decryption",
          "Linguistic translation",
          "Art criticism",
          "Forensic accounting"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 3,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3g. Identifying Analogies Question 2",
        "correctChoice": "C"
      }
    ]
  },
  {
    "id": "uworld-passage-j",
    "title": "The Inkblots",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3
      ],
      [
        4,
        5,
        6,
        7,
        8,
        9
      ],
      [
        10,
        11,
        12
      ],
      [
        13,
        14,
        15,
        16,
        17,
        18
      ],
      [
        19,
        20,
        21,
        22
      ]
    ],
    "sentences": [
      "For almost 100 years now, the psychological evaluation known as the Rorschach Inkblot Test has engendered much controversy, including skepticism about its value, questions about its scoring, and, especially, criticism of its interpretive methods as too subjective.",
      "Thus, the Rorschach test, which emerged from the same early twentieth-century zeitgeist that produced Einstein's physics, Freudian psychoanalysis, and abstract art, seems one of modernity's most misbegotten children.",
      "Destined never to be completely accepted or discredited, the test remains a perennial outlier in its field.",
      "Nevertheless, the inkblots mystery and aesthetic appeal have caused them to be indelibly printed on our cultural fabric.",
      "The now iconic inkblots were introduced to the world by Swiss psychiatrist Hermann Rorschach in his 1921 book Psychodiagnostics.",
      "As both director of the Herisau Asylum in Switzerland and an amateur artist, Rorschach was uniquely positioned to wed the new practice of psychoanalysis to the budding phenomenon of abstract art.",
      "For instance, reading Freud's work on dream symbolism prompted him to recall his childhood passion for a game based on inkblot art caKlecksographie.",
      "He was also lled cognizant that in a recently published dissertation, his colleague Szymon Hens had used inkblots to try to probe the imagination of research subjects; moreover, a few years earlier, the French psychologist and father of intelligence testing Alfred Binet had used them to measure creativity.",
      "Motivated by these developments, the Herisau director decided to revisit that childhood pastime that had awakened his curiosity about how visual information is processed.",
      "In particular, he wondered why different people saw different things in the same image.",
      "Traditionally, psychoanalysts had relied on language for insights; however, as biographer Damion Searls reports, Rorschach's theories would exemplify the principle that \"who we are is a matter less of what we say than of what we see.\"",
      "Indeed, through a process of perception termed pareidolia, the mind projects meaning onto images, detecting in them familiar objects or shapes.",
      "Consequently, what a person sees in an image reveals more about that person than about the image itself.",
      "Rorschach experimented with countless inkblots, eventually selecting ten - five black on white, two also featuring some red, and three pastel-colored - to use with research subjects.",
      "For these perfectly symmetrical images - each of which he was said to have \"meticulously designed to be as ambiguous and conflicted as possible\" - the primary question was always \"Whatyou see?\"",
      "Rorschach was do especially careful to note how much attention individuals paid to various components of each inkblot (such as form, color, and a sense of movement) and whether they concentrated on details or the whole image.",
      "Having observed that his patients with schizophrenia gave distinctly different responses from the control group, Rorschach envisioned his experiment as a diagnostic tool for the disease.",
      "Nevertheless, he resisted the notion that its results could be used to assess personality.",
      "In fact, until his untimely death from a ruptured appendix in 1922, Rorschach referred to his project as an \"interpretive form experiment\" rather than a test.",
      "Ironically, however, by the 1960s, the Rorschach Inkblot Test was known chiefly as a personality assessment and had become the most frequently administered projective personality test in the US.",
      "Rorschach's test has survived nearly incessant scrutiny, including a 2013 comprehensive study of all Rorschach test data and repeated revisions to its scoring, yet doubts about its validity and reliability persist.",
      "Much like the inkblots themselves - which tantalize us with the possibility of divulging the secrets of who we are and how we see the world - the test has (for better or worse) defied attempts to fix its meaning.",
      "Thus, what has been called \"the twentieth century's most visionary synthesis of art and science\" stands tempered by harsh criticism."
    ],
    "questions": [
      {
        "id": "uworld-1d-implicit-claims-or-assumptions-question-3",
        "type": "Implicit Claim",
        "originalPrompt": "The passage suggests which of following statements about the Rorschach test?",
        "choices": [
          "Its results often contradict the findings of other types of psychological tests.",
          "Its interpretation may be more subject to bias than other psychological tests.",
          "It tends to misrepresent the personality traits of the test-taker.",
          "It should not be used as part of a personality assessment."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 0,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1d. Implicit Claims or Assumptions Question 3"
      },
      {
        "id": "uworld-1e-identifying-passage-perspectives-question-3",
        "type": "Perspective",
        "originalPrompt": "Given the information in the passage, the author most likely believes that the way we process visual information:",
        "choices": [
          "had been an important factor in psychology long before Rorschach.",
          "was initially overemphasized by Rorschach.",
          "is an integral element of a person's psychological makeup.",
          "interferes with the psychologist's ability to gain insight into an individual's personality."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 10,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1e. Identifying Passage Perspectives Question 3",
        "correctChoice": "C"
      },
      {
        "id": "uworld-2c-extent-of-passage-evidence-question-2",
        "type": "Evidence Scope",
        "originalPrompt": "Which of the following passage claims is the LEAST supported by passage evidence?",
        "choices": [
          "Rorschach's work remained a perennial outlier in its field.",
          "Rorschach's inkblots were conspicuous for their ambiguity.",
          "Rorschach's test emerged from the same zeitgeist that produced Einstein's physics.",
          "Rorschach's research involved the process of perception called pareidolia."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 0,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2c. Extent of Passage Evidence Question 2"
      },
      {
        "id": "uworld-2e-determining-passage-perspectives-question-2",
        "type": "Perspective",
        "originalPrompt": "The author's attitude toward the passage topic can best be described as:",
        "choices": [
          "dismissive.",
          "critical.",
          "affirming.",
          "open."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 0,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2e. Determining Passage Perspectives Question 2"
      },
      {
        "id": "uworld-3a-exemplar-scenario-for-passage-claims-question-2",
        "type": "Exemplar",
        "originalPrompt": "Based on passage information, at the time of his sudden death in 1922, Rorschach was most likely intending:",
        "choices": [
          "to continue his clinical research on schizophrenia.",
          "to adapt the inkblot test to diagnose other disorders.",
          "to publish a second volume of Psychodiagnostics.",
          "to develop an alternate method to assess personality."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 13,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3a. Exemplar Scenario for Passage Claims Question 2"
      }
    ]
  },
  {
    "id": "uworld-passage-k",
    "title": "Lengthening the School Day",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3
      ],
      [
        4,
        5,
        6,
        7,
        8,
        9
      ],
      [
        10,
        11,
        12,
        13
      ],
      [
        14,
        15,
        16,
        17,
        18
      ],
      [
        19,
        20,
        21,
        22,
        23
      ],
      [
        24,
        25,
        26,
        27
      ],
      [
        28,
        29
      ]
    ],
    "sentences": [
      "There may be reasons to reject the idea of lengthening the school day.",
      "None of them, however, are good reasons.",
      "Rather, the supposed demerits of such a proposal fall easily in the face of its numerous financial and social benefits for families.",
      "The greatest of these benefits lies in reducing the need for childcare.",
      "It is a curious fact of American life that the adult's work schedule and the child's school schedule are misaligned.",
      "Children rise with the sun to head to classes, only to be sent home again hours before parents return from their jobs.",
      "In a society where, more often than not, both parents work, this discordance creates the need for an expensive arrangement to fill the gap in families routines.",
      "For instance, studies show that in 2016, childcare costs accounted for 9.5 to 17.5 percent of median family income, depending on the state.",
      "Today, 40 percent of families nationwide spend over 15 percent of their income on childcare.",
      "Transportation to and from care sites only adds to that expense.",
      "An additional advantage of an extended school day would be to allow for greater diversity and depth in curricula.",
      "Schools across the country have increasingly cut instruction in arts, music, and physical education (as well as recess) in order to meet objectives in reading and math.",
      "While this unfortunate state of affairs can be partially blamed on overzealous attention to standardized tests, it points to the larger deleterious trend of narrowing students instruction.",
      "With a longer school day, such eliminated subjects can be restored, enriching students with a more well-rounded education.",
      "To this proposal, however, critics may object that the added time would impose strain on educators.",
      "Can we truly ask schoolteachers - already among the most overworked individuals in society - to endure even more hours in the classroom?",
      "The answer is that a lengthened school day need not distress teachers nor add to their already cumbersome workload.",
      "By providing for additional areas of study in the arts and humanities, the extension would give schools cause to hire new, perhaps specialized, faculty to offer these courses.",
      "Moreover, the time could also be allocated to sports, academic clubs, and other extracurricular activities.",
      "However, this point speaks to another objection, namely, the cost of adjusting the school day.",
      "Whether through paying current teachers more or hiring new ones, implementing such a proposal would entail a significant financial expenditure.",
      "There are at least two responses to this line of thinking.",
      "First is that this increase in the cost of schooling would be offset and likely surpassed by the aforementioned savings in childcare.",
      "Thus, while it is true that schools would require greater funding (likely necessitating higher property taxes), parents would ultimately pay the same or less overall, with greater educational opportunities for their children and fewer transportational burdens.",
      "Second is that schools should be better funded regardless.",
      "Recently, some schools - especially those in rural areas - have even reduced school weeks to only four days as a cost-saving measure.",
      "It is beyond dispute that schools across the board both need and deserve a radically increased investment from citizens.",
      "Lengthening the school day is simply one manifestation of how such funding should be utilized.",
      "With this one change, states can coordinate the lives of parents and children, reduce the need for costly childcare, and expand curricular offerings.",
      "These worthy and desirable aims provide a clear justification for extending the school day."
    ],
    "questions": [
      {
        "id": "uworld-1f-further-implications-of-passage-claims-question-1",
        "type": "Further Implication",
        "originalPrompt": "Based on the information presented in the passage, one could most reasonably conclude that a significant portion of the funding a school receives is based on the:",
        "choices": [
          "amount of time spent in the classroom.",
          "local need for childcare.",
          "value of homes and other buildings.",
          "breadth of its curriculum."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 23,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "1f. Further Implications of Passage Claims Question 1"
      },
      {
        "id": "uworld-2a-logical-relationships-within-passage-question-3",
        "type": "Logical Relationship",
        "originalPrompt": "Which of the following pieces of information would be most important to know in order to assess the strength of the author's argument?",
        "choices": [
          "Whether the statistics on four-day school weeks represent a growing trend",
          "Whether the statistics on childcare refer specifically to school-age children",
          "What percentage of class time is currently spent on non-core subjects",
          "What percentage of students currently participate in after-school activities"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 11,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2a. Logical Relationships Within Passage Question 3"
      },
      {
        "id": "uworld-2a-logical-relationships-within-passage-question-4",
        "type": "Logical Relationship",
        "originalPrompt": "According to the author, the increase in the cost of schooling and associated higher property taxes that would be necessitated by a lengthened school day would be offset by an equal or greater savings in childcare costs. Which of the following would be the most reasonable objection to this claim?",
        "choices": [
          "The potential drawbacks to lengthening the school day are not all financial in nature.",
          "The cost of childcare is too insignificant to offset the added expense.",
          "The school day should ideally be lengthened without raising schools financial expenditure.",
          "The increased taxes would unfairly impact non-parents and businesses."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 23,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2a. Logical Relationships Within Passage Question 4"
      },
      {
        "id": "uworld-2c-extent-of-passage-evidence-question-3",
        "type": "Evidence Scope",
        "originalPrompt": "For which of the following assertions does the author provide the most support?",
        "choices": [
          "Schools pay too much attention to standardized tests.",
          "It is beyond dispute that schools should receive more funding.",
          "Schoolteachers are some of the most overworked individuals in society.",
          "Reasons to maintain the current school day's duration are easily refuted."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 23,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2c. Extent of Passage Evidence Question 3"
      },
      {
        "id": "uworld-3c-new-claim-support-or-challenge-question-1",
        "type": "New Claim",
        "originalPrompt": "Suppose a politician remarked that lengthening the school day would essentially make schools childcare facilities. What effect would this statement have on claims made in the passage?",
        "choices": [
          "It would support the author's claim that a longer school day would benefit parents.",
          "It would reinforce the arguments for keeping the school day as it is.",
          "It would challenge the author's claim that transportation to childcare sites burdens parents.",
          "It would have no effect on the claims made in the passage."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 6,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3c. New Claim Support or Challenge Question 1",
        "correctChoice": "A"
      },
      {
        "id": "uworld-3d-external-scenario-support-or-challenge-question-3",
        "type": "Challenge or Support",
        "originalPrompt": "Which of the following statements, if true, would most weaken the passage argument for lengthening the school day?",
        "choices": [
          "A longer school day's cost in taxes is nearly as much as what parents currently pay for childcare.",
          "A longer school day leads to a decreased sense of job satisfaction among teachers.",
          "A longer school day increases the amount schools must spend to fund faculty positions.",
          "A longer school day produces no improvement in student test scores."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 11,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3d. External Scenario Support or Challenge Question 3"
      },
      {
        "id": "uworld-3e-applying-passage-perspectives-question-1",
        "type": "Applied Perspective",
        "originalPrompt": "The passage author would most likely support a plan for schools to:",
        "choices": [
          "enhance classroom instruction through greater focus on STEM disciplines.",
          "spend more classroom time studying particular subjects on certain days.",
          "replace courses in reading and math with courses in the humanities.",
          "require students to take at least one art or music course per semester."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 11,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3e. Applying Passage Perspectives Question 1"
      }
    ]
  },
  {
    "id": "uworld-passage-l",
    "title": "When Defense Is Indefensible",
    "source": "Extracted from the local UWorld MCAT CARS PDF practice passages.",
    "paragraphs": [
      [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      [
        8,
        9,
        10,
        11
      ],
      [
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      [
        21,
        22,
        23,
        24
      ],
      [
        25,
        26,
        27,
        28
      ]
    ],
    "sentences": [
      "Suppose a prosecutor is considering whether to bring a case to trial.",
      "He is not sure that the suspect is guilty - in fact, based on the evidence, it's more likely that the suspect is not guilty.",
      "Nevertheless, he feels confident he can secure a guilty verdict.",
      "His powers of persuasion are considerable, and there's a good chance he could trick a jury into believing the evidence is strong instead of weak.",
      "In addition, the case is high profile and could be very lucrative; winning would likely lead to a substantial raise or promotion.",
      "He decides to charge the suspect, and ultimately succeeds in persuading the jury to convict.",
      "Looking at this situation, most of us would easily judge the prosecutor as extremely unethical.",
      "His conduct is outrageous and wrong - he clearly acted with corrupt intent, perpetrating injustice in order to profit financially.",
      "Why is it not shocking, then, that we tolerate the mirror image of this behavior from defense attorneys?",
      "For they engage in the same outrageous conduct, only on the other side.",
      "Paid handsomely to represent even the vilest of clients, they apply their oratorical prowess to manipulating jury perception, keeping the guilty free and unpunished in exchange for money and status.",
      "To the extent that this behavior takes place, are some defense attorneys as unethical as our hypothetical prosecutor?",
      "It is worth distinguishing two senses of the word \"ethical\" here.",
      "Professional For there are standards of ethics to which any attorney must conform, including standards particular to the defense.",
      "Most relevant to our purposes, a lawyer is obligated to provide their client with a \"zealous defense.\"",
      "In other words, once an attorney takes on a client, they are ethically bound to promote that client's rights, interests, or innocence - in fact, not to do so would be unethical.",
      "Thus, one might try to suggest that this obligation undermines the claim that some defense attorneys act unethically.",
      "However, meeting that professional standard is not the same as being ethical in the general sense of the word.",
      "The standard depends on the condition: once an attorney takes on a client.",
      "With the exception of court-appointed attorneys or public defenders, who are assigned to provide representation to those who would otherwise lack it, an attorney is never required to represent a defendant.",
      "Therefore, meeting one's obligations as a defense attorney does not necessarily make one ethical, because the choice to accept a specific case (and thus to incur those obligations in the first place) may itself be an unethical act.",
      "Moreover, the role of court-appointed attorneys is to help protect the rights of citizens who cannot secure their own representation, usually for financial reasons.",
      "Although preserving those rights is necessary to uphold justice, this situation highlights how wealth and class contribute to injustice.",
      "While some defendants possess the means to hire top-level private lawyers, others must depend on public servants - frequently less experienced lawyers from overloaded, understaffed agencies.",
      "As a result, the rich are more likely to escape conviction even when they are guilty, and the poor are more likely to be convicted even when they are innocent.",
      "It is doubtful that private defense attorneys could be somehow forbidden from representing guilty clients.",
      "Hence, the needed reforms to the system must come from individual attorneys committing to work for the right reasons.",
      "For those who strive to ensure citizens rights, or who truly believe their clients are innocent, providing a defense is a noble undertaking.",
      "But for those whose overriding motivation is greed, that legally \"zealous defense\" is ethically indefensible."
    ],
    "questions": [
      {
        "id": "uworld-2d-connecting-claims-with-evidence-question-2",
        "type": "Evidence Connection",
        "originalPrompt": "The claim that most people would easily view the hypothetical prosecutor as unethical is used to support the assertion that:",
        "choices": [
          "defense attorneys represent even the vilest of clients.",
          "prosecutors can be just as unethical as defense attorneys.",
          "defense attorneys are mirror images of the hypothetical prosecutor.",
          "it is strange that we accept the behavior of defense attorneys."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 10,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "2d. Connecting Claims With Evidence Question 2"
      },
      {
        "id": "uworld-3b-passage-applications-to-new-context-question-3",
        "type": "Application",
        "originalPrompt": "A 1993 opinion of the D.C. Bar stated that in certain situations, a defense attorney who discovers their client intends to lie on the stand cannot choose to withdraw from the case. How is this opinion most relevant to the information in the passage?",
        "choices": [
          "It shows that an attorney's motivations may be ethically indefensible.",
          "It exemplifies a tension between attorneys professional obligations and ethics in general.",
          "It explains why reforms to the system must come from individual attorneys.",
          "It illustrates the effect of wealth and class disparities on defense attorney ethics."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 20,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3b. Passage Applications to New Context Question 3",
        "correctChoice": "B"
      },
      {
        "id": "uworld-3c-new-claim-support-or-challenge-question-3",
        "type": "New Claim",
        "originalPrompt": "The author argues that it is unethical for defense attorneys to take certain defendants as clients. However, the Sixth Amendment guarantees every defendant the right to legal representation. Can the author's argument accommodate this fact?",
        "choices": [
          "Yes, because the needed reforms to the legal system could include the Sixth Amendment.",
          "Yes, because the author's ethical claim applies specifically to private attorneys.",
          "No, because if all attorneys accepted the author's argument, then some defendants could not get representation.",
          "No, because a collective refusal to represent certain defendants could lead to innocent people being convicted."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 20,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3c. New Claim Support or Challenge Question 3",
        "correctChoice": "B"
      },
      {
        "id": "uworld-3f-additional-conclusions-from-new-information-question-3",
        "type": "New Information",
        "originalPrompt": "If statistics suggest that the effectiveness of a legal defense correlates positively with the expense of securing it, which of the following conclusions would be reasonable? I. The most talented defense attorneys tend to be hired by private firms rather than government agencies. II. Increasing the funding available to public defenders would give disadvantaged citizens more effective representation. III. Highly paid lawyers face more professional obligations in taking on clients than lesser paid lawyers.",
        "choices": [
          "I only",
          "III only",
          "I and II only",
          "II and III only"
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 23,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3f. Additional Conclusions From New Information Question 3",
        "correctChoice": "C"
      },
      {
        "id": "uworld-3g-identifying-analogies-question-1",
        "type": "Analogy",
        "originalPrompt": "Based on the author's description, the behavior of the prosecutor in Paragraph 1 is most like that of:",
        "choices": [
          "a college admissions officer who ignores a student's personal essay so she can focus on judging academic performance.",
          "a hiring manager who sabotages a more qualified candidate's application so she can give the job to her friend.",
          "a casting director who sabotages a more talented actor's audition so she can take the part herself.",
          "a restaurant manager who fires her head chef so she can hire a more experienced one to improve her menu."
        ],
        "evidencePrompt": "Select the sentence in the passage that most directly supports answering the original question.",
        "answerSentenceIndex": 1,
        "explanation": "This sentence is the strongest evidence anchor for the original CARS question.",
        "sourceQuestionLabel": "3g. Identifying Analogies Question 1",
        "correctChoice": "C"
      }
    ]
  }
];
  const existingIds = new Set(store.exercises.map((exercise) => exercise.id));
  uworldExercises.forEach((exercise) => {
    if (!existingIds.has(exercise.id)) {
      store.exercises.push(exercise);
    }
  });
  store.activeExerciseId = "uworld-passage-a";
})();
