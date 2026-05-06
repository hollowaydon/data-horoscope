const form = document.querySelector("#horoscope-form");
const zodiacSelect = document.querySelector("#zodiac");
const roleSelect = document.querySelector("#role");
const rerollButton = document.querySelector("#reroll-button");

const dateEl = document.querySelector("#reading-date");
const titleEl = document.querySelector("#reading-title");
const textEl = document.querySelector("#reading-text");
const numberEl = document.querySelector("#lucky-number");
const chartEl = document.querySelector("#lucky-chart");
const cautionEl = document.querySelector("#caution");

const openings = [
  "The stars have checked the release calendar and are hovering politely near 11:30.",
  "A tiny trend estimate is stretching before its public appearance.",
  "Your morning contains a seasonally adjusted chance of useful insight.",
  "The cosmos has opened the latest time series spreadsheet and whispered, 'mind the footnotes'.",
  "A small revision is approaching with a clipboard and excellent intentions.",
  "The universe is cross-classifying your day by state, age group, and snack preference.",
  "Mercury is in retrograde, which explains why SAS and Python are both claiming the same output.",
  "A carefully weighted omen has arrived from the sample frame.",
  "Your statistical aura is glowing at approximately catalogue quality.",
  "A confidentialised cell is winking from behind a perturbation method.",
  "The planets are aligning by ASGS geography and asking for a concordance.",
  "A cheerful estimate is forming, subject to sampling error and afternoon tea.",
  "Your day begins with a clean metadata field and a suspiciously calm clearance queue.",
  "The moon has entered the data cube and is requesting a custom table.",
  "A small prophecy has appeared in the footnotes, where the real plot usually lives.",
  "The spirits of revisions past are being very reasonable today.",
  "Your query has returned exactly what you asked for, which is always a little unsettling.",
  "A fresh download is available, and it has brought columns."
];

const roleAdvice = {
  "Prices Analyst": [
    "The CPI basket is feeling seen, especially after someone remembered insurance and holiday travel.",
    "A trimmed mean will enter the room calmly and make everyone behave.",
    "Today favours checking whether the price movement is real or just broccoli being theatrical.",
    "Your index numbers are aligned, your reference period is tidy, and your footnotes are emotionally prepared.",
    "A monthly indicator will ask to sit with the quarterly series. Supervise them gently.",
    "The inflation narrative wants one clear sentence and absolutely no heroic adjectives."
  ],
  "National Accounts Analyst": [
    "GDP by expenditure and GDP by income may agree today, but let us not make it weird.",
    "Chain volume measures are smiling upon you from a carefully chosen reference year.",
    "A balancing item will appear with the confidence of someone who knows where the Supply Use Tables live.",
    "Household final consumption expenditure has brought receipts and would like recognition.",
    "Seasonal adjustment is doing its best, even when Easter moves the furniture.",
    "A revision will improve history and still somehow feel personally targeted."
  ],
  "Labour Stats Analyst": [
    "The Labour Force survey is whispering about hours worked, and it has nuance.",
    "Unemployment, underemployment, and participation are forming a small committee in your spreadsheet.",
    "Today rewards anyone who remembers that seasonally adjusted is not the same as trend.",
    "A rotation group will behave itself after being offered a clear weight and a biscuit.",
    "Payroll jobs data will arrive with energy, but it may need a gentle scope reminder.",
    "Your estimate is robust, but the confidence interval would still like a cardigan."
  ],
  "Population Estimates Analyst": [
    "Estimated resident population is stretching across states and territories with quiet dignity.",
    "Births, deaths, and net overseas migration are asking to be reconciled before lunch.",
    "A preliminary estimate will become revised, then final, then oddly nostalgic.",
    "Today favours checking the age structure before making any dramatic statements about growth.",
    "Interstate migration is carrying a suitcase and refusing to explain itself quickly.",
    "Your population pyramid is balanced, elegant, and only slightly judging the axis labels."
  ],
  "Census Analyst": [
    "The Census has counted the household, the dwelling, and the emotional support spreadsheet.",
    "A mesh block is feeling tiny but important.",
    "Today rewards careful handling of usual residence, place of enumeration, and people who ticked multiple boxes.",
    "SEIFA has entered the conversation and brought socioeconomic nuance in sensible shoes.",
    "A table builder request will look simple until geography, age, and tenure all arrive together.",
    "Your Census variable labels are long, specific, and somehow still not long enough."
  ],
  "Survey Methodologist": [
    "The sample design is humming gently, but the stratification would like a little more respect.",
    "A non-response adjustment will save the day without asking for applause.",
    "Today favours weights that sum politely and estimates that know their population.",
    "The questionnaire has only one more tiny wording change, according to legend.",
    "Relative standard errors are nearby, wearing hi-vis and pointing at uncertainty.",
    "Your imputation method is calm, defensible, and suspiciously well hydrated."
  ],
  "Data Integration Specialist": [
    "The linkage keys are feeling cooperative, which is not a guarantee and should be celebrated quietly.",
    "A spine dataset will hold everything together while pretending this is normal.",
    "Today favours provenance, permissions, and never naming a variable temp2_final.",
    "Your integrated asset wants metadata, governance, and a snack before production.",
    "A Python script and a SAS job will agree today, after a brief diplomatic incident.",
    "The join worked, but check the duplicates before declaring peace."
  ],
  "Confidentiality Officer": [
    "A small cell count is trying to be brave. Protect it.",
    "Perturbation has sprinkled statistical fairy dust and everyone must now read the caveat.",
    "Today favours suppression, aggregation, and saying 'not for release' with serene authority.",
    "A custom request will ask for just one more breakdown. It knows what it did.",
    "Confidentiality rules are not blocking the fun; they are the responsible adult near the fun.",
    "Your output has been checked and is now wearing a tiny approved-for-release badge."
  ],
  "Publication Wrangler": [
    "The release page is almost calm, apart from one chart title with opinions.",
    "Today favours alt text, clear key statistics, and links that go exactly where they claim.",
    "A media release wants to be punchy, accurate, and out the door before the kettle boils.",
    "The downloadable spreadsheet has arrived with tabs, footnotes, and main character energy.",
    "A correction notice is unlikely, provided everyone respects the decimal places.",
    "Your publication will sparkle after one last check of the reference period."
  ],
  "SAS-to-Python Diplomat": [
    "PROC SQL and pandas are making eye contact across the meeting room.",
    "Today favours translating macros without awakening ancient indentation feelings.",
    "A SAS format will become a Python mapping and everyone will pretend it was easy.",
    "Your notebook is ready, but the production job would like logging, tests, and fewer vibes.",
    "A dataframe will match the SAS output exactly, which is both comforting and suspicious.",
    "The migration path is clear: validate, document, and do not insult the legacy code within earshot."
  ]
};

