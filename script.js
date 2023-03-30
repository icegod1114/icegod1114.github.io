const submitBtn = document.querySelector('[data-action="submit"]');
submitBtn.addEventListener("click", processFormData);

function processFormData(e) {
  // 方法 1-1：getElementById - 從 input
  // const nameElement = document.getElementById("name");
  // const name = nameElement.value;
  // const emailElement = document.getElementById("email");
  // const email = emailElement.value;

  // 方法 1-2：getElementById - 從 form
  // const formElement = document.getElementById("form");
  // const name = formElement[0].value;
  // const email = formElement[1].value;

 

  // 方法 2：getElementsByTagName
  
  // const inputElement = document.getElementsByTagName('input');
  // const name = inputElement[0].value;
  // const email = inputElement[1].value;

  // 方法 3：getElementsByName
  // const nameElement = document.getElementsByName('name');
  // const name = nameElement[0].value;
  // const emailElement = document.getElementsByName('email');
  // const email = emailElement[0].value;

  // 方法 4：取得表單元素
  //取得 name 屬性為 form 的表單
  const form = document.forms['form'];
  //取 elements 集合中 name 屬性為 name 的值
  const acc1 = form.elements.acc1.value;
  //取 elements 集合中 name 屬性為 email 的值
  const pd1 = form.elements.pd1.value;

  if (acc1=='tank'){
    if (pd1=='1114'){
        alert('您的數學成績為100分');
    }
    else{
        alert('帳號密碼錯誤');
    }
  }
  else{
    alert('帳號密碼錯誤');
  }
}