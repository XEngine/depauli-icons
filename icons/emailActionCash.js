
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
            children.concat([_c('path',{attrs:{"d":"M3 24.002a2.252 2.252 0 01-2.25-2.25v-9.7a1.502 1.502 0 011.5-1.499h.029c.313 0 .643.119.903.325l.568.451V2.25A2.252 2.252 0 016 0h12a2.252 2.252 0 012.25 2.25v9.078l.568-.45c.264-.209.595-.324.931-.324.462 0 .89.207 1.177.568.209.264.324.594.325.93v9.701a2.252 2.252 0 01-2.25 2.25H3zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-9.7l-7.431 5.894a3.771 3.771 0 01-2.32.805 3.768 3.768 0 01-2.316-.803L2.25 12.053v9.699zm8.363-4.981c.4.313.88.48 1.386.48.508 0 .989-.167 1.39-.482l5.36-4.251V2.25a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v10.268l5.363 4.253z"}}),_c('path',{attrs:{"d":"M12 13.5a.75.75 0 01-.75-.75v-.354a2.983 2.983 0 01-1.705-1.099.745.745 0 01-.146-.555.745.745 0 01.742-.649c.233 0 .457.111.597.296a1.48 1.48 0 001.172.581l.058-.001c.775 0 1.342-.422 1.342-.798 0-.376-.561-.796-1.312-.796-1.551 0-2.813-1.031-2.813-2.298 0-1.052.85-1.943 2.063-2.213V4.5a.75.75 0 011.5 0v.355a2.979 2.979 0 011.705 1.097.751.751 0 01-1.195.908 1.485 1.485 0 00-1.176-.58h-.053c-.774 0-1.342.422-1.342.798 0 .377.562.798 1.313.798 1.551 0 2.812 1.03 2.812 2.296 0 1.052-.849 1.943-2.062 2.213v.365a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    