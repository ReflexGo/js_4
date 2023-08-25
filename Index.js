function btnClick()
{
 if(document.test1.sex[0].checked) {
 document.test1.sex[1].click();
}else{
 document.test1.sex[0].click();
}
}

function btnClick2() {
    let sI = document.test2.item.selectedIndex;
    let txt = "";
    txt = "Запропоновано " + document.test2.item.length + " напоїв" +
      "\nВибраний " + document.test2.item.options[sI].text +
      " (value=" + document.test2.item.options[sI].value +
      ", index=" + document.test2.item.options[sI].index + ")";
    
    alert(txt);
  }

  for(i=0;i<document.links.length;i++) {
    // Створення i-елемента списку та запис до нього посилання
    document.sel.listOfLinks.options[i] =new Option(
    document.links[i],
    i,
    false,
    false
   );
   }
    // Виділення першого елемента у списку
    document.sel.listOfLinks.selectedIndex=0;
   
function Complete(){
    let elem = `Прізвище: ${document.sel1.family.value} \n
    імя: ${document.sel1.name.value} \n
    рік: ${document.sel1.age.value} \n
    телефон: ${document.sel1.phone.value} \n
    `
    alert(elem)
}
function CheckAge(value) {
    const age = parseInt(value, 10);
    if (age < 18) {
        return '18';
    } else {
        return age.toString();
    }
}