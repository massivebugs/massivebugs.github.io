---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication
published: false
---

Most challenges were done using Burp, but due to limitations of the Community Edition, I also wrote some scripts in Python.

## Multi-factor authentication
### 3. 2FA bypass using a brute force attack

1. I logged in using the provided credentials carlos:montoya in /login, and a MFA screen popped up.
2. I tried entering wrong numbers twice, and I was shown a /login2 with a login page again...
3. Once I entered the credentials again, I was shown the MFA screen again.
4. This time, I tried intercepting the request to see what was happening.
5. It seems like there is CSRF protection in place. 
6. So basically, what I have to do is:
   1. Log in using credentials & CSRF token at /login
   2. Try MFA twice using incrementing numbers & CSRF token at /login2
   3. Rinse and repeat
7. I can use Macros for this.
8. In Project options -> Sessions, add a Macro "login_to_mfa" by recording 3 requests: GET /login, POST /login, GET /login2.  
   This will give me a new session and the new CSRF token
9. Then, create a Session Handling rule "Refresh session by logging in", add a "run macro" rule and change the URL scope so that /login2 is targeted.  
    Not very efficient, but this will allow me to refresh the sesssion every time /login2 mfa request is sent.
10. Start an intruder attack to /login 2 at the "mfa-code" payload with Numbers payload (From 0 to 9999, Step 1, and min/max integer digits 4, and fraction digits 0). Be sure to grep for "Incorrect security code"
11. If all is set well, you will be able to see that for every request, the session and csrf token is different.
12. According to this, community edition throttles requests like this. https://forum.portswigger.net/thread/burp-intruder-bruteforcing-too-slowly-e491c59c It will take forever. Let's write a script.

```
...
...
[2022-06-16 21:49:38] - INFO - Making MFA request with code: 0512
[2022-06-16 21:49:39] - INFO - Making MFA request with code: 0513
[2022-06-16 21:49:40] - INFO - Refreshing session...
[2022-06-16 21:49:42] - INFO - Making MFA request with code: 0514
[2022-06-16 21:49:43] - INFO - Making MFA request with code: 0515
[2022-06-16 21:49:44] - INFO - Refreshing session...
[2022-06-16 21:49:47] - INFO - Making MFA request with code: 0516
[2022-06-16 21:49:48] - INFO - Making MFA request with code: 0517
[2022-06-16 21:49:49] - INFO - Refreshing session...
[2022-06-16 21:49:51] - INFO - Making MFA request with code: 0518
[2022-06-16 21:49:52] - INFO - Making MFA request with code: 0519
[2022-06-16 21:49:53] - INFO - Refreshing session...
[2022-06-16 21:49:55] - INFO - Making MFA request with code: 0520
[2022-06-16 21:49:56] - INFO - Making MFA request with code: 0521
[2022-06-16 21:49:57] - INFO - Refreshing session...
[2022-06-16 21:49:59] - INFO - Making MFA request with code: 0522
[2022-06-16 21:50:00] - INFO - Making MFA request with code: 0523
[2022-06-16 21:50:03] - INFO - Found code: 0523
[2022-06-16 21:50:03] - INFO - Finished in 1165.2060050964355 seconds
```