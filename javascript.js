

function random_dominion()
{
  var list = ["개조", "관료", "광산", "대금업자", "대장장이", "도서관", "마을", "민병대", "시장", "실험실", "알현실", "예배당", "저장고", "정원", "작업장", "해자", "회의실", "장인", "선구자", "상인", "밀렵꾼", "보초병", "신하"];

  var newList = []
  while(newList.length < 10){
    var movenum = list.splice(Math.floor(Math.random() * list.length),1)[0]
    newList.push(movenum);
  }
  console.log(newList);
}
