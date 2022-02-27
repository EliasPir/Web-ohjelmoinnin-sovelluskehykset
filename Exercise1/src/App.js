import React from 'react';
import styles from './app.scss';
import stm from '../src/stm.jpg';
import koronatilastot from '../src/koronatilastot.png';

//import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'

//const element = <FontAwesomeIcon icon={faCoffee}/>



const App = () => (
  <div className={styles.app}>
    <div className={styles.topBarBG}>
      <header className={styles.header}>Helsingin Sanomat</header>
      <h1 className={styles.topBar}> Etusivu</h1>
      <h1 className={styles.topBar}> Uutiset</h1>
      <h1 className={styles.topBar}> Lehdet</h1>
      <h1 className={styles.topBar}> Asiakaspalvelu</h1>
      <div className={styles.orderBtn}>
        <h1 className={styles.orderBtnText}>Tilaa</h1>
      </div>
      <h1 className={styles.signIn}>Kirjaudu</h1>
      <h1 className={styles.menu}>Valikko</h1>
        <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
    </div>

    <div className={styles.sizingDiv}>

      <div className = {styles.firstDaysPick}>
        <h2 className = {styles.daysPickText}>PÄIVÄN TIMANTTI: Tutkija kertoo: Näin sota näkyy meissä edelleen</h2>
      </div>

      <div className = {styles.daysPick}>
        <h2 className = {styles.daysPickText}>PÄIVÄN TIMANTTI: Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisonsa 19 200 euroa</h2>
      </div>

      <div className = {styles.advertisement}>
        <h2 className = {styles.daysPickText}>MAINOS: Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta!</h2>
      </div>

      <div className = {styles.divBoxStyle}>
        <div className = {styles.news}>
          <h1 className = {styles.newsHeader}>Koronavirus</h1>
            <div className = {styles.imageHolder}>
              <img src={stm} alt = "Sosiaali ja terveysministeriö" className = {styles.headerImage}/>
            </div>
            <FontAwesomeIcon className={styles.liveIcon} icon={faCircle} />
            <p className = {styles.redAnnouncement}>HS seuraa</p>
            <div className = {styles.newsHeaderDiv}>
              <h1 className = {styles.blueHeader}>Päivittyvä seuranta |</h1>
              <h1 className = {styles.secondNewsHeader}>STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan</h1>
            </div>
            <img src={koronatilastot} atl = "Tilastoja koronatartunnoista" className = {styles.headerImage}/>
        </div>

          <div className = {styles.mostViewed}>
            <h2 className = {styles.mostViewedHeader}>Luetuimmat</h2>
            <div className = {styles.mostViewedItem}>
              <div className = {styles.mostViewedOrderDiv}>
                <h2 className = {styles.mostViewedOrder}>1</h2>
              </div>
              <div className = {styles.mostViewedParagraphStyle}>
                <p className = {styles.mostViewedKeyWord}>Rikosepäilyt</p>
                <p className = {styles.mostViewedParagraph}>| EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa</p>
              </div>
            </div>

            <div className = {styles.mostViewedItem}>
              <div className = {styles.mostViewedOrderDiv}>
                <h2 className = {styles.mostViewedOrder}>2</h2>
              </div>
              <div className = {styles.mostViewedParagraphStyle}>
                <p className = {styles.mostViewedKeyWord}>HS Vantaa</p>
                <p className = {styles.mostViewedParagraph}>| Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa</p>
              </div>
            </div>

            <div className = {styles.mostViewedItem}>
              <div className = {styles.mostViewedOrderDiv}>
                <h2 className = {styles.mostViewedOrder}>3</h2>
              </div>
              <div className = {styles.mostViewedParagraphStyle}>
                <p className = {styles.mostViewedKeyWord}>Päivittyvä seuranta</p>
                <p className = {styles.mostViewedParagraph}>| STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden</p>
              </div>
            </div>

            <div className = {styles.mostViewedItem}>
              <div className = {styles.mostViewedOrderDiv}>
                <h2 className = {styles.mostViewedOrder}>4</h2>
              </div>
              <div className = {styles.mostViewedParagraphStyle}>
                <p className = {styles.mostViewedKeyWord}>Nyt.fi</p>
                <p className = {styles.mostViewedParagraph}>| Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnitelijalle</p>
              </div>
            </div>

            <div className = {styles.mostViewedItem}>
              <div className = {styles.mostViewedOrderDiv}>
                <h2 className = {styles.mostViewedOrder}>5</h2>
              </div>
              <div className = {styles.mostViewedParagraphStyle}>
                <p className = {styles.mostViewedKeyWord}>Rikosepäilyt</p>
                <p className = {styles.mostViewedParagraph}>| Atte Jääskeläinen sai syytteet liikenneturvallisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

);
export default App;
