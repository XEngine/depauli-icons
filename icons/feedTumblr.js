
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
            children.concat([_c('path',{attrs:{"d":"M9.7 22.78A8.28 8.28 0 0014.18 24a12.93 12.93 0 005.47-1.33.75.75 0 00.43-.68v-4.32a.75.75 0 00-1.16-.67c-1.13.74-2.68 1.35-3.64.83s-1.06-1.83-1.06-2.9V10.3h4.14a.75.75 0 00.75-.75V5.64a.75.75 0 00-.75-.75h-4.14V.75a.75.75 0 00-.75-.75H9.8a.75.75 0 00-.74.66 8 8 0 01-.71 2.62A5.46 5.46 0 017 5a9 9 0 01-2.45 1h-.11a.75.75 0 00-.52.71v2.84a.75.75 0 00.75.75h2.18v7.55a5.81 5.81 0 002.85 4.93zM5.42 8.8V7.32A8.28 8.28 0 008 6.12 7 7 0 009.68 4a8.67 8.67 0 00.77-2.46h2.27v4.1a.75.75 0 00.75.75h4.13V8.8h-4.13a.75.75 0 00-.75.75v5.39c0 2.16.62 3.59 1.85 4.26a4.54 4.54 0 004-.24v2.57c-3 1.3-6 1.3-8.08 0a4.34 4.34 0 01-2.15-3.67V9.55a.75.75 0 00-.74-.75z"}})])
          )
        }
      }
    