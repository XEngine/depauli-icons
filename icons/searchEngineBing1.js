
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12 8.64c-4.46 0-7.95 2.38-7.95 5.41s3.49 5.41 7.95 5.41 7.95-2.38 7.95-5.41S16.46 8.64 12 8.64zM12 18c-3.5 0-6.45-1.79-6.45-3.91s3-3.91 6.45-3.91 6.45 1.79 6.45 3.91S15.5 18 12 18z"}}),_c('path',{attrs:{"d":"M12 11.51c-1.82 0-3.25 1.12-3.25 2.54s1.43 2.54 3.25 2.54 3.25-1.12 3.25-2.54-1.43-2.54-3.25-2.54zm0 3.58c-1 0-1.75-.55-1.75-1S11 13 12 13s1.75.55 1.75 1S13 15.09 12 15.09z"}}),_c('path',{attrs:{"d":"M12 5.61a16.86 16.86 0 00-6.59 1.3V2.25a.75.75 0 00-.75-.75H.75a.75.75 0 00-.75.75v12a.72.72 0 000 .18c.3 4.53 5.52 8 12 8 6.62 0 12-3.79 12-8.45s-5.38-8.37-12-8.37zM12 21c-5.63 0-10.33-3-10.49-6.76a.78.78 0 000-.12V3h2.4v5.12A.75.75 0 005 8.77a14.59 14.59 0 017-1.66c5.79 0 10.5 3.12 10.5 6.95S17.79 21 12 21z"}})])
          )
        }
      }
    