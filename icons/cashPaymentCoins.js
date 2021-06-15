
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0V15h6c1.8 0 3.324 1.268 3.675 3h3.075A3.754 3.754 0 0118 21.75a.75.75 0 01-.75.75H1.5v.75a.75.75 0 01-.75.75zm15.621-3a2.264 2.264 0 00-2.121-1.5h-7.5a.75.75 0 010-1.5h2.868A2.262 2.262 0 007.5 16.5h-6V21h14.871zM18.75 10.5c-2.895 0-5.25-2.355-5.25-5.25S15.855 0 18.75 0 24 2.355 24 5.25s-2.355 5.25-5.25 5.25zm0-9C16.682 1.5 15 3.182 15 5.25S16.682 9 18.75 9s3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75zM15.75 16.5a3.726 3.726 0 01-2.652-1.098 3.748 3.748 0 01-.16-5.132.75.75 0 011.125.992 2.253 2.253 0 001.688 3.739A2.246 2.246 0 0018 12.75a.75.75 0 011.5 0 3.73 3.73 0 01-1.098 2.652A3.726 3.726 0 0115.75 16.5z"}})])
          )
        }
      }
    