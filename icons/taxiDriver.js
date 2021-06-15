
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
            children.concat([_c('path',{attrs:{"d":"M19.5 10.5c-2.068 0-3.75-1.682-3.75-3.75S17.432 3 19.5 3s3.75 1.682 3.75 3.75-1.682 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25S18.259 9 19.5 9s2.25-1.009 2.25-2.25S20.741 4.5 19.5 4.5zM18 24a.751.751 0 01-.744-.657L16.588 18h-.838a.75.75 0 01-.75-.75V15c0-2.481 2.019-4.5 4.5-4.5S24 12.519 24 15v2.25a.75.75 0 01-.75.75h-.838l-.668 5.343A.751.751 0 0121 24h-3zm2.338-1.5l.668-5.343a.752.752 0 01.744-.657h.75V15c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.5h.75c.377 0 .697.282.744.657l.668 5.343h1.676zM10.5 1.5a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H10.5zM6 3a.75.75 0 01-.75-.75A2.252 2.252 0 017.5 0a.75.75 0 010 1.5c-.414 0-.75.336-.75.75S6.414 3 6 3zM15.75 1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM3.75 13.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM9.75 13.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M12.75 18a.75.75 0 01-.75-.75v-.746H3v.746a.75.75 0 01-1.5 0v-.874a2.258 2.258 0 01-1.502-2.122v-1.8c0-.446.131-.877.378-1.248L1.57 9.417l1.126-3.378A2.247 2.247 0 014.831 4.5h5.338c.97 0 1.828.618 2.135 1.539l1.126 3.379 1.013 1.519a.748.748 0 01-.624 1.166.747.747 0 01-.624-.334l-.846-1.269H2.651l-1.027 1.538a.748.748 0 00-.126.416v1.8c0 .4.321.731.72.748C2.229 15 2.241 15 2.25 15c.021 0 .042.001.062.004h10.375a.75.75 0 01.813.746v1.5a.75.75 0 01-.75.75zm-1.041-9l-.829-2.487A.748.748 0 0010.169 6H4.831a.748.748 0 00-.711.513L3.291 9h8.418z"}})])
          )
        }
      }
    