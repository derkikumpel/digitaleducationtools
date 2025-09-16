(function(){
  const links = document.querySelectorAll('[data-lang-target]');
  if(!links.length) return;
  links.forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = a.getAttribute('data-lang-target'); // 'de'|'en'
      const parts = location.pathname.split('/').filter(Boolean);
      if(parts.length===0){ location.href='/' + target + '/'; return; }
      parts[0]=target;
      const newPath='/' + parts.join('/') + (location.pathname.endsWith('/')?'/':'');
      location.href=newPath.replace(/\/\/+/g,'/');
    });
  });
})();
