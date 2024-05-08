import "./App.css";
import { useEffect, useState } from "react";
import Twitter from "./assets/Twitter";
import Linkedin from "./assets/Linkedin";
import "animate.css";

function App() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      if (!res.ok) {
        throw new Error("Could not get quote!");
      }
      const data = await res.json();
      if (data) {
        const { content, author } = data;
        setText(content);
        setAuthor(author);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    const randomClassIndex = Math.floor(Math.random() * 20) + 1;
    const body = document.querySelector("body");
    body.className = `bg-color-${randomClassIndex}`;

    const text = document.getElementById("text");
    text.className = `color-${randomClassIndex}`;

    const authorElement = document.getElementById("author");
    authorElement.className = `color-${randomClassIndex}`;

    const tweet = document.getElementById("tweet-quote");
    tweet.className = `bg-color-${randomClassIndex}`;

    const linkedin = document.getElementById("linkedin-post");
    linkedin.className = `bg-color-${randomClassIndex}`;

    const quoteButton = document.getElementById("new-quote");
    quoteButton.className = `bg-color-${randomClassIndex}`;

    // Agregar la clase de animación animate__fadeIn al elemento quote-box
    const boxText = document.getElementById("text");
    boxText.classList.add("animate__animated", "animate__fadeIn");
    const boxAuthor = document.getElementById("author");
    boxAuthor.classList.add("animate__animated", "animate__fadeIn");
    // Remover la clase de animación después de 1 segundo
    setTimeout(() => {
      boxText.classList.remove("animate__animated", "animate__fadeIn");
      boxAuthor.classList.remove("animate__animated", "animate__fadeIn");
    }, 1000);
  }, []);

  const handleClick = () => {
    fetchData();
    const randomClassIndex = Math.floor(Math.random() * 20) + 1;
    const body = document.querySelector("body");
    body.className = `bg-color-${randomClassIndex}`;

    const text = document.getElementById("text");
    text.className = `color-${randomClassIndex}`;

    const authorElement = document.getElementById("author");
    authorElement.className = `color-${randomClassIndex}`;

    const tweet = document.getElementById("tweet-quote");
    tweet.className = `bg-color-${randomClassIndex}`;

    const linkedin = document.getElementById("linkedin-post");
    linkedin.className = `bg-color-${randomClassIndex}`;

    const quoteButton = document.getElementById("new-quote");
    quoteButton.className = `bg-color-${randomClassIndex}`;

    const boxText = document.getElementById("text");
    boxText.classList.add("animate__animated", "animate__fadeIn");
    const boxAuthor = document.getElementById("author");
    boxAuthor.classList.add("animate__animated", "animate__fadeIn");

    setTimeout(() => {
      boxText.classList.remove("animate__animated", "animate__fadeIn");
      boxAuthor.classList.remove("animate__animated", "animate__fadeIn");
    }, 1000);
  };

  return (
    <main className={`contenido`}>
      <div id="quote-box">
        <p id="text">
          {'"'}
          {text}
        </p>
        <p id="author">-{author}</p>
        <div className="content-buttons">
          <div className="content-link">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                text
              )}`}
              target="_blank"
              id="tweet-quote"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/cesarcolorado/"
              target="_blank"
              id="linkedin-post"
            >
              <Linkedin />
            </a>
          </div>
          <button id="new-quote" onClick={handleClick}>
            New quote
          </button>
        </div>
      </div>
      <small className="dev-author">by: César Colorado</small>
    </main>
  );
}

export default App;
