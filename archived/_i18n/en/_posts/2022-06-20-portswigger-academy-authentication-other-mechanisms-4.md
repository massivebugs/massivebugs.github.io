---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication
published: false
---
Password reset poisioning via middleware

1. Send password link for wiener
2. Capture request with burp
3. If I change the Host header to the exploit server's url, I get a 403...
4. Assuming there is a middleware or proxy in between, I tried setting X-Forwarded-Host to exploit-0a5d004e044fd2a7c05918f4012800b9.web-security-academy.net/exploit
5. It seems to work, and now carlos is blorked.

https://www.acunetix.com/blog/articles/automated-detection-of-host-header-attacks/#:~:text=The%20host%20header%20specifies%20which,to%20as%20a%20virtual%20host.