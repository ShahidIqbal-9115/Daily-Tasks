function ScreenSizeLapTop (){
    window.location.reload();
    let lap =document.getElementById("main-Section-Of-Web-Head");
    lap.style.width="100%"
    document.getElementById("main-Section-Of-Web").style.backgroundColor="#252525";
}

function ScreenSizeTab (){
    document.getElementById("forScrool").style.maxHeight="520px";
    document.getElementById("forScrool").style.overflow="scroll";
    document.getElementById("forScrool").style.overflowX="hidden";
    let lap =document.getElementById("main-Section-Of-Web-Head");
    lap.style.width="720px";

    document.getElementById("main-Section-Of-Web-Body").style.width="720px";
    document.getElementById("main-Section-Of-Web").style.backgroundColor="#252525";
    document.getElementById("menuNav").style.display="none";
    document.getElementById("navModal").style.display="none";
    document.getElementById("menuShow").style.display="flex";
    document.getElementById("menu").style.width="auto";
    document.getElementById("menu").style.gap="15px";
    document.getElementById("main-Section-Of-Web-Head").style.padding='1%';
    document.getElementById("main-Section-Of-Web-Body").style.padding="1%";
    document.getElementById("main-Section-Of-Web-Body").style.flexDirection="column-reverse";
    document.getElementById("tableDiv").style.width="720px";
    document.getElementById("tableDiv").style.padding="1%";
    document.querySelector(".bi-tablet").style.color="white";
    document.querySelector(".bi-phone").style.color="#819db6";
    document.querySelector(".bi-laptop").style.color="#819db6";
    document.body.style.overflow="hidden";
}

function ScreenSizeMobile (){
    document.getElementById("forScrool").style.maxHeight="520px";
    document.getElementById("forScrool").style.overflow="scroll";
    document.getElementById("forScrool").style.overflowX="hidden";
    let lap =document.getElementById("main-Section-Of-Web-Head");
    lap.style.width="480px";
    document.getElementById("main-Section-Of-Web-Body").style.width="480px";
    document.getElementById("main-Section-Of-Web").style.backgroundColor="#252525";
    document.getElementById("menuNav").style.display="none";
    document.getElementById("navModal").style.display="none";
    document.getElementById("menuShow").style.display="flex";
    document.getElementById("menu").style.width="auto";
    document.getElementById("menu").style.gap="15px";
    document.getElementById("main-Section-Of-Web-Head").style.padding='1%';
    document.getElementById("main-Section-Of-Web-Body").style.padding="1%";
    document.getElementById("main-Section-Of-Web-Body").style.flexDirection="column-reverse";
    document.getElementById("tableDiv").style.width="480px";
    document.getElementById("tableDiv").style.padding="1%";
    document.querySelector(".bi-tablet").style.color="#819db6";
    document.querySelector(".bi-laptop").style.color="#819db6";
    document.querySelector(".bi-phone").style.color="white";
    document.body.style.overflow="hidden";
}

function NavModal(){
    let nav=document.getElementById("navModal");
    nav.style.display="flex";
}

function closeModal(){
    let nav=document.getElementById("navModal");
    nav.style.display="none";
}

function DropdownModalOneOpen(){
    document.getElementById("DropdownModalone").style.display="flex";
}
function DropdownModalOneClose(){
    document.getElementById("DropdownModalone").style.display="none";
}

function DropdownModalDeepOpen(){
    document.getElementById("DropdownModalDeep").style.display="flex";
}
function DropdownModalDeepClose(){
    document.getElementById("DropdownModalDeep").style.display="none";
}

const TabledataArray = [
    { col1: 'Row 1', col2: 'Row1', col3: 'Row 1' },
];

function populateTable() {
    var tableBody = document.getElementById("arrayTable").getElementsByTagName('tbody')[0];
        TabledataArray.map((rowData) => {
        let newRow = tableBody.insertRow();

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);

        cell1.innerHTML = rowData.col1;
        cell2.innerHTML = rowData.col2;
        cell3.innerHTML = rowData.col3;
    });
}

window.onload=populateTable;

const animatedElement = document.querySelector('#arrayTable');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll',
    function() {
    if (isInViewport(animatedElement)) {
        animatedElement.classList.add('visible');
    }
});

function scre() {
    if (isInViewport(animatedElement)) {
        animatedElement.classList.add('visible');
    }
}


function addRow() {
    var table = document.getElementById("arrayTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = `${document.getElementById("cOneData").value}`;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = `${document.getElementById("cTwoData").value}`;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = `${document.getElementById("cThreeData").value}`;

    document.getElementById("cOneData").value="";
    document.getElementById("cTwoData").value="";
    document.getElementById("cThreeData").value="";
}