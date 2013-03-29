files = [
  MOCHA,
  MOCHA_ADAPTER,
  'chai.js',
  REQUIRE,
  REQUIRE_ADAPTER,
  'main.js',
  {pattern: '*.js', included: false},
];

exclude = [
  'karma.conf.js'
];

autoWatch = true;
browsers = ['Chrome'];
singleRun = false;

reporters = ['progress', 'coverage'];

preprocessors = {
  'dependency.js': 'coverage'
};

coverageReporter = {
    type : 'html',
    dir : 'coverage/'
};
