import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <main>
      <header>
        <a href="" className="logo">SilvestreBlog</a>
        <nav>
          <a href="" className="login">Login</a>
          <a href="" className="register">Register</a>
        </nav>
      </header>
      
      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/07/app-store-ios-2022-b.jpg?resize=1098,617" alt="" />
        </div>
        <div className="texts">
          <h2>Epic Games and Spotify test Apple’s new App Store rules</h2>
          <p className="info">
            <a href="" className="author">Andre Silvestre</a>
            <time>2025-10-06 8:27</time>
          </p>
          <p className="summary">Fortnite maker Epic Games and Spotify are testing Apple’s new App Store policies by submitting apps for review that would have previously never been allowed.</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/07/app-store-ios-2022-b.jpg?resize=1098,617" alt="" />
        </div>
        <div className="texts">
          <h2>Epic Games and Spotify test Apple’s new App Store rules</h2>
          <p className="info">
            <a href="" className="author">Andre Silvestre</a>
            <time>2025-10-06 8:27</time>
          </p>
          <p className="summary">Fortnite maker Epic Games and Spotify are testing Apple’s new App Store policies by submitting apps for review that would have previously never been allowed.</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/07/app-store-ios-2022-b.jpg?resize=1098,617" alt="" />
        </div>
        <div className="texts">
          <h2>Epic Games and Spotify test Apple’s new App Store rules</h2>
          <p className="info">
            <a href="" className="author">Andre Silvestre</a>
            <time>2025-10-06 8:27</time>
          </p>
          <p className="summary">Fortnite maker Epic Games and Spotify are testing Apple’s new App Store policies by submitting apps for review that would have previously never been allowed.</p>
        </div>
      </div>
    
      
    </main>
    </>
  )
}

export default App
