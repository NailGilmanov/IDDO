'use strict';
    var multiItemSlider = (function () {
      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = []; // массив элементов
        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getMin: 0,
          getMax: _items.length - 1,
        }

        var _transformItem = function (direction) {
          if (direction === 'right') {
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
              return;
            }
            if (!_sliderControlLeft.classList.contains('slider__control_show')) {
              _sliderControlLeft.classList.add('slider__control_show');
            }
            if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
              _sliderControlRight.classList.remove('slider__control_show');
            }
            _positionLeftItem++;
            _transform -= _step;
          }
          if (direction === 'left') {
            if (_positionLeftItem <= position.getMin) {
              return;
            }
            if (!_sliderControlRight.classList.contains('slider__control_show')) {
              _sliderControlRight.classList.add('slider__control_show');
            }
            if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
              _sliderControlLeft.classList.remove('slider__control_show');
            }
            _positionLeftItem--;
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('slider__control')) {
            e.preventDefault();
            var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
            _transformItem(direction);
          }
        };

        var _setUpListeners = function () {
          // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
          _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
          });
        }

        // инициализация
        _setUpListeners();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          }
        }

      }
    }());

    var slider = multiItemSlider('.slider')
    


        
    document.querySelector('.xm').onclick = function() {    
        document.querySelector('.dif-services').style.border = '1px solid #1CB88B';
        document.querySelector('.dif-services').style.color = '#1CB88B';
        document.querySelector('.services-info1').innerHTML = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.';
        document.querySelector('.xm').classList.add('fa-minus');
        document.querySelector('.xm').classList.remove('fa-plus');
    }
    
    document.querySelector('.xm2').onclick = function() {
        document.querySelector('.dif-services2').style.border = '1px solid #1CB88B';
        document.querySelector('.dif-services2').style.color = '#1CB88B';
        document.querySelector('.services-info2').innerHTML = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.';
        document.querySelector('.xm2').classList.add('fa-minus');
        document.querySelector('.xm2').classList.remove('fa-plus');
    }
    
    document.querySelector('.xm3').onclick = function() {
        document.querySelector('.dif-services3').style.border = '1px solid #1CB88B';
        document.querySelector('.dif-services3').style.color = '#1CB88B';
        document.querySelector('.services-info3').innerHTML = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.';
        document.querySelector('.xm3').classList.add('fa-minus');
        document.querySelector('.xm3').classList.remove('fa-plus');
    }
    
    document.querySelector('.xm4').onclick = function() {
        document.querySelector('.dif-services4').style.border = '1px solid #1CB88B';
        document.querySelector('.dif-services4').style.color = '#1CB88B';
        document.querySelector('.services-info4').innerHTML = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.';
        document.querySelector('.xm4').classList.add('fa-minus');
        document.querySelector('.xm4').classList.remove('fa-plus');
    }
    
    document.querySelector('.xm5').onclick = function() {
        document.querySelector('.dif-services5').style.border = '1px solid #1CB88B';
        document.querySelector('.dif-services5').style.color = '#1CB88B';
        document.querySelector('.services-info5').innerHTML = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.';
        document.querySelector('.xm5').classList.add('fa-minus');
        document.querySelector('.xm5').classList.remove('fa-plus');
    }
    
    

    