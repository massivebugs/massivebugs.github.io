---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication
published: false
---

1. Log in using wiener:peter credentials, with stay logged in enabled.
2. I can see that a new cookie: stay-logged-in has been set with value d2llbmVyOjUxZGMzMGRkYzQ3M2Q0M2E2MDExZTllYmJhNmNhNzcw. 
   If you try logging out and setting the value in the stay-logged-in cookie again, you will be logged in.
3. If I decode it: it shows wiener:51dc30ddc473d43a6011e9ebba6ca770
```
echo d2llbmVyOjUxZGMzMGRkYzQ3M2Q0M2E2MDExZTllYmJhNmNhNzcw | base64 --decode
wiener:51dc30ddc473d43a6011e9ebba6ca770
```
4. What is 51dc300... ?
5. Even after I log out and log back in, the cookie value is the same.
6. I will try using hashID to identify what it is.
```
hashid '51dc30ddc473d43a6011e9ebba6ca770'
Analyzing '51dc30ddc473d43a6011e9ebba6ca770'
[+] MD2
[+] MD5
[+] MD4
[+] Double MD5
[+] LM
[+] RIPEMD-128
[+] Haval-128
[+] Tiger-128
[+] Skein-256(128)
[+] Skein-512(128)
[+] Lotus Notes/Domino 5
[+] Skype
[+] Snefru-128
[+] NTLM
[+] Domain Cached Credentials
[+] Domain Cached Credentials 2
[+] DNSSEC(NSEC3)
[+] RAdmin v2.x

```
7. Well I get a bunch of results, so I just tried hashing 'peter' to MD5.
```
echo -n 'peter' | md5sum
```
Note: the '-n' is important, otherwise it will add a newline.
```
echo 'peter' | hexdump -c  
0000000   p   e   t   e   r  \n                                        
0000006

echo -n 'peter' | hexdump -c
0000000   p   e   t   e   r                                            
0000005
```
8. Since we know md5 is being used without a salt for hashing  the password, we can brute force it by:
   1. Hashing a password with MD5
   2. Base64 encoding carlos:<hash>

9. Capture the request for 'My Account' and send it to Intruder
10. Unset all payloads sets except for the stay-logged-in cookie
11. Set mode to sniper, and add the list of passwords in Payload Options
12. In Payload Processing, add a 'Hash = MD5' 'Add prefix = carlos:'  and finally 'Encode = Base64-encode'.
13. Grep for 'Your username is: carlos'
14. If we get a 200 response of a grep flag, that's our cookie.
15. The password was 'matrix' for me