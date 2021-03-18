const create_btn = document.getElementById("create_btn");
const delete_btn = document.getElementById("delete_btn");
const save_btn = document.getElementById("save_btn");

create_btn.addEventListener("click", () => {
    const forms = document.getElementsByTagName("form");
    const form = forms[forms.length -1];

    const copyForm = form.cloneNode(true);
    const copyFormChoices = copyForm.getElementsByClassName("choice");
    const copyFormRadios = copyForm.getElementsByClassName("radio");
    const copyFormTextarea = copyForm.getElementsByTagName("textarea")

    for(let choice of copyFormChoices) {
        choice.value = "";
    }

    for(let radio of copyFormRadios) {
        radio.checked = false;
    }

    copyFormTextarea[0].value = "";

    copyForm.firstElementChild.innerHTML = "Question " + (document.getElementsByTagName("form").length + 1);
    document.getElementById("question").appendChild(copyForm);
});
save_btn.addEventListener("click", () => {
    let tmp = document.getElementsByTagName('textarea').value;
    
})