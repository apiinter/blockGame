// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function(){ // <body onload="">와 동일하게 자동으로 실행됨(body에 쓰는 onload가 더 우선 순위, body와 중복되게 있으면 body의 onload만 실행됨)
    console.log(myGameArea.message.docIsReady);
    myGameArea.start();   // 페이지가 로딩될 때 myGameArea.start() 함수를 호출
    this.myGamePiece = new Component(30,30,"red",10,120);  // 페이지 로딩될 때 생성자 함수로 객체 생성
}
var myGamePiece;   // 전역 변수 myGamePiece 설정

// 환경 정보를 가진 객체
var myGameArea = { // 필요한 모든 속성을 집어넣음
    canvas : document.createElement("canvas"),
    message : {
        docIsReady : "문서가 준비되었습니다"
    },
    start : function(){   
        this.canvas.width = 480;
        this.canvas.height = 270;
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.context = this.canvas.getContext("2d");   // this : myGameArea를 가리킴
    }
}

// 컴포넌트 생성자 함수
function Component(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);   // 컴포넌트 생성자로 각가 만들 객체
}