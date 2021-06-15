
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
            children.concat([_c('path',{attrs:{"d":"M9.744 18a.75.75 0 01-.75-.75V15c0-1.654 1.346-3 3-3s3 1.346 3 3v2.25a.75.75 0 01-.75.75h-4.5zm3.75-1.5V15c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v1.5h3zM15.744 11.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM8.244 11.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M6.762 21a6.376 6.376 0 01-6.135-4.569 15.975 15.975 0 01-.002-8.853A6.383 6.383 0 016.76 3h10.466a6.376 6.376 0 016.134 4.569c.836 2.9.837 5.96.002 8.854A6.386 6.386 0 0117.227 21H6.762zm.001-16.5a4.89 4.89 0 00-4.7 3.501 14.453 14.453 0 00.002 8.004A4.886 4.886 0 006.763 19.5h10.463a4.89 4.89 0 004.698-3.501 14.432 14.432 0 00-.002-8.006A4.881 4.881 0 0017.226 4.5H6.763z"}})])
          )
        }
      }
    