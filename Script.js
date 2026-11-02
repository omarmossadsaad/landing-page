document.getElementById("f").addEventListener("submit", function (ev) {
  ev.preventDefault();
  var m = document.getElementById("msg"),
    n = this.name.value.trim(),
    p = this.phone.value.trim(),
    e = this.email.value.trim();

  if (!n || !/^[0-9+\s-]{8,15}$/.test(p) || !/^\S+@\S+\.\S+$/.test(e)) {
    m.style.color = "#dc2626";
    m.textContent = "من فضلك راجع البيانات المدخلة.";
    return;
  }

  m.style.color = "";
  m.textContent = "تم استلام طلبك، سنتواصل معك قريبًا ✓";
  this.reset();
});
