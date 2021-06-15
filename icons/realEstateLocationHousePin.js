
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
            children.concat([_c('circle',{attrs:{"cx":"8.251","cy":"5.25","r":"1.125"}}),_c('path',{attrs:{"d":"M8.249 13.5a1.489 1.489 0 01-1.182-.577C5.845 11.359 3.001 7.479 3.001 5.25 3.001 2.355 5.356 0 8.251 0s5.25 2.355 5.25 5.25c0 2.229-2.845 6.109-4.068 7.674a1.493 1.493 0 01-1.184.576zm.002-12a3.754 3.754 0 00-3.75 3.75c0 1.349 1.883 4.363 3.75 6.75 1.867-2.387 3.75-5.401 3.75-6.75a3.755 3.755 0 00-3.75-3.75zM5.251 24a2.252 2.252 0 01-2.25-2.25v-4.5a.75.75 0 011.5 0v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 011.5 0v4.5a2.252 2.252 0 01-2.25 2.25h-6zM.751 16.5a.752.752 0 01-.502-1.307l3.333-3a.754.754 0 011.06.055.752.752 0 01-.056 1.059l-3.333 3a.749.749 0 01-.502.193zM15.751 16.5a.747.747 0 01-.501-.192l-3.334-3.001A.752.752 0 0112.417 12a.75.75 0 01.502.192l3.334 3.001a.752.752 0 01-.502 1.307zM15.751 24a.75.75 0 010-1.5h5.25v-4.649l-2.73-2.275a.744.744 0 01-.267-.508.75.75 0 011.227-.644l4.5 3.75a.744.744 0 01.267.508.75.75 0 01-1.227.644l-.27-.225V22.5c0 .827-.673 1.5-1.5 1.5h-5.25z"}})])
          )
        }
      }
    