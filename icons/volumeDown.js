
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
            children.concat([_c('path',{attrs:{"d":"M11.988 7.493c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75 3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.009-2.25-2.25-2.25z"}}),_c('path',{attrs:{"d":"M11.988 4.868c-.62 0-1.125-.505-1.125-1.125s.505-1.125 1.125-1.125 1.125.505 1.125 1.125-.504 1.125-1.125 1.125zM11.983 19.841a7.67 7.67 0 01-5.269-2.089 7.653 7.653 0 01-2.426-5.374 7.66 7.66 0 012.086-5.516l.086-.09a.748.748 0 011.062-.019.751.751 0 01.017 1.061l-.073.076a6.166 6.166 0 00-1.678 4.44 6.165 6.165 0 001.953 4.328 6.166 6.166 0 004.441 1.68 6.162 6.162 0 004.328-1.954 6.21 6.21 0 00-.274-8.769.751.751 0 01.513-1.296c.191 0 .374.072.513.203 3.096 2.909 3.249 7.794.341 10.89a7.657 7.657 0 01-5.375 2.426c-.08.001-.163.003-.245.003z"}}),_c('path',{attrs:{"d":"M12.004 23.983a11.754 11.754 0 01-9.666-5.051 11.685 11.685 0 01-.15-13.144.75.75 0 111.252.826 10.192 10.192 0 00.131 11.464 10.252 10.252 0 008.432 4.405c2.086 0 4.097-.629 5.813-1.818 4.12-2.853 5.505-8.336 3.434-12.768v.346a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5h-.397c2.774 5.209 1.227 11.756-3.682 15.156a11.662 11.662 0 01-6.667 2.084z"}})])
          )
        }
      }
    