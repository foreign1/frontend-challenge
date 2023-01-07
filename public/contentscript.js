console.log('Contentscript injected');

const styles = {
  btbBtnStyles: {
    "display": "flex",
    "align-items": "center",
    "justify-content": "center",
    "width": "12rem",
    "height": "2.5rem",
    "color": "white",
    "background-color": "#0B226B",
    "border-radius": "5px",
    "border": "none",
    "cursor": "pointer",
  },
  containerStyles: {
    "width": "250px",
    "position": "absolute",
    "top": "70px",
    "right": "50px",
    "box-sizing": "border-box",
  },
  detailsStyles: {
    "display": "none",
    "margin-top": "5px",
    "padding": "10px",
    "color": "white",
    "background-color": "grey",
    "font-size": "14px",
    "font-weight": "300",
    "border-radius": ".3rem",
  }
}

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);
const btbBtn = createBtbButton();
const dummyText = createDummyDetails();
const repoDescriptions = createRepoDescription();
const details = createDetails(dummyText, repoDescriptions);
const container = createContainer(btbBtn, details);

parentElement.appendChild(container);

// component definitions
function createBtbButton() {
  const btBtn = document.createElement("button");
  const budgetEl = document.querySelector('p[class*="btb"]');

  btBtn.className = "btb-btn";
  Object.assign(btBtn.style, styles.btbBtnStyles);
  btBtn.textContent = "☻ Budget-to-Beat: " + budgetEl.textContent;

  btBtn.addEventListener("mouseenter", ()=> {
    details.style.display = "block";
  });
  btBtn.addEventListener("mouseleave", ()=> {
    details.style.display = "none";
  });
  return btBtn;
}

function createDummyDetails() {
  const dummy = document.createElement("p");
  dummy.textContent = "Lorem ipsum, dolor sit amet consectetur adiping elit.";
  return dummy;
}

function createRepoDescription(){
  const descriptions = document.createElement("p");
  fetchDescriptions(descriptions);
  return descriptions;
}

function createDetails(dummyText, repoDescription) {
  const details = document.createElement("div");
  Object.assign(details.style, styles.detailsStyles);
  details.appendChild(dummyText);
  details.appendChild(repoDescription);
  return details;
}

function createContainer(btbBtn, details) {
  const container = document.createElement("div");
  Object.assign(container.style, styles.containerStyles);
  container.appendChild(btbBtn);
  container.appendChild(details);
  return container;
}

function fetchDescriptions(descriptions) {
  fetch("https://api.github.com/search/repositories?q=Climate+Change&sort=stars&order=desc")
    .then(response => response.json())
    .then(data => {
      let desc = "<h3>Top 3 climate change repositories</h3>";
      for (let i = 0; i<3; i++) {
        desc += `${i+1} - ${data.items[i].description}`;
        desc += "<br>";
      }
      descriptions.innerHTML = desc;
    });
}
