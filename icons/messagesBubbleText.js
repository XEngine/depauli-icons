
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9.75 10.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM9.75 13.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M9.75 19.5a.746.746 0 01-.75-.75v-2.104a6.03 6.03 0 01-3.75-5.366c0-1.63.708-3.146 1.995-4.284C8.519 5.87 10.208 5.25 12 5.25c3.722 0 6.75 2.692 6.75 6l-.001.047c-.177 3.028-2.564 5.535-5.572 5.871l-2.983 2.187a.746.746 0 01-.444.145zM12 6.75c-2.895 0-5.25 2.019-5.25 4.5.075 1.911 1.369 3.584 3.219 4.151a.747.747 0 01.531.717v1.152l1.957-1.434a.752.752 0 01.386-.143 4.797 4.797 0 004.408-4.477C17.244 8.764 14.889 6.75 12 6.75z"}})])
          )
        }
      }
    