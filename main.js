window.onload = function () {
    const quoteBtn = document.querySelector(".quote-btn");
    const quoteElement = document.querySelector(".quoteElement");
    const authorElement = document.querySelector(".author");
    let QuetosData, AuthorData;
    quoteBtn.onclick = async function () {
        await fetch(`https://api.quotable.io/random`)
            .then((Response) => Response.json())
            .then((res) => {
                // console.log(res);
                QuetosData = res.content;
                AuthorData = res.author;
            });
        quoteElement.textContent = QuetosData;
        authorElement.textContent = AuthorData;
    };
};
