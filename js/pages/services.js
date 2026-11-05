// fixed navbar ke neeche anchor links na chhupen
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        var t = id.length > 1 && document.querySelector(id);
        if (!t) return;
        e.preventDefault();
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
      });
    });

    // form validation (backend yahan jodna hai: fetch / form action)
    var form = document.getElementById('requestForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
      // TODO: yahan apna API call / Django endpoint lagao
      document.getElementById('formAlert').classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
    });
