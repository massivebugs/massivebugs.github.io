---
post_group: cybersecurity-study-notes
title: PortSwigger Academy notes - Authentication
published: false
---
Changing user passwords

1. This one should be simple, lets brute force the password reset functionality.
2. After I log in as wiener:peter, there is a password change form which has an h idden username input.
3. If success, I get 200 response, if fail I get 302 response and get logged out.
4. What I have to do is first log in, make an attempt, and if I get 302ed I log back in again, rinse and repeat until I get a 200 response.
5. Wrote a script for this
6. Fin