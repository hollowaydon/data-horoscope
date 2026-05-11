const form = document.querySelector("#horoscope-form");
const zodiacSelect = document.querySelector("#zodiac");
const roleSelect = document.querySelector("#role");
const rerollButton = document.querySelector("#reroll-button");
const randomButton = document.querySelector("#random-button");

const dateEl = document.querySelector("#reading-date");
const titleEl = document.querySelector("#reading-title");
const textEl = document.querySelector("#reading-text");
const numberEl = document.querySelector("#lucky-number");
const chartEl = document.querySelector("#lucky-chart");
const cautionEl = document.querySelector("#caution");

const openings = [
  "The stars have checked the release calendar and are hovering politely near 11:30.",
  "A tiny trend estimate is stretching before its public appearance.",
  "Your morning has a seasonally adjusted chance of useful insight.",
  "The cosmos has opened the latest time series spreadsheet and whispered, 'mind the footnotes'.",
  "A small revision is approaching with a clipboard and excellent intentions.",
  "The universe is cross-classifying your day by state, age group, and snack preference.",
  "Mercury is in retrograde, which explains why SAS and Python are both claiming the same output.",
  "A carefully weighted omen has arrived from the sample frame.",
  "Your statistical aura is glowing at approximately publication quality.",
  "A confidentialised cell is winking from behind a perturbation method.",
  "The planets are aligning with ASGS geography and asking for a concordance.",
  "A cheerful estimate is forming, subject to sampling error and afternoon tea.",
  "Your day begins with a clean metadata field and a suspiciously calm clearance queue.",
  "The moon has entered the data cube and is requesting a custom table.",
  "A small prophecy has appeared in the footnotes, where the real plot usually lives.",
  "The spirits of revisions past are being very reasonable today.",
  "Your query has returned exactly what you asked for, which is always a little unsettling.",
  "A fresh download is available, and it has arrived bearing columns.",
  "A tiny concordance has appeared at the edge of your desk and is trying to be helpful.",
  "The release calendar is humming softly and pretending it is not the main character.",
  "A metadata field has finally remembered its purpose.",
  "The classification spirits are calm, provided nobody asks for a bespoke category after lunch.",
  "Your morning has been benchmarked to annual totals and is feeling more stable.",
  "A confidentialised table is wearing sunglasses indoors.",
  "The latest extract has arrived with a polite cough and three new variables.",
  "A seasonal factor is tap dancing quietly behind the trend line.",
  "Your SAS log contains no errors, which is technically suspicious but emotionally welcome.",
  "Python has imported pandas successfully and is now asking what the plan is.",
  "A footnote has expanded slightly and may need its own chair.",
  "The universe has indexed your patience to the latest reference period.",
  "A tidy little estimate is waiting by the printer with a permission form.",
  "The data cube has rotated once and revealed a small but useful omen.",
  "A survey weight is balancing on one foot and doing remarkably well.",
  "Your morning tea has been seasonally adjusted for public holidays.",
  "A chart title is trying to be accurate and charming at the same time.",
  "The validation rules have gathered in a semicircle and are nodding approvingly."
];

