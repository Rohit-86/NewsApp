async function clicked() {
  let searc = document.getElementById("inp");
  const elements = {
    images: [],
    title: [],
    date: [],
    paras: [],
  };

  for (let i = 1; i <= 6; i++) {
    elements.images.push(document.getElementById(`i${i}`));
    elements.title.push(document.getElementById(`t${i}`));
    elements.date.push(document.getElementById(`d${i}`));
    elements.paras.push(document.getElementById(`p${i}`));
  }
  let date = new Date();
  let api = `https://newsapi.org/v2/everything?q=${searc.value}&from=${date.getDate}&sortBy=publishedAt&apiKey=6eb07083af554b7cacfe63141c71ed38`;
  let response = await fetch(api);
  let news = await response.json();
  const maxElements = Math.min(elements.images.length, news.articles.length);

  for (let i = 0; i <= maxElements; i++) {
    try {
      if (news.articles[i]) {
        if (elements.images[i]) {
          elements.images[i].src = news.articles[i].urlToImage || "";
        }
        if (elements.date[i]) {
          elements.date[i].innerHTML = news.articles[i].publishedAt || "";
        }
        if (elements.title[i]) {
          elements.title[i].innerHTML = news.articles[i].title || "";
        }
        if (elements.paras[i]) {
          elements.paras[i].innerHTML = news.articles[i].content || "";
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
