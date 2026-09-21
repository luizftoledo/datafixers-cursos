const blockMap=[{from:1,label:'Abertura'},{from:3,label:'Ferramentas'},{from:15,label:'Vibecoding'},{from:28,label:'Sites'},{from:33,label:'Divulgação'},{from:35,label:'Plugins e automação'}];
Reveal.initialize({hash:true,slideNumber:true,controls:true,progress:true,center:true,transition:'none',width:1200,height:700,margin:.04});
const nav=document.getElementById('slide-nav');
blockMap.forEach(b=>{const a=document.createElement('a');a.textContent=b.label;a.onclick=()=>{Reveal.slide(b.from-1);nav.classList.remove('open')};nav.appendChild(a)});
document.getElementById('menu-toggle').onclick=()=>nav.classList.toggle('open');
function block(n){let label=blockMap[0].label;blockMap.forEach(b=>{if(n>=b.from)label=b.label});return label}
function update(){const total=document.querySelectorAll('.reveal .slides>section').length;const cur=(Reveal.getIndices().h||0)+1;document.getElementById('cb-block').textContent=block(cur);document.getElementById('cb-counter').textContent=String(cur).padStart(2,'0')+' / '+String(total).padStart(2,'0');document.getElementById('cb-track').style.width=(cur/total*100)+'%'}
Reveal.on('ready',update);Reveal.on('slidechanged',update);
