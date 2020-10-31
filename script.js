'use strict'

function DomElement (selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  };
  DomElement.prototype.selectorBlock = function (){
        let div; 
            for (let i=0; i < this.selector.length; i++){
              if(this.selector[i] === "."){
                div= document.createElement('div');
                div.classList.add(this.selector.substring(1));
              }else if(this.selector[i] === '#'){
                div = document.createElement('div');         
                div.id = this.selector.substring(1) ;
              }
            }
            // div.style.cssText=
            // `height: 100px;
            // width: 100px;
            // background: red;
            // font-size: 28px;
            // `;    

            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.background = this.bg;
            div.style.fontSize = this.fontSize + 'px';

          div.innerText= "Курс по JS"; 
            document.body.prepend(div);//выводим на экран
        return div;
      }


const domElement = new DomElement('.block', 100, 100, 'yellow', 28);

console.log(domElement.selectorBlock());
