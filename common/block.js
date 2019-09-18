// 문서가 준비(html, 이미지, 스크립트, 스타일 등)되면 실행
window.onload = function(){ // <body onload="">와 동일하게 자동으로 실행됨(body에 쓰는 onload가 더 우선 순위, body와 중복되게 있으면 body의 onload만 실행됨)
    console.log(myGameArea.message.docIsReady);
}

// 환경 정보를 가진 객체
var myGameArea = { // 필요한 모든 속성을 집어넣음
    message : {
        docIsReady : "문서가 준비되었습니다"
    }
}