const roleAdvice = {
  "Prices Analyst": [
    "The CPI basket is feeling seen, especially after someone remembered insurance and holiday travel.",
    "A trimmed mean will enter the room calmly and make everyone behave.",
    "Today favours checking whether the price movement is real or just broccoli being theatrical.",
    "Your index numbers are aligned, your reference period is tidy, and your footnotes are emotionally prepared.",
    "A monthly indicator will ask to sit with the quarterly series. Supervise them gently.",
    "The inflation narrative wants one clear sentence and absolutely no heroic adjectives.",
    "A price relative is quietly doing the heavy lifting and would appreciate a nod.",
    "The weighted average of eight capital cities has entered with excellent posture.",
    "Your grocery subgroup is lively today, but the all groups index is keeping perspective."
  ],
  "National Accounts Analyst": [
    "GDP by expenditure and GDP by income may agree today, but let us not make it weird.",
    "Chain volume measures are smiling upon you from a carefully chosen reference year.",
    "A balancing item will appear with the confidence of someone who knows where the supply-use tables live.",
    "Household final consumption expenditure has brought receipts and would like recognition.",
    "Seasonal adjustment is doing its best, even when Easter moves the furniture.",
    "A revision will improve history and still somehow feel personally targeted.",
    "Gross fixed capital formation has brought a spreadsheet and several opinions.",
    "A terms of trade movement is about to make the chart more interesting than planned.",
    "Inventories are changing, but they would prefer not to explain their feelings in public."
  ],
  "Labour Stats Analyst": [
    "The Labour Force survey is whispering about hours worked, and it has nuance.",
    "Unemployment, underemployment, and participation are forming a small committee in your spreadsheet.",
    "Today rewards anyone who remembers that seasonally adjusted is not the same as trend.",
    "A rotation group will behave itself after being offered a clear weight and a biscuit.",
    "Payroll jobs data will arrive with energy, but it may need a gentle scope reminder.",
    "Your estimate is robust, but the confidence interval would still like a cardigan.",
    "Hours worked will tell a slightly different story, and it is worth listening.",
    "A participation rate is stretching carefully before the media call.",
    "The trend series is moving slowly, but it has excellent posture."
  ],
  "Population Estimates Analyst": [
    "Estimated resident population is stretching across states and territories with quiet dignity.",
    "Births, deaths, and net overseas migration are asking to be reconciled before lunch.",
    "A preliminary estimate will become revised, then final, then oddly nostalgic.",
    "Today favours checking the age structure before making any dramatic statements about growth.",
    "Interstate migration has packed a suitcase and declined to explain itself quickly.",
    "Your population pyramid is balanced, elegant, and only slightly judging the axis labels.",
    "Net overseas migration is making a dramatic entrance with paperwork.",
    "The median age is quietly ageing, which is very on brand.",
    "A state share will shift by 0.1 percentage points and somehow start a conversation."
  ],
  "Census Analyst": [
    "The Census has counted the household, the dwelling, and the emotional support spreadsheet.",
    "A mesh block is feeling tiny but important.",
    "Today rewards careful handling of usual residence, place of enumeration, and people who ticked more than one box.",
    "SEIFA has entered the conversation and brought socioeconomic nuance in sensible shoes.",
    "A table builder request will look simple until geography, age, and tenure all arrive together.",
    "Your Census variable labels are long, specific, and somehow still not long enough.",
    "A dwelling structure category has arrived wearing a very sensible lanyard.",
    "The non-response category is small, quiet, and absolutely still important.",
    "A geography boundary has changed shape and would like everyone to remain calm."
  ],
  "Survey Methodologist": [
    "The sample design is humming gently, but the stratification would like a little more respect.",
    "A non-response adjustment will save the day without asking for applause.",
    "Today favours weights that sum politely and estimates that know their population.",
    "The questionnaire has only one more tiny wording change, according to legend.",
    "Relative standard errors are nearby, wearing hi-vis and pointing at uncertainty.",
    "Your imputation method is calm, defensible, and suspiciously well hydrated.",
    "The design effect is sitting in the corner, making the variance slightly more dramatic.",
    "A calibration benchmark will restore order with spreadsheet-level gravitas.",
    "The collection instrument wants cognitive testing and a biscuit."
  ],
  "Data Integration Specialist": [
    "The linkage keys are feeling cooperative, which is not a guarantee and should be celebrated quietly.",
    "A spine dataset will hold everything together while pretending this is normal.",
    "Today favours provenance, permissions, and a firm refusal to name anything temp2_final.",
    "Your integrated asset wants metadata, governance, and a snack before production.",
    "A Python script and a SAS job will agree today, after a brief diplomatic incident.",
    "The join worked, but check the duplicates before declaring peace.",
    "A linkage rate is smiling, but it still expects a quality statement.",
    "Your entity resolution rules are ready to meet the world, after one more clerical review.",
    "The integrated dataset is powerful, useful, and asking for a very clear access protocol."
  ],
  "Data Pipeline Engineer": [
    "The pipeline is brave, the logs are chatty, and the scheduler is pretending it has always been this calm.",
    "Today favours idempotent jobs, tidy parameters, and outputs that land exactly where the metadata says they will.",
    "A failed task will succeed on retry, but only after making sure everyone was paying attention.",
    "Your DAG wants fewer mystery dependencies and more affectionate monitoring.",
    "A parquet file will arrive compact, columnar, and quietly pleased with itself.",
    "The production run is stable, provided nobody edits the config five minutes before release.",
    "A schema drift warning has arrived early, which is rude but helpful.",
    "Your orchestration layer is calm because the retries have been given meaningful names.",
    "The staging table is temporary in name only and everyone knows it."
  ],
  "Cloud Platform Engineer": [
    "Your storage bucket is feeling organised, but one folder prefix has become philosophical.",
    "Today favours least privilege, sensible tagging, and cost alerts that speak before finance does.",
    "A container will build cleanly after one tiny environment variable learns where it lives.",
    "The cloud console is calm, which is either excellent news or a reason to check the logs.",
    "Your infrastructure-as-code plan looks reassuringly boring, the highest compliment available.",
    "A Python job and a managed service will cooperate after a short conversation about permissions.",
    "A service account has exactly the access it needs and is trying not to brag.",
    "Your monitoring dashboard is quiet, which counts as a compliment today.",
    "A region setting will matter more than anyone expected, so check it before lunch."
  ],
  "Confidentiality Officer": [
    "A small cell count is trying to be brave. Protect it.",
    "Perturbation has sprinkled statistical fairy dust and everyone must now read the caveat.",
    "Today favours suppression, aggregation, and saying 'not for release' with serene authority.",
    "A custom request will ask for just one more breakdown. It knows what it did.",
    "Confidentiality rules are not blocking the fun; they are the responsible adult near the fun.",
    "Your output has been checked and is now wearing a tiny approved-for-release badge.",
    "A dominance rule is tapping the table and asking to be remembered.",
    "The cell key method is being mysterious, but in a professionally documented way.",
    "A detailed geography request has arrived, smiling far too confidently."
  ],
  "Publication Wrangler": [
    "The release page is almost calm, apart from one chart title with opinions.",
    "Today favours alt text, clear key statistics, and links that go exactly where they claim.",
    "A media release wants to be punchy, accurate, and out the door before the kettle boils.",
    "The downloadable spreadsheet has arrived with tabs, footnotes, and main character energy.",
    "A correction notice is unlikely, provided everyone respects the decimal places.",
    "Your publication will sparkle after one last check of the reference period.",
    "The summary paragraph is almost ready, but one adjective is still on probation.",
    "A downloadable table wants consistent decimals and a loving final glance.",
    "The release notes are doing quiet work and deserve a biscuit."
  ],
  "SAS-to-Python Diplomat": [
    "PROC SQL and pandas are making eye contact across the meeting room.",
    "Today favours translating macros without awakening ancient indentation feelings.",
    "A SAS format will become a Python mapping and everyone will pretend it was easy.",
    "Your notebook is ready, but the production job would like logging, tests, and fewer loose vibes.",
    "A dataframe will match the SAS output exactly, which is both comforting and suspicious.",
    "The migration path is clear: validate, document, and do not insult the legacy code within earshot.",
    "A macro variable will become a function argument and everyone will feel slightly modern.",
    "The SAS log and the Python traceback have agreed to communicate through a mediator.",
    "Your unit test has found a rounding difference with a flair for drama."
  ],
  "Crime and Justice Analyst": [
    "Recorded crime is entering the room with counts, rates, and a strong request for context.",
    "Today favours careful offence classifications and not comparing jurisdictions too casually.",
    "A justice series will look dramatic until population denominators bring snacks and perspective.",
    "Victimisation data has nuance, caveats, and a small umbrella for methodological weather.",
    "Your table is ready, provided the rate per 100,000 people has been invited properly.",
    "A time series break may appear wearing a tiny sign that says 'please read the notes'.",
    "A rate will behave better once the population denominator stops hiding behind the curtain.",
    "The classification of an offence will matter, and it would like that in writing.",
    "A small-area comparison is possible today, but only with context holding its hand."
  ],
  "Business Indicators Analyst": [
    "A monthly business turnover series is feeling lively and would like its industry division respected.",
    "Today favours checking whether the movement is signal, seasonality, or a public holiday with opinions.",
    "Inventories, wages, and sales are forming a small quarterly chorus in your spreadsheet.",
    "A business conditions estimate will behave better after someone checks the sample rotation.",
    "Your indicator is timely, useful, and still absolutely deserving of a caveat.",
    "A percentage change will look charming, but the level series knows the backstory.",
    "A turnover estimate is moving quickly and asking whether trend can come too.",
    "The industry division breakdown is useful, but it wants everyone to mind the scope.",
    "A survey return has arrived late, wearing the expression of someone with news."
  ],
  "Building and Construction Analyst": [
    "Building approvals are arriving with floor area, dwelling counts, and several feelings about revisions.",
    "Today favours separating houses from other residential building before anyone gets too excited.",
    "Construction work done is wearing a hard hat and asking whether current prices or chain volumes are required.",
    "A state-level movement will look enormous until the original series explains itself.",
    "Your pipeline contains concrete, cranes, and one suburb name that needs checking.",
    "An alteration and addition will quietly insist it is important too.",
    "A value of work done series is bringing hard hats and chain volume measures.",
    "The approval date and the construction date are not the same, and they are tired of explaining it.",
    "A lumpy monthly movement is probably real, but it still needs adult supervision."
  ],
  "Health Statistics Analyst": [
    "Health conditions are lining up by age group and politely requesting a clear denominator.",
    "Today favours careful interpretation, especially when self-reported data enters wearing soft shoes.",
    "A wellbeing measure will be useful, nuanced, and impossible to summarise with one heroic number.",
    "Your estimate has a pulse, a confidence interval, and several explanatory notes.",
    "A cause-of-death table wants sensitivity, precision, and no decorative adjectives.",
    "The age standardisation has arrived to make comparisons less chaotic.",
    "A health risk factor is politely asking for age, sex, and geography to stop talking over each other.",
    "Self-assessed health is useful, nuanced, and wearing comfortable shoes.",
    "A prevalence estimate will sparkle after the confidence interval gets a proper introduction."
  ],
  "Agriculture Statistics Analyst": [
    "The farm data has brought hectares, livestock, and a weather caveat with excellent timing.",
    "Today favours checking units before comparing tonnes, dollars, and deeply confident spreadsheets.",
    "A regional estimate will behave after the geography concordance has had breakfast.",
    "Your crop series is growing steadily, subject to rainfall, reporting cycles, and spreadsheet manners.",
    "Livestock counts are moving through the table with rural dignity.",
    "A commodity price will look simple until the seasonal pattern clears its throat.",
    "A broadacre estimate is gazing at the horizon and thinking about rainfall.",
    "The irrigation data has arrived carrying units that deserve careful reading.",
    "A regional table is sturdy today, provided the suppression rules are treated kindly."
  ],
  "Environment Accounts Analyst": [
    "The environmental-economic accounts are balancing natural resources with spreadsheet serenity.",
    "Today favours linking emissions, energy, water, and industry without making the chart need a nap.",
    "A physical flow account will ask whether tonnes, gigalitres, or terajoules are emotionally appropriate.",
    "Your indicator wants context, a boundary definition, and a nice clear unit of measure.",
    "A natural capital table is quietly glowing near the national accounts.",
    "The planet has entered the workbook and would like the methodology section treated kindly.",
    "An emissions intensity measure is trying to be both clear and not too smug.",
    "A water account is quietly asking whether the unit is megalitres or million litres.",
    "The industry allocation is defensible, but it would still like a footnote."
  ]
};

