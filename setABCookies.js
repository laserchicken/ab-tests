const oneYear = 1000 * 60 * 60 * 24 * 365;

const setABCookies = (name, maxAge = oneYear) => {
  const counter = {};
  return () => {
    const variant = Object.keys(counter).length;
    counter[variant] = 0;

    return (req, res, next) => {
      if (req.cookies[name]) {
        return req.cookies[name] == (variant + 1) ? next() : next("route");
      }
      const current = counter[variant];
      const skip = Object.values(counter).some(count => count < current);
      if (skip) return next("route");

      counter[variant] = current + 1;
      res.cookie(name, variant + 1, { maxAge });
      return next();
    };
  };
};

module.exports = setABCookies;
