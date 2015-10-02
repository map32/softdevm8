from flask import Flask, render_template, request, redirect
import shelve, hashlib

app = Flask(__name__)

@app.route("/intro", methods=["GET","POST"])
def intro():
    listy = shelve.open(userlist.dat)
    submit = request.form['submit']
    user=request.form['user']
    password=hashlib.md5().update(request.form['pass']).hexdigest()
    d[user]=password
    return redirect("/main")




@app.route("/")
def index():
    d=
    '''
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
    font-family: "Ubuntu", Sans-serif;
    color: white;
    background-image: url("http://www.wallpaperup.com/uploads/wallpapers/2012/08/04/8548/07f4032eddf2777664a0ec1431a34a56.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    }
    h1 {
    font-size: 60px;
    text-align: center;
    }
    h2 {
    font-size: 30px;
    text-align: center;
    color:gray;
    }
    p {
    color:gray;
    text-align:center;
    </style>
    </head>
    <body>
    <h1>
    hello.
    </h1>
    <h2>
    please sign up first</h2>
    <form style="text-align:center">
    <input type="submit" name="log" value="log in">
    <br><p>
    <input type="submit" name="sign" value="sign up">
    </body>
    </html>
    '''
    return d

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
