---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication, Password-based login Username enumeration via different responses 
published: true
tags: portswigger-web-academy burp-suite brute-force authentication
---

In this lab, I used Burp to enumerate usernames and brute force the password of a user.

### Password-based login 1 - Username enumeration via different responses

The idea:  
- Having different response messages for invalid inputs (username and password) may allow for a username enumeration attack.

Notes:
- Even if only one of the authentication fields is invalid, return a unified message.

Tools:
- BurpSuite (Proxy, Intruder)

Process:
1. After accessing the lab and attempting to log in with a random username, a "Invalid username" message popped up.

2. I then intercepted the request, and enumerated usernames using the Intruder tool and the username wordlist, grepping for "Invalid username" messages.

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-1-1.mp4" controls loop muted></video>

3. The username "ajax" seemed to exist since I got a different validation message of "Incorrect password" message.

4. I started brute forcing passwords with the password wordlist.

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-1-2.mp4" controls loop muted></video>

5. The password "123qwe" returned a 302 response.

   <video src="/assets/videos/portswigger-academy-notes/authentication-password-based-1-3.mp4" controls loop muted></video>