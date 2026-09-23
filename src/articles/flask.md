# Flask

> Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries. It has no database abstraction layer, form validation, or any other components where pre-existing third-party libraries provide common functions. However, Flask supports extensions that can add application features as if they were implemented in Flask itself. Extensions exist for object-relational mappers, form validation, upload handling, various open authentication technologies and several common framework related tools.
> 
> <https://en.wikipedia.org/wiki/Flask_(web_framework)>

## Installation

Create an environment:

```bash
mkdir myproject
 
cd myproject
 
python3 -m venv .venv
```

Activate the environment:

```bash
. .venv/bin/activate
```

Install Flask:

```bash
pip3 install Flask
```

Source: <https://flask.palletsprojects.com/en/2.3.x/installation/>

## Quick Start

Minimal application:

hello.py
```python
from flask import Flask
    
app = Flask(__name__)
    
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

Run dev server:

```bash
flask --app hello run
```

```txt
* Serving Flask app 'hello'
* Running on http://127.0.0.1:5000 (Press CTRL+C to quit)
```

Access from browser: <http://127.0.0.1:5000/>

Result:

```txt
Hello, World!
```

Source: <https://flask.palletsprojects.com/en/2.3.x/quickstart/>