const zodiacFlavors = {
  Aries: [
    "Bold choices are favoured, especially asking whether that series should be original or seasonally adjusted.",
    "Charge bravely into the release checklist, but take a reference period and a snack.",
    "Your inner fire is strong enough to challenge a suspiciously neat percentage change.",
    "Today rewards decisive filtering and dramatic, but justified, metadata cleanup."
  ],
  Taurus: [
    "Slow, steady analysis wins, preferably with a time series spreadsheet within arm's reach.",
    "Your patience turns messy survey returns into something almost publishable.",
    "A dependable estimate will bring comfort, like a weighted blanket with labels.",
    "Resist rushing the refresh. Good data likes to pass validation first."
  ],
  Gemini: [
    "Two spreadsheets will both seem correct. Only one has the latest revision.",
    "Your curiosity is high, and so is your number of open ABS.Stat tabs.",
    "A cross-tab may speak to both sides of your personality.",
    "You can hold two interpretations at once, but only one should go in Key statistics."
  ],
  Cancer: [
    "Protect your clean dataset like a tiny candle in a clearance meeting.",
    "Your nurturing instincts are perfect for neglected explanatory notes.",
    "A publication table needs emotional support and a better default geography.",
    "Today favours gentle QA and strong boundaries around ad hoc requests."
  ],
  Leo: [
    "Your presentation energy is strong enough to make a line chart sit up straighter.",
    "A chart will look better after you give it a confident, accurate title.",
    "The spotlight is yours, but let the source note have a moment too.",
    "Your insights are feeling glamorous, which is fine if the RSE agrees."
  ],
  Virgo: [
    "The universe applauds your classifications, quietly but sincerely.",
    "Your tidy instincts will locate a typo three annex tables before anyone else.",
    "A validation rule is about to become your new best friend.",
    "Today rewards exact definitions and suspiciously neat indentation."
  ],
  Libra: [
    "Balance the chart, the narrative, and the urge to add one more caveat.",
    "Your sense of proportion will save a release from visual overcrowding.",
    "A measure dispute may be solved with diplomacy and one very clear denominator.",
    "Today favours symmetry, fairness, and legends that are not hiding in a corner."
  ],
  Scorpio: [
    "You will discover something hidden in the source data and look very mysterious about it.",
    "Your investigative powers are strong, especially near unexplained nulls.",
    "A buried assumption will reveal itself under your intense little audit trail.",
    "Keep your secrets close and your confidentiality rules closer."
  ],
  Sagittarius: [
    "Adventure calls, probably from a dataset with a very enthusiastic geography hierarchy.",
    "Your exploratory spirit wants a new query and a responsible scope statement.",
    "A strange segment will invite you on a journey with unclear endpoints.",
    "Today rewards brave questions and discourages exporting everything just in case."
  ],
  Capricorn: [
    "Structure is your superpower. So is saying no to mystery indicators.",
    "Your practical streak will turn vague requirements into actual clearance criteria.",
    "A release task will become less frightening after you add dependencies.",
    "Today favours durable tables, sturdy shoes, and realistic timelines."
  ],
  Aquarius: [
    "An unconventional visualisation may actually work, which is thrilling and inconvenient.",
    "Your unusual idea deserves a prototype and a governance note nearby.",
    "A novel indicator will sparkle, then require three definitions and a meeting.",
    "Today rewards inventive thinking and politely questioning the default template."
  ],
  Pisces: [
    "Your intuition is dreamy today, but please still check the denominator.",
    "A soft hunch may lead you toward a surprisingly concrete population estimate.",
    "Your empathy is useful, especially when the user journey through downloads looks damp and confused.",
    "Today favours imagination, annotation, and not trusting vibes alone."
  ]
};

