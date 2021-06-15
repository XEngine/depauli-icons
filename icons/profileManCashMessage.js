
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
            children.concat([_c('path',{attrs:{"d":"M14.25 20.25a.751.751 0 01-.75-.75v-3.75a.75.75 0 011.5 0v2.149l3.27-2.725a.75.75 0 01.48-.174h3a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-12c-.414 0-.75.336-.75.75a.75.75 0 01-1.5 0A2.252 2.252 0 019.75 0h12C22.99 0 24 1.009 24 2.25v12a2.252 2.252 0 01-2.25 2.25h-2.729l-4.292 3.576a.746.746 0 01-.479.174z"}}),_c('path',{attrs:{"d":"M15.75 13.341a.75.75 0 01-.75-.75v-.75h-1.5a.75.75 0 010-1.5h3.155a.589.589 0 00.548-.371.594.594 0 00-.306-.76l-2.62-.814a2.08 2.08 0 01-1.37-1.965c0-.559.219-1.084.614-1.478a2.08 2.08 0 011.478-.611H15v-.75a.75.75 0 011.5 0v.75h1.125a.75.75 0 010 1.5H15a.589.589 0 00-.594.591.59.59 0 00.35.541l2.621.814a2.077 2.077 0 011.201 1.141c.219.514.225 1.083.016 1.601a2.082 2.082 0 01-1.939 1.311H16.5v.75a.75.75 0 01-.75.75zM6 18c-3.308 0-6-2.692-6-6 0-1.051.278-2.087.805-2.997l.009-.016A6.027 6.027 0 016 6c3.308 0 6 2.692 6 6s-2.692 6-6 6zm-4.269-7.413A4.409 4.409 0 001.5 12c0 2.481 2.019 4.5 4.5 4.5a4.506 4.506 0 004.487-4.156 9.411 9.411 0 01-2.713.398 9.487 9.487 0 01-6.043-2.155zm.726-1.359a7.952 7.952 0 005.313 2.008c.881 0 1.744-.143 2.569-.426A4.512 4.512 0 006 7.5a4.5 4.5 0 00-3.543 1.728zM13.675 24a.746.746 0 01-.592-.29c-1.719-2.208-4.294-3.475-7.065-3.475a8.988 8.988 0 00-4.863 1.438.747.747 0 01-1.138-.79.743.743 0 01.328-.471 10.486 10.486 0 015.674-1.677c3.235 0 6.241 1.478 8.248 4.056a.743.743 0 01.152.553.742.742 0 01-.284.499.757.757 0 01-.46.157z"}})])
          )
        }
      }
    