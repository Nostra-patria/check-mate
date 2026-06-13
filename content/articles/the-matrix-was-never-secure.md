# The Matrix, It Turns Out, Was Never Secure

## What the Election Truth Alliance found in Pennsylvania — and why the machines we trust with democracy are still wide open

**In Cambria County, Pennsylvania, every precinct reported the same problem on election day.**

The ballots would not scan. Officials called it a "paper ballot error." Thousands of ballots were diverted into emergency bins with no chain-of-custody documentation. At midday, the county ordered **74,075 new ballots** and 35,000 ExpressVote cards. Volunteers duplicated approximately **65,000 ballots** by hand. No one tracked which originals were duplicated and which were not.

When the counting was done, the official results recorded **55,661 Election Day votes** — leaving thousands of ballots unaccounted for, floating in the gap between what was ordered, what was copied, and what was finally tallied.

And that was only Cambria. The same machines, the same software, the same vulnerabilities, were running in Allegheny, Erie, and at least 38 other counties across Pennsylvania.

The **Election Truth Alliance** has been trying to get someone to look at the paper.

---

## The Alliance

The **Election Truth Alliance** (ETA) is not a government agency. It is a network of cybersecurity professionals, former military IT specialists, and data analysts who have spent two years examining the infrastructure that counts American votes.

Their co-founder, **Nathan Taylor**, is a former Army IT specialist who says he lost his job after becoming publicly involved in election verification. He describes ETA as non-partisan. Their concern, he says, is not who won but whether the machines are telling the truth about how they counted.

ETA publishes everything: raw data, methodology, source code, archived government records. They have written open letters to the governors of Minnesota, North Carolina, Pennsylvania, and Wisconsin. They have filed a federal lawsuit. And they have compiled a set of findings that are uncomfortable no matter which party you prefer.

---

## The Pennsylvania Lawsuit

In November 2025, ETA filed a federal lawsuit in the **U.S. District Court for the Western District of Pennsylvania** — case number **61031808** — naming Secretary of the Commonwealth Al Schmidt and the election boards of Allegheny, Cambria, and Erie counties.

ETA is not asking to overturn the 2024 election. The group is explicit about this. They are asking the court to:

- Order a **hand count of physical ballots** in Allegheny, Erie, and Cambria counties
- Compare those hand counts to the machine-generated tallies
- Force officials to explain the ballot discrepancies and the software updates
- Impose procedural safeguards for future elections

The lawsuit is still pending. It has not been dismissed.

What ETA alleges is not a conspiracy theory. It is a chain of documented administrative failures that any auditor would flag:

### Cambria County
- Officials certified that all machines passed Logic & Accuracy testing. Later emails revealed this certification was **false**.
- Every precinct reported unscannable ballots on election day
- Thousands of ballots stored in emergency bins **without chain-of-custody documentation**
- **74,075 replacement ballots** ordered midday
- **~65,000 ballots duplicated by volunteers** with no tracking
- Final results: only **55,661 Election Day votes** recorded

### Software Updates Without Recertification
Pennsylvania allows "de minimis" software patches — minor updates deemed too small to require full system recertification. ETA argues this creates a window: a certified machine can have its code altered without the oversight that certified it in the first place.

At least 38 Pennsylvania counties use **ES&S** systems. Fourteen use **Dominion**. Both manufacturers' machines have been documented by independent security researchers to contain cellular modems — network hardware that makes "air-gapped" claims technically false.

---

## The Three Tests

ETA applies three independent forensic methodologies, all of them peer-reviewed and published in academic literature on international election fraud:

### 1. Klimek–Thurner "Fingerprint" Analysis
Normal elections show stable vote share across precincts regardless of turnout. Manipulated elections show an upward trend at high-turnout, high-vote locations — the same pattern documented in rigged Russian elections. Pennsylvania statewide shows the manipulated pattern.

### 2. Udot/Shpilkin Turnout–Vote Correlation
A high positive correlation between voter turnout and candidate vote share signals potential ballot stuffing, vote switching, or deletion. In Pennsylvania:
- Cambria County: **r ≈ 0.78**
- Erie County: **r ≈ 0.67**
- Allegheny County: **r ≈ 0.66**

