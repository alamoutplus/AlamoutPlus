const buttons = document.querySelectorAll(".order-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const item = button.getAttribute("data-item");

    // پرسیدن تعداد از مشتری
    const quantity = prompt(`چند عدد "${item}" می‌خواهید؟`, "1");

    // بررسی اینکه عدد وارد شده معتبر باشه
    if (quantity && !isNaN(quantity) && Number(quantity) > 0) {
      alert(`✅ سفارش شما برای "${item}" با تعداد ${quantity} ثبت شد.`);
      console.log("سفارش ثبت شد:", item, quantity);

      // در مرحله بعدی اینجا سفارش رو به Firebase می‌فرستیم
    } else {
      alert("❌ لطفاً یک عدد معتبر وارد کنید.");
    }
  });
});
