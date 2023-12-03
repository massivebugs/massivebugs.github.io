---
post_group: cybersecurity-study-notes
title: PortSwigger Academy Notes - Setting up Burp Suite Community Edition for basic usage
tags: portswigger-web-academy burp-suite 
---

A quick note on getting Burp set up for the labs quickly, 
intended for using Burp's integrated Chromium browser.

1. Start a temporary project with default settings.

2. Click on **Target** on the toolbar, and select the **Scope** option.

3. Click on **Advanced Scope Control**, add these values and click OK: 
   - Protocol: HTTPS
   - Host or IP range: ^*\.web-security-academy\.net$
   - Port: ^443$
   - File: ^/.*

   This will allow the proxy to target the lab environment.

   <video src="/assets/videos/portswigger-academy-notes/burp-setup-1.mp4" controls loop muted></video>

4. Click on **Proxy** on the toolbar, and select **Options**

5. In the **Intercept Client Requests** section, **enable the 4th rule** (And URL Is in target scope)

   <video src="/assets/videos/portswigger-academy-notes/burp-setup-2.mp4" controls loop muted></video>

6. That should be good for starting off. Save the configuration by clicking **Burp** on the top menu bar, **User options** and then **Save user options**
   You can apply the configuration when you start Burp again.

   <video src="/assets/videos/portswigger-academy-notes/burp-setup-3.mp4" controls loop muted></video>

7. Click on **Proxy** on the toolar and click **Intercept is off**. Click on **Open Browser** and enter the lab environment to intercept requests.