<div align="center">
  <a href="https://efreitasn.github.io/num-info">
    <img width="70%" alt="num-info" src="https://raw.githubusercontent.com/efreitasn/num-info/master/num-info-logo.png">
  </a>
  <br />
  <br />
</div>

<div align="center">
  <a href="https://travis-ci.org/efreitasn/num-info">
    <img
      alt="Build"
      src="https://img.shields.io/travis/efreitasn/num-info.svg"
    >
  </a>
  <a href="https://github.com/efreitasn/num-info/blob/master/LICENSE">
    <img
      alt="License"
      src="https://img.shields.io/github/license/efreitasn/num-info.svg"
    >
  </a>
</div>
</div>

---

This is a simple react app that I built to check out the new hooks API that shipped in [`react@16.8`](https://www.npmjs.com/package/react). It uses the [numbers API](http://numbersapi.com) proxied through a Node.js server hosted on heroku. The proxy exists as the API uses `http` while the app is hosted on a `https` host ([mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content)). Besides, I also added a couple of e2e tests to check out [cypress](https://www.cypress.io/) as well. You can view it [here](https://efreitasn.github.io/num-info)

This was bootstrapped using [Create React App](https://facebook.github.io/create-react-app).