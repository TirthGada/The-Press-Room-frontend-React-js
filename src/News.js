import React, { Component } from 'react'
import {NewsItem} from './NewsItem'

export class News extends Component {
  
    articles= [
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Egypt Ignores US Requests to Block Russian Military Flights...",
    "description": "Egypt is giving Moscow crucial access to its airspace, allowing a path to transport weapons to Ukraine from Syria",
    "url": "https://www.wsj.com/articles/usallyrebuffsrequeststoblockrussianmilitaryflights8539390f",
    "urlToImage": "https://images.wsj.net/im780270/social",
    "publishedAt": "20230512T22:00:04Z",
    "content": "WSJ News Exclusive | U.S. Ally Rebuffs Requests to Block Russian Military Flights\r\nEgypt has ignored U.S. requests to close its airspace to Russian military flights, American and Egyptian officials s… [+1098 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Men Confess to Loving Romance Novels...",
    "description": "More men, including baseball star Bryce Harper, are picking up the traditionally femaletargeted love stories; ‘almost a howto about relationships’",
    "url": "https://www.wsj.com/articles/menreadromancenovels2d8f2bf8",
    "urlToImage": "https://images.wsj.net/im778152/social",
    "publishedAt": "20230512T19:00:05Z",
    "content": "Men Confess to Loving Romance Novels. ‘You Can’t Let Anybody Knock You for It.’Elle Kennedy, a prolific author best known for romance novels featuring hot hockey players, recently found out she had a… [+912 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Soma Biswas, Laura Cooper, Jodi Xu Klein",
    "title": "Hospital Tenants of Medical Properties Trust Hire Advisers for Refinancings",
    "description": "MPT, one of the largest hospital landlords, was recently downgraded because of its exposure to Steward Health Care and Prospect Medical Holdings",
    "url": "https://www.wsj.com/articles/hospitaltenantsofmedicalpropertiestrusthireadvisersforrefinancings177657d5",
    "urlToImage": "https://images.wsj.net/im780572/social",
    "publishedAt": "20230512T14:46:00Z",
    "content": "Hospital systems Steward Health Care and Prospect Medical Holdings, among the largest tenants of healthcare real estate owner Medical Properties Trust, have brought on financial advisers to help refi… [+354 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "'War Is Fun': The Navy SEAL Who Went to Ukraine Because He Couldn't Stop Fighting...",
    "description": "Daniel Swift was in his element waging America’s war on terror from Afghanistan to Yemen. After his marriage failed back home, he found a new purpose: killing Russians.",
    "url": "https://www.wsj.com/articles/navysealukrainedanielswifta97491cd",
    "urlToImage": "https://images.wsj.net/im780279/social",
    "publishedAt": "20230512T11:00:04Z",
    "content": "‘War Is Fun’: The Navy SEAL Who Went to Ukraine Because He Couldn’t Stop FightingDaniel Swift’s nerves were shot. By the start of 2019, his Navy SEAL colleagues said, he was hardly eating or sleeping… [+838 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "In Israel, Army Service Required for All. That Could Now Change...",
    "description": "Demand by ultraOrthodox lawmakers to exempt community from draft pushes government rethink",
    "url": "https://www.wsj.com/articles/inisraelarmyserviceisrequiredforallthatcouldnowchange2c76624d",
    "urlToImage": "https://images.wsj.net/im778493/social",
    "publishedAt": "20230512T11:00:04Z",
    "content": "In Israel, Army Service Is Required for All. That Could Now Change.TEL AVIV—Since Israel’s foundation in 1948, universal military conscription has been a central pillar of national defense—and nation… [+1115 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Weilun Soon",
    "title": "Chinese Tech Stocks Rally After JD.com’s Earnings Surprise",
    "description": "S&P 500 and Nasdaq futures and bond yields are also rising",
    "url": "https://www.wsj.com/livecoverage/stockmarkettodaydowjones05122023",
    "urlToImage": "https://images.wsj.net/im780709/social",
    "publishedAt": "20230512T10:25:52Z",
    "content": "Investors in some of Chinas biggest technology companies have had a rough year, but they got some good news at the end of this week.\r\nThe Hong Konglisted shares of ecommerce giant JD.com closed up … [+352 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "CLAIMS HE'S 'STEPPING DOWN'",
    "description": "Twitter owner Elon Musk said earlier he had picked a new chief executive, without naming the person",
    "url": "https://www.wsj.com/articles/lindayaccarinointalksnewtwitterceoelonmusk7a006bb5",
    "urlToImage": "https://images.wsj.net/im780649/social",
    "publishedAt": "20230512T02:00:04Z",
    "content": "WSJ News Exclusive | NBCUniversal’s Linda Yaccarino Is in Talks to Become Twitter CEOElon Musk announced on Twitter that he has hired a new CEO for the socialmedia platform. Photo: Kori Suzuki for T… [+1148 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "YOUTUBE Looks to Use NFL Sunday Ticket to Lure Big Brands Away From Television...",
    "description": "Google unit plans to have content creators post videos from NFL sidelines, locker rooms",
    "url": "https://www.wsj.com/articles/youtubelookstousenflsundaytickettolurebigbrandsawayfromtelevision7d5ad6d8",
    "urlToImage": "https://images.wsj.net/im778589/social",
    "publishedAt": "20230511T13:00:04Z",
    "content": "YouTube Looks to Use NFL Sunday Ticket to Lure Big Brands Away From Television\r\nYouTube has a new pitch for advertisers: professional football games with a side of internet celebrities.The videostre… [+979 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "How 'Get Ready With Me' Videos Became the Ultimate Confessional...",
    "description": "Plastic surgery, anxiety medication and embarrassing pasts: Nothing is offlimits for beauty influencers on social media",
    "url": "https://www.wsj.com/articles/getreadywithmetiktok61d6810",
    "urlToImage": "https://images.wsj.net/im778515/social",
    "publishedAt": "20230511T13:00:04Z",
    "content": "How ‘Get Ready With Me’ Videos Became the Ultimate ConfessionalWhen an influencer says “get ready with me,” it’s never just about makeup. With a blending sponge in one hand and a phone set to record,… [+936 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": null,
    "title": "SoftBank Trims Overall Loss After TopsyTurvy Fiscal Year",
    "description": "Another inflation reading is due: the producerprice index",
    "url": "https://www.wsj.com/livecoverage/stockmarkettodaydowjones05112023",
    "urlToImage": "https://images.wsj.net/im589547/social",
    "publishedAt": "20230511T08:42:17Z",
    "content": "SoftBanks JanuaryMarch quarter ended a topsyturvy fiscal year for the Japanese technology investor. (Akio Kon/Bloomberg News)\r\nMasayoshi Sons SoftBank Group posted a nearly $4 billion gain on inves… [+687 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Angus Loten",
    "title": "Startups Are Scooping Up Big Tech’s CastOff Workers",
    "description": "One ecommerce startup says 15% of the 65 workers it hired in the past year had been laid off by Meta, Tesla, Amazon.com, Google and other tech giants",
    "url": "https://www.wsj.com/articles/startupsarescoopingupbigtechscastoffworkers981f7d35",
    "urlToImage": "https://images.wsj.net/im778032/social",
    "publishedAt": "20230511T03:26:00Z",
    "content": "Startups are recruiting a growing number of laidoff software developers, data scientists and engineers, luring them away from larger employersand bigger paycheckswith a chance to build software capa… [+231 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "ROVE: LawandOrder Trump Has an Evil Twin...",
    "description": "He once stood strong against ‘anarchy,’ then turned to praising the Jan. 6, 2021, rioters.",
    "url": "https://www.wsj.com/articles/lawandordertrumphasaneviltwinjan6election2024politicalviolenceproudboysoathkeeperswashington1d424246",
    "urlToImage": "https://images.wsj.net/im779464/social",
    "publishedAt": "20230511T00:00:04Z",
    "content": "Opinion | LawandOrder Trump Has an Evil TwinWonder Land: Whether it's the border, the economy or crime, the progressive way of governance is that no policy mistake can change—ever. Images: AP/AFP/G… [+1344 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Tucker's TWITTER Show Complicates Musk Bid to Win Back Advertisers...",
    "description": "Brands that are already wary of the socialmedia platform show little appetite for controversial cable host",
    "url": "https://www.wsj.com/articles/tuckercarlsontwittershowadvertisingbce7b12c",
    "urlToImage": "https://images.wsj.net/im779654/social",
    "publishedAt": "20230511T00:00:04Z",
    "content": "Tucker Carlson’s Twitter Show Complicates Elon Musk’s Bid to Win Back AdvertisersFormer Fox News host Tucker Carlson calls the socialmedia platform the ‘last big one’ that allows free speech. Photo:… [+1204 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Ukraine's Holiest Site Battleground...",
    "description": "Authorities accuse traditional Orthodox church of supporting invasion;  ‘a weapon of hybrid war’",
    "url": "https://www.wsj.com/articles/ukraineorthodoxchurchholiestsiterussianinvasionefdba553",
    "urlToImage": "https://images.wsj.net/im778660/social",
    "publishedAt": "20230510T18:00:04Z",
    "content": "Ukraine’s Holiest Site Is Battleground in Campaign to Erase Russian InfluenceKYIV—For years, Pavlo Lebid embodied the Russian Orthodox Church’s power in Ukraine’s capital. One of the highestranking … [+1002 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "First Round of Troops Deployed...",
    "description": "President Biden says border is ‘gonna be chaotic for a while,’ as thousands of migrants are expected to cross in coming weeks",
    "url": "https://www.wsj.com/articles/firstroundofustroopsheadtosouthernborder51f6394",
    "urlToImage": "https://images.wsj.net/im779110/social",
    "publishedAt": "20230510T15:00:04Z",
    "content": "First Round of U.S. Troops Head to Southern BorderThe first group of American troops is being deployed to the southern border on Wednesday as the Biden administration prepares for the expiration of T… [+913 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "JETS Haven't Been Prime Time Players. Then They Got Aaron Rodgers...",
    "description": "The Jets haven’t been a prime TV attraction in years. But when the NFL schedule is released Thursday, they will be a main draw, having already secured a new Black Friday slot.",
    "url": "https://www.wsj.com/articles/nflschedulereleasejetsaaronrodgersec9b7e8c",
    "urlToImage": "https://images.wsj.net/im779113/social",
    "publishedAt": "20230510T14:00:04Z",
    "content": "The Jets Haven’t Been Prime Time Players. Then They Got Aaron Rodgers.\r\nAaron Rodgers’s trade to the New York Jets instantly delivered a wave of optimism that the future Hall of Fame quarterback will… [+1162 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Moderating...",
    "description": "Consumerprice index rose 4.9% from year earlier",
    "url": "https://www.wsj.com/articles/usinflationapril2023consumerpriceindex48f0eac5",
    "urlToImage": "https://images.wsj.net/im778722/social",
    "publishedAt": "20230510T13:00:04Z",
    "content": "CPI Report Shows Inflation Eased in AprilInflation is slowly easing, but it’s still far from the Federal Reserve’s 2% target. WSJ’s Nick Timiraos explains how 2% became the central bank’s sweet spot … [+1041 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "'Stop Printing Money.' How Voters Would Solve DebtCeiling Standoff...",
    "description": "Nearly half of Americans oppose raising the borrowing limit, a new Wall Street Journal poll finds",
    "url": "https://www.wsj.com/articles/stopprintingmoneyhowvoterswouldsolvethedebtceilingstandoff96e36a03",
    "urlToImage": "https://images.wsj.net/im779052/social",
    "publishedAt": "20230510T12:00:04Z",
    "content": "‘Stop Printing Money.’ How Voters Would Solve the DebtCeiling StandoffAs Democrats and Republicans debate raising the debt ceiling, they both agree that a default would be disastrous for the economy… [+1220 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Dems Step Up Scrutiny of Gifts to Justice Thomas...",
    "description": "Two Senate committees are seeking detailed accounting of the transactions",
    "url": "https://www.wsj.com/articles/harlancrowsgiftsbusinesstieswithjusticethomasunderfreshscrutinybydemocratsdd05661e",
    "urlToImage": "https://images.wsj.net/im778599/social",
    "publishedAt": "20230509T21:00:04Z",
    "content": "Harlan Crow’s Gifts, Financial Ties With Justice Thomas Under Fresh Scrutiny by Democrats\r\nWASHINGTON—Senate Democrats are ramping up their scrutiny of billionaire Harlan Crow’s relationship with Jus… [+1238 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Tipping at SelfCheckout Has Customers Crying 'Emotional Blackmail'...",
    "description": "Consumers already bristling at higher prices question where the money goes when interaction with an employee was nonexistent",
    "url": "https://www.wsj.com/articles/tippingselfcheckoutrestaurantsairportsc3e09f7",
    "urlToImage": "https://images.wsj.net/im775177/social",
    "publishedAt": "20230508T11:00:04Z",
    "content": "Tipping at SelfCheckout Has Customers Crying ‘Emotional Blackmail’\r\nZero interaction with employees during a transaction no longer guarantees freedom from the moral quandary of how much to tip.Promp… [+1048 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "The Lies We Tell Ourselves About Multitasking...",
    "description": "Our brains aren’t wired to juggle tasks",
    "url": "https://www.wsj.com/articles/thelieswetellourselvesaboutmultitasking47938445",
    "urlToImage": "https://images.wsj.net/im776084/social",
    "publishedAt": "20230508T11:00:04Z",
    "content": "The Lies We Tell Ourselves About MultitaskingAlison Cate was walking on the treadmill while tapping away on her laptop and taking a selfie. Until she wasn’t. Her foot slipped. Her ankle rolled. The d… [+730 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "West Looks to China to End Ukraine War...",
    "description": "An expected offensive by Ukraine is seen as paving way for negotiations with Russia",
    "url": "https://www.wsj.com/articles/usandallieslookatpotentialchinaroleinendingukrainewar2d6cbb4d",
    "urlToImage": "https://images.wsj.net/im777353/social",
    "publishedAt": "20230507T13:00:05Z",
    "content": "U.S. and Allies Look at Potential China Role in Ending Ukraine War \r\nSome U.S. and European officials said they believe that Ukraine’s planned spring offensive could pave the way for negotiations bet… [+1140 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Can State Flag Be Too 'Woke'? Utahns Say So...",
    "description": "Gov. Spencer Cox thought a redesign of the state flag would bring people together. ‘I should have known better.’",
    "url": "https://www.wsj.com/articles/utahnewflagdesignbeehivef18e5712",
    "urlToImage": "https://images.wsj.net/im776077/social",
    "publishedAt": "20230507T12:00:04Z",
    "content": "Can a State Flag Be Too ‘Woke’? Some Utahns Say SoUtah’s state flag has always featured a beehive, a symbol the early Mormons used for everyone working together.When the state moved to adopt a new fl… [+661 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Edward Ring",
    "title": "California Insists on Wasting Its Scarce Water Supply",
    "description": "Harvesting its abundant storm runoff would allow the state to leave the Colorado River alone.",
    "url": "https://www.wsj.com/articles/radicalenvironmentalistsinsistonwastingcaliforniawater0coloradoriverflooddeltainfrastructureclimateactivismba485028",
    "urlToImage": "https://images.wsj.net/im776001/social",
    "publishedAt": "20230506T23:01:00Z",
    "content": "With the nations two largest reservoirs, Lake Powell and Lake Mead, drawn down to historic lows, the seven states that use water from the Colorado River have failed to agree on how to adapt to its dw… [+1175 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Russia Evacuates Civilians Ahead of Kyiv Counteroffensive...",
    "description": "Ukraine imposes curfew on areas close to the front line after Russian shelling of civilians",
    "url": "https://www.wsj.com/articles/russiaevacuatesciviliansfrompartsofukraineaheadofkyivcounteroffensive282e6421",
    "urlToImage": "https://images.wsj.net/im777225/social",
    "publishedAt": "20230506T18:00:04Z",
    "content": "Russia Evacuates Civilians From Parts of Ukraine Ahead of Kyiv CounteroffensiveKYIV, Ukraine—Russianinstalled officials ordered civilians in 18 occupied communities near the front line to evacuate a… [+1093 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Seth Shostak",
    "title": "Will Powerful New Tools Finally Let Us Hear Alien Civilizations?",
    "description": "The most potent effort yet to find extraterrestrial life is searching for beings that may not want to be found",
    "url": "https://www.wsj.com/articles/willpowerfulnewtoolsfinallyletushearaliencivilizationse5f38ff2",
    "urlToImage": "https://images.wsj.net/im775766/social",
    "publishedAt": "20230506T14:43:39Z",
    "content": "What could motivate extraterrestrial civilizations to beam electromagnetic signals into space? They might be using them for navigation or entertainment, or as a way of pinging our solar system to see… [+780 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Alexander Saeedy, Jodi Xu Klein",
    "title": "SOROS DEAL TO BUY VICE...",
    "description": "The media business is in talks to sell itself to top lenders Fortress Investment and Soros Fund Management through a reorganization that would wipe out other investors",
    "url": "https://www.wsj.com/articles/vicemedianearsdealfor400millionsaleoutofbankruptcy64297d2",
    "urlToImage": "https://images.wsj.net/im750545/social",
    "publishedAt": "20230506T13:13:38Z",
    "content": "Vice Media is nearing a deal for senior lenders including Fortress Investment Group and Soros Fund Management to acquire the troubled media company out of bankruptcy at a valuation of around $400 mil… [+464 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "John Gruber",
    "title": "Ford CEO Jim Farley Seems Very Happy That GM Is Dropping CarPlay",
    "description": "Jim Farley spoke at The Wall Street Journal's Future of Everything Festival about competition and technology within the EV market.",
    "url": "https://www.wsj.com/video/fordceoonapplegoogleandelonmusk/B6D8BC451C4A45D397AC933A57B76E31.html",
    "urlToImage": "http://images.wsj.net/im776093?width=1280&height=720",
    "publishedAt": "20230506T00:59:02Z",
    "content": "Great 3minute clip from Joanna Stern’s interview with Ford CEO Jim Farley at the WSJ’s Future of Everything Festival. She asks him about GM’s plan to drop CarPlay from their future EVs, and Farley s… [+1679 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Special Counsel Zooms In on Possible Criminal Charges in Trump Probe...",
    "description": "Prosecutors’ revisiting of earlier witness testimony points to effort to tie up loose ends",
    "url": "https://www.wsj.com/articles/intrumpprobespecialcounselzoomsinonpossiblecriminalcharges42f60b4",
    "urlToImage": "https://images.wsj.net/im776769/social",
    "publishedAt": "20230505T20:00:03Z",
    "content": "In Trump Probe, Special Counsel Zooms In on Possible Criminal Charges\r\nWASHINGTON—Special counsel Jack Smith is racing through a roster of interviews in his wideranging investigations related to for… [+1278 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "TIKTOK Tracked Users Who Watched Gay Content, Prompting Employee Complaints...",
    "description": "Company logged categories of content and users on app in effort to boost engagement; spokeswoman says TikTok has restricted access to that data",
    "url": "https://www.wsj.com/articles/tiktoktrackeduserswhowatchedgaycontentpromptingemployeecomplaints5966a5f5",
    "urlToImage": "https://images.wsj.net/im776043/social",
    "publishedAt": "20230505T15:00:04Z",
    "content": "WSJ News Exclusive | TikTok Tracked Users Who Watched Gay Content, Prompting Employee ComplaintsFor at least a year, some employees at TikTok were able to find what they described internally as a lis… [+1247 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "The Unwelcome Sensation That Hits at 43...",
    "description": "Oldest millennials reach decade when people often start to notice signs of aging",
    "url": "https://www.wsj.com/articles/millennialsturning40feelingold1df2c83b",
    "urlToImage": "https://images.wsj.net/im769237/social",
    "publishedAt": "20230505T14:00:04Z",
    "content": "The Unwelcome Sensation That Hits at 43\r\nMillennials are starting to feel old.The first members of the millennial generation, often classified as those born between about 1980 and 1996, begin to turn… [+778 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "TWITTER Blue Check Marks Become Polarizing Symbol of Musk's Tenure...",
    "description": "Some users disavow Twitter’s paid check marks, while others say the subscription features are worth buying",
    "url": "https://www.wsj.com/articles/twittersbluecheckmarksbecomepolarizingsymbolofelonmuskstenureda0fb19e",
    "urlToImage": "https://images.wsj.net/im776361/social",
    "publishedAt": "20230505T11:00:04Z",
    "content": "Twitter’s Blue Check Marks Become Polarizing Symbol of Elon Musk’s TenureElon Musk’s move to upend Twitter’s longstanding verification system is turning the platform’s iconic blue check marks into a … [+1059 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Paramount Can't Say No to Man Behind 'YELLOWSTONE': $50,000 a Week for His Ranch, $25 Per Cow...",
    "description": "Taylor Sheridan writes most of the company’s hits, giving him clout to dominate the bigbudget productions through his network of commercial projects, pushing costs to among the highest in Hollywood",
    "url": "https://www.wsj.com/articles/yellowstoneshowtaylorsheridanparamountproductioncosts67e634ee",
    "urlToImage": "https://images.wsj.net/im773715/social",
    "publishedAt": "20230505T11:00:04Z",
    "content": "Paramount Can’t Say No to the Man Behind ‘Yellowstone’: $50,000 a Week for His Ranch, $25 Per CowNo one on the set of “Yellowstone” could figure out why the show was paying a horse wrangler who was m… [+1012 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "American Royal Watchers Draw Line at King's Coronation...",
    "description": "Faced with a 5 a.m. wakeup, royal fans who’ve never missed a predawn wedding or funeral may skip the coming ceremony: ‘Charles does not get a tea party.’",
    "url": "https://www.wsj.com/articles/kingcharlescoronationwatchpartiesus365a7d3a",
    "urlToImage": "https://images.wsj.net/im774135/social",
    "publishedAt": "20230504T21:00:04Z",
    "content": "‘I’m Not Excited For Him to Become King’: American Royal Watchers Draw the Line at King Charles CoronationWhen Queen Elizabeth passed away last year, Sue Hurt threw a tea party with Fortnum & Mason E… [+879 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "BUD LIGHT Maker Offers Financial Support to Workers Targeted Over Dylan Mulvaney Backlash...",
    "description": "AnheuserBusch to triple summer marketing spending on brand after backlash dents sales",
    "url": "https://www.wsj.com/articles/abinbevbudq1earningsreport2023aae4f177",
    "urlToImage": "https://images.wsj.net/im775757/social",
    "publishedAt": "20230504T15:00:04Z",
    "content": "Bud Light Maker Offers Financial Support to Workers Targeted Over Dylan Mulvaney BacklashTransgender activist Dylan Mulvaney spoke out for the first time since her Bud Light promotion sparked controv… [+1359 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "The Houses Must be White, and Designs Preapproved. Everybody Wants In...",
    "description": "Demand for property in Alys Beach, a planned community on Florida’s Panhandle, has soared over the past few years—even if there are a lot of rules",
    "url": "https://www.wsj.com/articles/alysbeachfloridafa0710cd",
    "urlToImage": "https://images.wsj.net/im773560/social",
    "publishedAt": "20230504T12:00:04Z",
    "content": "The Houses Must be White, and the Designs Preapproved. Everybody Wants In. When Covid hit in 2020, Iain and Ronni Watson were planning a cruise in Greece with their friends David and Jackie Weill. So… [+1042 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "EighthGraders' History, Civics Test Scores Hit Record Low...",
    "description": "The scores in U.S. history and civics—the first released since the start of the pandemic—reverse gains made since the 1990s",
    "url": "https://www.wsj.com/articles/americaneighthgradersdontknowmuchabouthistorytestscoresshow56ef367c",
    "urlToImage": "https://images.wsj.net/im774404/social",
    "publishedAt": "20230503T19:00:05Z",
    "content": "EighthGraders’ History, Civics Test Scores Hit Record Low\r\nEighthgraders’ test scores in U.S. history and civics fell to the lowest levels on record last year, according to Education Department dat… [+959 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Federal Reserve Raises Rates, Signals Potential Pause...",
    "description": "Central bank officials remove earlier guidance that had pointed to further increases",
    "url": "https://www.wsj.com/articles/federalreserveraisesratessignalspotentialpauseeb264784",
    "urlToImage": "https://images.wsj.net/im775148/social",
    "publishedAt": "20230503T19:00:05Z",
    "content": "Federal Reserve Raises Rates, Signals Potential PauseWatch live coverage of a Federal Reserve news conference with Chair Jerome Powell.WASHINGTON—The Federal Reserve approved another quarterpercenta… [+940 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "New York Passes FirstinNation Ban on Gas Stoves in New Homes, Apartments...",
    "description": "The rule aims to help the state curb greenhousegas emissions",
    "url": "https://www.wsj.com/articles/newyorkpassesfirstinnationbanongasstovesinnewhomesapartmentscf12f642",
    "urlToImage": "https://images.wsj.net/im774126/social",
    "publishedAt": "20230503T15:00:04Z",
    "content": "New York Passes FirstinNation Ban on Gas Stoves in New Homes, Apartments\r\nNew York is set to become the first state in the U.S. to ban gas stoves in new homes and apartments.The Democraticcontroll… [+953 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Epstein Docs, Part 2: Dinners With Lawrence Summers and Movie Screenings With Woody Allen...",
    "description": "Schedules and emails show deeper relationships between the disgraced financier and a range of prominent people, including the former Treasury secretary and the filmmaker",
    "url": "https://www.wsj.com/articles/jeffreyepsteindocumentswoodyallenlarrysummersedb3e9b2",
    "urlToImage": "https://images.wsj.net/im774598/social",
    "publishedAt": "20230503T11:00:04Z",
    "content": "WSJ News Exclusive | Jeffrey Epstein Documents, Part 2: Dinners With Lawrence Summers and Movie Screenings With Woody AllenLawrence Summers wanted $1 million to fund an online poetry project his wife… [+1091 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "World Press Freedom Day Marked by Rising Threats...",
    "description": "Wall Street Journal reporter Evan Gershkovich has been detained by Russia for five weeks",
    "url": "https://www.wsj.com/articles/worldpressfreedomdayismarkedbyrisingthreatsagainstreporters3b77e3c5",
    "urlToImage": "https://images.wsj.net/im774436/social",
    "publishedAt": "20230503T11:00:04Z",
    "content": "World Press Freedom Day Is Marked by Rising Threats Against ReportersIllustration: Todd JohnsonOn the 30th World Press Freedom Day, journalists are set to discuss solutions on how to report in countr… [+870 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Switzerland Wants Children to Eat Less Chocolate, More Insects...",
    "description": "Companies pitch bugs to young consumers at schools. Spicy mealworms don’t fly with Ana: ‘blech.’",
    "url": "https://www.wsj.com/articles/switzerlandwantschildrentoeatlesschocolatemoreinsectsb1274fa7",
    "urlToImage": "https://images.wsj.net/im773323/social",
    "publishedAt": "20230502T14:00:04Z",
    "content": "Switzerland Wants Children to Eat Less Chocolate, More InsectsMAUR, Switzerland—In this land of cheese and chocolate, children are being schooled in the more subtle pleasures of eating mealworms, loc… [+947 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Can Kidney Transplant Drug Keep You From Aging?",
    "description": "Longevity seekers are captivated by a transplant drug called rapamycin, but many doctors are wary",
    "url": "https://www.wsj.com/articles/rapamycinantiagingdruglongevitya27575f4",
    "urlToImage": "https://images.wsj.net/im772240/social",
    "publishedAt": "20230501T18:00:06Z",
    "content": "Can a Kidney Transplant Drug Keep You From Aging?A kidney transplant drug has become the latest fixation of people trying to fight aging.Some people looking to extend their lifespan have for years tu… [+828 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "The Wall Street Journal",
    "title": "Lebrecht — One Man’s Relationship With Beethoven’s Music",
    "description": "It is a sad fact in the 2020s that anyone writing a book praising the achievements of an artist on the order of Ludwig van Beethoven situates himself on the dangerous side of a political question. – The Wall Street Journal",
    "url": "https://www.wsj.com/articles/whybeethovenreviewcanageniussurvivea9e1e516",
    "urlToImage": "https://images.wsj.net/im770110/social",
    "publishedAt": "20230428T17:26:00Z",
    "content": "In 2010 the British music critic Norman Lebrecht published Why Mahler? The book was an attempt to explain why the symphonies of Gustav Mahler (18601911) inspired both hatred and adoration in his lif… [+781 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "The Ugly World of AddOn Fees for Everything...",
    "description": "Here’s a trend I hope doesn’t catch on: Paying extra for things I like less",
    "url": "https://www.wsj.com/articles/theuglyworldofaddonfeesforeverythinge41dc776",
    "urlToImage": "https://images.wsj.net/im770864/social",
    "publishedAt": "20230428T14:00:04Z",
    "content": "The Ugly World of AddOn Fees for Everything\r\nI couldn’t watch the lowly Colorado Rockies get smacked around by my Philadelphia Phillies on Sunday; I forgot that the TV broadcast was only on Peacock.… [+1030 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "NOONAN: Biden vs. Trump in 2024? Don't Be So Sure...",
    "description": "Look at voters’ faces when you describe the matchup and you’ll realize they’re open to alternatives.",
    "url": "https://www.wsj.com/articles/bidenvstrumpdontbesosurerfkthirdpartyrematch2024electionindependentsbea741f2",
    "urlToImage": "https://images.wsj.net/im771700/social",
    "publishedAt": "20230428T12:00:04Z",
    "content": "Opinion | Biden vs. Trump in 2024? Don’t Be So SureWonder Land: A besidethepoint president is the best thing that has ever happened to the progressive centralization project. But its success in 202… [+1333 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "USA Arms Warplanes With 'Bunker Busting' Bombs in Message to Iran...",
    "description": "The Air Force’s A10 Warthogs are carrying 250pound precisionguided weapons in the Mideast",
    "url": "https://www.wsj.com/articles/usarmswarplaneswithbunkerbustingbombsinmessagetoiranba1ecb08",
    "urlToImage": "https://images.wsj.net/im771451/social",
    "publishedAt": "20230428T12:00:04Z",
    "content": "WSJ News Exclusive | U.S. Arms Warplanes With ‘Bunker Busting’ Bombs in Message to Iran\r\nThe U.S. military is for the first time putting 250pound “bunker busting” bombs on attack aircraft recently s… [+1076 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "'I Cloned Myself With AI. She Fooled My Bank and My Family'...",
    "description": "Our columnist replaced herself with AI voice and video to see how humanlike the tech can be. The results were eerie.",
    "url": "https://www.wsj.com/articles/iclonedmyselfwithaishefooledmybankandmyfamily356bd1a3",
    "urlToImage": "https://images.wsj.net/im771604/social",
    "publishedAt": "20230428T11:00:04Z",
    "content": "I Cloned Myself With AI. She Fooled My Bank and My Family.Photo illustration: Elena ScottiThe good news about AI Joanna: She never loses her voice, she has outstanding posture and not even a converti… [+795 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Priced Out of Florida, More Retirees Trying Alabama...",
    "description": "Seniors are finding that Alabama’s Baldwin County is not only more affordable, but has the same weather and same beaches that make its neighbor a popular retirement destination",
    "url": "https://www.wsj.com/articles/retiringinalabamab59c55b3",
    "urlToImage": "https://images.wsj.net/im769502/social",
    "publishedAt": "20230427T13:00:04Z",
    "content": "Priced Out of Florida, More Retirees Are Trying This Sunbelt State on For SizeThe Wall Street Journal’s Mansion section is rolling out stories from our special retirement issue. Check out stories lik… [+1048 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "U.S. Military Relies on Louisiana Factory. It Blew Up...",
    "description": "Decades of consolidation has left the Pentagon vulnerable to mishaps—including when the sole maker of a crucial type of gunpowder went offline",
    "url": "https://www.wsj.com/articles/theusmilitaryhasanexplosiveproblem6e1a1049",
    "urlToImage": "https://images.wsj.net/im769038/social",
    "publishedAt": "20230426T19:00:04Z",
    "content": "The U.S. Military Relies on One Louisiana Factory. It Blew Up.MINDEN, La.—Nearly two years ago, an errant spark inside a mill caused an explosion so big it destroyed all the building’s equipment and … [+867 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Schools Ditching Homework, Deadlines in Favor of 'Equitable Grading'...",
    "description": "Approach  aims to measure mastery and account for hardships at home; teachers say some students game the system",
    "url": "https://www.wsj.com/articles/schoolsareditchinghomeworkdeadlinesinfavorofequitablegradingdcef7c3e",
    "urlToImage": "https://images.wsj.net/im769897/social",
    "publishedAt": "20230426T12:00:06Z",
    "content": "Schools Are Ditching Homework, Deadlines in Favor of ‘Equitable Grading’Las Vegas highschool English teacher Laura Jeanne Penrod initially thought the grading changes at her school district made sen… [+1251 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Vulgar, Offensive Messages About Colleagues Helped Seal Carlson's Fate...",
    "description": "Primetime host called senior executive the cword in redacted missive; network grew wary of further embarrassment from possible disclosure",
    "url": "https://www.wsj.com/articles/tuckercarlsonsvulgaroffensivemessagesaboutcolleagueshelpedsealhisfateatfoxnewse52b3cc5",
    "urlToImage": "https://images.wsj.net/im769688/social",
    "publishedAt": "20230426T12:00:06Z",
    "content": "Tucker Carlson’s Vulgar, Offensive Messages About Colleagues Helped Seal His Fate at Fox NewsSeveral weeks ago, as Fox News lawyers prepared for a courtroom showdown with Dominion Voting Systems, the… [+1385 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": null,
    "title": "Sounds of Hesitation Are More Than Filler",
    "description": "Equivalents of ‘um’ and ‘uh’ appear in most languages, suggesting that such ‘filled pauses’ help us to communicate.",
    "url": "https://www.wsj.com/articles/oursoundsofhesitationaremorethanfiller1f2f5807",
    "urlToImage": "https://images.wsj.net/im762218/social",
    "publishedAt": "20230426T02:24:30Z",
    "content": "When your Amazon Alexa or Google Assistant asks you if you want the weather forecast, its not only what they say that alerts us to their nonhuman nature, but what they dont say. The halting ums and h… [+924 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "GOOGLE Ad Revenue Drops for Second Quarter...",
    "description": "Search giant tries to jumpstart growth amid volatile digital ad market and competition in AI",
    "url": "https://www.wsj.com/articles/alphabetgooglegooglq1earningsreport2023562dbb62",
    "urlToImage": "https://images.wsj.net/im762753/social",
    "publishedAt": "20230425T22:00:05Z",
    "content": "Google Ad Revenue Drops for Second Straight QuarterPhoto illustration: Preston Jessee for The Wall Street JournalGoogle reported a second straight drop in advertising revenue, extending a rare declin… [+1142 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Socials Countdown to Comply With West's Toughest Content Law...",
    "description": "Rules to cover 19 platforms and search engines deemed ‘very large’ by the EU’s new Digital Services Act",
    "url": "https://www.wsj.com/articles/tiktoktwittermetafacecountdowntocomplywithtoughcontentlaw3efc3048",
    "urlToImage": "https://images.wsj.net/im769230/social",
    "publishedAt": "20230425T16:00:04Z",
    "content": "TikTok, Twitter, Meta Face Countdown to Comply With West’s Toughest Content Law\r\nBRUSSELS—The world’s most farreaching digitalcontent law will oblige 19 socialmedia, search and ecommerce services… [+1183 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Italy Strips Gay Couples of Parental Recognition...Meloni crackdown...",
    "description": "Georgia Meloni’s government moves to restrict samesex parenthood as its champions traditional values",
    "url": "https://www.wsj.com/articles/italystripssomegaycouplesofparentalrecognition4f3993c1",
    "urlToImage": "https://images.wsj.net/im768920/social",
    "publishedAt": "20230425T13:00:07Z",
    "content": "Italy Strips Some Gay Couples of Parental RecognitionROME—Michela Leidi became a mother last summer when her wife gave birth to their daughter Giulia. The couple was swept up in the joyful, sleepless… [+1100 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Soma Biswas",
    "title": "Bed Bath & Beyond Took Out Emergency Loan on Eve of Bankruptcy",
    "description": "The retailer borrowed $54 million on Friday to make payroll, showing its finances were unusually dire even for a company facing chapter 11",
    "url": "https://www.wsj.com/articles/bedbathbeyondtookoutemergencyloanoneveofbankruptcy6b406773",
    "urlToImage": "https://images.wsj.net/im769318/social",
    "publishedAt": "20230424T22:36:00Z",
    "content": "Bed Bath &amp; Beyond Inc. faced a much worse financial situation ahead of its bankruptcy filing than is typical for companies facing an imminent chapter 11.\r\nThe homegoods retailer sought a $54 mil… [+691 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "On Island South of Taiwan, U.S. Prepares for Conflict With China...",
    "description": "Part of largestever annual drills with the Philippines focuses on defending strategic Bashi Channel",
    "url": "https://www.wsj.com/articles/onbascoislandsouthoftaiwanusmilitarypreparesforconflictwithchinaf7c5c8bc",
    "urlToImage": "https://images.wsj.net/im768786/social",
    "publishedAt": "20230424T15:00:04Z",
    "content": "On Basco Island South of Taiwan, U.S. Military Prepares for Conflict With ChinaPhoto: Ted Aljibe/Agence FrancePresse/Getty ImagesBASCO, Philippines—On a rocky, windswept island just over 100 miles s… [+1127 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "The Grim Life and Brutal Death of a Wagner Recruit...",
    "description": "A Russian prisoner struck a deal to fight for six months in Ukraine in exchange for his freedom, one of many who hoped to collect his due",
    "url": "https://www.wsj.com/articles/grimlifeandbrutaldeathofawagnerrecruit40d9473a",
    "urlToImage": "https://images.wsj.net/im768860/social",
    "publishedAt": "20230424T15:00:04Z",
    "content": "The Grim Life and Brutal Death of a Wagner RecruitBARVINKOVE, Ukraine—Yevgeny Nuzhin, an excop and convicted killer, had carved out as good a life as a penniless inmate could expect inside a highse… [+920 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "There Were 1,269 Efforts to Ban Books in '22. These Were Most Targeted...",
    "description": "Efforts to censor books and other resources in libraries nearly doubled in 2022, according to the American Library Association",
    "url": "https://www.wsj.com/articles/therewere1269effortstobanbooksin2022thesewerethemosttargetede19f3f33",
    "urlToImage": "https://images.wsj.net/im768181/social",
    "publishedAt": "20230424T14:00:04Z",
    "content": "There Were 1,269 Efforts to Ban Books in 2022. These Were the Most Targeted.\r\nA graphicnovel memoir about gender identity. A collection of personal essays by a queer Black activist. Toni Morrison’s … [+857 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Surprising Surge of Faith Among Young People...",
    "description": "Young adults, theologians and church leaders say the increase is a response to the pandemic",
    "url": "https://www.wsj.com/articles/thesurprisingsurgeoffaithamongyoungpeople424220bd",
    "urlToImage": "https://images.wsj.net/im762356/social",
    "publishedAt": "20230423T14:00:04Z",
    "content": "The Surprising Surge of Faith Among Young PeopleA greater share of young adults say they believe in a higher power or God.About onethird of 18to25yearolds say they believe—more than doubt—the ex… [+933 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Charles Barkley, Gayle King New CNN Show Won't Be Political, Hosts Say...",
    "description": "Mr. Barkley, an NBA commentator, said while the primetime show won’t have a partisan stance, it will tackle current issues like gun violence",
    "url": "https://www.wsj.com/articles/cnnannouncesnewprimetimeshowfeaturinggaylekingandcharlesbarkley5294346",
    "urlToImage": "https://images.wsj.net/im768476/social",
    "publishedAt": "20230423T11:00:04Z",
    "content": "Charles Barkley and Gayle King’s New CNN Show Won’t Be Political, Hosts Say\r\n“CBS Mornings” anchor Gayle King and former National Basketball Association star Charles Barkley will host a weekly prime… [+1031 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Happiest People in America. Called Them to Ask Why...",
    "description": "Only 12% of respondents in a recent WSJ poll said they were ‘very happy.’ We called to ask what makes them different.",
    "url": "https://www.wsj.com/articles/happiestpeopleamericapollef7c854c",
    "urlToImage": "https://images.wsj.net/im764995/social",
    "publishedAt": "20230422T15:00:04Z",
    "content": "They’re the Happiest People in America. We Called Them to Ask Why.America’s happiest people have a few traits in common: They value community and close personal relationships. They tend to believe in… [+879 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Americans Escaping Pricey Cities Bring Higher Housing Costs, Inflation With Them...",
    "description": "Inflation in some warmweather metro areas is more than 2 percentage points higher than national rate",
    "url": "https://www.wsj.com/articles/americansescapingpriceycitiesbringhigherhousingcostsinflationwiththema3118424",
    "urlToImage": "https://images.wsj.net/im767882/social",
    "publishedAt": "20230422T14:00:04Z",
    "content": "Americans Escaping Pricey Cities Bring Higher Housing Costs, Inflation With Them\r\nTampa, Fla., residents face some of the hottest inflation in the country, but when excluding sizzling housing costs, … [+1157 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Europe AirTraffic Agency Under Attack From Hackers...",
    "description": "Air traffic isn’t at risk but the attack is ongoing, Eurocontrol said, amid fears about the safety of Europe’s critical infrastructure",
    "url": "https://www.wsj.com/articles/europesairtrafficagencyunderattackfromprorussianhackers54b4514d",
    "urlToImage": "https://images.wsj.net/im767329/social",
    "publishedAt": "20230420T18:00:06Z",
    "content": "WSJ News Exclusive | Europe’s AirTraffic Agency Under Attack From ProRussian Hackers\r\nEurope’s airtraffic control agency said Thursday that it was under attack from proRussian hackers amid fears … [+1042 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Record Number of Journalists Detained Worldwide Prior to Gershkovich Arrest...",
    "description": "‘It’s gotten worse everywhere,’ the Committee to Protect Journalists says about press freedom",
    "url": "https://www.wsj.com/articles/arecordnumberofjournalistsweredetainedworldwidepriortoevangershkovichsarrestcae34b14",
    "urlToImage": "https://images.wsj.net/im765765/social",
    "publishedAt": "20230420T13:00:04Z",
    "content": "A Record Number of Journalists Were Detained Worldwide Prior to Evan Gershkovich’s ArrestA record number of journalists were imprisoned in 2022, a sign of weakening press freedom worldwide, according… [+1070 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Soma Biswas, Alexander Gladstone",
    "title": "Bed Bath & Beyond Preparing for Bankruptcy Filing Within Days",
    "description": "The struggling retailer again is preparing to file for chapter 11 after its latest fundraising strategy fell short of its needs, people familiar with the matter say",
    "url": "https://www.wsj.com/articles/bedbathbeyondpreparingforbankruptcyfilingwithindays7d5840a7",
    "urlToImage": "https://images.wsj.net/im766556/social",
    "publishedAt": "20230419T21:36:00Z",
    "content": "Bed Bath &amp; Beyond Inc. is preparing a bankruptcy filing for as early as this weekend as its falling stock price makes it near impossible to raise enough capital to avert default, according to peo… [+438 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Katherine Clarke",
    "title": "Inside Texas Socialite's Party Palace, Where She Entertained Tom Brady and H.W. Bush...",
    "description": "Inside Texas Socialite's Party Palace, Where She Entertained Tom Brady and H.W. Bush...\r\n\n \n \n \n (First column, 10th story, link)\r\n\n \r\n\n \r\n\n \n \n Drudge Report Feed needs your support!   Become a Patron",
    "url": "https://www.wsj.com/articles/riveroakshoustonhomeauctionbec8323b",
    "urlToImage": "https://images.wsj.net/im765624/social",
    "publishedAt": "20230419T12:22:38Z",
    "content": "When they say opposites attract, they might well be talking about wealthy Texas couple John Thrash and his wife, Becca Cason Thrash. While Mr. Thrash, a green energy entrepreneur and architecture won… [+721 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Russian Court Upholds WSJ Reporter's Detention...",
    "description": "Journalist to remain in pretrial detention at Moscow’s Lefortovo prison",
    "url": "https://www.wsj.com/articles/moscowcourttohearappealondetentionofjailedwsjreporterevangershkovich9c464c6c",
    "urlToImage": "https://images.wsj.net/im765259/social",
    "publishedAt": "20230418T12:00:04Z",
    "content": "Russian Court Upholds WSJ Reporter Evan Gershkovich’s Detention\r\nPhoto: Maxim Shipenkov/ShutterstockA Moscow court upheld the detention of Wall Street Journal reporter Evan Gershkovich at the prison … [+1037 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Putin Makes Rare Trip to RussianOccupied Areas of Ukraine...",
    "description": "Visit near the front lines comes as Kyiv gears up for offensive to drive back Moscow’s forces",
    "url": "https://www.wsj.com/articles/putinmakesraretriptorussianoccupiedareasofukrainee178d5c5",
    "urlToImage": "https://images.wsj.net/im765218/social",
    "publishedAt": "20230418T11:00:04Z",
    "content": "Putin Makes Rare Trip to RussianOccupied Areas of UkraineRussian President Vladimir Putin has made a rare visit near the front lines of the war he began in Ukraine, meeting with military commanders … [+1045 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "What Do Americans Want in European Vacation? Fewer Americans...",
    "description": "As the hottest spots get overrun with U.S. tourists, some visitors plan vacations to new countries and regions",
    "url": "https://www.wsj.com/articles/europetravelsummervacationreservationsaa6b6bc6",
    "urlToImage": "https://images.wsj.net/im763383/social",
    "publishedAt": "20230417T15:00:04Z",
    "content": "What Do Americans Want in a European Vacation? Fewer AmericansFor some U.S. travelers, this summer’s hottest European destination is one without other Americans.American tourists mobbed Europe last y… [+1004 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Determined to Flee China, Thousands Take Route to Southern U.S. Border...",
    "description": "In search of economic opportunity or political freedom, Chinese contend with smugglers, bandits and treacherous jungle on trek through Latin America",
    "url": "https://www.wsj.com/articles/determinedtofleechinathousandstakealongdangerousroutetothesouthernusborder73acfbe9",
    "urlToImage": "https://images.wsj.net/im763644/social",
    "publishedAt": "20230416T13:00:04Z",
    "content": "Determined to Flee China, Thousands Take a Long, Dangerous Route to the Southern U.S. BorderOn a crowded speedboat making a night crossing in rough waters off Colombia in January, Daniel Huang, a for… [+1098 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "As Tiny Island Is Militarized, India Worries About Beijing's Growing Footprint...",
    "description": "Satellite images track a decade of construction on Myanmar’s strategically located Great Coco Island",
    "url": "https://www.wsj.com/articles/asatinyislandismilitarizedindiaworriesaboutchinasgrowingfootprint7e2c7f0e",
    "urlToImage": "https://images.wsj.net/im763505/social",
    "publishedAt": "20230415T14:00:04Z",
    "content": "As a Tiny Island Is Militarized, India Worries About China’s Growing FootprintIndia is monitoring a strategically located island in the Bay of Bengal over concerns China could be involved in a buildu… [+1224 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "BOOM: New Home Crowned Priciest Property to Ever Sell in Paradise Valley...",
    "description": "An estate built for a car collector has sold for a record $23.5 million",
    "url": "https://www.wsj.com/articles/anewhomeiscrownedpriciestpropertytoeversellinparadisevalleyd67408ed",
    "urlToImage": "https://images.wsj.net/im764235/social",
    "publishedAt": "20230415T14:00:04Z",
    "content": "WSJ News Exclusive | A New Home Is Crowned Priciest Property to Ever Sell in Paradise ValleyBe the first to know about the biggest and best luxury home sales and listings by signing up for our Mansio… [+950 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Economists Turn More Pessimistic on Inflation...",
    "description": "Persistent inflation will keep interest rates elevated and recession risks high, Journal survey finds",
    "url": "https://www.wsj.com/articles/economiststurnmorepessimisticoninflationed2fd667",
    "urlToImage": "https://images.wsj.net/im763745/social",
    "publishedAt": "20230415T14:00:04Z",
    "content": "WSJ News Exclusive | Economists Turn More Pessimistic on Inflation\r\nThe March CPI came in below expectations at 5% yearoveryear, but the core CPI, which economists view as a better predictor of fut… [+1276 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "China's Xi, Brazil's Lula Take United Stance Against USA...",
    "description": "Brazilian president says the two countries will work to ‘balance world geopolitics’",
    "url": "https://www.wsj.com/articles/chinasxijinpingbrazilslulatakeunitedstanceagainstuse8e55c1c",
    "urlToImage": "https://images.wsj.net/im763608/social",
    "publishedAt": "20230414T15:00:05Z",
    "content": "China’s Xi Jinping, Brazil’s Lula Take United Stance Against U.S.\r\nPhoto: POOL/REUTERSHONG KONG—Chinese leader Xi Jinping and Brazilian President Luiz Inácio Lula da Silva struck a unified pose in de… [+966 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "The Veteran Lawyers Who Will Lead Prosecution of The Don...",
    "description": "Team aiding Alvin Bragg has experience both as prosecutors and in private practice",
    "url": "https://www.wsj.com/articles/theveteranlawyerswhowillleadtheprosecutionofdonaldtrump26e214ab",
    "urlToImage": "https://images.wsj.net/im762434/social",
    "publishedAt": "20230414T14:00:04Z",
    "content": "The Veteran Lawyers Who Will Lead the Prosecution of Donald Trump\r\nIllustration: Ryan TrefesThe team prosecuting Donald Trump in Manhattan is a mix of young lawyers and veterans, career officials and… [+1263 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "HOW DID HE ACCESS DOCS?",
    "description": "Jack Teixeira, a 21yearold Massachusetts Air National Guardsman, arrested in connection with leak",
    "url": "https://www.wsj.com/articles/pentagonlookingintohowaccusedleakeraccessedtopsecretdocuments6c6b0972",
    "urlToImage": "https://images.wsj.net/im763487/social",
    "publishedAt": "20230414T11:00:04Z",
    "content": "Pentagon Looking Into How Accused Leaker Accessed Top Secret Documents\r\nPhoto: WCVB/Associated PressWASHINGTON—Among the most puzzling questions to emerge since the arrest of a young Massachusetts ma… [+1534 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Primary Breadwinner Disappearing From More Homes...",
    "description": "The economics of marriage are changing, but women still take on more of the unpaid labor",
    "url": "https://www.wsj.com/articles/moremarriedcouplesearnequalpayfewdoequalhouseworkdda54c66",
    "urlToImage": "https://images.wsj.net/im762181/social",
    "publishedAt": "20230413T20:00:06Z",
    "content": "The Primary Breadwinner Is Disappearing From More Homes\r\nNearly a third of marriages today have no primary breadwinner, as women continue to make strides toward greater equality at work and home.Abou… [+946 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "FEDS NAB 'LEAKER'",
    "description": "Twentyoneyearold Jack Teixeira of Massachusetts taken into custody",
    "url": "https://www.wsj.com/articles/leakdocumentslikelycamefromairnationalguardsmanatfortbraggofficialsaysdbf48c0a",
    "urlToImage": "https://images.wsj.net/im763163/social",
    "publishedAt": "20230413T19:00:04Z",
    "content": "Air Guardsman Arrested in Connection With Leaked Documents\r\nPhoto: Andrew CaballeroReynolds/AFP via Getty ImagesJack Teixeira, a 21yearold Massachusetts Air National Guardsman, has been arrested i… [+890 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Jodi Xu Klein",
    "title": "Bankrupt Drugmaker Sorrento’s Scilex Unit Explores Stock Sale",
    "description": "Shares in Scilex, Sorrento’s biggest asset, have soared in recent weeks as the parent company charts an exit from chapter 11",
    "url": "https://www.wsj.com/articles/bankruptdrugmakersorrentosscilexunitexploresstocksaleb339d1c",
    "urlToImage": "https://images.wsj.net/im762939/social",
    "publishedAt": "20230413T16:25:00Z",
    "content": "Bankrupt drugmaker Sorrento Therapeutics Inc.s subsidiary Scilex Holding Co. is exploring a sale of new stock to take advantage of a shareprice rally as Sorrento charts a path out of chapter 11, acc… [+285 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "Soma Biswas, Jodi Xu Klein",
    "title": "Tupperware Working With Turnaround Advisers Ahead of Possible Bankruptcy",
    "description": "The household storage brand brings on Alvarez & Marsal along with investment bank Moelis and law firm Kirkland & Ellis",
    "url": "https://www.wsj.com/articles/tupperwareworkingwithturnaroundadvisorsaheadofpossiblebankruptcye054dae6",
    "urlToImage": "https://images.wsj.net/im762959/social",
    "publishedAt": "20230413T16:13:00Z",
    "content": "Tupperware Brands Corp., the household storage brand, has brought on advisers from Moelis &amp; Co., Kirkland &amp; Ellis LLP and Alvarez &amp; Marsal while warning of a possible bankruptcy, accordin… [+279 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Peak Real Estate: This Tiny Wyoming Community Has Some of Country's Priciest Homes...",
    "description": "Despite Wilson’s small population, properties command hefty price tags",
    "url": "https://www.wsj.com/articles/wilsonwyomingmountainrealestatee26d82d3",
    "urlToImage": "https://images.wsj.net/im760658/social",
    "publishedAt": "20230413T13:00:04Z",
    "content": "Peak Real Estate: This Tiny Wyoming Community Has Some of the Country’s Priciest Mountain HomesIn northwest Wyoming, in Teton County, is Jackson Hole, a valley located between the Gros Ventre and Tet… [+1415 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Top Hostage Envoy Pledges to Secure Gershkovich's Release From Russian Prison...",
    "description": "Roger Carstens also said there is a ‘significant offer on the table’ for detained American Paul Whelan",
    "url": "https://www.wsj.com/articles/americastophostageenvoypledgestosecureevangershkovichsreleasefromrussianprisonf5c1958e",
    "urlToImage": "https://images.wsj.net/im762054/social",
    "publishedAt": "20230413T13:00:04Z",
    "content": "America’s Top Hostage Envoy Pledges to Secure Evan Gershkovich’s Release From Russian Prison\r\nIllustration: Todd JohnsonThe U.S.’s top hostage negotiator called on Russia to allow American Embassy of… [+882 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Trump to Be Deposed by New York Attorney General...",
    "description": "Letitia James’s office is taking the former president’s testimony in its civilfraud lawsuit",
    "url": "https://www.wsj.com/articles/donaldtrumptobedeposedbynewyorkattorneygeneral444dede7",
    "urlToImage": "https://images.wsj.net/im762417/social",
    "publishedAt": "20230413T13:00:04Z",
    "content": "Donald Trump to Be Deposed by New York Attorney General\r\nIllustration: Ryan TrefesDonald Trump is set to answer questions under oath Thursday from lawyers for New York Attorney General Letitia James,… [+787 chars]"
    },
    {
    "source": {
    "id": "thewallstreetjournal",
    "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "LVMH's Paris Headquarters Stormed by Protesters...",
    "description": "Demonstrations against Macron’s pension overhaul spill over into other facets of France’s establishment",
    "url": "https://www.wsj.com/articles/lvmhheadquartersstormedbyprotestersamiddemonstrationagainstmacronspensionoverhaul1ffd751d",
    "urlToImage": "https://images.wsj.net/im762740/social",
    "publishedAt": "20230413T13:00:04Z",
    "content": "LVMH’s Paris Headquarters Stormed by Protesters\r\nYoan Valat/ShutterstockPARIS—Protesters stormed the headquarters of luxury conglomerate LVMH Moët Hennessy Louis Vuitton SE on Thursday as the nationw… [+828 chars]"
    }
    ]
    
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page:1
    }
  }

 async componentDidMount(){
let url="https://newsapi.org/v2/everything?q=tesla&from=2023-04-15&sortBy=publishedAt&apiKey=0f2bfadefa57488aa5381627feea17be";
let data=await fetch(url);
let parsedData=await data.json();
this.setState({articles: parsedData.articles,})
  }

  handlePrevClick=async()=>{
    let url="https://newsapi.org/v2/everything?q=tesla&from=2023-04-15&sortBy=publishedAt&apiKey=0f2bfadefa57488aa5381627feea17be";
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
  }
    )}


  handleNextClick=async()=>{

    let url="https://newsapi.org/v2/everything?q=tesla&from=2023-04-15&sortBy=publishedAt&apiKey=0f2bfadefa57488aa5381627feea17be";
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({
      page:this.state.page+1,
      articles:parsedData.articles
    })
  }


  render() {
    return (
      <div class="container my-3 ">
    <div class="row">
     {this.state.articles.map((element)=>{
      return  <div class="col-md-4" key={element.url}>
          <NewsItem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
         </div>
         })}
<div className="container d-flex justify-content-between">

<button disabled={this.state.page<=1} type="button " class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>

<button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
</div>
    </div>
</div>
      
    )
    }
      }

    export default News