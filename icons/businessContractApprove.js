
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
            children.concat([_c('path',{attrs:{"d":"M7.501 22.5a2.252 2.252 0 01-2.25-2.25v-6.573l-.134-.113c-1.8-1.514-3.661-3.081-3.615-5.006V4.37L.163 2.683A.751.751 0 01.75 1.467c.23 0 .445.103.588.284l1.5 1.892a.75.75 0 01.163.466v4.467c-.023.977.957 2.006 2.25 3.132V8.451l-.556-.569a.751.751 0 011.074-1.048l.711.728c.042.035.08.074.113.115l.945.968a.468.468 0 00.803-.319.466.466 0 00-.133-.333l-2.75-2.806a.745.745 0 01-.213-.524V3.265a5.502 5.502 0 00-.851-2.097A.751.751 0 015.64.332a7.003 7.003 0 011.095 2.742c.007.043.01.084.01.126v1.157l2.537 2.588c.368.378.566.875.559 1.401a1.959 1.959 0 01-.594 1.384c-.369.36-.857.558-1.373.558-.408 0-.796-.122-1.123-.35V20.25c0 .414.336.75.75.75h7.5a.75.75 0 010 1.5h-7.5zM18.989 23.996a.747.747 0 01-.623-.332 6.985 6.985 0 01-1.094-2.737.747.747 0 01-.011-.126v-1.155l-2.54-2.589a1.971 1.971 0 01.034-2.785 1.915 1.915 0 011.409-.558 1.95 1.95 0 011.375.594l.463.474v-3.477a.75.75 0 011.233-.573c1.812 1.531 3.309 2.942 3.267 4.711v4.187l1.338 1.687a.747.747 0 01-.588 1.216.745.745 0 01-.588-.284l-1.5-1.892a.756.756 0 01-.162-.466v-4.466c.019-.802-.675-1.662-1.5-2.453v3.651a.748.748 0 01-1.286.524l-1.75-1.792a.469.469 0 00-.33-.142.469.469 0 00-.341.795l2.753 2.806a.748.748 0 01.215.525v1.396c.137.753.423 1.457.851 2.094a.748.748 0 01-.625 1.167z"}}),_c('path',{attrs:{"d":"M9.001 18.75a.75.75 0 010-1.5h3.978a.75.75 0 010 1.5H9.001zM9.001 15a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.751 10.5c-2.895 0-5.25-2.355-5.25-5.25S12.856 0 15.751 0a.75.75 0 010 1.5c-2.068 0-3.75 1.682-3.75 3.75S13.683 9 15.751 9s3.75-1.682 3.75-3.75a.75.75 0 011.5 0 5.256 5.256 0 01-5.25 5.25z"}}),_c('path',{attrs:{"d":"M15.751 6.89c-.349 0-.678-.136-.926-.382l-1.293-1.294a.752.752 0 010-1.061.744.744 0 01.531-.219c.201 0 .389.078.531.22l1.158 1.159 3.97-3.969a.744.744 0 011.06 0 .744.744 0 010 1.06l-4.1 4.1a1.3 1.3 0 01-.927.386h-.004z"}})])
          )
        }
      }
    