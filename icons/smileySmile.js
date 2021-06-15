
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 21c-4.135 0-7.5-3.365-7.5-7.5a.75.75 0 011.5 0c0 3.308 2.692 6 6 6s6-2.692 6-6a.75.75 0 011.5 0c0 4.135-3.365 7.5-7.5 7.5zM18.493 10.5a.75.75 0 01-.707-.501 1.488 1.488 0 00-.767-.853 1.486 1.486 0 00-1.147-.061c-.43.152-.763.485-.915.915a.752.752 0 01-.707.5.744.744 0 01-.677-.427.745.745 0 01-.03-.573 2.984 2.984 0 011.829-1.829 2.981 2.981 0 012.293.122A2.98 2.98 0 0119.2 9.5a.745.745 0 01-.03.573.744.744 0 01-.677.427zM9.75 10.5a.752.752 0 01-.707-.5 1.503 1.503 0 00-1.914-.915c-.43.152-.763.485-.915.915a.752.752 0 01-.707.5.744.744 0 01-.677-.427.745.745 0 01-.03-.573 2.984 2.984 0 011.829-1.829c.322-.114.658-.172.997-.172 1.27 0 2.408.804 2.831 2.001a.751.751 0 01-.707 1z"}})])
          )
        }
      }
    