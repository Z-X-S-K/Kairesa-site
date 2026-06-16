const root=document.documentElement;const saved=localStorage.getItem('kairesa-theme');if(saved)root.dataset.theme=saved;
document.querySelector('.theme-toggle').addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;localStorage.setItem('kairesa-theme',next)});
const menu=document.querySelector('.nav'),toggle=document.querySelector('.menu-toggle');toggle.addEventListener('click',()=>{menu.classList.toggle('open');toggle.setAttribute('aria-expanded',menu.classList.contains('open'))});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('copyEmail').addEventListener('click',async()=>{await navigator.clipboard.writeText('hello@kairesa.com');document.getElementById('formStatus').textContent='Email address copied.'});
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const subject=encodeURIComponent(`Kairesa project inquiry - ${f.get('project')}`);const body=encodeURIComponent(`Name: ${f.get('name')}
Email: ${f.get('email')}
Organization: ${f.get('organization')}
Project type: ${f.get('project')}

Project summary:
${f.get('message')}`);document.getElementById('formStatus').textContent='Opening your email application…';window.location.href=`mailto:hello@kairesa.com?subject=${subject}&body=${body}`});