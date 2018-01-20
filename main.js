requirejs.config({
  baseUrl: 'dist/js',
  paths: {
    jquery: 'vendors/jquery-3.2.1.min'
  }
});

requirejs(['index']);