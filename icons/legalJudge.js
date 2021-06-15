
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
            children.concat([_c('path',{attrs:{"d":"M2.524 24.001a.75.75 0 01-.678-1.071 11.261 11.261 0 015.35-5.35 11.106 11.106 0 014.753-1.076c.012-.001.031-.003.051-.003l.042.002c4.307.023 8.275 2.544 10.112 6.427.086.181.096.385.028.574a.746.746 0 01-.705.497.753.753 0 01-.678-.429 9.712 9.712 0 00-8.048-5.537v2.966a.75.75 0 01-1.5 0v-2.97a9.63 9.63 0 00-3.412.905 9.753 9.753 0 00-4.636 4.636.756.756 0 01-.679.429z"}}),_c('path',{attrs:{"d":"M20.25 18.751a3.754 3.754 0 01-3.75-3.75v-.539a6.007 6.007 0 01-4.493 2.037A6.012 6.012 0 017.5 14.461V15a3.754 3.754 0 01-3.75 3.75c-1.654 0-3-1.346-3-3 0-.863.38-1.685 1.018-2.25A3.02 3.02 0 01.75 11.25c0-1.381.958-2.582 2.274-2.911A8.973 8.973 0 0112 .001a8.972 8.972 0 018.976 8.339 3.016 3.016 0 012.274 2.911c0 .863-.38 1.685-1.019 2.25a3.02 3.02 0 011.019 2.25c0 1.654-1.346 3-3 3zM12.75 5.09c.256.536 1.597 3.045 4.312 3.156a.75.75 0 01.688.535c.168.563.252 1.147.25 1.735v4.485a2.252 2.252 0 002.25 2.25c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5a.75.75 0 010-1.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5a.75.75 0 01-.75-.75 7.486 7.486 0 00-6.75-7.462V5.09zm-1.5-3.552A7.488 7.488 0 004.5 9.001a.75.75 0 01-.75.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5a.75.75 0 010 1.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5A2.252 2.252 0 006 15.001v-4.5l.001-.03c0-.56.084-1.135.249-1.689a.75.75 0 01.688-.535c2.724-.11 4.057-2.62 4.311-3.155V1.538zM7.571 9.696a4.499 4.499 0 003.142 5.113c.423.126.858.19 1.292.19.738 0 1.476-.188 2.134-.543a4.471 4.471 0 002.172-2.673 4.51 4.51 0 00.116-2.087C14.176 9.394 12.768 7.927 12 6.794c-.767 1.133-2.175 2.602-4.429 2.902z"}})])
          )
        }
      }
    