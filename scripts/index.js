function loadData() {
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    // const res = fetch(url)
    // const data = res.json()
    // console.log(data);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data.data.tools)
            const array = data.data.tools;
            array.forEach(element => {
                console.log(element);
            });
        });
}

loadData();