
document.querySelectorAll(".faq-q").forEach((q)=>{
  q.addEventListener("click",()=>{
    const item=q.closest(".faq-item");
    document.querySelectorAll(".faq-item").forEach((el)=>{
      if(el!==item) el.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});
