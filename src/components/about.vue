<template>
  <div>
    <header>
      <div class="header-wrapper">
        <h1>The Experimental Layout Lab</h1>
        <h1>of Jen Simmons</h1>
        <div class="demo-list">
          <ul>
            <li>
              <a href="https://youtube.com/layoutland">Layout Land videos</a>
            </li>
            <li>
              <a href="http://layout.land">Layout Land website</a>
            </li>
            <li>
              <a href="http://jensimmons.com/post/feb-27-2017/learn-css-grid">Learn how to use CSS Grid</a>
            </li>
            <li>
              <a href="http://jensimmons.com/presentation/real-art-direction-web">Revolutionize Your Page: Real Art Direction on the Web</a>
            </li>
            <li>
              <a href="http://jensimmons.com/presentation/progressing-our-layouts">Progressing Our Layouts</a>
            </li>
            <li>
              <a href="http://jensimmons.com/presentation/modern-layouts-getting-out-our-ruts">Modern Layouts: Getting Out of Our Ruts</a>
            </li>
            <li>
              <a href="http://jensimmons.com">jensimmons.com</a>
            </li>

            <li>
              <a href="../2017/workshop">Workshop Examples</a>
            </li>
          </ul>
        </div>
        <p class="follow-links">
          Follow
          <a href="http://twitter.com/jensimmons">@jensimmons</a> on Twitter for more as it happens.
          <br />Sign up for
          <a href="http://layout.land">Layout Land</a>, a place for us to show off new ideas for layout.
        </p>
        <div class="workshop-link">
          <ul>
            <li>
              <a href="https://developer.mozilla.org/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Firefox Grid Inspector</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes">Firefox Shape Path Editor</a>
            </li>
            <li>
              <a href="http://nightly.mozilla.org">Firefox Nightly</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "osExp",
  props: {
    msg: String
  },
  data: function() {
    return {
      here: "о нас"
    };
  },
  created: function() {}
};
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

html {
  font-family: "futura-pt", helvetica, sans-serif;
  font-size: 100%;
  color: rgba(12, 12, 10, 0.8);
  font-weight: 400;
}

img {
  max-width: 100%;
  display: block;
}

/* --------------------------------------------------------*/
h1,
h2,
h3 {
  margin: 0;
  text-transform: uppercase;
  line-height: 1.2;
}

h4 {
  font-size: 1rem;
  font-weight: 400;
  margin: 0.1rem 0 0.2rem;
  line-height: 1.2;
}

a {
  color: rgba(12, 12, 10, 0.8);
  text-decoration: none;
}

a:hover {
  color: #f9423a;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
}

ul > li {
  padding: 0;
}

ol {
  padding: 0;
  margin: 0;
}

:focus {
  outline: 1px solid #f9423a;
}

/* --------------------------------------------------------*/
header {
  background: #f6f3ea;
  min-height: 100vh;
  padding: 5rem 5vw 2rem;
}
header h1 {
  font-size: calc(1.3rem + 1.8vw);
  margin: 0;
  line-height: 1.2em;
}
header p {
  margin: 2rem 0 0;
}
header ul {
  margin: 0;
}
header p,
header a {
  color: rgba(38, 37, 32, 0.7);
}
header a {
  border-bottom: 1px solid rgba(169, 169, 169, 0.79);
}

