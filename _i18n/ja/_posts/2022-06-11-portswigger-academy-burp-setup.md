---
post_group: cybersecurity-study-notes
title: PortSwigger Academy Notes - Burp Suite Community Editionの簡単設定手順
tags: portswigger-web-academy burp-suite 
---

手早くPortSwigger Web Security AcademyのためにBurpを設定する方法を記載します。  
ブラウザーはBurpに含まれてるブラウザー（Chromium）を使います。

1. デフォルト設定のままで”Temporary project”を使います。

2. ツールバーで **Target** をクリックし、**Scope**オプションを選択します。

3. **Advanced Scope Control**を選択して、以下のように記載してOKをクリックします: 
   - Protocol: HTTPS
   - Host or IP range: ^*\.web-security-academy\.net$
   - Port: ^443$
   - File: ^/.*
  
   これにより、プロキシはlab環境のみターゲットします。

   <video src="/assets/videos/portswigger-academy-notes/burp-setup-1.mp4" controls loop autoplay muted></video>

4. ツールバーで**Proxy**をクリックし、**Options**を選択します。

5. **Intercept Client Requests**部分で, "And URL Is in target scope"と書いてある４つ目のルールを有効にします。

   <video src="/assets/videos/portswigger-academy-notes/burp-setup-2.mp4" controls loop autoplay muted></video>

6. とりあえずこれで大丈夫でしょう。上のメニューバーで**Burp**をクリックし、**User options**のところの**Save user options**を選択して今の設定を保存できます。
   Burpをまた起動するときそのjsonファイルを選択し反映できます。
   
   <video src="/assets/videos/portswigger-academy-notes/burp-setup-3.mp4" controls loop autoplay muted></video>

7. ツールバーで**Proxy**をクリックし、**Intercept is off**をクリックします。**Open Browser**をクリックしてlab環境に入ったらリクエストをインターセプトできます。