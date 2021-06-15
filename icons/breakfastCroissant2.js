
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
            children.concat([_c('path',{attrs:{"d":"M20.94 21.827a2.22 2.22 0 01-1.008-.241 2.227 2.227 0 01-1.121-1.3c-.978-2.957-2.897-5.129-5.153-5.848-.536.323-1.092.486-1.654.486-.562 0-1.117-.163-1.653-.486-2.255.718-4.173 2.89-5.153 5.846a2.256 2.256 0 01-2.129 1.53 2.242 2.242 0 01-2.083-1.395 11.933 11.933 0 01-.279-8.796l.006-.018a12.028 12.028 0 014.829-6.041 2.243 2.243 0 011.397-2.438 13.397 13.397 0 014.963-.953h.21c1.7 0 3.369.32 4.961.951a2.243 2.243 0 011.398 2.425 12.043 12.043 0 014.853 6.094 11.957 11.957 0 01-.348 8.889 2.27 2.27 0 01-1.33 1.182c-.23.075-.467.113-.706.113zm-2.496-5.542a12.697 12.697 0 011.793 3.53.742.742 0 001.377.088 10.485 10.485 0 00.598-6.757l-3.768 3.139zM1.81 13.155a10.5 10.5 0 00.558 6.681.758.758 0 00.984.422.749.749 0 00.425-.451 12.644 12.644 0 011.79-3.52L1.81 13.155zm4.725 1.984c.771-.788 1.623-1.396 2.54-1.813-1.392-1.605-2.426-4.166-3.098-6.252a10.388 10.388 0 00-3.663 4.548l4.221 3.517zm8.401-1.813c.917.418 1.769 1.025 2.54 1.813l4.231-3.525a10.414 10.414 0 00-3.67-4.554c-.672 2.092-1.707 4.658-3.101 6.266zm-3.012-9.653c-1.525 0-3.017.285-4.433.847a.75.75 0 00-.447.905c1.103 3.867 2.985 7.999 4.961 7.999 1.977 0 3.859-4.133 4.961-8.001a.748.748 0 00-.445-.904 11.974 11.974 0 00-4.432-.846h-.165z"}})])
          )
        }
      }
    