const specialLuckyValues = [
  "1e-15",
  "0.0000001",
  "np.nan",
  "NaN",
  "NULL",
  "undefined",
  "Infinity",
  "-0",
  "999999999",
  "1,048,576",
  "6.02e23",
  "6401.0",
  "5206.0",
  "6202.0",
  "3101.0",
  "2021 Census",
  "ASGS 2021",
  "ERP",
  "SA2",
  "PROC FREQ",
  "pandas.merge",
  "p < 0.05",
  "95%",
  "n = 1",
  "SELECT 1"
];

const charts = [
  "CPI index line",
  "Population pyramid",
  "Seasonally adjusted sparkleline",
  "Labour Force time series",
  "National Accounts contribution chart",
  "Census choropleth",
  "SEIFA decile map",
  "TableBuilder special",
  "RSE confidence fan",
  "SAS output table, lovingly copied"
];

const cautions = [
  "Check the reference period",
  "Respect the confidentiality threshold",
  "Do not anger the seasonal adjustment",
  "Beware stale concordances",
  "Read the explanatory notes",
  "Validate before release",
  "Question cheerful averages",
  "Mind the RSE",
  "Do not trust a mystery SAS format",
  "Name the Python environment something sensible"
];

let rerollCount = 0;

function hashText(value) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }

  return Math.abs(hash);
}

function pick(items, seed, offset = 0) {
  return items[(seed + offset) % items.length];
}

function makeLuckyValue(seed) {
  const specialChance = seed % 5 === 0;

  if (specialChance) {
    return pick(specialLuckyValues, seed, 19);
  }

  const numberStyle = seed % 4;

  if (numberStyle === 0) {
    return String((seed % 99) + 1);
  }

  if (numberStyle === 1) {
    return String((seed % 9000) + 1000);
  }

  if (numberStyle === 2) {
    return ((seed % 1000000) / 100000).toFixed(5);
  }

  return `${((seed % 900) + 100) * 1000000}`;
}

function todayKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function renderReading() {
  const today = new Date();
  const zodiac = zodiacSelect.value;
  const role = roleSelect.value;
  const seed = hashText(`${todayKey(today)}-${zodiac}-${role}-${rerollCount}`);
  const roleLines = roleAdvice[role];
  const luckyValue = makeLuckyValue(seed);

  dateEl.textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  titleEl.textContent = `${zodiac} ${role}`;
  textEl.textContent = `${pick(openings, seed)} ${pick(zodiacFlavors[zodiac], seed, 5)} ${pick(roleLines, seed, 3)}`;
  numberEl.textContent = luckyValue;
  chartEl.textContent = pick(charts, seed, 7);
  cautionEl.textContent = pick(cautions, seed, 11);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  rerollCount = 0;
  renderReading();
});

rerollButton.addEventListener("click", () => {
  rerollCount += 1;
  renderReading();
});

renderReading();
