let noShow = {}

const noShowForm = document.getElementById('noShowForm');
noShowForm.addEventListener('submit', collectNoShowForm);

function collectNoShowForm(event) {
    event.preventDefault();
    noShow.fName = document.getElementById('fName').value;
    noShow.lName = document.getElementById('lName').value;
    document.getElementById('no').value = '✔️';
    document.getElementById('no').classList = 'sent';
    console.log(noShow);
}