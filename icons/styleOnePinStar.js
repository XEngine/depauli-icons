
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
            children.concat([_c('path',{attrs:{"d":"M14.479 14.251c-.199 0-.399-.049-.577-.143L12 13.113l-1.904.995a1.242 1.242 0 01-1.295-.09 1.225 1.225 0 01-.497-1.203l.364-2.112-1.545-1.499a1.227 1.227 0 01.688-2.095l2.132-.308.953-1.922a1.234 1.234 0 011.665-.543c.236.119.423.307.543.543l.953 1.923 2.135.308a1.225 1.225 0 01.683 2.096l-1.545 1.498.365 2.111c.08.464-.118.938-.502 1.208a1.224 1.224 0 01-.714.228zM9.817 9.727c.29.281.423.687.355 1.084l-.297 1.719 1.55-.81a1.229 1.229 0 011.151.001l1.547.809-.296-1.717a1.23 1.23 0 01.355-1.087l1.25-1.212-1.726-.249a1.23 1.23 0 01-.929-.67L12 6.028l-.776 1.566a1.24 1.24 0 01-.933.673l-1.724.248 1.25 1.212z"}}),_c('path',{attrs:{"d":"M12 24a.754.754 0 01-.7-.481l-1.656-4.306c-4.296-1.072-7.393-5.017-7.394-9.459C2.249 4.378 6.622.003 11.998.002c5.377 0 9.751 4.373 9.752 9.748.001 4.443-3.096 8.391-7.394 9.463L12.7 23.519A.755.755 0 0112 24zm-.002-22.498c-4.549.001-8.249 3.702-8.248 8.251a8.278 8.278 0 006.6 8.082.748.748 0 01.55.466L12 21.16l1.1-2.86a.75.75 0 01.55-.466c3.825-.781 6.601-4.181 6.6-8.085-.001-4.547-3.702-8.247-8.25-8.247l-.002-.375v.375z"}})])
          )
        }
      }
    