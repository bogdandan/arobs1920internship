class TokenRegistry {
  constructor() {
    this.tokens = {};
  }

  add(token) {
    this.tokens[token] = token;
  }

  get(token) {
    return this.tokens[token];
  }

  isValid(token) {
    return !!this.tokens[token];
  }

  clean() {
    this.tokens = {};
  }
}

module.exports = new TokenRegistry();
