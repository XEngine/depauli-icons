
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
            children.concat([_c('path',{attrs:{"d":"M12.001 11.125a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.717.717 0 01.262 0c.513.06.922.47.983.983a.796.796 0 010 .26c-.061.513-.47.922-.983.983a.734.734 0 01-.131.012z"}}),_c('path',{attrs:{"d":"M11.999 18.176a1.489 1.489 0 01-1.182-.577C8.963 15.225 6.751 11.98 6.751 10a5.256 5.256 0 015.25-5.25 5.256 5.256 0 015.25 5.25c0 1.982-2.212 5.227-4.068 7.6a1.495 1.495 0 01-1.184.576zm.002-11.926A3.754 3.754 0 008.251 10c0 1.159 1.437 3.717 3.75 6.676 2.313-2.957 3.75-5.515 3.75-6.676a3.755 3.755 0 00-3.75-3.75z"}}),_c('path',{attrs:{"d":"M20.943 12.998a.738.738 0 01-.208-.048l-.027-.011a.796.796 0 01-.202-.127l-.036-.031-2.25-2.25c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l.916.916a8.271 8.271 0 00-8.169-7.139c-.531 0-1.068.052-1.596.154a8.212 8.212 0 00-5.277 3.492.75.75 0 11-1.243-.839 9.707 9.707 0 016.236-4.127 9.71 9.71 0 017.328 1.491 9.78 9.78 0 014.244 7.052L22.72 9.47a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.25 2.25a.744.744 0 01-.189.133.49.49 0 01-.064.033.722.722 0 01-.334.052zM11.971 21.253a9.703 9.703 0 01-5.444-1.674 9.777 9.777 0 01-4.244-7.052L1.281 13.53a.744.744 0 01-1.06 0 .752.752 0 010-1.061l2.25-2.25a.733.733 0 01.235-.157l.03-.012a.718.718 0 01.246-.048h.081a.735.735 0 01.237.061.756.756 0 01.233.156l2.25 2.25a.744.744 0 010 1.06.744.744 0 01-1.06 0l-.916-.916a8.275 8.275 0 003.562 5.723 8.211 8.211 0 006.202 1.262 8.217 8.217 0 005.279-3.493.749.749 0 011.358.276.747.747 0 01-.115.563 9.707 9.707 0 01-6.236 4.127 9.943 9.943 0 01-1.886.182z"}})])
          )
        }
      }
    