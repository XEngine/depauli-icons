
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
            children.concat([_c('path',{attrs:{"d":"M13.125 24c-.233 0-.448-.105-.591-.289s-.193-.418-.136-.644l.728-2.91V6c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v2.25c0 1.241-1.009 2.25-2.25 2.25s-2.25-1.009-2.25-2.25V6c0-3.308 2.692-6 6-6s6 2.692 6 6v14.158l.728 2.91a.748.748 0 01-.729.932h-4.5zm3.54-1.5L16.29 21h-1.829l-.375 1.5h2.579zm-.54-3V6c0-2.481-2.019-4.5-4.5-4.5a4.505 4.505 0 00-4.5 4.5v2.25a.75.75 0 001.5 0V6c0-1.654 1.346-3 3-3s3 1.346 3 3v13.5h1.5z"}})])
          )
        }
      }
    