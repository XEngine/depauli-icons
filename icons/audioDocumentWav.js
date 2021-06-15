
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
            children.concat([_c('path',{attrs:{"d":"M1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM19.5 16.504a.75.75 0 01-.624-.334 9.65 9.65 0 01-1.626-5.37V8.25a.75.75 0 011.5 0v2.55c0 1.184.258 2.354.75 3.423a8.197 8.197 0 00.75-3.423V8.25a.75.75 0 011.5 0v2.55a9.65 9.65 0 01-1.626 5.37.75.75 0 01-.624.334zM7.467 16.499a.751.751 0 01-.688-.543L6 13.23l-.779 2.726a.75.75 0 01-.683.543l-.037.001a.746.746 0 01-.697-.472l-.856-2.141a9.694 9.694 0 01-.698-3.62V8.25a.75.75 0 011.5 0v2.017c0 1.054.198 2.085.59 3.063l.041.104.897-3.14c.092-.32.389-.544.722-.544s.63.224.721.544l.897 3.14.041-.103a8.182 8.182 0 00.59-3.063V8.25a.75.75 0 011.501 0v2.017a9.683 9.683 0 01-.698 3.621l-.856 2.141a.745.745 0 01-.696.471l-.033-.001zM15 16.5a.75.75 0 01-.75-.75V13.5h-1.5v2.25a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zm-.75-4.5V9.75a.75.75 0 00-1.5 0V12h1.5z"}})])
          )
        }
      }
    