# ACCESS_MANAGEMENT_SYSTEM
GASで作成した，QRコードベースのオンライン入退室管理システムです
<br>詳しい作成方法は[こちら](https://qiita.com/t-morik/items/a6c73e5aff17a52cc104)を参照してください
<br>サンプルは[こちら](https://script.google.com/a/keio.jp/macros/s/AKfycbyx5Se-VGLI4hXxTJzO7RqUC_OKMA9NX6KvQl4vnA/exec?p=index)


## Notice
#### (1) htmlファイル内にある「××××××××」は，GASで作成したwebアプリの公開URLです．変更してください

#### (2) gsファイル内にある「××××××××」は，SpreadSheetのURLにおける ×××××××× の部分です。

```
https://docs.google.com/spreadsheets/d/××××××××/edit 
```

#### (3) QRコードは各種無料ツールを使用して作成してください．

  生成するURLは以下の通りです
  
   * 入口に貼るQRコードのURL
  ```
  https://script.google.com/a/××××××××/exec?p=in
  //「××××××××」は，GASで作成したwebアプリの公開URL
  ```
   * 出口に貼るQRコードのURL
  ```
  https://script.google.com/a/××××××××/exec?p=out
  //「××××××××」は，GASで作成したwebアプリの公開URL
  ```

#### (4) (3)のURLを踏んだら，人数が加減算される仕様になっています．そのため，URLのリロードで人数が増減してしまいますが，特に対策は講じておりません．ご了承ください．