const zodiacFlavors = {
  Aries: [
    "Bold choices are favoured, especially asking whether that series should be original or seasonally adjusted.",
    "Charge bravely into the release checklist, but take a reference period and a snack.",
    "Your inner fire is strong enough to question a suspiciously neat percentage change.",
    "Today rewards decisive filtering and dramatic, but justified, metadata cleanup.",
    "A bold query will pay off, provided the WHERE clause has adult supervision.",
    "Your courage is useful today, especially near unexplained revisions.",
    "Move quickly, but let the validation rules keep their shoes on."
  ],
  Taurus: [
    "Slow, steady analysis wins, preferably with a time series spreadsheet within arm's reach.",
    "Your patience turns messy survey returns into something almost publishable.",
    "A dependable estimate will bring comfort, like a weighted blanket with labels.",
    "Resist rushing the refresh. Good data likes to pass validation first.",
    "A stable series is bringing you peace, snacks, and a reasonable margin of error.",
    "Today favours durable definitions and tea made at the correct temperature.",
    "Your persistence will outlast the longest spreadsheet tab name."
  ],
  Gemini: [
    "Two spreadsheets will both seem correct. Only one has the latest revision.",
    "Your curiosity is high, and so is your number of open ABS.Stat tabs.",
    "A cross-tab may speak to both sides of your personality.",
    "You can hold two interpretations at once, but only one should go in the Key statistics.",
    "Your dual nature is ideal for comparing SAS output with Python output.",
    "A second hypothesis will appear before the first one has finished its coffee.",
    "Today rewards toggling between detail and summary without losing the denominator."
  ],
  Cancer: [
    "Protect your clean dataset like a tiny candle in a clearance meeting.",
    "Your nurturing instincts are perfect for neglected explanatory notes.",
    "A publication table needs emotional support and a better default geography level.",
    "Today favours gentle QA and strong boundaries around ad hoc requests.",
    "A fragile estimate needs care, context, and possibly a warm beverage.",
    "Your protective instincts are excellent near small cells and large expectations.",
    "Give the methodology section a kind word; it has been carrying the release."
  ],
  Leo: [
    "Your presentation energy is strong enough to make a line chart sit up straighter.",
    "A chart will look better after you give it a confident, accurate title.",
    "The spotlight is yours, but let the source note have a moment too.",
    "Your insights are feeling glamorous, which is fine as long as the RSE agrees.",
    "A key statistic is ready for centre stage, after one last check of the units.",
    "Your chart can be bold today, but the axis labels must still do their job.",
    "A release paragraph will shine if you keep the caveat close."
  ],
  Virgo: [
    "The universe applauds your classifications, quietly but sincerely.",
    "Your tidy instincts will locate a typo three annex tables before anyone else.",
    "A validation rule is about to become your new best friend.",
    "Today rewards exact definitions and suspiciously neat indentation.",
    "A variable label will finally match the data, and you may feel actual joy.",
    "Your careful eye is strongest today near commas, codes, and questionable totals.",
    "The QA checklist respects you, though it will never say so out loud."
  ],
  Libra: [
    "Balance the chart, the narrative, and the urge to add one more caveat.",
    "Your sense of proportion will save a release from visual overcrowding.",
    "A measure dispute may be solved with diplomacy and one very clear denominator.",
    "Today favours symmetry, fairness, and legends that are not hiding in a corner.",
    "A stakeholder disagreement can be solved with charm and a well-timed definition.",
    "Your harmony is strongest when current prices and volume measures both get a turn.",
    "Today rewards elegant tables and footnotes that know when to stop."
  ],
  Scorpio: [
    "You will discover something hidden in the source data and look very mysterious about it.",
    "Your investigative powers are strong, especially near unexplained nulls.",
    "A buried assumption will reveal itself during your intense little audit trail review.",
    "Keep your secrets close and your confidentiality rules closer.",
    "A suspicious movement will confess after you ask for the previous period.",
    "Your instincts are sharp today, especially around suppressed cells and quiet revisions.",
    "A hidden filter is about to reveal its tiny dramatic agenda."
  ],
  Sagittarius: [
    "Adventure calls, probably from a dataset with a very enthusiastic geography hierarchy.",
    "Your exploratory spirit wants a new query and a responsible scope statement.",
    "A strange segment will invite you on a journey with unclear endpoints.",
    "Today rewards brave questions and discourages exporting everything just in case.",
    "A new data source is calling, but pack your metadata before leaving.",
    "Your optimism is useful today, provided it travels with a reproducible script.",
    "Follow the outlier, but leave a note saying where you went."
  ],
  Capricorn: [
    "Structure is your superpower. So is saying no to mystery indicators.",
    "Your practical streak will turn vague requirements into actual clearance criteria.",
    "A release task will become less frightening after you add dependencies.",
    "Today favours durable tables, sturdy shoes, and realistic timelines.",
    "A governance checklist is not glamorous, but it is absolutely on your side.",
    "Your discipline will keep the pipeline from becoming interpretive dance.",
    "Today rewards version control, sensible scopes, and closing unused browser tabs."
  ],
  Aquarius: [
    "An unconventional visualisation may actually work, which is thrilling and inconvenient.",
    "Your unusual idea deserves a prototype and a governance note nearby.",
    "A novel indicator will sparkle, then require three definitions and a meeting.",
    "Today rewards inventive thinking and politely questioning the default template.",
    "A new method may be worth trialling, once the assumptions stop levitating.",
    "Your future-facing energy is excellent for automation and slightly dangerous near production.",
    "Today favours experiments with rollback plans."
  ],
  Pisces: [
    "Your intuition is dreamy today, but please still check the denominator.",
    "A soft hunch may lead you toward a surprisingly concrete population estimate.",
    "Your empathy is useful, especially when the user journey through downloads looks damp and confused.",
    "Today favours imagination, annotation, and not trusting vibes alone.",
    "A gentle insight will surface after you stop staring directly at the spreadsheet.",
    "Your feelings about the data are valid, but the method still wants receipts.",
    "A dreamy chart can stay, provided the title knows exactly what it is measuring."
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
  "2021 Sep qtr manufacturing sales total",
  "2023-24 GDP chain volume index",
  "2021 Census SA2 usual residents",
  "2024 Q2 CPI trimmed mean",
  "6202.0 trend employment persons",
  "3101.0 ERP at 30 June",
  "8752.0 private sector houses approved",
  "PROC FREQ count = 42",
  "pandas rows: 1,048,576",
  "SA2 code 801021014",
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
  "SAS output table, lovingly copied",
  "Quarterly movement waterfall",
  "State and territory small multiple",
  "Industry division heatmap",
  "Confidence interval caterpillar",
  "Chain volume index line",
  "Original series doing jazz hands",
  "Trend estimate in sensible shoes",
  "Public holiday adjustment doodle",
  "Mesh block mosaic",
  "ERP age-sex pyramid",
  "Building approvals stacked bar",
  "Business turnover sparkline",
  "Crime rate per 100,000 line",
  "Survey response funnel",
  "Cloud cost monitoring panel",
  "Pipeline dependency graph",
  "Python validation scatter",
  "Concordance lookup table",
  "Footnote density plot",
  "Download spreadsheet tab map"
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
  "Name the Python environment something sensible",
  "Check whether the series is original, trend, or seasonally adjusted",
  "Do not compare rates without checking the denominator",
  "Beware quiet revisions",
  "Check the units before becoming confident",
  "Do not let default chart colours make policy implications",
  "Read the scope note twice",
  "Check the geography level",
  "Do not publish the debugging column",
  "Mind the time series break",
  "Keep small cells protected",
  "Check whether totals include not stated",
  "Do not trust a merge without row counts",
  "Keep the release calendar close",
  "Question any file named final2",
  "Check that SAS and Python agree",
  "Do not confuse collection date with reference period",
  "Beware annual totals pretending to be quarterly",
  "Check the rounding before the screenshot",
  "Make sure the caveat survived editing",
  "Do not anger the footnotes"
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

function randomSelectOption(select) {
  const randomIndex = Math.floor(Math.random() * select.options.length);
  select.selectedIndex = randomIndex;
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

randomButton.addEventListener("click", () => {
  randomSelectOption(zodiacSelect);
  randomSelectOption(roleSelect);
  rerollCount = 0;
  renderReading();
});

renderReading();
