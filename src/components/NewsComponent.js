import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class NewsComponent extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 15
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    articles = [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Noida Twin Towers Set For Demolition Blast, Area Evacuated: 10 Facts - NDTV",
            "description": "The Supertech twin towers in Noida are set to be demolished at 2.30 pm today by a massive explosion. The area has been evacuated and arrangements have been made to ensure that adjoining structures are not affected by the explosion",
            "url": "https://www.ndtv.com/india-news/supertech-noida-twin-towers-set-for-demolition-blast-evacuation-on-10-facts-3293149",
            "urlToImage": "https://c.ndtvimg.com/2022-08/3603u078_noida-twin-towers-supertech-ani_625x300_28_August_22.jpg",
            "publishedAt": "2022-08-28T04:21:00Z",
            "content": "<li>The two towers have been rigged with over 3,700 kg of explosives. Explosives have been inserted into nearly 7,000 holes in the pillars. 20,000 circuits have been set. When triggered, these will c… [+3357 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "These SPECIAL features coming to Apple iPhone 14 lineup- launch on Sept 7 - HT Tech",
            "description": "The iPhone 14 series is expected to get these features for the first time! From Satellite Connectivity, 2TB storage to new Wifi - know all about iPhone 14 special features here.",
            "url": "https://tech.hindustantimes.com/mobile/news/these-special-features-coming-to-apple-iphone-14-lineup-launch-on-sept-7-71661657893072.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/08/28/1600x900/iPhone_13_Pro_Max_(2)_1633406699232_(1)_1652617213091_1661658109901_1661658109901.jpg",
            "publishedAt": "2022-08-28T03:45:39Z",
            "content": "The iPhone 14 is expected to be unveiled during the Apple Event dubbed 'Far Out' on September 7. We all have been hearing rumours about the upcoming iPhone 14 lineup ever since the iPhone 13 was roll… [+2674 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Upjobsnews.com"
            },
            "author": null,
            "title": "How Canada is taking part in the journey back to the Moon & More Latest News Here - upjobsnews",
            "description": "",
            "url": "https://upjobsnews.com/how-canada-is-taking-part-in-the-journey-back-to-the-moon-more-latest-news-here/",
            "urlToImage": "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/8/27/canadarm-3-1-6045625-1661647217079.png",
            "publishedAt": "2022-08-28T03:35:03Z",
            "content": "On Monday, a rocket will be blasting off to orbit around the Moon as the first step in humanitys grand return to the lunar surface.\r\nBut its not just an exciting moment for NASA. This time, the journ… [+8179 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": "Shubham Singh",
            "title": "Garena Free Fire Redeem MAX Codes for today, August 28, 2022: How to redeem codes here - Zee News",
            "description": "111 Dots Studio created Garena Free Fire Max. It is a multiplayer battle royale game that provides players with a large collection of in-game items. The Garena Free Fire redeem codes for August 28 2022 will assist users in gaining access to the diamond hack, …",
            "url": "https://zeenews.india.com/technology/garena-free-fire-redeem-max-codes-for-today-august-28-2022-how-to-redeem-codes-here-2502584.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/08/28/1082943-garena-free-fire-max-4.jpg",
            "publishedAt": "2022-08-28T02:54:06Z",
            "content": "New Delhi: 111 Dots Studio created Garena Free Fire Max. It is a multiplayer battle royale game that provides players with a large collection of in-game items. The Garena Free Fire redeem codes for A… [+1323 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizbot"
            },
            "author": "Sharmishte Datti",
            "title": "Valve Steam Deck 2 Could Already Be In Works; Company Confirms Upgraded Hardware, OS - Gizbot",
            "description": "Valve Steam Deck 2: Valve Steam Deck launch didn’t have a major kickstart, at least not reaching the hopes of the company. But Valve isn’t giving up on the handheld gaming PC just yet. Reports claim the Valve Steam Deck 2 could already be in development.",
            "url": "https://www.gizbot.com/gaming/news/valve-steam-deck-2-could-already-be-in-works-company-confirms-upgraded-hardware-os-082389.html",
            "urlToImage": "https://www.gizbot.com/img/2022/08/valve-steam-deck-2-could-already-be-in-works-1661601019.jpg",
            "publishedAt": "2022-08-28T02:49:00Z",
            "content": "Valve Steam Deck launch didn't have a major kickstart, at least not reaching the hopes of the company. But Valve isn't giving up on the handheld gaming PC just yet. Reports claim the Valve Steam Deck… [+2506 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Sounak Mukhopadhyay",
            "title": "NASA's Moon mission starts tomorrow: All you need to know | Mint - Mint",
            "description": "NASA's Moon mission starts on August 29 as an unmanned Artemis rocket will make its first test flight.",
            "url": "https://www.livemint.com/news/world/nasas-moon-mission-starts-tomorrow-all-you-need-to-know-11661650200351.html",
            "urlToImage": "https://images.livemint.com/img/2022/08/28/600x338/PTI07_24_2021_000281B_1628750129991_1661654360683_1661654360683.jpg",
            "publishedAt": "2022-08-28T02:45:30Z",
            "content": "The Artemis programme is NASA's strategy to send people back to the Moon as a first step toward a future trip to Mars. The aim of Artemis is to land the first woman and person of colour on the lunar … [+3426 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Asia Cup 2022, India vs Pakistan, Group A: When And Where To Watch Live Telecast, Live Streaming - NDTV Sports",
            "description": "India and Pakistan will square off in Group A clash of the ongoing Asia Cup on Sunday in Dubai",
            "url": "https://sports.ndtv.com/asia-cup-2022/asia-cup-2022-india-vs-pakistan-group-a-when-and-where-to-watch-live-telecast-live-streaming-3293138",
            "urlToImage": "https://c.ndtvimg.com/2022-08/0bduvqc_rohit-sharma-afp_625x300_06_August_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2022-08-28T02:03:50Z",
            "content": "The wait is almost over as India and Pakistan will clash against one another in Group A of the ongoing Asia Cup 2022 on Sunday at the Dubai International Stadium. Rohit Sharma and Babar Azam would lo… [+1327 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Controversial umpire call leaves SL dressing room in disbelief in Asia Cup match - Hindustan Times",
            "description": "The on-field and third umpire made a couple of baffling decisions during the early part of the Sri Lankan innings during their Asia Cup opening match against Afghanistan on Saturday.",
            "url": "https://www.hindustantimes.com/cricket/controversial-umpire-call-leaves-sri-lanka-dressing-room-in-disbelief-during-afghanistan-game-in-2022-asia-cup-101661627035351.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/08/27/1600x900/sl_nissanka_sc_1661639295179_1661639306012_1661639306012.jpg",
            "publishedAt": "2022-08-28T01:45:17Z",
            "content": "Afghanistan made a dream start to the Asia Cup with an eight-wicket win over struggling five-time champions Sri Lanka. Afghanistan were on top from the beginning, taking three wickets in the first th… [+3218 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zoom"
            },
            "author": "TN National Desk",
            "title": "Former Rajya Sabha MP MA Khan quits Congress, says Rahul Gandhi 'doesn't know how to behave with seniors' - Times Now",
            "description": "Along with Khan, several high-profile leaders have quit Congress this year making it difficult for the party to find its feet in the upcoming polls.",
            "url": "https://www.timesnownews.com/india/former-rajya-sabha-mp-ma-khan-quits-congress-says-rahul-gandhi-doesnt-know-how-to-behave-with-seniors-article-93827511",
            "urlToImage": "https://static.tnn.in/thumb/msid-93827511,imgsize-100,width-1280,height-720,resizemode-75/93827511.jpg",
            "publishedAt": "2022-08-28T01:36:10Z",
            "content": "Ghaziabad: Wife, her paramour beat man to death; police recover corpse from field stuffed in gunny bag"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Scary! A 100-foot asteroid hurtling towards Earth today, August 28; NASA shares details - HT Tech",
            "description": "A 100-foot asteroid is hurtling towards Earth today, August 28! NASA warned about the massive space rock. Will this asteroid strike the Earth?",
            "url": "https://tech.hindustantimes.com/tech/news/scary-a-100-foot-asteroid-hurtling-towards-earth-today-august-28-nasa-shares-details-71661647119970.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/08/28/1600x900/ygy_1637905928669_1661647216168_1661647216168.jpg",
            "publishedAt": "2022-08-28T00:41:39Z",
            "content": "Yesterday, Earth narrowly escaped a giant asteroid named Asteroid NEO 2022 QQ4, which was 100-foot in diameter. However, it flew safely past the Earth. Its closest approach to the Earth was 5.93 mill… [+1680 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricbuzz"
            },
            "author": null,
            "title": "Australia vs Zimbabwe, 1st ODI, Zimbabwe tour of Australia, 2022 - Cricbuzz",
            "description": "Follow Australia vs Zimbabwe, 1st ODI, Aug 27, Zimbabwe tour of Australia, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz",
            "url": "https://www.cricbuzz.com/cricket-commentary/48067/aus-vs-zim-1st-odi-zimbabwe-tour-of-australia-2022",
            "urlToImage": null,
            "publishedAt": "2022-08-28T00:08:26Z",
            "content": "12.1 Brad Evans to Smith, 2 runs, good length on middle-stump, Smith inside-edges the defence onto the thigh pad, wide of fine-leg for two"
        },
        {
            "source": {
                "id": null,
                "name": "The Sunday Guardian"
            },
            "author": null,
            "title": "No specific treatment for tomato flu, say health experts - The Sunday Guardian Live - The Sunday Guardian",
            "description": "New Delhi: Several health experts have stated that children and immune-compromised adults are at utmost risk as the Tomato Flu is highly contagious. Currently, there is no specific treatment for the flu and the symptoms are almost similar to dengue, and chiku…",
            "url": "https://www.sundayguardianlive.com/news/no-specific-treatment-tomato-flu-say-health-experts",
            "urlToImage": "https://www.sundayguardianlive.com/wp-content/uploads/2022/08/Tanmaya-Das-Tomato-flu-edited.jpg",
            "publishedAt": "2022-08-27T23:12:13Z",
            "content": "New Delhi: Several health experts have stated that children and immune-compromised adults are at utmost risk as the Tomato Flu is highly contagious. Currently, there is no specific treatment for the … [+2116 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Pranav Mukul",
            "title": "Maruti Suzuki goes beyond auto, it's the story of India's manufacturing potential: RC Bhargava, non-executive Chairman - The Indian Express",
            "description": "When Maruti was set up, the life expectancy given to the nascent public sector-run unit that partnered with a Japanese company was rather short, its non-executive Chairman RC Bhargava told this newspaper.",
            "url": "https://indianexpress.com/article/business/companies/maruti-suzuki-goes-beyond-auto-rc-bhargava-interview-8115892/",
            "urlToImage": "https://images.indianexpress.com/2022/08/maruti-2.jpg",
            "publishedAt": "2022-08-27T22:50:46Z",
            "content": "Maruti Suzuki India, the nations largest carmaker, completes 40 years of its operations this year. When Maruti was set up, the life expectancy given to the nascent public sector-run unit that partner… [+8799 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PINKVILLA"
            },
            "author": "Pinkvilla Desk",
            "title": "Liger (Hindi) Day 2 Box Office: Vijay Deverakonda starrer sees marginal drop on Saturday; Collects Rs 4.15 cr - PINKVILLA",
            "description": "Vijay Deverakonda and Ananya Panday led Liger can be watched at a theatre near you.",
            "url": "https://www.pinkvilla.com/entertainment/box-office/liger-hindi-day-2-box-office-vijay-deverakonda-starrer-sees-marginal-drop-saturday-collects-rs-415-cr",
            "urlToImage": "https://www.pinkvilla.com/files/styles/fbimagesection/public/liger_social_8.jpg?itok=eeWLFIo0",
            "publishedAt": "2022-08-27T20:39:53Z",
            "content": "Vijay Deverakonda, Ramya Krishnan and Ananya Panday led Liger opened to considerably good numbers at the box office given the current box office scenario. The film earned Rs. 1.25 cr from the paid pr… [+1897 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Murari Shetye",
            "title": "Sonali Phogat was given drug hours before death, say cops; 2 held - Times of India",
            "description": "Goa police on Saturday said Haryana BJP member and TikTok star Sonali Phogat had been given a methamphetamine drug by her associates hours before she",
            "url": "https://timesofindia.indiatimes.com/city/goa/sonali-phogat-was-given-drug-hours-before-death-say-cops-2-held/articleshow/93826286.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-93826283,width-1070,height-580,imgsize-45728,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2022-08-27T20:07:00Z",
            "content": "Explained: Who or what killed BJP leader Sonali PhogatNEW DELHI: The police have arrested two persons and charged them with murder in connection with the death of Haryana BJP leader Sonali Phogat in … [+135 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Dr Prem Kumar Sharma, Manisha Koushik",
            "title": "Horoscope Today: Astrological prediction for August 28, 2022 - Hindustan Times",
            "description": "Daily horoscope: Are the stars lined up in your favour? Find out the astrological prediction for Aries, Leo, Virgo, Libra and other zodiac signs for August 28, 2022 | Horoscope",
            "url": "https://www.hindustantimes.com/astrology/horoscope/horoscope-today-astrological-prediction-for-august-28-2022-101661614621439.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/08/27/1600x900/horoscope_today_thumb_3_1652283396430_1661614739870_1661614739870.jpg",
            "publishedAt": "2022-08-27T19:30:17Z",
            "content": "All zodiac signs have their own characteristics and traits which define someones personality. Wouldnt it be helpful if you started your day by already knowing about whats going to come your way? Read… [+6514 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "Firdose Moonda",
            "title": "Engine failure condemns South Africa after Keegan Petersen, Rassie van der Dussen keep the wheels turning - ESPNcricinfo",
            "description": "Victors at Lord's return to earth with a crash but Oval decider offers chance for final push",
            "url": "https://www.espncricinfo.com/story/eng-vs-sa-2nd-test-old-trafford-engine-failure-condemns-south-africa-as-petersen-van-der-dussen-keep-wheels-turning-1331151",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/344800/344865.6.jpg",
            "publishedAt": "2022-08-27T18:58:46Z",
            "content": "Stokes inspires England as Anderson, Robinson round up South Africa for innings win"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "News Desk",
            "title": "PM Modi Inaugurates Atal Bridge at Sabarmati Riverfront, Spins Charkha at 'Khadi Utsav' | Highlights - News18",
            "description": "PM Narendra Modi said khadi was a symbol of self-reliance and a force to behold with during the freedom movement as it \"broke the chains of slavery\"",
            "url": "https://www.news18.com/news/india/pm-modi-inaugurates-atal-bridge-at-sabarmati-riverfront-spins-charkha-at-khadi-utsav-highlights-5831761.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/08/untitled-design-2022-08-27t215622.288-166161769316x9.jpg",
            "publishedAt": "2022-08-27T18:51:00Z",
            "content": "Prime Minister Narendra Modi on Saturday inaugurated the Atal Bridge in Ahmedabad and attended the Khadi Utsav at the Sabarmati riverfront as he kickstarted his two-day visit to Gujarat. He and chief… [+3696 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Indian mission in Sri Lanka slams Chinese Ambassador’s remarks on vessel visit - The Hindu",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMijQFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9pbnRlcm5hdGlvbmFsL2luZGlhbi1taXNzaW9uLWluLXNyaS1sYW5rYS1zbGFtcy1jaGluZXNlLWFtYmFzc2Fkb3JzLXJlbWFya3Mtb24tdmVzc2VsLXZpc2l0L2FydGljbGU2NTgxOTk3MS5lY2XSAQA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-08-27T18:11:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "ANI News"
            },
            "author": null,
            "title": "Study reveals avocados may lower risk of cardiovascular disease - ANI News",
            "description": "Washington [US], August 27 (ANI): Eating two servings of avocados a week was associated with a lower risk of cardiovascular disease, according to a recent study.",
            "url": "https://www.aninews.in/news/lifestyle/others/study-reveals-avocados-may-lower-risk-of-cardiovascular-disease20220827232537",
            "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20220827173529.jpg",
            "publishedAt": "2022-08-27T17:55:00Z",
            "content": "Washington [US], August 27 (ANI): Eating two servings of avocados a week was associated with a lower risk of cardiovascular disease, according to a recent study.The study was published in 'Journal of… [+4149 chars]"
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: true,
            page: 1
        }
        document.title = `TezNews - ${this.capitalizeFirstLetter(this.props.category)}`
    }

    async updateNews() {
        this.props.progressFunc(20);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b9f5883c37e4795add50a446dffba41&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let scan = await fetch(url)
        this.props.progressFunc(40);
        let result = await scan.json()
        this.props.progressFunc(60);
        this.setState({
            articles: result.articles,
            totalResults: result.totalResults,
            loading: false
        })
        this.props.progressFunc(100);
    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b9f5883c37e4795add50a446dffba41&page=1&pageSize=${this.props.pageSize}`
        // let scan = await fetch(url)
        // let result = await scan.json()
        // this.setState({
        //     articles: result.articles,
        //     totalResults: result.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }
    handlePrevBtn = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b9f5883c37e4795add50a446dffba41&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let scan = await fetch(url)
        // let result = await scan.json()
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: result.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }

    handleNextBtn = async () => {
        // if (!(this.state.articles.length < this.props.pageSize)) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4b9f5883c37e4795add50a446dffba41&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true })
        //     let scan = await fetch(url)
        //     let result = await scan.json()
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: result.articles,
        //         loading: false
        //     })
        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center my-5'>TezNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {!this.state.loading && this.state.articles.map((value) => {
                        return <div className="col-md-4 my-4" key={value.url}>
                            <NewsItems title={value.title ? value.title.slice(0, 50) + "....." : ""} description={value.description ? value.description.slice(0, 150) + "....." : "______________________________________________________________________________________________________________________________________________________"} imgURL={value.urlToImage ? value.urlToImage :
                                "https://i.postimg.cc/hvhFPYWf/Picsart-22-09-10-10-29-48-827.jpg"} newsURL={value.url} date={value.publishedAt} author={value.author ? value.author : 'Unknown'} source={value.source.name} />
                        </div>
                    })}
                </div>
                {!this.state.loading && <div className="d-flex justify-content-around">
                    <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrevBtn}>&larr; Previous</button>
                    <button disabled={this.state.articles.length < this.props.pageSize} type="button" className="btn btn-dark" onClick={this.handleNextBtn}>Next &rarr;</button>
                </div>}
            </div>
        )
    }
}

export default NewsComponent