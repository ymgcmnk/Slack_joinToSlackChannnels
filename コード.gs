//https://api.slack.com/methods/conversations.invite


function joinToSlackChannnels() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('シート1');
  const range = sheet.getRange("B:B");
  const values = range.getValues();
  values.shift(); //先頭行の値削除
  // const valuesflat = values.flat();
  // console.log(valuesflat);

  const valuesLength = values.length;

  for (let i = 0; i < valuesLength; i++) {
    console.log(values[i]);

    const channelID = values[i].toString();

    console.log(channelID);
    console.log(typeof channelID);
    conversationsJoin(channelID);

  }
  console.log("処理終了")
}

function conversationsJoin(channelID) {

  console.log(channelID);

  const token = PropertiesService.getScriptProperties().getProperty('USER_OAUTH_TOKEN');

  const headers = {
    'Content-Type': 'application/json', // JSON形式でレスポンスを受け取る
    'Authorization': 'Bearer ' + token
  }
  // リクエストパラメータを作成
  const payload = {
    'channel': channelID,
    'users':"U03BWMV7L4F"
  }
  const params = {
    'method': 'POST', // POSTメソッドでリクエストする
    'headers': headers,
    'payload': JSON.stringify(payload)
  }

  // APIにリクエストを送る
  const response = UrlFetchApp.fetch('https://slack.com/api/conversations.join', params)

}



function test() {

  const token = PropertiesService.getScriptProperties().getProperty('USER_OAUTH_TOKEN');

  const headers = {
    'Content-Type': 'application/json', // JSON形式でレスポンスを受け取る
    'Authorization': 'Bearer ' + token
  }
  // リクエストパラメータを作成
  const payload = {
    'channel': "C2MMJDG8K",
    'users':"U03BWMV7L4F"
  }
  const params = {
    'method': 'POST', // POSTメソッドでリクエストする
    'headers': headers,
    'payload': JSON.stringify(payload)
  }

  // APIにリクエストを送る
  const response = UrlFetchApp.fetch('https://slack.com/api/conversations.invite', params)

}