import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"
import './App.css';
import MainNav from './components/mainNav/mainNav'
import Search from './components/Search/Search'
import AllNews from './components/AllNews/AllNews'
import CategoryShow from './components/CategoryShow/CategoryShow'
import NewsCategories from './components/NewsCategories/NewsCategories'
import NewsSiteShow from './components/NewsSiteShow/NewsSiteShow'
import SearchResults from './components/SearchResults/SearchResults'
import SearchContainer from './components/SearchContainer/SearchContainer'
import Footer from './components/Footer/Footer'
import MainTopics from './components/MainTopics/MainTopics'
import About from './components/About/About'
import Logo from './logo.png'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allNewsSources:
      [
        {
        "id": "abc-news-au",
        "name": "ABC News (AU)",
        "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        "url": "http://www.abc.net.au/news",
        "category": "general",
        "language": "en",
        "country": "au",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/378800000835394812/ec9b283d47427e851a2cb30ebd29d1df_400x400.jpeg"
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "al-jazeera-english",
        "name": "Al Jazeera English",
        "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
        "url": "http://www.aljazeera.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/463358340286779393/4Kv4e12V.jpeg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "ars-technica",
        "name": "Ars Technica",
        "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
        "url": "http://arstechnica.com",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/2215576731/ars-logo.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "associated-press",
        "name": "Associated Press",
        "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
        "url": "https://apnews.com/",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/461964160838803457/8z9FImcv_400x400.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "bbc-news",
        "name": "BBC News",
        "description": "Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.",
        "url": "http://www.bbc.co.uk/news",
        "category": "general",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://www.nigerianbulletin.com/data/attachments/98/98832-d5a380f40a784c1d1be113942198a15a.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "bbc-sport",
        "name": "BBC Sport",
        "description": "The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.",
        "url": "http://www.bbc.co.uk/sport",
        "category": "sport",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://s1.mzstatic.com/us/r30/Purple6/v4/0a/b2/f2/0ab2f289-f051-d633-3fad-f6c4f7cd6020/mzl.tlmlnmhz.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "bloomberg",
        "name": "Bloomberg",
        "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
        "url": "http://www.bloomberg.com",
        "category": "business",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://www.bbhub.io/mobile/sites/2/2014/05/media_app_icon.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "business-insider",
        "name": "Business Insider",
        "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
        "url": "http://www.businessinsider.com",
        "category": "business",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "http://media.thisisinsider.com/public/assets/BI/US/logos/logos-page/BI_blue_background_vertical.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "buzzfeed",
        "name": "Buzzfeed",
        "description": "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
        "url": "https://www.buzzfeed.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://www.buzzfeed.com/static-assets/img/buzzfeed_arrow.e86a786d9e5e2250e1ed3e0ec95ba42d.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "cnbc",
        "name": "CNBC",
        "description": "Get latest business news on stock markets, financial & earnings on CNBC. View world markets streaming charts & video; check stock tickers and quotes.",
        "url": "http://www.cnbc.com",
        "category": "business",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CNBC_logo.svg/1000px-CNBC_logo.svg.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "cnn",
        "name": "CNN",
        "description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
        "url": "http://us.cnn.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Cnn_logo_red_background.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "daily-mail",
        "name": "Daily Mail",
        "description": "All the latest news, sport, showbiz, science and health stories from around the world from the Daily Mail and Mail on Sunday newspapers.",
        "url": "http://www.dailymail.co.uk/home/index.html",
        "category": "entertainment",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://www.lowyat.net/wp-content/uploads/2016/04/daily-mail-logo.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "engadget",
        "name": "Engadget",
        "description": "Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.",
        "url": "https://www.engadget.com",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/655059892022022144/Pq3Q_1oU.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly",
        "description": "Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.",
        "url": "http://www.ew.com",
        "category": "entertainment",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/881539688418471937/lf5NWhm__400x400.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "espn",
        "name": "ESPN",
        "description": "ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.",
        "url": "http://espn.go.com",
        "category": "sport",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/445215959293239296/57PQqOAe_400x400.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "financial-times",
        "name": "Financial Times",
        "description": "The latest UK and international business, finance, economic and political news, comment and analysis from the Financial Times on FT.com.",
        "url": "http://www.ft.com/home/uk",
        "category": "business",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/media/ClYz_1vUkAAenwG.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "football-italia",
        "name": "Football Italia",
        "description": "Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.",
        "url": "http://www.football-italia.net",
        "category": "sport",
        "language": "en",
        "country": "it",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/698921091746631682/i2a-6xkb.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "fortune",
        "name": "Fortune",
        "description": "Fortune 500 Daily and Breaking Business News",
        "url": "http://fortune.com",
        "category": "business",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/875382047216467972/3119VjuE_400x400.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "four-four-two",
        "name": "FourFourTwo",
        "description": "The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.",
        "url": "http://www.fourfourtwo.com/news",
        "category": "sport",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://www.fourfourtwo.com/sites/fourfourtwo.com/themes/fourfourtwo/images/logo-big.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "fox-sports",
        "name": "Fox Sports",
        "description": "Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.",
        "url": "http://www.foxsports.com",
        "category": "sport",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/572924972104839168/QfSnx_Mu.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "google-news",
        "name": "Google News",
        "description": "Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.",
        "url": "https://news.google.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/644065708511358976/cLeFIFQH.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "hacker-news",
        "name": "Hacker News",
        "description": "Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham's investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as \"anything that gratifies one's intellectual curiosity\".",
        "url": "https://news.ycombinator.com",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/469397708986269696/iUrYEOpJ_400x400.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "ign",
        "name": "IGN",
        "description": "IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.",
        "url": "http://www.ign.com",
        "category": "gaming",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://i0.wp.com/internetpressservice.com/wp-content/uploads/2017/07/IGN-Entertainment-logo.png?fit=512%2C512",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "independent",
        "name": "Independent",
        "description": "National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.",
        "url": "http://www.independent.co.uk",
        "category": "general",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/583628771972018176/ztJn926g.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "mashable",
        "name": "Mashable",
        "description": "Mashable is a global, multi-platform media and entertainment company.",
        "url": "http://mashable.com",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/3690672785/16d3f33b98e664764b722cfaa79cefcf_400x400.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "metro",
        "name": "Metro",
        "description": "News, Sport, Showbiz, Celebrities from Metro - a free British newspaper.",
        "url": "http://metro.co.uk",
        "category": "general",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://s0.wp.com/wp-content/themes/vip/metrouk/img/branding/metro.co.uk/metro.co.uk-white-on-orange.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "mtv-news",
        "name": "MTV News",
        "description": "The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It's pop culture on steroids.",
        "url": "http://www.mtv.com/news",
        "category": "entertainment",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://imagesmtv-a.akamaihd.net/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2016/07/staff-author-250-1468362828.png?format=jpg&quality=.8",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "national-geographic",
        "name": "National Geographic",
        "description": "Reporting our world daily: original nature and science news from National Geographic.",
        "url": "http://news.nationalgeographic.com",
        "category": "science-and-nature",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/798181194202566656/U8QbCBdH.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "new-scientist",
        "name": "New Scientist",
        "description": "Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.",
        "url": "https://www.newscientist.com/section/news",
        "category": "science-and-nature",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/843789564074496001/m34mTHmg.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "newsweek",
        "name": "Newsweek",
        "description": "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
        "url": "http://www.newsweek.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/741603495929905152/di0NxkFa_400x400.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "new-york-magazine",
        "name": "New York Magazine",
        "description": "NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.",
        "url": "http://nymag.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "http://nymag.com/img/nymag-1500x1500.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "nfl-news",
        "name": "NFL News",
        "description": "The official source for NFL news, schedules, stats, scores and more.",
        "url": "http://www.nfl.com/news",
        "category": "sport",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/858754002384805888/wMBd6-dd.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "polygon",
        "name": "Polygon",
        "description": "Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.",
        "url": "http://www.polygon.com",
        "category": "gaming",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://cdn1.vox-cdn.com/uploads/chorus_asset/file/8402075/941450_609208285758470_875871287_n.0.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "recode",
        "name": "Recode",
        "description": "Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.",
        "url": "http://www.recode.net",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/729365899828989952/o0AuZCNW.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "reuters",
        "name": "Reuters",
        "description": "Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.",
        "url": "http://www.reuters.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/1550209998/r_logo_twitter_white.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "talksport",
        "name": "TalkSport",
        "description": "Tune in to the world's biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.",
        "url": "http://talksport.com",
        "category": "sport",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/2372563142/2o6wf136l6d47jrscqq9_400x400.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "techcrunch",
        "name": "TechCrunch",
        "description": "TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.",
        "url": "https://techcrunch.com",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/879359733936701440/sitcq7wY.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "techradar",
        "name": "TechRadar",
        "description": "The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.",
        "url": "http://www.techradar.com",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/875421451653873664/P21KAcnr.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "the-economist",
        "name": "The Economist",
        "description": "The Economist offers authoritative insight and opinion on international news, politics, business, finance, science, technology and the connections between them.",
        "url": "http://www.economist.com",
        "category": "business",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/879361767914262528/HdRauDM-.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "the-guardian-au",
        "name": "The Guardian (AU)",
        "description": "Latest news, sport, comment, analysis and reviews from Guardian Australia",
        "url": "https://www.theguardian.com/au",
        "category": "general",
        "language": "en",
        "country": "au",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/875549008407576576/wNTVvshs_400x400.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "the-guardian-uk",
        "name": "The Guardian (UK)",
        "description": "Latest news, sport, business, comment, analysis and reviews from the Guardian, the world's leading liberal voice.",
        "url": "https://www.theguardian.com/uk",
        "category": "general",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/877153924637175809/deHwf3Qu.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "the-hindu",
        "name": "The Hindu",
        "description": "The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India's national newspaper.",
        "url": "http://www.thehindu.com",
        "category": "general",
        "language": "en",
        "country": "in",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/627376030282416128/pYl_LmcW.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "the-huffington-post",
        "name": "The Huffington Post",
        "description": "The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.",
        "url": "http://www.huffingtonpost.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "http://www.underconsideration.com/brandnew/archives/huffpost_icon.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "the-new-york-times",
        "name": "The New York Times",
        "description": "The New York Times: Find breaking news, multimedia, reviews & opinion on Washington, business, sports, movies, travel, books, jobs, education, real estate, cars & more at nytimes.com.",
        "url": "http://www.nytimes.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://static01.nyt.com/images/icons/t_logo_291_black.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "the-next-web",
        "name": "The Next Web",
        "description": "The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.",
        "url": "http://thenextweb.com",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/848832036169273344/p5J8QMn7.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "latest"
        ]
        },
        {
        "id": "the-sport-bible",
        "name": "The Sport Bible",
        "description": "TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!",
        "url": "http://www.thesportbible.com",
        "category": "sport",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/841984282956582917/XDA2iEh1.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "the-telegraph",
        "name": "The Telegraph",
        "description": "Latest news, business, sport, comment, lifestyle and culture from the Daily Telegraph and Sunday Telegraph newspapers and video from Telegraph TV.",
        "url": "http://www.telegraph.co.uk",
        "category": "general",
        "language": "en",
        "country": "gb",
        "urlsToLogos": {
        "small": "http://moosemaple.co.uk/wp-content/uploads/2016/09/The_Telegraph_logo.jpeg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "the-times-of-india",
        "name": "The Times of India",
        "description": "Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.",
        "url": "http://timesofindia.indiatimes.com",
        "category": "general",
        "language": "en",
        "country": "in",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/781514680732749824/PG2_gebm.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "the-verge",
        "name": "The Verge",
        "description": "The Verge covers the intersection of technology, science, art, and culture.",
        "url": "http://www.theverge.com",
        "category": "technology",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/877903823133704194/Mqp1PXU8_400x400.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal",
        "description": "WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.",
        "url": "http://www.wsj.com",
        "category": "business",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/685113343204585473/jV72Zljq.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "the-washington-post",
        "name": "The Washington Post",
        "description": "Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.",
        "url": "https://www.washingtonpost.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/875440182501277696/n-Ic9nBO.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top"
        ]
        },
        {
        "id": "time",
        "name": "Time",
        "description": "Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.",
        "url": "http://time.com",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/1700796190/Picture_24_400x400.png",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "usa-today",
        "name": "USA Today",
        "description": "Get the latest national, international, and political news at USATODAY.com.",
        "url": "http://www.usatoday.com/news",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/881124724776075264/HIaW0jIz.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
        ]
        },
        {
        "id": "vice-news",
        "name": "Vice News",
        "description": "News, analysis and opinion from Vice.com.",
        "url": "https://news.vice.com/",
        "category": "general",
        "language": "en",
        "country": "us",
        "urlsToLogos": {
        "small": "https://pbs.twimg.com/profile_images/785208513177985024/Guc3ohmz_400x400.jpg",
        "medium": "",
        "large": ""
        },
        "sortBysAvailable": [
        "top",
        "latest"
          ]
        }
      ]
    }}
  render() {
    return (
      <Router>
      <div className="App">
          <main>
              <Switch>
                    <Route
                      path="/news"
                      render={(props) => {
                        return (
                          <div>
                          <header>
                            <div className="headlogo">
                              <h1>Fishwrap</h1>
                              <img className="logo" src={Logo} />
                            </div>
                          </header>
                            <NewsCategories />
                            <MainTopics />
                            <SearchContainer {...props} />
                            <AllNews allNews={this.state.allNewsSources}/>
                          </div>
                        )
                      }}
                      />
                      <Route
                      path="/search/:query"
                      render={(props) => {
                        return (
                          <div>
                          <header>
                          <h1>Fishwrap</h1>
                          </header>
                          <NewsCategories />
                          <SearchResults {...props} />
                          </div>
                        )
                      }}
                      />
                      <Route
                      path="/sources/:source"
                      render={(props) => {
                        return (
                          <div>
                          <NewsSiteShow
                          {...props}
                          allNews={this.state.allNewsSources}
                          />
                          </div>
                        )
                      }}
                      />
                      <Route
                      path="/about"
                      render={() => {
                        return (
                          <div>
                            <About />
                          </div>
                        )
                      }}
                      />
                    <Route
                      path="/:category"
                      render={(props) => {
                        return (
                          <div>
                            <header>
                              <h1>Fishwrap</h1>
                            </header>
                            <CategoryShow
                              {...props}
                              allNews={this.state.allNewsSources}
                            />
                          </div>
                        )
                    }}
                  />
              <Redirect from="/*" to="/news"/>
              </Switch>
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
