// pemrograman memusingkan
let todos = [];

function renderList() {
  const listContainer = document.getElementById("taskList");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  todos.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task";
    const taskText = document.createElement("span");
    taskText.innerHTML = `
      <strong>${task.nama}</strong> | Prioritas: ${task.prioritas} | Tanggal: ${task.tanggal}
    `;
    if (task.selesai) taskText.classList.add("done");

    div.appendChild(taskText);

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-wvBGzlYI9NHjVZBq7wbUHtEWrN3AFI8",
  authDomain: "pasarbarokah-56d6c.firebaseapp.com",
  projectId: "pasarbarokah-56d6c",
  storageBucket: "pasarbarokah-56d6c.appspot.com",
  messagingSenderId: "316348641371",
  appId: "1:316348641371:web:5ad38a561e7d73744acf7e",
  measurementId: "G-NKKFY4X1ZC"
};
// Inisialisasi Firebase
    const selesaiBtn = document.createElement("button");
    selesaiBtn.textContent = task.selesai ? "Batal" : "Selesai";
    selesaiBtn.onclick = () => {
      todos[index].selesai = !todos[index].selesai;
      renderList();
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      const nama = prompt("Edit nama:", task.nama);
      const prioritas = prompt("Edit prioritas:", task.prioritas);
      const tanggal = prompt("Edit tanggal:", task.tanggal);
      if (nama && prioritas && tanggal) {
        todos[index] = { ...todos[index], nama, prioritas, tanggal };
        renderList();
      }
    };

    const hapusBtn = document.createElement("button");
    hapusBtn.textContent = "Hapus";
    hapusBtn.onclick = () => {
      todos.splice(index, 1);
      renderList();
    };

    div.appendChild(selesaiBtn);
    div.appendChild(editBtn);
    div.appendChild(hapusBtn);

    listContainer.appendChild(div);
  });
}

function tambahTodoolist(nama, prioritas, tanggal) {
  todos.push({ nama, prioritas, tanggal, selesai: false });
  alert("Tugas berhasil ditambahkan!");
}