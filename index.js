let nameIncome = document.querySelector("#name-input");
let amountCost = document.querySelector("#amount-input");
let sumIncomeExpense = document.querySelector("#add-btn");
let restSum = document.querySelector("#rest-sum");
let unorderedListin = document.querySelector("#un-list-in");
let unorderedListexp = document.querySelector("#un-list-exp");
let incomeForm = document.querySelector("#income-form");
const income = [];

// let editList = document.querySelector('')


incomeForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let addItems = {
    name: nameIncome.value,
    amount: amountCost.value,
    id: Math.random(),
  };
  income.push(addItems);

  addIncomeList();
  
});

function addIncomeList() {
    unorderedListin.innerText = "";

    income.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add('li-income');
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      editButton.textContent = "Edytuj";
      editButton.classList.add('edit-btn', 'li-btn', 'btn', 'btn-outline-light');
      deleteButton.textContent = "Usuń";
      deleteButton.classList.add('delete-btn', 'li-btn', 'btn', 'btn-outline-light');
      // const span = document.createElement("span");
      // span.textContent = `${item.name} : ${item.amount} zł`;
      // span.classList.add('text-in-list');
      // li.appendChild(span);
      let itemName = document.createElement('span');
      itemName.classList.add('item-name');
      let itemNameValue = document.createElement('span');
      itemNameValue.classList.add('item-name-value');
      itemName.textContent = `${item.name}`;
      itemNameValue.textContent = `${item.amount} `;
      let currency = document.createElement('span');
      currency.classList.add('currency');
      currency.textContent = `zł`;
      li.appendChild(itemName);
      li.appendChild(itemNameValue);
      li.appendChild(currency);

      const boxForButtons = document.createElement("span");
      boxForButtons.classList.add("boxButtons");
      li.appendChild(boxForButtons);
      boxForButtons.appendChild(editButton);
      boxForButtons.appendChild(deleteButton);
      const boxForSpan = document.createElement("span")
      boxForSpan.classList.add('boxSpan');
      li.appendChild(boxForSpan);
      const saveButton = document.createElement('button');
      const cancelButton = document.createElement('button');
      saveButton.textContent = "Zapisz";
      saveButton.classList.add('save-btn', 'li-btn', 'display-none', 'btn', 'btn-outline-light');
      cancelButton.textContent = "Anuluj";
      cancelButton.classList.add('cancel-btn', 'li-btn', 'display-none', 'btn', 'btn-outline-light');
      boxForButtons.appendChild(saveButton);
      boxForButtons.appendChild(cancelButton);


      unorderedListin.appendChild(li);


      editButton.addEventListener("click", function () {
        editButton.classList.add("display-none");
        deleteButton.classList.add("display-none");
        saveButton.classList.remove("display-none");
        cancelButton.classList.remove("display-none");
        itemName.setAttribute('contenteditable', 'true');
        itemNameValue.setAttribute('contenteditable', 'true');
      });
  



      saveButton.addEventListener("click", function () {
        editButton.classList.remove("display-none");
        deleteButton.classList.remove("display-none");
        saveButton.classList.add("display-none");
        cancelButton.classList.add("display-none");
        itemName.setAttribute('contenteditable', 'false');
        itemNameValue.setAttribute('contenteditable', 'false');
      });


      // let editButtonOnClick = document.createAttribute("onclick");
      // editButtonOnClick.value = "editItem(this)";
      // editButton.setAttributeNode(editButtonOnClick);
  
      cancelButton.addEventListener("click", function () {
        editButton.classList.remove("display-none");
        deleteButton.classList.remove("display-none");
        saveButton.classList.add("display-none");
        cancelButton.classList.add("display-none");
      });
  
      let deleteButtonOnClick = document.createAttribute("onclick");
      deleteButtonOnClick.value = "deleteItem(this)";
      deleteButton.setAttributeNode(deleteButtonOnClick);
    });
  }
  

  function deleteItem(item) {
    item.parentNode.parentNode.remove();
    // income.pop();
  }

  function editItem(item) {
  
  }

  // let sumInc = 0;

  // let incomeSum = income.reduce((acc, itemNameValue) => {
  //   return acc + itemNameValue;
  // }, 0);
  // let sumIncome = document.querySelector('#sum-income');
  // sumIncome.innerText = `Suma przychodów ${+} zł.`










//   function blabla() {
//  let incomeSum = income.reduce((acc, itemNameValue) => {
//     return acc + itemNameValue;
//   }, 0);

//   console.log(incomeSum);

//   let sumIncome = document.querySelector('#sum-income');
//   sumIncome.appendChild(incomeSum);
// }


  // itemNameValue.textContent = `${item.amount} `;




      // NOWE:
      
    // function createModal() {
    //     modal.classList.add('span-editable-modal');
    //     const modalInput = document.createElement('input');
    //     modalInput.classList.add('input-editable-modal');
    //     const modalText = event.target.textContent;
    //     modalInput.value = modalText;
    //     const saveButton = document.createElement('button');
    //     saveButton.classList.add('save-btn')
    //     saveButton.textContent = 'Zapisz';
    //     modal.appendChild(modalInput);
    //     modal.appendChild(saveButton);
    //     return modal;
    //   }

       

    //   function editTask(event) {
    //     const modal = createModal();
    //     event.li.appendChild(modal);
    //   }

      





  //   let saveButton = document.querySelector(".edit-btn");



  //   document.addEventListener("DOMContentLoaded", function() {
  //     let editButton = document.querySelector(".edit-btn");

  //     myBtn.addEventListener("click", function() {
  //       editButton.classList.add("save-btn");
  //     })
  // });



// NOTATKI DO SUMOWANIA 24.09:

// const sumInc = sumFn(przychody);
// console.log("tuZZ", sumInc);


// function sumFn(income ) {
//   return income .reduce(
//     (previusValue, currentValue) => previusValue + currentValue,
//     0,);
// }





// editButton.addEventListener('click', functiom () {
// let zzzdsgdg = document.querySelector('wallet')

//   });
 


// Dlaczego li dodają się w poziomie a nie pionie?


// do czego się odnosi? nie ma zmiennych i klas.
// dlaczego math.random?
//   name: nameIncome.value,
//   amount: amountCost.value,
//   id: Math.random(),
  