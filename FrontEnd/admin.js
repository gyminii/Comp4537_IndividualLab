const create_btn = document.getElementById("create_btn");
const delete_btn = document.getElementById("delete_btn");
const save_btn = document.getElementById("save_btn");

const sql = "SELECT * FROM Q_table";

create_btn.addEventListener("click", () => {
  const forms = document.getElementsByTagName("form");
  const form = forms[forms.length - 1];

  const copyForm = form.cloneNode(true);
  const copyFormChoices = copyForm.getElementsByClassName("choice");
  const copyFormRadios = copyForm.getElementsByClassName("radio");
  const copyFormTextarea = copyForm.getElementsByTagName("textarea");

  for (let choice of copyFormChoices) {
    choice.value = "";
  }

  for (let radio of copyFormRadios) {
    radio.checked = false;
  }

  copyFormTextarea[0].value = "";

  copyForm.firstElementChild.innerHTML =
    "Question " + (document.getElementsByTagName("form").length + 1);
  document.getElementById("question").appendChild(copyForm);
});

save_btn.addEventListener("click", () => {
  const question_textarea = document.querySelector(".textarea").value;
  const a1 = document.querySelector(".a1").value;
  const a2 = document.querySelector(".a2").value;
  const a3 = document.querySelector(".a3").value;
  const a4 = document.querySelector(".a4").value;

  let reqBody = {
    question: question_textarea,
    a1: a1,
    a2: a2,
    a3: a3,
    a4: a4,
  };

  fetch("http://localhost:3333/admin/save", {
    method: "post",
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("저장완료");
      }
    });
});
