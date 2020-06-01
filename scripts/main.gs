function doGet(e){
  var page=e.parameter["p"];

  if(page == "index" || page==null){
    var ssh = SpreadsheetApp.openById('××××××××××××'); //スタンドアローン化したSpreadsheetに接続
    var num = ssh.getRange('A2').getValue(); //現在の入室人数を保存しているセル'A2'の値を取得
    var index = HtmlService.createTemplateFromFile("index"); //index.htmlをオブジェクト化し変数宣言
    index.num=num; // index変数にnumという変数を動的に渡せるように設定
    var output = index.evaluate()
    output.addMetaTag('viewport','width=device-width, initial-scale=1');
    return output;
  }
  else if(page =="in"){
    const sheet = SpreadsheetApp.openById('××××××××××××');//スタンドアローン化したSpreadsheetに接続
    value = sheet.getRange('A2').getValue();//現在の入室人数を保存しているセル'A2'の値を取得し，value変数に代入
    value = value + 1;//value変数に1を加算して，value変数を更新
    value = sheet.getRange('B2').setValue(value);//更新されたvalue変数をセル'B2'に代入し条件分岐で0以下にならないようにする（スプレッドシートで計算）
    var output = HtmlService.createTemplateFromFile("in").evaluate();
    output.addMetaTag('viewport','width=device-width, initial-scale=1');
    return output;
  }
  else if(page =="out"){
    const sheet = SpreadsheetApp.openById('××××××××××××');//スタンドアローン化したSpreadsheetに接続
    value = sheet.getRange('A2').getValue();
    value = value - 1;//value変数に1を減算して，value変数を更新
    value = sheet.getRange('B2').setValue(value);//更新されたvalue変数をセル'B2'に代入し条件分岐で0以下にならないようにする（スプレッドシートで計算）    
    var output = HtmlService.createTemplateFromFile("out").evaluate();
    output.addMetaTag('viewport','width=device-width, initial-scale=1');
    return output;
  }
  else{
    return HtmlService.createTemplateFromFile("error").evaluate();
  }
}
