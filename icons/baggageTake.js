
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
            children.concat([_c('path',{attrs:{"d":"M12.75 23.812a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h.75v-.75a2.252 2.252 0 012.25-2.25h3a2.252 2.252 0 012.25 2.25v.75h.75a2.252 2.252 0 012.25 2.25v6a2.252 2.252 0 01-2.25 2.25h-9zm9-1.5a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75H21v7.5h.75zm-2.25 0v-7.5H15v7.5h4.5zm-6.75-7.5a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.75v-7.5h-.75zm6.75-1.5v-.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v.75h4.5zM4.5 6.937c-1.861 0-3.375-1.514-3.375-3.375S2.639.187 4.5.187s3.375 1.514 3.375 3.375S6.361 6.937 4.5 6.937zm0-5.25c-1.034 0-1.875.841-1.875 1.875S3.466 5.437 4.5 5.437s1.875-.841 1.875-1.875S5.534 1.687 4.5 1.687zM4.5 23.812c-1.654 0-3-1.346-3-3v-3.128A2.262 2.262 0 010 15.562v-4.5a3.754 3.754 0 013.75-3.75h1.5A3.754 3.754 0 019 11.062v4.5a2.26 2.26 0 01-1.5 2.122v3.128c0 1.654-1.346 3-3 3zm-.75-15a2.252 2.252 0 00-2.25 2.25v4.5c0 .414.336.75.75.75s.75.336.75.75v3.75c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-3.75c0-.414.336-.75.75-.75s.75-.336.75-.75v-4.5a2.252 2.252 0 00-2.25-2.25h-1.5zM16.5 6.562a.743.743 0 01-.53-.22l-2.25-2.25a.74.74 0 01-.163-.245l-.01-.026a.73.73 0 010-.517l.006-.016a.764.764 0 01.168-.257L15.97.782a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-.97.97h4.189a.75.75 0 010 1.5H16.06l.97.97c.142.141.22.33.22.53s-.078.389-.22.53-.33.22-.53.22z"}})])
          )
        }
      }
    