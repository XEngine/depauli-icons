
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
            children.concat([_c('path',{attrs:{"d":"M.8 3.24a.75.75 0 00-.52.92l4.47 16.08a.75.75 0 001.45 0L9 10.3l2.78 9.95a.75.75 0 00.72.55.75.75 0 00.72-.55l4.34-15.54h4.08l-3.44 5.43a.75.75 0 00.53 1.14 4.26 4.26 0 013.52 4.56C22.25 18 21 19 20 19.24s-2.4-.23-3.16-2.05a.75.75 0 00-1.38.58 4.47 4.47 0 004 3 4.06 4.06 0 00.8-.08c1.74-.35 3.5-2 3.5-4.86A5.81 5.81 0 0020 10.09l3.62-5.73A.75.75 0 0023 3.21h-6a.75.75 0 00-.72.55l-3.82 13.5-2.75-9.85a.74.74 0 00-.09-.31l-.93-3.34a.75.75 0 10-1.44.4l.93 3.34-2.71 9.74L1.72 3.76a.75.75 0 00-.92-.52z"}})])
          )
        }
      }
    