// پیدا کردن همه دکمه‌هایی که کلاس order-button دارن
const buttons = document.querySelectorAll(".order-button");

// اضافه کردن رویداد کلیک به هر دکمه
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const item = button.getAttribute("data-item"); // گرفتن نام آیتم از data-item
    const quantity = 1; // فعلاً تعداد رو ۱ در نظر می‌گیریم

    // نمایش پیام تأیید سفارش
    alert(`✅ سفارش شما برای "${item}" با تعداد ${quantity} ثبت شد.`);

    // در مرحله بعدی اینجا سفارش رو به Firebase می‌فرستیم
    console.log("سفارش ثبت شد:", item, quantity);
  });
});
