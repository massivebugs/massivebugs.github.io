---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication, Password-based login Username enumeration via subtly different responses 
published: true
tags: portswigger-web-academy burp-suite brute-force authentication
---

In this lab, I used Burp to enumerate usernames and brute force the password of a user.  
This time, the error messages in the login page seemed be a little more generic and identical..?

### Password-based login 2 - Username enumeration via subtly different responses
The idea:  
- Developers may leave subtle hints in authentication messages, which may reveal attack surface.

Notes:
- Be careful not to mistype authentication error messages. Keep a central config file, and only use that.

Tools:
- BurpSuite (Proxy, Intruder)

Process:
1. A wrong input resulted in the message "Invalid username or password." displayed on the screen. 

2. I wanted to observe the behaviour a bit more, so I tried enumerating usernames using the wordlist to see if any usernames yield a different error message.
   I also grepped for "Invalid username or password."

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-2-1.mp4" controls loop muted></video>

3. One of the usernames "auth" returned "Invalid username or password", which is missing a period at the end.

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-2-2.mp4" controls loop muted></video>

4. I tried brute forcing the user "auth" with Intruder once again, and I was able to log in using the password "112233".

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-2-3.mp4" controls loop muted></video>