# ACCESS_MANAGEMENT_SYSTEM
GASで作成した，QRコードベースのオンライン入退室管理システムです

## Notice
(1) QRコードは各種無料ツールを使用して作成してください．

  生成するURLは以下の通りです（××××××××は各自の公開URL）
  
   * 入口に貼るQRコードのURL
  ```
  https://script.google.com/a/××××××××/exec?p=in
  ```
   * 出口に貼るQRコードのURL
  ```
  https://script.google.com/a/××××××××/exec?p=out
  ```

(2)(1)のURLを踏んだら，人数が加減算される仕様になっています．そのため，URLのリロードで人数が増減してしまいます．ご了承ください．
