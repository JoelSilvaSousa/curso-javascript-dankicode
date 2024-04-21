var p = document.getElementsByTagName('p');

p[0].innerHTML = 'Manipulado via JS';

for(i = 0;i<p.length;i++){
    p[i].innerHTML = 'Manipulado via JS '+i; 
}