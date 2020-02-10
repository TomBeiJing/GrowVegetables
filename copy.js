shengji1.onclick = function () {
  let currentPai1 = data.pai[people.number];
  let number =currentPai1.number;
  let status =currentPai1.status;

  if(currentPai1.name === "晴天" ){
    console.log(status);
    console.log(currentPai1.output);
    console.log(currentPai1.output[status]);


    // if (status ===0) {
    //   if (people.sun>=currentPai1.add12[0]&&people.water >= currentPai1.add12[1]&&people.fertilizer >= currentPai1.add12[2]) {
    //     currentPaiOutput();
    //     people.sun -= currentPai1.add12[0];
    //     people.water -= currentPai1.add12[1];
    //     people.fertilizer -= currentPai1.add12[2];
    //     console.log(data.pai[people.number]);
    //     console.log(data.pai);
    //     data.pai[people.number].status = 1;
    //     console.log("bb"+data.pai[people.number]);
    //     passPai();
    //     currentPaiOutput();
    //   }
    // }else if (status ===1) {
    //   if (people.sun>=currentPai1.add24[0]&&people.water >= currentPai1.add24[1]&&people.fertilizer >= currentPai1.add24[2]) {
    //     people.sun -= currentPai1.add24[0];
    //     people.water -= currentPai1.add24[1];
    //     people.fertilizer -= currentPai1.add24[2];
    //     data.pai[people.number].status = 2;
    //     passPai();
    //   }
    // }else if(status ===2){
    //   if (people.sun>=currentPai1.add34[0]&&people.water >= currentPai1.add34[1]&&people.fertilizer >= currentPai1.add24[2]) {
    //     people.sun -= currentPai1.add34[0];
    //     people.water -= currentPai1.add34[1];
    //     people.fertilizer -= currentPai1.add34[2];
    //     data.pai[people.number].status = 3;
    //     passPai();
    //   }
    // }
    if (currentPai1.upGrade1[status] !== undefined) {
      if (people.sun>=currentPai1.upGrade1[status][0]&&people.water >= currentPai1.upGrade1[status][1]&&people.fertilizer >= currentPai1.upGrade1[status][2]) {
        people.sun -= currentPai1.upGrade1[status][0];
        people.water -= currentPai1.upGrade1[status][1];
        people.fertilizer -= currentPai1.upGrade1[status][2];
        data.pai[people.number].status =data.pai[people.number].status+1;
        passPai();
      }
    }


  }else if (currentPai1.name === "施肥"){
    if (status>=1){
      people.sun += currentPai1.output[status][0];
      people.water += currentPai1.output[status][1];
      people.fertilizer += currentPai1.output[status][2];
      passPai();
    }
  }

  poepleScreenOutput();
  console.log(people.number);
  currentPaiOutput();

};