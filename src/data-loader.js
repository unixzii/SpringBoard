define(['jquery'], function ($) {
  var loadedData;

  return {
    load(cb) {
      $.get({
        url: 'bookmark.json',
        success(data) {
          loadedData = data;
          cb();
        }
      });
    },

    getCategories() {
      if (!loadedData) return [];
      return loadedData.map(c => ({
        title: c.title,
        count: c.items.length
      }));
    },

    getData() {
      return loadedData;
    }
  };
});