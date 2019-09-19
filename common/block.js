// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function(){ // <body onload="">와 동일하게 자동으로 실행됨(body에 쓰는 onload가 더 우선 순위, body와 중복되게 있으면 body의 onload만 실행됨)
    console.log(myGameArea.message.docIsReady);
    myGameArea.start();   // 페이지가 로딩될 때 myGameArea.start() 함수를 호출
    this.myGamePiece = new Component(30,30,"red",10,120);  // 페이지 로딩될 때 생성자 함수로 객체 생성
    this.myGamePiece
}
var myGamePiece;   // 전역 변수 myGamePiece 설정

// 환경 정보를 가진 객체
var myGameArea = { // 필요한 모든 속성을 집어넣음
    canvas : document.createElement("canvas"),
    message : {
        docIsReady : "문서가 준비되었습니다"
    },
    key: false,
    
    start : function(){   
        this.canvas.width = 480;
        this.canvas.height = 270;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context = this.canvas.getContext("2d");   // this : myGameArea를 가리킴
        // 타이머 적용
        this.interval = setInterval(updateGameArea, 20);   // 초당 50번 updateGameArea()를 호출
        this.btns = document.querySelectorAll(".controll button");
        this.btns[0].addEventListener("mousedown", moveUp);
        this.btns[0].addEventListener("mouseup", moveStop);
        this.btns[1].addEventListener("mousedown", moveLeft);
        this.btns[1].addEventListener("mouseup", moveStop);
        this.btns[3].addEventListener("mousedown", moveDown);
        this.btns[3].addEventListener("mouseup", moveStop);
        window.addEventListener("keydown", function(e){
            myGameArea.key = e.keyCode;
        })
        window.addEventListener("keyup", function(e){
            myGameArea.key = false;
        })
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);  // 0,0부터 canvas의 가로 세로까지 내용물을 전부 지움
    }
}

// 컴포넌트 생성자 함수
function Component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    // 외부 실행을 위해 함수에 포함
    this.update = function(){   // Component.update()를 호출하면 객체를 다시 그림
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);   // 컴포넌트 생성자로 만들 객체 정보 설정
    }
    this.newPos = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}
function moveUp(){
    myGamePiece.speedY -= 1;
}
function moveDown(){
    myGamePiece.speedY += 1;
}
function moveRight(){
    myGamePiece.speedX += 1;
}
function moveLeft(){
    myGamePiece.speedX -= 1;
}
function moveStop(){
    myGamePiece.speedX = myGamePiece.speedY = 0;
}

// 화면 제어를 위한 함수
function updateGameArea(){
    var mGAkey = myGameArea.key;
    myGameArea.clear();   // myGameArea.clear()를 호출하여 그림을 그리기 전에 계속 지움
    if(mGAkey && mGAkey === 37) myGamePiece.speedX = -1
    if(mGAkey && mGAkey === 39) myGamePiece.speedX = 1
    if(mGAkey && mGAkey === 38) myGamePiece.speedY = -1
    if(mGAkey && mGAkey === 40) myGamePiece.speedY = 1
    if(!mGAkey) moveStop();
    myGamePiece.newPos();
    myGamePiece.update();   // Component의 객체를 다시 그림
}