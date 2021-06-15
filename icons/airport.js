
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
            children.concat([_c('path',{attrs:{"d":"M7.678 24a1.49 1.49 0 01-1.26-.685 1.49 1.49 0 01-.208-1.13L8.073 13.5H7.23a2.258 2.258 0 01-2.206-1.8l-1.08-5.403A1.502 1.502 0 015.415 4.5H6.75V2.25a.75.75 0 011.5 0V4.5h3V.75a.75.75 0 011.5 0V4.5h3V2.25a.75.75 0 011.5 0V4.5h1.335a1.489 1.489 0 011.242.661c.224.333.306.732.229 1.126l-1.081 5.404A2.253 2.253 0 0116.77 13.5h-.842l1.862 8.685A1.503 1.503 0 0116.323 24H7.678zm0-1.501l8.645.001-1.928-9H9.607l-1.929 8.999zM16.77 12a.753.753 0 00.736-.603L17.985 9H15.75v3h1.02zm-2.52 0V9h-4.5v3h4.5zm-7.755-.597a.75.75 0 00.734.597H8.25V9H6.014l.481 2.403zM18.285 7.5l.301-1.503L5.415 6l.299 1.5h12.571z"}})])
          )
        }
      }
    