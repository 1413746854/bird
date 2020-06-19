var bird = {
  startColor : 'blue',
  speed : 2,
  num : 0,
  birdStyle : -30,
  birdStyleNum : -30,
  birdTop : 235,
     init : function(){
      this.storeroom();
      this.startHtml();
     },
     startHtml : function(){
       setInterval(() =>{
         ++this.num;
        this.background();
        // this.birdwing();
        if(this.num % 10 === 0){
          this.startBound();
          this.birdFly();
         }
       },30)
      
     },storeroom : function(){
      this.el = document.getElementById('game');
      this.oBird = this.el.getElementsByClassName('bird')[0];
      this.oStart = this.el.getElementsByClassName('start')[0];
     },
     //开始文字跳动
     startBound : function(){
        var prevColor = this.startColor;
        this.startColor = prevColor === 'blue'?'white':'blue';
        this.oStart.classList.remove('start-' + prevColor);
        this.oStart.classList.add('start-' + this .startColor);
 
     },
     //背景移动
     background : function(){
      this.speed -= 2;
          this.el.style.backgroundPositionX = this.speed + 'px';
     },
    //  //小鸟扇翅膀
    //  birdwing : function(){
    //    if(this.birdStyle === -60){
    //     this.birdStyleNum = this.birdStyleNum * -1
    //    }else if(this.birdStyle === 0){
    //     this.birdStyleNum = this.birdStyleNum * -1
    //    }
    //    this.birdStyle += this.birdStyleNum;

    //    this.oBird.style.backgroundPositionX  = this.birdStyle + 'px';
    //  },
    //小鸟弹跳
     birdFly : function(){
      this.birdTop = this.birdTop === 220 ? 260 :220;
       this.oBird.style.top = this.birdTop + 'px';
     }
     //碰撞
     birdCrash : function(){
       
     }
}