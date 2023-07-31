//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className='left-navbar'>
          <ul className='left-ul'>
            <li><a href="https://www.atlassian.com/"><img src={require('./images/Atlassian-logo/logo1.png')} atl='atlassian' height="25px" width="200px"></img></a></li>
            <li><a className='list-links' href="/">Products<p className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
            </svg></p></a></li>
            <li><a className='list-links' href="/">For Teams<p className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
            </svg></p></a></li>
            <li><a className='list-links' href="/">Support<p className="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
            </svg></p></a></li>
          </ul>
        </div>
        <div className='right-navbar'>
          <ul className='right-ul'>
            <li><a className='right-links' href="#"><img src={require('./images/search.png')} atl='search' height="20px" width="20px"></img></a></li>
            <li><a className='right-bulinks' href="#">Try now</a></li>
            <li className='right-links-line'>|</li>
            <li><a className='right-links' href="#">Log in </a></li>
          </ul>
        </div>
      </div>

      <div className='main-page'>
        <img src={require('./images/backgound_image1.jpg')} className='main-image' alt='backgroud'></img>
        <div className='info'>
          <h1>Move work<br />forward</h1>
          <p>Atlassian helps teams work smarter and faster,<br />together</p>
          <button className='learn-more'>Learn More</button>
        </div>
      </div>

    </div>
  );
}

export default App;