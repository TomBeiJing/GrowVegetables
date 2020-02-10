// 太阳
// 水
// 化肥
// 橘子
// 苹果
// 葡萄

window.onload = function () {
  let btns = document.getElementsByTagName("button");
  let shengji1 = btns[0];
  let shengji2 = btns[1];
  let shengChan = btns[2];
  let pass = btns[3];
  let tradeBtns = document.getElementsByClassName("trade");
  let tradeSun = tradeBtns[0];
  let tradeWater = tradeBtns[1];
  let tradeFertilizer = tradeBtns[2];
  let round = 1;
  let contents = document.getElementsByClassName("content");
  let peopleContent = contents[0];
  let paiContent = contents[1];
  let paiDetails = contents[2];
  let data ={pai:[]};


// 给定数据将其随机排列
  function randomSort2(arr){
    let mixedArr = [];
    while(arr.length > 0){
      let rc = parseInt(Math.random() * arr.length );
      mixedArr.push(arr[rc]);
      arr.splice(rc,1);
    }
    return mixedArr;
  }
// 例子

  //初始化数据函数
  let getPeople = function(){
    let newPai = [];
    let arr1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let randomData = randomSort2(arr1);
    for(let i=0;i<=randomData.length-1;i++){
      newPai[i] = originalData.pai[randomData[i]];
      data.pai = newPai;
    }
  };
  getPeople();

  //计算分数
  let sumScore = function () {
    console.log("分数");
    console.log(data);
    console.log(data.pai.length);
    let point = 0;
    for (let i = 0; i <= data.pai.length-1; i++) {
      console.log("分数");
      let status = data.pai[i].status;
      console.log(status);
      console.log(data.pai[i].point[status]);
      point += data.pai[i].point[status];
      console.log("分数");
      console.log(point);
    }
    return point
  };

//打印状态输出到屏幕
  let poepleScreenOutput = function(){
    let paiNumber = people.number;
    let screenOutput = "太阳:"+people.sun+",水:"+people.water+",化肥:"+people.fertilizer
      +",当前第"+(paiNumber+1)+"张牌,第"+round+"回合";
    console.log(screenOutput);
    peopleContent.innerHTML = screenOutput;
  };
  poepleScreenOutput();

  //打印当前牌
  let currentPaiOutput = function () {
    let currentPai = data.pai[people.number];
    let currentPaiStatus = currentPai.status;
    // let output="当前牌序:"+currentPai.number+",名称:"+currentPai.name+",等级:"+currentPaiStatus
    //   +",分数:"+currentPai.point[currentPaiStatus]+",升级花费:"+currentPai.cost[currentPaiStatus]+",升级产出:"+currentPai.output[currentPaiStatus];
    // console.log(output);
    let output="当前牌序:"+currentPai.number+",名称:"+currentPai.name+",等级:"+currentPaiStatus
      +",分值:"+currentPai.point[currentPaiStatus];
    console.log(output);
    paiContent.innerHTML = output;
    paiDetails.innerHTML = "当前牌详情："+currentPai.details[currentPaiStatus];
  };
  currentPaiOutput();

  //过牌函数
  let passPai = function () {
    if ( people.number < (data.pai.length-1) ) {
      people.number++;
    }else {
      people.number = 0;
      round ++;
      if (round >=9){
        alert("游戏结束");
        round = 1;
        alert("本居得分"+sumScore());
        getPeople();
      }
    }
  };


  let outputPai = function(){
    let i = people.number;
    // console.log(i);
    // console.log(data.pai);
    let j = data.pai[i].status;
    people.sun = people.sun+ data.pai[i].output[j][0];
    people.water = people.water+data.pai[i].output[j][1];
    people.fertilizer = people.fertilizer+data.pai[i].output[j][2];
  };

  let upGradeF1 = function(n){
    let currentPai1 = data.pai[people.number];
    let number =currentPai1.number;
    let status =currentPai1.status;
    if (currentPai1.upGrade1[status] !== undefined) {
      if (people.sun>=currentPai1.upGrade1[status][0]&&people.water >= currentPai1.upGrade1[status][1]&&people.fertilizer >= currentPai1.upGrade1[status][2]) {
        people.sun -= currentPai1.upGrade1[status][0];
        people.water -= currentPai1.upGrade1[status][1];
        people.fertilizer -= currentPai1.upGrade1[status][2];
        data.pai[people.number].status =data.pai[people.number].status+n;
        passPai();
      }
    }
  };

  shengji1.onclick = function () {
    let currentPai1 = data.pai[people.number];
    let number =currentPai1.number;
    let status =currentPai1.status;

    if(currentPai1.name === "晴天" ){
      console.log(status);
      console.log(currentPai1.output);
      console.log(currentPai1.output[status]);
      upGradeF1(1);

    }else if (currentPai1.name === "浇水"){
      upGradeF1(1);
    }else if (currentPai1.name === "施肥"){
      upGradeF1(1);
    }else if (currentPai1.name === "萝卜"){
      upGradeF1(1);
    }else if (currentPai1.name === "土豆") {
      upGradeF1(1);
    }else if (currentPai1.name === "小卖部"){
      upGradeF1(1);
    }else if(currentPai1.name === "工具"){
      if (status ===0){
        upGradeF1(3);
      } else if (status ===1){
        upGradeF1(1);
      }
    }else if (currentPai1.name === "超市"){
      if (status ===0){
        upGradeF1(1);
      } else if (status ===2){
        upGradeF1(1);
      } else if (status ===3){
        upGradeF1(-1)
      }
    }

    poepleScreenOutput();
    console.log(people.number);
    currentPaiOutput();

  };

  let upGradeF2 = function(n){
    let currentPai1 = data.pai[people.number];
    let number =currentPai1.number;
    let status =currentPai1.status;
    if (currentPai1.upGrade2[status] !== undefined) {
      if (people.sun>=currentPai1.upGrade2[status][0]&&people.water >= currentPai1.upGrade2[status][1]&&people.fertilizer >= currentPai1.upGrade2[status][2]) {
        people.sun -= currentPai1.upGrade2[status][0];
        people.water -= currentPai1.upGrade2[status][1];
        people.fertilizer -= currentPai1.upGrade2[status][2];
        data.pai[people.number].status =data.pai[people.number].status+n;//注意这里是加几
        passPai();
      }
    }
  };

  shengji2.onclick = function () {
    let currentPai1 = data.pai[people.number];
    let number =currentPai1.number;
    let status =currentPai1.status;

    if(currentPai1.name === "晴天" ){
      upGradeF2(2);
    }else if (currentPai1.name === "浇水") {
      upGradeF2(1);
    }else if (currentPai1.name === "施肥"){
      upGradeF2(2)
    }else if (currentPai1.name === "萝卜"){
      upGradeF2(1);
    }else if (currentPai1.name === "土豆") {
      upGradeF2(1);
    }else if (currentPai1.name === "小卖部") {
      upGradeF2(2);
    }else if(currentPai1.name === "工具"){
      if (status ===0){
        upGradeF2(1);
      } else if (status ===2){
        upGradeF2(1);
      }
    }else if (currentPai1.name === "超市"){
      if (status ===0){
        upGradeF2(2);
      } else if (status ===1){
        upGradeF2(2);
      } else if (status ===3){
        upGradeF2(-2);
      }
    }

    poepleScreenOutput();
    console.log(people.number);
    currentPaiOutput();
  };

  shengChan.onclick = function(){
    let currentPai1 = data.pai[people.number];
    let number =currentPai1.number;
    let status =currentPai1.status;

    if(currentPai1.name === "晴天"||currentPai1.name === "浇水" ){
        people.sun += currentPai1.output[status][0];
        people.water += currentPai1.output[status][1];
        people.fertilizer += currentPai1.output[status][2];
        passPai();

    }else if (currentPai1.name === "施肥"){
        if (status>=1){
          people.sun += currentPai1.output[status][0];
          people.water += currentPai1.output[status][1];
          people.fertilizer += currentPai1.output[status][2];
          passPai();
        }
    }else if(currentPai1.name === "工具"){
        if (status ===1||status === 2){
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


  pass.onclick = function () {
    console.log("原状太3");
    passPai();
    poepleScreenOutput();
    console.log(people.number);
    currentPaiOutput();
      };

  tradeSun.onclick = function () {
    let currentPai1 = data.pai[people.number];
    let number =currentPai1.number;
    let status =currentPai1.status;
    console.log("sun");
    if(currentPai1.name === "小卖部" ){
      if (currentPai1.tradeSun[status] !== undefined) {
        if (people.sun >= currentPai1.tradeSun[status]) {
          people.sun -= currentPai1.tradeSun[status];
          people.sun += currentPai1.output[status][0];
          people.water += currentPai1.output[status][1];
          people.fertilizer += currentPai1.output[status][2];
          passPai();
          console.log("小卖部" );
        }
      }
    }else if (currentPai1.name === "超市") {
      if (currentPai1.tradeSun[status] !== undefined) {
        if (people.sun >= currentPai1.tradeSun[status]) {
          people.sun -= currentPai1.tradeSun[status];
          people.sun += currentPai1.output[status][0];
          people.water += currentPai1.output[status][1];
          people.fertilizer += currentPai1.output[status][2];
          passPai();
          console.log("超市" );
        }
      }
    }

    poepleScreenOutput();
    console.log(people.number);
    currentPaiOutput();
  };

  tradeWater.onclick = function () {
    let currentPai1 = data.pai[people.number];
    let number =currentPai1.number;
    let status =currentPai1.status;
    if(currentPai1.name === "小卖部" ){
      if (currentPai1.tradeWater[status] !== undefined) {
        if (people.water >= currentPai1.tradeWater[status]) {
          people.water -= currentPai1.tradeWater[status];
          people.sun += currentPai1.output[status][0];
          people.water += currentPai1.output[status][1];
          people.fertilizer += currentPai1.output[status][2];
          passPai();
        }
      }
    }else if (currentPai1.name === "超市") {
      if (currentPai1.tradeFertilizer[status] !== undefined) {
        if (people.fertilizer >= currentPai1.tradeFertilizer[status]) {
          people.fertilizer -= currentPai1.tradeFertilizer[status];
          people.sun += currentPai1.output[status][0];
          people.water += currentPai1.output[status][1];
          people.fertilizer += currentPai1.output[status][2];
          passPai();
        }
      }
    }

    poepleScreenOutput();
    console.log(people.number);
    currentPaiOutput();
  };

  tradeFertilizer.onclick = function () {
    let currentPai1 = data.pai[people.number];
    let number =currentPai1.number;
    let status =currentPai1.status;
    if(currentPai1.name === "小卖部" ){
      if (currentPai1.tradeSun[status] !== undefined) {
        if (people.sun >= currentPai1.tradeSun[status]) {
          people.sun -= currentPai1.tradeSun[status];
          people.sun += currentPai1.output[status][0];
          people.water += currentPai1.output[status][1];
          people.fertilizer += currentPai1.output[status][2];
          passPai();
        }
      }
    }else if (currentPai1.name === "超市") {
      if (currentPai1.tradeSun[status] !== undefined) {
        if (people.sun >= currentPai1.tradeSun[status]) {
          people.sun -= currentPai1.tradeSun[status];
          people.sun += currentPai1.output[status][0];
          people.water += currentPai1.output[status][1];
          people.fertilizer += currentPai1.output[status][2];
          passPai();
        }
      }
    }
    poepleScreenOutput();
    console.log(people.number);
    currentPaiOutput();
  };


};