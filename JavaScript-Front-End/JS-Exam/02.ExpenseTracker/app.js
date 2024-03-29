function solve() {
    const expenseTypeInput = document.getElementById("expense");
    const amInput = document.getElementById("amount");
    const dateInput = document.getElementById("date");
    const addBtn = document.getElementById("add-btn");
    const prList = document.getElementById("preview-list");
    const expList = document.getElementById("expenses-list");
    const deleteButton = document.querySelector(".btn.delete");
  
    addBtn.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (!expenseTypeInput.value || !amInput.value || !dateInput.value) {
        return;
      }
  
      const typeParagraph = document.createElement("p");
      typeParagraph.textContent = `Type: ${expenseTypeInput.value}`;
  
      const amountParagraph = document.createElement("p");
      amountParagraph.textContent = `Amount: ${amInput.value}$`;
  
      const dateParagraph = document.createElement("p");
      dateParagraph.textContent = `Date: ${dateInput.value}`;
  
      const articleElement = document.createElement("article");
      articleElement.appendChild(typeParagraph);
      articleElement.appendChild(amountParagraph);
      articleElement.appendChild(dateParagraph);
  
      const editButton = document.createElement("button");
      editButton.textContent = "edit";
      editButton.classList.add("btn");
      editButton.classList.add("edit");
  
      const okButton = document.createElement("button");
      okButton.textContent = "ok";
      okButton.classList.add("btn");
      okButton.classList.add("ok");
  
      const buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("buttons");
      buttonsDiv.appendChild(editButton);
      buttonsDiv.appendChild(okButton);
  
      const listItem = document.createElement("li");
      listItem.classList.add("expense-item");
      listItem.appendChild(articleElement);
      listItem.appendChild(buttonsDiv);
  
      prList.appendChild(listItem);
  
      addBtn.disabled = true;
  
      clearForm();
  
      editButton.addEventListener("click", (e) => {
        expenseTypeInput.value = typeParagraph.textContent.split(": ")[1];
        amInput.value = amountParagraph.textContent
          .split(": ")[1]
          .split("$")[0];
        dateInput.value = dateParagraph.textContent.split(": ")[1];
  
        prList.removeChild(listItem);
  
        addBtn.disabled = false;
      });
  
      okButton.addEventListener("click", (e) => {
        buttonsDiv.remove();
  
        expList.appendChild(listItem);
        prList.removeChild(listItem);
  
        addBtn.disabled = false;
      });
  
      deleteButton.addEventListener("click", (e) => {
        location.reload();
      });
    });
  
    function clearForm() {
      expenseTypeInput.value = "";
      amInput.value = "";
      dateInput.value = "";
    }
  }