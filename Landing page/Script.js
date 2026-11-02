var ENDPOINT = 'c690c473-2f64-449b-bc48-007181cc39f0';
document.getElementById("f").addEventListener("submit", function (ev) {
  ev.preventDefault();
  var form = this,
    m = document.getElementById("msg"),
    n = form.name.value.trim(),
    p = form.phone.value.trim(),
    e = form.email.value.trim();

  if (!n || !/^[0-9+\s-]{8,15}$/.test(p) || !/^\S+@\S+\.\S+$/.test(e)) {
    m.style.color = "#dc2626";
    m.textContent = "من فضلك راجع البيانات المدخلة.";
    return;
  }

  m.style.color = "";
  m.textContent = "جاري الإرسال...";

  fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name: n, phone: p, email: e }),
  })
      .then(function (res) {
    return res.text().then(function (t) {
      if (!res.ok) {
        m.style.color = '#dc2626';
        m.textContent = 'خطأ ' + res.status + ': ' + t.slice(0, 150);
        return;
      }
      m.textContent = 'تم استلام طلبك، سنتواصل معك قريبًا ✓';
      form.reset();
    });
  })
  .catch(function (err) {
    m.style.color = '#dc2626';
    m.textContent = 'مشكلة اتصال: ' + err.message;
  });
