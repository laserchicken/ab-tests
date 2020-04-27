# ab-tests
A/B testing middleware for express.js using cookies with a round-robin distribution.

You will need the [cookie-parser](https://www.npmjs.com/package/cookie-parser) set to make it work.

Usage:
```javascript
app.use(cookieParser());

const test = setABCookies("test");
app.get("/", test(), (req, res) => res.send("Hello variant 1!"));
app.get("/", test(), (req, res) => res.send("Hello variant 2!"));
```
