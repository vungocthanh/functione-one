function procesConfirm(answer){
   var result = '';
   if (answer){
      result = " Excelent. We'll play nice game of chess"
   }else{
      result = "My be late then"
   }
   return result;

}
let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = procesConfirm(confirmAnswer);
alert(theAnswer);