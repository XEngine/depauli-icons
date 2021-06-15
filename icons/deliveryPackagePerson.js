
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
            children.concat([_c('path',{attrs:{"d":"M1.55 13.5C.695 13.5 0 12.805 0 11.95V1.55C0 .695.695 0 1.55 0h10.4a.75.75 0 010 1.5h-2.2v4.157c0 .396-.219.754-.57.934-.146.08-.322.125-.502.125-.174 0-.348-.043-.503-.123l-1.419-.642-1.466.692a1.087 1.087 0 01-1.006-.035 1.045 1.045 0 01-.534-.912V1.5h-2.2a.05.05 0 00-.05.05v10.4c0 .027.023.05.05.05h8.2a.75.75 0 010 1.5h-8.2zm3.7-8.496l1.18-.557a.752.752 0 01.63-.005l1.19.539V1.5h-3v3.504zM15.75 24a.748.748 0 01-.746-.676l-.683-6.824H12.75a.75.75 0 01-.75-.75V13.5c0-3.308 2.692-6 6-6s6 2.692 6 6v2.25a.75.75 0 01-.75.75h-1.571l-.683 6.825a.747.747 0 01-.746.675h-4.5zm3.821-1.5l.683-6.825A.747.747 0 0121 15h1.5v-1.5c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5V15H15c.387 0 .708.291.746.676l.683 6.824h3.142z"}}),_c('path',{attrs:{"d":"M18 7.5a3.743 3.743 0 01-3.673-3H12.75a.75.75 0 010-1.5h1.577c.35-1.732 1.874-3 3.673-3 2.068 0 3.75 1.682 3.75 3.75S20.068 7.5 18 7.5zm-2.118-3C16.195 5.379 17.04 6 18 6s1.805-.621 2.118-1.5h-4.236zM20.118 3C19.805 2.121 18.96 1.5 18 1.5s-1.805.621-2.118 1.5h4.236z"}})])
          )
        }
      }
    