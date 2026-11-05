var POSTS = [
      {
        id: 1, cat: "Buying Guide", icon: "bi-house-up-fill", date: "Oct 12, 2026", read: "5 min",
        image: "assets/images/blog-home.jpg",
        title: "Is a Home Elevator Right for Your House? A Simple Checklist",
        excerpt: "Before you shop, check space, budget, family needs and future plans. Here is an easy checklist to start with.",
        body: ["A home elevator is not only for large villas. Compact models can fit into many two- and three-storey homes, which makes them a practical choice for families planning ahead.", "Start with the people who will use it: elderly parents, young children, anyone with limited mobility, or simply those tired of carrying groceries and laundry upstairs. Then look at your floor plan to see where a shaft or a shaft-free model could sit with the least disruption.", "Finally, think about budget in two parts: the cost of installation and the cost of keeping the lift in good shape over the years. A good supplier will survey your home and explain both clearly."]
      },
      {
        id: 2, cat: "Safety", icon: "bi-shield-check", date: "Oct 5, 2026", read: "4 min",
        image: "assets/images/blog-safety.jpg",
        title: "Key Safety Features to Look for in a Home Lift",
        excerpt: "From emergency lighting to door interlocks, these are the safety basics every home elevator should have.",
        body: ["Safety should be the first thing you compare, before design or finish. Look for door interlocks that keep the cabin from moving when a door is open, and an emergency alarm or intercom you can reach from inside.", "Backup lighting and a manual or battery-powered lowering option help during power cuts. Smooth start and stop, along with overspeed protection, also add comfort and security.", "Ask the installer which standards the lift follows and request the details in writing. A transparent answer is a good sign."]
      },
      {
        id: 3, cat: "Maintenance", icon: "bi-tools", date: "Sep 28, 2026", read: "4 min",
        image: "assets/images/blog-maintenance.jpg",
        title: "Why Regular Lift Maintenance Saves Money in the Long Run",
        excerpt: "Small checks done on time prevent big breakdowns. Learn what a good service visit should cover.",
        body: ["Like any machine you use daily, a lift performs best with routine care. Scheduled visits let technicians catch worn parts, loose fittings or alignment issues before they turn into a breakdown.", "A typical service covers door operation, cabin and shaft cleaning, lubrication, safety device checks, and a review of the control system. Keeping a simple service log helps you track what was done and when.", "If you notice unusual noise, jerky movement or doors that hesitate, call for service instead of waiting for the next scheduled visit."]
      },
      {
        id: 4, cat: "Design", icon: "bi-palette-fill", date: "Sep 20, 2026", read: "5 min",
        image: "assets/images/blog-design.jpg",
        title: "Designing a Home Elevator That Matches Your Interiors",
        excerpt: "Glass, wood or metal? Cabin finishes, lighting and colours that blend with your home’s style.",
        body: ["Modern home elevators can look like part of the interior rather than an add-on. Cabin finishes range from warm wood tones to brushed metal and glass panels that keep the space feeling open.", "Lighting makes a big difference. Soft, even lighting feels welcoming, while a few accent lights can highlight the cabin’s details. Match flooring and handrails to the rest of your home for a seamless look.", "Bring photos of your living spaces when you talk to a supplier so the design team can suggest finishes that fit."]
      },
      {
        id: 5, cat: "Technology", icon: "bi-cpu-fill", date: "Sep 11, 2026", read: "4 min",
        image: "assets/images/blog-tech.jpg",
        title: "Shaft-Free Home Elevators: How They Work and Who They Suit",
        excerpt: "No civil shaft, faster installation. Understand where shaft-free lifts make the most sense.",
        body: ["Traditional lifts need a dedicated concrete shaft, which is difficult in existing homes. Shaft-free designs use a self-supporting structure, so the installation is simpler and causes less disruption.", "They are popular in renovations, where adding a lift after construction would otherwise mean major structural work. Space, floor height and ceiling openings still need to be checked on site.", "A site survey is the best way to confirm whether a shaft-free model suits your house."]
      },
      {
        id: 6, cat: "Buying Guide", icon: "bi-cash-coin", date: "Aug 30, 2026", read: "6 min",
        image: "assets/images/blog-cost.jpg",
        title: "Understanding the Cost of a Home Elevator: What Affects the Price",
        excerpt: "Number of floors, capacity, finishes and site conditions all play a part. Here is how to read a quotation.",
        body: ["There is no single price for a home elevator because every house is different. The number of floors served, cabin size, load capacity, door type and interior finish all change the cost.", "Site conditions matter too: whether you need civil work, how easy it is to bring equipment in, and any structural changes. Always ask for an itemised quotation so you can compare like with like.", "Remember to include maintenance in your planning. A clear service plan is as important as the lift itself."]
      },
      {
        id: 7, cat: "Safety", icon: "bi-people-fill", date: "Aug 18, 2026", read: "3 min",
        image: "assets/images/blog-safety.jpg",
        title: "Home Elevator Safety Tips for Kids and Senior Citizens",
        excerpt: "Simple household rules that keep every family member safe while using the lift.",
        body: ["Children should use the lift with an adult until they understand how it works. Teach them not to lean on doors, jump in the cabin or press buttons repeatedly.", "For senior citizens, a comfortable handrail, good lighting and a level cabin entry make daily use easier. Keep the cabin free of clutter and make sure everyone knows how to use the alarm or intercom.", "A short family walkthrough after installation helps everyone feel confident."]
      },
      {
        id: 8, cat: "Maintenance", icon: "bi-clipboard2-check-fill", date: "Aug 7, 2026", read: "4 min",
        image: "assets/images/blog-maintenance.jpg",
        title: "Daily Habits That Keep Your Home Lift Running Smoothly",
        excerpt: "A few simple habits can extend the life of your elevator between professional service visits.",
        body: ["Wipe the cabin and door tracks regularly so dust does not build up. Avoid overloading the lift and keep liquids and heavy sharp objects away from the floor and doors.", "If the lift behaves differently, such as slower doors or a slight shake, note it down and inform your service team. Early reporting makes repairs quicker and cheaper.", "Never try to repair or adjust lift components yourself. Leave that to trained technicians."]
      },
      {
        id: 9, cat: "Technology", icon: "bi-phone-fill", date: "Jul 25, 2026", read: "4 min",
        image: "assets/images/blog-tech.jpg",
        title: "Smart Features That Make Modern Home Lifts More Convenient",
        excerpt: "Remote call, status alerts and energy-saving modes: what smart controls can do for your home.",
        body: ["Smart controls are becoming common in modern lifts. Features such as automatic standby, energy-saving lighting and clear on-board displays improve everyday use.", "Some systems can also send status information to the service team, which helps them plan maintenance more accurately.", "Ask which smart features are available for your chosen model and which of them you actually need."]
      }
    ];
    var cats = ["All"].concat(Array.from(new Set(POSTS.map(function (p) { return p.cat; }))));
    var active = "All", q = "";
    var grid = document.getElementById('grid'), empty = document.getElementById('empty'), filters = document.getElementById('filters'), feat = document.getElementById('featuredWrap');
    var modalEl = document.getElementById('postModal'), modal = new bootstrap.Modal(modalEl);

    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function themeClass(p) { return 'post-theme-' + p.id; }

    function renderFilters() {
      filters.innerHTML = cats.map(function (c) { return '<button type="button" class="filter-btn' + (c === active ? ' active' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + '</button>'; }).join('');
    }
    function renderFeatured() {
      var p = POSTS[0];
      feat.innerHTML = '<div class="featured"><div class="row g-0"><div class="col-lg-5"><div class="thumb h-100"><img src="' + p.image + '" alt="' + esc(p.title) + '" style="width:100%;height:100%;object-fit:cover;display:block;"></div></div>' +
        '<div class="col-lg-7"><div class="p-4 p-md-5"><span class="badge badge-cat mb-3">Featured · ' + esc(p.cat) + '</span>' +
        '<h2 class="fw-bold text-dark mb-3">' + esc(p.title) + '</h2><p class="mb-3">' + esc(p.excerpt) + '</p>' +
        '<div class="small text-secondary mb-4"><i class="bi bi-calendar3 me-1"></i>' + p.date + ' &nbsp;·&nbsp; <i class="bi bi-clock me-1"></i>' + p.read + ' read</div>' +
        '<button class="btn btn-skyluxe" data-open="' + p.id + '">Read Article</button></div></div></div></div>';
    }
    function renderGrid() {
      var list = POSTS.slice(1).filter(function (p) {
        var okCat = active === "All" || p.cat === active;
        var okQ = !q || (p.title + ' ' + p.excerpt + ' ' + p.cat).toLowerCase().indexOf(q) > -1;
        return okCat && okQ;
      });
      grid.innerHTML = list.map(function (p) {
        return '<div class="col-md-6 col-lg-4"><article class="post-card d-flex flex-column"><div class="post-thumb"><img src="' + p.image + '" alt="' + esc(p.title) + '" style="width:100%;height:100%;object-fit:cover;display:block;"></div>' +
          '<div class="p-4 d-flex flex-column flex-grow-1"><span class="badge badge-cat align-self-start mb-3">' + esc(p.cat) + '</span>' +
          '<h3 class="h5 fw-bold text-dark">' + esc(p.title) + '</h3><p class="small flex-grow-1">' + esc(p.excerpt) + '</p>' +
          '<div class="d-flex justify-content-between align-items-center small text-secondary mt-2"><span><i class="bi bi-calendar3 me-1"></i>' + p.date + '</span>' +
          '<button class="read-link" data-open="' + p.id + '">Read more <i class="bi bi-arrow-right"></i></button></div></div></article></div>';
      }).join('');
      empty.classList.toggle('d-none', list.length > 0);
    }
    function openPost(id) {
      var p = POSTS.filter(function (x) { return x.id == id; })[0]; if (!p) return;
      document.getElementById('pmCat').textContent = p.cat;
      document.getElementById('postModalTitle').textContent = p.title;
      document.getElementById('pmMeta').textContent = p.date + ' · ' + p.read + ' read';
      document.getElementById('pmBody').innerHTML = p.body.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
      modal.show();
    }
    document.addEventListener('click', function (e) {
      var f = e.target.closest('[data-cat]'); if (f) { active = f.getAttribute('data-cat'); renderFilters(); renderGrid(); return; }
      var o = e.target.closest('[data-open]'); if (o) { openPost(o.getAttribute('data-open')); }
    });
    document.getElementById('search').addEventListener('input', function () { q = this.value.trim().toLowerCase(); renderGrid(); });
    renderFilters(); renderFeatured(); renderGrid();
