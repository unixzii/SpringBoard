define(['jquery', 'data-loader', 'simple-animator'], function ($, loader, animator) {
  var categoryItemTpl;
  var mainItemTpl;
  var chipItemTpl;

  function createTemplates() {
    const _categoryItemTpl = $('#categoryItemTpl');
    categoryItemTpl = _categoryItemTpl.clone();
    _categoryItemTpl.remove();
    
    const _chipItemTpl = $('#chipItemTpl');
    chipItemTpl = _chipItemTpl.clone();
    _chipItemTpl.remove();
    
    const _mainItemTpl = $('#mainItemTpl');
    mainItemTpl = _mainItemTpl.clone();
    _mainItemTpl.remove();
  }

  function bindEventListeners() {
    $('.categories-list').delegate('li', 'click', function (e) {
      const clickedIndex = +$(e.currentTarget).attr('data-index');
      const mainItemEl = $('.main-item').eq(clickedIndex)[0];
      const bdRect = mainItemEl.getBoundingClientRect();
      window.scrollBy(0, bdRect.top);

      // flash the category title
      animator(1.2, 0, 1000, function (v) {
        if (v > 1) v = 1;
        mainItemEl.children[0].style = `
          background-color: rgba(0, 122, 255, ${0.2 * v});
          color: rgb(0, ${Math.floor(122 * v)}, ${Math.floor(255 * v)});
        `;
      })
    });
  }

  function renderUI() {
    const categories = loader.getCategories();
    const categoriesList = $('.categories-list');
    var _i = 0;
    categories.forEach(c => {
      const item = categoryItemTpl.clone();
      item.attr('id', null);
      item.attr('data-index', _i++);
      item.find('.title').html(c.title);
      item.find('.subtitle').html(c.count);
      categoriesList.append(item);
    });

    const data = loader.getData();
    const mainEl = $('.main');
    data.forEach(c => {
      const item = mainItemTpl.clone();
      const chipsList = item.find('.chips-list');
      item.attr('id', null);
      item.find('h2').html(c.title);
      c.items.forEach(i => {
        const iitem = chipItemTpl.clone();
        iitem.attr('id', null);
        iitem.find('a').html(i.title);
        iitem.find('a').attr('href', i.url);
        chipsList.append(iitem);
      });
      mainEl.append(item);
    });
  }

  $(function () {
    createTemplates();
    bindEventListeners();
    loader.load(() => {
      renderUI();
    });

    $('body').removeClass('loading');
  });
});