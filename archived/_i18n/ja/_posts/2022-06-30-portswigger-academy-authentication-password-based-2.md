---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication, Password-based login Username enumeration via subtly different responses 
published: true
tags: portswigger-web-academy burp-suite brute-force authentication
---

Burpを使ってユーザ名とパスワードをブルートフォースしました。  
今回はログイン時同じ、もしくは似てるエラーメッセージが返される前提でした。

### Password-based login 2 - Username enumeration via subtly different responses
The idea:  
- よく見ると返されるメッセージが同じだと思ったら少し違うメッセージが返されるて、それで攻撃面積（？）のヒントを得られる可能性がある。

Notes:
- エラーメッセージはまとめて管理しましょう。

Tools:
- BurpSuite (Proxy, Intruder)

Process:
1. ランダムなユーザ名とパスワードでログインしたら”Invalid username or password.”とエラーメッセージが表示されました。 

2. この部分をもう少し調べるためユーザ名をIntruderで列挙攻撃をしてみました。BurpのIntruderでは”Invalid username or password.”をgrepするように設定しました。

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-2-1.mp4" controls loop muted></video>

3. "auth"と言うユーザ名で似てるけど同じではないメッセージが返されました。”Invalid username or password”で、最後に　”.”　がないですね。

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-2-2.mp4" controls loop muted></video>

4. "auth"ユーザのパスワードをIntruderでブルートフォースしたら”112233”パスワードが通りました.

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-2-3.mp4" controls loop muted></video>