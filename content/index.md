
<!--Nolwethu Dlamini u24978966 -->
<body>

<h1 id="home">PORTFOLIO</h1>

<div class="head-links">
       <h3><a href="/">Home</a></h3>
       <h3><a href="/projects">Projects</a></h3>
       <h3><a href="/contacts">Contact</a></h3>
</div>

<h2> Welcome </h2>

<div class="home-intro">
   <p>My name is Nolwethu Dlamini.</p>
   <img src="/images/homeProfile.jpg" alt="profile picture" class="profile">
   <p> I love content creation in relation to graphics, learning about brand designing and gamified education. This is a glimpse into my world and the skills I have developed in first year.</p>
</div>

<div>
  <Weather />
</div>

</body>

<p class="back"><a href="#home">back to top</a></p>
<footer>
  <div class="footer-links">
    <a href="/">Home</a>
    <a href="/projects">Projects</a>
    <a href="/contacts">Contacts</a>
  </div>

  <p class="footer-credit">© 2026 Nolwethu Dlamini. All rights reserved.</p>
</footer>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');

  body {
    background-image: url("/images/background.png");
    background-position: center;
    background-size: auto;
  }

  h1 {
    font-weight: bold;
    text-align: center;
    font-size: 4rem;
    font-family: "Lexend", sans-serif;
  }

  h2 {
    margin-top: 20px;
    font-size: 2rem;
    color: black;
    font-weight: bold;
    text-align: center;
    font-family: "Lexend", sans-serif;
  }

  .head-links {
  display: flex;          
  gap: 20px;              
  padding: 20px;
  background-color: #aec3b0;
 }

.head-links h3 {
  margin: 0;
  padding: 15px;
}

.head-links a {
  text-decoration: none;
  color: black;
  font-family: "Lexend", sans-serif;
  font-size: 1.5rem;
}

.head-links a:hover {
  color: white;
}

.head-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
}


  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
   color: grey;
  }

  .home-intro {
    font-size: 1.2rem;
    padding: 20px;
    text-align: center;
  }

  p {
    font-family: "Lexend", sans-serif;
  }


.profile {
  border-radius: 50%; 
  width: 200px;
  height: 200px;
  object-fit: cover;   
}

footer {
  background-color: black;
  color: white;
  text-align: center;
  padding: 30px 20px;
  margin-top: 50px;
  font-family: "Lexend", sans-serif;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 15px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.footer-links a:hover {
  color: grey;
}

.footer-credit {
  font-size: 0.8rem;
  color: grey;
  margin: 0;
}

.back {
   color: grey;
   text-align: center;
   padding: 20px;
}
</style>
