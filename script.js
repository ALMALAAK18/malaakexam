let container = document.getElementById("container")


const fetchChicken = async () => {
    let getData = await fetch("C:\Users\MCC\Desktop\web2\lunch.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-1">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
            
        </div>
    </div>
</div>`
    });
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}

const fetchSushi = async () => {
    let getData = await fetch("C:\Users\MCC\Desktop\web2\Dinner.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-1">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
            <p id="jd1">7JD</p>
        </div>
    </div>
</div>`
    });
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}

const fetchBeef = async () => {
    let getData = await fetch("C:\Users\MCC\Desktop\web2\sandwitches.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-1">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
        
        </div>
    </div>
</div>`
    });
    const menuItems = [
        {
            name: "lunch ihuyg ",
            description: "Fried chicken is very delicious and very light on the stomach.",
            
        },
        {
            name: "Boiled Sushi",
            description: "Boiled chicken is very healthy however it is not that tasty.",
            
        },
        // ... other menu items
    ];
    
    // Function to generate HTML for menu items
    const generateMenuItemHTML = (menuItem) => {
        return `
            <div class="col-lg-4">
                <div class="item">
                    <div class="item-title" id="title-2">
                        <h3>${menuItem.name}</h3>
                    </div>
                    <p>${menuItem.description}</p>
                    <p class="jd">${menuItem.price}</p>
                </div>
            </div>`;
    };
    
    // Function to fetch and display menu items
    const fetchMenuItems = async (menuType) => {
        let getData = await fetch(`./${menuType.toLowerCase()}.json`);
        let data = await getData.json();
        let html = "";
        data.forEach((element) => {
            html += generateMenuItemHTML(element);
        });
        container.innerHTML = html;
        console.log("Click");
    }
    
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}

