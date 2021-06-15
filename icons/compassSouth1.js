
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
            children.concat([_c('path',{attrs:{"d":"M12 18c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16.5C7.865 1.5 4.5 4.865 4.5 9s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z"}}),_c('path',{attrs:{"d":"M12 13.5c-2.481 0-4.5-2.019-4.5-4.5S9.519 4.5 12 4.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zM12 6c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM12 24a.743.743 0 01-.53-.22l-2.292-2.292a.744.744 0 010-1.06.744.744 0 011.06 0L12 22.189l1.741-1.741a.744.744 0 011.06 0 .749.749 0 010 1.06L12.53 23.78A.743.743 0 0112 24z"}})])
          )
        }
      }
    