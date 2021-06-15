
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
            children.concat([_c('circle',{attrs:{"cx":"15.75","cy":"8.25","r":"1.125"}}),_c('path',{attrs:{"d":"M15.75 12C13.682 12 12 10.318 12 8.25s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75S17.818 12 15.75 12zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25S18 9.491 18 8.25 16.991 6 15.75 6z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M11.993 21.006a8.208 8.208 0 01-2.737-.47A8.212 8.212 0 014.22 15.5c-.133-.377-.112-.784.061-1.146a1.492 1.492 0 011.354-.854h12.732a1.502 1.502 0 011.415 1.999 8.271 8.271 0 01-7.789 5.507zM5.634 15a6.724 6.724 0 004.121 4.121 6.698 6.698 0 002.239.385 6.766 6.766 0 006.372-4.505L5.634 15z"}}),_c('circle',{attrs:{"cx":"8.25","cy":"8.25","r":"1.125"}})])
          )
        }
      }
    