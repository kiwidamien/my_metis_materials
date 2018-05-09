// We are not running a webserver, so we cannot load words automatically

const words = ['analytic', 'analytical', 'analysis', 'aggregate', 'acid', 'algorithm', 'artificial intelligence',
'big data', 'bagging', 'boosting', 'classification', 'accuracy', 'clustering', 'postgresql', 'amazon', 'cloud',
'computing', 'python', 'import this', 'pandas', 'numpy', 'seaborn', 'dataframe', 'array', 'machine learning',
'database', 'query', 'select', 'table', 'connection', 'file', 'reshape', 'precision', 'recall', 'naive bayes',
'nearest neighbors', 'class', 'function', 'recursive', 'javascript', 'visualize', 'deadline',
'minimum viable product', 'neural network', 'dense', 'dropout', 'layer', 'pair programming', 'support vector',
'support vector machine', 'linear regression', 'logistic regression', 'decision tree', 'random forest',
'extra trees', 'pasting', 'sequential', 'parallel', 'debugging', 'column', 'row', 'observation', 'feature',
'confusion matrix', 'cleaning', 'repository', 'demographic', 'exploratory analysis', 'merge', 'link',
'mongo database', 'recommendation', 'spark', 'scalable', 'scraping', 'turnstile', 'deep learning'];

function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
