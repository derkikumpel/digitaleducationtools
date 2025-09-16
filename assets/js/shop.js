async function renderShop(jsonPath){
  try{
    const res = await fetch(jsonPath);
    const items = await res.json();
    const el = document.getElementById('products');
    el.innerHTML = items.map(p => `
      <article class="card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        ${p.subtitle ? `<p>${p.subtitle}</p>` : ``}
        <p class="price">${p.price}</p>
        <a class="btn" href="${p.checkout_url}">${p.cta || 'Jetzt herunterladen'}</a>
      </article>
    `).join('');
  }catch(e){
    console.error(e);
    document.getElementById('products').innerHTML = '<p>Produkte konnten nicht geladen werden.</p>';
  }
}
