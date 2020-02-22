# Account login

Cookie-based Authentication登入功能實作，由Node.js、Express、Express-handlebars、Express-session、body-parser 建置

## 功能表

- 在登入頁面，使用者輸入正確 email 和對應 password 將登入歡迎頁面
- 在登入頁面，若使用者輸入錯誤，將顯示錯誤訊息
- 在登入頁面，使用者勾選**記住我**，即使下次登入失敗也將保留 email 欄位
- 使用者在歡迎頁面，F5重新整理依然維持登入狀態(登入狀態只保留15秒)
- 使用者在歡迎頁面，可點擊**logout**，將自動清除session data，並回到登入頁面，
- 登出後，使用者需再輸入對應的email、password才能再次登入

## 測試帳號

|      |               Email |         Password |
| ---: | ------------------: | ---------------: |
|    1 |      tony@stark.com |       iamironman |
|    2 | captain@hotmail.com | icandothisallday |
|    3 |    peter@parker.com |         enajyram |
|    4 |   natasha@gamil.com |     \*parol#@\$! |
|    5 |     nick@shield.com |         password |

## 安裝操作

1. **下載專案**

```
git clone https://github.com/William0832/account_login_using_session_and_cookie.git
```

2. **由 (Terminal)，進入 restaurant_list 資料夾**

```
cd account_login_using_session_and_cookie
```

3. **安裝專案需求套件**

```
npm install
```

4. **執行專案**

```
npm run dev
```

5. **檢視 Terminal 訊息：Express server is listen on [localhost:3000](http://localhost:3000)**
