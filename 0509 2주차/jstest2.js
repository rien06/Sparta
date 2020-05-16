<!doctype html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>jQuery 연습하고 가기!</title>

    <!-- jQuery를 import 합니다 -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <style type="text/css">
        div.question-box {
            margin: 10px 0 20px 0;
        }
    </style>

    <script>
        function q1() {
            // 여기에 코드를 입력하세요
        }
    </script>

</head>

<body>
    <h1>jQuery+Ajax의 조합을 연습하자!</h1>

    <hr />

    <div class="question-box">
        <h2>1. 서울시 OpenAPI(실시간 미세먼지 상태)를 이용하기</h2>
        <p>모든 구의 미세먼지를 표기해주세요</p>
        <p>업데이트 버튼을 누를 때마다 지웠다 새로 씌여져야 합니다.</p>
        <button onclick="q1()">업데이트</button>
        <ul id="names-q1">
            <li>중구 : 82</li>
            <li>종로구 : 87</li>
            <li>용산구 : 84</li>
            <li>은평구 : 82</li>
        </ul>
    </div>
</body>

</html>