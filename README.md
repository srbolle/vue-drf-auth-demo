vue-drf-auth-demo
======================

This project demonstrates the use of vue with the django-rest-framework and
authorization.

More information on how to set up and use this project will be added shortly.

Installation and setup of Django backend
----------------------------------------

cd backend
python3 -m virtualenv ./env
source ./env/bin/activate

# Note: 2 different requirements-files.
pip install -r requirements.txt.original
python manage.py migrate
python manage.py createsuperuser

python manage.py runserver 0.0.0.0:8000


Installation and setup of vue frontend with npm
-----------------------------------------------

cd ../frontend

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
