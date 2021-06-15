
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
            children.concat([_c('path',{attrs:{"d":"M12 11.25c-2.068 0-3.75-1.682-3.75-3.75S9.932 3.75 12 3.75s3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25S10.759 9.75 12 9.75s2.25-1.009 2.25-2.25S13.241 5.25 12 5.25z"}}),_c('path',{attrs:{"d":"M11.998 20.741a1.118 1.118 0 01-.908-.462C5.142 12.087 4.5 8.613 4.5 7.5 4.5 3.365 7.865 0 12 0s7.5 3.365 7.5 7.5c0 3.435-5.043 10.648-6.589 12.777a1.118 1.118 0 01-.913.464zM12 1.5c-3.308 0-6 2.692-6 6 0 2.291 3.164 7.514 6 11.475 2.835-3.961 6-9.184 6-11.475 0-3.308-2.692-6-6-6z"}}),_c('path',{attrs:{"d":"M12 24c-2.756 0-5.495-.32-7.514-.879C2.042 22.445.75 21.452.75 20.25c0-1.803 2.775-2.734 5.103-3.198a.75.75 0 01.293 1.471c-2.915.581-3.896 1.429-3.896 1.727 0 .176.465.81 2.531 1.4 1.918.548 4.481.85 7.219.85s5.301-.302 7.219-.85c2.066-.59 2.531-1.224 2.531-1.4 0-.299-.986-1.15-3.917-1.73-.197-.039-.366-.152-.478-.319s-.151-.366-.113-.563a.752.752 0 01.882-.589c2.338.463 5.125 1.394 5.125 3.202 0 1.202-1.292 2.195-3.736 2.871C17.495 23.68 14.756 24 12 24z"}})])
          )
        }
      }
    