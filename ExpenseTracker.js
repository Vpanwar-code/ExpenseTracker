function saveToLocalStorage(event){
    event.preventDefault();
    const amountOf=event.target.amount.value;
    const descriptionOf=event.target.description.value;
    const categoryOf=event.target.category.value;
    localStorage.setItem('amountt',amountOf);
    localStorage.setItem('descriptionn',descriptionOf);
    localStorage.setItem('categoryy',categoryOf);
    const obj={
      amountOf,
      descriptionOf,
      categoryOf
    }
    localStorage.setItem('expensedetails', JSON.stringify(obj));
    showUserOnScreen(obj);

    function showUserOnScreen(obj){
        const parentele=document.getElementById('display');
        const childele=document.createElement('li');
        childele.textContent=obj.amountOf+' _ '+obj.descriptionOf+' _ '+obj.categoryOf;
        

        const deletebtn=document.createElement('input');
        deletebtn.type='button';
        deletebtn.value='delete';
        deletebtn.onclick = () =>{
            localStorage.removeItem(obj.amountOf);
            parentele.removeChild(childele);
           
        }

        const editbtn=document.createElement('input');
        editbtn.type='button';
        editbtn.value='Edit';
        editbtn.onclick = () =>{
            localStorage.removeItem(obj.amountOf);
            parentele.removeChild(childele);
            document.getElementById('amount').value=obj.amountOf;
            document.getElementById('description').value=obj.descriptionOf;
            document.getElementById('category').value=obj.categoryOf;
            childele.textContent=obj.amountOf+' _ '+obj.descriptionOf+' _ '+obj.categoryOf;
        }

        childele.appendChild(deletebtn);
         childele.appendChild(editbtn);
        parentele.appendChild(childele);
    }
}