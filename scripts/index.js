function loadData() {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    // const res = fetch(url)
    // const data = res.json()
    // console.log(data);

    const aiContainer = document.getElementById('ai-container');
    // aiContainer.classList.add('container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5');
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.data.tools)
            const array = data.data.tools;
            array.forEach(element => {
                console.log(element);
                const aiCard = document.createElement('div');
                aiCard.innerHTML = `
                <!-- // <h1>sss</h1> -->
                 <!-- card-1 -->
            <div class="p-6 mt-12 rounded-2xl border">
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="${element.image}" alt="ChatGPT" /></figure>
                    <div class="card-body py-6 mx-0">
                        <h3 class="card-title text-2xl font-semibold">Features</h2>
                            <ol class="text-base font-normal list-decimal">
                                <li class="">
                                    <p>Natural language processing</p>
                                </li>
                                <li>
                                    <p>Contextual understanding</p>
                                </li>
                                <li>
                                    <p>Text generation</p>
                                </li>
                            </ol>
                            <div class="card-actions flex justify-between items-center border-t py-6">
                                <div class="flex flex-col gap-4">
                                    <h5 class="text-2xl font-semibold inline">ChatGPT</h5>
                                    <p class="flex">
                                        <img class="inline" src="./assets/icons/calendar.svg" alt="">
                                        <span>11/01/2022</span>
                                    </p>
                                </div>
                                <div>
                                    <button
                                        class="w-12 h-12 bg-[#FEF7F7] flex justify-center items-center rounded-3xl"><img
                                            src="./assets/icons/next.svg" alt="next-button">
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                
                `

                aiContainer.appendChild(aiCard);
            });
        });
}

loadData();