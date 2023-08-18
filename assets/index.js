const db = new Dexie('DarenBabbanSallah')
const music = new Audio('./assets/audios/1.mp3');

db.version(1).stores( e = { items: '++id, value1, value2, value3, value4, value5'})

const itemForm = document.getElementById('itemForm');
const itemsDiv = document.getElementById('itemsDiv');


const populatedItemsDiv = async () => {
    const allItems = await db.items.toArray()
    
    itemsDiv.innerHTML = allItems.map(item => `
        <div class="content">
            <p class="text-start"><img src="./images.png" class="ayatLogo" alt="">${item.value1}</p>
            <p class="text-end"><img src="./images.png" class="ayatLogo" alt="">${item.value2}</p>
            <p class="text-start"><img src="./images.png" class="ayatLogo" alt="">${item.value3}</p>
            <p class="text-end"><img src="./images.png" class="ayatLogo"  alt="">${item.value4}</p>
            <p class="text-start"><img src="./images.png" class="ayatLogo" >${item.value5}</p>
        </div>
        <div class="row  pt-2">
            <div class="col-2">
            </div>
            <div class="col-8 text-center d-flex justify-content-center align-items-center">
            <img src="./title.png" alt="" class="rounded-circle" style="width: 200px; height: 50px;">
            </div>
            <div class="col-2">
            <button onclick="removeItem(${item.id})">X</button>
            </div>
        </div>
    `).join('')
}

window.onload = populatedItemsDiv   

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
        // wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bx-play');
        masterPlay.classList.remove('bx-pause');
        // wave.classList.remove('active2');
    }
})

itemForm.onsubmit = async (event = Event) => {
    event.preventDefault ()

    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const value3 = document.getElementById('value3').value;
    const value4 = document.getElementById('value4').value;
    const value5 = document.getElementById('value5').value;

    await db.items.add({ value1, value2, value3, value4, value5})

    await populatedItemsDiv()

    itemForm.reset()
}


const removeItem = async (id) => {
    await db.items.delete(id)

    await populatedItemsDiv()
}