@supports (display: grid) {
  header {
    display: flex;
    margin: auto;
    padding-top: 1rem;
    padding-bottom: 12rem;
  }
  header .header-wrapper {
    width: 66vw;
    display: grid;
    margin: auto;
    grid-template-columns: auto 1fr 1fr 1fr 0.5fr;
    grid-template-rows: auto 1fr 1fr auto auto;
    grid-gap: 1rem;
    transform: rotate(-45deg);
  }
  header h1:nth-child(1) {
    grid-column: 1 / 4;
    text-align: right;
  }
  header h1:nth-child(2) {
    color: #f9423a;
    writing-mode: vertical-lr;
    grid-column: 3 / 4;
    grid-row: 2 / 5;
    justify-self: end;
    margin-top: -10px;
    margin-right: -10px;
  }
  header p {
    margin: 0;
    color: rgba(12, 12, 10, 0.8);
  }
  header a {
    border-bottom: none;
    text-transform: uppercase;
    color: rgba(12, 12, 10, 0.8);
    font-weight: 700;
  }
  header .demo-list {
    grid-column: 1 / 3;
    grid-row: 4 / span 2;
    font-weight: 700;
    line-height: 1.2;
    align-self: end;
  }
  header .demo-list li {
    border-top: 5px solid rgba(12, 12, 10, 0.8);
    text-align: left;
    padding: 2px 0;
  }
  header .demo-list li:last-child {
    border-bottom: 5px solid rgba(12, 12, 10, 0.8);
  }
  header .demo-list p {
    padding: 2px 0;
  }
  header .follow-links {
    grid-column: 3 / 6;
    grid-row: 5;
    font-size: 0.9rem;
    border-bottom: 25px solid #f9423a;
    align-self: start;
    justify-content: end;
    line-height: 1.3;
    padding-bottom: 5px;
    font-weight: 400;
  }
  header .workshop-link {
    border-top: 5px solid rgba(12, 12, 10, 0.8);
    border-bottom: 5px solid rgba(12, 12, 10, 0.8);
    font-weight: 700;
    grid-row: 3;
    grid-column: 4 / 6;
    align-self: end;
  }
  @media (max-width: 820px) {
    header {
      display: flex;
      margin: auto;
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
    header .header-wrapper {
      transform: rotate(0);
    }
    header h1:nth-child(2) {
      margin-top: -5px;
    }
    header .workshop-link {
      margin-left: 1rem;
      align-self: start;
    }
    header .follow-links {
      border-bottom: 20px solid #f9423a;
    }
  }
  @media (max-width: 700px) {
    header .demo-list {
      grid-column: 3 / -1;
      grid-row: 6;
    }
  }
  @media (max-width: 500px) {
    header .header-wrapper {
      width: 66vw;
      grid-template-columns: auto 1fr 1fr 1fr 0.5fr;
      grid-template-rows: auto auto auto auto;
    }
    header h1:nth-child(1) {
      grid-column: 1 / -1;
    }
    header h1:nth-child(2) {
      grid-column: 5;
      grid-row: 2 / 4;
      margin-right: -5px;
    }
    header .follow-links {
      grid-column: 1 / 4;
      grid-row: 3;
      border-bottom: 10px solid #f9423a;
    }
    header .demo-list {
      grid-column: 1 / -1;
      grid-row: 4;
    }
    header .workshop-link {
      grid-column: 1 / -1;
      grid-row: 5;
      margin-left: 0;
    }
  }
  @media (min-width: 1000px) {
    header {
      padding-bottom: 15rem;
    }
  }
  @media (min-width: 1300px) {
    header {
      padding-bottom: 25rem;
    }
  }
  @media (min-width: 1800px) {
    header {
      padding-bottom: 30rem;
    }
  }
}

nav,
.bar {
  background: #f9423a;
  padding: 1.04rem 5vw 0.9rem calc(5vw + 1.2rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
}
nav ol,
.bar ol {
  columns: 180px;
  column-gap: 4rem;
}
nav ol li,
.bar ol li {
  text-align: left;
  margin: 0;
  padding: 0;
  break-inside: avoid;
}

main > section {
  padding: 4rem 5vw 3rem;
}
main > section h3 {
  font-size: 1.2rem;
  margin: 1rem 0 -1rem;
}
main > section h3 > ul {
  margin-left: 2rem;
}
main > section > ul.demo-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 3rem;
}
main > section > ul.demo-list li > a {
  display: flex;
  flex-direction: column;
}
main > section > ul.demo-list li > a img {
  order: -1;
}
main > section > ul.demo-list li > p {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(149, 149, 128, 0.8);
}
main > section > ul.demo-list li > p a {
  color: rgba(149, 149, 128, 0.8);
}
main > section > ul.demo-list li > p a::before {
  content: "[";
}
main > section > ul.demo-list li > p a::after {
  content: "]";
}
main > section img {
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
  display: block;
  margin-bottom: 1rem;
}
main > section > footer {
  display: flex;
  color: rgba(149, 149, 128, 0.8);
  font-size: 0.85rem;
}
main > section > footer div {
  flex: 1;
}
main > section > footer h4 {
  font-weight: 300;
  margin: 0.25rem 0;
}
main > section > footer ul {
  margin: 0;
  list-style: square;
  padding: 0 0 0 1rem;
}
main > section > footer li {
  margin: 0;
  padding: 0;
}
main > section > footer a {
  color: inherit;
}

section:nth-child(even) {
  background: #f0efeb;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
}

section:nth-child(odd) {
  background: #fbf9f6;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.2);
}

.note {
  margin: 0.3rem 0 0;
  font-size: 0.85rem;
  font-style: italic;
}
.note a {
  border-bottom: 1px dotted #9c9c9c;
}

main > footer {
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 3rem;
}
main > footer a {
  color: #eee;
  text-decoration: underline;
}
main > footer p {
  margin-bottom: 0;
}
main > footer ul {
  margin: 0;
}

/*# sourceMappingURL=styles.css.map */
</style>
