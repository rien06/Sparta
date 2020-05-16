$.ajax({
    type: "GET",
    url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
    data: {},
    success: function(response){
          // 값 중 도봉구의 미세먼지 값만 가져와보기
        let dobong = response["RealtimeCityAir"]["row"][11];
        for (let i=0; i < mise_list.length; i++)
          let mise = mise_list[i];
          let gu_name = mise["MSRSTE_NM"];
          let gu_mise = mise["IDEX_MVL"];
      console.log(gu_name, gu_mise);
    }
  })