### 3. USAID Election Forensics Toolkit (MCMC Model)
This model identified **1,804 material** and **8 extreme** fraud-indicator precincts in Pennsylvania. ETA's estimate: up to **210,000 irregular votes** statewide — comparable anomalies have appeared in North Carolina and Minnesota, which use similar equipment.

---

## The Other Swing States

ETA's work is not limited to Pennsylvania.

**North Carolina:** In August 2025, ETA issued a press release based on analysis of the 2024 election stating that "patterns consistent with vote manipulation" were present in sufficient magnitude to "potentially change the outcome of the Presidential race for that state." Early voting and election day data both displayed turnout patterns consistent with manipulation. The group also noted that in 2024, **93% of North Carolina counties** used machines that did not receive full certification testing.

**Minnesota:** ETA compared the 1984 presidential election — the last major pre-computerized baseline — with 2016, 2020, and 2024. The 1984 data showed no statistical fraud indicators. The three most recent elections all exceeded the minimum threshold for detected manipulation using the same peer-reviewed methods. The analysis controlled for sociodemographic factors and voting methods. The patterns remained.

**New York State:** A state-level security review of a single voting-machine model found **430 software vulnerabilities** that could enable voter manipulation. This is not an ETA finding. It is an official state document.

---

## The Modems

Here is the finding that cuts through partisan noise:

**Voting machines have modems.**

Election officials and machine vendors have insisted for years that voting equipment is "air-gapped" — physically disconnected from networks. ETA's examination of machine firmware, FCC filings, and hardware teardowns shows this is not true.

Many machines contain **cellular modems** with active SIM slots, antenna connections, and battery backups. They are capable of transmitting data over cellular networks. The "air gap" is a policy claim, not a physical reality.

This does not mean the machines were hacked in 2024. It means they *can* be communicated with remotely — and that the officials who certified them as isolated either did not know, or did not say.

---

## What They Do Not Claim

ETA is careful about what it does and does not assert.

They do not claim to have proven that any specific actor manipulated the 2024 election. They claim the machines are vulnerable, the data is anomalous, and the audits that would settle the matter have not been conducted.

Counter-arguments exist and should be weighed:

**Risk Limiting Audits (RLAs)** — manual recounts of statistically significant ballot samples — were performed in every swing state in 2024. In most cases, the manual counts matched the machine tabulations. Pennsylvania found seven discrepancies out of 37,000 ballots audited, all attributed to voter marking errors.

**Trusted Build Verification** — the Election Assistance Commission requires cryptographic hash verification on certified voting systems. If firmware is altered, the machine will not boot. Whether this is robust enough to catch a sophisticated, state-level or corporate-level adversary is a separate question.

**DB Main**, a statistical analyst who has published debunks of ETA's Clark County and Minnesota work, argues that the group's anomaly claims rely on misapplied mathematics and flawed input data. ETA has blocked Main and other critics on social media — a move that does not strengthen their credibility.

The debate is technical, adversarial, and unresolved. What is not in dispute is that the machines have modems, the vulnerabilities are documented, and the statistical patterns in multiple states exceed the thresholds that international election monitors use to flag elections for further review.

No such review has been ordered.

---

## The Man Who Talks Like He Built the System

The technical findings become politically explosive when layered against the public statements of the man who controls the world's largest satellite constellation.

### "He Knows Those Vote-Counting Computers"

In January 2025, at a victory rally, **Donald Trump thanked Musk for winning Pennsylvania.**

"Thank you Elon, thank you so much," Trump said. "Without Elon we wouldn't have won Pennsylvania in the voting machines." He added: "He knows those vote-counting computers."

It was an odd specificity. Not "without Elon's support." Not "without Elon's money." "Without Elon we wouldn't have won Pennsylvania **in the voting machines**."

### "I'm Fucked"

In October 2024, during a nearly two-hour interview with **Tucker Carlson**, Musk laid his personal stakes on the table. "If Donald Trump loses, I'm fucked," he said. "How long do you think my prison sentence is going to be?"

A billionaire with a satellite network, a social-media platform, and government access does not make prison jokes about an election unless he has placed himself at risk inside it.

### "An Anomaly in the Matrix"

**Ashley St. Clair** — an author, conservative influencer, and the mother of Musk's child — stated publicly that Musk told her a month before the election he was about to release "an anomaly in the matrix" using his satellites and "10,000 lasers in space."

