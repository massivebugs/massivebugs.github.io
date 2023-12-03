---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication, Password-based login Username enumeration via different responses 
published: true
tags: portswigger-web-academy burp-suite brute-force authentication
---

Burpを使ってユーザ名とパスワードをブルートフォースしました。

### Password-based login 1 - Username enumeration via different responses
The idea:  
- ユーザ名もしくはパスワード違った時、返されたエラーメッセージによってユーザ名列挙攻撃ができる可能性がある。

Notes:
- どちらかが違っても、同じエラーメッセージを返すこと。

Tools:
- BurpSuite (Proxy, Intruder)

Process:

1. Lab環境に入り、適当なユーザ名とパスワードを入力してみたら”Invalid username”とメッセージが表示されました。

2. Intruderツールを使ってユーザ名のワードリストをもとに列挙攻撃をしました。”Invalid username”のテキストもgrepするように設定しました。

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-1-1.mp4" controls loop muted></video>

3. ”ajax”と言うユーザ名をパラメータにしたら”Incorrect password”とメッセージが表示されたのでこのユーザ名の存在を確認できました。

4. 今度はパスワードのワードリストを使って列挙攻撃をしました。

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-1-2.mp4" controls loop muted></video>

5. ”123qwe”の場合302が返されたのでログインに成功しました。

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-1-3.mp4" controls loop muted></video>