"use strict";

{
  //タスクリスト
  // document.querySelector("button").addEventListener("click", () => {
  //   const li = document.createElement("li");
  //   const text = document.querySelector("input");
  //   li.textContent = text.value;
  //   document.querySelector("ul").appendChild(li);
  //   text.value = "";
  //   text.focus();
  // });
}

{
  //タスクリスト　エンターキーで送信
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit");
    const li = document.createElement("li");
    const text = document.querySelector("input");
    li.textContent = text.value;
    document.querySelector("ul").appendChild(li);
    text.value = "";
    text.focus();
  });
}