She further alleged that Musk possessed **real-time election data** hours before Trump's victory was officially announced — and that she recorded the conversations.

Musk's team responded that he was merely describing a "three-dimensional chess metaphor" that St. Clair failed to understand. But the vocabulary — satellites, lasers, real-time data, matrix anomalies — maps uncomfortably close to actual satellite-based infrastructure. And the claim that she recorded it changes the frame from hearsay to potential evidence.

### The Wavelet Connection

Researcher **Kait Justice** has drawn a parallel between Musk's alleged interest in "wavelet" signal-processing technology and **Jeffrey Epstein's** documented research into the same mathematical field. Wavelets are used in signal compression, transmission, and interference. The connection is circumstantial. It is also deeply weird.

None of this proves Musk manipulated an election. But it does something almost as unsettling: it shows that the person with the technical capacity to interact with networked voting machines — via satellite, modem, or both — has been speaking about those machines in ways that treat them as a system he understands, has access to, and has a personal stake in.

---

## Why Europe Should Care

Musk's interest in democratic outcomes is not confined to the United States.

### The United Kingdom
In January 2025, **Politico Europe** reported that Musk agreed to pay the legal fees of **Tommy Robinson** — a convicted fraudster and anti-Islam activist whose real name is Stephen Yaxley-Lennon, currently serving an 18-month prison sentence for contempt of court. Robinson's team posted on Telegram: "We are grateful to Elon Musk and his team at X for agreeing to provide support to Tommy Robinson for two specific legal cases."

Musk had already amplified Robinson's posts during the racist riots of summer 2024. In September 2025, he called for a change of UK government at Robinson's London rally. In June 2026, a video of a Belfast knife attack shared by Robinson was amplified by Musk on X, helping fuel anti-migrant rhetoric and violent protests. When Reform UK leader Nigel Farage distanced himself from Robinson, Musk cut ties with Farage and pivoted to Robinson instead.

### Germany
In January 2025, Musk hosted a 74-minute live interview with **Alice Weidel**, co-leader of the far-right **AfD** (Alternative für Deutschland), on his X platform. The interview functioned as an endorsement. Weidel claimed Adolf Hitler "was a communist" and that her party was "conservative libertarian." Musk called the AfD "Germany's best hope" and described Weidel as the "leading candidate to run Germany."

On **January 25, 2025**, Musk made a surprise virtual appearance at an AfD campaign rally in **Halle**, Germany, telling the crowd there was "too much focus on past guilt" — on Holocaust Remembrance Day weekend. The German government considered quitting X entirely after Musk's promotion of a party under domestic intelligence surveillance for extremist tendencies.

### Ukraine
Musk controls **Starlink**, the satellite network that has become critical military communications infrastructure for Ukraine's defence against Russia. He has repeatedly used this leverage to try to influence the war — through public pressure, private negotiation, and threats to restrict service. The same man who joked about prison if Trump lost now holds the on-switch for a sovereign nation's wartime communications.

### The United States (Post-Election)
Through **DOGE** — the Department of Government Efficiency — Musk has obtained access to sensitive federal databases, payroll systems, and financial records inside the US government. In February 2025, AP News reported that DOGE was seeking access to **IRS taxpayer data**. A federal judge later temporarily blocked DOGE staff from accessing the Treasury Department's payment system. The man who joked about prison if Trump lost now has administrative keys to multiple departments — and the data of every American taxpayer within reach.

---

## Conclusion

In Cambria County, 74,075 ballots were ordered. 65,000 were duplicated by hand. 55,661 were recorded. The rest are in the gap — the space between what happened and what the machines said happened.

The Election Truth Alliance has documented that gap across Pennsylvania, North Carolina, and Minnesota. They have shown that the machines counting those ballots contain hardware that can communicate remotely. They have applied peer-reviewed forensic methods and found patterns that, in any election monitored by international observers, would trigger mandatory audits.

No such audit has been ordered.

Whether the gap was filled by incompetence, by manipulation, or by nothing at all remains unproven. Whether it *can* be filled — by a billionaire with satellites, modems, and government access — is no longer a theoretical question. It is an open door in a building no one has checked.

What ETA has built is not a conspiracy theory. It is a paper trail. And paper trails do not care who wins. They only care whether the count was honest.

The matrix, it turns out, was never as secure as we were told.
