
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
            children.concat([_c('path',{attrs:{"d":"M16.833 24a2.586 2.586 0 01-2.583-2.583V18a.75.75 0 011.5 0v3.417c0 .597.486 1.083 1.083 1.083h4.584c.597 0 1.083-.486 1.083-1.083V10.833c0-.597-.486-1.083-1.083-1.083H19.5a.75.75 0 010-1.5h1.917A2.586 2.586 0 0124 10.833v10.584A2.586 2.586 0 0121.417 24h-4.584zM10.993 18.011a.75.75 0 01-.75-.75v-2.277a.75.75 0 01.874-.74l.764.128a1.52 1.52 0 001.776-1.506V11a.75.75 0 01.568-.728l.71-.177a.39.39 0 00.229-.593l-1.381-2.069a.74.74 0 01-.126-.416v-.568c0-1.237-.552-2.422-1.554-3.336-1.141-1.04-2.7-1.613-4.389-1.613-.227 0-.458.011-.687.032a6.081 6.081 0 00-5.505 6.595 6.078 6.078 0 003.017 4.717.75.75 0 01.375.65v3.767a.75.75 0 01-1.5 0v-3.349A7.612 7.612 0 01.028 8.261C-.348 4.103 2.731.414 6.89.038 7.162.013 7.438 0 7.71 0c2.067 0 3.986.712 5.403 2.004 1.318 1.202 2.043 2.78 2.043 4.445v.341l1.255 1.881a1.893 1.893 0 01-1.113 2.88l-.143.036v1.28a3.016 3.016 0 01-3.024 3.028c-.129 0-.26-.008-.389-.025v1.393a.749.749 0 01-.749.748z"}}),_c('path',{attrs:{"d":"M18.318 18.748a.747.747 0 01-.543-.298l-1.125-1.5a.75.75 0 011.2-.9l.606.808 2.014-2.013a.744.744 0 011.06 0 .749.749 0 010 1.06l-2.625 2.625a.744.744 0 01-.53.22c-.019 0-.038 0-.057-.002z"}})])
          )
        }
      }
    