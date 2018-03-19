vue-drf-auth-demo
======================

This project demonstrates the use of vue with the django-rest-framework (DRF) and
authorization. JWT is used for authorization.

The code for Django backend is super simple. The purpose is to have a very
small backend the vue-frontend can connect to. You can log on to the DRF
web-API or through vue.

I am no expert on javascript nor vue, and I do not claim this code is perfect. I still hope it can help others getting started on connecting vue to a DRF backend, where endusers would have to log in through vue in order to fetch data from the backend. 

If you have suggestions on how to improve this code, please don't hesitate to open a pull request.


Installation and setup of Django backend
----------------------------------------

```
cd backend
python3 -m virtualenv ./env
source ./env/bin/activate
```

Note: 2 different requirements-files, we are using requirements.txt.original
for now.

```
pip install -r requirements.txt.original
python manage.py migrate
python manage.py createsuperuser
```

You now need to update the file backend/backend/settings.py with the
IP-addresses of your own server.

Then run the following command to start the backend.

```
python manage.py runserver 0.0.0.0:8000
```

You should now be able to browse the API from any web browser. As default, the
django backend is running on port :8000.

Installation and setup of vue frontend with npm
-----------------------------------------------

The following assumes you have npm installed. Now change to the frontend directory and install the npm packages defined in package.json. It can be done with the following simple commands:

```
cd ../frontend/SPA
npm install
```

The code must be changed in a few places for your correct setup of ip-addresses. Look through the following files and change host and port addresses:

```
config/index.js
utils/auth.js
utils/users-api.js
```

After these simple changes, the code should run with the following command

```
npm run dev
```

You should now be able to log in from any web browser to the vue frontend. As
default, the vue frontend is running on port :8080.

Feel free to play with the code both in the frontend and backend. Hopefully this code will help you to understand how to connect vue.js with django-rest-framework and authorization with JWT.



Helpful info
============

No 'Access-Control-Allow-Origin' (CONNECTION REFUSED)
-----------------------------------------------------

https://stackoverflow.com/questions/22476273/no-access-control-allow-origin-header-is-present-on-the-requested-resource-i

https://stackoverflow.com/questions/43357687/django-python-rest-framework-no-access-control-allow-origin-header-is-present




Refererences
============

Auth needs to be pluggable.
— Jacob Kaplan-Moss (https://jacobian.org/writing/rest-worst-practices/)

https://auth0.com/blog/vuejs2-authentication-tutorial/

Oath2 vs JWT:
http://www.seedbox.com/en/blog/2015/06/05/oauth-2-vs-json-web-tokens-comment-securiser-un-api/
https://stackoverflow.com/questions/39909419/jwt-vs-oauth-authentication
https://en.wikipedia.org/wiki/OAuth

Cookies vs Tokens:
https://auth0.com/blog/cookies-vs-tokens-definitive-guide/
