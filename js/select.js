const playerArray = [];

function display() {

    const tableBody = document.getElementById('selected-table');
    tableBody.innerHTML = '';

    for (let i = 0; i < 5; i++) {

        const name = playerArray[i].playerName;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th class="bg-black font-normal text-white">${i + 1}</th>
        <td class="bg-black font-normal text-white capitalize bg-black">${name}</td>
        `;

        tableBody.appendChild(tr);

    }
}


function addToTable(element) {

    const playerName = element.parentNode.parentNode.children[0].innerText;

    // const button = document.getElementById('button');
    // button.disabled = true;

    const playerObj = {
        playerName: playerName
    }

    playerArray.push(playerObj);

    display(playerArray);

}

