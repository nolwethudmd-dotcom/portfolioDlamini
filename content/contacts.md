
<body>

<h1 id="contact">CONTACT</h1>
<!--Nolwethu Dlamini u24978966-->

<div class="head-links">
       <h3><a href="/">Home</a></h3>
       <h3><a href="/projects">Projects</a></h3>
       <h3><a href="/contacts">Contact</a></h3>
</div>

<form name="contact" data-netlify="true" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>


<form name="contact" method="POST" data-netlify="true" action="/received">
 <fieldset>
  <legend>Enter Contact Details</legend>
  <input type="hidden" name="form-name" value="contact" />
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
  </fieldset>
</form>

  <input type="hidden" name="form-name" value="contact" />
</form>

<br/>
<br/>
<br/>
<br/>

<div class="calendar">
  <Calendar />
</div>
<br/>

</body>

<p class="back"><a href="#contact">back to top</a></p>
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

  img {
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  margin: 20px auto;
 }

 form {
  margin: auto;
  border-radius: 10px;
  border: 6px solid black;
  width: 50%;
  padding: 30px;
 }

 input {
  border-radius: 10px;
  padding: 10px;
  width: 40%;
 }

 textarea {
  border-radius: 10px;
  padding: 10px;
  width: 40%;
 }

 label {
  font-family: "Lexend", sans-serif;
  font-size: 1.2rem;
  color: black;
  margin-bottom: 10px;
 }

 button {
  border-radius: 10px;
  padding: 15px;
  width: 15%;
  font-size: 1.1rem;
 }

 button:hover {
  background-color: black;
  color: white;
 }

 .calendar {
   margin: auto;
   border: 6px solid black;
   border-radius: 10px;
   width: 50%;
   padding: 20px;
   text-align: center;
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

.back a{
   color: grey;
   text-align: center;
   padding: 20px;
}

legend {
  font-family: "Lexend", "Sans-serif";
  color: grey;
}
</style>