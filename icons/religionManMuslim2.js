
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
            children.concat([_c('path',{attrs:{"d":"M2.783 24a.746.746 0 01-.668-.409.748.748 0 01-.046-.572 10.57 10.57 0 012.403-4.024.753.753 0 011.061-.023.751.751 0 01.023 1.06 9.046 9.046 0 00-2.059 3.448.748.748 0 01-.714.52zM21.287 24a.75.75 0 01-.714-.519 9.046 9.046 0 00-2.059-3.448.751.751 0 01.541-1.268c.203 0 .401.084.542.231A10.558 10.558 0 0122 23.02c.062.19.046.394-.045.572a.742.742 0 01-.668.408zM12.035 23.964a.719.719 0 01-.305-.066l-.037-.019a.753.753 0 01-.163-.115c-.01-.01-.033-.033-.042-.044a.56.56 0 01-.06-.069c-1.435-1.993-3.005-3.237-4.39-4.334-3.278-2.593-5.648-4.47-.977-12.763V6c0-3.308 2.692-6 6-6s6 2.692 6 6v.648c4.6 8.212 2.238 10.084-1.027 12.671-1.385 1.097-2.955 2.341-4.39 4.333a.586.586 0 01-.061.071.732.732 0 01-.207.158l-.031.016c-.028.013-.056.022-.084.031a.47.47 0 01-.063.019.79.79 0 01-.163.017zm1.395-3.52c.947-.935 1.882-1.675 2.672-2.301 3.07-2.432 4.622-3.662.683-10.705a27.587 27.587 0 00-.402-.051L13.43 20.444zM7.281 7.445c-3.935 7.037-2.383 8.266.686 10.698.791.626 1.726 1.367 2.672 2.301L7.688 7.393l-.407.052zm4.754 12.369l1.677-7.414a5.871 5.871 0 01-.555-.464c-.374-.34-.726-.662-1.096-.662-.371 0-.724.322-1.097.662-.181.165-.38.347-.599.495l1.67 7.383zm-2.041-9.023c.484-.441 1.14-1.016 2.067-1.016.898 0 1.543.543 2.023.977l.794-3.511a36.35 36.35 0 00-5.685.005l.801 3.545zM12.061 1.5a4.506 4.506 0 00-4.499 4.396c.204-.024.408-.046.612-.067.013-.002.038-.006.064-.007a37.955 37.955 0 017.588-.006 42.358 42.358 0 01.732.08A4.503 4.503 0 0012.061 1.5z"}})])
          )
        }
      }
    