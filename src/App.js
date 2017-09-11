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

class App extends Component {
  constructor() {
    super()
    this.state = {
      allNewsSources:
        [
          {
          "id": "abc-news",
          "name": "ABC News",
          "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
          "url": "http://abcnews.go.com",
          "category": "general",
          "language": "en",
          "country": "us"
          },
          {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English",
          "description": "News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.",
          "url": "http://www.aljazeera.com",
          "category": "general",
          "language": "en",
          "country": "us"
          },
          {
          "id": "ars-technica",
          "name": "Ars Technica",
          "description": "The PC enthusiast's resource. Power users and the tools they love, without computing religion.",
          "url": "http://arstechnica.com",
          "category": "technology",
          "language": "en",
          "country": "us"
          },
          {
          "id": "associated-press",
          "name": "Associated Press",
          "description": "The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.",
          "url": "https://apnews.com/",
          "category": "general",
          "language": "en",
          "country": "us"
          },
          {
          "id": "axios",
          "name": "Axios",
          "description": "Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.",
          "url": "https://www.axios.com",
          "category": "general",
          "language": "en",
          "country": "us"
          },
          {
          "id": "bleacher-report",
          "name": "Bleacher Report",
          "description": "Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!",
          "url": "http://www.bleacherreport.com",
          "category": "sport",
          "language": "en",
          "country": "us"
          },
          {
          "id": "bloomberg",
          "name": "Bloomberg",
          "description": "Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.",
          "url": "http://www.bloomberg.com",
          "category": "business",
          "language": "en",
          "country": "us"
          },
          {
          "id": "breitbart-news",
          "name": "Breitbart News",
          "description": "Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.",
          "url": "http://www.breitbart.com",
          "category": "politics",
          "language": "en",
          "country": "us"
          },
          {
          "id": "business-insider",
          "name": "Business Insider",
          "description": "Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.",
          "url": "http://www.businessinsider.com",
          "category": "business",
          "language": "en",
          "country": "us"
          },
          {
          "id": "buzzfeed",
          "name": "Buzzfeed",
          "description": "BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.",
          "url": "https://www.buzzfeed.com",
          "category": "entertainment",
          "language": "en",
          "country": "us"
          },
          {
          "id": "cbs-news",
          "name": "CBS News",
          "description": "CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.",
          "url": "http://www.cbsnews.com",
          "category": "general",
          "language": "en",
          "country": "us"
          },
          {
          "id": "cnbc",
          "name": "CNBC",
          "description": "Get latest business news on stock markets, financial & earnings on CNBC. View world markets streaming charts & video; check stock tickers and quotes.",
          "url": "http://www.cnbc.com",
          "category": "business",
          "language": "en",
          "country": "us"
          },
          {
          "id": "cnn",
          "name": "CNN",
          "description": "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN",
          "url": "http://us.cnn.com",
          "category": "general",
          "language": "en",
          "country": "us"
          }
        ]
    }
  }
  render() {
    return (
      <Router>
      <div className="App">
          <main>
              <Switch>
                    <Route
                      path="/news"
                      render={() => {
                        return (
                          <div>
                          <header>
                          <h1>Headlines</h1>
                          </header>
                            <AllNews allNews={this.state.allNewsSources}/>
                            <Search />
                          </div>
                        )
                      }}
                      />
              <Redirect from="/*" to="/news"/>
              </Switch>
        </main>
      </div>
      </Router>
    );
  }
}

export default App;
