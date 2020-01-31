const tasks = arr => arr.join(' && '); // eslint-disable-line @typescript-eslint/explicit-function-return-type

module.exports = {
  hooks: {
    'commit-msg': '[[ -n $HUSKY_BYPASS ]] || commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': tasks(['lint-staged']),
  },
};
