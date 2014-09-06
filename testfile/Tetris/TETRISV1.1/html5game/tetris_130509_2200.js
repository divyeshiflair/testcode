var tf = {
    uf: [],
    vf: [{
        wf: "snd_boom",
        xf: 0,
        yf: ".wav",
        zf: "snd_boom",
        ag: 0,
        volume: 1,
        bg: 0,
        preload: !1
    }, {
        wf: "snd_eat",
        xf: 0,
        yf: ".wav",
        zf: "snd_eat",
        ag: 0,
        volume: 1,
        bg: 0,
        preload: !1
    }, {
        wf: "snd_music",
        xf: 1,
        yf: ".mp3",
        zf: "snd_music",
        ag: 0,
        volume: 1,
        bg: 0,
        preload: !1
    }],
    cg: [{
        wf: "sp_block",
        width: 23,
        height: 23,
        dg: !1,
        eg: 11,
        fg: 11,
        gg: 22,
        hg: 22,
        ig: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }, {
        wf: "sp_Icon_logo",
        width: 69,
        height: 64,
        dg: !1,
        eg: 34,
        fg: 32,
        gg: 68,
        hg: 63,
        ig: [10]
    }, {
        wf: "sp_MadeBy",
        width: 168,
        height: 186,
        dg: !1,
        eg: 84,
        fg: 93,
        gg: 167,
        hg: 185,
        ig: [11]
    }, {
        wf: "sp_clickhere",
        width: 296,
        height: 67,
        dg: !1,
        eg: 148,
        fg: 33,
        gg: 295,
        hg: 66,
        ig: [12]
    }, {
        wf: "sp_msg_end",
        width: 307,
        height: 67,
        dg: !1,
        eg: 153,
        fg: 33,
        gg: 306,
        hg: 66,
        ig: [13]
    }, {
        wf: "sp_title_tetris",
        width: 515,
        height: 159,
        dg: !1,
        eg: 257,
        fg: 79,
        jg: 5,
        gg: 513,
        kg: 5,
        hg: 155,
        ig: [14]
    }, {
        wf: "sp_help",
        width: 258,
        height: 203,
        dg: !1,
        eg: 129,
        fg: 101,
        gg: 257,
        hg: 202,
        ig: [15]
    }, {
        wf: "sp_btn",
        width: 43,
        height: 44,
        dg: !1,
        eg: 21,
        fg: 22,
        gg: 42,
        hg: 43,
        ig: [16]
    }, {
        wf: "sp_btn_pause",
        width: 76,
        height: 49,
        dg: !1,
        eg: 38,
        fg: 24,
        jg: 1,
        gg: 74,
        kg: 1,
        hg: 46,
        ig: [17]
    }],
    lg: [{
        wf: "bck1",
        mg: !1,
        dg: !1,
        preload: !1,
        ig: 18
    }, {
        wf: "bck_g1",
        mg: !1,
        dg: !1,
        preload: !1,
        ig: 19
    }, {
        wf: "bck_next",
        mg: !1,
        dg: !1,
        preload: !1,
        ig: 20
    }, {
        wf: "bck_gui_score",
        mg: !1,
        dg: !1,
        preload: !1,
        ig: 21
    }],
    ng: [],
    og: [pg, qg, rg, sg, tg, ug, vg, wg, xg, yg, zg],
    ah: [{
        wf: "f_en_log",
        bh: 5,
        bold: !1,
        ch: !1,
        dh: 48,
        eh: 57,
        fh: 0,
        gh: 4,
        hh: "Arial",
        ih: 22,
        jh: 1,
        kh: 1,
        lh: [{
            mh: 32,
            nh: " ",
            oh: 0,
            ph: 0,
            qh: 99999,
            rh: 10,
            shift: 99999,
            sh: 0
        }, {
            mh: 48,
            nh: "0",
            oh: 24,
            ph: 0,
            qh: 4,
            rh: 8,
            shift: 4,
            sh: 0
        }, {
            mh: 49,
            nh: "1",
            oh: 22,
            ph: 10,
            qh: 2,
            rh: 8,
            shift: 4,
            sh: 1
        }, {
            mh: 50,
            nh: "2",
            oh: 6,
            ph: 10,
            qh: 4,
            rh: 8,
            shift: 4,
            sh: 0
        }, {
            mh: 51,
            nh: "3",
            oh: 18,
            ph: 0,
            qh: 4,
            rh: 8,
            shift: 4,
            sh: 0
        }, {
            mh: 52,
            nh: "4",
            oh: 17,
            ph: 10,
            qh: 3,
            rh: 8,
            shift: 4,
            sh: 1
        }, {
            mh: 53,
            nh: "5",
            oh: 6,
            ph: 0,
            qh: 4,
            rh: 8,
            shift: 4,
            sh: 0
        }, {
            mh: 54,
            nh: "6",
            oh: 12,
            ph: 0,
            qh: 4,
            rh: 8,
            shift: 4,
            sh: 0
        }, {
            mh: 55,
            nh: "7",
            oh: 12,
            ph: 10,
            qh: 3,
            rh: 8,
            shift: 4,
            sh: 0
        }, {
            mh: 56,
            nh: "8",
            oh: 0,
            ph: 0,
            qh: 4,
            rh: 8,
            shift: 4,
            sh: 0
        }, {
            mh: 57,
            nh: "9",
            oh: 0,
            ph: 10,
            qh: 4,
            rh: 8,
            shift: 4,
            sh: 0
        }, ],
    }, {
        wf: "f_fa_1",
        bh: 20,
        bold: !0,
        ch: !1,
        dh: 48,
        eh: 57,
        fh: 0,
        gh: 4,
        hh: "Times New Roman Baltic",
        ih: 23,
        jh: 1,
        kh: 1,
        lh: [{
            mh: 32,
            nh: " ",
            oh: 0,
            ph: 0,
            qh: 99999,
            rh: 38,
            shift: 99999,
            sh: 0
        }, {
            mh: 48,
            nh: "0",
            oh: 17,
            ph: 33,
            qh: 15,
            rh: 31,
            shift: 18,
            sh: 1
        }, {
            mh: 49,
            nh: "1",
            oh: 34,
            ph: 33,
            qh: 11,
            rh: 31,
            shift: 18,
            sh: 3
        }, {
            mh: 50,
            nh: "2",
            oh: 104,
            ph: 0,
            qh: 15,
            rh: 31,
            shift: 18,
            sh: 1
        }, {
            mh: 51,
            nh: "3",
            oh: 0,
            ph: 33,
            qh: 15,
            rh: 31,
            shift: 18,
            sh: 1
        }, {
            mh: 52,
            nh: "4",
            oh: 0,
            ph: 0,
            qh: 17,
            rh: 31,
            shift: 18,
            sh: 0
        }, {
            mh: 53,
            nh: "5",
            oh: 87,
            ph: 0,
            qh: 15,
            rh: 31,
            shift: 18,
            sh: 1
        }, {
            mh: 54,
            nh: "6",
            oh: 36,
            ph: 0,
            qh: 15,
            rh: 31,
            shift: 18,
            sh: 1
        }, {
            mh: 55,
            nh: "7",
            oh: 19,
            ph: 0,
            qh: 15,
            rh: 31,
            shift: 18,
            sh: 1
        }, {
            mh: 56,
            nh: "8",
            oh: 70,
            ph: 0,
            qh: 15,
            rh: 31,
            shift: 18,
            sh: 1
        }, {
            mh: 57,
            nh: "9",
            oh: 53,
            ph: 0,
            qh: 15,
            rh: 31,
            shift: 18,
            sh: 1
        }, ],
    }],
    th: [],
    uh: [{}, ],
    vh: [{
            wf: "controller_global",
            wh: -1,
            xh: !0,
            parent: -100,
            yh: zh,
            ai: bi,
            ci: di,
            ei: fi,
            gi: [],
            hi: []
        }, {
            wf: "controller_main",
            wh: -1,
            xh: !0,
            parent: -100,
            ii: ji,
            ki: li,
            mi: ni,
            oi: pi,
            qi: ri,
            gi: [],
            hi: []
        }, {
            wf: "nextTimer",
            wh: -1,
            xh: !0,
            parent: -100,
            yh: si,
            ti: ui,
            gi: [],
            hi: []
        }, {
            wf: "GUI_log",
            wh: -1,
            xh: !0,
            parent: -100,
            yh: vi,
            wi: xi,
            yi: zi,
            aj: bj,
            gi: [],
            hi: []
        }, {
            wf: "GUI_score",
            wh: -1,
            xh: !0,
            parent: -100,
            yh: cj,
            dj: ej,
            wi: fj,
            gi: [],
            hi: []
        }, {
            wf: "block1",
            gj: -999,
            parent: -100,
            yh: hj,
            ij: jj,
            ti: kj,
            lj: mj,
            nj: oj,
            pj: qj,
            rj: sj,
            tj: uj,
            vj: wj,
            gi: [],
            hi: []
        }, {
            wf: "block2",
            xh: !0,
            gj: -99,
            parent: -100,
            yh: xj,
            yj: zj,
            lj: ak,
            gi: [],
            hi: []
        }, {
            wf: "block_n",
            xh: !0,
            gj: -99,
            parent: -100,
            yh: bk,
            gi: [],
            hi: []
        }, {
            wf: "block_MAM",
            wh: -1,
            xh: !0,
            parent: -100,
            ck: dk,
            ii: ek,
            gi: [],
            hi: []
        }, {
            wf: "ab",
            parent: -100,
            yh: fk,
            ii: gk,
            gi: [],
            hi: []
        }, {
            wf: "dummy_block",
            xh: !0,
            gj: -1000,
            parent: -100,
            yh: hk,
            yj: ik,
            lj: jk,
            kk: lk,
            gi: [],
            hi: []
        }, {
            wf: "GUI_Icon_logo",
            wh: 1,
            xh: !0,
            gj: -2000,
            parent: -100,
            mk: nk,
            gi: [],
            hi: []
        }, {
            wf: "GUI_msg_Logo_credit",
            wh: 2,
            xh: !0,
            gj: -2200,
            parent: -100,
            yh: ok,
            pk: qk,
            kk: rk,
            gi: [],
            hi: []
        }, {
            wf: "GUI_Help",
            wh: 6,
            xh: !0,
            gj: -1000,
            parent: -100,
            yh: sk,
            pk: tk,
            ai: uk,
            kk: vk,
            gi: [],
            hi: []
        }, {
            wf: "GUI_Title",
            wh: 5,
            xh: !0,
            parent: -100,
            lj: wk,
            ii: xk,
            gi: [],
            hi: []
        }, {
            wf: "GUI_ClickHere",
            wh: 3,
            xh: !0,
            parent: -100,
            yh: yk,
            ti: zk,
            gi: [],
            hi: []
        }, {
            wf: "GUI_Madby",
            wh: 2,
            xh: !0,
            parent: -100,
            gi: [],
            hi: []
        }, {
            wf: "GUI_msg_end",
            wh: 4,
            xh: !0,
            gj: -3000,
            parent: -100,
            yh: al,
            kk: bl,
            gi: [],
            hi: []
        }, {
            wf: "btn_R",
            wh: 7,
            gj: -2000,
            parent: -100,
            cl: dl,
            el: fl,
            gl: hl,
            gi: [],
            hi: []
        }, {
            wf: "btn_L",
            wh: 7,
            gj: -2000,
            parent: -100,
            cl: il,
            el: jl,
            gl: kl,
            gi: [],
            hi: []
        },
        null, {
            wf: "btn_D",
            wh: 7,
            gj: -2000,
            parent: -100,
            cl: ll,
            el: ml,
            gl: nl,
            gi: [],
            hi: []
        }, {
            wf: "btn_U",
            wh: 7,
            gj: -2000,
            parent: -100,
            cl: ol,
            el: pl,
            gi: [],
            hi: []
        }, {
            wf: "btn_pause",
            wh: 8,
            xh: !0,
            parent: -100,
            yh: ql,
            dj: rl,
            el: sl,
            gi: [],
            hi: []
        }
    ],
    tl: [{
        wf: "lvlIntro",
        ul: "Matris",
        width: 800,
        height: 600,
        vl: 60,
        wl: [{
            xh: !0,
            xl: 0,
        }, {}, {}, {}, {}, {}, {}, {}],
        yl: [{
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }],
        zl: [{
            oh: 400,
            ph: 396,
            xl: 16,
            am: 100000,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 77,
            ph: 506,
            xl: 2,
            am: 100001,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }],
        cm: []
    }, {
        wf: "lvlTitle",
        ul: "Matris",
        width: 800,
        height: 600,
        vl: 60,
        wl: [{
            xh: !0,
            xl: 0,
        }, {}, {}, {}, {}, {}, {}, {}],
        yl: [{
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }],
        zl: [{
            oh: 33,
            ph: 561,
            xl: 0,
            am: 100002,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 400,
            ph: 187,
            xl: 14,
            am: 100003,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 396,
            ph: 539,
            xl: 15,
            am: 100004,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 400,
            ph: 396,
            xl: 16,
            am: 100005,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }],
        cm: []
    }, {
        wf: "lvl1",
        ul: "Matris",
        width: 800,
        height: 600,
        vl: 60,
        wl: [{
            xh: !0,
            xl: 0,
        }, {}, {}, {}, {}, {}, {}, {}],
        yl: [{
            xh: !0,
            dm: 5,
            em: 800,
            fm: 600,
            gm: 800,
            hm: 600,
            im: 800,
            jm: 800,
            km: 1,
            lm: 1,
            xl: 5
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }, {
            xl: -100
        }],
        zl: [{
            oh: 748,
            ph: 572,
            xl: 1,
            am: 100006,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 297,
            ph: 77,
            xl: 9,
            am: 100007,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 704,
            ph: 22,
            xl: 4,
            am: 100008,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 143,
            ph: 572,
            xl: 23,
            am: 100009,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 143,
            ph: 352,
            xl: 13,
            am: 100010,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 191,
            ph: 380,
            xl: 18,
            am: 100011,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 704,
            ph: 550,
            xl: 11,
            am: 100012,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 90,
            ph: 380,
            xl: 19,
            am: 100013,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 139,
            ph: 378,
            xl: 21,
            am: 100014,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }, {
            oh: 139,
            ph: 329,
            xl: 22,
            am: 100015,
            jh: 1,
            kh: 1,
            bm: 4294967295
        }],
        cm: []
    }],
    mm: [0, 1, 2],
    nm: [{
        oh: 690,
        ph: 366,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 966,
        ph: 386,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 966,
        ph: 242,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 994,
        ph: 2,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 718,
        ph: 366,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 690,
        ph: 394,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 994,
        ph: 386,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 994,
        ph: 242,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 966,
        ph: 270,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 994,
        ph: 30,
        qh: 23,
        rh: 23,
        om: 0,
        pm: 0,
        qm: 23,
        rm: 23,
        sm: 23,
        tm: 23,
        um: 0
    }, {
        oh: 614,
        ph: 366,
        qh: 69,
        rh: 64,
        om: 0,
        pm: 0,
        qm: 69,
        rm: 64,
        sm: 69,
        tm: 64,
        um: 0
    }, {
        oh: 822,
        ph: 2,
        qh: 168,
        rh: 186,
        om: 0,
        pm: 0,
        qm: 168,
        rm: 186,
        sm: 168,
        tm: 186,
        um: 0
    }, {
        oh: 314,
        ph: 366,
        qh: 296,
        rh: 67,
        om: 0,
        pm: 0,
        qm: 296,
        rm: 67,
        sm: 296,
        tm: 67,
        um: 0
    }, {
        oh: 2,
        ph: 430,
        qh: 307,
        rh: 67,
        om: 0,
        pm: 0,
        qm: 307,
        rm: 67,
        sm: 307,
        tm: 67,
        um: 0
    }, {
        oh: 306,
        ph: 2,
        qh: 509,
        rh: 151,
        om: 5,
        pm: 5,
        qm: 509,
        rm: 151,
        sm: 515,
        tm: 159,
        um: 0
    }, {
        oh: 306,
        ph: 158,
        qh: 258,
        rh: 203,
        om: 0,
        pm: 0,
        qm: 258,
        rm: 203,
        sm: 258,
        tm: 203,
        um: 0
    }, {
        oh: 966,
        ph: 194,
        qh: 43,
        rh: 44,
        om: 0,
        pm: 0,
        qm: 43,
        rm: 44,
        sm: 43,
        tm: 44,
        um: 0
    }, {
        oh: 886,
        ph: 386,
        qh: 74,
        rh: 46,
        om: 1,
        pm: 1,
        qm: 74,
        rm: 46,
        sm: 76,
        tm: 49,
        um: 0
    }, {
        oh: 572,
        ph: 160,
        qh: 200,
        rh: 200,
        om: 0,
        pm: 0,
        qm: 200,
        rm: 200,
        sm: 200,
        tm: 200,
        um: 0
    }, {
        oh: 4,
        ph: 4,
        qh: 295,
        rh: 417,
        om: 0,
        pm: 0,
        qm: 295,
        rm: 417,
        sm: 295,
        tm: 417,
        um: 0
    }, {
        oh: 780,
        ph: 320,
        qh: 100,
        rh: 110,
        om: 0,
        pm: 0,
        qm: 100,
        rm: 110,
        sm: 100,
        tm: 110,
        um: 0
    }, {
        oh: 780,
        ph: 196,
        qh: 177,
        rh: 116,
        om: 0,
        pm: 0,
        qm: 177,
        rm: 116,
        sm: 177,
        tm: 116,
        um: 0
    }, {
        oh: 778,
        ph: 158,
        qh: 32,
        rh: 32,
        om: 0,
        pm: 0,
        qm: 32,
        rm: 32,
        sm: 32,
        tm: 32,
        um: 0
    }, {
        oh: 886,
        ph: 318,
        qh: 128,
        rh: 64,
        om: 0,
        pm: 0,
        qm: 128,
        rm: 64,
        sm: 128,
        tm: 64,
        um: 0
    }],
    vm: ["tetris_130509_2200_texture_0.png"],
    wm: {
        xm: !1,
        ym: 124950899,
        zm: "53ffc02f-5c9f-4dfb-8a20-c223c8afa9b3",
        an: !1,
        bn: !1,
        cn: !0,
        scale: -1,
        dn: !0,
        en: !1,
        fn: !0,
        gn: !0,
        hn: !1,
        jn: !1,
        kn: !0,
        ln: 0,
        mn: !1
    }
};

function pg(nn, on) {
    {
        for (nn.pn = 0;
            (nn.pn < global.qn); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < global.sn); nn.rn += 1) {
                tn(global, "__gmlmatid__", nn.pn, nn.rn, (-4));
                tn(global, "__gmlmats__", nn.pn, nn.rn, 0);
            };
        };
        for (nn.rn = 0;
            (nn.rn < global.sn); nn.rn += 1) {
            tn(global, "__gmlmats__", (nn.pn - 1), nn.rn, 9);
            tn(global, "__gmlmats__", nn.pn, nn.rn, 9);
            tn(global, "__gmlmats__", (nn.pn + 1), nn.rn, 9);
            tn(global, "__gmlmats__", (nn.pn + 2), nn.rn, 9);
            tn(global, "__gmlmats__", (nn.pn + 3), nn.rn, 9);
        };
        for (nn.pn = 0;
            (nn.pn < global.qn); nn.pn += 1) {
            tn(global, "__gmlmats__", nn.pn, 0, 9);
            tn(global, "__gmlmats__", nn.pn, (global.sn - 1), 9);
        };
    };
}

function qg(nn, on) {
    {
        un(9).vn = 2;
        un(9).wn = 2;
        un(9).xn((global.yn + (un(9).vn * global.zn)));
        un(9).ao((global.bo + (un(9).wn * global.zn)));
        un(5).xn((global.yn + (un(9).vn * global.zn)));
        un(5).ao((global.bo + (un(9).wn * global.zn)));
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                tn(global, "__gmlmatab__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmatabid__", nn.pn, nn.rn, (-4));
            };
        };
        nn.co = global.eo;
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                if ((((((nn.co == 1)) && ((fo(global, "__gmlmap1__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 2)) && ((fo(global, "__gmlmap2__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 3)) && ((fo(global, "__gmlmap3__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 4)) && ((fo(global, "__gmlmap4__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 5)) && ((fo(global, "__gmlmap5__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 6)) && ((fo(global, "__gmlmap6__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 7)) && ((fo(global, "__gmlmap7__", nn.pn, nn.rn) == 1)))))) {
                    {
                        nn.go = ho((global.yn + (nn.rn * global.zn)), (global.bo + (nn.pn * global.zn)), 6);
                        un(nn.go).io(nn.co);
                        un(nn.go).jo = nn.pn;
                        un(nn.go).ko = nn.rn;
                        tn(global, "__gmlmatab__", nn.pn, nn.rn, 1);
                        tn(global, "__gmlmatabid__", nn.pn, nn.rn, nn.go);
                        tn(global, "__gmlmats__", nn.pn, nn.rn, 1);
                        tn(global, "__gmlmatid__", nn.pn, nn.rn, nn.go);
                    }
                };
            };
        };
        zg(nn, on);
    };
}

function rg(nn, on) {
    {
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                tn(global, "__gmlmap1__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmap2__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmap3__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmap4__",
                    nn.pn, nn.rn, 0);
                tn(global, "__gmlmap5__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmap6__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmap7__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmap8__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmap9__", nn.pn, nn.rn, 0);
                tn(global, "__gmlmatnext__", nn.pn, nn.rn, (-4));
            };
        };
        tn(global, "__gmlmap1__", 0, 2, 1);
        tn(global, "__gmlmap1__", 1, 2, 1);
        tn(global, "__gmlmap1__", 2, 2, 1);
        tn(global, "__gmlmap1__", 3, 2, 1);
        tn(global, "__gmlmap2__", 2, 1, 1);
        tn(global, "__gmlmap2__", 2, 2, 1);
        tn(global, "__gmlmap2__", 2, 3, 1);
        tn(global, "__gmlmap2__",
            3, 2, 1);
        tn(global, "__gmlmap3__", 1, 2, 1);
        tn(global, "__gmlmap3__", 2, 2, 1);
        tn(global, "__gmlmap3__", 3, 2, 1);
        tn(global, "__gmlmap3__", 3, 3, 1);
        tn(global, "__gmlmap4__", 1, 2, 1);
        tn(global, "__gmlmap4__", 2, 2, 1);
        tn(global, "__gmlmap4__", 3, 2, 1);
        tn(global, "__gmlmap4__", 3, 1, 1);
        tn(global, "__gmlmap5__", 1, 2, 1);
        tn(global, "__gmlmap5__", 1, 3, 1);
        tn(global, "__gmlmap5__", 2, 2, 1);
        tn(global, "__gmlmap5__", 2, 3, 1);
        tn(global, "__gmlmap6__", 1, 2, 1);
        tn(global, "__gmlmap6__", 1, 3, 1);
        tn(global, "__gmlmap6__", 2, 2, 1);
        tn(global, "__gmlmap6__", 2, 1,
            1);
        tn(global, "__gmlmap7__", 1, 1, 1);
        tn(global, "__gmlmap7__", 1, 2, 1);
        tn(global, "__gmlmap7__", 2, 2, 1);
        tn(global, "__gmlmap7__", 2, 3, 1);
    };
}

function sg(nn, on) {
    {
        if (!(global.lo > 0.5)) {
            {
                nn.mo = nn.no;
                oo(nn, "__alarm__", 1, nn.mo);
                nn.po = nn.oh;
                if (((qo(37) > 0.5) || (global.ro > 0.5))) {
                    {
                        nn.po -= global.zn;
                        un(9).wn -= 1;
                        ug(nn, on, "L");
                    }
                } else {
                    if (((qo(39) > 0.5) || (global.so > 0.5))) {
                        {
                            nn.po += global.zn;
                            un(9).wn += 1;
                            ug(nn, on, "R");
                        }
                    }
                };
            }
        };
    };
}

function tg(nn, on) {
    {
        if (!(global.lo > 0.5)) {
            {
                if (((qo(40) > 0.5) || (global.to > 0.5))) {
                    nn.uo = (global.vo * 0.2)
                } else {
                    nn.uo = global.vo
                };
                oo(nn, "__alarm__", 2, nn.uo);
                nn.wo = (nn.ph + global.zn);
                un(9).vn += 1;
                ug(nn, on, "D");
            }
        };
    };
}

function ug(nn, on, xo) {
    {
        if (vg(nn, on, xo) > 0.5) {
            {
                if ((xo == "L")) {
                    {
                        for (nn.pn = 0;
                            (nn.pn < 5); nn.pn += 1) {
                            for (nn.rn = 0;
                                (nn.rn < 5); nn.rn += 1) {
                                if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                                    {
                                        if ((fo(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko) != 2)) {
                                            {
                                                tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__",
                                                    nn.pn, nn.rn)).ko, 0);
                                                tn(global, "__gmlmatid__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, (-4));
                                            }
                                        };
                                        un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko -= 1;
                                        tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, 2);
                                        tn(global, "__gmlmatid__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, fo(global, "__gmlmatabid__", nn.pn, nn.rn));
                                        un(fo(global, "__gmlmatabid__",
                                            nn.pn, nn.rn)).po -= global.zn;
                                    }
                                };
                            };
                        };
                    }
                } else {
                    if ((xo == "R")) {
                        {
                            for (nn.pn = 0;
                                (nn.pn < 5); nn.pn += 1) {
                                for (nn.rn = 0;
                                    (nn.rn < 5); nn.rn += 1) {
                                    if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                                        {
                                            if ((fo(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko) != 2)) {
                                                {
                                                    tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, 0);
                                                    tn(global, "__gmlmatid__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global,
                                                        "__gmlmatabid__", nn.pn, nn.rn)).ko, (-4));
                                                }
                                            };
                                            un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko += 1;
                                            tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, 2);
                                            tn(global, "__gmlmatid__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, fo(global, "__gmlmatabid__", nn.pn, nn.rn));
                                            un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).po += global.zn;
                                        }
                                    };
                                };
                            };
                        }
                    } else {
                        if ((xo == "D")) {
                            {
                                for (nn.pn = 0;
                                    (nn.pn < 5); nn.pn += 1) {
                                    for (nn.rn = 0;
                                        (nn.rn < 5); nn.rn += 1) {
                                        if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                                            {
                                                if ((fo(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko) != 2)) {
                                                    {
                                                        tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, 0);
                                                        tn(global, "__gmlmatid__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, (-4));
                                                    }
                                                };
                                                un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo += 1;
                                                tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, 2);
                                                tn(global, "__gmlmatid__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, fo(global, "__gmlmatabid__", nn.pn, nn.rn));
                                                un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).wo += global.zn;
                                            }
                                        };
                                    };
                                };
                            }
                        }
                    }
                };
                for (nn.pn = 0;
                    (nn.pn < 5); nn.pn += 1) {
                    for (nn.rn = 0;
                        (nn.rn < 5); nn.rn += 1) {
                        if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                            {
                                if ((fo(global, "__gmlmats__", un(fo(global,
                                    "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko) == 2)) {
                                    {
                                        tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, 1);
                                    }
                                };
                            }
                        };
                    };
                };
            }
        } else {
            {
                if ((xo == "D")) {
                    {
                        for (nn.pn = 0;
                            (nn.pn < 5); nn.pn += 1) {
                            for (nn.rn = 0;
                                (nn.rn < 5); nn.rn += 1) {
                                if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                                    {
                                        tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, 5);
                                        tn(global, "__gmlmatid__",
                                            un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).am);
                                    }
                                };
                            };
                        };
                        wg(nn, on);
                        yo(0);
                        qg(nn, on);
                    }
                } else {
                    {}
                };
            }
        };
    };
}

function vg(nn, on, xo) {
    {
        if ((xo == "D")) {
            {
                for (nn.pn = 0;
                    (nn.pn < 5); nn.pn += 1) {
                    for (nn.rn = 0;
                        (nn.rn < 5); nn.rn += 1) {
                        if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                            {
                                if ((fo(global, "__gmlmats__", (un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo + 1), un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko) >= 5)) {
                                    {
                                        if ((un(fo(global, "__gmlmatabid__",
                                            nn.pn, nn.rn)).jo < 5)) {
                                            {
                                                global.lo = 1;
                                            }
                                        };
                                        return 0;
                                    }
                                };
                            }
                        };
                    };
                };
                return 1;
            }
        } else {
            if ((xo == "L")) {
                {
                    for (nn.pn = 0;
                        (nn.pn < 5); nn.pn += 1) {
                        for (nn.rn = 0;
                            (nn.rn < 5); nn.rn += 1) {
                            if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                                {
                                    if ((fo(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, (un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko - 1)) >= 5)) {
                                        return 0
                                    };
                                }
                            };
                        };
                    };
                    return 1;
                }
            } else {
                if ((xo == "R")) {
                    {
                        for (nn.pn = 0;
                            (nn.pn < 5); nn.pn += 1) {
                            for (nn.rn = 0;
                                (nn.rn < 5); nn.rn += 1) {
                                if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                                    {
                                        if ((fo(global,
                                            "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, (un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko + 1)) >= 5)) {
                                            return 0
                                        };
                                    }
                                };
                            };
                        };
                        return 1;
                    }
                }
            }
        };
    };
}

function wg(nn, on) {
    {
        nn.zo = 0;
        nn.ap = -1;
        nn.bp = 0;
        for (nn.pn = (global.qn - 1);
            (nn.pn >= 0); nn.pn -= 1) {
            nn.cp = 0;
            nn.zo = 0;
            nn.ap = -1;
            nn.bp = 0;
            for (nn.rn = 0;
                (nn.rn < global.sn); nn.rn += 1) {
                if ((fo(global, "__gmlmats__", nn.pn, nn.rn) == 5)) {
                    nn.cp += 1
                };
            };
            if ((nn.cp == (global.sn - 2))) {
                {
                    for (nn.rn = 1;
                        (nn.rn < (global.sn - 1)); nn.rn += 1) {
                        if ((((fo(global, "__gmlmats__", nn.pn, nn.rn) == 5)) && (dp(fo(global,
                            "__gmlmatid__", nn.pn, nn.rn)) > 0.5))) {
                            {
                                {
                                    var ep = fp(fo(global, "__gmlmatid__", nn.pn, nn.rn));
                                    for (var gp in ep) {
                                        var hp = ep[gp]; {
                                            ip(hp);
                                        }
                                    }
                                };
                                tn(global, "__gmlmats__", nn.pn, nn.rn, 0);
                                tn(global, "__gmlmatid__", nn.pn, nn.rn, (-4));
                                nn.bp = 1;
                                nn.zo += 1;
                                nn.ap = nn.pn;
                            }
                        };
                    };
                    if (nn.bp > 0.5) {
                        {
                            global.jp += 1;
                            if ((global.jp >= global.kp)) {
                                {
                                    global.kp += (5 + floor((global.jp / 10)));
                                    global.lp += 1;
                                    global.mp += 0.5;
                                    nn.np = (op(un(5).mo) + " , " + op(un(5).uo) + " - > ");
                                    nn.no *= 0.98;
                                    global.vo *= 0.98;
                                    if ((nn.no < 8)) {
                                        un(5).mo = 8
                                    };
                                    if ((global.vo < 8)) {
                                        un(5).uo = 8
                                    };
                                    nn.np += (op(nn.no) + " , " + op(global.vo));
                                }
                            };
                            $.ajax({		   
							   type: "POST",
							   url: "../TETRISV1.1/save_score.php",
							   data: "action_type=saves&current_score="+global.jp+"&user_id=1"+"&level="+global.lp,
							   success: function(msg){
								if(msg != "")
								{
										
								}
							   }	
							 });
                            yo(1);
                            nn.zo /= 12;
                            for (nn.pp = nn.ap;
                                (nn.pp > 0); nn.pp -= 1) {
                                for (nn.qp = 0;
                                    (nn.qp < global.sn); nn.qp += 1) {
                                    nn.rp = nn.zo;
                                    if ((fo(global, "__gmlmatid__", nn.pp, nn.qp) != (-4))) {
                                        {
                                            un(fo(global, "__gmlmatid__", nn.pp, nn.qp)).jo = (nn.pp + nn.rp);
                                            un(fo(global, "__gmlmatid__", nn.pp, nn.qp)).wo = (global.bo + ((nn.pp + nn.rp) * global.zn));
                                            tn(global, "__gmlmatid__", (nn.pp + nn.rp), nn.qp, fo(global, "__gmlmatid__", nn.pp, nn.qp));
                                            tn(global, "__gmlmatid__", nn.pp, nn.qp, (-4));
                                            nn.sp = fo(global, "__gmlmats__", nn.pp, nn.qp);
                                            tn(global, "__gmlmats__", (nn.pp + nn.rp),
                                                nn.qp, nn.sp);
                                            tn(global, "__gmlmats__", nn.pp, nn.qp, 0);
                                        }
                                    };
                                };
                            };
                            nn.pn += nn.zo;
                        }
                    };
                }
            };
        };
    };
}

function xg(nn, on, xo, tp) {
    {
        nn.zo = xo;
        nn.ap = tp;
        for (nn.pn = nn.ap;
            (nn.pn > 0); nn.pn -= 1) {
            for (nn.rn = 0;
                (nn.rn < global.sn); nn.rn += 1) {
                nn.up = nn.zo;
                if ((fo(global, "__gmlmatid__", nn.pn, nn.rn) != (-4))) {
                    {
                        un(fo(global, "__gmlmatid__", nn.pn, nn.rn)).jo = (nn.pn + nn.up);
                        un(fo(global, "__gmlmatid__", nn.pn, nn.rn)).wo = (global.bo + ((nn.pn + nn.up) * global.zn));
                        tn(global, "__gmlmatid__", (nn.pn + nn.up), nn.rn, fo(global, "__gmlmatid__", nn.pn, nn.rn));
                        tn(global,
                            "__gmlmatid__", nn.pn, nn.rn, (-4));
                        nn.vp = fo(global, "__gmlmats__", nn.pn, nn.rn);
                        tn(global, "__gmlmats__", (nn.pn + nn.up), nn.rn, nn.vp);
                        tn(global, "__gmlmats__", nn.pn, nn.rn, 0);
                    }
                };
            };
        };
    };
}

function yg(nn, on) {
    {
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                tn(nn, "__gmltmpmat__", nn.pn, nn.rn, (-4));
            };
        };
        nn.wp = 2;
        nn.xp = 2;
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                if ((fo(global, "__gmlmatabid__", nn.pn, nn.rn) != (-4))) {
                    {
                        nn.yp = (nn.rn - nn.wp);
                        nn.zp = (nn.pn - nn.xp);
                        nn.aq = +nn.zp;
                        nn.bq = -nn.yp;
                        nn.cq = (nn.aq + nn.wp);
                        nn.dq = (nn.bq + nn.xp);
                        tn(nn, "__gmltmpmat__", nn.dq, nn.cq, fo(global, "__gmlmatabid__", nn.pn, nn.rn));
                        un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).eq = (un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).jo + (nn.dq - nn.pn));
                        un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).fq = (un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).ko + (nn.cq - nn.rn));
                        if ((un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).fq < 1)) {
                            {
                                ug(nn, on, "R");
                                return "try";
                            }
                        };
                        if ((un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).fq > (global.sn - 2))) {
                            {
                                ug(nn, on, "L");
                                return "try";
                            }
                        };
                        if ((((fo(global,
                            "__gmlmats__", un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).eq, un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).fq) == 5)) || ((fo(global, "__gmlmats__", un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).eq, un(fo(nn, "__gmltmpmat__", nn.dq, nn.cq)).fq) == 9)))) {
                            return "cannot"
                        };
                    }
                };
            };
        };
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                if ((fo(nn, "__gmltmpmat__", nn.pn, nn.rn) != (-4))) {
                    {
                        un(fo(nn, "__gmltmpmat__", nn.pn, nn.rn)).wo = (global.bo + (un(fo(nn, "__gmltmpmat__", nn.pn, nn.rn)).eq * global.zn));
                        un(fo(nn, "__gmltmpmat__", nn.pn, nn.rn)).po = (global.yn + (un(fo(nn,
                            "__gmltmpmat__", nn.pn, nn.rn)).fq * global.zn));
                        tn(global, "__gmlmatabid__", nn.pn, nn.rn, fo(nn, "__gmltmpmat__", nn.pn, nn.rn));
                        tn(global, "__gmlmatab__", nn.pn, nn.rn, 1);
                        tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, 0);
                        tn(global, "__gmlmatid__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko, (-4));
                    }
                } else {
                    {
                        tn(global, "__gmlmatabid__", nn.pn, nn.rn, (-4));
                        tn(global, "__gmlmatab__", nn.pn, nn.rn, 0);
                    }
                };
            };
        };
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                if ((fo(nn, "__gmltmpmat__", nn.pn, nn.rn) != (-4))) {
                    {
                        un(fo(nn, "__gmltmpmat__", nn.pn, nn.rn)).wo = (global.bo + (un(fo(nn, "__gmltmpmat__", nn.pn, nn.rn)).eq * global.zn));
                        un(fo(nn, "__gmltmpmat__", nn.pn, nn.rn)).po = (global.yn + (un(fo(nn, "__gmltmpmat__", nn.pn, nn.rn)).fq * global.zn));
                        tn(global, "__gmlmatabid__", nn.pn, nn.rn, fo(nn, "__gmltmpmat__", nn.pn, nn.rn));
                        tn(global, "__gmlmatab__", nn.pn, nn.rn, 1);
                        tn(global, "__gmlmats__", un(fo(global, "__gmlmatabid__",
                            nn.pn, nn.rn)).eq, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).fq, 1);
                        tn(global, "__gmlmatid__", un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).eq, un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).fq, fo(global, "__gmlmatabid__", nn.pn, nn.rn));
                        un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).jo = un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).eq;
                        un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).ko = un(fo(global, "__gmlmatabid__", nn.pn, nn.rn)).fq;
                    }
                } else {
                    {
                        tn(global, "__gmlmatabid__", nn.pn, nn.rn, (-4));
                        tn(global, "__gmlmatab__", nn.pn, nn.rn,
                            0);
                    }
                };
            };
        };
        return "done";
    };
}

function zg(nn, on) {
    {
        global.eo = gq(1, global.hq);
        nn.co = global.eo;
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                if ((fo(global, "__gmlmatnext__", nn.pn, nn.rn) != (-4))) {
                    {
                        {
                            var iq = fp(fo(global, "__gmlmatnext__", nn.pn, nn.rn));
                            for (var jq in iq) {
                                var kq = iq[jq];
                                ip(kq)
                            }
                        };
                        tn(global, "__gmlmatnext__", nn.pn, nn.rn, (-4));
                    }
                };
            };
        };
        for (nn.pn = 0;
            (nn.pn < 5); nn.pn += 1) {
            for (nn.rn = 0;
                (nn.rn < 5); nn.rn += 1) {
                if ((((((nn.co == 1)) && ((fo(global, "__gmlmap1__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 2)) && ((fo(global,
                    "__gmlmap2__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 3)) && ((fo(global, "__gmlmap3__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 4)) && ((fo(global, "__gmlmap4__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 5)) && ((fo(global, "__gmlmap5__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 6)) && ((fo(global, "__gmlmap6__", nn.pn, nn.rn) == 1)))) || ((((nn.co == 7)) && ((fo(global, "__gmlmap7__", nn.pn, nn.rn) == 1)))))) {
                    {
                        nn.go = ho((global.lq + (nn.rn * global.zn)), (global.mq + ((nn.pn + 1) * global.zn)), 7);
                        un(nn.go).io(nn.co);
                        un(nn.go).jo = nn.pn;
                        un(nn.go).ko = nn.rn;
                        tn(global, "__gmlmatnext__",
                            nn.pn, nn.rn, nn.go);
                    }
                };
            };
        };
    };
}

function zh(nn, on) {
    {;
        global.lp = 1;
        global.nq = 1;
        global.oq = 0;
        global.jp = 0;
        global.kp = 5;
        global.lo = 0;;
        global.yn = 300;
        global.bo = 70;
        global.sn = 14;
        global.qn = 19;
        global.hq = 7;;
        global.pq = 0;
        global.mp = 4;
        global.zn = (qq(0) + global.pq);;
        global.vo = (rq.sq * 1);
        global.tq = (global.vo * 1.5);;
        pg(nn, on);;
        rg(nn, on);
        global.lq = (global.yn - uq(2) - global.zn);
        global.mq = (global.bo + global.zn);;
        global.vq = 0;
        global.to = 0;
        global.so = 0;
        global.ro = 0;;
        global.wq = 0;
    };
}

function bi(nn, on) {
    {
        xq(2);
    };
}

function di(nn, on) {
    {
        zg(nn, on);
    };
}

function fi(nn, on) {
    {
        xq(2);
    };
}

function ji(nn, on) {
    {
        nn.yq = 1;
        zq(nn.yq, 0, 0, uq(nn.yq), ar(nn.yq), (global.yn + 2), global.bo, 10000);
        nn.br = 2;
        zq(nn.br, 0, 0, uq(nn.br), ar(nn.br), global.lq, global.mq, 10000);
    };
}

function li(nn, on) {
    {
        xq(1);
    };
}

function ni(nn, on) {
    {
        if (dp(3) > 0.5) {
            {
                {
                    var cr = fp(3);
                    for (var dr in cr) {
                        var er = cr[dr]; {
                            ip(er);
                            global.nq = 0;
                        }
                    }
                };
            }
        } else {
            {
                ho(10, 10, 3);
                global.nq = 1;
            }
        };
    };
}

function pi(nn, on) {
    {
        global.wq = !(global.wq > 0.5);
        if (!(global.wq > 0.5)) {
            if (dp(5) > 0.5) {
                {
                    {
                        var fr = fp(5);
                        for (var gr in fr) {
                            var hr = fr[gr]; {
                                tg(hr, nn);
                            }
                        }
                    };
                }
            }
        };
    };
}

function ri(nn, on) {
    {
        xq(1);
    };
}

function si(nn, on) {
    {
        oo(nn, "__alarm__", 1, (rq.sq * 3));
    };
}

function ui(nn, on) {
    {
        ir();
    };
}

function vi(nn, on) {
    {
        jr(0);
    };
}

function xi(nn, on) {
    {
        nn.po = nn.oh;
        nn.wo = nn.ph;
        if (((global.nq > 0.5) && ((global.oq == 0)))) {
            {
                for (nn.pn = 0;
                    (nn.pn < global.qn); nn.pn += 1) {
                    for (nn.rn = 0;
                        (nn.rn < global.sn); nn.rn += 1) {
                        kr((nn.po + (nn.rn * global.zn * 0.7)), (nn.wo + (nn.pn * global.zn)), op(fo(global, "__gmlmats__", nn.pn, nn.rn)));
                    };
                };
            }
        } else {
            if (((global.nq > 0.5) && ((global.oq == 1)))) {
                {
                    for (nn.pn = 0;
                        (nn.pn < 5); nn.pn += 1) {
                        for (nn.rn = 0;
                            (nn.rn < 5); nn.rn += 1) {
                            kr((nn.po + (nn.rn * global.zn * 0.7)), (nn.wo + (nn.pn * global.zn)), op(fo(global, "__gmlmatab__", nn.pn, nn.rn)));
                        };
                    };
                }
            } else {
                if (((global.nq > 0.5) && ((global.oq == 2)))) {
                    {
                        for (nn.pn = 0;
                            (nn.pn < global.qn); nn.pn += 1) {
                            for (nn.rn = 0;
                                (nn.rn < global.sn); nn.rn += 1) {
                                kr((nn.po + (nn.rn * global.zn * 2.5)), (nn.wo + (nn.pn * global.zn)), op(fo(global, "__gmlmatid__", nn.pn, nn.rn)));
                            };
                        };
                    }
                }
            }
        };
    };
}

function zi(nn, on) {
    {
        global.oq -= 1;
    };
}

function bj(nn, on) {
    {
        global.oq += 1;
    };
}

function cj(nn, on) {
    {
        nn.lr = global.jp;
        nn.yq = 3;
        zq(nn.yq, 0, 0, uq(nn.yq),
            ar(nn.yq), (nn.oh - (uq(nn.yq) / 2)), nn.ph, 10000);
        jr(1);
        mr(1);
        nr(16777215);
    };
}

function ej(nn, on) {
    {
        global.or = 0;
    };
}

function fj(nn, on) {
    {
        if ((global.jp > nn.lr)) {
            {
                oo(nn, "__alarm__", 0, (rq.sq * 6));
            }
        };
        kr((nn.oh + 30), (nn.ph + 15), op(global.jp));
        kr((nn.oh + 30), (nn.ph + 70), op(global.lp));
        nn.lr = global.jp;
    };
}

function hj(nn, on) {
    {
        nn.pr = 0;
        nn.io(6);
        nn.jo = 6;
        nn.ko = 0;
        nn.uo = global.vo;
        oo(nn, "__alarm__", 2, nn.uo);
        nn.mo = (nn.uo * 0.15);
        nn.no = nn.mo;
        oo(nn, "__alarm__", 1, nn.mo);
        nn.po = nn.oh;
        nn.wo = nn.ph;
        oo(rq, "__view_object__", 0, nn.am);
        nn.qr = 0;
    };
}

function jj(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            tg(nn, on)
        };
    };
}

function kj(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            sg(nn, on)
        };
    };
}

function mj(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            {
                if (((qo(40) > 0.5) && ((nn.ph >= nn.wo)))) {
                    {
                        tg(nn, on);
                    }
                };
                if ((((nn.oh != nn.po)) || ((nn.ph < nn.wo)))) {
                    {
                        if ((nn.ph < nn.wo)) {
                            {
                                nn.rr(global.mp);
                            }
                        } else {
                            {
                                nn.rr(0);
                            }
                        }; if ((abs((nn.oh - nn.po)) <= global.mp)) {
                            {
                                nn.xn(nn.po);
                                nn.sr(0);
                            }
                        } else {
                            {
                                nn.sr((tr((nn.po - nn.oh)) * global.mp));
                            }
                        };
                    }
                } else {
                    {
                        nn.ur(0);
                        nn.xn(nn.po);
                        nn.ao(nn.wo);
                    }
                }; if (((global.lo > 0.5) && (!(nn.qr > 0.5)))) {
                    {
                        nn.qr = 1;
                        ho(nn.oh, nn.ph, 17);
                    }
                };
            }
        };
    };
}

function oj(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            tg(nn, on)
        };
    };
}

function qj(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            sg(nn, on)
        };
    };
}

function sj(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            {
                nn.vr = yg(nn, on);
                if ((nn.vr == "try")) {
                    {
                        nn.vr = yg(nn, on);
                    }
                };
                if ((nn.vr == "try")) {
                    {
                        nn.vr = yg(nn, on);
                    }
                };
            }
        };
    };
}

function uj(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            sg(nn, on)
        };
    };
}

function wj(nn, on) {
    {
        nn.uo = global.vo;
    };
}

function xj(nn, on) {
    {
        nn.pr = 0;
        nn.io(6);
        nn.jo = 6;
        nn.ko = 0;
        nn.eq = 6;
        nn.fq = 0;
        nn.uo = global.vo;
        oo(nn, "__alarm__", 2, nn.uo);
        nn.mo = (nn.uo * 0.2);
        oo(nn,
            "__alarm__", 1, nn.mo);
        nn.po = nn.oh;
        nn.wo = nn.ph;
    };
}

function zj(nn, on) {
    {
        nn.wr = ho(nn.oh, nn.ph, 10);
        un(nn.wr).io(nn.xr);
    };
}

function ak(nn, on) {
    {
        if ((((nn.oh != nn.po)) || ((nn.ph < nn.wo)))) {
            {
                if ((nn.ph < nn.wo)) {
                    {
                        nn.rr(global.mp);
                    }
                } else {
                    {
                        nn.rr(0);
                    }
                }; if ((abs((nn.oh - nn.po)) <= global.mp)) {
                    {
                        nn.xn(nn.po);
                        nn.sr(0);
                    }
                } else {
                    {
                        nn.sr((tr((nn.po - nn.oh)) * global.mp));
                    }
                };
            }
        } else {
            {
                nn.ur(0);
                nn.xn(nn.po);
                nn.ao(nn.wo);
            }
        };
    };
}

function bk(nn, on) {
    {
        nn.pr = 0;
    };
}

function dk(nn, on) {
    {
        qg(nn, on);
    };
}

function ek(nn, on) {
    {
        oo(nn, "__alarm__", 7, global.tq);
    };
}

function fk(nn, on) {
    {
        nn.pr = 0;
        nn.vn = 2;
        nn.wn = 2;
    };
}

function gk(nn, on) {
    {
        ho((global.yn + (nn.vn * global.zn)), (global.bo + (nn.wn * global.zn)), 5);
        tn(global, "__gmlmats__", nn.vn, nn.wn, 5);
        qg(nn, on);
    };
}

function hk(nn, on) {
    {
        nn.pr = 0;
        nn.rr(yr(-5, -1));
        nn.sr(yr(-3, 3));
        nn.zr = 270;
        nn.as = 0.3;
    };
}

function ik(nn, on) {
    {};
}

function jk(nn, on) {
    {
        nn.bs(nn.cs + 10);
    };
}

function lk(nn, on) {
    {
        ip(nn);
    };
}

function nk(nn, on) {
    {
        if (!(dp(12) > 0.5)) {
            {
                ho(nn.oh, (nn.ph - 50), 12);
            }
        };
    };
}

function ok(nn, on) {
    {
        oo(nn, "__alarm__", 9, (rq.sq * 4));
    };
}

function qk(nn, on) {
    {
        if ((rq.ds() != 1)) {
            {
                nn.zr = 270;
                nn.as = 0.1;
            }
        };
    };
}

function rk(nn, on) {
    {
        ip(nn);
    };
}

function sk(nn, on) {
    {
        oo(nn, "__alarm__", 9, (rq.sq * 12));
        nn.es = nn.oh;
        nn.fs = nn.ph;
    };
}

function tk(nn, on) {
    {
        nn.zr = 270;
        nn.as = 0.1;
    };
}

function uk(nn, on) {
    {
        nn.xn(nn.es);
        nn.ao(nn.fs);
        oo(nn, "__alarm__", 9, (rq.sq * 20));
        nn.ur(0);
        nn.as = 0;
    };
}

function vk(nn, on) {
    {
        nn.ur(0);
    };
}

function wk(nn, on) {
    {
        nn.bs(yr(-1, 1));
    };
}

function xk(nn, on) {
    {
        gs();
        hs(2);
    };
}

function yk(nn, on) {
    {
        nn.mo = (rq.sq * 0.7);
        oo(nn, "__alarm__", 1, nn.mo);
    };
}

function zk(nn, on) {
    {
        oo(nn, "__alarm__", 1, nn.mo);
        nn.xh = !(nn.xh > 0.5);
    };
}

function al(nn, on) {
    {
        nn.sr(3);
        nn.xn(-nn.is());
        nn.ao((rq.js - 100));
    };
    $(".gm4html5_div_class").load("../TETRISV1.1/game_over.php");
}

function bl(nn, on) {
    {
        if ((nn.oh > rq.ks)) {
            {
                nn.sr(nn.km + 0.1);
                if ((nn.oh > (rq.ks + nn.is()))) {
                    {
                        xq(1);
                    }
                };
            }
        };
    };
}

function dl(nn, on) {
    {
        global.so = 0;
        nn.xh = 0;
    };
}

function fl(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            if (dp(5) > 0.5) {
                {
                    {
                        var ls = fp(5);
                        for (var ms in ls) {
                            var ns = ls[ms]; {
                                sg(ns, nn);
                            }
                        }
                    };
                }
            }
        };
    };
}

function hl(nn, on) {
    {
        global.so = 1;
        nn.xh = 1;
    };
}

function il(nn, on) {
    {
        global.ro = 0;
        nn.xh = 0;
    };
}

function jl(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            if (dp(5) > 0.5) {
                {
                    {
                        var os = fp(5);
                        for (var ps in os) {
                            var qs = os[ps]; {
                                sg(qs, nn);
                            }
                        }
                    };
                }
            }
        };
    };
}

function kl(nn, on) {
    {
        global.ro = 1;
        nn.xh = 1;
    };
}

function ll(nn, on) {
    {
        global.to = 0;
        nn.xh = 0;
        if (dp(5) > 0.5) {
            {
                {
                    var rs = fp(5);
                    for (var ss in rs) {
                        var ts = rs[ss]; {
                            ts.uo = global.vo;
                        }
                    }
                };
            }
        };
    };
}

function ml(nn, on) {
    {
        if (!(global.wq > 0.5)) {
            if (dp(5) > 0.5) {
                {
                    {
                        var us = fp(5);
                        for (var vs in us) {
                            var ws = us[vs]; {
                                tg(ws, nn);
                            }
                        }
                    };
                }
            }
        };
    };
}

function nl(nn, on) {
    {
        global.to = 1;
        nn.xh = 1;
    };
}

function ol(nn, on) {
    {
        global.vq = 0;
        nn.xh = 0;
    };
}

function pl(nn, on) {
    {
        global.vq = 1;
        nn.xh = 1;
        if (!(global.wq > 0.5)) {
            {
                if (dp(5) > 0.5) {
                    {
                        {
                            var xs = fp(5);
                            for (var ys in xs) {
                                var zs = xs[ys]; {
                                    zs.vr = yg(zs, nn);
                                    if ((zs.vr == "try")) {
                                        {
                                            zs.vr = yg(zs, nn);
                                        }
                                    };
                                    if ((zs.vr == "try")) {
                                        {
                                            zs.vr = yg(zs, nn);
                                        }
                                    };
                                }
                            }
                        };
                    }
                };
            }
        };
    };
}

function ql(nn, on) {
    {
        nn.at = (rq.sq * 0.4);
        oo(nn, "__alarm__", 0, nn.at);
    };
}

function rl(nn, on) {
    {
        if (global.wq > 0.5) {
            nn.xh = !(nn.xh > 0.5)
        } else {
            nn.xh = 1
        };
        oo(nn, "__alarm__", 0, nn.at);
    };
}

function sl(nn, on) {
    {
        global.wq = !(global.wq > 0.5);
        if (!(global.wq > 0.5)) {
            if (dp(5) > 0.5) {
                {
                    {
                        var bt = fp(5);
                        for (var ct in bt) {
                            var dt = bt[ct]; {
                                tg(dt, nn);
                            }
                        }
                    };
                }
            }
        };
    };
}
var et = [];
var ft = "None";
var gt = 0;
var ht = 0;

function log(it) {
    setTimeout(function () {
        throw new jt(it)
    }, 0)
}

function kt(lt) {
    for (var mh in et) {
        if (et[mh] == lt) {
            return mh
        }
    }
    log("Failed to find pre-exisiting mouse device index");
    return -1
}

function mt(lt) {
    var nt = -1;
    for (var mh in et) {
        if ((et[mh] == lt) || (et[mh] == -1)) {
            nt = mh;
            break
        }
    }
    if (nt == -1) {
        nt = et.length
    }
    et[nt] = lt;
    return nt
}

function ot(event) {
    for (var pt = 0; pt < event.changedTouches.length; pt++) {
        var qt = event.changedTouches[pt];
        var type = "";
        var nt = -1;
        ft = event.type;
        switch (event.type) {
        case "touchstart":
            nt = mt(qt.rt);
            break;
        case "touchend":
            nt = kt(qt.rt);
            et[nt] = -1;
            break;
        case "touchmove":
            nt = kt(qt.rt);
            break;
        default:
            return
        }
        if (nt == 0) {
            if (st != null) {
                tt = qt.screenX;
                ut = qt.screenY
            }
            switch (event.type) {
            case "touchstart":
                vt = 1;
                break;
            case "touchmove":
                vt = 1;
                break;
            case "touchend":
                vt = 0;
                break
            }
        }
        wt[nt].oh = qt.screenX;
        wt[nt].ph = qt.screenY;
        gt = qt.screenX;
        ht = qt.screenY;
        switch (event.type) {
        case "touchstart":
            wt[nt].xt = yt | zt | au;
            break;
        case "touchend":
            wt[nt].xt = 0;
            break;
        case "touchmove":
        default:
            break;
        }
        event.preventDefault()
    }
}

function bu() {
    cu.ontouchstart = ot;
    cu.ontouchmove = ot;
    cu.ontouchend = ot;
    cu.ontouchcancel = ot
}
var du, eu, fu, gu, hu, iu,
    ju;

function ku(lu, mu) {
    this.nu = [];
    this.ou = lu;
    this.pu = mu;
    var qu = lu * mu;
    for (var mh = 0; mh < qu; mh++) {
        this.nu[mh] = null
    }
}
ku.prototype.ru = function (su) {
    this.ou = su.ou;
    this.pu = su.pu;
    this.nu = su.nu.slice()
};

function tu() {
    var uu = new vu();
    uu.wu = !0;
    return xu.yu(uu)
}

function zu(av, bv) {
    var cv = xu.dv(av);
    if (cv) {
        return cv.yu(bv)
    }
    jt("Error: invalid ds_list ID (ds_list_add)");
    return -1
}

function ev() {
    var fv = {};
    var am = gv.yu(fv);
    return am
}

function hv(av) {
    gv.iv(av)
}

function jv(av) {
    var fv = gv.dv(av);
    if (fv) {
        var kv = {};
        gv.lv(av, kv)
    }
}

function mv(av, nv,
    bv) {
    var fv = gv.dv(av);
    if (fv) {
        if (fv[nv] != undefined) {
            jt("Error: KEY(" + nv + ") already present in ds_map[" + av + "], you can not add a key twice.")
        }
        fv[nv] = bv
    }
}
var ov = !1;
var pv = 'Trying to stop non-existing sound.',
    qv = 'Trying to draw a non-existing sprite.',
    rv = 'Trying to draw a non-existing background.',
    sv = 'Cannot compare arguments.',
    tv = 'Trying to replace non-existing resource.',
    uv = 'File does not exist.',
    vv = 'The particle emitter must first be created.';
var wv = -1,
    xv = [],
    yv = [];

function uq(zv) {
    var aw = bw.cw(zv);
    if (!aw) return 0;
    return aw.dw.qh
}

function ar(zv) {
    var aw = bw.cw(zv);
    if (!aw) return 0;
    return aw.dw.rh
}
var ew = 1970;
var fw = 1;
var gw = 1;
var hw = 365.25;
var iw = 30.4375;
var jw = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var kw = [];

function lw(mw) {
    var nw = new Date();
    nw.setTime(mw);
    return (nw.getHours() - nw.getUTCHours()) * 60 * 60 * 1000
}
var ow = [];
var pw = [];
var qw = [];
var rw = Date.now();
var sw = function (tw) {
    if (uw) {
        var vw = String.fromCharCode(0x0a);
        tw = tw.replace('<b>', '').replace('</b>', '');
        var ww = document.getElementById('debug_console');
        var xw = Date.now() - rw;
        if (!ww) {
            alert(tw)
        } else {
            ww.value += tw + vw;
            var yw = ww.textLength
        }
        rw = Date.now()
    }
};

function zw() {
    var xl;
    for (xl = 0; xl < arguments.length; ++xl) {
        sw(arguments[xl])
    }
}

function jt() {
    var xl;
    for (xl = 0; xl < arguments.length; ++xl) {
        sw(arguments[xl])
    }
}

function ax(bx) {
    if (!qw[bx]) {
        qw[bx] = !0;
        zw(bx)
    }
}

function cx(bx) {
    if (!ow[bx]) {
        ow[bx] = !0;
        var dx = "Error: function " + bx + " is not supported.";
        zw(dx)
    }
}

function ex(bx) {
    if (!ow[bx]) {
        ow[bx] = !0;
        var dx = "Error: function " + bx + " is not yet implemented";
        zw(dx)
    }
}

function fx() {
    this.gx = "";
    this.hx = 0;
    this.ix = !1;
    this.jx = !1;
    this.kx = ""
}
fx.prototype.lx = function () {
    var mx;
    var mh = this.hx;
    var nx = this.gx;
    while (mh < nx.length) {
        var nh = nx.charCodeAt(mh);
        if (nh == 0x0d || nh == 0x0a) {
            mh++;
            nh = nx.charCodeAt(mh);
            if (nh == 0x0d || nh == 0x0a) {
                mh++
            }
            break
        } else {
            mh++
        }
    }
    this.hx = mh
};
fx.prototype.ox = function () {
    var mx;
    var mh = this.hx;
    var nx = this.gx;
    while (mh < nx.length) {
        var nh = nx.charCodeAt(mh);
        if (nh == 0x0d || nh == 0x0a || nh == 0x09 || nh == 0x20) {
            mh++
        } else {
            break
        }
    }
    this.hx = mh
};

function mr(px) {
    qx.rx = px
}

function jr(sx) {
    qx.tx = sx
}

function kr(ux, vx, bx) {
    qx.wx(bx.toString(), ux, vx, -1, -1, 0, 1, 1)
}

function xx(ux,
    vx, bx, yx, zx, ay) {
    qx.wx(bx.toString(), ux, vx, -1, -1, ay, yx, zx)
}

function by(av) {
    var cy = qx.dv(av);
    if (!cy) return "";
    return cy.dy
}
var ey = by;

function fy(gy, hy, iy, jy, ky, ly, my) {
    var cy = new ny();
    cy.oy = !0;
    cy.wf = "fnt_" + gy;
    cy.dy = gy;
    cy.bh = hy;
    cy.bold = iy;
    cy.ch = jy;
    cy.dh = ky;
    cy.eh = ly;
    cy.py = hy + "pt " + gy + " ";
    if (iy) cy.py = cy.py + "bold ";
    if (jy) cy.py = cy.py + "Italic ";
    if (my) {
        return qx.qy(cy)
    } else {
        return cy
    }
}
var ry = sy;

function ty() {
    uy[0] = uy[1] = uy[2] = uy[3] = uy[4] = uy[5] = uy[6] = uy[7] = uy[8] = uy[9] = 0;
    vy[0] = vy[1] = vy[2] = vy[3] = vy[4] = vy[5] = vy[6] = vy[7] = vy[8] = vy[9] = wy;
}

function xy(yy, zy, az) {
    var bz, cz, dz, ez, fz, gz;
    bz = (yy >> 16) & 0xff;
    dz = (yy >> 8) & 0xff;
    fz = (yy & 0xff);
    cz = (zy >> 16) & 0xff;
    ez = (zy >> 8) & 0xff;
    gz = (zy & 0xff);
    var hz = 1.0 - az;
    var iz = jz(bz * hz + cz * az);
    var kz = jz(dz * hz + ez * az);
    var lz = jz(fz * hz + gz * az);
    var mz = ((iz & 0xff) << 16) | ((kz & 0xff) << 8) | (lz & 0xff);
    return mz
}

function nz(yy, zy, az) {
    return xy(yy, zy, az)
}

function oz(pz, qz, rz, sz) {
    var tz = uz.dv(rz);
    if ((tz != null) && (tz != undefined)) {
        var vz = tz.wz[sz];
        if ((vz != null) && (vz != undefined)) {
            vz.xz(pz, pz)
        }
    }
}
var yz = !0;
var zz = zw;
var aab = bab;

function bab(cab, dab) {
    eab.fab();
    var gab = [];
    gab[0] = 1;
    gab[1] = 0;
    gab[2] = 0;
    gab[3] = 1;
    gab[4] = 0;
    gab[5] = 0;
    eab.hab(gab[0], gab[1], gab[2], gab[3], gab[4], gab[5]);
    if (!eab.clearRect || cab != 0 || dab != 0) {
        eab.globalAlpha = dab;
        eab.fillStyle = iab(jab(cab), dab);
        eab.globalCompositeOperation = 'copy';
        eab.fillRect(kab, lab, mab, nab)
    } else {
        eab.clearRect(kab, lab, mab, nab)
    }
    eab.oab()
}

function pab(cab) {
    var qab = 0.0;
    var rab = 0.0;
    var sab = 0.0;
    var tab = 0.0;
    var uab = 0.0;
    var vab = 0.0;
    var nw = 0.0;
    var wab = 0.0;
    qab = ((cab >> 16) & 0xff) / 255.0;
    rab = ((cab >> 8) & 0xff) / 255.0;
    sab = (cab & 0xff) / 255.0;
    wab = xab(xab(qab,
        rab), sab);
    vab = yab(yab(qab, rab), sab);
    nw = vab - wab;
    if (vab == 0) uab = 0.0;
    else uab = 1.0 * nw / vab; if (uab == 0) tab = 0.0;
    else if (qab == vab) tab = 60.0 * (rab - sab) / nw;
    else if (rab == vab) tab = 120.0 + 60.0 * (sab - qab) / nw;
    else tab = 240.0 + 60.0 * (qab - rab) / nw; if (tab < 0) tab = tab + 360.0;
    var zab;
    zab = ((Math.floor(vab * 255.0) << 16) & 0xff) | (Math.floor(uab * 255.0) << 8) | (Math.floor(tab * 255.0 / 360.0) & 0xff);
    return zab
}

function nr(abb) {
    bbb = abb;
    cbb = jab(abb);
    dbb = ebb(cbb);
    fbb = iab(cbb, gbb)
}
var hbb = ibb;

function ibb(jbb, kbb, lbb, mbb, yy, zy, nbb) {
    var width = lbb - jbb;
    var height = mbb - kbb;
    obb = 10;
    var mz = eab.globalAlpha = gbb;
    eab.beginPath();
    eab.moveTo(jbb + obb, kbb);
    eab.lineTo(jbb + width - obb, kbb);
    eab.quadraticCurveTo(jbb + width, kbb, jbb + width, kbb + obb);
    eab.lineTo(jbb + width, kbb + height - obb);
    eab.quadraticCurveTo(jbb + width, kbb + height, jbb + width - obb, kbb + height);
    eab.lineTo(jbb + obb, kbb + height);
    eab.quadraticCurveTo(jbb, kbb + height, jbb, kbb + height - obb);
    eab.lineTo(jbb, kbb + obb);
    eab.quadraticCurveTo(jbb, kbb, jbb + obb, kbb);
    eab.closePath();
    if (nbb) {
        eab.strokeStyle = iab(jab(yy), 1.0);
        eab.stroke()
    } else {
        eab.fillStyle = iab(jab(yy),
            1.0);
        eab.fill()
    }
}
var pbb = qbb;

function qbb(jbb, kbb, lbb, mbb, nbb) {
    jbb = ~~jbb;
    kbb = ~~kbb;
    lbb = ~~lbb;
    mbb = ~~mbb;
    eab.globalAlpha = gbb;
    if (nbb) {
        eab.lineWidth = 1;
        eab.strokeStyle = fbb;
        eab.rbb(jbb + 0.5, kbb + 0.5, lbb - jbb, mbb - kbb)
    } else {
        eab.fillStyle = fbb;
        eab.sbb(jbb, kbb, lbb - jbb + 1, mbb - kbb + 1)
    }
}
var tbb = ubb;

function ubb(jbb, kbb, lbb, mbb, yy, zy, vbb, wbb, nbb) {
    var mz = iab(jab(yy), 1.0);
    eab.globalAlpha = gbb;
    if (nbb) {
        eab.lineWidth = 1;
        eab.strokeStyle = mz;
        eab.rbb(jbb + 0.5, kbb + 0.5, (lbb - jbb), (mbb - kbb))
    } else {
        eab.fillStyle = mz;
        eab.sbb(jbb + 0.5, kbb + 0.5, (lbb - jbb), (mbb - kbb));
    }
}
var xbb = ybb;

function ybb(jbb, kbb, lbb, mbb, yy, zy, zbb, nbb) {
    eab.globalAlpha = gbb;
    eab.lineWidth = 1;
    var acb = ebb(jab(yy));
    var bcb = ebb(jab(zy));
    var ccb;
    if (zbb) {
        ccb = eab.createLinearGradient(jbb, kbb, jbb, mbb)
    } else {
        ccb = eab.createLinearGradient(jbb, kbb, lbb, kbb)
    }
    ccb.addColorStop(0, acb);
    ccb.addColorStop(1, bcb);
    if (nbb) {
        eab.strokeStyle = ccb;
        eab.rbb(jbb + 0.5, kbb + 0.5, lbb - jbb, mbb - kbb)
    } else {
        eab.fillStyle = ccb;
        eab.sbb(jbb + 0.5, kbb + 0.5, lbb - jbb, mbb - kbb)
    }
}
var dcb = ecb;

function ecb(ux, vx) {
    eab.globalAlpha = gbb;
    eab.fillStyle = fbb;
    eab.sbb(ux, vx, 1, 1)
}

function fcb(jbb, kbb, lbb, mbb, lu) {
    gcb(jbb, kbb, lbb, mbb, lu, bbb, bbb)
}

function hcb(jbb, kbb, lbb, mbb) {
    fcb(jbb, kbb, lbb, mbb, 1)
}
var icb = jcb;

function jcb(ux, vx) {
    var mz = kcb(cu, ux, vx);
    return mz & 0xffffff
}
var lcb = mcb;

function mcb(jbb, kbb, lbb, mbb, ncb, ocb, nbb) {
    jbb += 0.5;
    kbb += 0.5;
    lbb += 0.5;
    mbb += 0.5;
    ncb += 0.5;
    ocb += 0.5;
    eab.globalAlpha = gbb;
    eab.lineWidth = 1;
    if (nbb) {
        eab.strokeStyle = fbb;
        eab.pcb();
        eab.qcb(jbb, kbb);
        eab.rcb(lbb, mbb);
        eab.rcb(ncb, ocb);
        eab.rcb(jbb, kbb);
        eab.scb();
        eab.tcb()
    } else {
        eab.strokeStyle = fbb;
        eab.lineJoin = "bevel";
        eab.fillStyle = fbb;
        eab.pcb();
        eab.qcb(jbb, kbb);
        eab.rcb(lbb, mbb);
        eab.rcb(ncb, ocb);
        eab.rcb(jbb, kbb);
        eab.ucb();
        eab.scb();
        eab.tcb();
        eab.lineJoin = "miter"
    }
}
var vcb = wcb;

function wcb(jbb, kbb, lbb, mbb, ncb, ocb, yy, zy, vbb, nbb) {
    var acb = ebb(jab(yy) | 0xff000000);
    jbb += 0.5;
    kbb += 0.5;
    lbb += 0.5;
    mbb += 0.5;
    ncb += 0.5;
    ocb += 0.5;
    eab.globalAlpha = gbb;
    eab.lineWidth = 1;
    if (nbb) {
        eab.strokeStyle = acb;
        eab.pcb();
        eab.qcb(jbb, kbb);
        eab.rcb(lbb, mbb);
        eab.rcb(ncb, ocb);
        eab.rcb(jbb, kbb);
        eab.scb();
        eab.tcb()
    } else {
        eab.strokeStyle = acb;
        eab.lineJoin = "bevel";
        eab.fillStyle = acb;
        eab.pcb();
        eab.qcb(jbb, kbb);
        eab.rcb(lbb, mbb);
        eab.rcb(ncb, ocb);
        eab.rcb(jbb, kbb);
        eab.ucb();
        eab.scb();
        eab.tcb();
        eab.lineJoin = "miter"
    }
}
var xcb = ycb;

function ycb(jbb, kbb, lbb, mbb, zcb, adb, bdb, cdb, ddb, edb, fdb, gdb) {
    var hdb;
    var idb;
    var jdb;
    var kdb;
    var mz;
    if (fdb) {
        tbb(jbb, kbb, lbb, mbb, adb, adb, adb, adb, !1);
        if (gdb) {
            tbb(jbb, kbb, lbb, mbb, ldb, ldb, ldb, ldb, !0)
        }
    }
    if (zcb < 0) {
        zcb = 0
    }
    if (zcb > 100) {
        zcb = 100
    }
    var mdb = zcb / 100;
    switch (edb) {
    case 0:
        hdb = jbb;
        jdb = kbb;
        idb = jbb + mdb * (lbb - jbb);
        kdb = mbb;
        break;
    case 1:
        hdb = lbb - mdb * (lbb - jbb);
        jdb = kbb;
        idb = lbb;
        kdb = mbb;
        break;
    case 2:
        hdb = jbb;
        jdb = kbb;
        idb = lbb;
        kdb = kbb + mdb * (mbb - kbb);
        break;
    case 3:
        hdb = jbb;
        jdb = mbb - mdb * (mbb - kbb);
        idb = lbb;
        kdb = mbb;
        break;
    default:
        hdb = jbb;
        jdb = kbb;
        idb = jbb + mdb * (lbb - jbb);
        kdb = mbb;
        break
    }
    if (zcb > 50) {
        mz = xy(cdb, ddb, (zcb - 50.0) / 50.0)
    } else {
        mz = xy(bdb, cdb, zcb / 50.0)
    }
    tbb(hdb, jdb, idb, kdb, mz, mz, mz, mz, !1);
    if (gdb) {
        tbb(hdb, jdb, idb, kdb, ldb, ldb, ldb, ldb, !0)
    }
}
var ndb = odb;

function odb(pdb, qdb, rdb, sdb, bh) {
    var tdb = Math.sqrt(((rdb - pdb) * (rdb - pdb)) + ((sdb - qdb) * (sdb - qdb)));
    if (tdb != 0) {
        if (bh > tdb) {
            bh = tdb
        }
        var udb = bh * (rdb - pdb) / tdb;
        var vdb = bh * (sdb - qdb) / tdb;
        hcb(pdb, qdb, rdb, sdb);
        lcb(rdb - udb - vdb / 3.0, sdb - vdb + udb / 3.0, rdb, sdb, rdb - udb + vdb / 3.0, sdb - vdb - udb / 3.0, !1)
    }
}

function wdb(jbb, kbb, lbb, mbb, nbb) {
    xdb(jbb, kbb, lbb, mbb, cbb, cbb, nbb)
}
var xdb = ydb;

function ydb(oh, ph, pdb, qdb, yy, zy, zdb) {
    var qh = pdb - oh;
    var rh = qdb - ph;
    var aeb = 0.5522848;
    beb = (qh / 2) * aeb, ceb = (rh / 2) * aeb, deb = oh + qh, eeb = ph + rh, feb = oh + qh / 2, geb = ph + rh / 2;
    eab.beginPath();
    eab.moveTo(oh, geb);
    eab.bezierCurveTo(oh, geb - ceb, feb - beb, ph, feb, ph);
    eab.bezierCurveTo(feb + beb, ph, deb, geb - ceb, deb, geb);
    eab.bezierCurveTo(deb,
        geb + ceb, feb + beb, eeb, feb, eeb);
    eab.bezierCurveTo(feb - beb, eeb, oh, geb + ceb, oh, geb);
    eab.closePath();
    var acb = iab(jab(yy), 1.0);
    var bcb = iab(jab(zy), 1.0);
    var ccb = eab.createRadialGradient(feb, geb, 0, feb, geb, min(qh / 2, rh / 2));
    ccb.addColorStop(0, acb);
    ccb.addColorStop(1, bcb);
    eab.globalAlpha = gbb;
    if (zdb) {
        eab.lineWidth = 1;
        eab.strokeStyle = ccb;
        eab.stroke()
    } else {
        eab.fillStyle = ccb;
        eab.fill()
    }
}
var heb = ieb;

function ieb(ux, vx, jeb, yy, zy, nbb) {
    eab.globalAlpha = gbb;
    var acb = iab(jab(yy), 1.0);
    var bcb = iab(jab(zy), 1.0);
    var ccb = eab.createRadialGradient(ux,
        vx, 0, ux, vx, jeb);
    ccb.addColorStop(0, acb);
    ccb.addColorStop(1, bcb);
    eab.beginPath();
    if (nbb) {
        eab.lineWidth = 1;
        eab.strokeStyle = ccb;
        eab.keb(ux, vx, jeb, 0, Math.PI * 2, !0);
        eab.scb()
    } else {
        eab.fillStyle = ccb;
        eab.keb(ux, vx, jeb, 0, Math.PI * 2, !1);
        eab.ucb()
    }
    eab.tcb()
}
var leb = meb;

function meb(ux, vx, cab) {
    var acb = iab(jab(cab), 1.0);
    eab.globalAlpha = gbb;
    eab.fillStyle = acb;
    eab.sbb(ux, vx, 1, 1)
}
var gcb = neb;

function neb(jbb, kbb, lbb, mbb, lu, yy, zy) {
    eab.globalAlpha = gbb;
    var acb = iab(jab(yy), 1.0);
    var bcb = iab(jab(zy), 1.0);
    var ccb = eab.createLinearGradient(jbb,
        kbb, lbb, mbb);
    ccb.addColorStop(0, acb);
    ccb.addColorStop(1, bcb);
    eab.strokeStyle = ccb;
    eab.pcb();
    eab.qcb(jbb + 0.5, kbb + 0.5);
    eab.rcb(lbb + 0.5, mbb + 0.5);
    eab.lineWidth = lu;
    eab.scb();
    eab.tcb();
}

function oeb(oh, ph, pdb, qdb, acb, bcb, zdb) {
    xdb(oh, ph, pdb, qdb, acb, bcb, zdb)
}
var peb = null;

function dp(qeb) {
    var reb = fp(qeb);
    if (reb != null && reb.length > 0) {
        for (var seb in reb) {
            teb = reb[seb];
            if (!teb.ueb) return !0
        }
    }
    return !1
}

function veb(pz, ux, vx, qeb) {
    var udb = pz.oh;
    var vdb = pz.ph;
    pz.web(ux, vx);
    var am = xeb(null, Math.floor(qeb), !1, yeb, ux, vx, function (zeb) {
        if (zeb.afb(pz, !0)) {
            return zeb.am
        } else {
            return 0;
        }
    });
    pz.web(udb, vdb);
    return am
}

function ho(ux, vx, qeb) {
    var bfb = cfb.dv(qeb);
    if (!bfb) {
        jt("Error: Trying to create an instance using non-existent object type (" + qeb + ")");
        return yeb
    }
    var teb = dfb.efb(ux, vx, qeb);
    teb.ffb(gfb, 0, teb, teb);
    return teb.am
}

function ip(pz) {
    pz.ffb(hfb, 0, pz, pz);
    pz.ueb = !0
}

function ifb(jfb, ux, vx) {
    var mh;
    var bottom, top;
    var kfb = [];
    var lfb = dfb.mfb;
    for (mh in lfb.nfb) {
        var teb = lfb.nfb[mh];
        if (teb.ofb) teb.pfb();
        var qfb = teb.qfb;
        if (!((ux > qfb.rfb) || (ux < qfb.left) || (vx > qfb.bottom) || (vx < qfb.top))) {
            kfb[kfb.length] = teb
        }
    }
    var lfb = dfb.mfb;
    for (mh = 0; mh < kfb.length; mh++) {
        ip(kfb[mh])
    }
}

function sfb(jfb, tfb, ufb) {
    if (ufb) jfb.ffb(hfb, 0, jfb, jfb);
    jfb.vfb(tfb, !0, !1);
    jfb.wfb = jfb.xfb.yfb;
    var zfb = agb.dv(jfb.wfb);
    if (zfb) {
        jfb.qfb.left = zfb.qfb.left;
        jfb.qfb.rfb = zfb.qfb.rfb;
        jfb.qfb.top = zfb.qfb.top;
        jfb.qfb.bottom = zfb.qfb.bottom
    }
    if (ufb) jfb.ffb(gfb, 0, jfb, jfb)
}

function bgb(jfb, tfb, ufb) {
    if (!cfb.cgb(tfb)) {
        zw("Error: Trying to change an instance to an nonexistent object type.");
        return
    }
    sfb(jfb, tfb, ufb)
}
var dgb = bgb;

function qo(nv) {
    return st.egb[nv]
}
var fgb = 0x7fff;
var ggb = 0;
var floor = Math.floor;

function hgb(igb) {
    var mh = igb & 0xffffffff;
    var jgb = igb - mh;
    if ((mh & 1) == 1) {
        if (jgb >= 0.5) {
            return mh + 1
        } else {
            return mh
        }
    } else {
        if (jgb <= 0.5) {
            return mh
        } else {
            return mh + 1
        }
    }
}
var round = hgb;
var jz = hgb;
var abs = Math.abs;

function cos(igb) {
    var ux = Math.cos(igb);
    var qu = ~~ (ux * 0x1000000);
    ux = qu / 0x1000000;
    return ux
}

function sin(igb) {
    var ux = Math.sin(igb);
    var qu = ~~ (ux * 0x1000000);
    ux = qu / 0x1000000;
    return ux
}

function tan(igb) {
    var ux = Math.tan(igb);
    var qu = ~~ (ux * 0x1000000);
    ux = qu / 0x1000000;
    return ux
}

function kgb(jbb, kbb, lbb, mbb) {
    var oh = lbb - jbb;
    var ph = mbb - kbb;
    if (oh === 0) {
        if (ph > 0) return 270.0;
        else if (ph < 0) return 90.0;
        else return 0.0
    } else {
        var tdb = 180.0 * Math.atan2(ph, oh) / lgb;
        tdb = (~~floor(tdb * 1000000)) / 1000000.0;
        if (tdb <= 0.0) {
            return -tdb
        } else {
            return (360.0 - tdb)
        }
    }
    return zab
}

function xab(igb, mgb) {
    if (igb < mgb) return igb;
    else return mgb
}

function yab(igb, mgb) {
    if (igb > mgb) return igb;
    else return mgb
}
var max = Math.max;
var min = Math.min;

function ngb() {
    return Math.random()
}

function random(ogb) {
    var tr = 1;
    if (ogb != 0) {
        if (ogb < 0) {
            tr = -1
        }
        return ngb() * ogb * tr
    }
    return 0
}

function yr(pgb, qgb) {
    if (pgb == qgb) {
        return pgb
    }
    var rgb, sgb;
    if (pgb > qgb) {
        rgb = qgb;
        sgb = pgb
    } else {
        rgb = pgb;
        sgb = qgb
    }
    var tgb = ngb();
    ugb = rgb + (tgb * (sgb - rgb));
    return ugb
}

function gq(pgb, qgb) {
    var rgb, sgb;
    if (pgb > qgb) {
        rgb = qgb;
        sgb = pgb
    } else {
        rgb = pgb;
        sgb = qgb
    }
    var pdb = rgb | 0;
    var rdb = sgb | 0;
    var ugb = pdb + random(rdb - pdb + 1);
    return (ugb | 0)
}

function vgb() {
    var wgb = vgb.arguments;
    var xgb = vgb.arguments.length;
    var xl = Math.floor(random(xgb));
    return wgb[xl]
}

function tr(ux) {
    if (ux == 0) return 0;
    if (ux < 0) return -1;
    return 1
}
var ceil = Math.ceil;

function ygb(ux) {
    return ux - ~~ux
}
var sqrt = Math.sqrt;

function zgb(ux) {
    return ux * ux
}
var ahb = Math.pow;
var exp = Math.exp;
var bhb = Math.log;
var chb = Math.asin;
var dhb = Math.acos;
var ehb = Math.atan2;

function fhb() {
    var wgb = fhb.arguments;
    var xgb = fhb.arguments.length;
    var wab = wgb[0];
    for (var mh = 1; mh < xgb; mh++) {
        wab += wgb[mh]
    }
    return (wab / xgb)
}

function ghb() {
    var arguments = ghb.arguments;
    if (arguments.length == 0) {
        return 0
    }
    var mh, hhb, ugb;
    for (mh = 0; mh < arguments.length; mh++) {
        var ihb = 0;
        var jhb = 0;
        for (hhb = 0; hhb < arguments.length; hhb++) {
            if (arguments[hhb] < arguments[mh]) {
                ihb = ihb + 1
            }
            if (arguments[hhb] <= arguments[mh]) {
                jhb = jhb + 1
            }
        }
        if ((ihb < (arguments.length / 2)) && (jhb >= (arguments.length / 2))) {
            return arguments[mh];
        }
    }
    zw("Error: was not able to successfully find the median value");
    return 0
}

function khb(pz, ux, vx, lhb, mhb) {
    if (lhb == nhb) {
        if (mhb) {
            return ohb(pz, ux, vx)
        } else {
            return phb(pz, ux, vx)
        }
    } else {
        return (veb(pz, ux, vx, lhb) == yeb)
    }
}

function qhb(pz, ux, vx, rhb, lhb, mhb) {
    var zab = !1;
    var shb = 0.0;
    var thb = 0.0;
    var uhb = 0.0;
    if ((pz.oh == ux) && (pz.ph == vx)) return !0;
    shb = sqrt(vhb(pz.oh - ux) + vhb(pz.ph - vx));
    if (shb <= rhb) {
        thb = ux;
        uhb = vx;
        zab = !0
    } else {
        thb = pz.oh + rhb * (ux - pz.oh) / shb;
        uhb = pz.ph + rhb * (vx - pz.ph) / shb;
        zab = !1
    } if (!khb(pz, thb, uhb, lhb, mhb)) {
        return zab
    }
    pz.whb(kgb(pz.oh, pz.ph, thb, uhb));
    pz.web(thb, uhb);
    return zab
}

function xhb(pz, ux, vx, rhb, mhb) {
    return qhb(pz, ux, vx, rhb, nhb, mhb)
}

function yhb(pz, ux, vx, rhb, mhb) {
    return qhb(pz, ux, vx, rhb, nhb, mhb)
}

function zhb(aib, bib, cib, dib, eib, fib) {
    this.gib = aib;
    this.hib = bib;
    this.iib = cib;
    this.jib = dib;
    this.kib = eib;
    this.lib = fib;
    this.mib = [];
    this.nib()
};
zhb.prototype.nib = function () {
    var oib = this.iib * this.jib;
    for (var mh = 0; mh < oib; mh++) {
        this.mib[mh] = 0
    }
};
var pib = qib;

function qib(av) {
    var rib = sib.dv(av);
    if (rib) {
        eab.globalAlpha = gbb;
        var tib = iab(0xff0000, 1.0);
        var uib = iab(0x00ff00, 1.0);
        for (var ph = 0; ph < rib.jib; ph++) {
            for (var oh = 0; oh < rib.iib; oh++) {
                var mz = uib;
                if (rib.mib[ph + rib.iib * oh] < 0) mz = tib;
                eab.fillStyle = mz;
                eab.sbb((rib.gib + oh * rib.kib), (rib.hib + ph * rib.lib), rib.kib, rib.lib)
            }
        }
        return
    }
    jt("Error: invalid mp_grid ID (mp_grid_draw)");
}

function phb(pz, ux, vx) {
    var udb, vdb, zab, vib;
    zab = !0;
    udb = pz.oh;
    vdb = pz.ph;
    pz.web(ux, vx);
    var nfb = dfb.wib();
    for (var seb in nfb) {
        vib = nfb[seb];
        if (vib.xib) {
            if (pz.afb(vib, !0)) {
                zab = !1;
                break
            }
        }
    }
    pz.web(udb, vdb);
    return zab
}

function ohb(pz, ux, vx) {
    var udb, vdb, zab, vib;
    zab = !0;
    udb = pz.oh;
    vdb = pz.ph;
    pz.web(ux, vx);
    var nfb = dfb.wib();
    for (var seb in nfb) {
        vib = nfb[seb];
        if (pz.afb(vib, !0)) {
            zab = !1;
            break
        }
    }
    pz.web(udb, vdb);
    return zab
}

function yib(pz, ux, vx, qeb) {
    var udb, vdb, zab, vib;
    zab = !1;
    udb = pz.oh;
    vdb = pz.ph;
    pz.web(ux, vx);
    var nfb = fp(qeb);
    for (var seb in nfb) {
        vib = nfb[seb];
        if (pz.afb(vib, !0)) {
            zab = !0;
            break
        }
    }
    pz.web(udb, vdb);
    return zab
}

function zib(pz, ux, vx,
    ajb) {
    pz.sr(ux - pz.oh);
    pz.rr(vx - pz.ph);
    pz.ur(ajb)
}

function bjb(pz, ux, vx, cjb) {
    if (cjb) {
        return ohb(pz, ux, vx)
    } else {
        return phb(pz, ux, vx)
    }
}

function djb(jfb, ux, vx, cjb) {
    if (cjb) return ohb(jfb, ux, vx);
    else return phb(jfb, ux, vx)
}

function ejb(fjb) {
    if (cfb.dv(fjb) === null) return !1;
    return !0
}
var gjb = hjb;
var ijb = jjb;
var kjb = ljb;
var mjb = njb;
var ojb = pjb;
var qjb = rjb;
var sjb = tjb;
var ujb = vjb;
var wjb = xjb;
var yjb = zjb;
var akb = bkb;
var ckb = dkb;
var ekb = fkb;
var gkb = hkb;
var ikb = jkb;
var kkb = lkb;
var mkb = nkb;
var okb = pkb;
var qkb = rkb;
var skb = tkb;
var ukb = vkb;
var wkb = xkb;
var ykb = zkb;
var alb = blb;
var clb = dlb;
var elb = flb;
var glb = hlb;
var ilb = jlb;
var klb = llb;
var mlb = nlb;
var olb = plb;
var qlb = rlb;
var slb = tlb;
var ulb = vlb;
var wlb = xlb;
var ylb = zlb;
var amb = bmb;
var cmb = dmb;
var emb = fmb;
var gmb = hmb;
var imb = jmb;
var kmb = lmb;
var mmb = nmb;
var omb = pmb;
var qmb = rmb;
var smb = tmb;
var umb = vmb;

function wmb(jfb) {
    jfb.xmb(-1, 0, 1, 0, !1, 0)
}
var ymb = zmb;

function zmb(av, anb, bnb, cnb) {
    var dnb = enb.ng[av];
    if (!dnb) return;
    eab.globalAlpha = gbb;
    eab.strokeStyle = fbb;
    var udb, vdb, fnb;
    var gnb = 0;
    var hnb = dnb.inb(0);
    if (!cnb) {
        anb = anb - hnb.oh;
        bnb = bnb - hnb.ph
    } else {
        anb = 0;
        bnb = 0
    }
    gnb = jz(dnb.length / 4.0);
    if (gnb == 0) return;
    var dh = !0;
    eab.pcb();
    for (var mh = 0; mh <= gnb; mh++) {
        hnb = dnb.inb(mh / gnb);
        if (dh) {
            eab.qcb(anb + hnb.oh, bnb + hnb.ph);
            dh = !1
        } else {
            eab.rcb(anb + hnb.oh, bnb + hnb.ph)
        }
    }
    eab.scb();
    eab.tcb()
}

function jnb(av, yx, zx) {
    var dnb = enb.ng[av];
    if (!dnb) return;
    dnb.knb(yx, zx)
}

function ir() {
    if ((dfb.lnb + 1) >= mnb.nnb.length) return;
    onb = mnb.pnb(dfb.lnb + 1).am
}

function xq(qnb) {
    onb = qnb
}

function yo(rnb) {
    snb.tnb(rnb)
}

function hs(rnb) {
    snb.unb(rnb)
}

function gs() {
    snb.vnb()
}
var wnb = 0,
    xnb = 1,
    ynb = 2,
    znb = 3;

function aob(rnb) {
    if (agb.dv(rnb) == null) return !1;
    return !0
}

function qq(rnb) {
    var bob = agb.dv(rnb);
    if (bob == null) return 0;
    return bob.width
}
var cob = dob;

function dob(fjb, ux, vx, lu, mu, eob, fob) {
    var gob = document.createElement(hob);
    var iob = gob.getContext('2d');
    job(iob);
    kob = agb.dv(fjb);
    kob.lob++;
    gob.width = kob.width;
    gob.height = kob.height;
    iob.mob(cu, ux, vx, lu, mu, 0, 0, gob.width, gob.height);
    gob.complete = !0;
    kob.lob++;
    var nob = new oob();
    kob.pob[kob.pob.length] = nob;
    nob.oh = 0;
    nob.ph = 0;
    nob.qh = kob.width;
    nob.rh = kob.height;
    nob.om = 0;
    nob.pm = 0;
    nob.qm = nob.qh;
    nob.rm = nob.rh;
    nob.sm = nob.qh;
    nob.tm = nob.rh;
    nob.um = qob(gob);
    nob.rob = sob[nob.um];
    return fjb
}
var tob = uob;

function uob(av, ux, vx, lu, mu, eob, fob, vob, wob) {
    var gob = document.createElement(hob);
    var iob = gob.getContext('2d');
    job(iob);
    gob.width = xob.dv(av).width;
    gob.height = xob.dv(av).height;
    iob.mob(xob.dv(av), 0, 0);
    gob.complete = !0;
    var kob = new yob();
    var zob = agb.apb(kob);
    kob.wf = "surface.copy";
    kob.width = gob.width;
    kob.height = gob.height;
    kob.qfb = new bpb();
    kob.qfb.rfb = kob.width;
    kob.qfb.bottom = kob.height;
    kob.mg = !0;
    kob.dg = !0;
    kob.preload = !0;
    kob.cpb = 0;
    kob.dpb = !1;
    kob.eg = vob;
    kob.fg = wob;
    kob.epb = !0;
    kob.lob = 1;
    kob.fpb = 0;
    kob.gpb = !1;
    kob.hpb = !1;
    kob.ipb = [];
    kob.pob = [];
    kob.jpb = [];
    var nob = new oob();
    kob.pob[0] = nob;
    nob.oh = 0;
    nob.ph = 0;
    nob.qh = kob.width;
    nob.rh = kob.height;
    nob.om = 0;
    nob.pm = 0;
    nob.qm = nob.qh;
    nob.rm = nob.rh;
    nob.sm = nob.qh;
    nob.tm = nob.rh;
    nob.um = qob(gob);
    nob.rob = sob[nob.um];
    return zob
}
var kpb = lpb;

function lpb(fjb, av, ux, vx, lu, mu, eob, fob) {
    var gob = document.createElement(hob);
    var iob = gob.getContext('2d');
    job(iob);
    kob = agb.dv(fjb);
    kob.lob++;
    gob.width = kob.width;
    gob.height = kob.height;
    iob.mob(xob.dv(av), 0, 0, lu, mu, 0, 0, gob.width, gob.height);
    gob.complete = !0;
    var nob = new oob();
    kob.pob[kob.pob.length] = nob;
    nob.oh = 0;
    nob.ph = 0;
    nob.qh = kob.width;
    nob.rh = kob.height;
    nob.om = 0;
    nob.pm = 0;
    nob.qm = nob.qh;
    nob.rm = nob.rh;
    nob.sm = nob.qh;
    nob.tm = nob.rh;
    nob.um = qob(gob);
    nob.rob = sob[nob.um];
    return fjb
}
var mpb = npb;

function npb(fjb) {
    var bob = agb.dv(fjb);
    if (bob == null) return 0;
    var kob = new yob();
    var zob = agb.apb(kob);
    kob.wf = bob.wf + ".copy";
    kob.width = bob.width;
    kob.height = bob.height;
    kob.qfb.ru(bob.qfb);
    kob.mg = bob.mg;
    kob.dg = bob.dg;
    kob.preload = bob.preload;
    kob.cpb = bob.cpb;
    kob.dpb = bob.dpb;
    kob.eg = bob.eg;
    kob.fg = bob.fg;
    kob.epb = !0;
    kob.lob = bob.lob;
    kob.fpb = bob.fpb;
    kob.gpb = bob.gpb;
    kob.hpb = bob.hpb;
    kob.ipb = [];
    kob.pob = [];
    kob.jpb = [];
    for (var mh = 0; mh < bob.lob; mh++) {
        var nob = new oob();
        kob.pob[mh] = nob;
        nob.epb(bob.pob[mh]);
        var opb = ppb(bob.pob[mh]);
        nob.um = qob(opb);
        nob.oh = 0;
        nob.ph = 0;
        nob.rob = sob[nob.um]
    }
    return zob
}

function qpb(rpb, spb, tpb, upb, vpb, wpb) {
    var qh = spb.sm;
    var rh = spb.tm;
    var xpb = [];
    var ypb = rh * qh;
    for (hhb = 0; hhb < ypb; hhb++) xpb[hhb] = !1;
    if (vpb == wnb) {
        var zpb = aqb(spb);
        var xl = 0;
        for (var mh = 0; mh < zpb.length; mh += 4) {
            if (zpb[mh + 3] >= wpb) xpb[xl] = !0;
            else xpb[xl] = !1;
            xl++
        }
    } else {
        switch (vpb) {
        case xnb:
            {
                for (var ph = upb.top; ph <= upb.bottom; ph++) {
                    for (var oh = upb.left; oh <= upb.rfb; oh++) {
                        xpb[oh + (ph * qh)] = !0
                    }
                }
                break
            }
        case ynb:
            {
                var bqb = (upb.left + upb.rfb) / 2;
                var cqb = bqb - upb.left + 0.5;
                var dqb = (upb.top + upb.bottom) / 2;
                var eqb = dqb - upb.top + 0.5;
                for (var ph = upb.top; ph <= upb.bottom; ph++) {
                    for (var oh = upb.left; oh <= upb.rfb; oh++) {
                        if ((cqb > 0) && (eqb > 0)) {
                            xpb[oh + (ph * qh)] = zgb((oh - bqb) / cqb) + zgb((ph - dqb) / eqb) < 1
                        }
                    }
                }
                break
            }
        case znb:
            {
                var bqb = (upb.left + upb.rfb) / 2;
                var cqb = bqb - upb.left + 0.5;
                var dqb = (upb.top + upb.bottom) / 2;
                var eqb = dqb - upb.top + 0.5;
                for (var ph = upb.top; ph <= upb.bottom; ph++) {
                    for (var oh = upb.left; oh <= upb.rfb; oh++) {
                        if ((cqb > 0) && (eqb > 0)) {
                            xpb[oh + (ph * qh)] = Math.abs((oh - bqb) / cqb) + Math.abs((ph - dqb) / eqb) < 1
                        }
                    }
                }
                break
            }
        }
    } if (rpb != null) {
        for (var mh = 0; mh < xpb.length; mh++) {
            if (rpb[mh]) xpb[mh] = !0
        }
    }
    return xpb
}

function fqb(bv) {
    return String.fromCharCode(bv)
}

function gqb(hqb) {
    if (!hqb || hqb == "") return 0;
    return hqb.charCodeAt(0)
}

function op(qeb) {
    if (qeb == undefined) {
        return "undefined"
    }
    if ((typeof (qeb) == "number") && ((qeb | 0) != qeb)) {
        return qeb.toFixed(2).toString()
    } else if (typeof (qeb) == "boolean") {
        if (qeb) return "1";
        else return "0"
    } else {
        return qeb.toString()
    }
}
iqb = jqb;

function jqb(lu, mu) {
    var kqb = document.createElement(hob);
    kqb.ou = kqb.width = lu;
    kqb.pu = kqb.height = mu;
    kqb.complete = !0;
    kqb.lqb = !1;
    kqb.name = "";
    kqb.eab = kqb.getContext('2d');
    job(kqb.eab);
    var nob = new oob();
    kqb.mqb = nob;
    nob.oh = 0;
    nob.ph = 0;
    nob.qh = lu;
    nob.rh = mu;
    nob.om = 0;
    nob.pm = 0;
    nob.qm = nob.qh;
    nob.rm = nob.rh;
    nob.sm = nob.qh;
    nob.tm = nob.rh;
    nob.um = xob.yu(kqb);
    nob.rob = kqb;
    nob.nqb = [];
    nob.oqb = 0;
    nob.pqb = 4;
    nob.qqb = 0;
    nob.rqb = null;
    nob.gob = kqb;
    return nob.um
}
var sqb = tqb;

function tqb(av) {
    xob.iv(av)
}

function uqb(av) {
    var kqb = xob.dv(av);
    if (kqb != null) {
        eab = kqb.eab;
        vqb = !1
    }
}
var wqb = xqb;

function xqb(av) {
    var kqb = xob.dv(av);
    if (kqb != null) {
        yqb.left = zqb.left;
        yqb.top = zqb.top;
        yqb.rfb = zqb.rfb;
        yqb.bottom = zqb.bottom;
        zqb.left = 0;
        zqb.top = 0;
        zqb.rfb = kqb.ou;
        zqb.bottom = kqb.pu;
        arb.ru(brb);
        brb.crb = 0;
        brb.drb = 0;
        brb.erb = kqb.ou;
        brb.frb = kqb.pu;
        brb.grb = 0;
        brb.hrb = 0;
        brb.irb = kqb.ou;
        brb.jrb = kqb.pu;
        brb.krb = 0;
        brb.lrb = 0;
        brb.mrb = kqb.ou;
        brb.nrb = kqb.pu;
        brb.orb = brb.krb + brb.mrb;
        brb.prb = brb.lrb + brb.nrb;
        eab = kqb.eab;
        vqb = !0
    }
}
var qrb = rrb;

function rrb() {
    eab = srb;
    if (vqb) {
        zqb = yqb;
        brb.ru(arb)
    }
}

function kcb(trb, ux, vx) {
    var data = null;
    var urb = trb.getContext('2d');
    try {
        data = urb.vrb(0, 0, trb.width, trb.height);
    } catch (wrb) {
        return 0xff000000
    }
    xrb = data.data;
    var xl = ((trb.width * vx) + ux) * 4;
    var yrb = xrb[xl] & 0xff;
    var zrb = xrb[xl + 1] & 0xff;
    var asb = xrb[xl + 2] & 0xff;
    var bsb = xrb[xl + 3] & 0xff;
    return (yrb | (zrb << 8) | (asb << 16) | (bsb << 24))
}
var csb = dsb;

function dsb(av, ux, vx) {
    var kqb = xob.dv(av);
    if (kqb != null) {
        return kcb(kqb, ux, vx) & 0xffffff
    }
    return 0x00000000
}
var esb = fsb;

function fsb(av, ux, vx) {
    var kqb = xob.dv(av);
    if (!kqb) return;
    ux = ~~ux;
    vx = ~~vx;
    eab.mob(kqb, ux, vx)
}
var gsb = hsb;

function hsb(av, ux, vx, yx, zx, isb, dab) {
    cx("draw_surface_tiled_ext()")
}

function jsb(ksb, ux, vx, lsb) {
    var msb = xob.dv(ksb);
    var nsb = xob.dv(lsb);
    if (msb != null && nsb != null) {
        var urb = msb.getContext('2d');
        urb.save();
        urb.globalCompositeOperation = 'copy';
        urb.drawImage(nsb, ux, vx);
        urb.restore()
    }
}

function osb(ksb,
    ux, vx, lsb, psb, qsb, rsb, ssb) {
    var msb = xob.dv(ksb);
    var nsb = xob.dv(lsb);
    if (msb != null && nsb != null) {
        var gab = [];
        var urb = msb.getContext('2d');
        urb.save();
        gab[0] = 1;
        gab[1] = 0;
        gab[2] = 0;
        gab[3] = 1;
        gab[4] = 0;
        gab[5] = 0;
        urb.setTransform(gab[0], gab[1], gab[2], gab[3], gab[4], gab[5]);
        urb.beginPath();
        urb.rect(ux, vx, rsb, ssb);
        urb.clip();
        urb.globalCompositeOperation = 'copy';
        urb.drawImage(nsb, psb, qsb, rsb, ssb, ux, vx, rsb, ssb);
        urb.restore()
    }
}

function zq(tsb, aib, bib, usb, vsb, ux, vx, wsb) {
    var xsb = new ysb();
    xsb.oh = ux;
    xsb.ph = vx;
    xsb.gj = wsb;
    xsb.zsb = aib;
    xsb.atb = bib;
    xsb.qh = usb;
    xsb.rh = vsb;
    xsb.xl = tsb;
    dfb.btb(xsb);
    return xsb.am
}

function ctb(dtb) {
    if (dtb) {
        cu.style.cursor = ""
    } else {
        cu.style.cursor = "none"
    }
}

function etb(ux, vx) {
    var ftb = document.getElementById(hob);
    ftb.style.position = "absolute";
    ftb.style.left = ux + "px";
    ftb.style.top = vx + "px"
}
var gtb;
var htb;
var itb;
var jtb;
var ktb;
var ltb;
var mtb;
var ntb;
var otb;
var ptb;
var qtb;
var rtb;
var stb = 0;
var ttb = aa_1241_kz();

function aa_1241_kz() {
    return 0x87155211
}

function utb() {
    var vtb = null;
    if (window.XMLHttpRequest) {
        vtb = new XMLHttpRequest()
    }
    if (typeof (XMLHttpRequest) == "undefined") {
        vtb = function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (wtb) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (wtb) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (wtb) {}
            throw new jt("This browser does not support XMLHttpRequest.")
        }
    }
    this.xtb = vtb;
    this.ytb = !1
}
var ztb = new utb();

function aub() {
    return bub
}

function cub() {
    return dub
}

function eub() {
    return fub
}

function gub() {
    return hub
}

function iub() {
    var qu = new Date().getTime() * 1000;
    return qu - gtb
}

function jub() {
    gtb = new Date().getTime() * 1000;
    var qu = 0;
    for (var mh = 0; mh < 12; mh++) {
        kw[mh] = qu;
        qu += jw[mh]
    }
    htb = 0;
    itb = 1;
    jtb = 2;
    ktb = 3;
    ltb = 4;
    mtb = 5;
    ntb = 0;
    otb = 1;
    ptb = 2;
    qtb = 0;
    rtb = 1
}

function kub() {
    var qu = setTimeout(function () {
        for (var lub in agb.cg) {
            agb.mub(lub);
            break
        }
        kub()
    }, 1000)
}

function nub(oub, pub) {
    for (var qub in oub) {
        var rub = oub[qub];
        if (rub instanceof Array) {
            var tub = tu();
            zu(pub, tub);
            nub(rub, tub)
        } else if (typeof (rub) == "object") {
            var uub = ev();
            zu(pub, uub);
            vub(rub, uub)
        } else if (typeof (rub) == "string") {
            zu(pub, rub)
        }
    }
}

function vub(wub, xub) {
    for (var yub in wub) {
        if (wub.hasOwnProperty(yub)) {
            var rub = wub[yub];
            if (rub instanceof Array) {
                var zub = tu();
                mv(xub, yub, zub);
                nub(rub, zub)
            } else if (typeof (rub) == "object") {
                var avb = ev();
                mv(xub, yub, avb);
                vub(rub, avb)
            } else if (typeof (rub) == "string") {
                mv(xub, yub, rub)
            }
        }
    }
}
var bvb = !1,
    cvb = -1,
    dvb = -1,
    evb = 0,
    fvb = 1,
    gvb = 2,
    hvb = 3,
    ivb = 4,
    jvb = 5,
    kvb = 6,
    lvb = 7,
    mvb = 8,
    nvb = 9,
    ovb = 10,
    pvb = 11,
    qvb = [0, 0, 0],
    rvb = [0, 0, 0],
    svb = [0, 0, 0, 0, 0, 0],
    tvb = [0, 0, 0],
    uvb = [0, 0, 0],
    vvb = [0, 0, 0],
    wvb = [0, 0, 0],
    xvb = [0, 0, 0],
    yvb = [0, 0, 0],
    zvb = [0, 0, 0],
    awb = 0,
    bwb = 0;

function cwb() {
    if ((dfb.dwb() <= 30) || (ewb <= 30)) {
        return 1.0
    }
    if ((dfb.dwb() / ewb) < 1.2) {
        return 30.0 / dfb.dwb()
    } else {
        return 30.0 / ewb
    }
}

function fwb() {
    if (!ljb(cvb)) {
        cvb = hjb();
        rjb(cvb, 100000)
    }
    if (!ljb(dvb)) {
        dvb = hjb();
        rjb(dvb, -100000)
    }
    if (!bvb) {
        gwb()
    }
}

function gwb() {
    bvb = !0;
    for (var mh = 0; mh <= 5; mh++) {
        svb[mh] = lkb()
    }
    for (var mh = 0; mh <= 2; mh++) {
        tvb[mh] = lkb();
        qvb[mh] = lkb();
        uvb[mh] = lkb();
        rvb[mh] = lkb();
        vvb[mh] = lkb();
        wvb[mh] = lkb();
        xvb[mh] = lkb();
        yvb[mh] = lkb();
        zvb[mh] = lkb()
    }
    awb = lkb();
    bwb = lkb()
}

function hwb(iwb, ux, vx, hy, cab) {
    var jgb = cwb();
    if (hy == 0) {
        tkb(svb[0], jwb);
        xkb(svb[0], 0.1,
            0.1, 0.05 * jgb, 0);
        zlb(svb[0], 0, 360, 0, 0, !1);
        dmb(svb[0], 0, 360, 0, 0);
        bmb(svb[0], 2 * jgb, 2 * jgb, -0.1 * jgb, 0);
        plb(svb[0], 0.6, 0);
        tlb(svb[0], jz(10.0 / jgb), jz(15.0 / jgb));
        fkb(iwb, ux, vx, svb[0], cab, 20);
        tkb(svb[1], jwb);
        xkb(svb[1], 0.1, 0.1, 0.1 * jgb, 0);
        zlb(svb[1], 0, 360, 0, 0, !1);
        plb(svb[1], 0.8, 0);
        tlb(svb[1], jz(15 / jgb), jz(15 / jgb));
        fkb(iwb, ux, vx, svb[1], kwb, 1)
    } else if (hy == 2) {
        tkb(svb[4], jwb);
        xkb(svb[4], 0.4, 0.4, 0.2 * jgb, 0);
        zlb(svb[4], 0, 360, 0, 0, !1);
        dmb(svb[4], 0, 360, 0, 0);
        bmb(svb[4], 7 * jgb, 7 * jgb, -0.2 * jgb, 0);
        plb(svb[4], 0.6, 0);
        tlb(svb[4],
            jz(15 / jgb), jz(20 / jgb));
        fkb(iwb, ux, vx, svb[4], cab, 20);
        tkb(svb[5], jwb);
        xkb(svb[5], 0.4, 0.4, 0.4 * jgb, 0);
        zlb(svb[5], 0, 360, 0, 0, !1);
        plb(svb[5], 0.8, 0);
        tlb(svb[5], jz(20 / jgb), jz(20 / jgb));
        fkb(iwb, ux, vx, svb[5], kwb, 1)
    } else {
        tkb(svb[2], jwb);
        xkb(svb[2], 0.3, 0.3, 0.1 * jgb, 0);
        zlb(svb[2], 0, 360, 0, 0, !1);
        dmb(svb[2], 0, 360, 0, 0);
        bmb(svb[2], 4 * jgb, 4 * jgb, -0.18 * jgb, 0);
        plb(svb[2], 0.6, 0);
        tlb(svb[2], jz(12 / jgb), jz(17 / jgb));
        fkb(iwb, ux, vx, svb[2], cab, 20);
        tkb(svb[3], jwb);
        xkb(svb[3], 0.3, 0.3, 0.2 * jgb, 0);
        zlb(svb[3], 0, 360, 0, 0, !1);
        plb(svb[3],
            0.8, 0);
        tlb(svb[3], jz(17 / jgb), jz(17 / jgb));
        fkb(iwb, ux, vx, svb[3], kwb, 1)
    }
}

function lwb(iwb, ux, vx, hy, cab) {
    var jgb = cwb();
    if (hy == 0) {
        tkb(tvb[0], mwb);
        plb(tvb[0], 1, 0);
        xkb(tvb[0], 0.0, 0.0, 0.15 * jgb, 0.0);
        tlb(tvb[0], jz(10.0 / jgb), jz(12.0 / jgb));
        fkb(iwb, ux, vx, tvb[0], cab, 1)
    } else if (hy == 2) {
        tkb(tvb[2], mwb);
        plb(tvb[2], 1, 0);
        xkb(tvb[2], 0, 0, 0.4 * jgb, 0);
        tlb(tvb[2], jz(18.0 / jgb), jz(20.0 / jgb));
        fkb(iwb, ux, vx, tvb[2], cab, 1)
    } else {
        tkb(tvb[1], mwb);
        plb(tvb[1], 1, 0);
        xkb(tvb[1], 0, 0, 0.25 * jgb, 0);
        tlb(tvb[1], jz(13.0 / jgb), jz(15.0 / jgb));
        fkb(iwb,
            ux, vx, tvb[1], cab, 1)
    }
}

function nwb(iwb, ux, vx, hy, cab) {
    var jgb = cwb();
    if (hy == 0) {
        tkb(qvb[0], mwb);
        plb(qvb[0], 1, 0);
        xkb(qvb[0], 0, 0, 0.2 * jgb, 0);
        zkb(qvb[0], 1, 0.5);
        tlb(qvb[0], jz(10.0 / jgb), jz(12.0 / jgb));
        fkb(iwb, ux, vx, qvb[0], cab, 1)
    } else if (hy == 2) {
        tkb(qvb[2], mwb);
        plb(qvb[2], 1, 0);
        xkb(qvb[2], 0, 0, 0.6 * jgb, 0);
        zkb(qvb[2], 1, 0.5);
        tlb(qvb[2], jz(18.0 / jgb), jz(20.0 / jgb));
        fkb(iwb, ux, vx, qvb[2], cab, 1)
    } else {
        tkb(qvb[1], mwb);
        plb(qvb[1], 1, 0);
        xkb(qvb[1], 0, 0, 0.35 * jgb, 0);
        zkb(qvb[1], 1, 0.5);
        tlb(qvb[1], jz(13.0 / jgb), jz(15.0 / jgb));
        fkb(iwb,
            ux, vx, qvb[1], cab, 1)
    }
}

function owb(iwb, ux, vx, hy, cab) {
    var jgb = cwb();
    if (hy == 0) {
        tkb(uvb[1], pwb);
        xkb(uvb[1], 0.1, 0.2, 0, 0);
        bmb(uvb[1], 0.5 * jgb, 3.0 * jgb, 0.0, 0.0);
        dmb(uvb[1], 0, 360, 0, 0);
        plb(uvb[1], 1, 0.4);
        tlb(uvb[1], jz(15.0 / jgb), jz(25.0 / jgb));
        fmb(uvb[1], 0.10 * jgb, 270);
        fkb(iwb, ux, vx, uvb[1], cab, 75)
    } else if (hy == 2) {
        tkb(uvb[1], pwb);
        xkb(uvb[1], 0.1, 0.2, 0, 0);
        bmb(uvb[1], 0.5 * jgb, 8.0 * jgb, 0.0, 0.0);
        dmb(uvb[1], 0, 360, 0, 0);
        plb(uvb[1], 1, 0.4);
        tlb(uvb[1], jz(30.0 / jgb), jz(40.0 / jgb));
        fmb(uvb[1], 0.17 * jgb, 270);
        fkb(iwb, ux, vx, uvb[1], cab,
            250)
    } else {
        tkb(uvb[1], pwb);
        xkb(uvb[1], 0.1, 0.2, 0, 0);
        bmb(uvb[1], 0.5 * jgb, 6.0 * jgb, 0.0, 0.0);
        dmb(uvb[1], 0, 360, 0, 0);
        plb(uvb[1], 1, 0.4);
        tlb(uvb[1], jz(20.0 / jgb), jz(30.0 / jgb));
        fmb(uvb[1], 0.15 * jgb, 270);
        fkb(iwb, ux, vx, uvb[1], cab, 150)
    }
}

function qwb(iwb, ux, vx, hy, cab) {
    var mh;
    var jgb = cwb();
    if (hy == 0) {
        tkb(rvb[0], jwb);
        xkb(rvb[0], 0.2, 0.4, -0.01 * jgb, 0);
        plb(rvb[0], 0.4, 0);
        tlb(rvb[0], jz(25.0 / jgb), jz(25.0 / jgb));
        for (mh = 0; mh <= 5; mh++) {
            fkb(iwb, ux - 5 + rwb(10), vx - 5 + rwb(10), rvb[0], cab, 1)
        }
    } else if (hy == 2) {
        tkb(rvb[2], jwb);
        xkb(rvb[2], 0.4, 1, -0.01 * jgb, 0);
        plb(rvb[2], 0.4, 0);
        tlb(rvb[2], jz(50.0 / jgb), jz(50.0 / jgb));
        for (mh = 0; mh <= 15; mh++) {
            fkb(iwb, ux - 30 + rwb(60), vx - 30 + rwb(60), rvb[2], cab, 1)
        }
    } else {
        tkb(rvb[1], jwb);
        xkb(rvb[1], 0.4, 0.7, -0.01 * jgb, 0);
        plb(rvb[1], 0.4, 0);
        tlb(rvb[1], jz(30.0 / jgb), jz(30.0 / jgb));
        for (mh = 0; mh <= 10; mh++) {
            fkb(iwb, ux - 15 + rwb(30), vx - 15 + rwb(30), rvb[1], cab, 1)
        }
    }
}

function swb(iwb, ux, vx, hy, cab) {
    var mh;
    var jgb = cwb();
    if (hy == 0) {
        tkb(vvb[0], jwb);
        xkb(vvb[0], 0.2, 0.4, -0.01 * jgb, 0);
        plb(vvb[0], 0.4, 0);
        bmb(vvb[0], 3.0 * jgb, 4.0 * jgb, 0, 0);
        dmb(vvb[0], 90, 90, 0,
            0);
        tlb(vvb[0], jz(25.0 / jgb), jz(25.0 / jgb));
        for (mh = 0; mh <= 5; mh++) {
            fkb(iwb, ux - 5 + rwb(10), vx - 5 + rwb(10), vvb[0], cab, 1)
        }
    } else if (hy == 2) {
        tkb(vvb[2], jwb);
        xkb(vvb[2], 0.4, 1, -0.01 * jgb, 0);
        plb(vvb[2], 0.4, 0);
        bmb(vvb[2], 6.0 * jgb, 7.0 * jgb, 0, 0);
        dmb(vvb[2], 90, 90, 0, 0);
        tlb(vvb[2], jz(50.0 / jgb), jz(50.0 / jgb));
        for (mh = 0; mh <= 15; mh++) {
            fkb(iwb, ux - 30 + rwb(60), vx - 30 + rwb(60), vvb[2], cab, 1)
        }
    } else {
        tkb(vvb[1], jwb);
        xkb(vvb[1], 0.4, 0.7, -0.01 * jgb, 0);
        plb(vvb[1], 0.4, 0);
        bmb(vvb[1], 5.0 * jgb, 6.0 * jgb, 0, 0);
        dmb(vvb[1], 90, 90, 0, 0);
        tlb(vvb[1], jz(30.0 / jgb),
            jz(30.0 / jgb));
        for (mh = 0; mh <= 10; mh++) {
            fkb(iwb, ux - 15 + rwb(30), vx - 15 + rwb(30), vvb[1], cab, 1)
        }
    }
}

function twb(iwb, ux, vx, hy, cab) {
    var jgb = cwb();
    if (hy == 0) {
        tkb(wvb[0], uwb);
        xkb(wvb[0], 0.4, 0.3, -0.02 * jgb, 0);
        zlb(wvb[0], 0, 360, 0, 0, !1);
        tlb(wvb[0], jz(20 / jgb), jz(20 / jgb));
        fkb(iwb, ux, vx, wvb[0], cab, 1)
    } else if (hy == 2) {
        tkb(wvb[2], uwb);
        xkb(wvb[2], 1.2, 1.2, -0.04 * jgb, 0);
        zlb(wvb[2], 0, 360, 0, 0, !1);
        tlb(wvb[2], jz(30 / jgb), jz(30 / jgb));
        fkb(iwb, ux, vx, wvb[2], cab, 1)
    } else {
        tkb(wvb[1], uwb);
        xkb(wvb[1], 0.75, 0.75, -0.03 * jgb, 0);
        zlb(wvb[1], 0, 360, 0, 0, !1);
        tlb(wvb[1], jz(25 / jgb), jz(25 / jgb));
        fkb(iwb, ux, vx, wvb[1], cab, 1)
    }
}

function vwb(iwb, ux, vx, hy, cab) {
    var jgb = cwb();
    if (hy == 0) {
        tkb(xvb[0], wwb);
        xkb(xvb[0], 0.4, 0.4, -0.02 * jgb, 0);
        zlb(xvb[0], 0, 360, 0, 0, !1);
        tlb(xvb[0], jz(20 / jgb), jz(20 / jgb));
        fkb(iwb, ux, vx, xvb[0], cab, 1)
    } else if (hy == 2) {
        tkb(xvb[2], wwb);
        xkb(xvb[2], 1.2, 1.2, -0.04 * jgb, 0);
        zlb(xvb[2], 0, 360, 0, 0, !1);
        tlb(xvb[2], jz(30 / jgb), jz(30 / jgb));
        fkb(iwb, ux, vx, xvb[2], cab, 1)
    } else {
        tkb(xvb[1], wwb);
        xkb(xvb[1], 0.75, 0.75, -0.03 * jgb, 0);
        zlb(xvb[1], 0, 360, 0, 0, !1);
        tlb(xvb[1], jz(25 / jgb),
            jz(25 / jgb));
        fkb(iwb, ux, vx, xvb[1], cab, 1)
    }
}

function xwb(iwb, ux, vx, hy, cab) {
    var jgb = cwb();
    if (hy == 0) {
        tkb(yvb[0], pwb);
        xkb(yvb[0], 0.4, 0.4, -0.02 * jgb, 0);
        zlb(yvb[0], 0, 360, 0, 0, !1);
        tlb(yvb[0], jz(20 / jgb), jz(20 / jgb));
        fkb(iwb, ux, vx, yvb[0], cab, 1)
    } else if (hy == 2) {
        tkb(yvb[2], pwb);
        xkb(yvb[2], 1.2, 1.2, -0.04 * jgb, 0);
        zlb(yvb[2], 0, 360, 0, 0, !1);
        tlb(yvb[2], jz(30 / jgb), jz(30 / jgb));
        fkb(iwb, ux, vx, yvb[2], cab, 1)
    } else {
        tkb(yvb[1], pwb);
        xkb(yvb[1], 0.75, 0.75, -0.03 * jgb, 0);
        zlb(yvb[1], 0, 360, 0, 0, !1);
        tlb(yvb[1], jz(25 / jgb), jz(25 / jgb));
        fkb(iwb,
            ux, vx, yvb[1], cab, 1)
    }
}

function ywb(iwb, ux, vx, hy, cab) {
    var jgb = cwb();
    if (hy == 0) {
        tkb(zvb[0], jwb);
        xkb(zvb[0], 2, 2, 0, 0);
        zkb(zvb[0], 1, 0.5);
        rlb(zvb[0], 0, 0.3, 0);
        tlb(zvb[0], jz(100.0 / jgb), jz(100.0 / jgb));
        fkb(iwb, ux, vx, zvb[0], cab, 1)
    } else if (hy == 2) {
        tkb(zvb[2], jwb);
        xkb(zvb[2], 8, 8, 0, 0);
        zkb(zvb[2], 1, 0.5);
        rlb(zvb[2], 0, 0.3, 0);
        tlb(zvb[2], jz(100.0 / jgb), jz(100.0 / jgb));
        fkb(iwb, ux, vx, zvb[02], cab, 1)
    } else {
        tkb(zvb[1], jwb);
        xkb(zvb[1], 4, 4, 0, 0);
        zkb(zvb[1], 1, 0.5);
        rlb(zvb[1], 0, 0.3, 0);
        tlb(zvb[1], jz(100.0 / jgb), jz(100.0 / jgb));
        fkb(iwb,
            ux, vx, zvb[1], cab, 1)
    }
}

function zwb(iwb, ux, vx, hy, cab) {
    var mh;
    var jgb = cwb();
    tkb(awb, axb);
    xkb(awb, 0.2, 0.3, 0.0, 0.0);
    zlb(awb, 0, 0, 0, 0, !0);
    bmb(awb, 7 * jgb, 7 * jgb, 0, 0);
    dmb(awb, 260, 260, 0, 0);
    nlb(awb, 0.4);
    tlb(awb, jz(0.2 * dfb.bxb() / jgb), jz(0.2 * dfb.bxb() / jgb));
    if (hy == 0) {
        for (mh = 0; mh <= 1; mh++) {
            fkb(iwb, rwb(1) * 1.2 * dfb.cxb(), -30.0 + rwb(20), awb, cab, 1)
        }
    } else if (hy == 2) {
        for (mh = 0; mh <= 8; mh++) {
            fkb(iwb, rwb(1) * 1.2 * dfb.cxb(), -30.0 + rwb(20), awb, cab, 1)
        }
    } else {
        for (mh = 0; mh <= 4; mh++) {
            fkb(iwb, rwb(1) * 1.2 * dfb.cxb(), -30.0 + rwb(20), awb, cab, 1)
        }
    }
}

function dxb(iwb,
    ux, vx, hy, cab) {
    var mh;
    var jgb = cwb();
    tkb(bwb, exb);
    xkb(bwb, 0.1, 0.25, 0.0, 0.0);
    nlb(bwb, 0.6);
    zlb(bwb, 0, 360, 0, 0, !1);
    bmb(bwb, 2.5 * jgb, 3.0 * jgb, 0.0, 0.0);
    dmb(bwb, 240, 300, 0, 20);
    tlb(bwb, jz(0.5 * dfb.bxb() / jgb), jz(0.5 * dfb.bxb() / jgb));
    if (hy == 0) {
        for (mh = 0; mh <= 0; mh++) {
            fkb(iwb, rwb(1) * 1.2 * dfb.cxb() - 60, -30.0 + rwb(20), bwb, cab, 1)
        }
    } else if (hy == 2) {
        for (mh = 0; mh <= 6; mh++) {
            fkb(iwb, rwb(1) * 1.2 * dfb.cxb() - 60, -30.0 + rwb(20), bwb, cab, 1)
        }
    } else {
        for (mh = 0; mh <= 2; mh++) {
            fkb(iwb, rwb(1) * 1.2 * dfb.cxb() - 60, -30.0 + rwb(20), bwb, cab, 1)
        }
    }
}

function fxb(gxb, vpb,
    ux, vx, hy, cab) {
    var hxb;
    fwb();
    if (gxb) {
        hxb = cvb
    } else {
        hxb = dvb
    }
    switch (vpb) {
    case evb:
        hwb(hxb, ux, vx, hy, cab);
        break;
    case fvb:
        lwb(hxb, ux, vx, hy, cab);
        break;
    case gvb:
        nwb(hxb, ux, vx, hy, cab);
        break;
    case hvb:
        owb(hxb, ux, vx, hy, cab);
        break;
    case ivb:
        qwb(hxb, ux, vx, hy, cab);
        break;
    case jvb:
        swb(hxb, ux, vx, hy, cab);
        break;
    case kvb:
        twb(hxb, ux, vx, hy, cab);
        break;
    case lvb:
        vwb(hxb, ux, vx, hy, cab);
        break;
    case mvb:
        xwb(hxb, ux, vx, hy, cab);
        break;
    case nvb:
        ywb(hxb, ux, vx, hy, cab);
        break;
    case ovb:
        zwb(hxb, ux, vx, hy, cab);
        break;
    case pvb:
        dxb(hxb, ux, vx, hy, cab);
        break
    }
}

function ixb() {
    var nfb = dfb.mfb.nfb;
    for (var jxb = 0; jxb < nfb.length; jxb++) {
        var seb = nfb[jxb];
        var xfb = seb.xfb;
        if (!seb.ueb) {
            if (xfb.kxb[lxb]) {
                if (aob(seb.wfb) || aob(seb.mxb)) {
                    var qfb = seb.nxb();
                    if ((qfb.rfb < 0) || (qfb.left > dfb.cxb()) || (qfb.bottom < 0) || (qfb.top > dfb.bxb())) {
                        seb.ffb(lxb, oxb, seb, seb)
                    }
                } else {
                    if ((seb.oh < 0) || (seb.oh > dfb.cxb()) || (seb.ph < 0) || (seb.ph > dfb.bxb())) {
                        seb.ffb(lxb, oxb, seb, seb)
                    }
                }
            }
            if (xfb.kxb[pxb]) {
                if (aob(seb.wfb) || aob(seb.mxb)) {
                    var qfb = seb.nxb();
                    if ((qfb.left < 0) || (qfb.rfb > dfb.cxb()) || (qfb.top < 0) || (qfb.bottom > dfb.bxb())) {
                        seb.ffb(pxb, oxb, seb, seb)
                    }
                } else {
                    if ((seb.oh < 0) || (seb.oh > dfb.cxb()) || (seb.ph < 0) || (seb.ph > dfb.bxb())) {
                        seb.ffb(pxb, oxb, seb, seb)
                    }
                }
            }
        }
    }
}

function qxb() {
    for (var rxb in sxb) {
        var txb = cfb.dv(rxb);
        var uxb = txb.vxb();
        for (var wxb = 0; wxb < uxb.length; wxb++) {
            var xxb = uxb[wxb];
            if (!xxb.ueb && xxb.yxb) {
                var zxb = sxb[rxb];
                for (var ayb in zxb) {
                    var byb = zxb[ayb];
                    var cyb = cfb.dv(byb);
                    var dyb = cyb.vxb();
                    for (var eyb = 0; eyb < dyb.length; eyb++) {
                        var fyb = dyb[eyb];
                        if (!fyb.ueb && fyb.yxb) {
                            if ((xxb.xfb == fyb.xfb) && (eyb < wxb)) continue;
                            if (xxb.afb(fyb, !0)) {
                                if ((xxb.xib) || (fyb.xib)) {
                                    xxb.oh = xxb.gyb;
                                    xxb.ph = xxb.hyb;
                                    xxb.iyb = xxb.jyb;
                                    fyb.oh = fyb.gyb;
                                    fyb.ph = fyb.hyb;
                                    fyb.iyb = fyb.jyb
                                }
                                xxb.ffb(kyb, byb, xxb, fyb);
                                fyb.ffb(kyb, rxb, fyb, xxb);
                                if ((xxb.xib) || (fyb.xib)) {
                                    xxb.lyb();
                                    fyb.lyb();
                                    xxb.web(xxb.oh + xxb.km, xxb.ph + xxb.lm);
                                    fyb.web(fyb.oh + fyb.km, fyb.ph + fyb.lm);
                                    if (xxb.afb(fyb, !0) == !0) {
                                        xxb.oh = xxb.gyb;
                                        xxb.ph = xxb.hyb;
                                        xxb.iyb = xxb.jyb;
                                        fyb.oh = fyb.gyb;
                                        fyb.ph = fyb.hyb;
                                        fyb.iyb = fyb.jyb
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function myb() {
    if (dfb) {
        var nyb;
        if (!dfb.oyb) {
            nyb = pyb
        } else {
            nyb = dfb.qyb
        }
        for (ryb in nyb) {
            syb = nyb[ryb];
            if (syb.xh) {
                if (syb.tyb == -1) {
                    uyb(cu, vyb)
                } else {
                    uyb(xob.dv(syb.tyb), vyb)
                } if (((st.wyb - vyb.left) >= syb.krb) && ((st.wyb - vyb.left) < syb.orb) && ((st.xyb - vyb.top) >= syb.lrb) && ((st.xyb - vyb.top) < syb.prb)) {
                    rq.yyb = ((st.wyb - vyb.left - syb.krb) / syb.zyb) + syb.crb;
                    rq.azb = ((st.xyb - vyb.top - syb.lrb) / syb.bzb) + syb.drb;
                    var udb = rq.yyb;
                    var vdb = rq.azb;
                    var czb = cfb.wib();
                    for (var bfb in czb) {
                        var reb = czb[bfb];
                        var dzb = reb.kxb;
                        if (dzb[ezb] || dzb[fzb] || dzb[gzb] || dzb[hzb] || dzb[izb] || dzb[jzb] || dzb[kzb] || dzb[lzb] || dzb[mzb] || dzb[nzb] || dzb[ozb] || dzb[pzb]) {
                            if (reb.qzb.length > 0) {
                                var rzb = reb.qzb.nfb;
                                for (var mh = rzb.length - 1; mh >= 0; mh--) {
                                    var teb = rzb[mh];
                                    if (!teb.ueb) {
                                        {
                                            if (teb.ofb) teb.pfb();
                                            var zfb = agb.dv(teb.wfb);
                                            if ((udb >= teb.qfb.left) && (udb < teb.qfb.rfb) && (vdb >= teb.qfb.top) && (vdb < teb.qfb.bottom)) {
                                                var szb = !0;
                                                var tzb;
                                                for (tzb = 0; tzb < 3; tzb++) {
                                                    if (st.uzb[tzb]) {
                                                        if (dzb[ezb + tzb]) {
                                                            teb.ffb(ezb + tzb, 0, teb, teb)
                                                        }
                                                        szb = !1
                                                    }
                                                }
                                                for (tzb = 0; tzb < 3; tzb++) {
                                                    if (st.vzb[tzb] == !0) {
                                                        if (dzb[hzb + tzb]) {
                                                            teb.ffb(hzb + tzb, 0, teb, teb)
                                                        }
                                                        szb = !1
                                                    }
                                                }
                                                for (tzb = 0; tzb < 3; tzb++) {
                                                    if (st.wzb[tzb] == !0) {
                                                        if (dzb[kzb + tzb]) {
                                                            teb.ffb(kzb + tzb, 0, teb, teb)
                                                        }
                                                    }
                                                }
                                                if (szb) {
                                                    teb.ffb(nzb,
                                                        0, teb, teb)
                                                }
                                                if (!teb.xzb) {
                                                    teb.ffb(ozb, 0, teb, teb);
                                                    teb.xzb = !0
                                                }
                                            } else {
                                                if (teb.xzb) {
                                                    teb.ffb(pzb, 0, teb, teb);
                                                    teb.xzb = !1
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var tzb;
                    for (tzb = 0; tzb < 3; tzb++) {
                        if (st.uzb[tzb]) {
                            yzb.ffb(zzb + tzb)
                        }
                    }
                    for (tzb = 0; tzb < 3; tzb++) {
                        if (st.vzb[tzb] == !0) {
                            yzb.ffb(aac + tzb)
                        }
                    }
                    for (tzb = 0; tzb < 3; tzb++) {
                        if (st.wzb[tzb] == !0) {
                            yzb.ffb(bac + tzb)
                        }
                    }
                }
            }
        }
    }
}

function cac() {
    var nfb = dfb.mfb.nfb;
    for (var seb = 0; seb < nfb.length; seb++) {
        var teb = nfb[seb];
        if (!teb.ueb && (teb.dac >= 0)) {
            if (!teb.eac) {
                var tz = uz.dv(teb.dac);
                if ((tz != null) && (tz != undefined)) {
                    var fac = tz.gac();
                    if (teb.hac > fac) {
                        if (teb.iac) {
                            teb.hac -= fac
                        }
                    }
                    fac = tz.jac(teb.hac);
                    teb.hac += teb.kac;
                    var lac = tz.jac(teb.hac);
                    for (var hhb = fac; hhb < lac; hhb++) {
                        oz(teb, teb, teb.dac, hhb)
                    }
                }
            }
        }
    }
}

function mac() {
    var nfb = dfb.mfb.nfb;
    for (var seb in nfb) {
        var teb = nfb[seb];
        if (!teb.ueb) {
            for (var nac = 0; nac < oac; nac++) {
                var event = pac | (nac + 1);
                var reb = teb.xfb;
                if (reb.kxb[event]) {
                    var qac = ~~rac(teb, "__alarm__", nac);
                    if (qac >= 0) {
                        qac--;
                        oo(teb, "__alarm__", nac, qac)
                    }
                    if (qac == 0) {
                        teb.ffb(pac | (nac + 1), 0, teb, teb)
                    }
                }
            }
        }
    }
}

function sac() {
    this.tac = [];
    this.tac["__background_visible__"] = new uac("__background_visible__",
        1);
    this.tac["__background_foreground__"] = new uac("__background_foreground__", 1);
    this.tac["__background_index__"] = new uac("__background_index__", 1);
    this.tac["__background_x__"] = new uac("__background_x__", 1);
    this.tac["__background_y__"] = new uac("__background_y__", 1);
    this.tac["__background_width__"] = new uac("__background_width__", 1);
    this.tac["__background_height__"] = new uac("__background_height__", 1);
    this.tac["__background_htiled__"] = new uac("__background_htiled__", 1);
    this.tac["__background_vtiled__"] = new uac("__background_vtiled__",
        1);
    this.tac["__background_xscale__"] = new uac("__background_xscale__", 1);
    this.tac["__background_yscale__"] = new uac("__background_yscale__", 1);
    this.tac["__background_hspeed__"] = new uac("__background_hspeed__", 1);
    this.tac["__background_vspeed__"] = new uac("__background_vspeed__", 1);
    this.tac["__background_blend__"] = new uac("__background_blend__", 1);
    this.tac["__background_alpha__"] = new uac("__background_alpha__", 1)
}
var lgb = 3.14159265,
    vac = !0,
    wac = !1,
    xac = !0,
    dub = 0,
    yac = -1,
    zac = 0,
    abc = 1,
    bbc = 2,
    fub = 0;
cbc = -1, dbc = 0, ebc = 1,
fbc = 2, gbc = 3, hbc = 4, ibc = 5, jbc = 6, bub = 0, dbc = -1, kbc = 0, lbc = 0, mbc = 1, nbc = 2, obc = 3, pbc = 4, qbc = 5, rbc = 6, hub = 0, sbc = -1, tbc = -100, ubc = -200, vbc = -300, wbc = -400;
xbc = -1, ybc = -2, nhb = -3, yeb = -4, zbc = -5, acc = -7, bcc = -6;
var gfb = 0x000,
    hfb = 0x100,
    pac = 0x200,
    ccc = 0x300,
    kyb = 0x400,
    dcc = 0x500,
    ecc = 0x600,
    oxb = 0x700,
    fcc = 0x800,
    gcc = 0x900,
    hcc = 0xA00,
    icc = 0xB00,
    jcc = ccc | 1,
    kcc = ccc | 2,
    lcc = ccc | 3,
    lxb = oxb | 1,
    pxb = oxb | 2,
    mcc = oxb | 3,
    ncc = oxb | 4,
    occ = oxb | 5,
    pcc = oxb | 6,
    qcc = oxb | 7,
    rcc = oxb | 8,
    scc = oxb | 9,
    tcc = oxb | 10,
    ucc = oxb | 11,
    vcc = oxb | 12,
    wcc = oxb | 13,
    xcc = oxb | 14;
ycc = oxb | 15;
zcc = oxb | 16;
adc = oxb | 17;
bdc = oxb | 18;
cdc = oxb | 19;
ddc = oxb | 20;
edc = oxb | 21;
fdc = oxb | 22;
gdc = oxb | 23;
hdc = oxb | 24;
idc = oxb | 25;
jdc = oxb | 26;
kdc = oxb | 27;
ldc = oxb | 28;
mdc = oxb | 29;
ndc = oxb | 60, odc = oxb | 61, ezb = ecc | 1;
gzb = ecc | 2;
fzb = ecc | 3;
hzb = ecc | 4;
jzb = ecc | 5;
izb = ecc | 6;
kzb = ecc | 7;
mzb = ecc | 8;
lzb = ecc | 9;
zzb = ecc | 10;
pdc = ecc | 11;
qdc = ecc | 12;
aac = ecc | 13;
rdc = ecc | 14;
sdc = ecc | 15;
bac = ecc | 16;
tdc = ecc | 17;
udc = ecc | 18;
nzb = ecc | 19;
ozb = ecc | 20;
pzb = ecc | 21;
vdc = pac | 1;
wdc = pac | 2;
xdc = pac | 3;
ydc = pac | 4;
zdc = pac | 5;
aec = pac | 6;
bec = pac | 7;
cec = pac | 8;
dec = pac | 9;
eec = pac | 10;
fec = pac | 11;
gec = pac | 12;
hec = 0;
iec = 1;
jec = 2;
kec = 3;
lec = 4;
mec = 5;
nec = 6;
oec = 7;
pec = 8;
qec = 9;
rec = 10;
sec = 11;
tec = 0;
uec = 1;
vec = 2;
wec = 3;
xec = 4;
yec = 5;
zec = 6;
afc = 7;
bfc = 8;
cfc = 9;
dfc = 10;
efc = 11;
ffc = 16;
gfc = 17;
hfc = 18;
ifc = 19;
jfc = 21;
kfc = 22;
lfc = 23;
mfc = 24;
nfc = 25;
ofc = 26;
pfc = 27;
qfc = 28;
rfc = 31;
sfc = 32;
tfc = 33;
ufc = 34;
vfc = 36;
wfc = 37;
xfc = 38;
yfc = 39;
zfc = 40;
agc = 41;
bgc = 42;
cgc = 43;
dgc = 50;
egc = 51;
fgc = 52;
ggc = 53;
hgc = 54;
igc = 55;
jgc = 56;
kgc = 57;
lgc = 58;
mgc = 60;
ngc = 61;
ogc = 0, pgc = 1, qgc = 2, rgc = 0, sgc = 1, tgc = 2, ugc = 3, vgc = 4, wgc = 5, xgc = 6, ygc = 7, zgc = 8, ahc = 9, bhc = 30, chc = 40, dhc = 50, ehc = 10, fhc = 11,
ghc = 12, hhc = 13, ihc = 14, jhc = 15, khc = 16, lhc = 17, mhc = 18, nhc = 19, ohc = 20, phc = 21, qhc = 22, rhc = 23, shc = 24, thc = 25, uhc = 60;
vhc = 61;
whc = gcc | 0, xhc = gcc | 1, yhc = gcc | 1, zhc = gcc | 8, aic = gcc | 9, bic = gcc | 13, cic = gcc | 16, dic = gcc | 17, eic = gcc | 18, fic = gcc | 19, gic = gcc | 27, hic = gcc | 32, iic = gcc | 33, jic = gcc | 34, kic = gcc | 35, lic = gcc | 36, mic = gcc | 37, nic = gcc | 38, oic = gcc | 39, pic = gcc | 40, qic = gcc | 45, ric = gcc | 46, sic = gcc | 48, tic = gcc | 49, uic = gcc | 50, vic = gcc | 51, wic = gcc | 52, xic = gcc | 53, yic = gcc | 54, zic = gcc | 55, ajc = gcc | 56, bjc = gcc | 57, cjc = gcc | 65, djc = gcc | 66, ejc = gcc | 67, fjc = gcc | 68,
gjc = gcc | 69, hjc = gcc | 70, ijc = gcc | 71, jjc = gcc | 72, kjc = gcc | 73, ljc = gcc | 74, mjc = gcc | 75, njc = gcc | 76, ojc = gcc | 77, pjc = gcc | 78, qjc = gcc | 79, rjc = gcc | 80, sjc = gcc | 81, tjc = gcc | 82, ujc = gcc | 83, vjc = gcc | 84, wjc = gcc | 85, xjc = gcc | 86, yjc = gcc | 87, zjc = gcc | 88, akc = gcc | 89, bkc = gcc | 90, ckc = gcc | 112, dkc = gcc | 113, ekc = gcc | 114, fkc = gcc | 115, gkc = gcc | 116, hkc = gcc | 117, ikc = gcc | 118, jkc = gcc | 119, kkc = gcc | 120, lkc = gcc | 121, mkc = gcc | 122, nkc = gcc | 123, okc = gcc | 145, pkc = gcc | 186, qkc = gcc | 187, rkc = gcc | 188, skc = gcc | 189, tkc = gcc | 190, ukc = gcc | 191, vkc = gcc | 192, wkc = gcc | 219, xkc = gcc | 220,
ykc = gcc | 221, zkc = gcc | 222, alc = gcc | 223, blc = gcc | 144, clc = gcc | 96, dlc = gcc | 97, elc = gcc | 98, flc = gcc | 99, glc = gcc | 100, hlc = gcc | 101, ilc = gcc | 102, jlc = gcc | 103, klc = gcc | 104, llc = gcc | 105, mlc = gcc | 106, nlc = gcc | 107, olc = gcc | 109, plc = gcc | 110, qlc = gcc | 111, rlc = dcc | 0, slc = dcc | 1, tlc = dcc | 1, ulc = dcc | 8, vlc = dcc | 9, wlc = dcc | 13, xlc = dcc | 16, ylc = dcc | 17, zlc = dcc | 18, amc = dcc | 19, bmc = dcc | 27, cmc = dcc | 32, dmc = dcc | 33, emc = dcc | 34, fmc = dcc | 35, gmc = dcc | 36, hmc = dcc | 37, imc = dcc | 38, jmc = dcc | 39, kmc = dcc | 40, lmc = dcc | 45, mmc = dcc | 46, nmc = dcc | 48, omc = dcc | 49, pmc = dcc | 50, qmc = dcc | 51,
rmc = dcc | 52, smc = dcc | 53, tmc = dcc | 54, umc = dcc | 55, vmc = dcc | 56, wmc = dcc | 57, xmc = dcc | 65, ymc = dcc | 66, zmc = dcc | 67, anc = dcc | 68, bnc = dcc | 69, cnc = dcc | 70, dnc = dcc | 71, enc = dcc | 72, fnc = dcc | 73, gnc = dcc | 74, hnc = dcc | 75, inc = dcc | 76, jnc = dcc | 77, knc = dcc | 78, lnc = dcc | 79, mnc = dcc | 80, nnc = dcc | 81, onc = dcc | 82, pnc = dcc | 83, qnc = dcc | 84, rnc = dcc | 85, snc = dcc | 86, tnc = dcc | 87, unc = dcc | 88, vnc = dcc | 89, wnc = dcc | 90, xnc = dcc | 112, ync = dcc | 113, znc = dcc | 114, aoc = dcc | 115, boc = dcc | 116, coc = dcc | 117, doc = dcc | 118, eoc = dcc | 119, foc = dcc | 120, goc = dcc | 121, hoc = dcc | 122, ioc = dcc | 123, joc = dcc | 145,
koc = dcc | 186, loc = dcc | 187, moc = dcc | 188, noc = dcc | 189, ooc = dcc | 190, poc = dcc | 191, qoc = dcc | 192, roc = dcc | 219, soc = dcc | 220, toc = dcc | 221, uoc = dcc | 222, voc = dcc | 223, woc = dcc | 144, xoc = dcc | 96, yoc = dcc | 97, zoc = dcc | 98, apc = dcc | 99, bpc = dcc | 100, cpc = dcc | 101, dpc = dcc | 102, epc = dcc | 103, fpc = dcc | 104, gpc = dcc | 105, hpc = dcc | 106, ipc = dcc | 107, jpc = dcc | 109, kpc = dcc | 110, lpc = dcc | 111, mpc = hcc | 0, npc = hcc | 1, opc = hcc | 1;
ppc = hcc | 8, qpc = hcc | 9, rpc = hcc | 13, spc = hcc | 16, tpc = hcc | 17, upc = hcc | 18, vpc = hcc | 19, wpc = hcc | 27, xpc = hcc | 32, ypc = hcc | 33, zpc = hcc | 34, aqc = hcc | 35, bqc = hcc | 36,
cqc = hcc | 37, dqc = hcc | 38, eqc = hcc | 39, fqc = hcc | 40, gqc = hcc | 45, hqc = hcc | 46, iqc = hcc | 48, jqc = hcc | 49, kqc = hcc | 50, lqc = hcc | 51, mqc = hcc | 52, nqc = hcc | 53, oqc = hcc | 54, pqc = hcc | 55, qqc = hcc | 56, rqc = hcc | 57, sqc = hcc | 65, tqc = hcc | 66, uqc = hcc | 67, vqc = hcc | 68, wqc = hcc | 69, xqc = hcc | 70, yqc = hcc | 71, zqc = hcc | 72, brc = hcc | 73, crc = hcc | 74, drc = hcc | 75, erc = hcc | 76, frc = hcc | 77, grc = hcc | 78, hrc = hcc | 79, irc = hcc | 80, jrc = hcc | 81, krc = hcc | 82, lrc = hcc | 83, mrc = hcc | 84, nrc = hcc | 85, orc = hcc | 86, prc = hcc | 87, qrc = hcc | 88, rrc = hcc | 89, trc = hcc | 90, urc = hcc | 112, vrc = hcc | 113, wrc = hcc | 114, xrc = hcc | 115,
yrc = hcc | 116, zrc = hcc | 117, asc = hcc | 118, bsc = hcc | 119, csc = hcc | 120, dsc = hcc | 121, esc = hcc | 122, fsc = hcc | 123, gsc = hcc | 145, hsc = hcc | 186, isc = hcc | 187, jsc = hcc | 188, ksc = hcc | 189, lsc = hcc | 190, msc = hcc | 191, nsc = hcc | 192, osc = hcc | 219, psc = hcc | 220, qsc = hcc | 221, rsc = hcc | 222, ssc = hcc | 223, tsc = hcc | 144, usc = hcc | 96, vsc = hcc | 97, wsc = hcc | 98, xsc = hcc | 99, ysc = hcc | 100, zsc = hcc | 101, atc = hcc | 102, btc = hcc | 103, ctc = hcc | 104, dtc = hcc | 105, etc = hcc | 106, ftc = hcc | 107, gtc = hcc | 109, htc = hcc | 110, itc = hcc | 111;
var jtc = 0;
var ktc = 1;
var ltc = 2;
var oac = 12;
var mtc = 8,
    ntc = 8,
    otc = 1,
    ptc = 10;
var ldb = 0x000000,
    qtc = 0x000080,
    rtc = 0x008000,
    stc = 0x008080,
    ttc = 0x800000,
    utc = 0x800080,
    vtc = 0x808000,
    wtc = 0x808080,
    xtc = 0xC0C0C0,
    ytc = 0x0000FF,
    ztc = 0x00FF00,
    auc = 0x00FFFF,
    buc = 0xFF0000,
    cuc = 0xFF00FF,
    duc = 0xFFFF00,
    euc = 0xC0C0C0,
    fuc = 0x808080,
    guc = 0xFFFFFF,
    huc = 0xC0DCC0,
    iuc = 0xF0CAA6,
    juc = 0xF0FBFF,
    kuc = 0xA4A0A0;
var global = cfb = yzb = st = mnb = rq = luc = muc = snb = bw = sxb = enb = uz = nuc = dfb = ouc = pyb = puc = quc = ruc = suc = tuc = uuc = xu = vuc = sib = gv = wuc = xob = xuc = yuc = uy = vy = zuc = wy = avc = bvc = cvc = dvc = evc = fvc = gvc = hvc = vyb = zqb = yqb = arb = brb = ivc = jvc = kvc = lvc = mvc = nvc = ovc = pvc = qvc = rvc = svc = tvc = null,
    uvc = vvc = !0,
    wvc, xvc = yvc = zvc = awc = bwc = uw = vqb = cwc = dwc = ewc = fwc = !1,
    gwc = onb = hwc = iwc = jwc = kwc = lwc = mwc = nwc = owc = pwc = qwc = rwc = swc = twc = gbb = cbb = bbb = dbb = fbb = uwc = vwc = wwc = xwc = ywc = zwc = axc = bxc = cxc = dxc = exc = fxc = gxc = hxc = ixc = jxc = kxc = lxc = mxc = nxc = 0;
oxc = pxc = qxc = rxc = sxc = txc = uxc = vxc = wxc = xxc = yxc = zxc = ayc = byc = cyc = dyc = eyc = fyc = gyc = hyc = iyc = jyc = kyc = lyc = kwb = myc = nyc = oyc = pyc = qyc = ryc = syc = tyc = uyc = 0;
var hob = 'canvas';

function vyc() {
    var zw = !1;
    if ((luc.wm) && (luc.wm.xm) && (luc.wm.xm == !0)) {
        zw = !0
    }
    if (!zw) {
        dgb = sfb;
        un = wyc;
        rac = xyc;
        oo = yyc;
        fo = zyc;
        tn = azc
    } else {
        dgb = bgb;
        un = bzc;
        rac = czc;
        oo = dzc;
        fo = ezc;
        tn = fzc
    }
}

function gzc() {
    hzc();
    var izc = new Audio();
    izc.controls = !1;
    zvc = !! izc.canPlayType && "" != izc.canPlayType('audio/mpeg');
    awc = !! izc.canPlayType && "" != izc.canPlayType('audio/ogg; codecs="vorbis"');
    izc = null;
    if (zvc) zw("Browser CAN play MP3");
    if (awc) zw("Browser CAN play OGG");
    vyc();
    tvc = gwc = 0;
    dfb = null;
    xvc = !1;
    onb = -1;
    arb = new jzc();
    ouc = new jzc();
    brb = new jzc();
    zqb = new bpb();
    yqb = new bpb();
    ouc.xh = !0;
    pyb = [];
    pyb[0] = ouc;
    quc = [];
    ruc = [];
    suc = [];
    tuc = new kzc(5);
    uuc = new kzc(5);
    xu = new kzc(5);
    vuc = new kzc(5);
    sib = new kzc(5);
    gv = new kzc(5);
    xob = new kzc(5);
    wuc = new kzc(5);
    xuc = new oob();
    hvc = new kzc(5);
    vyb = new bpb();
    jvc = new lzc();
    jvc.mzc = "DUMMY INSTANCE";
    hob = "canvas";
    gvc = "html5game/";
    if (typeof (g_GameSmileHTML5Dir) != "undefined") {
        gvc = g_GameSmileHTML5Dir;
    }
    yuc = [];
    uy = [];
    vy = [];
    zuc = "Hiscore Table";
    wy = "<Nobody>";
    avc = "Press <ESC> to Continue";
    zwc = 0x000000;
    dxc = -1;
    axc = 0xffff00;
    bxc = 0xffffff;
    bvc = "verdana";
    cxc = 16;
    cvc = "";
    uvc = !0;
    ty();
    xob.nzc();
    rwc = 0.0000001;
    vqb = vvc = !1;
    rvc = exc = null;
    fxc = gxc = -1;
    twc = 1.0;
    hwc = 0;
    iwc = -1;
    jwc = 0;
    kwc = 0;
    ozc = !0;
    ywc = 10000000;
    swc = 100000;
    gbb = 1.0;
    bbb = 0x00000000;
    cbb = 0x000000;
    dbb = ebb(cbb);
    fbb = iab(cbb, gbb);
    kwb = ebb(0x000000);
    myc = ebb(0xffffff);
    nyc = ebb(0x0000ff);
    oyc = ebb(0x00ff00);
    pyc = ebb(0xff0000);
    qyc = ebb(0xff000000);
    ryc = ebb(0xffffffff);
    syc = ebb(0xff0000ff);
    tyc = ebb(0xff00ff00);
    uyc = ebb(0xffff0000);
    qxc = 0;
    rxc = -1;
    sxc = -2;
    txc = -3;
    uxc = -4;
    vxc = -6;
    wxc = -7;
    xxc = -8;
    yxc = -9;
    zxc = -10;
    ayc = -11;
    byc = -12;
    cyc = -13;
    dyc = -14;
    eyc = -15;
    fyc = -16;
    gyc = -17;
    hyc = -18;
    iyc = -19;
    jyc = -20;
    kyc = -21;
    lyc = -22;
    oxc = -1;
    pxc = 0;
    pzc();
    global.tac = [];
    if (luc.wm && luc.wm.cn == !1) {
        cu.style.cursor = "none"
    }
    dwc = !1;
    if (luc.wm && luc.wm.mn == !0) {
        dwc = !0
    }
    if (typeof qzc == 'function') {
        qzc()
    }
}

function rzc(szc) {
    return szc * (Math.PI / 180.0)
}

function tzc(ux, vx) {
    if (ux == 0) return 0;
    var qu = ((ux * 0x1000000) % (vx * 0x1000000));
    qu = qu / 0x1000000;
    return qu
}

function vhb(ux) {
    return ux * ux
}

function ebb(cab) {
    var mz = "rgba(" + (cab & 0xff).toString() + "," + ((cab >> 8) & 0xff).toString() + "," + ((cab >> 16) & 0xff).toString() + "," + ((cab >> 24) & 0xff).toString() + ")";
    return mz
}

function iab(cab, dab) {
    var mz = "rgba(" + ((cab >> 16) & 0xff).toString() + "," + ((cab >> 8) & 0xff).toString() + "," + ((cab >> 0) & 0xff).toString() + "," + ((dab * 255.0) & 0xff).toString() + ")";
    return mz
}

function uzc(szc) {
    return lgb * szc / 180.0
}

function jab(cab) {
    return (((cab & 0xff) << 16) | (cab & 0xff00) | ((cab & 0xff0000) >> 16))
}

function sy(vzc) {
    var wzc = iub();
    while (vzc > 0) {
        var xzc = iub();
        vzc -= (xzc - wzc);
        wzc = xzc
    }
}

function xeb(pz, qeb, yzc, zzc) {
    var nac = xeb.arguments;
    var xgb = xeb.arguments.length;
    var aad = nac[xgb - 1];
    qeb = Math.floor(qeb);
    if (qeb == nhb) {
        var nfb = yzb.wib();
        for (var seb = 0; seb < nfb.length; seb++) {
            var teb = nfb[seb];
            if ((yzc) && (teb == pz)) continue;
            if (teb.bad) continue;
            var iz = aad(teb);
            if (iz) return iz
        }
    } else if (qeb < 100000) {
        var reb = cfb.dv(qeb);
        if (reb === null) {
            return zzc
        }
        var nfb = reb.vxb();
        for (var seb = 0; seb < nfb.length; seb++) {
            var teb = nfb[seb];
            if ((yzc) && (pz == teb)) continue;
            if (teb.bad) continue;
            var iz = aad(teb);
            if (iz) return iz
        }
    } else {
        var teb = yzb.cad(qeb);
        if ((yzc) && (pz == teb)) {
            return zzc
        }
        if (teb.bad) {
            return zzc
        }
        return aad(teb)
    }
    return zzc
}

function dad(pz, qeb, yzc, zzc) {
    var nac = dad.arguments;
    var xgb = dad.arguments.length;
    var aad = nac[xgb - 1];
    var shb = 10000000000;
    var am = -1;
    qeb = Math.floor(qeb);
    if (qeb == nhb) {
        var nfb = yzb.wib();
        for (var seb = 0; seb < nfb.length; seb++) {
            var teb = nfb[seb];
            if ((yzc) && (teb == pz)) continue;
            if (teb.bad) continue;
            var nw = aad(teb);
            if (nw < shb) {
                shb = nw
            }
        }
        if (shb != 10000000000) return shb
    } else if (qeb < 100000) {
        var reb = cfb.dv(qeb);
        if (reb === null) {
            return zzc
        }
        var nfb = reb.vxb();
        for (var seb = 0; seb < nfb.length; seb++) {
            var teb = nfb[seb];
            if ((yzc) && (pz == teb)) continue;
            if (teb.bad) continue;
            var nw = aad(teb);
            if (nw < shb) {
                shb = nw
            }
        }
        if (shb != 10000000000) return shb
    } else {
        var teb = yzb.cad(qeb);
        if ((yzc) && (pz == teb)) {
            return zzc
        }
        if (teb.bad) {
            return zzc
        }
        return aad(teb)
    }
    return zzc
}
var ead = {
    fad: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.gad = this.searchString(this.dataOS) || "an unknown OS";
        this.had = this.iad()
    },
    iad: function () {
        if (navigator.appVersion.indexOf("CPU OS 5_") != -1) {
            return 5.0
        } else if (navigator.appVersion.indexOf("CPU OS 4_") != -1) {
            return 4.0
        } else if (navigator.appVersion.indexOf("CPU OS 3_") != -1) {
            return 3.0
        } else if (navigator.appVersion.indexOf("Android 4") != -1) {
            return 4.0
        } else if (navigator.appVersion.indexOf("Android 3") != -1) {
            return 3.0
        } else if (navigator.appVersion.indexOf("Android 2") != -1) {
            return 2.0
        } else {
            return sbc
        }
    },
    searchString: function (data) {
        for (var mh = 0; mh < data.length; mh++) {
            var jad = data[mh].op;
            var kad = data[mh].prop;
            this.versionSearchString = data[mh].versionSearch || data[mh].identity;
            if (jad) {
                if (jad.indexOf(data[mh].lad) != -1) {
                    return data[mh].identity
                }
            } else if (kad) {
                return data[mh].identity
            }
        }
    },
    searchVersion: function (jad) {
        var xl = jad.indexOf(this.versionSearchString);
        if (xl == -1) return;
        return parseFloat(jad.substring(xl + this.versionSearchString.length + 1));
    },
    dataBrowser: [{
        op: navigator.userAgent,
        lad: "Chrome",
        identity: "Chrome"
    }, {
        op: navigator.userAgent,
        lad: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        op: navigator.vendor,
        lad: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera"
    }, {
        op: navigator.vendor,
        lad: "iCab",
        identity: "iCab"
    }, {
        op: navigator.vendor,
        lad: "KDE",
        identity: "Konqueror"
    }, {
        op: navigator.userAgent,
        lad: "Firefox",
        identity: "Firefox"
    }, {
        op: navigator.userAgent,
        lad: "IceWeasel",
        identity: "IceWeasel"
    }, {
        op: navigator.vendor,
        lad: "Camino",
        identity: "Camino"
    }, {
        op: navigator.userAgent,
        lad: "Netscape",
        identity: "Netscape"
    }, {
        op: navigator.userAgent,
        lad: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        op: navigator.userAgent,
        lad: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        op: navigator.userAgent,
        lad: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        op: navigator.platform,
        lad: "Win",
        identity: "Windows"
    }, {
        op: navigator.platform,
        lad: "Mac",
        identity: "Mac"
    }, {
        op: navigator.userAgent,
        lad: "iPhone",
        identity: "iPhone"
    }, {
        op: navigator.userAgent,
        lad: "iPod",
        identity: "iPhone"
    }, {
        op: navigator.userAgent,
        lad: "iPad",
        identity: "iPad"
    }, {
        op: navigator.userAgent,
        lad: "Android",
        identity: "Android"
    }, {
        op: navigator.platform,
        lad: "Linux",
        identity: "Linux"
    }]
};

function hzc() {
    ead.fad();
    if (ead.gad == "Windows") {
        bub = kbc
    } else if (ead.gad == "Mac") {
        bub = mbc
    } else if (ead.gad == "iPhone") {
        bub = obc
    } else if (ead.gad == "iPad") {
        bub = obc
    } else if (ead.gad == "Android") {
        bub = pbc
    } else if (ead.gad == "Linux") {
        bub = rbc
    } else {
        bub = dbc;
    }
    hub = ead.had;
    fub = dbc;
    dub = yac;
    if (ead.browser == "Explorer") {
        zw("Internet Explorer detected");
        fub = ebc
    } else if (ead.browser == "Firefox") {
        zw("Firefox detected");
        fub = fbc
    } else if (ead.browser == "Chrome") {
        zw("Chrome detected");
        fub = gbc
    } else if (ead.browser == "Safari") {
        if (bub == obc) {
            fub = ibc;
            dub = zac;
            if (ead.gad == "iPad") dub = bbc;
            zw("Safari mobile detected")
        } else {
            zw("Safari detected");
            fub = hbc
        }
    } else if (ead.browser == "Opera") {
        zw("BrowserDetect: " + ead.gad);
        zw("Opera detected");
        fub = jbc
    } else {
        zw("Unknown Browser - Please report these strings");
        zw("----------------------------------------------");
        if (navigator.userAgent) zw("userAgent: " + navigator.userAgent);
        if (navigator.vendor) zw("vendor: " + navigator.vendor);
        zw("----------------------------------------------")
    }
}

function pzc() {
    try {
        if ('localStorage' in window && window['localStorage'] !== null) {
            wvc = !0
        }
    } catch (wtb) {
        wvc = !1
    }
    return wvc
}
var mad = 0;
var nad = 0;
var oad = 0;
var pad = 0;
var qad = null;
var rad = null;

function sad() {
    global = new sac();
    rq = new tad();
    st = new uad();
    vad(cu);
    yzb = new wad();
    cfb = new xad();
    mnb = new yad();
    agb = new zad();
    bw = new abd();
    snb = new bbd();
    qx = new cbd();
    sxb = [];
    enb = new dbd();
    uz = new ebd();
    nuc = new fbd();
    gzc()
}

function gbd(hbd) {
    switch (hbd) {
    case 1:
        return "MEDIA_ERR_ABORTED";
    case 2:
        return "MEDIA_ERR_NETWORK";
    case 3:
        return "MEDIA_ERR_DECODE";
    case 4:
        return "MEDIA_ERR_SRC_NOT_SUPPORTED"
    }
    return "Unknown Error"
}

function ibd(hbd) {
    switch (hbd) {
    case 0:
        return "NETWORK_EMPTY";
    case 1:
        return "NETWORK_IDLE";
    case 2:
        return "NETWORK_LOADING";
    case 3:
        return "NETWORK_NO_SOURCE"
    }
    return "Unknown Error"
}

function jbd(kbd) {
    zw("ImageLoaded: " + this.src);
    qad[this.lbd] = null;
    nad++
}

function mbd(kbd) {
    zw("ImageError: " + this.src);
    qad[this.lbd] = null;
    nad++
}

function nbd(kbd) {
    pad++;
    zw("ExtensionLoaded: ")
}

function obd(kbd) {
    pad++;
    zw("ExtensionError: ")
}

function pbd(qbd) {
    qbd.removeEventListener('canplaythrough', rbd, !1);
    qbd.removeEventListener('error', sbd, !1);
    qbd.removeEventListener("loadstart", tbd, !1);
    qbd.removeEventListener("suspend", ubd, !1);
    qbd.removeEventListener("stalled", vbd, !1);
    qbd.removeEventListener("stall", vbd, !1)
}

function rbd(kbd) {
    this.wbd = !0;
    if (qad[this.lbd] != null) {
        qad[this.lbd] = null;
        nad++
    }
    pbd(this);
    zw("SoundLoaded: " + this.lbd)
}

function sbd(kbd) {
    zw("SoundError: " + this.lbd + "   NetworkError: " + gbd(this.error["code"]));
    this.wbd = !1;
    if (qad[this.lbd] != null) {
        qad[this.lbd] = null;
        nad++
    }
    pbd(this)
}

function tbd(kbd) {
    this.xbd = !0
}

function ubd(kbd) {
    zw("SoundSuspended: " + this.lbd);
    this.wbd = !0;
    if (qad[this.lbd] != null) {
        qad[this.lbd] = null;
        nad++
    }
    pbd(this)
}

function vbd(kbd) {}

function ybd(zbd) {
    zw("Loading: " + zbd);
    var xl = acd(zbd);
    var nob = new oob();
    nob.oh = 0;
    nob.ph = 0;
    nob.qh = 63;
    nob.rh = 63;
    nob.om = -32;
    nob.pm = -32;
    nob.qm = 63;
    nob.rm = 63;
    nob.sm = nob.qh;
    nob.tm = nob.rh;
    nob.um = xl;
    nob.rob = sob[xl];
    nob.nqb = [];
    nob.pqb = 32;
    nob.oqb = 0;
    var bcd = quc.length;
    quc[bcd] = nob;
    return bcd
}

function ccd(dcd) {
    zw("Loading: " + gvc + dcd);
    var wtb = window.document.createElement('script');
    wtb.setAttribute('src', gvc + dcd);
    wtb.setAttribute('type', "text/javascript");
    wtb.onload = nbd;
    wtb.onerror = obd;
    window.document.body.appendChild(wtb);
    oad++
}

function ecd(fcd) {
    if (fcd.uf != undefined) {
        for (var mh = 0; mh < fcd.uf.length; mh++) {
            var gcd = fcd.uf[mh];
            if (gcd.hcd) {
                for (var icd = 0; icd < gcd.hcd.length; icd++) {
                    ccd(gcd.hcd[icd])
                }
            }
        }
    }
}

function jcd(fcd) {
    qad = [];
    oad = 0;
    pad = 0;
    ecd(fcd)
}

function kcd(fcd) {
    if (fcd.lcd) document.title = fcd.lcd;
    rad = document.getElementById('GM4HTML5_loadingscreen');
    if (mcd == "") {
        jcd(fcd);
        mcd = ncd
    } else {
        try {
            mcd = eval(mcd)
        } catch (wtb) {
            mcd = ncd
        }
    }
    nad = 0;
    for (xl = 0; xl < fcd.vm.length; xl++) {
        mad++;
        zw("Loading: " + gvc + fcd.vm[xl]);
        var xl = acd(gvc + fcd.vm[xl]);
        sob[xl].onload = jbd;
        sob[xl].onerror = mbd;
        sob[xl].lbd = fcd.vm[xl];
        qad[sob[xl].lbd] = sob[qu]
    }
    for (var mh = 2; mh < 16; mh++) {
        mad++;
        var ocd = ybd(gvc + "particles/IDR_GIF" + mh + ".png");
        var qu = quc[ocd].um;
        sob[qu].onload = jbd;
        sob[qu].onerror = mbd;
        sob[qu].lbd = "particles/IDR_GIF" + mh + ".png";
        qad[sob[qu].lbd] = sob[qu]
    }
    for (xl = 0; xl < fcd.vf.length; xl++) {
        if (fcd.vf[xl] != null) {
            mad++;
            zw("Loading: " + gvc + fcd.vf[xl].zf);
            var am = pcd(gvc + fcd.vf[xl].zf, fcd.vf[xl].wf, fcd.vf[xl].yf, rbd, sbd);
            if (am >= 0 && qad[qcd[am].lbd]) {
                qad[qcd[am].lbd] = qcd[am]
            } else {
                mad--
            }
        }
    }
}

function rcd() {
    for (var mh in qad) {
        var scd = qad[mh];
        if (scd) {
            if ((scd.tcd) && (scd.readyState)) {
                if ((scd.tcd == 1 || scd.tcd == 3) && (scd.xbd) && (scd.readyState != 4)) {
                    if (scd.wbd != !0) {
                        scd.wbd = !1;
                        nad++;
                        qad[mh] = null;
                        pbd(scd);
                        zw("SoundError: " + scd.lbd + "   NetworkState: " + ibd(scd.tcd))
                    }
                }
            }
        }
    }
}

function ucd(vcd,
    reb) {
    if (reb.wcd) return;
    if (reb.xcd != null) {
        ucd(reb.xcd.ycd, reb.xcd)
    }
    for (var zcd in reb.add) {
        if (sxb[zcd]) {
            if (sxb[zcd][vcd]) {
                continue
            }
        }
        var bdd = !1;
        var cdd = reb;
        while (cdd != null) {
            var am = cdd.ycd;
            var ddd = cfb.dv(zcd);
            while (ddd != null) {
                var edd = ddd.ycd;
                if (sxb[edd] && sxb[edd][am]) {
                    bdd = !0;
                    break
                }
                ddd = ddd.xcd
            }
            cdd = cdd.xcd
        }
        if (!bdd) {
            if (!sxb[vcd]) {
                sxb[vcd] = []
            }
            sxb[vcd][zcd] = zcd
        }
    }
    reb.wcd = !0
}

function fdd() {
    var nfb = cfb.wib();
    for (var vcd in nfb) {
        var reb = nfb[vcd];
        if (reb.xcd != null) {
            ucd(reb.xcd.ycd, reb.xcd)
        }
        ucd(vcd, reb)
    }
}

function gdd(fcd) {
    var xl,
        hdd;
    swc = 1000000;
    rq.idd = fcd.ym;
    ivc = new jdd(fcd.uh);
    var am = 0;
    for (xl in fcd.vh) {
        var kdd = fcd.vh[xl];
        if (kdd != null) {
            var xfb = ldd(am, kdd);
            cfb.yu(xfb)
        }
        am++
    }
    cfb.mdd();
    fdd();
    for (xl in fcd.tl) {
        var ndd = fcd.tl[xl];
        if (ndd != null) {
            hdd = new odd();
            hdd.pdd(ndd);
            mnb.yu(hdd)
        } else {
            gwc++;
            mnb.yu(null)
        }
    }
    mnb.qdd(fcd.mm);
    for (var mh = 0; mh < fcd.mm.length; mh++) {
        hdd = mnb.pnb(mh);
        hdd.lnb = mh
    }
    rq.rdd = mnb.pnb(0).am;
    rq.sdd = mnb.pnb(mnb.tdd.length - 1).am;
    udd(fcd.nm);
    for (xl = 0; xl < fcd.cg.length; xl++) {
        if (fcd.cg[xl] == null) {
            agb.apb(null)
        } else {
            var zfb = vdd(fcd.cg[xl]);
            agb.apb(zfb)
        }
    }
    for (xl = 0; xl < fcd.lg.length; xl++) {
        var wdd = bw.xdd(fcd.lg[xl]);
        var opb = bw.cw(wdd);
        if (opb != null) opb.epb = ydd
    }
    for (xl = 0; xl < fcd.ah.length; xl++) {
        qx.yu(fcd.ah[xl])
    }
    for (xl = 0; xl < fcd.ng.length; xl++) {
        var dnb = zdd(fcd.ng[xl]);
        enb.yu(dnb)
    }
    for (xl = 0; xl < fcd.vf.length; xl++) {
        snb.yu(fcd.vf[xl])
    }
    if (fcd.th != undefined) {
        for (xl = 0; xl < fcd.th.length; xl++) {
            uz.yu(fcd.th[xl])
        }
    }
    if (typeof aed == 'function') {
        svc = new aed()
    }
    if (typeof bed == 'function') {
        bed()
    }
    if (fcd.uf != undefined) {
        for (var mh = 0; mh < fcd.uf.length; mh++) {
            var gcd = fcd.uf[mh];
            try {
                ced = eval(gcd.fad);
                if (ced) ced()
            } catch (wrb) {
                jt("Error calling extension initialisation function: " + gcd.fad)
            }
        }
    }
}
var ded = 0;
var eed = 1;
var fed = 2;
var ged = 3;
var hed = 4;
var ied = 5;
var jed = 6;
var ked = 7;
var led = 8;
var med = 9;
var ned = 10;
var oed = 11;
var ped = 12;
var qed = 13;
var red = 14;
var sed = 15;

function ted(ued) {
    this.wab = new Float32Array(16);
    if (ted.arguments.length > 0) {
        for (var mh = 0; mh < 16; mh++) {
            this.wab[mh] = ued.wab[mh]
        }
    } else {
        this.ved()
    }
};;
ted.prototype.ved = function (wed) {
    this.wab[1] = this.wab[2] = this.wab[3] = this.wab[4] = this.wab[6] = this.wab[7] = this.wab[8] = this.wab[9] = this.wab[11] = this.wab[12] = this.wab[13] = this.wab[14] = 0.0;
    this.wab[0] = this.wab[5] = this.wab[10] = this.wab[15] = 1.0
};
ted.prototype.xed = function (yed, zed, afd) {
    var bfd = new cfd(afd);
    var dfd = new cfd();
    var efd = zed.ffd(yed);
    efd.gfd();
    bfd.gfd();
    dfd.hfd(bfd, efd);
    dfd.gfd();
    bfd.hfd(efd, dfd);
    bfd.gfd();
    var ifd = yed.jfd(dfd);
    var kfd = yed.jfd(bfd);
    var lfd = yed.jfd(efd);
    this.wab[ded] = dfd.ifd;
    this.wab[eed] = bfd.ifd;
    this.wab[fed] = efd.ifd;
    this.wab[ged] = 0.0;
    this.wab[hed] = dfd.kfd;
    this.wab[ied] = bfd.kfd;
    this.wab[jed] = efd.kfd;
    this.wab[ked] = 0.0;
    this.wab[led] = dfd.lfd;
    this.wab[med] = bfd.lfd;
    this.wab[ned] = efd.lfd;
    this.wab[oed] = 0.0;
    this.wab[ped] = -ifd;
    this.wab[qed] = -kfd;
    this.wab[red] = -lfd;
    this.wab[sed] = 1
};
ted.prototype.mfd = function (lu, mu, nfd, ofd) {
    this.wab[ded] = 2.0 / lu;
    this.wab[eed] = this.wab[fed] = 0.0;
    this.wab[ged] = 0;
    this.wab[ied] = 2.0 / mu;
    this.wab[hed] = this.wab[jed] = 0.0;
    this.wab[ked] = 0;
    this.wab[led] = this.wab[med] = 0.0;
    this.wab[ned] = 1.0 / (ofd - nfd);
    this.wab[oed] = 0;
    this.wab[ped] = this.wab[qed] = 0.0;
    this.wab[red] = nfd / (nfd - ofd);
    this.wab[sed] = 1.0
};

function oob() {
    this.oh = 0;
    this.ph = 0;
    this.qh = 0;
    this.rh = 0;
    this.om = 0;
    this.pm = 0;
    this.qm = 0;
    this.rm = 0;
    this.sm = 0;
    this.tm = 0;
    this.um = 0;
    this.epb = ydd
}

function ydd(spb) {
    this.oh = spb.oh;
    this.ph = spb.ph;
    this.qh = spb.qh;
    this.rh = spb.rh;
    this.om = spb.om;
    this.pm = spb.pm;
    this.qm = spb.qm;
    this.rm = spb.rm;
    this.sm = spb.sm;
    this.tm = spb.tm;
    this.um = spb.um
};

function zz(mx) {
    ex("clipboard_set_text()")
};
var pfd = !0;

function cfd(qfd, rfd, sfd) {
    if (cfd.arguments.length > 0) {
        if (cfd.arguments.length == 3) {
            this.ifd = qfd;
            this.kfd = rfd;
            this.lfd = sfd
        } else {
            this.ifd = qfd.ifd;
            this.kfd = qfd.kfd;
            this.lfd = qfd.lfd
        }
    } else {
        this.ifd = 1.0;
        this.kfd = 0.0;
        this.lfd = 0.0
    }
}
cfd.prototype.yu = function (wed) {
    return new cfd(this.ifd + wed.ifd, this.kfd + wed.kfd, this.lfd + wed.lfd)
};
cfd.prototype.ffd = function (wed) {
    return new cfd(this.ifd - wed.ifd, this.kfd - wed.kfd, this.lfd - wed.lfd)
};
cfd.prototype.knb = function (jgb) {
    return new cfd(jgb * this.ifd, jgb * this.kfd, jgb * this.lfd)
};
cfd.prototype.gfd = function () {
    var yw = 1.0 / Math.sqrt((this.ifd * this.ifd) + (this.kfd * this.kfd) + (this.lfd * this.lfd));
    this.ifd = this.ifd * yw;
    this.kfd = this.kfd * yw;
    this.lfd = this.lfd * yw
};
cfd.prototype.hfd = function (tfd,
    ufd) {
    this.ifd = (tfd.kfd * ufd.lfd) - (tfd.lfd * ufd.kfd);
    this.kfd = (tfd.lfd * ufd.ifd) - (tfd.ifd * ufd.lfd);
    this.lfd = (tfd.ifd * ufd.kfd) - (tfd.kfd * ufd.ifd)
};
cfd.prototype.jfd = function (vfd) {
    return (this.ifd * vfd.ifd) + (this.kfd * vfd.kfd) + (this.lfd * vfd.lfd)
};

function kzc(wfd) {
    var wgb = kzc.arguments;
    var xgb = kzc.arguments.length;
    this.nfb = [];
    this.xfd = [];
    this.length = 0;
    this.oqb = 0;
    if (xgb > 0) {
        for (var mh = 0; mh < xgb; mh++) {
            this.nfb[mh] = null;
            this.xfd.push(mh);
        }
    }
}
kzc.prototype.nzc = function () {
    var yfd;
    if (this.xfd.length == 0) {
        yfd = this.nfb.length;
        this.nfb[yfd] = null;
        return yfd
    }
    return this.xfd.pop()
};
kzc.prototype.yu = function (zfd) {
    var xl = this.nzc();
    this.nfb[xl] = zfd;
    this.oqb++;
    this.length = this.nfb.length;
    return xl
};
kzc.prototype.dv = function (lhb) {
    var kv = this.nfb[lhb];
    if (kv == undefined) kv = null;
    return kv
};
kzc.prototype.agd = function (bgd) {
    for (var uu = 0; uu < this.nfb.length; uu++) {
        if (this.nfb[uu] == bgd) return uu
    }
    return -1
};
kzc.prototype.cgd = function (bgd) {
    var xl = agd(bgd);
    if (xl < 0) return;
    nfb[xl] = null;
    xfd.push(xl);
    this.oqb--
};
kzc.prototype.iv = function (lhb) {
    if (lhb < 0 || lhb >= this.nfb.length) return;
    this.nfb[lhb] = null;
    this.xfd.push(lhb);
    this.oqb--
};
kzc.prototype.nib = function () {
    this.nfb = [];
    this.xfd = [];
    this.oqb = 0;
    this.length = this.nfb.length
};
kzc.prototype.lv = function (rnb, bv) {
    if (rnb < 0 || rnb >= this.nfb.length) return;
    this.nfb[rnb] = bv
};
var dgd = 0,
    egd = 1,
    fgd = 2,
    ggd = 3,
    hgd = 4,
    igd = 0,
    jgd = 1,
    kgd = -1;

function lgd() {
    this.mgd = "";
    this.ngd = -1;
    this.ogd = 0;
    this.pgd = null;
    this.qgd = dgd;
    this.rgd = !1
}

function fbd() {
    this.nfb = new kzc(5)
};
fbd.prototype.wib = function () {
    return this.nfb
};
fbd.prototype.yu = function (av, zbd, sgd, tgd) {
    var ugd = new lgd();
    ugd.ngd = av;
    ugd.mgd = zbd;
    ugd.pgd = tgd;
    ugd.qgd = sgd;
    this.nfb.yu(ugd);
    tgd.vgd = ugd
};
fbd.prototype.wgd = function () {
    var xgd = ev();
    rq.ygd = xgd;
    var nfb = this.nfb.nfb;
    for (var mh = 0; mh < nfb.length; mh++) {
        var ugd = nfb[mh];
        if (ugd != null) {
            if (ugd.rgd) {
                jv(xgd);
                mv(xgd, "filename", ugd.mgd);
                mv(xgd, "id", ugd.ngd);
                mv(xgd, "status", ugd.ogd);
                if (ugd.qgd == egd) cfb.zgd(ndc, 0);
                else if (ugd.qgd == fgd) cfb.zgd(ndc, 0);
                else if (ugd.qgd == ggd) cfb.zgd(ndc, 0);
                else if (ugd.qgd == hgd) cfb.zgd(odc, 0);
                this.nfb.iv(mh)
            }
        }
    }
    hv(xgd);
    rq.ygd = -1
};

function ahd() {
    this.wf = "";
    this.mg = !1;
    this.dg = !1;
    this.preload = !1;
    this.dw = null
}

function bhd(chd) {
    var opb = new ahd();
    opb.wf = chd.wf;
    if (chd.mg != undefined) opb.mg = chd.mg;
    if (chd.dg != undefined) opb.dg = chd.dg;
    if (chd.preload != undefined) opb.preload = chd.preload;
    opb.dw = dhd(chd.ig);
    return opb
};

function ehd(chd) {
    this.nib();
    if (chd.xh != undefined) this.xh = chd.xh;
    if (chd.fhd != undefined) this.fhd = chd.fhd;
    if (chd.xl != undefined) this.xl = chd.xl;
    if (chd.oh != undefined) this.oh = chd.oh;
    if (chd.ph != undefined) this.ph = chd.ph;
    if (chd.ghd != undefined) this.hhd = chd.ghd;
    if (chd.ihd != undefined) this.jhd = chd.ihd;
    if (chd.km != undefined) this.khd = chd.km;
    if (chd.lm != undefined) this.lhd = chd.lm;
    if (chd.mhd != undefined) this.mhd = chd.mhd;
    if (chd.nhd != undefined) this.nhd = chd.nhd;
    if (chd.ohd != undefined) this.ohd = chd.ohd
}
ehd.prototype.nib = function () {
    this.xh = !1;
    this.fhd = !1;
    this.xl = -1;
    this.oh = 0;
    this.ph = 0;
    this.hhd = !0;
    this.jhd = !0;
    this.khd = 0;
    this.lhd = 0;
    this.phd = 1;
    this.qhd = 1;
    this.mhd = !1;
    this.nhd = 1.0;
    this.ohd = 0xffffff
};

function abd() {
    this.rhd = [];
    this.shd = [];
    this.length = 0
}
abd.prototype.cw = function (rnb) {
    return this.rhd[rnb]
};
abd.prototype.dv = function (rnb) {
    return this.shd[rnb]
};
abd.prototype.nib = function () {
    this.shd = [];
    length = 0
};
abd.prototype.xdd = function (chd) {
    var aw = null;
    if (chd != null) {
        aw = bhd(chd)
    }
    return this.thd(aw)
};
abd.prototype.thd = function (uhd) {
    var mh = this.rhd.length;
    this.rhd[mh] = uhd;
    this.length = mh + 1;
    return mh
};
abd.prototype.yu = function (chd) {
    with(this) {
        var aw = null;
        if (chd != null) {
            aw = new ehd(chd)
        }
        shd[shd.length] = aw
    }
};

function tad() {
    this.vhd = 0;
    this.rdd = 0;
    this.sdd = 0;
    this.whd = 0;
    this.xhd = 0;
    this.yhd = 0;
    this.zhd = 0;
    this.aid = 100;
    this.idd = 0;
    this.bid = "/";
    this.cid = "/";
    this.did = "/";
    this.ks = 0;
    this.js = 0;
    this.eid = "room";
    this.sq = 30;
    this.fid = !1;
    this.gid = 0x00000000;
    this.hid = !1;
    this.iid = !1;
    this.jid = !1;
    this.kid = 0;
    this.lid = 0;
    this.mid = 0;
    this.nid = 0;
    this.oid = 0;
    this.pid = 0;
    this.qid = 0;
    this.rid = 1.0;
    this.sid = 1.0;
    this.tid = 0;
    this.uid = 0;
    this.vid = 0;
    this.wid = 1.0;
    this.xid = !1;
    this.yid = 0;
    this.zid = 0;
    this.ajd = 0;
    this.bjd = 0;
    this.cjd = 0;
    this.djd = 0;
    this.ejd = 0;
    this.fjd = 0;
    this.gjd = 0;
    this.hjd = 0;
    this.ijd = 0;
    this.jjd = 0;
    this.kjd = 0;
    this.ljd = 0;
    this.mjd = 0;
    this.njd = 0;
    this.yyb = 0;
    this.azb = 0;
    this.ojd = 0;
    this.pjd = 0;
    this.qjd = 0;
    this.rjd = 0;
    this.sjd = "";
    this.tjd = "";
    this.ujd = -1;
    this.vjd = !1;
    this.wjd = !1;
    this.xjd = !1;
    this.yjd = "score";
    this.zjd = "lives";
    this.akd = "health";
    this.bkd = 0;
    this.ckd = 0;
    this.dkd = 0;
    this.ekd = 0;
    this.fkd = 0;
    this.gkd = 0;
    this.hkd = 0;
    this.ikd = 0;
    this.jkd = 0;
    this.kkd = 0;
    this.lkd = 0;
    this.mkd = 0;
    this.nkd = 0;
    this.pfd = 0;
    this.okd = 0;
    this.pkd = 0;
    this.qkd = !0;
    this.rkd = !0;
    this.skd = 8.2;
    this.ygd = -1;
    this.tkd = !1;
    this.tac = [];
    this.tac["__view_visible__"] = new uac("__view_visible__", 1);
    this.tac["__view_xview__"] = new uac("__view_xview__",
        1);
    this.tac["__view_yview__"] = new uac("__view_yview__", 1);
    this.tac["__view_wview__"] = new uac("__view_wview__", 1);
    this.tac["__view_hview__"] = new uac("__view_hview__", 1);
    this.tac["__view_xport__"] = new uac("__view_xport__", 1);
    this.tac["__view_yport__"] = new uac("__view_yport__", 1);
    this.tac["__view_wport__"] = new uac("__view_wport__", 1);
    this.tac["__view_hport__"] = new uac("__view_hport__", 1);
    this.tac["__view_angle__"] = new uac("__view_angle__", 1);
    this.tac["__view_hborder__"] = new uac("__view_hborder__", 1);
    this.tac["__view_vborder__"] = new uac("__view_vborder__",
        1);
    this.tac["__view_hspeed__"] = new uac("__view_hspeed__", 1);
    this.tac["__view_vspeed__"] = new uac("__view_vspeed__", 1);
    this.tac["__view_object__"] = new uac("__view_object__", 1);
    this.tac["__view_surface_id__"] = new uac("__view_surface_id__", 1)
}
tad.prototype.ds = function () {
    return dfb.am
};
tad.prototype.ru = function (ukd) {
    for (var ryb in ukd) {
        var ocd = ukd[ryb];
        this[ryb] = ocd
    }
};
var vkd = 0;
var wkd = 1;
var xkd = 2;
var ykd = 3;
var zkd = 4;
var ald = 5;
var bld = 6;
var cld = 7;
var dld = 8;
var eld = 9;
var fld = 10;
var gld = 11;
var hld = 12;
var ild = 13;
var jld = 14;

function kld() {
    this.lld = [];
    this.mld()
}
kld.prototype.mld = function (rnb, nld) {
    this.lld.length = 0;
    this.old = [];
    this.old[0] = 1;
    this.old[1] = 1;
    this.pld = undefined
};
kld.prototype.qld = function (rnb, nld) {
    if (this.old[rnb] == nld) return;
    this.old[rnb] = nld;
    this.lld.push(wkd);
    this.lld.push(nld)
};
kld.prototype.rld = function (sld) {
    if (this.pld == sld) return;
    this.pld = sld;
    this.lld.push(gld);
    this.lld.push(sld)
};
kld.prototype.tld = function (uld, vld) {
    this.lld.push(xkd);
    this.lld.push(uld);
    this.lld.push(vld)
};
kld.prototype.wld = function (uld, vld) {
    this.lld.push(ykd);
    this.lld.push(uld);
    this.lld.push(vld)
};
kld.prototype.xld = function (uld, vld) {
    this.lld.push(zkd);
    this.lld.push(uld);
    this.lld.push(vld)
};
kld.prototype.yld = function (uld, vld) {
    this.lld.push(ald);
    this.lld.push(uld);
    this.lld.push(vld)
};
kld.prototype.zld = function (uld, vld) {
    this.lld.push(bld);
    this.lld.push(uld);
    this.lld.push(vld)
};
kld.prototype.amd = function (uld, vld) {
    this.lld.push(cld);
    this.lld.push(uld);
    this.lld.push(vld)
};
kld.prototype.bmd = function (ued) {
    this.lld.push(dld);
    var cmd = new ted(ued);
    this.lld.push(cmd)
};
kld.prototype.dmd = function (ued) {
    this.lld.push(eld);
    var cmd = new ted(ued);
    this.lld.push(cmd)
};
kld.prototype.emd = function (ux, vx, lu, mu) {
    this.lld.push(fld);
    this.lld.push(ux);
    this.lld.push(vx);
    this.lld.push(lu);
    this.lld.push(mu)
};
kld.prototype.fmd = function (gmd, cab) {
    this.lld.push(hld);
    this.lld.push(gmd);
    this.lld.push(~~cab)
};
kld.prototype.hmd = function (imd) {
    this.lld.push(ild);
    this.lld.push(imd)
};
kld.prototype.jmd = function () {
    var mh, lld, error;
    mh = 0;
    lld = this.lld;
    kvc.useProgram(kvc.kmd);
    kvc.enable(kvc.BLEND);
    kvc.blendFuncSeparate(kvc.SRC_ALPHA,
        kvc.ONE_MINUS_SRC_ALPHA, kvc.ONE, kvc.ONE);
    kvc.activeTexture(kvc.TEXTURE0);
    while (mh < lld.length) {
        switch (lld[mh]) {
        case dld:
            kvc.uniformMatrix4fv(kvc.kmd.lmd, !1, lld[mh + 1].wab);
            mh += 2;
            break;
        case eld:
            kvc.uniformMatrix4fv(kvc.kmd.mmd, !1, lld[mh + 1].wab);
            mh += 2;
            break;
        case hld:
            var mz = lld[mh + 2];
            kvc.clearColor((mz & 0xff) / 255.0, ((mz >> 8) & 0xff) / 255.0, ((mz >> 16) & 0xff) / 255.0, ((mz >> 24) & 0xff) / 255.0);
            kvc.clear(lld[mh + 1]);
            mh += 3;
            break;
        case fld:
            {
                kvc.viewport(lld[mh + 1], lld[mh + 2], lld[mh + 3], lld[mh + 4]);
                mh += 5;
                break
            }
        case ild:
            {
                kvc.bindFramebuffer(kvc.FRAMEBUFFER,
                    lld[mh + 1]);
                mh += 2;
                break
            }
        case jld:
            {
                kvc.colorMask(lld[mh + 2], lld[mh + 3], lld[mh + 4], lld[mh + 1]);
                mh += 5;
                break
            }
        case wkd:
            var rob = lld[mh + 1];
            if (rob == null) {
                rob = kvc.nmd.rob;
                kvc.activeTexture(kvc.TEXTURE0);
                kvc.bindTexture(kvc.TEXTURE_2D, rob.omd);
                kvc.uniform1i(kvc.kmd.pmd, 0);
                kvc.uniform2f(kvc.kmd.qmd, 1.0 / rob.ou, 1.0 / rob.pu)
            } else {
                kvc.activeTexture(kvc.TEXTURE0);
                kvc.bindTexture(kvc.TEXTURE_2D, rob.omd);
                kvc.uniform1i(kvc.kmd.pmd, 0);
                kvc.uniform2f(kvc.kmd.qmd, 1.0 / rob.ou, 1.0 / rob.pu)
            }
            mh += 2;
            break;
        case gld:
            {
                var rmd = lld[mh + 1];
                if (rmd.smd) rmd.tmd();
                rmd.umd = vmd;
                kvc.bindBuffer(kvc.ARRAY_BUFFER, rmd.wmd);
                kvc.enableVertexAttribArray(kvc.kmd.xmd);
                kvc.vertexAttribPointer(kvc.kmd.xmd, 2, kvc.SHORT, !1, 0, 0);
                kvc.bindBuffer(kvc.ARRAY_BUFFER, rmd.ymd);
                kvc.enableVertexAttribArray(kvc.kmd.zmd);
                kvc.vertexAttribPointer(kvc.kmd.zmd, 4, kvc.UNSIGNED_BYTE, !0, 0, 0);
                kvc.bindBuffer(kvc.ARRAY_BUFFER, rmd.and);
                kvc.enableVertexAttribArray(kvc.kmd.bnd);
                kvc.vertexAttribPointer(kvc.kmd.bnd, 2, kvc.SHORT, !1, 0, 0);
                mh += 2
            }
            break;
        case xkd:
            {
                kvc.drawArrays(kvc.TRIANGLES, lld[mh + 1], lld[mh + 2]);
                mh += 3;
                break
            }
        case ykd:
            {
                kvc.drawArrays(kvc.TRIANGLE_FAN, lld[mh + 1], lld[mh + 2]);
                mh += 3;
                break
            }
        case zkd:
            {
                kvc.drawArrays(kvc.TRIANGLE_STRIP, lld[mh + 1], lld[mh + 2]);
                mh += 3;
                break
            }
        case ald:
            {
                kvc.drawArrays(kvc.LINES, lld[mh + 1], lld[mh + 2]);
                mh += 3;
                break
            }
        case bld:
            {
                kvc.drawArrays(kvc.LINE_STRIP, lld[mh + 1], lld[mh + 2]);
                mh += 3;
                break
            }
        case cld:
            {
                kvc.drawArrays(kvc.POINT, lld[mh + 1], lld[mh + 2]);
                mh += 3;
                break
            }
        }
    }
    error = kvc.getError()
};

function ny() {
    this.oy = !1;
    this.cnd = !1;
    this.wf = "";
    this.dy = "";
    this.bh = 12;
    this.bold = !1;
    this.ch = !1;
    this.dh = 32;
    this.eh = 127;
    this.py = "";
    this.prop = !1;
    this.dnd = 0;
    this.gh = 0;
    this.fh = 0;
    this.end = 1;
    this.fnd = 1;
    this.lh = null;
    this.dw = null;
    this.gnd = null
}
ny.prototype.hnd = function (chd) {
    this.wf = chd.wf;
    this.dy = chd.hh;
    this.bh = chd.bh;
    this.bold = chd.bold;
    this.ch = chd.ch;
    this.dh = chd.dh & 0xffff;
    this.oy = !1;
    this.gh = 0;
    this.fh = 0;
    if (((chd.dh >> 16) & 0xff) !== 0) this.fh = (chd.dh >> 16) & 0xff;
    if (((chd.dh >> 24) & 0xff) !== 0) this.gh = ((chd.dh >> 24) & 0xff) - 1;
    this.eh = chd.eh;
    this.end = chd.jh;
    this.fnd = chd.kh;
    this.lh = [];
    var jgb = 99999999;
    var uu = -99999999;
    for (var ind in chd.lh) {
        var xl = -2;
        jnd = chd.lh[ind];
        if (jnd.nh != undefined) xl = jnd.nh.charCodeAt(0);
        else if (jnd.mh != undefined) xl = jnd.mh;
        this.lh[xl] = jnd;
        if (xl < jgb) jgb = xl;
        if (xl > uu) uu = xl
    }
    this.dh = jgb;
    this.eh = jgb;
    this.dw = dhd(chd.ih)
};
ny.prototype.knd = function (hqb) {
    if (this.oy) {
        if (this.cnd) {
            var nh = hqb.charCodeAt(0);
            if (nh < this.dh || nh > this.eh) nh = this.dh;
            var nob = this.gnd.pob[nh - this.dh];
            return nob.rm
        } else {
            return this.bh
        }
    } else {
        return this.lh[this.dh].rh
    }
};
ny.prototype.lnd = function (mx) {
    if (mx == null) return 0;
    if (this.oy) {
        if (this.cnd) {
            var zab = 0;
            var mh = 0;
            while (mh < mx.length) {
                var nh = mx.charCodeAt(mh++);
                if (nh < this.dh || nh > this.eh) nh = this.dh;
                var nob = this.gnd.pob[nh - this.dh];
                if (this.prop) zab += nob.qm;
                else zab += nob.sm
            }
            return zab
        } else {
            eab.font = this.py;
            var mnd = eab.measureText(mx);
            return mnd.width
        }
    } else {
        var zab = 0;
        var mh = 0;
        while (mh < mx.length) {
            var nh = mx.charCodeAt(mh++);
            var jnd = this.lh[nh];
            if (!jnd) jnd = this.lh[this.dh];
            zab = zab + jnd.shift
        }
        return zab
    }
};
ny.prototype.nnd = function (ond) {
    if (this.oy) {
        if (this.cnd) {
            var zab = 0;
            if (ond < this.dh || ond > this.eh) ond = this.dh;
            var nob = this.gnd.pob[ond - this.dh];
            if (this.prop) zab += nob.qm;
            else zab += nob.sm;
            return zab
        } else {
            eab.font = this.py;
            var mnd = eab.measureText(String.fromCharCode(ond));
            return mnd.width
        }
    }
    var jnd = this.lh[ond];
    if (jnd) {
        return jnd.shift
    } else if (0x20 >= this.dh && 0x20 <= this.eh) {
        return this.lh[0x20].shift
    } else {
        return this.lh[this.dh].shift
    }
};
ny.prototype.pnd = function (ux, vx, qnd, yx, zx, ay, cab, dab) {
    var rnd;
    var snd = this.dw;
    if (!snd.rob.complete) return;
    var yw = qnd.length;
    cab = cab & 0xffffff | ((dab * 255) << 24);
    for (var mh = 0; mh < yw; mh++) {
        ond = qnd.charCodeAt(mh);
        var jnd = this.lh[ond];
        if (!jnd) jnd = this.lh[0x20];
        var tnd = jnd.oh;
        var und = jnd.ph;
        var vnd = jnd.qh;
        var wnd = jnd.rh;
        if (Math.abs(ay) < 0.001) {
            eab.mob(snd, tnd + snd.oh, und + snd.ph, vnd, wnd, ux + jnd.sh, vx, vnd * this.end * yx, wnd * this.fnd * zx, cab)
        } else {
            eab.mob(snd, tnd + snd.oh, und + snd.ph, vnd, wnd, ux + jnd.sh, vx, vnd, wnd, cab)
        }
        ux += this.nnd(ond)
    }
};
ny.prototype.xnd = function (ux, vx, qnd, yx, zx, ay, cab, dab) {
    var rnd;
    var snd = sob[this.dw.um];
    if (!snd.complete) return;
    eab.globalAlpha = dab;
    var yw = qnd.length;
    cab = cab & 0xffffff;
    if (cab != 0xffffff) {
        rnd = ynd(this.dw, cab)
    }
    ay = uzc(ay);
    if (Math.abs(ay) > 0.001) {
        znd(ux, vx, this.end * yx, this.end * zx, -ay);
        ux = 0;
        vx = 0
    }
    for (var mh = 0; mh < yw; mh++) {
        ond = qnd.charCodeAt(mh);
        var jnd = this.lh[ond];
        if (!jnd) jnd = this.lh[0x20];
        var tnd = jnd.oh;
        var und = jnd.ph;
        var vnd = jnd.qh;
        var wnd = jnd.rh;
        if ((cab != 0xffffff) && (rnd != null)) {
            if (Math.abs(ay) < 0.001) {
                eab.mob(rnd, tnd, und, vnd, wnd, ux + jnd.sh, vx, vnd * this.end * yx, wnd * this.fnd * zx)
            } else {
                eab.mob(rnd, tnd, und, vnd, wnd, ux + jnd.sh, vx, vnd, wnd)
            }
        } else {
            if (Math.abs(ay) < 0.001) {
                eab.mob(snd, tnd + this.dw.oh, und + this.dw.ph, vnd, wnd, ux + jnd.sh, vx, vnd * this.end * yx,
                    wnd * this.fnd * zx)
            } else {
                eab.mob(snd, tnd + this.dw.oh, und + this.dw.ph, vnd, wnd, ux + jnd.sh, vx, vnd, wnd)
            }
        }
        ux += this.nnd(ond)
    }
    if (Math.abs(ay) > 0.001) aod()
};
ny.prototype.bod = function (ux, vx, qnd, yx, zx, ay, cab, dab) {
    if (this.gnd == null) return;
    eab.globalAlpha = dab;
    var yw = qnd.length;
    cab = cab & 0xffffff;
    var mz = cab | (gbb * 255) << 24;
    ay = uzc(ay);
    var uab = Math.sin(ay);
    var cod = Math.cos(ay);
    var dod = uab * yx;
    var eod = cod * yx;
    var fod = this.end * yx;
    var god = this.fnd * zx;
    for (var mh = 0; mh < yw; mh++) {
        ond = qnd.charCodeAt(mh);
        if (ond < this.dh || ond > this.eh) {} else {
            var oh = ux;
            var ph = vx;
            var nob = this.gnd.pob[ond - this.dh];
            var snd = sob[nob.um];
            if (snd.complete) {
                var beb = nob.om;
                var ceb = nob.pm;
                if (this.prop) beb = 0;
                if (cab != 0xffffff) {
                    var rnd;
                    if (!kvc) {
                        rnd = ynd(nob, cab)
                    } else {
                        rnd = nob
                    } if (Math.abs(ay) < 0.001) {
                        eab.mob(rnd, 0, 0, nob.qm, nob.rm, oh + (beb * fod), ph + (ceb * god), nob.qm * fod, nob.rm * god)
                    } else {
                        znd(oh, ph, fod, god, -ay);
                        eab.mob(rnd, 0, 0, nob.qm, nob.rm, beb, ceb, nob.qm, nob.rm);
                        aod()
                    }
                } else {
                    if (kvc) {
                        snd = nob;
                    }
                    if (Math.abs(ay) < 0.001) {
                        eab.mob(snd, nob.oh, nob.ph, nob.qh, nob.rh, oh + (beb * fod), ph + (ceb * god), nob.qm * fod,
                            nob.rm * god)
                    } else {
                        znd(oh, ph, fod, god, -ay);
                        eab.mob(snd, nob.oh, nob.ph, nob.qh, nob.rh, beb, ceb, nob.qm, nob.rm);
                        aod()
                    }
                }
            }
        }
        var shift = this.nnd(ond);
        ux = ux + eod * (shift + this.dnd);
        vx = vx - dod * (shift + this.dnd)
    }
};
ny.prototype.hod = function (ux, vx, qnd, yx, zx, ay, cab, dab) {
    if (this.gnd == null) return;
    eab.globalAlpha = dab;
    var yw = qnd.length;
    cab = cab & 0xffffff;
    var mz = cab | (gbb * 255) << 24;
    ay = uzc(ay);
    var uab = Math.sin(ay);
    var cod = Math.cos(ay);
    var dod = uab * yx;
    var eod = cod * yx;
    var fod = this.end * yx;
    var god = this.fnd * zx;
    for (var mh = 0; mh < yw; mh++) {
        ond = qnd.charCodeAt(mh);
        if (ond < this.dh || ond > this.eh) {} else {
            var oh = ux;
            var ph = vx;
            var nob = this.gnd.pob[ond - this.dh];
            var snd = sob[nob.um];
            if (snd.complete) {
                var beb = nob.om;
                var ceb = nob.pm;
                if (this.prop) beb = 0;
                if (Math.abs(ay) < 0.001) {
                    eab.mob(nob, nob.oh, nob.ph, nob.qh, nob.rh, oh + (beb * fod), ph + (ceb * god), nob.qm * fod, nob.rm * god, mz)
                } else {
                    znd(oh, ph, fod, god, -ay);
                    eab.mob(nob, nob.oh, nob.ph, nob.qh, nob.rh, beb, ceb, nob.qm, nob.rm, mz);
                    aod()
                }
            }
        }
        var shift = this.nnd(ond);
        ux = ux + eod * (shift + this.dnd);
        vx = vx - dod * (shift + this.dnd)
    }
};

function cbd() {
    this.ah = [];
    this.length = 0;
    this.iod = null;
    this.tx = 0;
    this.jod = 0;
    this.rx = 0;
    var cy = fy("Arial", 12, !1, !1, 32, 127, !1);
    this.ah[-1] = cy;
    lxc = -1;
    this.tx = lxc
}
cbd.prototype.nib = function () {
    this.ah = [];
    length = 0
};
cbd.prototype.yu = function (chd) {
    var cy = null;
    if (chd != null) {
        cy = new ny();
        cy.hnd(chd)
    }
    this.ah[this.ah.length] = cy;
    return this.ah.length - 1;
};
cbd.prototype.qy = function (kod) {
    this.ah[this.ah.length] = kod;
    return this.ah.length - 1
};
cbd.prototype.lod = function () {
    if (this.tx >= 0 && this.tx <= this.ah.length && this.ah[this.tx] != null) {
        this.iod = this.ah[this.tx]
    } else {
        this.iod = this.ah[-1]
    }
};
cbd.prototype.dv = function (av) {
    if (av >= 0 && av <= this.ah.length && this.ah[av]) {
        return this.ah[av]
    }
    return null
};

function mod(mx) {
    if (mx == null) return 0;
    var nod = mx;
    var ood = "";
    var mh = 0;
    var pod = 0;
    while (pod < nod.length) {
        var nx = nod[pod];
        if (nx == '#') {
            if (mh > 0) {
                if (nod[pod - 1] == '\\') {
                    ood = ood.substring(0, ood.length - 1) + '#'
                } else {
                    ood += String.fromCharCode(0x0a);
                    mh++
                }
            }
        } else {
            ood += nx;
            mh++
        }
        pod++
    }
    return ood
}
cbd.prototype.qod = function (qnd, rod) {
    {
        var vw = String.fromCharCode(0x0a);
        if (qnd == null) return;
        if (rod < 0) rod = 10000000;
        sod = [];
        var tod = 0;
        qnd = mod(qnd);
        var yw = qnd.length;
        var uod = qnd;
        var vod = 0;
        var wod = 0;
        while (vod < yw) {
            var xod = 0;
            if (rod == 10000000) {
                while (wod < yw && uod[wod] != vw) {
                    wod++
                }
                sod[tod++] = uod.substring(vod, wod)
            } else {
                while (wod < yw) {
                    if (uod[wod] != " ") break;
                    wod++
                }
                while (wod < yw && xod < rod) {
                    nh = uod[wod];
                    if (nh == vw) break;
                    xod += this.iod.nnd(nh.charCodeAt(0));
                    wod++
                }
                if (xod > rod) {
                    wod--;
                    xod -= this.iod.nnd(uod.charCodeAt(wod))
                }
                if (uod[wod] == vw) {
                    sod[tod++] = uod.substring(vod, wod)
                } else {
                    if (wod == vod) return sod;
                    if (wod != yw) {
                        if ((uod[wod] != " ") || (uod[wod] != " " && uod[wod + 1] != " ")) {
                            while (wod > vod) {
                                if (uod[--wod] == " ") break
                            }
                        }
                    }
                    if (wod > 0) {
                        while (uod[wod - 1] == " ") {
                            wod--
                        }
                    }
                    sod[tod++] = uod.substring(vod, wod)
                }
            }
            vod = ++wod
        }
        return sod
    }
};
cbd.prototype.wx = function (mx, oh, ph, yod, rod, ay, yx, zx) {
    with(this) {
        var phd = yx;
        var qhd = zx;
        var zod = 0.0;
        var apd = 0.0;
        var sod = [];
        var mh = 0;
        lod();
        sod = qod(mx, rod);
        var bpd = uzc(ay);
        var uab = Math.sin(bpd);
        var cod = Math.cos(bpd);
        if (yod < 0) {
            yod = iod ? iod.knd("M") : 20
        }
        var cpd = uab * qhd * yod;
        var dpd = cod * qhd * yod;
        if (jod == 1) {
            ph = ph - Math.round((sod.length * dpd) / 2.0);
            oh = oh - Math.round((sod.length * cpd) / 2.0)
        }
        if (jod == 2) {
            ph = ph - Math.round(sod.length * dpd);
            oh = oh - Math.round(sod.length * cpd)
        }
        if (!iod) {
            eab.fillStyle = fbb;
            eab.globalAlpha = gbb;
            for (mh = 0; mh <= sod.length - 1; mh++) {
                var epd = sod[mh];
                if (epd != null) {
                    eab.fillText(epd, oh, ph + 13);
                    ph = ph + dpd;
                    oh = oh + cpd
                }
            }
        } else {
            for (mh = 0; mh <= sod.length - 1; mh++) {
                zod = 0;
                apd = 0;
                var epd = sod[mh];
                if (epd != null) {
                    if (rx == 1) zod = -(phd * iod.lnd(epd) / 2);
                    if (rx == 2) zod = -(phd * iod.lnd(epd));
                    var udb = oh + cod * zod + uab * apd;
                    var vdb = ph - uab * zod + cod * apd;
                    if (iod.oy) {
                        if (iod.cnd) {
                            if (!kvc) {
                                iod.bod(udb, vdb, epd, phd, qhd, ay, cbb, gbb)
                            } else {
                                iod.hod(udb, vdb, epd, phd, qhd, ay, cbb, gbb)
                            }
                        } else {
                            fpd(iod.py, epd, udb, vdb + 13, 1, 1, ay, cbb, gbb)
                        }
                    } else {
                        if (kvc) {
                            iod.pnd(udb, vdb, epd, phd, qhd, ay, cbb, gbb)
                        } else {
                            iod.xnd(udb, vdb, epd, phd, qhd, ay, cbb, gbb)
                        }
                    }
                }
                ph = ph + dpd;
                oh = oh + cpd
            }
        }
    }
};
var gpd;
var sob;
var hpd = null;
var ipd = 1024;
var jpd = 768;
var kpd = 1;
var lpd = 1;
var kab = 0;
var lab = 0;
var mab = 0;
var nab = 0;
var mpd = 0;
var npd = 0;
var opd = 0;
var ppd = 0;
var qpd = [];
var vmd = 0;
var rpd = 0xffffff;
var spd;
var tpd;
var upd;
var vpd;
var aod;
var wpd;
var znd;
var xpd;

function ypd() {
    return ipd
}

function zpd() {
    return jpd
}

function job(aqd) {
    if (!aqd) return;
    aqd.bqd = aqd.transform;
    aqd.hab = aqd.setTransform;
    aqd.fab = aqd.save;
    aqd.oab = aqd.restore;
    aqd.sbb = aqd.fillRect;
    aqd.rbb = aqd.strokeRect;
    aqd.pcb = aqd.beginPath;
    aqd.keb = aqd.arc;
    aqd.scb = aqd.stroke;
    aqd.tcb = aqd.closePath;
    aqd.lineWidth = aqd.lineWidth;
    aqd.qcb = aqd.moveTo;
    aqd.rcb = aqd.lineTo;
    aqd.ucb = aqd.fill;
    aqd.mob = aqd.drawImage;
    aqd.vrb = aqd.getImageData;
    aqd.cqd = aqd.createImageData;
    aqd.dqd = aqd.putImageData;
    aqd.eqd = aqd.clip;
    aqd.fqd = aqd.rect
}

function vad(gqd) {
    sob = [];
    hpd = null;
    kab = 0;
    lab = 0;
    mab = 0;
    nab = 0;
    mpd = 0;
    npd = 0;
    opd = 0;
    ppd = 0;
    qpd = [];
    qpd[0] = 1;
    qpd[1] = 0;
    qpd[2] = 0;
    qpd[3] = 0;
    qpd[4] = 1;
    qpd[5] = 0;
    if (!kvc) {
        if (vac) {
            spd = hqd
        } else {
            spd = iqd
        }
        tpd = jqd;
        kqd = lqd;
        upd = mqd;
        vpd = nqd;
        aod = oqd;
        wpd = pqd;
        znd = qqd;
        xpd = rqd;
        sqd = tqd;
        uqd = vqd;
        fpd = wqd;
        xqd = yqd;
        zqd = ard;
        if (wac) {
            if (vac) {
                rpd = 0x1ffffff;
                spd = brd
            } else {
                spd = crd
            }
            tpd = jqd;
            kqd = drd
        }
    } else {
        erd()
    }
    upd(0, 0, lwc, mwc);
    vpd(0, 0, lwc, mwc)
}

function tqd() {
    eab.fab()
}

function vqd() {
    eab.oab()
}

function udd(frd) {
    hpd = frd;
    for (var mh in frd) {
        var nob = frd[mh];
        nob.nqb = [];
        nob.oqb = 0;
        nob.pqb = 4;
        nob.qqb = 0;
        nob.rqb = null;
        nob.gob = null;
        nob.rob = sob[nob.um]
    }
}

function grd() {
    this.opb = null;
    this.hrd = 0
}

function ynd(spb, abb) {
    var ird = spb.nqb[abb];
    if (ird != null) {
        ird.hrd = vmd;
        return ird.opb
    }
    var jrd = -9999999999;
    ird = null;
    krd = -1;
    if (spb.oqb < spb.pqb) {
        ird = new grd();
        spb.oqb++
    } else {
        for (var mh in spb.nqb) {
            var lrd = spb.nqb[mh];
            if (lrd != null) {
                var qu = vmd - lrd.hrd;
                if (qu > jrd) {
                    krd = mh;
                    ird = lrd;
                    jrd = qu
                }
            }
        }
    } if (krd >= 0) spb.nqb[krd] = null;
    spb.nqb[abb] = ird;
    ird.hrd = vmd;
    ird.opb = mrd(spb, abb);
    return ird.opb
}

function dhd(rnb) {
    return hpd[rnb]
}

function oqd() {
    eab.hab(qpd[0], qpd[3], qpd[1], qpd[4],
        qpd[2], qpd[5])
}

function pqd(cab) {
    eab.fab();
    var gab = [];
    gab[0] = 1;
    gab[1] = 0;
    gab[2] = 0;
    gab[3] = 1;
    gab[4] = 0;
    gab[5] = 0;
    eab.hab(gab[0], gab[1], gab[2], gab[3], gab[4], gab[5]);
    eab.fillStyle = ebb(cab | 0xff000000);
    eab.sbb(kab, lab, mab, nab);
    eab.oab()
}

function mqd(nrd, ord, prd, qrd) {
    kab = nrd;
    lab = ord;
    mab = prd;
    nab = qrd
}

function rrd(ux, vx, lu, mu, ay) {
    var srd = new cfd((ux + lu / 2.0), (vx + mu / 2.0), -16000.0);
    var trd = new cfd((ux + lu / 2.0), (vx + mu / 2.0), 0.0);
    var urd = new cfd(Math.sin(-ay * (Math.PI / 180.0)), Math.cos(-ay * (Math.PI / 180.0)), 0.0);
    qvc.xed(srd, trd,
        urd);
    pvc.mfd(lu, -mu * mxc, 1.0, 32000.0)
}

function qqd(ux, vx, psb, qsb, ay) {
    var gab = [];
    gab[0] = Math.cos(ay);
    gab[3] = Math.sin(ay);
    gab[1] = -gab[3];
    gab[4] = gab[0];
    gab[0] *= psb;
    gab[3] *= psb;
    gab[1] *= qsb;
    gab[4] *= qsb;
    gab[2] = ux;
    gab[5] = vx;
    eab.bqd(gab[0], gab[3], gab[1], gab[4], gab[2], gab[5])
}

function nqd(vrd, wrd, xrd, yrd, ay) {
    qpd[0] = 1;
    qpd[1] = 0;
    qpd[2] = 0;
    qpd[3] = 1;
    qpd[4] = 0;
    qpd[5] = 0;
    eab.hab(qpd[0], qpd[1], qpd[2], qpd[3], qpd[4], qpd[5]);
    eab.pcb();
    eab.fqd(kab, lab, mab, nab);
    eab.eqd();
    var qh = mab / xrd;
    var rh = nab / yrd;
    mpd = vrd;
    npd = wrd;
    opd = xrd;
    ppd = yrd;
    qpd[0] = qh;
    qpd[1] = 0;
    qpd[2] = -(vrd * qh) + kab;
    qpd[3] = 0;
    qpd[4] = rh;
    qpd[5] = -(wrd * rh) + lab;
    aod()
}

function acd(gy) {
    var mh = sob.length;
    var rob = new Image();
    rob.src = gy;
    sob[mh] = rob;
    return mh
}

function qob(zrd) {
    var mh = sob.length;
    sob[mh] = zrd;
    return mh
}

function yqd() {
    vmd++
}

function ard() {}

function ppb(spb) {
    var gob = document.createElement(hob);
    var urb = gob.getContext('2d');
    job(urb);
    gob.width = spb.qh;
    gob.height = spb.rh;
    urb.mob(spb.rob, spb.oh, spb.ph, spb.qh, spb.rh, 0, 0, spb.qh, spb.rh);
    gob.complete = !0;
    return gob
}

function aqb(spb) {
    var gob = document.createElement(hob);
    var urb = gob.getContext('2d');
    job(urb);
    var xpb = [];
    var oib = spb.sm * spb.tm * 4;
    for (var mh = 0; mh < oib; mh++) xpb[mh] = 0;
    gob.width = spb.qh;
    gob.height = spb.rh;
    urb.mob(spb.rob, spb.oh, spb.ph, spb.qh, spb.rh, 0, 0, spb.qh, spb.rh);
    gob.complete = !0;
    var data, xrb, asd, bsd;
    try {
        data = urb.getImageData(0, 0, spb.qh, spb.rh)
    } catch (wrb) {
        return xpb
    }
    csd = data.data;
    var dsd = (spb.om + (spb.pm * spb.sm)) * 4;
    for (ph = 0; ph < spb.rh; ph++) {
        var esd = dsd;
        var fsd = (ph * data.width) * 4;
        var gsd = spb.qh * 4;
        for (oh = 0; oh < gsd; oh++) {
            xpb[esd++] = csd[fsd++]
        }
        dsd += spb.sm * 4
    }
    return xpb
}

function hqd(spb,
    ux, vx, dab) {
    if (!spb.rob) return;
    if (!spb.rob.complete) return;
    if (spb.gob == null) spb.gob = ppb(spb);
    ux += spb.om;
    vx += spb.pm;
    eab.globalAlpha = dab;
    eab.mob(spb.gob, ~~ux, ~~vx)
}

function brd(spb, ux, vx, dab) {
    hqd(spb, ux, vx, dab)
}

function iqd(spb, ux, vx, dab) {
    if (!spb.rob) return;
    if (!spb.rob.complete) return;
    eab.globalAlpha = dab;
    eab.mob(spb.rob, ~~spb.oh, ~~spb.ph, spb.qh, spb.rh, Math.floor(ux) + spb.om, Math.floor(vx) + spb.pm, spb.qm, spb.rm)
}

function crd(spb, ux, vx, dab) {
    iqd(spb, ux, vx, dab)
}

function jqd(spb, ux, vx, hsd, isd, cab, dab) {
    var jsd = spb.rob;
    if (!jsd) return;
    if (!jsd.complete) return;
    var mh = 0;
    if (hsd) mh = 1;
    if (isd) mh |= 2;
    if (mh == 0) {
        eab.globalAlpha = dab;
        eab.mob(jsd, spb.oh, spb.ph, spb.qh, spb.rh, ux + spb.om, vx + spb.pm, spb.qm, spb.rm);
        return
    }
    var qh = spb.sm;
    var rh = spb.tm;
    if (hsd) {
        qh = (((((brb.erb + (spb.sm - 1)) / spb.sm) & 0xffffffff) + 2) * spb.sm);
        ux = (((~~(mpd / spb.sm)) * spb.sm) + (~~ux) % spb.sm) - spb.sm
    }
    if (isd) {
        rh = (((((brb.frb + (spb.tm - 1)) / spb.tm) & 0xffffffff) + 2) * spb.tm);
        vx = (((~~(npd / spb.tm)) * spb.tm) + (~~vx) % spb.tm) - spb.tm
    }
    if ((spb.rqb != null) && (spb.rqb.width < qh || spb.rqb.height < rh)) {
        spb.rqb = null;
        spb.ksd = 0
    }
    if ((spb.qqb != mh) || (!spb.rqb)) {
        spb.qqb = mh;
        var lsd = document.createElement(hob);
        var urb = lsd.getContext('2d');
        job(urb);
        lsd.width = qh;
        lsd.height = rh;
        eab.globalAlpha = 1;
        var msd = qh / spb.sm;
        var nsd = rh / spb.tm;
        for (var ph = 0; ph < nsd; ph++) {
            for (var oh = 0; oh < msd; oh++) {
                urb.mob(jsd, spb.oh, spb.ph, spb.qm, spb.rm, spb.om + (oh * spb.sm), spb.pm + (ph * spb.tm), spb.qm, spb.rm)
            }
        }
        spb.rqb = lsd
    }
    eab.globalAlpha = dab;
    eab.mob(spb.rqb, ux, vx)
}

function lqd(spb, vob, wob, ux, vx, osd, psd, qsd, yy, zy, vbb, wbb, dab) {
    if (!spb.rob) return;
    if (!spb.rob.complete) return;
    if ((abs(osd) <= 0.0001) || (abs(psd) <= 0.0001) || (dab <= 0)) return;
    yy &= 0xffffff;
    var beb = -(vob - spb.om);
    var ceb = -(wob - spb.pm);
    ux = ~~ux;
    vx = ~~vx;
    eab.globalAlpha = dab;
    if (yy != rpd) {
        var rnd = ynd(spb, yy);
        if (Math.abs(qsd) < 0.001 && psd == 1 && osd == 1) {
            eab.mob(rnd, 0, 0, spb.qh, spb.rh, (ux + (beb * osd)), (vx + (ceb * psd)), (spb.qm * osd), (spb.rm * psd))
        } else {
            znd(ux, vx, osd, psd, -qsd);
            eab.mob(rnd, 0, 0, spb.qh, spb.rh, beb, ceb, spb.qm, spb.rm);
            aod()
        }
    } else {
        if (Math.abs(qsd) < 0.001 && psd == 1 && osd == 1) {
            if (spb.gob == null) spb.gob = ppb(spb);
            ux += beb;
            vx += ceb;
            eab.mob(spb.gob, ~~ux, ~~vx)
        } else {
            znd(ux, vx, osd, psd, -qsd);
            eab.mob(spb.rob, spb.oh, spb.ph, spb.qh, spb.rh, beb, ceb, spb.qm, spb.rm);
            aod()
        }
    }
}

function drd(spb, vob, wob, ux, vx, osd, psd, qsd, yy, zy, vbb, wbb, dab) {
    try {
        lqd(spb.rob, vob, wob, ux, vx, osd, psd, qsd, yy, zy, vbb, wbb, dab)
    } catch (wrb) {
        zw("error drawing image")
    }
}

function mrd(spb, cab) {
    var lsd = document.createElement(hob);
    var urb = lsd.getContext('2d');
    job(urb);
    lsd.width = spb.qh;
    lsd.height = spb.rh;
    urb.mob(spb.rob, spb.oh, spb.ph, spb.qh, spb.rh, 0, 0, spb.qh, spb.rh);
    if (~~cab != 0xffffff) {
        var data, xrb, asd,
            bsd;
        try {
            data = urb.vrb(0, 0, spb.qh, spb.rh)
        } catch (wrb) {
            return lsd
        }
        xrb = data.data;
        rsd = urb.cqd(spb.qh, spb.rh);
        bsd = rsd.data;
        var iz = ((cab >> 16) & 0xff) / 255;
        var kz = ((cab >> 8) & 0xff) / 255;
        var lz = (cab & 0xff) / 255;
        var xod = (data.height * data.width * 4);
        for (var mh = xod - 4; mh >= 00; mh -= 4) {
            bsd[mh] = (xrb[mh] * iz) | 0;
            bsd[mh + 1] = (xrb[mh + 1] * kz) | 0;
            bsd[mh + 2] = (xrb[mh + 2] * lz) | 0;
            bsd[mh + 3] = (xrb[mh + 3])
        }
        rsd.data = bsd;
        urb.dqd(rsd, 0, 0)
    }
    return lsd
}

function ssd(spb, jbb, kbb, lbb, mbb, ncb, ocb, tsd, usd, dab) {
    var jsd = spb.rob;
    if (!jsd) return;
    if (!jsd.complete) return;
    eab.globalAlpha = dab;
    vsd(jsd, jbb, kbb, lbb, mbb, ncb, ocb, spb.oh, spb.ph, spb.oh + spb.qh, spb.ph, spb.oh + spb.qh, spb.ph + spb.rh);
    vsd(jsd, ncb, ocb, tsd, usd, jbb, kbb, spb.oh + spb.qh, spb.ph + spb.rh, spb.oh, spb.ph + spb.rh, spb.oh, spb.ph)
}

function vsd(wdd, wsd, xsd, pdb, qdb, rdb, sdb, ysd, zsd, atd, btd, ctd, dtd) {
    eab.fab();
    eab.pcb();
    eab.qcb(wsd, xsd);
    eab.rcb(pdb, qdb);
    eab.rcb(rdb, sdb);
    eab.tcb();
    eab.eqd();
    var etd = ysd * (dtd - btd) - atd * dtd + ctd * btd + (atd - ctd) * zsd;
    if (etd == 0) return;
    var ftd = -(zsd * (rdb - pdb) - btd * rdb + dtd * pdb + (btd - dtd) * wsd) / etd;
    var gtd = (btd * sdb + zsd * (qdb - sdb) - dtd * qdb + (dtd - btd) * xsd) / etd;
    var htd = (ysd * (rdb - pdb) - atd * rdb + ctd * pdb + (atd - ctd) * wsd) / etd;
    var itd = -(atd * sdb + ysd * (qdb - sdb) - ctd * qdb + (ctd - atd) * xsd) / etd;
    var cqb = (ysd * (dtd * pdb - btd * rdb) + zsd * (atd * rdb - ctd * pdb) + (ctd * btd - atd * dtd) * wsd) / etd;
    var eqb = (ysd * (dtd * qdb - btd * sdb) + zsd * (atd * sdb - ctd * qdb) + (ctd * btd - atd * dtd) * xsd) / etd;
    eab.bqd(ftd, gtd, htd, itd, cqb, eqb);
    eab.mob(wdd, 0, 0);
    eab.oab()
};

function rqd(spb, aib, bib, usb, vsb, ux, vx, yx, zx, isb, dab) {
    if (!spb) return;
    if (!spb.rob) return;
    if (!spb.rob.complete) return;
    isb &= 0xffffff;
    eab.globalAlpha = gbb;
    if (aib < spb.om) {
        var jtd = spb.om - aib;
        ux += jtd;
        usb -= jtd;
        aib = 0
    } else {
        aib -= spb.om;
        usb -= spb.om
    } if (bib < spb.pm) {
        var jtd = spb.pm - bib;
        vx += jtd;
        vsb -= jtd;
        bib = 0
    } else {
        bib -= spb.pm;
        vsb -= spb.pm
    } if (usb > (spb.qm - aib - spb.om)) usb = spb.qm - aib - spb.om;
    if (vsb > (spb.rm - bib - spb.pm)) vsb = spb.rm - bib - spb.pm;
    if (usb <= 0 || vsb <= 0) return;
    ux = ~~ux;
    vx = ~~vx;
    if (isb != rpd) {
        var rnd = ynd(spb, isb);
        eab.mob(rnd, aib, bib, usb, vsb, ux, vx, usb * yx, vsb * zx);
        return
    }
    eab.mob(spb.rob, aib + spb.oh, bib + spb.ph, usb, vsb, ux, vx, usb * yx, vsb * zx)
}

function ktd(spb, ux, vx, lu, mu, isb, dab) {
    if (!spb) return;
    if (!spb.rob) return;
    if (!spb.rob.complete) return;
    ux = ~~ux;
    vx = ~~vx;
    var ltd = lu / spb.sm;
    var mtd = mu / spb.tm;
    kqd(spb, 0, 0, ux, vx, ltd, mtd, 0, isb, isb, isb, isb, dab)
}

function wqd(sx, hqb, ux, vx, yx, zx, ay, cab, dab) {
    eab.globalAlpha = dab;
    eab.fillStyle = iab(cab, 1.0);
    eab.font = sx;
    znd(ux, vx, yx, zx, -ay);
    eab.fillText(hqb, 0, 0);
    aod()
}
var ntd = 0,
    otd = 0;

function ptd(qtd) {
    this.rtd = !1;
    this.std = [];
    this.ttd = qtd;
    this.utd = "";
    this.vtd = 0;
    this.wtd = 0
};

function xtd(ytd, ztd) {
    var ugd = aud(ytd, ztd);
    bud = new ptd(ytd);
    bud.utd = ugd;
    bud.cud();
    var oqb = 0;
    for (var mh in bud.std) {
        oqb++;
        break
    }
    if (oqb == 0) return null;
    return bud
}
ptd.prototype.lx = function () {
    while ((this.utd.charCodeAt(this.vtd) != 0x0a) && (this.utd.charCodeAt(this.vtd) != 0x0d) && (this.vtd < this.dud)) {
        this.vtd++
    }
    this.wtd++;
    this.vtd++;
    if (this.vtd >= this.dud) return;
    if ((this.utd.charCodeAt(this.vtd) == 0x0a) && (this.utd.charCodeAt(this.vtd) == 0x0d)) {
        this.vtd++
    }
};
ptd.prototype.eud = function () {
    with(this) {
        if (this.vtd >= dud) return !1;
        var nh = utd.charCodeAt(vtd);
        if (nh == 0x20 || nh == 0x09 || nh == 0x0a || nh == 0x0d || nh == gqb('#') || nh == gqb(';')) {
            return !0
        } else {
            return !1
        }
    }
};
ptd.prototype.ox = function () {
    with(this) {
        while (eud() && (vtd < dud)) {
            var nh = utd.charCodeAt(vtd);
            if (nh == '#' || nh == ';') {
                lx()
            } else if (nh == 0x0a) {
                wtd++
            }
            vtd++
        }
        if (vtd >= dud) return
    }
};
ptd.prototype.fud = function () {
    with(this) {
        ox();
        while ((utd.charAt(vtd) != '[') && (vtd < dud)) {
            vtd++
        }
        if (vtd >= dud) return null;
        vtd++;
        var gud = vtd;
        while ((utd.charAt(vtd) != ']') && (vtd < dud)) {
            vtd++
        }
        if (vtd >= dud) return null;
        var yw = vtd - gud;
        var hud = [];
        hud.iud = utd.substr(gud, yw);
        vtd++;
        return hud
    }
};
ptd.prototype.jud = function (kud) {
    with(this) {
        ox();
        if (vtd >= dud || utd.charAt(vtd) == '[') return !1;
        var gud = vtd;
        var lud = -1;
        while ((utd.charAt(vtd) != '=') && (vtd < dud)) {
            if (eud()) {
                if (lud < 0) lud = vtd
            } else {
                lud = -1
            }
            vtd++
        }
        if (vtd >= dud) return !1;
        if (lud < 0) lud = vtd;
        var yw = lud - gud;
        var mud = utd.substr(gud, yw);
        while ((utd.charAt(vtd) != '=') && (vtd < dud)) {
            vtd++
        }
        if (vtd >= dud) return !1;
        vtd++;
        var nud = wtd;
        ox();
        if (nud != wtd) return !1;
        gud = vtd;
        var oud = -1;
        var nh = utd.charCodeAt(vtd);
        while ((nh != 0x0a) && (nh != 0x0d) && (nh != gqb('#')) && (nh != gqb(';')) && (vtd < dud)) {
            if (nh == 0x20 || nh == 0x09) {
                if (oud < 0) oud = vtd
            } else {
                oud = -1
            } if (nh == gqb('\\')) vtd++;
            vtd++;
            nh = utd.charCodeAt(vtd)
        }
        if (oud >= 0) {
            yw = oud - gud
        } else {
            yw = vtd - gud
        }
        var pud = utd.substr(gud, yw);
        kud[mud] = pud;
        return !0
    }
};
ptd.prototype.cud = function () {
    with(this) {
        if (utd == null) return !1;
        dud = utd.length;
        vtd = 0;
        wtd = 0;
        var hud = fud();
        if (hud == null) {
            utd = null;
            return !1
        }
        std[hud.iud] = hud;
        while (vtd < dud) {
            var bdd = jud(hud);
            if (!bdd) {
                if (vtd < dud) {
                    if (utd.charAt(vtd) == '[') {
                        hud = fud();
                        if (hud == null) {
                            utd = null;
                            return !0
                        }
                        std[hud.iud] = hud
                    }
                }
            }
        }
        utd = null;
        return !0
    }
};
ptd.prototype.qud = function (rud, sud) {
    with(this) {
        var hud = std[rud];
        if (hud != null && hud != undefined) {
            var pud = hud[sud];
            if (pud != undefined) return pud
        }
        return null
    }
};

function tud(uud) {
    try {
        var vud = new XMLHttpRequest();
        vud.open('HEAD', uud, !1);
        vud.send();
        otd = vud.status;
        return vud.status != 404
    } catch (wtb) {
        return !1
    }
}

function wud(xud, yud) {
    try {
        var ifd = !window.XMLHttpRequest ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
        ifd.open(yud ? 'PUT' : 'GET', xud, !1);
        ifd.setRequestHeader('Content-Type', 'text/html');
        ifd.send(yud ? yud : '');
        otd = ifd.status;
        return ifd.responseText
    } catch (wtb) {
        return null
    }
}

function zud(zbd, dcd) {
    if ('localStorage' in window && window['localStorage'] !== null) {
        try {
            localStorage["GameSmile." + zbd] = dcd
        } catch (wrb) {
            return !1
        }
    }
}

function aud(ytd, ztd) {
    var ugd = null;
    if (ztd) {
        if ((ytd.substring(0, 7) == "http://") || (ytd.substring(0, 8) == "https://")) return;
        if ('localStorage' in window && window['localStorage'] !== null) {
            try {
                ugd = localStorage["GameSmile." + ytd]
            } catch (wrb) {
                return null
            }
            if ((ugd == undefined) || (ugd == null)) return null
        }
    } else {
        var avd;
        if ((ytd.substring(0, 7) == "http://") || (ytd.substring(0, 8) == "https://")) {
            avd = ytd
        } else {
            avd = gvc + ytd
        }
        ugd = wud(avd, !1);
        if ((ugd == null) || (ugd == undefined)) return null;
        if (otd == 404) return null
    }
    return ugd
}

function bvd(ytd, ztd) {
    var ugd = null;
    if (ztd) {
        if ('localStorage' in window && window['localStorage'] !== null) {
            try {
                if (localStorage["GameSmile." + ytd]) return !0;
                return !1
            } catch (wrb) {
                return !1
            }
        }
    } else {
        return tud(gvc + ytd)
    }
}
var cvd = new Array("StepEvent", "DrawEvent", "LeftButtonPressed", "RightButtonPressed", "NoButtonPressed");
var dvd = new bpb(0, 0, 0, 0);
var evd = null;
var fvd = -1;
var gvd = -1;

function lzc() {
    this.tac = []
}

function hvd(ivd, jvd, av, kvd, lvd) {
    this.tac = [];
    this.oh = ivd;
    this.ph = jvd;
    this.gyb = ivd;
    this.hyb = jvd;
    this.mvd = ivd;
    this.nvd = jvd;
    this.km = 0;
    this.lm = 0;
    this.ovd = 0;
    this.vl = 0;
    this.pvd = 0;
    this.as = 0;
    this.zr = 270;
    this.qvd = kvd;
    this.am = av;
    this.yxb = !0;
    for (var mh = 0; mh <= (oac - 1); mh++) {
        oo(this, "__alarm__", mh, -1)
    }
    this.xib = !0;
    this.xh = !0;
    this.rvd = !1;
    this.gj = 0;
    this.qfb = new bpb(0, 0, 0, 0);
    this.wfb = 0;
    this.xr = 0;
    this.svd = 0;
    this.tvd = 0;
    this.uvd = 0;
    this.vvd = 0;
    this.wvd = 0;
    this.xvd = 1;
    this.yvd = 1;
    this.cs = 0;
    this.zvd = 1;
    this.awd = 0xffffff;
    this.pr = 1;
    this.mxb = -1;
    this.bwd = -1;
    this.iyb = 0;
    this.jyb = 0;
    this.cwd = 0;
    this.jnb = 1;
    this.dwd = 0;
    this.ewd = 0;
    this.wmb = 0;
    this.fwd = 0;
    this.gwd = 0;
    this.dac = -1;
    this.hac = 0;
    this.kac = 1;
    this.eac = !1;
    this.iac = !1;
    this.hwd = -1;
    this.iwd = !1;
    this.ueb = !1;
    this.jwd = null;
    this.kwd = !1;
    this.ofb = !0;
    this.xzb = !1;
    this.xfb = null;
    this.vfb(kvd, lvd, !0);
    this.wfb = this.xfb.yfb;
    var zfb = agb.dv(this.wfb);
    if (zfb) {
        this.qfb.left = zfb.qfb.left;
        this.qfb.rfb = zfb.qfb.rfb;
        this.qfb.top = zfb.qfb.top;
        this.qfb.bottom = zfb.qfb.bottom
    }
}
hvd.prototype.xn = function (ux) {
    this.oh = ux;
    this.ofb = !0
};
hvd.prototype.ao = function (vx) {
    this.ph = vx;
    this.ofb = !0
};
hvd.prototype.bs = function (lwd) {
    this.cs = lwd;
    this.ofb = !0
};
hvd.prototype.io = function (mwd) {
    var nwd = this.owd();
    if (mwd < 0) {
        mwd = nwd - tzc(Math.abs(mwd), nwd)
    } else {
        mwd = tzc(Math.abs(mwd), nwd)
    }
    this.xr = mwd
};
hvd.prototype.owd = function () {
    var zfb = agb.dv(this.wfb);
    if (!zfb) return 0;
    return zfb.pob.length
};
hvd.prototype.is = function () {
    var zfb = agb.dv(this.wfb);
    if (!zfb) return 0;
    return zfb.width * this.xvd
};;
hvd.prototype.pwd = function (wsb) {
    this.gj = wsb;
    dfb.qwd[dfb.qwd.length] = this
};
hvd.prototype.web = function (rwd, rfd) {
    if ((this.oh == rwd) && (this.ph == rfd)) return;
    this.oh = rwd;
    this.ph = rfd;
    this.ofb = !0
};
hvd.prototype.vfb = function (tfb, swd, twd) {
    this.qvd = tfb;
    if (this.xfb != null) {
        this.xfb.uwd(this);
        this.xfb = null
    }
    if (tfb == -1) tfb = 0;
    this.xfb = cfb.dv(tfb);
    if (this.xfb != null) {
        if (swd) {
            this.xfb.vwd(this)
        }
        this.kxb = this.xfb.kxb;
        this.mxb = this.xfb.wwd;
        if (twd) {
            this.gj = this.xfb.xwd
        } else {
            this.pwd(this.xfb.xwd)
        }
        this.xib = this.xfb.ywd;
        this.xh = this.xfb.zwd;
        this.rvd = this.xfb.axd;
        this.ofb = !0
    }
};
hvd.prototype.bxd = function () {
    with(this) {
        if (this.km == 0) {
            if (this.lm > 0) {
                this.ovd = 270
            } else if (this.lm < 0) {
                this.ovd = 90
            } else {
                this.ovd = 0
            }
        } else {
            var tdb = cxd(180 * (Math.atan2(this.lm, this.km)) / lgb);
            if (tdb <= 0) {
                this.ovd = -tdb
            } else {
                this.ovd = 360.0 - tdb
            }
        } if (Math.abs(this.ovd - jz(this.ovd)) < 0.0001) {
            this.ovd = jz(this.ovd)
        }
        this.ovd = tzc(this.ovd, 360.0);
        this.vl = Math.sqrt(vhb(this.km) + vhb(this.lm));
        if (Math.abs(this.vl - jz(this.vl)) < 0.0001) this.vl = jz(this.vl)
    }
};
hvd.prototype.dxd = function () {
    this.km = this.vl * cxd(Math.cos(this.ovd * 0.0174532925));
    this.lm = -this.vl * cxd(Math.sin(this.ovd * 0.0174532925));
    if (Math.abs(this.km - jz(this.km)) < 0.0001) {
        this.km = jz(this.km)
    }
    if (Math.abs(this.lm - jz(this.lm)) < 0.0001) {
        this.lm = jz(this.lm)
    }
};

function cxd(exd) {
    return tdb = (~~(exd * 1000000)) / 1000000.0
}
hvd.prototype.fxd = function (gxd, zcb) {
    this.km += zcb * cxd(Math.cos(gxd * 0.0174532925));
    this.lm -= zcb * cxd(Math.sin(gxd * 0.0174532925));
    this.bxd()
};
hvd.prototype.hxd = function () {
    if (this.pvd != 0.0) {
        var ixd;
        if (this.vl > 0) {
            ixd = this.vl - this.pvd;
        } else {
            ixd = this.vl + this.pvd
        } if ((this.vl > 0) && (ixd < 0)) {
            this.ur(0)
        } else if ((this.vl < 0) && (ixd > 0)) {
            this.ur(0)
        } else if (this.vl != 0) {
            this.ur(ixd)
        }
    }
    if (this.as != 0) {
        this.fxd(this.zr, this.as)
    }
};
hvd.prototype.jxd = function () {
    return agb.kxd(this.wfb)
};
hvd.prototype.ffb = function (kbd, rnb, pz, lxd) {
    var mxd = evd;
    var nxd = fvd;
    var oxd = gvd;
    var ugb = !1;
    var pxd = !1;
    if (kbd == kyb) {
        var qxd = lxd.xfb;
        while (qxd != null && !pxd) {
            var reb = this.xfb;
            while (reb != null && !pxd) {
                if (reb.xz[kbd]) {
                    if (reb.add[qxd.ycd]) {
                        evd = reb;
                        fvd = kbd;
                        gvd = qxd.ycd;
                        ugb = reb.ffb(kbd, qxd.ycd, pz, lxd);
                        pxd = !0;
                        break
                    }
                }
                reb = reb.xcd
            }
            qxd = qxd.xcd
        }
    } else {
        var reb = this.xfb;
        var rxd = kbd | rnb;
        while (reb != null) {
            if (reb.xz[rxd]) {
                evd = reb;
                fvd = kbd;
                gvd = rnb;
                ugb = reb.ffb(kbd, rnb, pz, lxd);
                break
            }
            reb = reb.xcd
        }
    }
    evd = mxd;
    fvd = nxd;
    gvd = oxd;
    return ugb
};
hvd.prototype.sr = function (bv) {
    if (this.km == bv) return;
    this.km = bv;
    this.bxd()
};
hvd.prototype.rr = function (bv) {
    if (this.lm == bv) return;
    this.lm = bv;
    this.bxd()
};
hvd.prototype.whb = function (bv) {
    this.ovd = tzc(bv, 360.0);
    this.dxd()
};
hvd.prototype.ur = function (bv) {
    if (this.vl == bv) return;
    this.vl = bv;
    this.dxd()
};
hvd.prototype.pfb = function () {
    var sxd, qu;
    if (this.mxb >= 0) {
        sxd = agb.dv(this.mxb);
    } else {
        sxd = agb.dv(this.wfb);
    }
    var qfb = this.qfb;
    if (sxd === null) {
        this.qfb.left = -100000;
        this.qfb.top = -100000;
        this.qfb.rfb = -100000;
        this.qfb.bottom = -100000;
        this.kwd = !1
    } else if (this.cs == 0) {
        var txd = sxd.qfb;
        qfb.left = jz(this.oh + this.xvd * (txd.left - sxd.eg));
        qfb.rfb = jz(this.oh + this.xvd * (txd.rfb - sxd.eg + 1) - 1);
        if (qfb.left > qfb.rfb) {
            qu = qfb.left;
            qfb.left = qfb.rfb;
            qfb.rfb = qu
        }
        qfb.top = jz(this.ph + this.yvd * (txd.top - sxd.fg));
        qfb.bottom = jz(this.ph + this.yvd * (txd.bottom - sxd.fg + 1) - 1);
        if (qfb.top > qfb.bottom) {
            qu = qfb.top;
            qfb.top = qfb.bottom;
            qfb.bottom = qu
        }
        this.kwd = sxd.uxd()
    } else {
        var txd = sxd.qfb;
        var vxd, wxd;
        vxd = this.xvd * (txd.left - sxd.eg);
        wxd = this.xvd * (txd.rfb - sxd.eg + 1) - 1;
        var xxd, yxd;
        xxd = this.yvd * (txd.top - sxd.fg);
        yxd = this.yvd * (txd.bottom - sxd.fg + 1) - 1;
        var cod, uab;
        cod = Math.cos(this.cs * lgb / 180.0);
        uab = Math.sin(this.cs * lgb / 180.0);
        var zxd = cod * wxd;
        var ayd = cod * vxd;
        var byd = uab * yxd;
        var cyd = uab * xxd;
        var qu;
        if (zxd < ayd) {
            qu = ayd;
            ayd = zxd;
            zxd = qu
        }
        if (byd < cyd) {
            qu = cyd;
            cyd = byd;
            byd = qu
        }
        qfb.left = (this.oh + ayd + cyd) | 0;
        qfb.rfb = (this.oh + zxd + byd) | 0;
        var dyd = cod * yxd;
        var eyd = cod * xxd;
        var fyd = uab * wxd;
        var gyd = uab * vxd;
        if (dyd < eyd) {
            qu = eyd;
            eyd = dyd;
            dyd = qu
        }
        if (fyd < gyd) {
            qu = gyd;
            gyd = fyd;
            fyd = qu
        }
        qfb.top = (this.ph + eyd - fyd) | 0;
        qfb.bottom = (this.ph + dyd - gyd) | 0;
        this.kwd = sxd.uxd()
    }
    this.qfb = qfb;
    this.ofb = !1
};
hvd.prototype.hyd = function (jbb, kbb, lbb, mbb, iyd) {
    if (this.ueb) return !1;
    if (this.ofb) this.pfb();
    var qfb = this.qfb;
    if (xab(jbb, lbb) >= qfb.rfb + 1) return !1;
    if (yab(jbb, lbb) < qfb.left) return !1;
    if (xab(kbb, mbb) >= qfb.bottom + 1) return !1;
    if (yab(kbb, mbb) < qfb.top) return !1;
    if ((!iyd) || (!this.kwd)) return !0;
    var bob;
    if (this.mxb < 0) {
        bob = agb.dv(this.wfb)
    } else {
        bob = agb.dv(this.mxb)
    }
    if ((bob === null) || (bob.lob == 0)) return !1;
    dvd.left = jz(xab(jbb, lbb));
    dvd.top = jz(xab(kbb, mbb));
    dvd.rfb = jz(yab(jbb, lbb));
    dvd.bottom = jz(yab(kbb, mbb));
    var zab = bob.jyd(Math.floor(this.xr), qfb, jz(this.oh), jz(this.ph), this.xvd, this.yvd, this.cs, dvd);
    return zab
};
hvd.prototype.afb = function (pz, iyd) {
    if (!(this == pz) && !this.ueb && !pz.ueb) {
        if (this.ofb) this.pfb();
        if (pz.ofb) pz.pfb();
        var kyd = pz.qfb;
        var lyd = this.qfb;
        if (kyd.left >= (lyd.rfb + 1)) return !1;
        if ((kyd.rfb + 1) <= lyd.left) return !1;
        if (kyd.top >= (lyd.bottom + 1)) return !1;
        if ((kyd.bottom + 1) <= lyd.top) return !1;
        if (!iyd || (!this.kwd && !pz.kwd)) return !0;
        var myd = null;
        var nyd = null;
        if (this.mxb < 0) {
            myd = agb.dv(this.wfb)
        } else {
            myd = agb.dv(this.mxb)
        } if ((myd == null) || (myd.lob == 0)) return !1;
        if (pz.mxb < 0) {
            nyd = agb.dv(pz.wfb)
        } else {
            nyd = agb.dv(pz.mxb)
        } if ((nyd == null) || (nyd.lob == 0)) return !1;
        return myd.oyd(this.xr | 0, this.qfb, jz(this.oh), jz(this.ph), this.xvd, this.yvd, this.cs, nyd, pz.xr | 0, pz.qfb, jz(pz.oh), jz(pz.ph), pz.xvd, pz.yvd, pz.cs)
    }
    return !1
};
hvd.prototype.xmb = function (fjb, ajb, pyd, qyd, cnb, ryd) {
    this.bwd = -1;
    if (fjb < 0) return;
    var dnb = enb.ng[fjb];
    if (!dnb) return;
    if (dnb.length <= 0) return;
    if (pyd < 0) return;
    this.bwd = fjb;
    this.cwd = ajb;
    if (this.cwd >= 0) {
        this.iyb = 0
    } else {
        this.iyb = 1
    }
    this.jyb = this.iyb;
    this.jnb = pyd;
    this.dwd = qyd;
    this.wmb = ryd;
    if (cnb) {
        if (this.cwd >= 0) {
            this.web(dnb.syd(0), dnb.tyd(0))
        } else {
            this.web(dnb.syd(1), dnb.tyd(1))
        }
    }
    this.fwd = this.oh;
    this.gwd = this.ph
};
hvd.prototype.lyb = function () {
    var fnb, udb, vdb;
    if (this.bwd < 0) return !1;
    if (this.cwd == 0) return !1;
    var dnb = enb.ng[this.bwd];
    if (!dnb) return;
    if (dnb.length <= 0) return;
    var uyd = !1;
    var vyd = this.dwd * Math.PI / 180.0;
    var wyd = dnb.inb(this.iyb);
    udb = wyd.oh;
    vdb = wyd.ph;
    fnb = wyd.vl;
    wyd = null;
    fnb = fnb / (100 * this.jnb);
    this.iyb = this.iyb + this.cwd * fnb / dnb.length;
    var xyd = dnb.inb(0);
    if ((this.iyb >= 1) || (this.iyb <= 0)) {
        uyd = !0;
        switch (this.wmb) {
        case 0:
            {
                this.iyb = 1;
                this.bwd = -1;
                break
            }
        case 1:
            {
                if (this.iyb < 0) {
                    this.iyb++
                } else {
                    this.iyb--
                }
                break
            }
        case 2:
            {
                var yyd = dnb.inb(1);
                udb = yyd.oh - xyd.oh;
                vdb = yyd.ph - xyd.ph;
                var zyd = this.jnb * (udb * Math.cos(vyd) + vdb * Math.sin(vyd));
                var azd = this.jnb * (vdb * Math.cos(vyd) - udb * Math.sin(vyd));
                if (this.iyb < 0) {
                    this.fwd = this.fwd - zyd;
                    this.gwd = this.gwd - azd;
                    this.iyb++;
                } else {
                    this.fwd = this.fwd + zyd;
                    this.gwd = this.gwd + azd;
                    this.iyb--
                }
                break
            }
        case 3:
            {
                if (this.iyb < 0) {
                    this.iyb = -this.iyb;
                    this.cwd = Math.abs(this.cwd)
                } else {
                    this.iyb = 2 - this.iyb;
                    this.cwd = -Math.abs(this.cwd)
                }
                break
            }
        default:
            {
                this.iyb = 1;
                this.bwd = -1
            }
        }
    }
    wyd = dnb.inb(this.iyb);
    udb = wyd.oh - xyd.oh;
    vdb = wyd.ph - xyd.ph;
    var thb = this.fwd + this.jnb * (udb * Math.cos(vyd) + vdb * Math.sin(vyd));
    var uhb = this.gwd + this.jnb * (vdb * Math.cos(vyd) - udb * Math.sin(vyd));
    this.sr(thb - this.oh);
    this.rr(uhb - this.ph);
    this.ur(0);
    this.web(thb, uhb);
    return uyd
};
hvd.prototype.bzd = function (rnb) {
    var zab = -1;
    if ((rnb >= 0) && (rnb < oac)) {
        zab = rac(this, "__alarm__", rnb)
    }
    return zab
};
hvd.prototype.czd = function (rnb, bv) {
    if ((rnb >= 0) && (rnb < oac)) {
        oo(this, "__alarm__", rnb, bv)
    }
};
hvd.prototype.nxb = function () {
    if (this.ofb) {
        this.pfb()
    }
    return this.qfb
};
hvd.prototype.dzd = function (ezd, zbb) {
    var qh, rh;
    if (!aob(this.wfb)) {
        qh = rh = 0
    } else {
        var bob = agb.dv(this.wfb);
        qh = bob.width * this.xvd;
        rh = bob.height * this.yvd
    } if (ezd) {
        if ((this.km < 0) && (this.oh < 0)) {
            this.web(this.oh + dfb.cxb() + qh,
                this.ph)
        }
        if ((this.km > 0) && (this.oh >= dfb.cxb())) {
            this.web(this.oh - dfb.cxb() - qh, this.ph)
        }
    }
    if (zbb) {
        if ((this.lm < 0) && (this.ph < 0)) {
            this.web(this.oh, this.ph + dfb.bxb() + rh)
        }
        if ((this.lm > 0) && (this.ph >= dfb.bxb())) {
            this.web(this.oh, this.ph - dfb.bxb() - rh)
        }
    }
};

function wad() {
    this.fzd = new vu();
    this.fzd.wu = !0;
    this.gzd = []
}
wad.prototype.nib = function () {
    this.gzd = [];
    this.fzd.nib()
};
wad.prototype.wib = function () {
    return this.fzd.nfb
};
wad.prototype.yu = function (teb) {
    this.gzd[teb.am] = teb;
    this.fzd.yu(teb)
};
wad.prototype.cad = function (av) {
    return this.gzd[av]
};
wad.prototype.dv = function (av) {
    var teb = this.gzd[av];
    if (teb != null) return teb;
    var reb = cfb.dv(av);
    if (reb != null) {
        teb = reb.hzd.nfb[0];
        if (teb != null) return teb
    }
    return null
};
wad.prototype.izd = function (pz) {
    this.fzd.cgd(pz);
    var am = pz.am;
    this.gzd[am] = null
};
wad.prototype.jzd = function () {
    var nfb = dfb.mfb.nfb;
    for (var xl = 0; xl < nfb.length; xl++) {
        var teb = nfb[xl];
        teb.gyb = teb.oh;
        teb.hyb = teb.ph;
        teb.jyb = teb.iyb
    }
};
wad.prototype.kzd = function () {
    var nfb = dfb.mfb.nfb;
    for (var xl = 0; xl < nfb.length; xl++) {
        var teb = nfb[xl];
        teb.hxd();
        if (teb.lyb()) {
            teb.ffb(scc, 0, teb, teb)
        }
        teb.oh += teb.km;
        teb.ph += teb.lm;
        teb.ofb = !0
    }
};
wad.prototype.lzd = function () {
    var nfb = dfb.mfb.nfb;
    for (var xl = 0; xl < nfb.length; xl++) {
        var teb = nfb[xl];
        teb.xr += teb.pr;
        var nwd = teb.jxd();
        if (teb.xr >= nwd) {
            teb.xr -= nwd;
            var xfb = teb.xfb;
            if (xfb.kxb[rcc]) {
                teb.ffb(rcc, 0, teb, teb)
            }
        }
    }
};
wad.prototype.ffb = function (kbd, rnb) {
    var mzd = !0;
    if (dfb) {
        var rxd = kbd;
        if (rxd != kyb) rxd |= rnb;
        var nfb = dfb.mfb.nfb;
        for (var xl = 0; xl < nfb.length; xl++) {
            var teb = nfb[xl];
            if (!teb.ueb) {
                var xfb = teb.xfb;
                if (xfb.kxb[rxd]) {
                    mzd = teb.ffb(kbd,
                        rnb, teb, teb)
                }
            }
        }
    }
    return mzd
};
var un;

function wyc(av) {
    var teb = yzb.dv(av);
    if (!teb) {
        teb = cfb.dv(av);
        if (!teb) teb = teb.qzb.dv(0)
    }
    return teb
}

function bzc(av) {
    var teb = yzb.dv(av);
    if (!teb) {
        teb = cfb.dv(av);
        if (!teb) {
            ax("Unknown instance ID: " + av);
            return jvc
        }
        teb = teb.qzb.dv(0);
        ax("Warning: Object ID being used to access instance" + av);
    }
    return teb
}
var nzd = 256;
var ozd = 3;
var pzd = 1024;
var qzd = 1;
var rzd = 2;
var szd = 4;
var au = 1;
var yt = 2;
var zt = 0x80000000;
var tzd = 128;
var uzd = 0,
    tt = 0,
    ut = 0,
    vt = 0,
    vzd = -1,
    wzd = 0,
    xzd = 0,
    yzd = 0,
    zzd = 0,
    aae = 0;
bae = !1;
var cae = [];
var dae = [];
var eae = [];
var fae = [];
var gae = [];
var wt = [];
var hae = 0;
var iae = {
    8: String.fromCharCode(8),
    9: 0,
    13: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    27: 0,
    22: 0,
    32: " ",
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 0,
    39: 0,
    40: 0,
    45: 0,
    46: 0,
    47: 0,
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    58: "0",
    59: ";",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    91: 0,
    92: 0,
    93: 0,
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    112: 0,
    113: 0,
    114: 0,
    115: 0,
    116: 0,
    117: 0,
    118: 0,
    119: 0,
    120: 0,
    121: 0,
    122: 0,
    123: 0,
    144: 0,
    145: 0,
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "'",
    219: "[",
    220: "\\",
    221: "]",
    222: "#",
    223: "`"
};
var jae = {
    8: String.fromCharCode(8),
    9: 0,
    13: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    27: 0,
    22: 0,
    32: " ",
    34: 0,
    35: 0,
    36: 0,
    37: 0,
    38: 0,
    39: 0,
    40: 0,
    45: 0,
    46: 0,
    47: 0,
    48: ")",
    49: "!",
    50: "\"",
    51: "\£",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    58: ")",
    59: ":",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: 0,
    92: 0,
    93: 0,
    96: "0",
    97: "1",
    98: "2",
    99: "3",
    100: "4",
    101: "5",
    102: "6",
    103: "7",
    104: "8",
    105: "9",
    106: "*",
    107: "+",
    109: "-",
    110: ".",
    111: "/",
    112: 0,
    113: 0,
    114: 0,
    115: 0,
    116: 0,
    117: 0,
    118: 0,
    119: 0,
    120: 0,
    121: 0,
    122: 0,
    123: 0,
    144: 0,
    145: 0,
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "@",
    219: "{",
    220: "|",
    221: "}",
    222: "~",
    223: "¬"
};

function kae() {
    bae = !0
}

function lae() {
    bae = !1;
    mae()
}

function nae(which) {
    if (!document.getElementById) return;
    if (which.style.display == "block") {
        which.style.display = "none"
    } else {
        which.style.display = "block"
    }
}

function oae(pae, qae) {
    if (pae) {
        if (pae.tf) {
            if (pae.tf.wm) {
                if (pae.tf.wm.zm) {
                    if (pae.tf.wm.zm == tf.wm.zm) {
                        pae.focus();
                        qae.focus();
                        return !0
                    }
                }
            }
        }
    }
    return !1
}

function rae() {
    var ftb = document.getElementById(hob);
    var sae;
    if ((fub == gbc) || (fub == fbc) || (fub == hbc) || (fub == ibc)) {
        sae = parent.frames;
        for (var tae = 0; tae < sae.length; tae++) {
            var uae = sae[tae];
            if (oae(uae,
                ftb)) break
        }
    } else {
        sae = parent.document.getElementsByTagName("IFRAME");
        for (var tae in sae) {
            var uae = sae[tae].contentWindow;
            if (oae(uae, ftb)) break
        }
    }
}

function vae(wae) {
    if (wae.repeat) {
        return
    }
    var xae;
    if (wae == null) {
        xae = window.event.which;
        if (xae == 122) return;
        if (xae != 121) window.event.preventDefault();
        else fwc = !0;
        window.event.preventDefault()
    } else {
        xae = wae.which;
        if (xae == 122) return;
        if (xae == 120) {
            if (uw) nae(document.getElementById('debug_console'))
        } else if (xae != 121) wae.preventDefault();
        else {
            if (!yvc) yae();
            fwc = !0
        }
        wae.preventDefault()
    }
    if (cae[xae]) return;
    cae[xae] = 1;
    dae[xae] = 1;
    aae = xae;
    if (fub == ebc) {
        zzd = wae.char
    } else {
        if (wae.shiftKey) {
            zzd = jae[xae]
        } else {
            zzd = iae[xae]
        }
    } if (!zzd) zzd = ""
}

function zae(wae) {
    var xae;
    if (wae == null) {
        xae = window.event.which;
        if (xae == 122) return;
        window.event.preventDefault()
    } else {
        xae = wae.which;
        if (xae == 122) return;
        wae.preventDefault()
    }
    eae[xae] = 1;
    cae[xae] = 0;
    return !1
}

function abe(bbe) {
    {
        tt = bbe.pageX;
        ut = bbe.pageY;
        wt[bbe.button].oh = tt;
        wt[bbe.button].ph = ut
    }
}

function cbe(bbe) {
    {
        if (!bae) {
            rae()
        }
        uzd = bbe.button;
        if (uzd == 2) uzd = 1;
        else if (uzd == 1) uzd = 2;
        xzd = vzd;
        vzd = uzd;
        vt |= (1 << uzd); {
            wt[bbe.button].xt = yt | zt | au;
            wt[bbe.button].oh = bbe.pageX - nwc;
            wt[bbe.button].ph = bbe.pageY - pwc
        }
    }
    return bbe
}

function dbe(bbe) {
    uzd = bbe.button;
    if (uzd == 2) uzd = 1;
    else if (uzd == 1) uzd = 2;
    yzd = wzd;
    wzd = uzd;
    vt &= ~(1 << uzd);
    vzd = -1;
    wt[bbe.button].xt = 0;
    return !1
}

function uad() {
    this.ebe = "a";
    this.fbe = [];
    this.gbe = this.hbe = -1;
    this.egb = [];
    this.ibe = [];
    this.jbe = [];
    this.kbe = this.lbe = 0;
    this.uzb = [];
    this.wzb = [];
    this.vzb = [];
    this.mbe = this.nbe = !1;
    this.obe = [];
    this.pbe = this.qbe = this.rbe = this.sbe = this.wyb = this.xyb = this.tbe = 0;
    for (var uu = 0; uu < pzd; uu++) {
        this.fbe[uu] = ""
    }
    for (var uu = 0; uu < nzd; uu++) {
        this.egb[uu] = this.ibe[uu] = this.jbe[uu] = !1;
        this.obe[uu] = uu
    }
    for (var uu = 0; uu < ozd; uu++) {
        this.uzb[uu] = this.wzb[uu] = this.vzb[uu] = !1
    }
    this.ube = vbe;
    this.wbe = xbe;
    this.ybe = ybe;
    this.zbe = zbe;
    this.ace = ace;
    this.bce = bce;
    this.cce = cce;
    this.dce = dce;
    this.ece = ece;
    this.fce = fce;
    this.gce = gce;
    this.hce = hce;
    this.ice = ice;
    this.jce = jce;
    this.kce = kce;
    this.lce = lce;
    this.mce = mce;
    this.nce = nce;
    this.oce = oce;
    this.pce = pce;
    this.qce = qce;
    this.rce = rce;
    this.sce = sce;
    this.tce = uce;
    this.vce = wce;
    this.xce = yce;
    this.zce = zce;
    for (var uu = 0; uu < nzd; uu++) {
        cae[uu] = eae[uu] = !1
    }
    cu.onmousemove = abe;
    cu.onmousedown = cbe;
    cu.onmouseup = dbe;
    document.body.onfocusin = kae;
    document.body.onfocusout = lae;
    document.onfocusin = kae;
    document.onfocusout = lae;
    window.ade = kae;
    window.bde = lae;
    window.onkeydown = function () {
        vae(arguments[0] || window.event);
    };
    window.onkeyup = function () {
        zae(arguments[0] || window.event)
    };
    gae = new Array(tzd);
    wt = new Array(tzd);
    for (var cde = 0; cde < tzd; cde++) {
        gae[cde] = new dde();
        wt[cde] = new dde()
    }
}

function dde() {
    this.xt = 0;
    this.oh = 0;
    this.ph = 0
}

function mae() {
    ede();
    fde();
    rq.qjd = 0;
    rq.qjd = "";
    aae = 0;
    zzd = ""
}
uad.prototype.nib = function () {
    this.gde();
    this.sce();
    rq.qjd = 0;
    rq.rjd = 0;
    rq.qjd = "";
    aae = 0;
    zzd = "";
    rq.sjd = "";
    rq.tjd = "";
};

function ybe() {
    return this.ebe
}

function zbe(hde) {
    this.ebe = ond
}

function ace() {
    return this.hbe
}

function bce() {
    return this.gbe
}

function cce(nv) {
    if (nv < 0 || nv > 255) return !1;
    this.hbe = nv
}

function dce(nv) {
    if (nv < 0 || nv > 255) return !1;
    this.gbe = nv
}

function ece(nv) {
    if (nv < 0 || nv > 255) return !1;
    return this.egb[nv]
}

function fce(nv) {
    if (nv < 0 || nv > 255) return !1;
    return this.jbe[nv]
}

function gce(nv) {
    if (nv < 0 || nv > 255) return !1;
    return this.ibe[nv]
}

function hce(nv) {
    if (nv < 0 || nv > 255) return;
    this.egb[nv] = 0;
    this.jbe[nv] = 0;
    this.ibe[nv] = 0;
}
uad.prototype.gde = function () {
    this.hbe = 0;
    this.gbe = 0;
    this.ebe = 0;
    for (var mh = 0; mh <= nzd; mh++) {
        this.egb[mh] = 0;
        this.jbe[mh] = 0;
        this.ibe[mh] = 0
    }
};

function ede() {
    for (var mh = 0; mh < nzd; mh++) {
        dae[mh] = 0;
        eae[mh] = 0;
        cae[mh] = 0
    }
}

function ice() {
    return this.kbe
}

function jce() {
    return this.lbe
}

function kce(ide) {
    if ((ide < 1) || (ide > 3)) return;
    this.kbe = ide
}

function lce(ide) {
    if ((ide < 1) || (ide > 3)) return;
    this.lbe = ide
}

function mce(ide) {
    ide--;
    if (ide >= 0 && ide < ozd) {
        return this.uzb[ide]
    }
    return !1
}

function nce(ide) {
    ide--;
    if (ide >= 0 && ide < ozd) {
        return this.vzb[ide];
    }
}

function oce(ide) {
    ide--;
    if (ide >= 0 && ide < ozd) {
        return this.wzb[ide]
    }
    return !1
}

function pce() {
    return this.nbe
}

function qce() {
    return this.mbe
}

function rce(ide) {
    ide--;
    if (ide >= 0 && ide < ozd) {
        this.uzb[ide] = !1;
        this.vzb[ide] = !1;
        this.wzb[ide] = !1
    }
}

function sce() {
    this.kbe = 0;
    this.lbe = 0;
    for (var mh = 0; mh <= ozd; mh++) {
        this.uzb[mh] = !1;
        this.vzb[mh] = !1;
        this.wzb[mh] = !1
    }
    this.nbe = !1;
    this.mbe = !1
}

function fde() {
    yzd = -1;
    wzd = -1;
    vzd = -1;
    vt = 0;
    wt[0].xt = 0;
    wt[0].oh = 0;
    wt[0].ph = 0;
    uzd = -1
}

function vbe() {
    for (var cde = 0; cde < wt.length; cde++) {
        gae[cde].xt = wt[cde].xt;
        gae[cde].oh = wt[cde].oh;
        gae[cde].ph = wt[cde].ph;
        wt[cde].xt &= ~au
    }
    if (rq.qjd != 0) rq.rjd = rq.qjd;
    rq.qjd = aae;
    if (aae) {
        if (zzd) {
            if (aae == 13) {} else if (aae == 8) {
                rq.sjd = zzd;
                if (rq.tjd.length > 0) {
                    rq.tjd = rq.tjd.substring(0, rq.tjd.length - 1)
                }
            } else {
                rq.sjd = zzd;
                rq.tjd += rq.sjd;
                if (rq.tjd.length > 1024) {
                    rq.tjd = rq.tjd.substring(1, rq.tjd.length - 1)
                }
            }
        }
        aae = 0
    }
    this.wyb = tt;
    this.xyb = ut;
    this.qbe = vt;
    if ((this.qbe & 1) != 0) {
        this.uzb[0] = 1;
        if ((this.rbe ^ this.qbe) != 0) {
            this.vzb[0] = 1
        }
    } else {
        this.uzb[0] = 0;
        if ((this.qbe ^ this.rbe) == 1) {
            this.wzb[0] = 1
        }
    } if ((this.qbe & 2) != 0) {
        this.uzb[1] = 1;
        if ((this.rbe ^ this.qbe) != 0) {
            this.vzb[1] = 1
        }
    } else {
        this.uzb[1] = 0;
        if ((this.qbe ^ this.rbe) == 2) {
            this.wzb[1] = 1
        }
    } if ((this.qbe & 4) != 0) {
        this.uzb[2] = 1;
        if ((this.rbe ^ this.qbe) != 0) {
            this.vzb[2] = 1
        }
    } else {
        this.uzb[2] = 0;
        if ((this.qbe ^ this.rbe) == 2) {
            this.wzb[2] = 1
        }
    }
    this.rbe = this.qbe;
    rq.yyb = this.wyb;
    rq.azb = this.xyb;
    rq.ojd = vzd + 1;
    rq.pjd = xzd;
    this.zce()
}

function zce() {
    var jde = 0;
    var kde = 0;
    var qh = dfb.cxb();
    var rh = dfb.bxb();
    var nyb = dfb.oyb ? dfb.qyb : pyb;
    if (nyb[0].xh) {
        qh = nyb[0].irb;
        rh = nyb[0].jrb
    }
    for (var cde in gae) {
        var lde = gae[cde];
        if ((lde.xt & zt) != 0) {
            kde = 1;
            for (var mde in fae) {
                var nde = fae[mde];
                if ((nde.ode & qzd) != 0) {
                    var oh = (qh * lde.oh) / ipd;
                    var ph = (rh * lde.ph) / jpd;
                    if ((oh >= nde.oh) && (oh < nde.rdb) && (ph >= nde.ph) && (ph < nde.sdb)) {
                        jde |= kde
                    }
                }
                kde <<= 1
            }
            lde.xt = 0
        }
    }
    kde = 1;
    var pde = hae ^ jde;
    for (var mde in fae) {
        var nde = fae[mde];
        if ((nde.ode & qzd) != 0) {
            var qde = jde & kde;
            var xw = pde & kde;
            if (nde.rde != 0) {
                this.jbe[nde.rde] |= (qde && xw);
                this.egb[nde.rde] |= (qde && !xw);
                this.ibe[nde.rde] |= (!qde && xw)
            } else {
                this.vzb[nde.button - 1] |= (qde && xw);
                this.uzb[nde.button - 1] |= (qde && !xw);
                this.wzb[nde.button - 1] |= (!qde && xw)
            }
        }
        kde <<= 1
    }
    hae = jde
}

function tce(sde) {
    var nfb = dfb.mfb.nfb;
    var wae = dcc | sde;
    for (var bfb = 0; bfb < nfb.length; bfb++) {
        var teb = nfb[bfb];
        var reb = teb.xfb;
        if (reb.kxb[wae]) {
            teb.ffb(dcc, sde, teb, teb)
        }
    }
}

function tde(ude) {
    var nfb = dfb.mfb.nfb;
    var wae = gcc | ude;
    for (var bfb = 0; bfb < nfb.length; bfb++) {
        var teb = nfb[bfb];
        var reb = teb.xfb;
        if (reb.kxb[wae]) {
            teb.ffb(gcc, ude, teb, teb)
        }
    }
}

function xce(vde) {
    var nfb = dfb.mfb.nfb;
    var wae = hcc | vde;
    for (var bfb = 0; bfb < nfb.length; bfb++) {
        var teb = nfb[bfb];
        var reb = teb.xfb;
        if (reb.kxb[wae]) {
            teb.ffb(hcc, vde, teb, teb)
        }
    }
}

function uce() {
    var wde = 0;
    for (var mh = 2; mh < nzd; mh++) {
        if (this.egb[mh]) {
            wde = 1;
            tce(mh)
        }
    }
    tce(wde)
}

function wce() {
    var xde = 0;
    for (var mh = 2; mh < nzd; mh++) {
        if (this.jbe[mh]) {
            xde = 1;
            tde(mh)
        }
    }
    tde(xde)
}

function yce() {
    var yde = 0;
    for (var mh = 2; mh < nzd; mh++) {
        if (this.ibe[mh]) {
            yde = 1;
            xce(mh)
        }
    }
    xce(yde)
}

function xbe() {
    this.tbe++;
    for (var mh = 0; mh < nzd; mh++) {
        this.jbe[mh] = this.ibe[mh] = this.egb[mh] = 0
    }
    var zde = 0;
    var aee = 0;
    for (var mh = 0; mh < nzd; mh++) {
        var rde = this.obe[mh];
        this.jbe[rde] |= dae[mh];
        this.ibe[rde] |= eae[mh];
        this.egb[rde] |= cae[mh];
        zde |= dae[mh];
        aee |= cae[mh];
        dae[mh] = 0;
        eae[mh] = 0
    }
    this.jbe[1] = zde;
    this.egb[1] = aee;
    this.jbe[0] = zde ^ 1;
    this.egb[0] = aee ^ 1;
    for (var mh = 0; mh <= ozd; mh++) {
        this.vzb[mh] = !1;
        this.wzb[mh] = !1
    }
    this.nbe = !1;
    this.mbe = !1;
    this.ube();
    var nyb;
    if (!dfb.oyb) {
        nyb = pyb
    } else {
        nyb = dfb.qyb
    }
    for (var ryb = 7; ryb >= 0; ryb--) {
        syb = nyb[ryb];
        if (syb && syb.xh) {
            if (syb.tyb == -1) {
                uyb(cu, vyb)
            } else {
                uyb(xob.dv(syb.tyb), vyb)
            } if (((this.wyb - vyb.left) >= syb.krb) && ((this.wyb - vyb.left) < syb.orb) && ((this.xyb - vyb.top) >= syb.lrb) && ((this.xyb - vyb.top) < syb.prb)) {
                rq.yyb = ((st.wyb - vyb.left - syb.krb) / syb.zyb) + syb.crb;
                rq.azb = ((st.xyb - vyb.top - syb.lrb) / syb.bzb) + syb.drb;
                break
            }
        }
    }
}

function bee() {
    st.tce();
    st.vce();
    st.xce()
}
uad.prototype.cee = function () {
    sqd();
    var gab = [];
    gab[0] = 1;
    gab[1] = 0;
    gab[2] = 0;
    gab[3] = 1;
    gab[4] = 0;
    gab[5] = 0;
    aod(gab);
    for (var uu = 0; uu < yuc.length; ++uu) {
        var mud = yuc[uu]
    }
    uqd()
};

function vu() {
    this.nfb = [];
    this.wu = !1;
    this.length = 0;
    this.oqb = 0
}
vu.prototype.nzc = function () {
    for (var uu = 0; uu < this.nfb.length; uu++) {
        if (this.nfb[uu] == null) return uu
    }
    return this.nfb.length
};
vu.prototype.yu = function (zfd) {
    var xl = this.nzc();
    this.nfb[xl] = zfd;
    this.oqb++;
    this.length = this.nfb.length;
    return xl
};
vu.prototype.dv = function (lhb) {
    if (lhb < 0 || lhb >= this.nfb.length) return null;
    return this.nfb[lhb]
};
vu.prototype.agd = function (bgd) {
    for (var uu = 0; uu < this.nfb.length; uu++) {
        if (this.nfb[uu] == bgd) return uu
    }
};
vu.prototype.cgd = function (bgd) {
    for (var uu = 0; uu < this.nfb.length; uu++) {
        if (this.nfb[uu] == bgd) {
            if (this.wu) {
                this.nfb.splice(uu, 1)
            } else {
                this.nfb[uu] = null
            }
            this.oqb--;
            this.length = this.nfb.length;
            return !0;
            break
        }
    }
    return !1
};
vu.prototype.iv = function (lhb) {
    if (lhb < 0 || lhb >= this.nfb.length) return !1;
    if (this.wu) {
        this.nfb.splice(lhb, 1)
    } else {
        this.nfb[lhb] = null
    }
    this.oqb--;
    this.length = this.nfb.length;
    return !0
};
vu.prototype.nib = function () {
    this.nfb = [];
    this.oqb = 0;
    this.length = this.nfb.length
};
vu.prototype.lv = function (rnb, bv) {
    if (rnb < 0 || rnb >= this.nfb.length) return;
    this.nfb[rnb] = bv
};
vu.prototype.dee = function (eee) {
    if (eee) {
        this.nfb.sort(function (nac, lz) {
            return nac - lz
        })
    } else {
        this.nfb.sort(function (nac, lz) {
            return lz - nac
        })
    }
};
vu.prototype.ru = function (su) {
    this.nfb = su.nfb.slice();
    this.wu = su.wu;
    this.length = su.length;
    this.oqb = su.oqb
};

function fee() {
    this.gee = null;
    this.hee = 0;
    this.iee = null
}

function jee() {
    this.gee = null;
    this.kee = !1;
    this.pgd = null
}

function lee(mee, gy) {
    this.xt = 0;
    this.ycd = mee;
    this.lcd = gy;
    this.wwd = -1;
    this.yfb = 0;
    this.xwd = 0;
    this.ywd = !1;
    this.zwd = !1;
    this.axd = !1;
    this.nee = 0;
    this.xcd = null;
    this.oee = -1;
    this.wcd = !1;
    this.qzb = new vu();
    this.hzd = new vu();
    this.qzb.wu = !0;
    this.hzd.wu = !0;
    this.pee = [];
    for (var nac = 0; nac < oac; nac++) {
        this.pee[nac] = null
    }
    this.qee = [];
    this.ree = [];
    this.see = [];
    this.add = [];
    this.uh = [];
    this.xz = [];
    this.kxb = []
}
lee.prototype.wib = function () {
    return this.qzb.nfb
};
lee.prototype.vxb = function () {
    return this.hzd.nfb
};

function ldd(tee, uee) {
    var reb = new lee(tee, uee.wf);
    with(reb) {
        if (uee.wh != undefined) yfb = uee.wh;
        if (uee.xh != undefined) zwd = uee.xh;
        if (uee.xib != undefined) ywd = uee.xib;
        if (uee.gj != undefined) xwd = uee.gj;
        if (uee.rvd != undefined) axd = uee.rvd;
        if (uee.parent != undefined) nee = uee.parent;
        if (uee.vee != undefined) wwd = uee.vee;
        if (uee.yh) {
            reb.yh = uee.yh;
            reb.xz[gfb] = !0
        }
        if (uee.yj) {
            reb.yj = uee.yj;
            reb.xz[hfb] = !0
        }
        if (uee.wee) {
            reb.wee = uee.wee;
            reb.xz[kcc] = !0
        }
        if (uee.lj) {
            reb.lj = uee.lj;
            reb.xz[jcc] = !0
        }
        if (uee.xee) {
            reb.xee = uee.xee;
            reb.xz[lcc] = !0
        }
        if (uee.wi) {
            reb.wi = uee.wi;
            reb.xz[fcc] = !0
        }
        if (uee.yee) {
            reb.yee = uee.yee;
            reb.xz[nzb] = !0
        }
        if (uee.gl) {
            reb.gl = uee.gl;
            reb.xz[ezb] = !0
        }
        if (uee.zee) {
            reb.zee = uee.zee;
            reb.xz[gzb] = !0
        }
        if (uee.afe) {
            reb.afe = uee.afe;
            reb.xz[fzb] = !0
        }
        if (uee.el) {
            reb.el = uee.el;
            reb.xz[hzb] = !0
        }
        if (uee.bfe) {
            reb.bfe = uee.bfe;
            reb.xz[jzb] = !0
        }
        if (uee.cfe) {
            reb.cfe = uee.cfe;
            reb.xz[izb] = !0
        }
        if (uee.dfe) {
            reb.dfe = uee.dfe;
            reb.xz[kzb] = !0
        }
        if (uee.efe) {
            reb.efe = uee.efe;
            reb.xz[mzb] = !0
        }
        if (uee.ffe) {
            reb.ffe = uee.ffe;
            reb.xz[lzb] = !0
        }
        if (uee.gfe) {
            reb.gfe = uee.gfe;
            reb.xz[zzb] = !0
        }
        if (uee.hfe) {
            reb.hfe = uee.hfe;
            reb.xz[pdc] = !0;
        }
        if (uee.ife) {
            reb.ife = uee.ife;
            reb.xz[qdc] = !0
        }
        if (uee.ai) {
            reb.ai = uee.ai;
            reb.xz[aac] = !0
        }
        if (uee.jfe) {
            reb.jfe = uee.jfe;
            reb.xz[rdc] = !0
        }
        if (uee.kfe) {
            reb.kfe = uee.kfe;
            reb.xz[sdc] = !0
        }
        if (uee.cl) {
            reb.cl = uee.cl;
            reb.xz[bac] = !0
        }
        if (uee.lfe) {
            reb.lfe = uee.lfe;
            reb.xz[tdc] = !0
        }
        if (uee.mfe) {
            reb.mfe = uee.mfe;
            reb.xz[udc] = !0
        }
        if (uee.mk) {
            reb.mk = uee.mk;
            reb.xz[ozb] = !0
        }
        if (uee.nfe) {
            reb.nfe = uee.nfe;
            reb.xz[pzb] = !0
        }
        if (uee.kk) {
            reb.kk = uee.kk;
            reb.xz[lxb] = !0
        }
        if (uee.ofe) {
            reb.ofe = uee.ofe;
            reb.xz[pxb] = !0
        }
        if (uee.pfe) {
            reb.pfe = uee.pfe;
            reb.xz[mcc] = !0
        }
        if (uee.qfe) {
            reb.qfe = uee.qfe;
            reb.xz[ncc] = !0
        }
        if (uee.ii) {
            reb.ii = uee.ii;
            reb.xz[occ] = !0
        }
        if (uee.ci) {
            reb.ci = uee.ci;
            reb.xz[pcc] = !0
        }
        if (uee.rfe) {
            reb.rfe = uee.rfe;
            reb.xz[qcc] = !0
        }
        if (uee.sfe) {
            reb.sfe = uee.sfe;
            reb.xz[rcc] = !0;
        }
        if (uee.tfe) {
            reb.tfe = uee.tfe;
            reb.xz[scc] = !0
        }
        if (uee.ufe) {
            reb.ufe = uee.ufe;
            reb.xz[tcc] = !0
        }
        if (uee.vfe) {
            reb.vfe = uee.vfe;
            reb.xz[ucc] = !0
        }
        if (uee.wfe) {
            reb.wfe = uee.wfe;
            reb.xz[vcc] = !0
        }
        if (uee.xfe) {
            reb.xfe = uee.xfe;
            reb.xz[wcc] = !0
        }
        if (uee.yfe) {
            reb.yfe = uee.yfe;
            reb.xz[xcc] = !0;
        }
        if (uee.zfe) {
            reb.zfe = uee.zfe;
            reb.xz[ycc] = !0
        }
        if (uee.age) {
            reb.age = uee.age;
            reb.xz[zcc] = !0
        }
        if (uee.bge) {
            reb.bge = uee.bge;
            reb.xz[adc] = !0
        }
        if (uee.cge) {
            reb.cge = uee.cge;
            reb.xz[bdc] = !0
        }
        if (uee.dge) {
            reb.dge = uee.dge;
            reb.xz[cdc] = !0
        }
        if (uee.ege) {
            reb.ege = uee.ege;
            reb.xz[ddc] = !0
        }
        if (uee.fge) {
            reb.fge = uee.fge;
            reb.xz[edc] = !0
        }
        if (uee.gge) {
            reb.gge = uee.gge;
            reb.xz[fdc] = !0
        }
        if (uee.hge) {
            reb.hge = uee.hge;
            reb.xz[gdc] = !0
        }
        if (uee.ige) {
            reb.ige = uee.ige;
            reb.xz[hdc] = !0
        }
        if (uee.jge) {
            reb.jge = uee.jge;
            reb.xz[idc] = !0
        }
        if (uee.kge) {
            reb.kge = uee.kge;
            reb.xz[jdc] = !0
        }
        if (uee.lge) {
            reb.lge = uee.lge;
            reb.xz[kdc] = !0
        }
        if (uee.mge) {
            reb.mge = uee.mge;
            reb.xz[ldc] = !0
        }
        if (uee.nge) {
            reb.nge = uee.nge;
            reb.xz[mdc] = !0
        }
        if (uee.oge) {
            reb.oge = uee.oge;
            reb.xz[ndc] = !0
        }
        if (uee.pge) {
            reb.pge = uee.pge;
            reb.xz[odc] = !0
        }
        if (uee.dj) {
            reb.pee[0] = uee.dj;
            reb.xz[vdc] = !0
        }
        if (uee.ti) {
            reb.pee[1] = uee.ti;
            reb.xz[wdc] = !0
        }
        if (uee.ij) {
            reb.pee[2] = uee.ij;
            reb.xz[xdc] = !0
        }
        if (uee.qge) {
            reb.pee[3] = uee.qge;
            reb.xz[ydc] = !0;
        }
        if (uee.rge) {
            reb.pee[4] = uee.rge;
            reb.xz[zdc] = !0
        }
        if (uee.sge) {
            reb.pee[5] = uee.sge;
            reb.xz[aec] = !0
        }
        if (uee.tge) {
            reb.pee[6] = uee.tge;
            reb.xz[bec] = !0
        }
        if (uee.ck) {
            reb.pee[7] = uee.ck;
            reb.xz[cec] = !0
        }
        if (uee.uge) {
            reb.pee[8] = uee.uge;
            reb.xz[dec] = !0
        }
        if (uee.pk) {
            reb.pee[9] = uee.pk;
            reb.xz[eec] = !0
        }
        if (uee.vge) {
            reb.pee[10] = uee.vge;
            reb.xz[fec] = !0
        }
        if (uee.wge) {
            reb.pee[11] = uee.wge;
            reb.xz[gec] = !0;
        }
        if (uee.xge) {
            reb.ree[whc] = uee.xge;
            reb.xz[whc] = !0
        }
        if (uee.ei) {
            reb.ree[yhc] = uee.ei;
            reb.xz[yhc] = !0
        }
        if (uee.yge) {
            reb.ree[zhc] = uee.yge;
            reb.xz[zhc] = !0
        }
        if (uee.zge) {
            reb.ree[aic] = uee.zge;
            reb.xz[aic] = !0
        }
        if (uee.ahe) {
            reb.ree[bic] = uee.ahe;
            reb.xz[bic] = !0
        }
        if (uee.bhe) {
            reb.ree[cic] = uee.bhe;
            reb.xz[cic] = !0
        }
        if (uee.che) {
            reb.ree[dic] = uee.che;
            reb.xz[dic] = !0
        }
        if (uee.dhe) {
            reb.ree[eic] = uee.dhe;
            reb.xz[eic] = !0
        }
        if (uee.ehe) {
            reb.ree[fic] = uee.ehe;
            reb.xz[fic] = !0
        }
        if (uee.qi) {
            reb.ree[gic] = uee.qi;
            reb.xz[gic] = !0
        }
        if (uee.oi) {
            reb.ree[hic] = uee.oi;
            reb.xz[hic] = !0
        }
        if (uee.aj) {
            reb.ree[iic] = uee.aj;
            reb.xz[iic] = !0
        }
        if (uee.yi) {
            reb.ree[jic] = uee.yi;
            reb.xz[jic] = !0
        }
        if (uee.fhe) {
            reb.ree[kic] = uee.fhe;
            reb.xz[kic] = !0
        }
        if (uee.ghe) {
            reb.ree[lic] = uee.ghe;
            reb.xz[lic] = !0
        }
        if (uee.tj) {
            reb.ree[mic] = uee.tj;
            reb.xz[mic] = !0
        }
        if (uee.rj) {
            reb.ree[nic] = uee.rj;
            reb.xz[nic] = !0
        }
        if (uee.pj) {
            reb.ree[oic] = uee.pj;
            reb.xz[oic] = !0
        }
        if (uee.nj) {
            reb.ree[pic] = uee.nj;
            reb.xz[pic] = !0
        }
        if (uee.hhe) {
            reb.ree[qic] = uee.hhe;
            reb.xz[qic] = !0
        }
        if (uee.ihe) {
            reb.ree[ric] = uee.ihe;
            reb.xz[ric] = !0
        }
        if (uee.jhe) {
            reb.ree[sic] = (uee.jhe);
            reb.xz[sic] = !0
        }
        if (uee.khe) {
            reb.ree[tic] = (uee.khe);
            reb.xz[tic] = !0
        }
        if (uee.lhe) {
            reb.ree[uic] = (uee.lhe);
            reb.xz[uic] = !0
        }
        if (uee.mhe) {
            reb.ree[vic] = (uee.mhe);
            reb.xz[vic] = !0
        }
        if (uee.nhe) {
            reb.ree[wic] = (uee.nhe);
            reb.xz[wic] = !0;
        }
        if (uee.ohe) {
            reb.ree[xic] = (uee.ohe);
            reb.xz[xic] = !0
        }
        if (uee.phe) {
            reb.ree[yic] = (uee.phe);
            reb.xz[yic] = !0
        }
        if (uee.qhe) {
            reb.ree[zic] = (uee.qhe);
            reb.xz[zic] = !0
        }
        if (uee.rhe) {
            reb.ree[ajc] = (uee.rhe);
            reb.xz[ajc] = !0
        }
        if (uee.she) {
            reb.ree[bjc] = (uee.she);
            reb.xz[bjc] = !0
        }
        if (uee.the) {
            reb.ree[cjc] = (uee.the);
            reb.xz[cjc] = !0
        }
        if (uee.uhe) {
            reb.ree[djc] = (uee.uhe);
            reb.xz[djc] = !0;
        }
        if (uee.vhe) {
            reb.ree[ejc] = (uee.vhe);
            reb.xz[ejc] = !0
        }
        if (uee.whe) {
            reb.ree[fjc] = (uee.whe);
            reb.xz[fjc] = !0
        }
        if (uee.xhe) {
            reb.ree[gjc] = (uee.xhe);
            reb.xz[gjc] = !0
        }
        if (uee.yhe) {
            reb.ree[hjc] = (uee.yhe);
            reb.xz[hjc] = !0
        }
        if (uee.zhe) {
            reb.ree[ijc] = (uee.zhe);
            reb.xz[ijc] = !0
        }
        if (uee.aie) {
            reb.ree[jjc] = (uee.aie);
            reb.xz[jjc] = !0
        }
        if (uee.bie) {
            reb.ree[kjc] = (uee.bie);
            reb.xz[kjc] = !0;
        }
        if (uee.cie) {
            reb.ree[ljc] = (uee.cie);
            reb.xz[ljc] = !0
        }
        if (uee.die) {
            reb.ree[mjc] = (uee.die);
            reb.xz[mjc] = !0
        }
        if (uee.mi) {
            reb.ree[njc] = (uee.mi);
            reb.xz[njc] = !0
        }
        if (uee.eie) {
            reb.ree[ojc] = (uee.eie);
            reb.xz[ojc] = !0
        }
        if (uee.fie) {
            reb.ree[pjc] = (uee.fie);
            reb.xz[pjc] = !0
        }
        if (uee.gie) {
            reb.ree[qjc] = (uee.gie);
            reb.xz[qjc] = !0
        }
        if (uee.hie) {
            reb.ree[rjc] = (uee.hie);
            reb.xz[rjc] = !0;
        }
        if (uee.iie) {
            reb.ree[sjc] = (uee.iie);
            reb.xz[sjc] = !0
        }
        if (uee.jie) {
            reb.ree[tjc] = (uee.jie);
            reb.xz[tjc] = !0
        }
        if (uee.kie) {
            reb.ree[ujc] = (uee.kie);
            reb.xz[ujc] = !0
        }
        if (uee.lie) {
            reb.ree[vjc] = (uee.lie);
            reb.xz[vjc] = !0
        }
        if (uee.mie) {
            reb.ree[wjc] = (uee.mie);
            reb.xz[wjc] = !0
        }
        if (uee.nie) {
            reb.ree[xjc] = (uee.nie);
            reb.xz[xjc] = !0
        }
        if (uee.oie) {
            reb.ree[yjc] = (uee.oie);
            reb.xz[yjc] = !0;
        }
        if (uee.pie) {
            reb.ree[zjc] = (uee.pie);
            reb.xz[zjc] = !0
        }
        if (uee.qie) {
            reb.ree[akc] = (uee.qie);
            reb.xz[akc] = !0
        }
        if (uee.rie) {
            reb.ree[bkc] = (uee.rie);
            reb.xz[bkc] = !0
        }
        if (uee.sie) {
            reb.ree[ckc] = (uee.sie);
            reb.xz[ckc] = !0
        }
        if (uee.tie) {
            reb.ree[dkc] = (uee.tie);
            reb.xz[dkc] = !0
        }
        if (uee.uie) {
            reb.ree[ekc] = (uee.uie);
            reb.xz[ekc] = !0
        }
        if (uee.vie) {
            reb.ree[fkc] = (uee.vie);
            reb.xz[fkc] = !0
        }
        if (uee.wie) {
            reb.ree[gkc] = (uee.wie);
            reb.xz[gkc] = !0
        }
        if (uee.xie) {
            reb.ree[hkc] = (uee.xie);
            reb.xz[hkc] = !0
        }
        if (uee.yie) {
            reb.ree[ikc] = (uee.yie);
            reb.xz[ikc] = !0
        }
        if (uee.zie) {
            reb.ree[jkc] = (uee.zie);
            reb.xz[jkc] = !0
        }
        if (uee.aje) {
            reb.ree[kkc] = (uee.aje);
            reb.xz[kkc] = !0
        }
        if (uee.bje) {
            reb.ree[lkc] = (uee.bje);
            reb.xz[lkc] = !0
        }
        if (uee.cje) {
            reb.ree[mkc] = (uee.cje);
            reb.xz[mkc] = !0
        }
        if (uee.dje) {
            reb.ree[nkc] = (uee.dje);
            reb.xz[nkc] = !0
        }
        if (uee.eje) {
            reb.ree[blc] = (uee.eje);
            reb.xz[blc] = !0
        }
        if (uee.fje) {
            reb.ree[clc] = (uee.fje);
            reb.xz[clc] = !0
        }
        if (uee.gje) {
            reb.ree[dlc] = (uee.gje);
            reb.xz[dlc] = !0
        }
        if (uee.hje) {
            reb.ree[elc] = (uee.hje);
            reb.xz[elc] = !0
        }
        if (uee.ije) {
            reb.ree[flc] = (uee.ije);
            reb.xz[flc] = !0
        }
        if (uee.jje) {
            reb.ree[glc] = (uee.jje);
            reb.xz[glc] = !0
        }
        if (uee.kje) {
            reb.ree[hlc] = (uee.kje);
            reb.xz[hlc] = !0
        }
        if (uee.lje) {
            reb.ree[ilc] = (uee.lje);
            reb.xz[ilc] = !0
        }
        if (uee.mje) {
            reb.ree[jlc] = (uee.mje);
            reb.xz[jlc] = !0
        }
        if (uee.nje) {
            reb.ree[klc] = (uee.nje);
            reb.xz[klc] = !0
        }
        if (uee.oje) {
            reb.ree[llc] = (uee.oje);
            reb.xz[llc] = !0;
        }
        if (uee.ki) {
            reb.ree[mlc] = (uee.ki);
            reb.xz[mlc] = !0
        }
        if (uee.pje) {
            reb.ree[nlc] = (uee.pje);
            reb.xz[nlc] = !0
        }
        if (uee.qje) {
            reb.ree[olc] = (uee.qje);
            reb.xz[olc] = !0
        }
        if (uee.rje) {
            reb.ree[plc] = (uee.rje);
            reb.xz[plc] = !0
        }
        if (uee.sje) {
            reb.ree[qlc] = (uee.sje);
            reb.xz[qlc] = !0
        }
        if (uee.tje) {
            reb.qee[rlc] = (uee.tje);
            reb.xz[rlc] = !0;
        }
        if (uee.uje) {
            reb.qee[tlc] = (uee.uje);
            reb.xz[tlc] = !0
        }
        if (uee.vje) {
            reb.qee[ulc] = (uee.vje);
            reb.xz[ulc] = !0
        }
        if (uee.wje) {
            reb.qee[vlc] = (uee.wje);
            reb.xz[vlc] = !0
        }
        if (uee.xje) {
            reb.qee[wlc] = (uee.xje);
            reb.xz[wlc] = !0
        }
        if (uee.yje) {
            reb.qee[xlc] = (uee.yje);
            reb.xz[xlc] = !0
        }
        if (uee.zje) {
            reb.qee[ylc] = (uee.zje);
            reb.xz[ylc] = !0
        }
        if (uee.ake) {
            reb.qee[zlc] = (uee.ake);
            reb.xz[zlc] = !0
        }
        if (uee.bke) {
            reb.qee[amc] = (uee.bke);
            reb.xz[amc] = !0
        }
        if (uee.cke) {
            reb.qee[bmc] = (uee.cke);
            reb.xz[bmc] = !0
        }
        if (uee.dke) {
            reb.qee[cmc] = (uee.dke);
            reb.xz[cmc] = !0
        }
        if (uee.eke) {
            reb.qee[dmc] = (uee.eke);
            reb.xz[dmc] = !0
        }
        if (uee.fke) {
            reb.qee[emc] = (uee.fke);
            reb.xz[emc] = !0
        }
        if (uee.gke) {
            reb.qee[fmc] = (uee.gke);
            reb.xz[fmc] = !0
        }
        if (uee.hke) {
            reb.qee[gmc] = (uee.hke);
            reb.xz[gmc] = !0
        }
        if (uee.ike) {
            reb.qee[hmc] = (uee.ike);
            reb.xz[hmc] = !0
        }
        if (uee.jke) {
            reb.qee[imc] = (uee.jke);
            reb.xz[imc] = !0
        }
        if (uee.kke) {
            reb.qee[jmc] = (uee.kke);
            reb.xz[jmc] = !0
        }
        if (uee.lke) {
            reb.qee[kmc] = (uee.lke);
            reb.xz[kmc] = !0
        }
        if (uee.mke) {
            reb.qee[lmc] = (uee.mke);
            reb.xz[lmc] = !0
        }
        if (uee.nke) {
            reb.qee[mmc] = (uee.nke);
            reb.xz[mmc] = !0
        }
        if (uee.oke) {
            reb.qee[nmc] = (uee.oke);
            reb.xz[nmc] = !0
        }
        if (uee.pke) {
            reb.qee[omc] = (uee.pke);
            reb.xz[omc] = !0
        }
        if (uee.qke) {
            reb.qee[pmc] = (uee.qke);
            reb.xz[pmc] = !0;
        }
        if (uee.rke) {
            reb.qee[qmc] = (uee.rke);
            reb.xz[qmc] = !0
        }
        if (uee.ske) {
            reb.qee[rmc] = (uee.ske);
            reb.xz[rmc] = !0
        }
        if (uee.tke) {
            reb.qee[smc] = (uee.tke);
            reb.xz[smc] = !0
        }
        if (uee.uke) {
            reb.qee[tmc] = (uee.uke);
            reb.xz[tmc] = !0
        }
        if (uee.vke) {
            reb.qee[umc] = (uee.vke);
            reb.xz[umc] = !0
        }
        if (uee.wke) {
            reb.qee[vmc] = (uee.wke);
            reb.xz[vmc] = !0
        }
        if (uee.xke) {
            reb.qee[wmc] = (uee.xke);
            reb.xz[wmc] = !0
        }
        if (uee.yke) {
            reb.qee[xmc] = (uee.yke);
            reb.xz[xmc] = !0
        }
        if (uee.zke) {
            reb.qee[ymc] = (uee.zke);
            reb.xz[ymc] = !0
        }
        if (uee.ale) {
            reb.qee[zmc] = (uee.ale);
            reb.xz[zmc] = !0
        }
        if (uee.ble) {
            reb.qee[anc] = (uee.ble);
            reb.xz[anc] = !0
        }
        if (uee.cle) {
            reb.qee[bnc] = (uee.cle);
            reb.xz[bnc] = !0
        }
        if (uee.dle) {
            reb.qee[cnc] = (uee.dle);
            reb.xz[cnc] = !0
        }
        if (uee.ele) {
            reb.qee[dnc] = (uee.ele);
            reb.xz[dnc] = !0
        }
        if (uee.fle) {
            reb.qee[enc] = (uee.fle);
            reb.xz[enc] = !0
        }
        if (uee.gle) {
            reb.qee[fnc] = (uee.gle);
            reb.xz[fnc] = !0
        }
        if (uee.hle) {
            reb.qee[gnc] = (uee.hle);
            reb.xz[gnc] = !0;
        }
        if (uee.ile) {
            reb.qee[hnc] = (uee.ile);
            reb.xz[hnc] = !0
        }
        if (uee.jle) {
            reb.qee[inc] = (uee.jle);
            reb.xz[inc] = !0
        }
        if (uee.kle) {
            reb.qee[jnc] = (uee.kle);
            reb.xz[jnc] = !0
        }
        if (uee.lle) {
            reb.qee[knc] = (uee.lle);
            reb.xz[knc] = !0
        }
        if (uee.mle) {
            reb.qee[lnc] = (uee.mle);
            reb.xz[lnc] = !0
        }
        if (uee.nle) {
            reb.qee[mnc] = (uee.nle);
            reb.xz[mnc] = !0
        }
        if (uee.ole) {
            reb.qee[nnc] = (uee.ole);
            reb.xz[nnc] = !0
        }
        if (uee.ple) {
            reb.qee[onc] = (uee.ple);
            reb.xz[onc] = !0
        }
        if (uee.qle) {
            reb.qee[pnc] = (uee.qle);
            reb.xz[pnc] = !0
        }
        if (uee.rle) {
            reb.qee[qnc] = (uee.rle);
            reb.xz[qnc] = !0
        }
        if (uee.sle) {
            reb.qee[rnc] = (uee.sle);
            reb.xz[rnc] = !0
        }
        if (uee.tle) {
            reb.qee[snc] = (uee.tle);
            reb.xz[snc] = !0
        }
        if (uee.ule) {
            reb.qee[tnc] = (uee.ule);
            reb.xz[tnc] = !0
        }
        if (uee.vle) {
            reb.qee[unc] = (uee.vle);
            reb.xz[unc] = !0
        }
        if (uee.wle) {
            reb.qee[vnc] = (uee.wle);
            reb.xz[vnc] = !0
        }
        if (uee.xle) {
            reb.qee[wnc] = (uee.xle);
            reb.xz[wnc] = !0
        }
        if (uee.yle) {
            reb.qee[xnc] = (uee.yle);
            reb.xz[xnc] = !0;
        }
        if (uee.zle) {
            reb.qee[ync] = (uee.zle);
            reb.xz[ync] = !0
        }
        if (uee.ame) {
            reb.qee[znc] = (uee.ame);
            reb.xz[znc] = !0
        }
        if (uee.bme) {
            reb.qee[aoc] = (uee.bme);
            reb.xz[aoc] = !0
        }
        if (uee.cme) {
            reb.qee[boc] = (uee.cme);
            reb.xz[boc] = !0
        }
        if (uee.dme) {
            reb.qee[coc] = (uee.dme);
            reb.xz[coc] = !0
        }
        if (uee.eme) {
            reb.qee[doc] = (uee.eme);
            reb.xz[doc] = !0
        }
        if (uee.fme) {
            reb.qee[eoc] = (uee.fme);
            reb.xz[eoc] = !0
        }
        if (uee.gme) {
            reb.qee[foc] = (uee.gme);
            reb.xz[foc] = !0
        }
        if (uee.hme) {
            reb.qee[goc] = (uee.hme);
            reb.xz[goc] = !0
        }
        if (uee.ime) {
            reb.qee[hoc] = (uee.ime);
            reb.xz[hoc] = !0
        }
        if (uee.jme) {
            reb.qee[ioc] = (uee.jme);
            reb.xz[ioc] = !0
        }
        if (uee.kme) {
            reb.qee[woc] = (uee.kme);
            reb.xz[woc] = !0
        }
        if (uee.lme) {
            reb.qee[xoc] = (uee.lme);
            reb.xz[xoc] = !0
        }
        if (uee.mme) {
            reb.qee[yoc] = (uee.mme);
            reb.xz[yoc] = !0
        }
        if (uee.nme) {
            reb.qee[zoc] = (uee.nme);
            reb.xz[zoc] = !0
        }
        if (uee.ome) {
            reb.qee[apc] = (uee.ome);
            reb.xz[apc] = !0
        }
        if (uee.pme) {
            reb.qee[bpc] = (uee.pme);
            reb.xz[bpc] = !0
        }
        if (uee.qme) {
            reb.qee[cpc] = (uee.qme);
            reb.xz[cpc] = !0
        }
        if (uee.rme) {
            reb.qee[dpc] = (uee.rme);
            reb.xz[dpc] = !0
        }
        if (uee.sme) {
            reb.qee[epc] = (uee.sme);
            reb.xz[epc] = !0
        }
        if (uee.tme) {
            reb.qee[fpc] = (uee.tme);
            reb.xz[fpc] = !0
        }
        if (uee.ume) {
            reb.qee[gpc] = (uee.ume);
            reb.xz[gpc] = !0
        }
        if (uee.vme) {
            reb.qee[hpc] = (uee.vme);
            reb.xz[hpc] = !0;
        }
        if (uee.wme) {
            reb.qee[ipc] = (uee.wme);
            reb.xz[ipc] = !0
        }
        if (uee.xme) {
            reb.qee[jpc] = (uee.xme);
            reb.xz[jpc] = !0
        }
        if (uee.yme) {
            reb.qee[kpc] = (uee.yme);
            reb.xz[kpc] = !0
        }
        if (uee.zme) {
            reb.qee[lpc] = (uee.zme);
            reb.xz[lpc] = !0
        }
        if (uee.ane) {
            reb.see[mpc] = (uee.ane);
            reb.xz[mpc] = !0
        }
        if (uee.bne) {
            reb.see[opc] = (uee.bne);
            reb.xz[opc] = !0
        }
        if (uee.cne) {
            reb.see[ppc] = (uee.cne);
            reb.xz[ppc] = !0
        }
        if (uee.dne) {
            reb.see[qpc] = (uee.dne);
            reb.xz[qpc] = !0
        }
        if (uee.ene) {
            reb.see[rpc] = (uee.ene);
            reb.xz[rpc] = !0
        }
        if (uee.fne) {
            reb.see[spc] = (uee.fne);
            reb.xz[spc] = !0
        }
        if (uee.gne) {
            reb.see[tpc] = (uee.gne);
            reb.xz[tpc] = !0
        }
        if (uee.hne) {
            reb.see[upc] = (uee.hne);
            reb.xz[upc] = !0
        }
        if (uee.ine) {
            reb.see[vpc] = (uee.ine);
            reb.xz[vpc] = !0;
        }
        if (uee.jne) {
            reb.see[wpc] = (uee.jne);
            reb.xz[wpc] = !0
        }
        if (uee.kne) {
            reb.see[xpc] = (uee.kne);
            reb.xz[xpc] = !0
        }
        if (uee.lne) {
            reb.see[ypc] = (uee.lne);
            reb.xz[ypc] = !0
        }
        if (uee.mne) {
            reb.see[zpc] = (uee.mne);
            reb.xz[zpc] = !0
        }
        if (uee.nne) {
            reb.see[aqc] = (uee.nne);
            reb.xz[aqc] = !0
        }
        if (uee.one) {
            reb.see[bqc] = (uee.one);
            reb.xz[bqc] = !0;
        }
        if (uee.pne) {
            reb.see[cqc] = (uee.pne);
            reb.xz[cqc] = !0
        }
        if (uee.qne) {
            reb.see[dqc] = (uee.qne);
            reb.xz[dqc] = !0
        }
        if (uee.rne) {
            reb.see[eqc] = (uee.rne);
            reb.xz[eqc] = !0
        }
        if (uee.vj) {
            reb.see[fqc] = (uee.vj);
            reb.xz[fqc] = !0
        }
        if (uee.sne) {
            reb.see[gqc] = (uee.sne);
            reb.xz[gqc] = !0
        }
        if (uee.tne) {
            reb.see[hqc] = (uee.tne);
            reb.xz[hqc] = !0
        }
        if (uee.une) {
            reb.see[iqc] = (uee.une);
            reb.xz[iqc] = !0
        }
        if (uee.vne) {
            reb.see[jqc] = (uee.vne);
            reb.xz[jqc] = !0
        }
        if (uee.wne) {
            reb.see[kqc] = (uee.wne);
            reb.xz[kqc] = !0
        }
        if (uee.xne) {
            reb.see[lqc] = (uee.xne);
            reb.xz[lqc] = !0
        }
        if (uee.yne) {
            reb.see[mqc] = (uee.yne);
            reb.xz[mqc] = !0
        }
        if (uee.zne) {
            reb.see[nqc] = (uee.zne);
            reb.xz[nqc] = !0
        }
        if (uee.aoe) {
            reb.see[oqc] = (uee.aoe);
            reb.xz[oqc] = !0;
        }
        if (uee.boe) {
            reb.see[pqc] = (uee.boe);
            reb.xz[pqc] = !0
        }
        if (uee.coe) {
            reb.see[qqc] = (uee.coe);
            reb.xz[qqc] = !0
        }
        if (uee.doe) {
            reb.see[rqc] = (uee.doe);
            reb.xz[rqc] = !0
        }
        if (uee.eoe) {
            reb.see[sqc] = (uee.eoe);
            reb.xz[sqc] = !0
        }
        if (uee.foe) {
            reb.see[tqc] = (uee.foe);
            reb.xz[tqc] = !0
        }
        if (uee.goe) {
            reb.see[uqc] = (uee.goe);
            reb.xz[uqc] = !0
        }
        if (uee.hoe) {
            reb.see[vqc] = (uee.hoe);
            reb.xz[vqc] = !0
        }
        if (uee.ioe) {
            reb.see[wqc] = (uee.ioe);
            reb.xz[wqc] = !0
        }
        if (uee.joe) {
            reb.see[xqc] = (uee.joe);
            reb.xz[xqc] = !0
        }
        if (uee.koe) {
            reb.see[yqc] = (uee.koe);
            reb.xz[yqc] = !0
        }
        if (uee.loe) {
            reb.see[zqc] = (uee.loe);
            reb.xz[zqc] = !0
        }
        if (uee.moe) {
            reb.see[brc] = (uee.moe);
            reb.xz[brc] = !0
        }
        if (uee.noe) {
            reb.see[crc] = (uee.noe);
            reb.xz[crc] = !0
        }
        if (uee.ooe) {
            reb.see[drc] = (uee.ooe);
            reb.xz[drc] = !0
        }
        if (uee.poe) {
            reb.see[erc] = (uee.poe);
            reb.xz[erc] = !0
        }
        if (uee.qoe) {
            reb.see[frc] = (uee.qoe);
            reb.xz[frc] = !0
        }
        if (uee.roe) {
            reb.see[grc] = (uee.roe);
            reb.xz[grc] = !0
        }
        if (uee.soe) {
            reb.see[hrc] = (uee.soe);
            reb.xz[hrc] = !0
        }
        if (uee.toe) {
            reb.see[irc] = (uee.toe);
            reb.xz[irc] = !0
        }
        if (uee.uoe) {
            reb.see[jrc] = (uee.uoe);
            reb.xz[jrc] = !0
        }
        if (uee.voe) {
            reb.see[krc] = (uee.voe);
            reb.xz[krc] = !0
        }
        if (uee.woe) {
            reb.see[lrc] = (uee.woe);
            reb.xz[lrc] = !0
        }
        if (uee.xoe) {
            reb.see[mrc] = (uee.xoe);
            reb.xz[mrc] = !0
        }
        if (uee.yoe) {
            reb.see[nrc] = (uee.yoe);
            reb.xz[nrc] = !0
        }
        if (uee.zoe) {
            reb.see[orc] = (uee.zoe);
            reb.xz[orc] = !0
        }
        if (uee.ape) {
            reb.see[prc] = (uee.ape);
            reb.xz[prc] = !0
        }
        if (uee.bpe) {
            reb.see[qrc] = (uee.bpe);
            reb.xz[qrc] = !0
        }
        if (uee.cpe) {
            reb.see[rrc] = (uee.cpe);
            reb.xz[rrc] = !0
        }
        if (uee.dpe) {
            reb.see[trc] = (uee.dpe);
            reb.xz[trc] = !0
        }
        if (uee.epe) {
            reb.see[urc] = (uee.epe);
            reb.xz[urc] = !0
        }
        if (uee.fpe) {
            reb.see[vrc] = (uee.fpe);
            reb.xz[vrc] = !0
        }
        if (uee.gpe) {
            reb.see[wrc] = (uee.gpe);
            reb.xz[wrc] = !0
        }
        if (uee.hpe) {
            reb.see[xrc] = (uee.hpe);
            reb.xz[xrc] = !0
        }
        if (uee.ipe) {
            reb.see[yrc] = (uee.ipe);
            reb.xz[yrc] = !0
        }
        if (uee.jpe) {
            reb.see[zrc] = (uee.jpe);
            reb.xz[zrc] = !0
        }
        if (uee.kpe) {
            reb.see[asc] = (uee.kpe);
            reb.xz[asc] = !0
        }
        if (uee.lpe) {
            reb.see[bsc] = (uee.lpe);
            reb.xz[bsc] = !0
        }
        if (uee.mpe) {
            reb.see[csc] = (uee.mpe);
            reb.xz[csc] = !0
        }
        if (uee.npe) {
            reb.see[dsc] = (uee.npe);
            reb.xz[dsc] = !0
        }
        if (uee.ope) {
            reb.see[esc] = (uee.ope);
            reb.xz[esc] = !0
        }
        if (uee.ppe) {
            reb.see[fsc] = (uee.ppe);
            reb.xz[fsc] = !0
        }
        if (uee.qpe) {
            reb.see[tsc] = (uee.qpe);
            reb.xz[tsc] = !0
        }
        if (uee.rpe) {
            reb.see[usc] = (uee.rpe);
            reb.xz[usc] = !0
        }
        if (uee.spe) {
            reb.see[vsc] = (uee.spe);
            reb.xz[vsc] = !0
        }
        if (uee.tpe) {
            reb.see[wsc] = (uee.tpe);
            reb.xz[wsc] = !0
        }
        if (uee.upe) {
            reb.see[xsc] = (uee.upe);
            reb.xz[xsc] = !0
        }
        if (uee.vpe) {
            reb.see[ysc] = (uee.vpe);
            reb.xz[ysc] = !0
        }
        if (uee.wpe) {
            reb.see[zsc] = (uee.wpe);
            reb.xz[zsc] = !0
        }
        if (uee.xpe) {
            reb.see[atc] = (uee.xpe);
            reb.xz[atc] = !0
        }
        if (uee.ype) {
            reb.see[btc] = (uee.ype);
            reb.xz[btc] = !0
        }
        if (uee.zpe) {
            reb.see[ctc] = (uee.zpe);
            reb.xz[ctc] = !0
        }
        if (uee.aqe) {
            reb.see[dtc] = (uee.aqe);
            reb.xz[dtc] = !0
        }
        if (uee.bqe) {
            reb.see[etc] = (uee.bqe);
            reb.xz[etc] = !0
        }
        if (uee.cqe) {
            reb.see[ftc] = (uee.cqe);
            reb.xz[ftc] = !0
        }
        if (uee.dqe) {
            reb.see[gtc] = (uee.dqe);
            reb.xz[gtc] = !0
        }
        if (uee.eqe) {
            reb.see[htc] = (uee.eqe);
            reb.xz[htc] = !0
        }
        if (uee.fqe) {
            reb.see[itc] = (uee.fqe);
            reb.xz[itc] = !0
        }
        var mh = 0;
        if (uee.gqe != undefined) {
            while (mh < uee.gqe.length) {
                var rde = parseInt(uee.gqe[mh]) + 1;
                var ced = uee.gqe[mh + 1];
                var hqe = ivc.dv(rde);
                reb.xz[icc] = !0;
                reb.xz[icc | rde] = !0;
                var iqe = new fee();
                iqe.gee = ced;
                iqe.iee = hqe;
                iqe.hee = rde;
                reb.uh[icc | rde] = iqe;
                mh += 2
            }
        }
        mh = 0;
        if (uee.hi != undefined) {
            while (mh < uee.hi.length) {
                reb.xz[kyb] = !0;
                var rde = parseInt(uee.hi[mh]);
                var jqe = uee.hi[mh + 1];
                var kqe = new jee();
                kqe.gee = jqe;
                kqe.lqe = !1;
                kqe.pgd = this;
                reb.add[rde] = kqe;
                mh += 2
            }
        }
    }
    return reb
}
lee.prototype.ffb = function (kbd, xl, pz, lxd) {
    var mqe = fxc;
    var nqe = gxc;
    var oqe = exc;
    var pqe = ov;
    exc = this;
    fxc = kbd;
    gxc = xl;
    ov = !1;
    var mzd = !0;
    switch (kbd) {
    case gfb:
        if (this.yh) this.yh(pz, lxd);
        else mzd = !1;
        break;
    case hfb:
        if (this.yj) this.yj(pz, lxd);
        else mzd = !1;
        break;
    case pac:
        mzd = !1;
        break;
    case ccc:
        mzd = !1;
        break;
    case kyb:
        if (this.add[xl]) this.add[xl].gee(pz, lxd);
        break;
    case dcc:
        if (this.qee[kbd | xl]) this.qee[kbd | xl](pz, lxd);
        else mzd = !1;
        break;
    case ecc:
        mzd = !1;
        break;
    case oxb:
        mzd = !1;
        break;
    case fcc:
        if (this.wi) this.wi(pz, lxd);
        else mzd = !1;
        break;
    case gcc:
        if (this.ree[kbd | xl]) this.ree[kbd | xl](pz, lxd);
        else mzd = !1;
        break;
    case hcc:
        if (this.see[kbd | xl]) this.see[kbd | xl](pz, lxd);
        else mzd = !1;
        break;
    case icc:
        if (this.uh[kbd | xl]) {
            var qqe = this.uh[kbd | xl];
            var iqe = qqe.iee;
            var ugb = iqe.ced(pz, lxd);
            if (ugb | ewc) {
                qqe.gee(pz, lxd)
            }
        }
        break;
    case kcc:
        if (this.wee) this.wee(pz, lxd);
        else mzd = !1;
        break;
    case jcc:
        if (this.lj) this.lj(pz, lxd);
        else mzd = !1;
        break;
    case lcc:
        if (this.xee) this.xee(pz,
            lxd);
        else mzd = !1;
        break;
    case lxb:
        if (this.kk) this.kk(pz, lxd);
        else mzd = !1;
        break;
    case pxb:
        if (this.ofe) this.ofe(pz, lxd);
        else mzd = !1;
        break;
    case mcc:
        if (this.pfe) this.pfe(pz, lxd);
        else mzd = !1;
        break;
    case ncc:
        if (this.qfe) this.qfe(pz, lxd);
        else mzd = !1;
        break;
    case occ:
        if (this.ii) this.ii(pz, lxd);
        else mzd = !1;
        break;
    case pcc:
        if (this.ci) this.ci(pz, lxd);
        else mzd = !1;
        break;
    case qcc:
        if (this.rfe) this.rfe(pz, lxd);
        else mzd = !1;
        break;
    case rcc:
        if (this.sfe) this.sfe(pz, lxd);
        else mzd = !1;
        break;
    case scc:
        if (this.tfe) this.tfe(pz, lxd);
        else mzd = !1;
        break;
    case tcc:
        if (this.ufe) this.ufe(pz, lxd);
        else mzd = !1;
        break;
    case ucc:
        if (this.vfe) this.vfe(pz, lxd);
        else mzd = !1;
        break;
    case vcc:
        if (this.wfe) this.wfe(pz, lxd);
        else mzd = !1;
        break;
    case wcc:
        if (this.xfe) this.xfe(pz, lxd);
        else mzd = !1;
        break;
    case ndc:
        if (this.oge) this.oge(pz, lxd);
        else mzd = !1;
        break;
    case odc:
        if (this.pge) this.pge(pz, lxd);
        else mzd = !1;
        break;
    case xcc:
        if (this.yfe) this.yfe(pz, lxd);
        else mzd = !1;
        break;
    case ycc:
        if (this.zfe) this.zfe(pz, lxd);
        else mzd = !1;
        break;
    case zcc:
        if (this.age) this.age(pz, lxd);
        else mzd = !1;
        break;
    case adc:
        if (this.bge) this.bge(pz,
            lxd);
        else mzd = !1;
        break;
    case bdc:
        if (this.cge) this.cge(pz, lxd);
        else mzd = !1;
        break;
    case cdc:
        if (this.dge) this.dge(pz, lxd);
        else mzd = !1;
        break;
    case ddc:
        if (this.ege) this.ege(pz, lxd);
        else mzd = !1;
        break;
    case edc:
        if (this.fge) this.fge(pz, lxd);
        else mzd = !1;
        break;
    case fdc:
        if (this.gge) this.gge(pz, lxd);
        else mzd = !1;
        break;
    case gdc:
        if (this.hge) this.hge(pz, lxd);
        else mzd = !1;
        break;
    case hdc:
        if (this.ige) this.ige(pz, lxd);
        else mzd = !1;
        break;
    case idc:
        if (this.jge) this.jge(pz, lxd);
        else mzd = !1;
        break;
    case jdc:
        if (this.kge) this.kge(pz, lxd);
        else mzd = !1;
        break;
    case kdc:
        if (this.lge) this.lge(pz, lxd);
        else mzd = !1;
        break;
    case ldc:
        if (this.mge) this.mge(pz, lxd);
        else mzd = !1;
        break;
    case mdc:
        if (this.nge) this.nge(pz, lxd);
        else mzd = !1;
        break;
    case nzb:
        if (this.yee) this.yee(pz, lxd);
        else mzd = !1;
        break;
    case ezb:
        if (this.gl) this.gl(pz, lxd);
        else mzd = !1;
        break;
    case gzb:
        if (this.zee) this.zee(pz, lxd);
        else mzd = !1;
        break;
    case fzb:
        if (this.afe) this.afe(pz, lxd);
        else mzd = !1;
        break;
    case hzb:
        if (this.el) this.el(pz, lxd);
        else mzd = !1;
        break;
    case jzb:
        if (this.bfe) this.bfe(pz, lxd);
        else mzd = !1;
        break;
    case izb:
        if (this.cfe) this.cfe(pz,
            lxd);
        else mzd = !1;
        break;
    case kzb:
        if (this.dfe) this.dfe(pz, lxd);
        else mzd = !1;
        break;
    case mzb:
        if (this.efe) this.efe(pz, lxd);
        else mzd = !1;
        break;
    case lzb:
        if (this.ffe) this.ffe(pz, lxd);
        else mzd = !1;
        break;
    case zzb:
        if (this.gfe) this.gfe(pz, lxd);
        else mzd = !1;
        break;
    case pdc:
        if (this.hfe) this.hfe(pz, lxd);
        else mzd = !1;
        break;
    case qdc:
        if (this.ife) this.ife(pz, lxd);
        else mzd = !1;
        break;
    case aac:
        if (this.ai) this.ai(pz, lxd);
        else mzd = !1;
        break;
    case rdc:
        if (this.jfe) this.jfe(pz, lxd);
        else mzd = !1;
        break;
    case sdc:
        if (this.kfe) this.kfe(pz, lxd);
        else mzd = !1;
        break;
    case bac:
        if (this.cl) this.cl(pz, lxd);
        else mzd = !1;
        break;
    case tdc:
        if (this.lfe) this.lfe(pz, lxd);
        else mzd = !1;
        break;
    case udc:
        if (this.mfe) this.mfe(pz, lxd);
        else mzd = !1;
        break;
    case ozb:
        if (this.mk) this.mk(pz, lxd);
        else mzd = !1;
        break;
    case pzb:
        if (this.nfe) this.nfe(pz, lxd);
        else mzd = !1;
        break;
    case vdc:
        if (this.pee[0] != null) this.pee[0](pz, lxd);
        else mzd = !1;
        break;
    case wdc:
        if (this.pee[1] != null) this.pee[1](pz, lxd);
        else mzd = !1;
        break;
    case xdc:
        if (this.pee[2] != null) this.pee[2](pz, lxd);
        else mzd = !1;
        break;
    case ydc:
        if (this.pee[3] != null) this.pee[3](pz,
            lxd);
        else mzd = !1;
        break;
    case zdc:
        if (this.pee[4] != null) this.pee[4](pz, lxd);
        else mzd = !1;
        break;
    case aec:
        if (this.pee[5] != null) this.pee[5](pz, lxd);
        else mzd = !1;
        break;
    case bec:
        if (this.pee[6] != null) this.pee[6](pz, lxd);
        else mzd = !1;
        break;
    case cec:
        if (this.pee[7] != null) this.pee[7](pz, lxd);
        else mzd = !1;
        break;
    case dec:
        if (this.pee[8] != null) this.pee[8](pz, lxd);
        else mzd = !1;
        break;
    case eec:
        if (this.pee[9] != null) this.pee[9](pz, lxd);
        else mzd = !1;
        break;
    case fec:
        if (this.pee[10] != null) this.pee[10](pz, lxd);
        else mzd = !1;
        break;
    case gec:
        if (this.pee[11] != null) this.pee[11](pz,
            lxd);
        else mzd = !1;
        break;
    default:
        mzd = !1
    }
    ov = pqe;
    fxc = mqe;
    gxc = nqe;
    exc = oqe;
    return mzd
};
lee.prototype.vwd = function (zeb) {
    this.qzb.yu(zeb);
    var reb = this;
    while (reb != null) {
        reb.hzd.yu(zeb);
        reb = reb.xcd
    }
};
lee.prototype.uwd = function (zeb) {
    this.qzb.cgd(zeb);
    var rqe = this;
    while (rqe != null) {
        rqe.hzd.cgd(zeb);
        rqe = rqe.xcd
    }
};
lee.prototype.sqe = function (kbd, rnb) {
    if (!this.xz[kbd | rnb]) return;
    var nfb = this.qzb.nfb;
    for (var mh = 0; mh < nfb.length; mh++) {
        var teb = nfb[mh];
        this.ffb(kbd, rnb, teb, teb)
    }
};

function xad() {
    this.tqe = [];
    this.uqe = [];
    this.length = 0
}
xad.prototype.wib = function () {
    return this.uqe
};
xad.prototype.yu = function (vqe) {
    this.length++;
    this.tqe[vqe.lcd] = vqe;
    this.uqe[vqe.ycd] = vqe
};
xad.prototype.dv = function (tee) {
    return this.uqe[tee]
};
xad.prototype.cgb = function (av) {
    if (!this.uqe[av]) return !1;
    else return !0
};
xad.prototype.zgd = function (kbd, rnb) {
    for (var bfb in cfb.uqe) {
        var reb = cfb.uqe[bfb];
        if (reb.xz[kbd | rnb]) {
            reb.sqe(kbd | rnb)
        }
    }
};
xad.prototype.mdd = function () {
    var nfb = this.uqe;
    for (var xl in nfb) {
        var reb = nfb[xl];
        reb.xcd = cfb.dv(reb.nee);
        if (!reb.xcd) reb.xcd = null;
        for (var wtb in reb.xz) {
            var wae = reb.xz[wtb];
            if (wae) {
                reb.kxb[wtb] = !0
            }
        }
    }
    for (var xl in nfb) {
        var wqe = nfb[xl];
        var reb = wqe.xcd;
        while (reb != null) {
            for (var wtb in reb.xz) {
                var wae = reb.xz[wtb];
                if (wae) {
                    wqe.kxb[wtb] = !0
                }
            }
            reb = reb.xcd
        }
    }
};

function fp(tee) {
    if (tee == nhb) {
        return dfb.wib().slice(0)
    }
    var reb = cfb.dv(tee);
    if (reb != null) {
        return reb.hzd.nfb.slice(0)
    }
    var teb = yzb.dv(tee);
    if (teb != null) {
        var qu = [];
        qu[0] = teb;
        return qu
    }
    return null
}

function xqe() {
    this.nfb = [];
    this.length = 0;
    this.oqb = 0;
    this.yqe = -1;
}
xqe.prototype.dv = function (rnb) {
    return this.nfb[rnb]
};
xqe.prototype.yu = function (zfd) {
    for (var mh = 0; mh < this.nfb.length; mh++) {
        if (zfd.gj < this.nfb[mh].gj) {
            this.nfb.splice(mh, 0, zfd);
            this.oqb++;
            this.length = this.nfb.length;
            return mh
        }
    }
    this.nfb[this.nfb.length] = zfd;
    this.oqb++;
    this.length = this.nfb.length;
    return this.length - 1
};
xqe.prototype.zqe = function (zfd) {
    if (this.yqe < 0) {
        this.yqe = this.nfb.length
    }
    this.nfb[this.nfb.length] = zfd;
    this.oqb++;
    this.length = this.nfb.length;
    return this.length - 1
};
xqe.prototype.dee = function (zfd) {
    var mh = this.yqe;
    if (mh < 0) return;
    var cv = [];
    while (mh < this.nfb.length) {
        cv[cv.length] = this.nfb[mh];
        mh++
    }
    this.nfb.splice(this.yqe, this.nfb.length - this.yqe);
    for (mh = 0; mh < cv.length; mh++) {
        this.yu(cv[mh])
    }
    this.yqe = -1
};
xqe.prototype.mub = function (zfd) {
    for (var mh = 0; mh < this.nfb.length; mh++) {
        if (zfd == this.nfb[mh]) {
            this.nfb.splice(mh, 1);
            this.oqb--;
            this.length = this.nfb.length;
            return !0
        }
    }
    return !1
};
xqe.prototype.nib = function () {
    this.nfb = [];
    this.length = this.oqb = 0
};
xqe.prototype.dv = function (rnb) {
    return this.nfb[rnb]
};
xqe.prototype.ru = function (su) {
    this.nfb = su.nfb.slice();
    this.length = su.length;
    this.oqb = su.oqb;
    this.yqe = su.yqe
};
var are = 0,
    bre = 1,
    cre = 2,
    axb = 3,
    uwb = 4,
    dre = 5,
    mwb = 6,
    ere = 7,
    pwb = 8,
    wwb = 9,
    jwb = 10,
    fre = 11,
    gre = 12,
    exb = 13,
    hre = 14,
    ire = 0,
    jre = 1,
    kre = 2,
    lre = 3,
    mre = 4,
    nre = 5,
    ore = 0,
    pre = 1,
    qre = 2,
    rre = 0,
    sre = 1,
    tre = 2,
    ure = 3;

function vre() {
    this.mld = wre;
    this.nib = wre;
    this.mld()
}

function wre() {
    this.xre = !0;
    this.yre = -1;
    this.zre = !0;
    this.ase = !1;
    this.bse = !1;
    this.cse = are;
    this.dse = 1.0;
    this.ese = 1.0;
    this.fse = 0.0;
    this.gse = 0.0;
    this.phd = 1.0;
    this.qhd = 1.0;
    this.hse = 100;
    this.ise = 100;
    this.jse = 0;
    this.kse = 0;
    this.lse = 0;
    this.mse = 0;
    this.nse = 0.0;
    this.ose = 0.0;
    this.pse = 0.0;
    this.qse = 0.0;
    this.rse = 0.0;
    this.sse = 0.0;
    this.tse = 0.0;
    this.use = 0.0;
    this.vse = 0.0;
    this.wse = 0.0;
    this.xse = 0.0;
    this.yse = 0.0;
    this.zse = 0.0;
    this.ate = 0.0;
    this.bte = 270.0;
    this.cte = ire;
    this.dte = [];
    this.dte[0] = guc;
    this.dte[1] = guc;
    this.dte[2] = guc;
    this.ete = 1.0;
    this.fte = 1.0;
    this.gte = 1.0;
    this.hte = !1;
}

function ite() {
    this.nib = jte;
    this.mld = jte;
    this.mld()
}

function jte() {
    this.xre = !0;
    this.kte = 0;
    this.lte = 0;
    this.vxd = 0.0;
    this.wxd = 0.0;
    this.xxd = 0.0;
    this.yxd = 0.0;
    this.cse = rre;
    this.mte = ore
}

function nte() {
    this.ote;
    this.lte;
    this.pte;
    this.qte;
    this.oh;
    this.ph;
    this.vl;
    this.rte;
    this.bpd;
    this.ste;
    this.nhd;
    this.bh;
    this.tte;
    this.ute
};

function vte() {
    this.nib = wte;
    this.mld = wte;
    this.mld()
}

function wte() {
    this.xre = !1;
    this.xte = [];
    this.yte = [];
    this.zte = !1;
    this.gj = 0.0;
    this.aue = 0.0;
    this.bue = 0.0;
    this.cue = !0;
    this.due = !0
};

function rwb(ogb) {
    var iz = ngb();
    return iz * ogb
}

function eue(fue, gue, hue) {
    var iue = gue - fue;
    if (iue <= 0) return fue;
    var udb = 0.0;
    var zab = 0.0;
    switch (hue) {
    case ore:
        zab = fue + rwb(1) * iue;
        break;
    case pre:
        {
            do {
                udb = (rwb(1) - 0.5) * 6.0
            }
            while (!(exp(-(udb * udb) * 0.5) > rwb(1)));
            zab = fue + ((udb + 3.0) * (1.0 / 6.0)) * iue
        }
        break;
    case qre:
        {
            do {
                udb = (rwb(1) - 0.5) * 6.0
            } while (!(exp(-(udb * udb) * 0.5) > rwb(1)));
            if (udb < 0.0) udb += 6.0;
            zab = fue + (udb * (1.0 / 6.0)) * iue
        }
        break;
    default:
        zab = fue + rwb(1) * iue
    }
    return zab
}

function jue(mu, ogb) {
    var rte;
    if (mu == 0) {
        if (ogb > 0) {
            rte = 270
        } else if (ogb < 0) {
            rte = 90
        } else {
            rte = 0
        }
    } else {
        var tdb = 180.0 * (Math.atan2(ogb, mu)) / Math.PI;
        if (tdb <= 0) {
            rte = -tdb
        } else {
            rte = 360.0 - tdb
        }
    }
    return rte - 360.0 * Math.floor(rte / 360.0)
}

function kue(gxd, lue) {
    return lue * Math.cos(gxd * Math.PI / 180.0)
}

function mue(gxd, lue) {
    return -lue * Math.sin(gxd * Math.PI / 180.0)
}

function nue(oue) {
    pue = ruc[oue.lte]; {
        if (oue.pte <= 0 || oue.qte <= 0) {
            switch (pue.cte) {
            case ire:
                oue.ste = pue.dte[0];
                break;
            case jre:
                oue.ste = pue.dte[0];
                break;
            case kre:
                oue.ste = pue.dte[0];
                break;
            case lre:
                {
                    var iz = ~~ (eue(pue.dte[0], pue.dte[1], ore));
                    var kz = ~~ (eue(pue.dte[2], pue.dte[3], ore));
                    var lz = ~~ (eue(pue.dte[4], pue.dte[5], ore));
                    oue.ste = (iz << 16) + (mz.kz << 8) + mz.lz
                }
                break;
            case mre:
                {
                    var rh = ~~ (eue(pue.dte[0], pue.dte[1], ore));
                    var nx = ~~ (eue(pue.dte[2], pue.dte[3], ore));
                    var ryb = ~~ (eue(pue.dte[4], pue.dte[5], ore));
                    oue.ste = 0xffffff
                }
                break;
            case nre:
                oue.ste = jab(nz(pue.dte[0], pue.dte[1], rwb(1)));
                break
            }
        } else {
            switch (pue.cte) {
            case jre:
                {
                    var que = oue.pte / oue.qte;
                    if (que > 1) que = 1;
                    oue.ste = nz((pue.dte[0]), (pue.dte[1]), que)
                }
                break;
            case kre:
                {
                    var que = 2.0 * oue.pte / oue.qte;
                    if (que > 2) que = 2;
                    if (que < 1) {
                        oue.ste = nz(pue.dte[0], pue.dte[1], que)
                    } else {
                        oue.ste = nz(pue.dte[1], pue.dte[2], que - 1)
                    }
                }
                break
            }
        }
    }
}

function rue(ux, vx, sue) {
    var zab = new nte;
    tue = ruc[sue];
    if (tue == null || tue == undefined) return null;
    zab.ote = !0;
    zab.lte = sue;
    zab.oh = ux;
    zab.ph = vx;
    zab.vl = eue(tue.nse, tue.ose, 0);
    zab.rte = eue(tue.rse, tue.sse, 0);
    zab.bpd = eue(tue.vse, tue.wse, 0);
    zab.qte = eue(tue.hse, tue.ise, 0);
    zab.pte = 0;
    zab.ste = 0xffffff;
    nue(zab);
    zab.nhd = tue.ete;
    zab.bh = eue(tue.dse, tue.ese, 0);
    if (tue.bse) {
        zab.tte = rwb(10000)
    } else {
        zab.tte = 0
    }
    zab.ute = rwb(100000);
    return zab
}

function lkb() {
    var tzb = ruc.length;
    ruc[tzb] = new vre();
    return tzb
}

function nkb(fjb) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return !1;
    ruc[fjb] = null;
    return !0
}

function rkb(fjb) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return !1;
    ruc[fjb].nib();
    return !0
}

function pkb(fjb) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return !1;
    return !0
}

function tkb(fjb, vue) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.cse = vue;
    uue.yre = -1
}

function vkb(fjb, wue, xue, yue, zue) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.yre = wue;
    uue.zre = xue;
    uue.ase = yue;
    uue.bse = zue
}

function xkb(fjb, ave, bve, cve, dve) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.dse = ave;
    uue.ese = bve;
    uue.fse = cve;
    uue.gse = dve
}

function zkb(fjb, yx, zx) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.phd = yx;
    uue.qhd = zx
}

function tlb(fjb, eve, fve) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.hse = eve;
    uue.ise = fve
}

function vlb(fjb, gve, hve) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.kse = gve;
    uue.jse = hve
}

function xlb(fjb, ive, jve) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.mse = ive;
    uue.lse = jve
}

function bmb(fjb, kve, lve, mve, nve) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.nse = kve;
    uue.ose = lve;
    uue.pse = mve;
    uue.qse = nve
}

function dmb(fjb,
    ove, pve, qve, rve) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.rse = ove;
    uue.sse = pve;
    uue.tse = qve;
    uue.use = rve
}

function zlb(fjb, sve, tve, uve, vve, wve) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.vse = sve;
    uue.wse = tve;
    uue.xse = uve;
    uue.yse = vve;
    uue.zse = wve
}

function fmb(fjb, xve, yve) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.ate = xve;
    uue.bte = yve
}

function jlb(fjb, zve, awe, bwe, cwe, dwe, ewe) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.cte = lre;
    uue.dte[0] = zve;
    uue.dte[1] = awe;
    uue.dte[2] = bwe;
    uue.dte[3] = cwe;
    uue.dte[4] = dwe;
    uue.dte[5] = ewe
}

function hlb(fjb, yy, zy) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.cte = nre;
    uue.dte[0] = jab(yy);
    uue.dte[1] = jab(zy)
}

function llb(fjb, fwe, gwe, hwe, iwe, jwe, kwe) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.cte = mre;
    uue.dte[0] = fwe;
    uue.dte[1] = gwe;
    uue.dte[2] = hwe;
    uue.dte[3] = iwe;
    uue.dte[4] = jwe;
    uue.dte[5] = kwe
}

function blb(fjb, lwe) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.cte = ire;
    uue.dte[0] = jab(lwe)
}

function dlb(fjb,
    lwe, mwe) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.cte = jre;
    uue.dte[0] = jab(lwe);
    uue.dte[1] = jab(mwe)
}

function flb(fjb, lwe, nwe, mwe) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.cte = ire;
    uue.dte[0] = jab(lwe);
    uue.dte[1] = jab(nwe);
    uue.dte[2] = jab(mwe)
}

function nlb(fjb, owe) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.ete = owe;
    uue.fte = owe;
    uue.gte = owe
}

function plb(fjb, owe, pwe) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.ete = owe;
    uue.fte = (owe + pwe) / 2.0;
    uue.gte = pwe
}

function rlb(fjb,
    owe, qwe, pwe) {
    var uue = ruc[fjb];
    if (uue == null || uue == undefined) return;
    uue.ete = owe;
    uue.fte = qwe;
    uue.gte = pwe
}

function hmb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return -1;
    var tzb = rwe.yte.length;
    rwe.yte[tzb] = new ite();
    return tzb
}

function jmb(iwb, fjb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return !1;
    var swe = rwe.yte[fjb];
    if (swe == null || swe == undefined) return !1;
    rwe.yte[fjb] = null;
    return !0;
}

function lmb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return !1;
    rwe.yte = [];
    return !0
}

function nmb(iwb, fjb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return !1;
    var swe = rwe.yte[fjb];
    if (swe == null || swe == undefined) return !1;
    return !0
}

function pmb(iwb, fjb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return !1;
    var swe = rwe.yte[fjb];
    if (swe == null || swe == undefined) return !1;
    swe.mld()
}

function rmb(iwb, fjb, twe, uwe, vwe, wwe, vue, xwe) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    var swe = rwe.yte[fjb];
    if (swe == null || swe == undefined) return;
    swe.vxd = twe;
    swe.wxd = uwe;
    swe.xxd = vwe;
    swe.yxd = wwe;
    swe.cse = vue;
    swe.mte = xwe
}

function tmb(iwb, fjb, ywe, zwe) {
    if (zwe < 0) {
        var ngb = rwb(-zwe) | 0;
        if (ngb == 0) {
            zwe = 1
        } else {
            return
        }
    }
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    var swe = rwe.yte[fjb];
    if (swe == null || swe == undefined) return;
    for (var mh = 0; mh <= zwe - 1; mh++) {
        var udb, vdb;
        var axe = !1;
        while (axe == !1) {
            udb = eue(0.0, 1.0, swe.mte);
            vdb = eue(0.0, 1.0, swe.mte);
            if ((swe.mte == qre) && (swe.cse != ure)) {
                if (rwb() < 0.5) {
                    udb = eue(0.0, 1.0, 0)
                } else {
                    vdb = eue(0.0, 1.0, 0)
                }
            }
            switch (swe.cse) {
            case rre:
                axe = !0;
                break;
            case sre:
                if ((vhb(udb - 0.5) + vhb(vdb - 0.5)) <= vhb(0.5)) axe = !0;
                break;
            case tre:
                if ((Math.abs(udb - 0.5) + Math.abs(vdb - 0.5)) <= 0.5) axe = !0;
                break;
            case ure:
                axe = !0;
                break;
            default:
                axe = !0;
                break
            }
        }
        if (swe.cse == ure) {
            dkb(iwb, swe.vxd + (swe.wxd - swe.vxd) * udb, swe.xxd + (swe.yxd - swe.xxd) * udb, ywe, 1)
        } else {
            dkb(iwb, swe.vxd + (swe.wxd - swe.vxd) * udb, swe.xxd + (swe.yxd - swe.xxd) * vdb, ywe, 1)
        }
    }
}

function vmb(iwb, fjb, ywe, zwe) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    var swe = rwe.yte[fjb];
    if (swe == null || swe == undefined) return;
    swe.kte = zwe;
    swe.lte = ywe
}

function dkb(iwb, ux, vx, sue, zwe) {
    zwe = ~~zwe;
    sue = ~~sue;
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    var tue = ruc[sue];
    if (tue == null || tue == undefined) return !1;
    for (var mh = 0; mh < zwe; mh++) {
        var xl = rwe.xte.length;
        rwe.xte[xl] = rue(ux, vx, sue)
    }
}

function fkb(iwb, ux, vx, sue, cab, zwe) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    var tue = ruc[sue];
    if (tue == null || tue == undefined) return !1;
    for (var mh = 1; mh <= zwe; mh++) {
        var xl = rwe.xte.length;
        rwe.xte[xl] = rue(ux, vx, sue);
        rwe.xte[xl].ste = jab(cab);
    }
}

function hkb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return !1;
    rwe.xte = [];
    return !0
}

function jkb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return 0;
    return rwe.xte.oqb
}

function hjb() {
    var xl = suc.length;
    suc[xl] = new vte();
    suc[xl].nib();
    return xl
}

function ljb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return !1;
    return !0
}

function jjb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    suc[iwb] = null;
    return !0
}

function njb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    rwe.nib()
}

function bxe() {
    for (var hxb in suc) {
        var rwe = suc[hxb];
        if (rwe) {
            rwe.xte = []
        }
    }
}

function pjb(iwb, cxe) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    rwe.zte = cxe
}

function rjb(iwb,
    wsb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    rwe.gj = wsb
}

function tjb(iwb, ux, vx) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    rwe.aue = ux;
    rwe.bue = vx
}

function vjb(iwb, dxe) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    rwe.cue = dxe;
}

function xjb(iwb, dxe) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    rwe.due = dxe
}

function exe(iwb) {
    var mh = 0;
    var lob = 0;
    var tzb = 0;
    var rwe = suc[iwb];
    var fxe = rwe.xte;
    mh = 0;
    while (mh < fxe.length) {
        var gxe = fxe[mh];
        var tue = ruc[gxe.lte];
        gxe.pte++;
        if (gxe.pte >= gxe.qte) {
            lob = tue.mse;
            if (lob < 0) {
                if (rwb(-lob) == 0) lob = 1
            }
            if (lob > 0) {
                dkb(iwb, gxe.oh, gxe.ph, tue.lse, lob)
            }
            fxe.splice(mh, 1)
        } else {
            lob = tue.kse;
            if (lob < 0) {
                if (rwb(-lob) == 0) lob = 1
            }
            if (lob > 0) {
                dkb(iwb, gxe.oh, gxe.ph, tue.jse, lob)
            }
            mh++
        }
    }
}

function hxe(iwb) {
    var mh = 0;
    var hhb = 0;
    var km = 0.0;
    var lm = 0.0;
    var ixe = 0.0;
    var wed = 0.0;
    var jxe = 0.0;
    var kxe = 0.0;
    var lxe = 0.0;
    var mxe = 0.0;
    var nxe = 0.0;
    var oxe = 0.0;
    var pxe = 0.0;
    var rwe = suc[iwb];
    var fxe = rwe.xte;
    for (mh = 0; mh < fxe.length; mh++) {
        var gxe = fxe[mh];
        var tue = ruc[gxe.lte];
        gxe.vl = gxe.vl + tue.pse;
        if (gxe.vl < 0) gxe.vl = 0;
        gxe.rte = gxe.rte + tue.tse;
        gxe.bpd = gxe.bpd + tue.xse;
        mxe = 0;
        nxe = 0;
        if ((tue.ate != 0) || (rwe.qxe > 0)) {
            km = kue(gxe.rte, gxe.vl);
            lm = mue(gxe.rte, gxe.vl);
            if (tue.ate != 0) {
                ixe = kue(tue.bte, tue.ate);
                wed = mue(tue.bte, tue.ate);
                km = km + ixe;
                lm = lm + wed;
            }
            gxe.rte = jue(km, lm);
            gxe.vl = Math.sqrt(km * km + lm * lm)
        }
        oxe = ((gxe.pte + 3 * gxe.ute) % 24) / 6.0;
        if (oxe > 2.0) oxe = 4.0 - oxe;
        oxe = oxe - 1.0;
        pxe = ((gxe.pte + 4 * gxe.ute) % 20) / 5.0;
        if (pxe > 2.0) {
            pxe = 4.0 - pxe
        }
        pxe = pxe - 1.0;
        km = kue(gxe.rte + oxe * tue.use, gxe.vl + pxe * tue.qse);
        lm = mue(gxe.rte + oxe * tue.use, gxe.vl + pxe * tue.qse);
        gxe.oh = gxe.oh + km + mxe;
        gxe.ph = gxe.ph + lm + nxe
    }
}

function rxe(iwb) {
    var rwe = suc[iwb];
    var fxe = rwe.xte;
    for (var mh = 0; mh < fxe.length; mh++) {
        var gxe = fxe[mh];
        var tue = ruc[gxe.lte];
        gxe.bh = gxe.bh + tue.fse;
        if (gxe.bh < 0) {
            gxe.bh = 0
        }
        nue(gxe);
        var sxe;
        if (gxe.qte > 0) {
            sxe = 2.0 * gxe.pte / gxe.qte
        } else {
            sxe = 1
        } if (sxe < 1) {
            gxe.nhd = tue.ete * (1 - sxe) + tue.fte * sxe
        } else {
            gxe.nhd = tue.fte * (2 - sxe) + tue.gte * (sxe - 1)
        }
    }
}

function zjb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return 0;
    exe(iwb);
    hxe(iwb);
    rxe(iwb);
    var txe = rwe.yte;
    for (var mh = 0; mh < txe.length; mh++) {
        if (txe[mh].kte != 0) {
            tmb(iwb, mh, txe[mh].lte,
                txe[mh].kte)
        }
    }
}

function uxe() {
    for (var mh = 0; mh < suc.length; mh++) {
        var rwe = suc[mh];
        if (rwe != null) {
            if (rwe.cue) {
                zjb(mh)
            }
        }
    }
}

function vxe(oue, anb, bnb) {
    var sxd = null;
    var jsd = null;
    if (oue.qte <= 0) return;
    var tue = ruc[oue.lte];
    sxd = agb.dv(tue.yre);
    if (sxd == null) {
        var cse = tue.cse;
        if ((cse >= 0) && (cse < hre)) {
            jsd = quc[cse]
        } else {
            return
        }
    }
    var yfd;
    if (jsd != null) {} else {
        if (sxd.nwd <= 0) return;
        if (!tue.zre) {
            yfd = oue.tte
        } else if (tue.ase) {
            yfd = oue.tte + (sxd.lob * oue.pte / oue.qte)
        } else {
            yfd = oue.tte + oue.pte
        }
    }
    var iz = ((oue.pte + 2 * oue.ute) % 16) / 4.0;
    if (iz > 2.0) iz = 4.0 - iz;
    iz = iz - 1.0;
    var wxe = oue.bpd;
    if (tue.zse) wxe = wxe + oue.rte;
    wxe = wxe + iz * tue.yse;
    iz = ((oue.pte + oue.ute) % 16) / 4.0;
    if (iz > 2.0) iz = 4.0 - iz;
    iz = iz - 1.0;
    var nx = oue.bh + iz * tue.gse;
    var nh = oue.ste;
    if (jsd != null) {
        var phd, qhd, bpd;
        var fod = tue.phd * nx;
        var god = tue.qhd * nx;
        var xxe = wxe;
        var yxe = ~~ (oue.oh + anb);
        var zxe = ~~ (oue.ph + bnb);
        if (fod == 1 && god == 1 && xxe == 0 && oue.ste == 0xffffff) {
            spd(jsd, oue.nhd)
        } else {
            kqd(jsd, 0, 0, yxe, zxe, fod, god, xxe * 0.017453293, nh, nh, nh, nh, oue.nhd)
        }
    } else {
        sxd.aye(yfd, oue.oh + anb, oue.ph + bnb, ruc[oue.lte].phd * nx, ruc[oue.lte].qhd * nx,
            wxe, nh, oue.nhd)
    }
}

function bkb(iwb) {
    var rwe = suc[iwb];
    if (rwe == null || rwe == undefined) return;
    var fxe = rwe.xte;
    if (rwe.zte) {
        for (var mh = 0; mh < rwe.xte.length; mh++) {
            vxe(fxe[mh], rwe.aue, rwe.bue)
        }
    } else {
        for (var mh = rwe.xte.length - 1; mh >= 0; mh--) {
            vxe(fxe[mh], rwe.aue, rwe.bue)
        }
    }
}

function bye(cye) {
    for (var mh = 0; mh < suc.length; mh++) {
        var rwe = suc[mh];
        if (rwe != null) {
            if (rwe.due) {
                if (Math.abs(rwe.gj - cye) < 0.01) bkb(mh)
            }
        }
    }
}

function dye() {
    var zab = -1000000000;
    for (var mh = 0; mh < suc.length; mh++) {
        var rwe = suc[mh];
        if (rwe != null && rwe.xte.length > 0) {
            if (rwe.due) {
                if (rwe.gj > zab) zab = rwe.gj
            }
        }
    }
    return zab
}

function eye(cye) {
    var zab = -1000000000;
    for (var mh = 0; mh < suc.length; mh++) {
        var rwe = suc[mh];
        if (rwe != null && rwe.xte.length > 0) {
            if (rwe.due) {
                if ((rwe.gj > zab) && (rwe.gj < cye)) zab = rwe.gj;
            }
        }
    }
    return zab
}
var fye = 0,
    gye = 1;
var hye = 0;

function iye(ux, vx, ajb) {
    this.oh = ux;
    this.ph = vx;
    this.vl = ajb;
    this.uu = 0
}

function jye() {
    this.name = "";
    this.am = hye++;
    this.xf = 0;
    this.kye = 0;
    this.lye = 0;
    this.nib()
}
jye.prototype.nib = function () {
    this.mye = [];
    this.nye = [];
    this.oqb = 0;
    this.oye = 0;
    this.length = 0
};
jye.prototype.pye = function () {
    var mh = 0;
    this.length = 0;
    if (this.oye <= 0) return;
    this.nye[0].uu = 0;
    for (mh = 1; mh < this.oye; mh++) {
        this.nye[mh].uu = this.length = this.length + sqrt(vhb(this.nye[mh].oh - this.nye[mh - 1].oh) + vhb(this.nye[mh].ph - this.nye[mh - 1].ph))
    }
};
jye.prototype.qye = function (ivd, jvd, rye) {
    with(this) {
        this.oye++;
        if (this.oye > this.nye.length) {}
        var sye = new iye();
        this.nye[oye - 1] = sye;
        sye.oh = ivd;
        sye.ph = jvd;
        sye.vl = rye
    }
};
jye.prototype.tye = function () {
    this.oye = 0;
    if (this.oqb <= 0) return;
    for (var mh = 0; mh < this.oqb; mh++) {
        this.qye(this.mye[mh].oh, this.mye[mh].ph,
            this.mye[mh].vl)
    }
    if (this.kye) {
        this.qye(this.mye[0].oh, this.mye[0].ph, this.mye[0].vl)
    }
};
jye.prototype.uye = function (wsb, jbb, kbb, vye, lbb, mbb, wye, ncb, ocb, xye) {
    if (wsb == 0) return;
    var bqb = (jbb + lbb + lbb + ncb) / 4.0;
    var dqb = (kbb + mbb + mbb + ocb) / 4.0;
    var yye = (vye + wye + wye + xye) / 4.0;
    if (vhb(lbb - jbb) + vhb(mbb - kbb) > 16.0) {
        this.uye(wsb - 1, jbb, kbb, vye, (lbb + jbb) / 2.0, (mbb + kbb) / 2.0, (wye + vye) / 2.0, bqb, dqb, yye)
    }
    this.qye(bqb, dqb, yye);
    if (vhb(lbb - ncb) + vhb(mbb - ocb) > 16.0) {
        this.uye(wsb - 1, bqb, dqb, yye, (ncb + lbb) / 2.0, (ocb + mbb) / 2.0, (xye + wye) / 2.0,
            ncb, ocb, xye)
    }
};
jye.prototype.zye = function () {
    var mh = 0;
    var yfd = 0;
    this.oye = 0;
    if (this.oqb <= 0) return;
    if (!this.kye) {
        this.qye(this.mye[0].oh, this.mye[0].ph, this.mye[0].vl)
    }
    if (this.kye) {
        yfd = this.oqb - 1
    } else {
        yfd = this.oqb - 3
    }
    for (mh = 0; mh <= yfd; mh++) {
        var aze = this.mye[mh % this.oqb];
        var bze = this.mye[(mh + 1) % this.oqb];
        var cze = this.mye[(mh + 2) % this.oqb];
        this.uye(this.lye, (aze.oh + bze.oh) / 2.0, (aze.ph + bze.ph) / 2.0, (aze.vl + bze.vl) / 2.0, bze.oh, bze.ph, bze.vl, (bze.oh + cze.oh) / 2.0, (bze.ph + cze.ph) / 2.0, (bze.vl + cze.vl) / 2.0)
    }
    if (!this.kye) {
        this.qye(this.mye[this.oqb - 1].oh, this.mye[this.oqb - 1].ph, this.mye[this.oqb - 1].vl)
    } else {
        this.qye(this.nye[0].oh, this.nye[0].ph, this.nye[0].vl)
    }
};
jye.prototype.dze = function () {
    if (this.xf == 1) {
        this.zye()
    } else {
        this.tye()
    }
    this.pye()
};

function zdd(chd) {
    var dnb = new jye();
    if ((chd != undefined) && (chd != null)) {
        if (chd.lye != undefined) {
            dnb.lye = chd.lye
        }
        if (chd.kye != undefined) {
            dnb.kye = chd.kye;
        }
        if (chd.xf != undefined) {
            dnb.xf = chd.xf
        }
        if (chd.wf != undefined) {
            dnb.name = chd.wf
        }
        if (chd.mye != undefined) {
            dnb.oqb = chd.mye.length
        }
        for (var ocd in chd.mye) {
            var eze = chd.mye[ocd];
            var fze = new iye(eze.oh, eze.ph, eze.vl);
            dnb.mye[dnb.mye.length] = fze
        }
        dnb.dze()
    }
    return dnb
}
var gze = new iye(0, 0, 100);
jye.prototype.inb = function (fjb) {
    var hze = 0;
    if (this.oye <= 0) {
        gze.oh = 0;
        gze.ph = 0;
        gze.vl = 0;
        return gze
    }
    if ((this.oye == 1) || (this.length == 0) || (fjb <= 0)) {
        return this.nye[0]
    }
    if (fjb >= 1) {
        return this.nye[this.oye - 1]
    }
    var uu = this.length * fjb;
    hze = 0;
    while ((hze < this.oye - 2) && (uu >= this.nye[hze + 1].uu)) {
        hze++
    }
    var wyd = this.nye[hze];
    uu = uu - wyd.uu;
    var qh = this.nye[hze + 1].uu - wyd.uu;
    if (qh != 0) {
        hze++;
        gze.oh = wyd.oh + uu * (this.nye[hze].oh - wyd.oh) / qh;
        gze.ph = wyd.ph + uu * (this.nye[hze].ph - wyd.ph) / qh;
        gze.vl = wyd.vl + uu * (this.nye[hze].vl - wyd.vl) / qh;
        wyd = gze
    }
    return wyd
};
jye.prototype.syd = function (fjb) {
    ocd = this.inb(fjb);
    return ocd.oh
};
jye.prototype.tyd = function (fjb) {
    ocd = this.inb(fjb);
    return ocd.ph
};
jye.prototype.ize = function (anb, bnb) {
    for (var mh = 0; mh <= this.oqb - 1; mh++) {
        this.mye[mh].oh += anb;
        this.mye[mh].ph += bnb
    }
    this.dze()
};
jye.prototype.jze = function () {
    var vxd = 100000000;
    var wxd = -100000000;
    var xxd = 100000000;
    var yxd = -100000000;
    for (var mh = 0; mh <= this.oqb - 1; mh++) {
        if (this.mye[mh].oh < vxd) vxd = this.mye[mh].oh;
        if (this.mye[mh].oh > wxd) wxd = this.mye[mh].oh;
        if (this.mye[mh].ph < xxd) xxd = this.mye[mh].ph;
        if (this.mye[mh].ph > yxd) yxd = this.mye[mh].ph
    }
    return new iye((vxd + wxd) / 2.0, (xxd + yxd) / 2.0, 0)
};
jye.prototype.knb = function (yx, zx) {
    var kze = this.jze();
    this.ize(-kze.oh, -kze.ph);
    for (var mh = 0; mh <= this.oqb - 1; mh++) {
        this.mye[mh].oh = this.mye[mh].oh * yx;
        this.mye[mh].ph = this.mye[mh].ph * zx
    }
    this.ize(kze.oh, kze.ph);
    this.dze()
};
jye.prototype.lze = function (ivd, jvd, rye) {
    eze = new iye(ivd, jvd, rye);
    if (!this.mye) this.mye = [];
    this.mye[this.mye.length] = eze;
    this.oqb++;
    this.dze()
};

function dbd() {
    this.ng = [];
    hye = 0
}
dbd.prototype.yu = function (mze) {
    this.ng[mze.am] = mze
};
dbd.prototype.mub = function (mze) {
    this.ng[mze.am] = undefined
};

function nze(wsb) {
    this.gj = wsb;
    this.xh = !0;
    this.oze = new vu()
}
nze.prototype.yu = function (pze) {
    this.oze.yu(pze)
};
nze.prototype.mub = function (pze) {
    this.oze.cgd(pze)
};
nze.prototype.aye = function (fqd) {
    var nfb = this.oze.nfb;
    for (var xl = 0; xl < nfb.length; xl++) {
        var xsb = nfb[xl];
        if (xsb != null) {
            if (((xsb.oh + xsb.qh) > fqd.left) && (xsb.oh < fqd.rfb)) {
                xsb.aye()
            }
        }
    }
};
nze.prototype.wib = function () {
    return this.oze.nfb
};

function qze() {
    this.rze = new xqe();
    this.sze = -1
}
qze.prototype.dv = function (wsb) {
    var tze;
    for (var xl = 0; xl < this.rze.oqb; xl++) {
        tze = this.rze.dv(xl);
        if (tze.gj == wsb) return tze
    }
    return null
};
qze.prototype.mub = function (wsb) {
    var tze = this.dv(wsb);
    if (tze) {
        rze.mub(tze)
    }
};
qze.prototype.yu = function (pze) {
    var tze;
    tze = this.dv(pze.gj);
    if (!tze) {
        tze = new nze(pze.gj);
        this.rze.yu(tze)
    }
    tze.yu(pze)
};
qze.prototype.uze = function (pze) {
    tze = this.dv(pze.gj);
    if (tze) {
        tze.mub(pze)
    }
};
qze.prototype.vze = function () {
    this.sze = this.rze.length - 1;
    return this.rze.dv(this.sze)
};
qze.prototype.wze = function () {
    this.sze--;
    if (this.sze < 0) return null;
    return this.rze.dv(this.sze)
};

function xze() {
    this.yze = [];
    this.sh = 0;
    this.zze = xze.prototype.aaf;
    this.baf = xze.prototype.caf;
};
xze.prototype.daf = function () {
    return (this.yze.length == 0)
};
xze.prototype.caf = function (bgd) {
    this.yze.push(bgd)
};
xze.prototype.aaf = function () {
    if (this.daf()) return undefined;
    var eaf = this.yze[this.sh];
    if ((++this.sh * 2) >= this.yze.length) {
        this.yze = this.yze.slice(this.sh);
        this.sh = 0
    }
    return eaf
};

function odd() {
    this.am = gwc++;
    this.faf()
}
odd.prototype.faf = function () {
    this.gaf = "";
    this.haf = "";
    this.iaf = 30;
    this.jaf = 1024;
    this.kaf = 768;
    this.laf = !1;
    this.maf = !1;
    this.naf = 0xc0c0c0;
    this.oaf = !0;
    this.paf = !0;
    this.qaf = [];
    for (var qu = 0; qu < mtc; qu++) {
        this.qaf[qu] = null
    }
    this.oyb = !1;
    this.raf = null;
    this.mfb = new xqe();
    this.saf = new vu();
    this.saf.wu = !0;
    this.qwd = [];
    this.taf = 0;
    this.uaf = [];
    this.vaf = new qze();
    this.qyb = [];
    this.waf = [];
    this.xaf = null;
    this.yaf = "Room"
};
odd.prototype.zaf = function () {
    return this.oyb
};
odd.prototype.cxb = function () {
    return this.jaf
};
odd.prototype.bxb = function () {
    return this.kaf
};
odd.prototype.dwb = function () {
    return this.iaf
};
odd.prototype.wib = function () {
    return this.mfb.nfb
};
odd.prototype.abf = function (bv) {
    this.jaf = bv;
    rq.ks = bv
};
odd.prototype.bbf = function (bv) {
    this.kaf = bv;
    rq.js = bv
};
odd.prototype.cbf = function (bv) {
    this.iaf = bv;
    rq.sq = bv
};
odd.prototype.dbf = function (gy) {
    this.yaf = gy
};
odd.prototype.ebf = function (fbf) {
    this.haf = fbf;
    rq.eid = fbf
};
odd.prototype.gbf = function (bv) {
    this.laf = bv;
    rq.fid = bv
};
odd.prototype.hbf = function () {
    this.xaf = {
        wf: "room_empty_" + this.am,
        width: 640,
        height: 480,
        wl: [{}, {}, {}, {}, {}, {}, {}, {}],
        yl: [{}, {}, {}, {}, {}, {}, {}, {}],
        zl: [],
        cm: []
    };
    this.pdd(this.xaf)
};
odd.prototype.ibf = function (chd) {
    if (chd != null) {
        this.xaf.width = chd.width;
        this.xaf.height = chd.height;
        this.xaf.bm = chd.bm;
        this.xaf.jbf = chd.jbf;
        this.xaf.kbf = chd.kbf;
        this.xaf.lbf = chd.lbf;
        this.xaf.ul = chd.ul;
        this.xaf.vl = chd.vl;
        this.xaf.rvd = chd.rvd;
        for (var mh = 0; mh < chd.wl.length; mh++) {
            var mbf = chd.wl[mh];
            if (mbf != null) {
                this.xaf.wl[mh] = {
                    xh: mbf.xh,
                    xl: mbf.xl,
                    lm: mbf.lm,
                    km: mbf.km,
                    fhd: mbf.fhd,
                    oh: mbf.oh,
                    ph: mbf.ph,
                    ghd: mbf.ghd,
                    ihd: mbf.ihd,
                    km: mbf.km,
                    lm: mbf.lm,
                    mhd: mbf.mhd,
                    nhd: mbf.nhd,
                    ohd: mbf.ohd
                }
            }
        }
        for (var mh = 0; mh < chd.yl.length; mh++) {
            var nbf = chd.yl[mh];
            if (nbf) {
                this.xaf.yl[mh] = {
                    xh: nbf.xh,
                    dm: nbf.dm,
                    obf: nbf.obf,
                    em: nbf.em,
                    fm: nbf.fm,
                    pbf: nbf.pbf,
                    qbf: nbf.qbf,
                    gm: nbf.gm,
                    hm: nbf.hm,
                    im: nbf.im,
                    jm: nbf.jm,
                    km: nbf.km,
                    lm: nbf.lm,
                    xl: nbf.xl
                }
            }
        }
        this.xaf.zl = new Array(chd.zl.length);
        for (var mh = 0; mh < chd.zl.length; mh++) {
            var rbf = chd.zl[mh];
            if (rbf) {
                this.xaf.zl[mh] = {
                    oh: rbf.oh,
                    ph: rbf.ph,
                    xl: rbf.xl,
                    am: rbf.am
                }
            }
        }
        this.xaf.cm = new Array(chd.zl.length);
        for (var mh = 0; mh < chd.cm.length; mh++) {
            var sbf = chd.cm[mh];
            if (sbf != null) {
                this.xaf.cm[mh] = {
                    oh: sbf.oh,
                    ph: sbf.ph,
                    xl: sbf.xl,
                    zsb: sbf.zsb,
                    atb: sbf.atb,
                    qh: sbf.qh,
                    rh: sbf.rh,
                    gj: sbf.gj,
                    am: sbf.am
                }
            }
        }
    }
};
odd.prototype.pdd = function (tbf) {
    with(this) {
        faf();
        xaf = tbf;
        if (tbf.wf != undefined) dbf(tbf.wf);
        if (tbf.ul != undefined) ebf(tbf.ul);
        if (tbf.width != undefined) abf(tbf.width);
        if (tbf.height != undefined) bbf(tbf.height);
        if (tbf.vl != undefined) cbf(tbf.vl);
        if (tbf.rvd != undefined) gbf(tbf.rvd);
        if (tbf.bm != undefined) naf = tbf.bm;
        if (tbf.jbf != undefined) oaf = tbf.jbf;
        if (tbf.kbf != undefined) oyb = tbf.kbf;
        if (tbf.lbf != undefined) paf = tbf.lbf;
        this.abf(this.jaf);
        this.bbf(this.kaf);
        this.cbf(this.iaf);
        this.ebf(this.haf);
        this.gbf(this.laf);
        qyb = [];
        taf = 0;
        for (var xl in tbf.cm) {
            var ubf = tbf.cm[xl];
            if (ubf != null) {
                var xsb = vbf(ubf);
                this.vaf.yu(xsb);
                this.uaf[xsb.am] = xsb;
                this.taf++
            }
        }
        if (tbf.wbf != undefined) raf = tbf.wbf;
        var mh = 0;
        for (var ryb in tbf.yl) {
            qyb[ryb] = xbf(tbf.yl[ryb])
        }
    }
};
odd.prototype.ybf = function () {
    var mh;
    var zbf = 0;
    var acf = [];
    for (mh = this.mfb.length - 1; mh >= 0; mh--) {
        this.bcf(this.mfb.dv(0))
    }
    for (mh = this.saf.length - 1; mh >= 0; mh--) {
        this.bcf(this.saf.dv(0))
    }
};
odd.prototype.ccf = function () {
    var mh, qh, rh;
    if (dfb.zaf()) {} else {
        qh = dfb.cxb();
        rh = dfb.bxb()
    } if (qh > ypd()) qh = ypd();
    if (rh > zpd()) rh = zpd()
};
odd.prototype.efb = function (ux, vx, dcf) {
    return this.vwd(ux, vx, swc++, dcf, !0)
};
odd.prototype.vwd = function (ux, vx, av, tfb) {
    var ecf = new hvd(ux, vx, av, tfb, !0);
    this.mfb.zqe(ecf);
    yzb.yu(ecf);
    return ecf
};
odd.prototype.fcf = function () {
    var xl = 0;
    for (mh in this.qyb) {
        syb = this.qyb[mh];
        oo(rq, "__view_visible__", xl, syb.xh);
        oo(rq, "__view_xview__",
            xl, syb.crb);
        oo(rq, "__view_yview__", xl, syb.drb);
        oo(rq, "__view_wview__", xl, syb.erb);
        oo(rq, "__view_hview__", xl, syb.frb);
        oo(rq, "__view_xport__", xl, syb.grb);
        oo(rq, "__view_yport__", xl, syb.hrb);
        oo(rq, "__view_wport__", xl, syb.irb);
        oo(rq, "__view_hport__", xl, syb.jrb);
        oo(rq, "__view_angle__", xl, syb.gcf);
        oo(rq, "__view_hborder__", xl, syb.im);
        oo(rq, "__view_vborder__", xl, syb.jm);
        oo(rq, "__view_hspeed__", xl, syb.km);
        oo(rq, "__view_vspeed__", xl, syb.lm);
        oo(rq, "__view_object__", xl, syb.hcf);
        oo(rq, "__view_surface_id__", xl,
            syb.tyb);
        xl++
    }
};
odd.prototype.icf = function () {
    var xl = 0;
    for (mh in this.qyb) {
        syb = this.qyb[mh];
        syb.xh = rac(rq, "__view_visible__", xl);
        syb.crb = rac(rq, "__view_xview__", xl);
        syb.drb = rac(rq, "__view_yview__", xl);
        syb.erb = rac(rq, "__view_wview__", xl);
        syb.frb = rac(rq, "__view_hview__", xl);
        syb.grb = rac(rq, "__view_xport__", xl);
        syb.hrb = rac(rq, "__view_yport__", xl);
        syb.irb = rac(rq, "__view_wport__", xl);
        syb.jrb = rac(rq, "__view_hport__", xl);
        syb.gcf = rac(rq, "__view_angle__", xl);
        syb.im = rac(rq, "__view_hborder__", xl);
        syb.jm = rac(rq,
            "__view_vborder__", xl);
        syb.km = rac(rq, "__view_hspeed__", xl);
        syb.lm = rac(rq, "__view_vspeed__", xl);
        syb.hcf = rac(rq, "__view_object__", xl);
        syb.tyb = rac(rq, "__view_surface_id__", xl);
        xl++
    }
};
odd.prototype.jcf = function () {
    for (var mh = 0; mh < bw.shd.length; mh++) {
        var ryb = rac(global, "__background_visible__", mh);
        var jgb = rac(global, "__background_foreground__", mh);
        if (ryb && !jgb) {
            var aw = bw.dv(mh);
            aw.km = rac(global, "__background_hspeed__", mh);
            aw.lm = rac(global, "__background_vspeed__", mh);
            aw.oh = rac(global, "__background_x__", mh);
            aw.ph = rac(global, "__background_y__", mh);
            aw.oh += aw.km;
            aw.ph += aw.lm;
            oo(global, "__background_x__", mh, aw.oh);
            oo(global, "__background_y__", mh, aw.ph)
        }
    }
};
odd.prototype.kcf = function () {
    var mh;
    var uu, qu, lcf, mcf;
    var syb;
    var teb;
    if (!this.oyb) return;
    this.icf();
    for (mh in this.qyb) {
        syb = this.qyb[mh];
        if ((syb.xh) && (syb.hcf >= 0)) {
            teb = null;
            if (syb.hcf < 100000) {
                var reb = cfb.dv(syb.hcf);
                if (reb != null) {
                    var nfb = reb.vxb();
                    for (var bfb in nfb) {
                        teb = nfb[bfb];
                        if (!teb.ueb) break;
                        teb = null
                    }
                }
            } else {
                teb = yzb.dv(syb.hcf);
                if (!teb && teb.ueb) teb = null
            } if (teb != null) {
                uu = syb.crb;
                qu = syb.drb;
                lcf = Math.round(teb.oh);
                mcf = Math.round(teb.ph);
                if (2 * syb.im >= syb.erb) {
                    uu = lcf - syb.erb / 2
                } else if (lcf - syb.im < syb.crb) {
                    uu = lcf - syb.im
                } else if (lcf + syb.im > syb.crb + syb.erb) {
                    uu = lcf + syb.im - syb.erb
                }
                if (2 * syb.jm >= syb.frb) {
                    qu = mcf - syb.frb / 2
                } else if (mcf - syb.jm < syb.drb) {
                    qu = mcf - syb.jm
                } else if (mcf + syb.jm > syb.drb + syb.frb) {
                    qu = mcf + syb.jm - syb.frb
                }
                if (uu < 0) uu = 0;
                if (uu + syb.erb > this.jaf) uu = this.jaf - syb.erb;
                if (qu < 0) qu = 0;
                if (qu + syb.frb > this.kaf) qu = this.kaf - syb.frb;
                if (syb.km >= 0) {
                    if ((uu < syb.crb) && (syb.crb - uu > syb.km)) uu = syb.crb - syb.km;
                    if ((uu > syb.crb) && (uu - syb.crb > syb.km)) uu = syb.crb + syb.km
                }
                if (syb.lm >= 0) {
                    if ((qu < syb.drb) && (syb.drb - qu > syb.lm)) qu = syb.drb - syb.lm;
                    if ((qu > syb.drb) && (qu - syb.drb > syb.lm)) qu = syb.drb + syb.lm
                }
                syb.crb = uu;
                syb.drb = qu
            }
        }
    }
    this.fcf()
};
var ncf = !1;
odd.prototype.ocf = function (fqd) {
    var tze = this.vaf.vze();
    var pcf = tze.gj;
    for (var mh = this.mfb.length - 1; mh >= 0; mh--) {
        var teb = this.mfb.dv(mh);
        if (teb.ueb || teb.xh == 0) continue;
        while (pcf > teb.gj) {
            tze.aye(fqd);
            tze = this.vaf.wze();
            if (tze) {
                pcf = tze.gj
            } else {
                pcf = -1000000000000
            }
        }
        if (!teb.kxb[fcc]) {
            var zfb = agb.dv(teb.wfb);
            if (zfb) {
                if ((teb.xvd == 1.0) && (teb.yvd == 1.0) && (teb.cs == 0.0) && (teb.awd == 0xffffff)) {
                    zfb.qcf(teb.xr, teb.oh, teb.ph, teb.zvd)
                } else {
                    zfb.aye(teb.xr, teb.oh, teb.ph, teb.xvd, teb.yvd, teb.cs, teb.awd, teb.zvd);
                }
            }
        } else {
            teb.ffb(fcc, 0, teb, teb)
        }
    }
    while (tze) {
        tze.aye(fqd);
        tze = this.vaf.wze()
    }
};
odd.prototype.rcf = function (fqd) {
    var zfb, teb, mh, nfb, gnd;
    nfb = this.mfb.nfb;
    gnd = agb.cg;
    for (mh = nfb.length - 1; mh >= 0; mh--) {
        teb = nfb[mh];
        if (teb.ueb || !teb.xh) continue;
        if (!teb.kxb[fcc]) {
            zfb = gnd[teb.wfb];
            if (zfb) {
                if ((teb.xvd == 1.0) && (teb.yvd == 1.0) && (teb.cs == 0.0) && (teb.awd == 0xffffff)) {
                    zfb.qcf(teb.xr, teb.oh, teb.ph, teb.zvd)
                } else {
                    zfb.aye(teb.xr, teb.oh, teb.ph, teb.xvd, teb.yvd, teb.cs, teb.awd, teb.zvd)
                }
            }
        } else {
            teb.ffb(fcc, 0, teb, teb)
        }
    }
};
odd.prototype.scf = function (fqd) {
    var tcf = dye();
    for (var mh = this.mfb.length - 1; mh >= 0; mh--) {
        var teb = this.mfb.dv(mh);
        if (teb.ueb || teb.xh == 0) continue;
        while (tcf > teb.gj) {
            bye(tcf);
            tcf = eye(tcf)
        }
        if (!teb.kxb[fcc]) {
            var zfb = agb.dv(teb.wfb);
            if (zfb) {
                if ((teb.xvd == 1.0) && (teb.yvd == 1.0) && (teb.cs == 0.0) && (teb.awd == 0xffffff)) {
                    zfb.qcf(teb.xr, teb.oh, teb.ph, teb.zvd);
                } else {
                    zfb.aye(teb.xr,
                        teb.oh, teb.ph, teb.xvd, teb.yvd, teb.cs, teb.awd, teb.zvd)
                }
            }
        } else {
            teb.ffb(fcc, 0, teb, teb)
        }
    }
    while (tcf > -1000000000) {
        bye(tcf);
        tcf = eye(tcf)
    }
};
odd.prototype.ucf = function (fqd) {
    for (var xl in this.uaf) {
        var xsb = this.uaf[xl];
        if (((xsb.oh + xsb.qh) > fqd.left) && (xsb.oh < fqd.rfb)) {
            xsb.aye()
        }
    }
    var tcf = dye();
    for (var mh = this.mfb.length - 1; mh >= 0; mh--) {
        var teb = this.mfb.dv(mh);
        if (teb.ueb || teb.xh == 0) continue;
        while (tcf > teb.gj) {
            bye(tcf);
            tcf = eye(tcf)
        }
        if (!teb.kxb[fcc]) {
            var zfb = agb.dv(teb.wfb);
            if (zfb) {
                if ((teb.xvd == 1.0) && (teb.yvd == 1.0) && (teb.cs == 0.0) && (teb.awd == 0xffffff)) {
                    zfb.qcf(teb.xr, teb.oh, teb.ph, teb.zvd)
                } else {
                    zfb.aye(teb.xr, teb.oh, teb.ph, teb.xvd, teb.yvd, teb.cs, teb.awd, teb.zvd)
                }
            }
        } else {
            teb.ffb(fcc, 0, teb, teb)
        }
    }
    while (tcf > -1000000000) {
        bye(tcf);
        tcf = eye(tcf)
    }
};
odd.prototype.vcf = function (fqd) {
    zqb = fqd;
    if (this.oaf) {
        wpd(rq.gid)
    }
    for (var mh = 0; mh < bw.shd.length; mh++) {
        var aw = bw.dv(mh);
        if (aw) {
            aw.xh = rac(global, "__background_visible__", mh);
            aw.fhd = rac(global, "__background_foreground__", mh);
            aw.oh = rac(global, "__background_x__", mh);
            aw.ph = rac(global, "__background_y__", mh);
            aw.xl = rac(global,
                "__background_index__", mh);
            aw.hhd = rac(global, "__background_htiled__", mh);
            aw.jhd = rac(global, "__background_vtiled__", mh);
            aw.nhd = rac(global, "__background_alpha__", mh);
            aw.ohd = rac(global, "__background_blend__", mh);
            aw.km = rac(global, "__background_hspeed__", mh);
            aw.lm = rac(global, "__background_vspeed__", mh);
            if (aw != null && aw.xh && !aw.fhd) {
                var opb = bw.cw(aw.xl);
                if (opb != null) {
                    if (aw.mhd) {
                        ktd(opb.dw, aw.oh, aw.ph, this.jaf, this.kaf, aw.ohd, aw.nhd)
                    } else {
                        tpd(opb.dw, aw.oh, aw.ph, aw.hhd, aw.jhd, aw.ohd, aw.nhd)
                    }
                }
            }
        }
    }
    if (this.vaf.rze.oqb > 0) {
        if (suc.length != 0) {
            this.ucf(fqd)
        } else {
            this.ocf(fqd)
        }
    } else if (suc.length != 0) {
        this.scf(fqd)
    } else {
        this.rcf(fqd)
    }
    for (var mh = 0; mh < bw.shd.length; mh++) {
        var aw = bw.dv(mh);
        if (aw != null && aw.xh && aw.fhd) {
            var opb = bw.cw(aw.xl);
            if (opb != null) {
                if (aw.mhd) {
                    ktd(opb.dw, aw.oh, aw.ph, this.jaf, this.kaf, aw.ohd, aw.nhd)
                } else {
                    tpd(opb.dw, aw.oh, aw.ph, aw.hhd, aw.jhd)
                }
            }
        }
    }
};
odd.prototype.wcf = function () {
    var bob = agb.dv(oxc);
    if (bob != null) {
        bob.aye(pxc, st.wyb - vyb.left, st.xyb - vyb.top, 1.0, 1.0, 0, 0xffffff, 1.0)
    }
    pxc++;
    if (pxc > bob.lob) pxc -= bob.lob
};
odd.prototype.aye = function () {
    var iz = new bpb();
    this.kcf();
    var nyb;
    if (!this.oyb) {
        nyb = pyb;
        kpd = lwc / dfb.jaf;
        lpd = mwc / dfb.kaf
    } else {
        nyb = this.qyb;
        if (this.paf) wpd(kxc)
    }
    var xcf = kpd;
    var ycf = lpd;
    tvc = 0;
    for (mh in nyb) {
        brb = nyb[mh];
        if (brb.xh) {
            var zcf = srb;
            sqd();
            if (brb.tyb != -1) {
                uqb(brb.tyb);
                kpd = 1.0;
                lpd = 1.0
            }
            brb.krb = brb.grb * kpd;
            brb.lrb = brb.hrb * lpd;
            brb.mrb = brb.irb * kpd;
            brb.nrb = brb.jrb * lpd;
            brb.orb = brb.krb + brb.mrb;
            brb.prb = brb.lrb + brb.nrb;
            brb.zyb = brb.mrb / brb.erb;
            brb.bzb = brb.nrb / brb.frb;
            upd(brb.krb, brb.lrb, brb.mrb, brb.nrb);
            vpd(brb.crb, brb.drb, brb.erb, brb.frb,
                brb.gcf);
            iz.left = brb.crb;
            iz.top = brb.drb;
            iz.rfb = brb.crb + brb.erb;
            iz.bottom = brb.drb + brb.frb;
            rq.yid = tvc;
            this.vcf(iz);
            if (brb.tyb != -1) qrb();
            tvc++;
            uqd();
            srb = cu.getContext('2d');
            kpd = xcf;
            lpd = ycf
        }
    }
    if (oxc >= 0) this.wcf()
};
odd.prototype.adf = function () {
    var bdf = [];
    var cdf = yzb.fzd.nfb;
    for (var mh in cdf) {
        var teb = cdf[mh];
        if (teb.ueb) {
            bdf[bdf.length] = teb
        }
    }
    for (var mh = 0; mh < bdf.length; mh++) {
        var teb = bdf[mh];
        this.bcf(teb)
    }
};
odd.prototype.bcf = function (teb) {
    yzb.izd(teb);
    this.mfb.mub(teb);
    this.saf.cgd(teb);
    teb.xfb.uwd(teb)
};
odd.prototype.ddf = function (pz) {
    if (pz.yxb) {
        this.mfb.mub(pz);
        pz.xfb.uwd(pz);
        this.saf.yu(pz);
        pz.yxb = !1;
    }
};
odd.prototype.edf = function (pz) {
    if (!pz.yxb) {
        this.saf.cgd(pz);
        this.mfb.zqe(pz);
        pz.xfb.vwd(pz);
        pz.yxb = !0
    }
};
odd.prototype.btb = function (pze) {
    this.vaf.yu(pze);
    this.uaf[pze.am] = pze;
    this.taf++
};
odd.prototype.uze = function (av) {
    var xsb = this.uaf[av];
    if (xsb) {
        this.vaf.uze(xsb);
        this.uaf[av] = null;
        this.taf--
    }
};
odd.prototype.fdf = function () {
    if (this.qwd.length == 0) return;
    var cv = this.qwd;
    for (var mh = 0; mh < this.qwd.length; mh++) {
        var teb = cv[mh];
        this.mfb.mub(teb);
        this.mfb.yu(teb, teb.gj)
    }
    this.qwd = []
};

function yad() {
    this.nnb = [];
    this.tdd = []
}
yad.prototype.qdd = function (gdf) {
    this.tdd = gdf
};
yad.prototype.yu = function (hdf) {
    return this.nnb[this.nnb.length] = hdf
};
yad.prototype.dv = function (idf) {
    return this.nnb[idf]
};
yad.prototype.pnb = function (idf) {
    return this.nnb[this.tdd[idf]];
};
yad.prototype.mub = function (idf) {
    this.nnb[idf] = null
};
var qcd = [];

function jdf() {
    this.wf = "";
    this.xf = 0;
    this.yf = "";
    this.zf = "";
    this.ag = 0;
    this.volume = 1;
    this.bg = 0;
    this.preload = !0;
    this.kdf = 1.0;
    this.ldf = 0;
    this.mdf = []
}
jdf.prototype.ndf = function (chd) {
    this.wf = chd.wf;
    this.xf = chd.xf;
    this.yf = chd.yf;
    this.zf = chd.zf;
    this.ag = chd.ag;
    this.volume = chd.volume;
    this.bg = chd.bg;
    this.preload = chd.preload;
    this.kdf = 1.0;
    this.odf(this.wf)
};
jdf.prototype.odf = function (qbd) {
    this.ldf = 0;
    this.mdf = [];
    for (var mh = 0; mh < otc; mh++) {
        if (qcd[this.wf] != null) {
            this.mdf[mh] = qcd[this.wf]
        }
    }
};

function pcd(uud, av, pdf, qdf, rdf) {
    if (xac == !1) {
        return -1
    }
    var sdf = !1;
    var tdf;
    var xl;
    xl = uud.indexOf(pdf);
    if (xl >= 0) {
        uud = uud.substr(0, xl)
    }
    if (awc) {
        pdf = "ogg"
    } else if (zvc) {
        pdf = "mp3"
    } else {
        pdf = "ogg"
    }
    sdf = !0;
    if (sdf) {
        uud = uud + "." + pdf;
        var udf = new Audio();
        udf.lbd = uud;
        udf.autobuffer = !0;
        if (typeof udf.loop == 'boolean') udf.loop = !1;
        udf.preload = 'auto';
        udf.xbd = !1;
        udf.vdf = !1;
        var nsb = document.createElement('source');
        nsb.setAttribute("src", uud);
        if (pdf == "ogg") {
            nsb.setAttribute("type", 'audio/ogg');
            nsb.setAttribute("codecs", 'vorbis')
        } else {
            nsb.setAttribute("type", 'audio/mpeg')
        }
        udf.setAttribute("networkState", 0);
        udf.insertBefore(nsb, null);
        document.body.appendChild(udf);
        qcd[av] = udf;
        udf.addEventListener('canplaythrough',
            qdf, !1);
        udf.addEventListener('error', rdf, !1);
        udf.addEventListener("loadstart", tbd, !1);
        udf.addEventListener("suspend", ubd, !1);
        udf.addEventListener("stalled", vbd, !1);
        udf.addEventListener("stall", vbd, !1);
        udf.load()
    }
    return av
}

function bbd() {
    this.vf = [];
    this.length = 0
}
bbd.prototype.mub = function (rnb) {
    if (this.vf[rnb]) {
        this.wdf(rnb);
        this.vf[rnb] = undefined
    }
};

function xdf() {
    ydf.vdf = !1
}
bbd.prototype.tnb = function (rnb) {
    var ydf = this.vf[rnb];
    if (!ydf) return;
    var ydf = ydf.mdf[this.vf[rnb].ldf];
    this.vf[rnb].ldf++;
    if (this.vf[rnb].ldf >= otc) this.vf[rnb].ldf = 0;
    if (ydf != null) {
        try {
            ydf.removeEventListener('ended', zdf, !1);
            ydf.removeEventListener('ended', xdf, !1);
            if (typeof ydf.loop == 'boolean') {
                ydf.loop = !1
            }
            try {
                if (ydf.currentTime != 0) {
                    ydf.currentTime = 0
                }
            } catch (wrb) {
                if (bwc) zw("Error setting current sound time: " + this.vf[rnb].wf)
            }
            ydf.volume = this.vf[rnb].kdf * twc;
            ydf.addEventListener('ended', xdf, !1);
            ydf.vdf = !0;
            ydf.play()
        } catch (wrb) {
            if (bwc) zw("Error playing sound: " + this.vf[rnb].wf)
        }
    }
};
bbd.prototype.wdf = function (sgd) {
    with(this) {
        var aef = this.vf[sgd];
        if (!aef) return;
        aef = aef.mdf;
        for (var mh in aef) {
            ydf = aef[mh];
            if (ydf != null) {
                try {
                    ydf.pause();
                    ydf.vdf = !1
                } catch (wrb) {
                    if (bwc) zw("Error stopping sound: " + this.vf[sgd].wf)
                }
            }
        }
    }
};
bbd.prototype.vnb = function () {
    for (var bef in this.vf) {
        if (this.vf[bef]) {
            var aef = this.vf[bef].mdf;
            for (var mh in aef) {
                ydf = aef[mh];
                if (ydf != null) {
                    try {
                        ydf.pause();
                        ydf.vdf = !1
                    } catch (wrb) {
                        if (bwc) zw("Error stopping sound: " + ydf.wf)
                    }
                }
            }
        }
    }
};

function zdf() {
    try {
        this.currentTime = 0
    } catch (wrb) {
        if (bwc) zw("Error setting current sound time: " + this.vf[rnb].wf)
    }
    this.play()
}
bbd.prototype.unb = function (sgd) {
    var cef = this.vf[sgd];
    if (!cef) return;
    var aef = cef.mdf;
    for (var mh in aef) {
        var ydf = aef[mh];
        if (ydf != null) {
            try {
                if (typeof ydf.loop == 'boolean') {
                    ydf.loop = !0
                } else {
                    ydf.removeEventListener('ended', zdf, !1);
                    ydf.removeEventListener('ended', xdf, !1);
                    ydf.addEventListener('ended', zdf, !1);
                    ydf.def = null
                }
                try {
                    if (ydf.currentTime != 0) {
                        ydf.currentTime = 0
                    }
                } catch (wrb) {
                    if (bwc) zw("Error setting current sound time: " + this.vf[rnb].wf)
                }
                ydf.volume = this.vf[sgd].kdf * twc;
                ydf.vdf = !0;
                ydf.play()
            } catch (wrb) {
                if (bwc) zw("Error looping sound: " + this.vf[sgd].wf)
            }
        }
    }
};
bbd.prototype.dv = function (rnb) {
    return this.vf[rnb]
};
bbd.prototype.nib = function () {
    this.vf = [];
    length = 0
};
bbd.prototype.yu = function (chd) {
    with(this) {
        var aw = null;
        if (chd != null) {
            aw = new jdf();
            aw.ndf(chd)
        }
        vf[vf.length] = aw
    }
};

function bpb() {
    this.left = 0;
    this.top = 0;
    this.rfb = 0;
    this.bottom = 0
}
bpb.prototype.ru = function (upb) {
    this.left = upb.left;
    this.rfb = upb.rfb;
    this.top = upb.top;
    this.bottom = upb.bottom
};

function yob() {
    this.wf = "sprite";
    this.width = 16;
    this.height = 16;
    this.qfb = new bpb;
    this.mg = !0;
    this.dg = !0;
    this.preload = !0;
    this.cpb = 0;
    this.dpb = !1;
    this.eg = 0;
    this.fg = 0;
    this.epb = !1;
    this.lob = 0;
    this.fpb = 8;
    this.gpb = !1;
    this.hpb = !1;
    this.ipb = [];
    this.eef = [];
    this.pob = [];
    this.jpb = []
}
yob.prototype.uxd = function () {
    return this.dpb
};
yob.prototype.fef = function () {
    return this.lob
};
yob.prototype.gef = function () {
    var hef = (this.fg * this.fg);
    var ief = (this.eg * this.eg);
    var jef = (this.width - this.eg) * (this.width - this.eg);
    var kef = (this.height - this.fg) * (this.height - this.fg);
    var lef = ~~ceil(sqrt(ief + hef));
    var mef = ~~ceil(sqrt(jef + hef));
    var nef = ~~ceil(sqrt(ief + kef));
    var oef = ~~ceil(sqrt(jef + kef));
    this.fpb = yab(lef, yab(mef, yab(nef, oef)))
};

function pef(qef, gmd) {
    if (qef.jpb[gmd] != null) {
        var wab = [];
        var src = 0;
        var ref = 0;
        var nw;
        while (src < qef.jpb[gmd].length) {
            var sef = qef.jpb[gmd][src++];
            if (sef & 0x80) {
                sef = (sef & 0x7f) + 1;
                nw = qef.jpb[gmd][src++];
                for (var ryb = 0; ryb < sef; ryb++) {
                    wab[ref++] = nw
                }
            } else {
                sef++;
                for (var ryb = 0; ryb < sef; ryb++) {
                    wab[ref++] = qef.jpb[gmd][src++];
                }
            }
        }
    }
    qef.jpb[gmd] = wab
}

function vdd(tef) {
    var zfb = new yob();
    if (tef.wf != undefined) zfb.wf = tef.wf;
    if (tef.width != undefined) zfb.width = tef.width;
    if (tef.height != undefined) zfb.height = tef.height;
    if (tef.jg != undefined) zfb.qfb.left = tef.jg;
    if (tef.gg != undefined) zfb.qfb.rfb = tef.gg;
    if (tef.kg != undefined) zfb.qfb.top = tef.kg;
    if (tef.hg != undefined) zfb.qfb.bottom = tef.hg;
    if (tef.mg != undefined) zfb.mg = tef.mg;
    if (tef.dg != undefined) zfb.dg = tef.dg;
    if (tef.preload != undefined) zfb.preload = tef.preload;
    if (tef.uef != undefined) zfb.cpb = tef.uef;
    if (tef.vef != undefined) zfb.dpb = tef.vef;
    if (tef.eg != undefined) zfb.eg = tef.eg;
    if (tef.fg != undefined) zfb.fg = tef.fg;
    zfb.jpb = null;
    if (tef.jpb != undefined) zfb.jpb = tef.jpb;
    zfb.pob = [];
    for (var mh = tef.ig.length - 1; mh >= 0; mh--) {
        zfb.pob[mh] = tef.ig[mh]
    }
    zfb.lob = zfb.pob.length;
    zfb.gef();
    for (var mh = 0; mh < zfb.pob.length; mh++) {
        zfb.pob[mh] = dhd(zfb.pob[mh]);
        if (zfb.pob[mh].qm == 0) zfb.pob[mh].qm = 1;
        if (zfb.pob[mh].rm == 0) zfb.pob[mh].rm = 1
    }
    if (zfb.jpb) {
        for (var mh = 0; mh < tef.jpb.length; mh++) {
            if (!tef.wef) pef(zfb, mh);
            zfb.gpb = !0;
            var bh = zfb.width * zfb.height;
            var xef = [];
            xef[bh - 1] = 0;
            var yef = ((zfb.width + 7) >> 3);
            var zef = 0;
            for (var ph = 0; ph < zfb.height; ++ph, zef += yef) {
                var wab = 0x80;
                var aff = zef;
                for (var oh = 0; oh < zfb.width; ++oh, wab >>= 1) {
                    if (wab == 0) {
                        wab = 0x80;
                        ++aff
                    }
                    xef[oh + (ph * zfb.width)] = ((zfb.jpb[mh][aff] & wab) != 0)
                }
            }
            zfb.ipb[mh] = xef
        }
    }
    tef.wef = !0;
    return zfb
}
yob.prototype.qcf = function (bff, ux, vx, dab) {
    if (this.lob <= 0) return;
    var fpb = this.fpb;
    if (((zqb.top - vx) <= fpb) && ((vx - zqb.bottom) <= fpb) && ((zqb.left - ux) <= fpb) && ((ux - zqb.rfb) <= fpb)) {
        bff = (~~bff) % this.lob;
        if (bff < 0) bff = bff + this.lob;
        spd(this.pob[bff], ux - this.eg, vx - this.fg, dab)
    }
};
yob.prototype.aye = function (fjb, ux, vx, yx, zx, ay, abb, dab) {
    if (this.lob <= 0) return;
    var cff = abs(this.fpb * yx);
    var dff = abs(this.fpb * zx);
    var fpb;
    if (cff > dff) {
        fpb = cff
    } else {
        fpb = dff
    } if (((zqb.top - vx) <= fpb) && ((vx - zqb.bottom) <= fpb) && ((zqb.left - ux) <= fpb) && ((ux - zqb.rfb) <= fpb)) {
        fjb = (~~fjb) % this.lob;
        if (fjb < 0) fjb += this.lob;
        ay = tzc(ay, 360.0);
        kqd(this.pob[fjb], this.eg, this.fg, ux, vx, yx, zx, ay * Math.PI / 180.0, abb, abb, abb, abb, dab)
    }
};
yob.prototype.eff = function (fff, gff, jbb, kbb, hff, iff, ay, ux, vx) {
    var udb, vdb;
    if (!this.gpb) return !0;
    if (this.lob <= 0) return !1;
    fff = fff % this.ipb.length;
    if (fff < 0) fff = fff + this.ipb.length;
    if (Math.abs(ay) < 0.0001) {
        udb = Math.floor((ux - jbb) / hff + this.eg);
        vdb = Math.floor((vx - kbb) / iff + this.fg)
    } else {
        var uab = Math.sin(-ay * Math.PI / 180.0);
        var cod = Math.cos(-ay * Math.PI / 180.0);
        udb = Math.floor((cod * (ux - jbb) + uab * (vx - kbb)) / hff + this.eg);
        vdb = Math.floor((cod * (vx - kbb) - uab * (ux - jbb)) / iff + this.fg)
    } if ((udb < 0) || (udb >= this.width)) return !1;
    if ((vdb < 0) || (vdb >= this.height)) return !1;
    return this.ipb[fff][udb + (vdb * this.width)]
};
yob.prototype.jyd = function (fff, gff, jbb, kbb, hff, iff, ay, jff) {
    if (!this.gpb) return !0;
    if (this.lob <= 0) return !1;
    fff = fff % this.ipb.length;
    if (fff < 0) {
        fff = fff + this.ipb.length
    }
    var uu = yab(gff.left, jff.left);
    var iz = xab(gff.rfb, jff.rfb);
    var qu = yab(gff.top, jff.top);
    var lz = xab(gff.bottom, jff.bottom);
    if ((hff == 1) && (iff == 1) && (Math.abs(this.gcf) < 0.0001)) {
        for (var mh = uu; mh <= iz; mh++) {
            for (var hhb = qu; hhb <= lz; hhb++) {
                var udb = mh - jbb + this.eg;
                var vdb = hhb - kbb + this.fg;
                if ((udb < 0) || (udb >= this.qh)) continue;
                if ((vdb < 0) || (vdb >= this.rh)) continue;
                if (this.ipb[fff][udb + (vdb * this.qh)] == !0) return !0
            }
        }
    } else {
        var uab = Math.sin(-ay * lgb / 180.0);
        var cod = Math.cos(-ay * lgb / 180.0);
        var kff = 1.0 / hff;
        var lff = 1.0 / iff;
        for (var mh = uu; mh <= iz; mh++) {
            for (var hhb = qu; hhb <= lz; hhb++) {
                var udb = Math.floor((cod * (mh - jbb) + uab * (hhb - kbb)) * kff + this.eg);
                var vdb = Math.floor((cod * (hhb - kbb) - uab * (mh - jbb)) * lff + this.fg);
                if ((udb < 0) || (udb >= this.width)) continue;
                if ((vdb < 0) || (vdb >= this.height)) continue;
                if (this.ipb[fff][udb + (vdb * this.width)]) return !0
            }
        }
    }
    return !1
};
yob.prototype.mff = function (fff, gff, jbb, kbb, hff, iff, ay, jff) {
    var mh, hhb;
    if (!this.gpb) return !0;
    if (nff > 3) {
        nff = (1 + nff) - 1
    }
    if (this.lob <= 0) return !1;
    fff = fff % this.ipb.length;
    if (fff < 0) fff = fff + this.ipb.length;
    var uu = yab(gff.left, jff.left);
    var iz = xab(gff.rfb,
        jff.rfb);
    var qu = yab(gff.top, jff.top);
    var lz = xab(gff.bottom, jff.bottom);
    var bqb = ((jff.rfb + jff.left) / 2);
    var dqb = ((jff.bottom + jff.top) / 2);
    var gsd = 1.0 / ((jff.rfb - jff.left) / 2);
    var tab = 1.0 / ((jff.bottom - jff.top) / 2);
    var off = this.ipb[fff];
    if ((hff == 1) && (iff == 1) && (Math.abs(ay) < 0.0001)) {
        for (mh = uu; mh <= iz; mh++) {
            var pff = vhb((mh - bqb) * gsd);
            var udb = mh - jbb + this.eg;
            if ((udb < 0) || (udb >= this.width)) continue;
            for (hhb = qu; hhb <= lz; hhb++) {
                if (pff + vhb((hhb - dqb) * tab) > 1) continue;
                var vdb = hhb - kbb + this.fg;
                if ((vdb < 0) || (vdb >= this.height)) continue;
                if (off[udb + (vdb * this.width)]) return !0
            }
        }
    } else {
        var uab = Math.sin(-ay * Math.PI / 180.0);
        var cod = Math.sin(-ay * Math.PI / 180.0);
        var kff = 1.0 / hff;
        var lff = 1.0 / iff;
        for (mh = uu; mh <= iz; mh++) {
            var qff = (mh - jbb);
            var rff = cod * qff;
            var sff = uab * qff;
            var tff = vhb((mh - bqb) * gsd);
            for (hhb = qu; hhb <= lz; hhb++) {
                var uff = (hhb - dqb) * tab;
                if ((tff + (uff * uff)) > 1) continue;
                var vff = hhb - kbb;
                var udb = ~~ ((rff + uab * vff * kff) + this.eg);
                if ((udb < 0) || (udb >= this.width)) continue;
                var vdb = ~~ ((cod * vff - sff * lff) + this.fg);
                if ((vdb < 0) || (vdb >= this.height)) continue;
                if (off[udb + (vdb * this.width)]) return !0
            }
        }
    }
    return !1
};
yob.prototype.oyd = function (fff, gff, jbb, kbb, wff, xff, yff, zff, agf, bgf, lbb, mbb, cgf, dgf, egf) {
    if (zff == null) return !1;
    if (this.lob <= 0) return !1;
    if (zff.lob <= 0) return !1;
    if (this.ipb.length > 0) fff = fff % this.ipb.length;
    if (fff < 0) {
        fff = fff + this.ipb.length;
    }
    if (zff.ipb.length > 0) agf = agf % zff.ipb.length;
    if (agf < 0) {
        agf = agf + zff.ipb.length
    }
    wff = 1.0 / wff;
    xff = 1.0 / xff;
    cgf = 1.0 / cgf;
    dgf = 1.0 / dgf;
    var uu = yab(gff.left, bgf.left);
    var iz = xab(gff.rfb, bgf.rfb);
    var qu = yab(gff.top, bgf.top);
    var lz = xab(gff.bottom, bgf.bottom);
    if ((wff == 1) && (cgf == 1) && (xff == 1) && (dgf == 1) && (yff == 0) && (egf == 0)) {
        for (var mh = uu; mh <= iz; mh++) {
            for (var hhb = qu; hhb <= lz; hhb++) {
                var udb = mh - jbb + this.eg;
                var vdb = hhb - kbb + this.fg;
                if ((udb < 0) || (udb >= this.width)) continue;
                if ((vdb < 0) || (vdb >= this.height)) continue;
                if (this.gpb) {
                    if (!this.ipb[fff][udb + (vdb * this.width)]) continue
                }
                udb = mh - lbb + zff.eg;
                vdb = hhb - mbb + zff.fg;
                if ((udb < 0) || (udb >= zff.width)) continue;
                if ((vdb < 0) || (vdb >= zff.height)) continue;
                if (zff.gpb) {
                    if (!zff.ipb[agf][udb + (vdb * zff.width)]) continue;
                }
                return !0
            }
        }
    } else if ((yff == 0) && (egf == 0)) {
        for (var mh = uu; mh <= iz; mh++) {
            for (var hhb = qu; hhb <= lz; hhb++) {
                var udb = Math.floor(((mh - jbb) * wff + this.eg));
                var vdb = Math.floor(((hhb - kbb) * xff + this.fg));
                if ((udb < 0) || (udb >= this.width)) continue;
                if ((vdb < 0) || (vdb >= this.height)) continue;
                if (this.gpb) {
                    if (!this.ipb[fff][udb + (vdb * this.width)]) continue
                }
                udb = Math.floor(((mh - lbb) * cgf + zff.eg));
                vdb = Math.floor(((hhb - mbb) * dgf + zff.fg));
                if ((udb < 0) || (udb >= zff.width)) continue;
                if ((vdb < 0) || (vdb >= zff.height)) continue;
                if (zff.gpb) {
                    if (!zff.ipb[agf][udb + (vdb * zff.width)]) continue;
                }
                return !0
            }
        }
    } else {
        var fgf = Math.sin(-yff * lgb / 180);
        var ggf = Math.cos(-yff * lgb / 180);
        var hgf = Math.sin(-egf * lgb / 180);
        var igf = Math.cos(-egf * lgb / 180);
        for (var mh = uu; mh <= iz; mh++) {
            for (var hhb = qu; hhb <= lz; hhb++) {
                var udb = Math.floor(((ggf * (mh - jbb) + fgf * (hhb - kbb)) * wff + this.eg));
                var vdb = Math.floor(((ggf * (hhb - kbb) - fgf * (mh - jbb)) * xff + this.fg));
                if ((udb < 0) || (udb >= this.width)) continue;
                if ((vdb < 0) || (vdb >= this.height)) continue;
                if (this.gpb) {
                    if (!this.ipb[fff][udb + (vdb * this.width)]) continue
                }
                udb = Math.floor(((igf * (mh - lbb) + hgf * (hhb - mbb)) * cgf + zff.eg));
                vdb = Math.floor(((igf * (hhb - mbb) - hgf * (mh - lbb)) * dgf + zff.fg));
                if ((udb < 0) || (udb >= zff.width)) continue;
                if ((vdb < 0) || (vdb >= zff.height)) continue;
                if (zff.gpb) {
                    if (!zff.ipb[agf][udb + (vdb * zff.width)]) continue
                }
                return !0
            }
        }
    }
    return !1
};
yob.prototype.jgf = function (fff, gff, jbb, kbb, hff, iff, ay, kgf, lgf, mgf, ngf) {
    if (!this.gpb) {
        return !0
    }
    if (this.lob <= 0) {
        return !1
    }
    fff = fff % this.ipb.length;
    if (fff < 0) {
        fff = fff + this.ipb.length
    }
    if ((kgf == mgf) || (lgf == ngf)) {
        var ogf = new bpb();
        ogf.left = kgf;
        ogf.top = xab(lgf, ngf);
        ogf.rfb = mgf;
        ogf.bottom = yab(lgf, ngf);
        return this.jyd(fff, gff, jbb, kbb, hff, iff, ay, ogf)
    }
    var uab = Math.sin(-ay * Math.PI / 180.0);
    var cod = Math.cos(-ay * Math.PI / 180.0);
    if (Math.abs(mgf - kgf) >= Math.abs(ngf - lgf)) {
        if (mgf < kgf) {
            var que = mgf;
            mgf = kgf;
            kgf = bv;
            que = ngf;
            ngf = pgf;
            lgf = que
        }
        var tdb = (ngf - lgf) / (mgf - kgf);
        for (var mh = yab(gff.left, kgf); mh <= xab(gff.rfb, mgf); mh++) {
            var udb = Math.floor((cod * (mh - jbb) + uab * (lgf + (mh - kgf) * tdb - kbb)) / hff + this.eg);
            var vdb = Math.floor((cod * (lgf + (mh - kgf) * tdb - kbb) - uab * (mh - jbb)) / iff + this.fg);
            if ((udb < 0) || (udb >= this.width)) continue;
            if ((vdb < 0) || (vdb >= this.height)) continue;
            if (this.ipb[fff][udb + (vdb * this.width)]) return !0
        }
    } else {
        if (ngf < lgf) {
            var que = ngf;
            ngf = lgf;
            lgf = que;
            que = mgf;
            mgf = kgf;
            kgf = que
        }
        var tdb = (mgf - kgf) / (ngf - lgf);
        for (var mh = yab(gff.top, lgf); mh <= xab(gff.bottom, ngf); mh++) {
            var udb = Math.floor((cod * (kgf + (mh - lgf) * tdb - jbb) + uab * (mh - kbb)) / hff + this.eg);
            var vdb = Math.floor((cod * (mh - kbb) - uab * (kgf + (mh - lgf) * tdb - jbb)) / iff + this.fg);
            if ((udb < 0) || (udb >= this.width)) continue;
            if ((vdb < 0) || (vdb >= this.height)) continue;
            if (this.ipb[fff][udb + (vdb * this.width)]) return !0
        }
    }
    return !1
};

function zad() {
    this.cg = []
}
zad.prototype.apb = function (qef) {
    var yfd = this.cg.length;
    this.cg[yfd] = qef;
    return yfd
};
zad.prototype.kxd = function (qgf) {
    if (qgf < 0 || qgf > this.cg.length) return null;
    return this.cg[qgf].pob.length
};
zad.prototype.dv = function (qgf) {
    if (qgf < 0 || qgf > this.cg.length) return null;
    return this.cg[qgf]
};
zad.prototype.mub = function (av) {
    if (this.cg[av] != undefined) this.cg[av] = undefined
};

function ysb() {
    this.oh = 0;
    this.ph = 0;
    this.xl = 0;
    this.zsb = 0;
    this.atb = 0;
    this.qh = 0;
    this.rh = 0;
    this.gj = 0.0;
    this.am = ywc++;
    this.phd = 1.0;
    this.qhd = 1.0;
    this.ohd = 0xffffff;
    this.nhd = 1.0;
    this.xh = !0
}

function vbf(rgf) {
    var xsb = new ysb();
    if (rgf.oh != undefined) xsb.oh = rgf.oh;
    if (rgf.ph != undefined) xsb.ph = rgf.ph;
    if (rgf.xl != undefined) xsb.xl = rgf.xl;
    if (rgf.zsb != undefined) xsb.zsb = rgf.zsb;
    if (rgf.atb != undefined) xsb.atb = rgf.atb;
    if (rgf.qh != undefined) xsb.qh = rgf.qh;
    if (rgf.rh != undefined) xsb.rh = rgf.rh;
    if (rgf.gj != undefined) xsb.gj = rgf.gj;
    if (rgf.am != undefined) xsb.am = rgf.am;
    if (rgf.phd != undefined) xsb.phd = rgf.phd;
    if (rgf.qhd != undefined) xsb.qhd = rgf.qhd;
    if (rgf.nhd != undefined) xsb.nhd = rgf.nhd;
    if (rgf.jh != undefined) xsb.phd = rgf.jh;
    if (rgf.kh != undefined) xsb.qhd = rgf.kh;
    if (rgf.bm != undefined) xsb.ohd = rgf.bm;
    if (ywc < rgf.am) ywc = rgf.am + 1;
    return xsb
}
ysb.prototype.aye = function () {
    var opb = bw.cw(this.xl);
    if (opb != null) {
        var nob = opb.dw;
        if (nob.um >= sob.length) return;
        if (!sob[nob.um].complete) return;
        if (!kvc) {
            eab.globalAlpha = this.nhd;
            eab.mob(sob[nob.um], nob.oh + this.zsb, nob.ph + this.atb, this.qh, this.rh, this.oh, this.ph, this.qh * this.phd, this.rh * this.qhd)
        } else {
            var mz = this.ohd | ((this.nhd * 255) << 24);
            eab.mob(nob, nob.oh + this.zsb, nob.ph + this.atb, this.qh, this.rh, this.oh, this.ph, this.qh * this.phd, this.rh * this.qhd, mz)
        }
    }
};

function sgf(chd) {
    if ((chd != null) && (chd != undefined)) {
        this.wf = chd.wf;
        this.wz = chd.wz
    } else {
        this.wf = "";
        this.wz = []
    }
}
sgf.prototype.jac = function (tgf) {
    if (this.wz.length == 0) {
        return 0
    }
    if (tgf > this.wz[this.wz.length - 1]) {
        return this.wz.length
    }
    for (var mh = 0; mh < this.wz.length; mh++) {
        if (this.wz[mh].ugf >= tgf) {
            return mh
        }
    }
    return this.wz.length
};
sgf.prototype.gac = function () {
    return this.wz[this.wz.length - 1].ugf
};

function ebd() {
    this.th = []
}
ebd.prototype.yu = function (chd) {
    var aw = null;
    if (chd != null) {
        aw = new sgf(chd)
    }
    this.th[this.th.length] = aw
};
ebd.prototype.dv = function (fjb) {
    if ((fjb < 0) || (fjb >= this.th.length)) {
        return undefined
    }
    return this.th[fjb]
};
ebd.prototype.nib = function (fjb) {
    if ((fjb >= 0) || (fjb < this.th.length)) {
        this.th[fjb].wz.nib()
    }
};
ebd.prototype.mub = function (fjb) {
    if ((fjb >= 0) || (fjb < this.th.length)) {
        this.th[fjb] = null
    }
};

function jdd(vgf) {
    this.nfb = vgf
}
jdd.prototype.dv = function (rnb) {
    return this.nfb[rnb]
};
jdd.prototype.wgd = function (wgf) {
    for (var mh = 1; mh < this.nfb.length; mh++) {
        var hqe = this.nfb[mh];
        if (hqe.xgf == wgf) {
            yzb.ffb(icc, mh)
        }
    }
};

function uac(qtd, ygf) {
    this.yaf = qtd;
    this.zgf = [];
    this.ahf = ygf
}
var rac, oo, fo, tn;

function bhf(gy) {
    return "\"" + gy.substr(5, gy.length - 7) + "\""
}

function chf(gy) {
    return gy.substr(5, gy.length - 7)
}

function dzc(pz, qtd, igb, bv) {
    try {
        if (!pz) {
            ax("ERROR: Accessing array with in an invalid instance/global");
            return
        }
        var dhf = pz.tac[qtd];
        if (!dhf) {
            dhf = global.tac[qtd];
            if (!dhf) {
                dhf = new uac(qtd, 1);
                pz.tac[qtd] = dhf
            }
        }
        if (dhf.ahf != 1) {
            ax("ERROR: Illegal number of dimensions when accessing array " + bhf(dhf.yaf));
            return
        }
        dhf.zgf[~~igb] = bv
    } catch (wrb) {
        ax("ERROR: Accessing array " + bhf(qtd))
    }
}

function yyc(pz, qtd, igb, bv) {
    var dhf = pz.tac[qtd];
    if (!dhf) {
        dhf = global.tac[qtd];
        if (!dhf) {
            dhf = new uac(qtd, 1);
            pz.tac[qtd] = dhf
        }
    }
    dhf.zgf[~~igb] = bv
}

function czc(pz, qtd, igb) {
    try {
        var dhf = pz.tac[qtd];
        if (!dhf) {
            dhf = global.tac[qtd];
            if (!dhf) {
                ax("Error: Trying to access unknown array " + bhf(qtd));
                return 0
            }
        } else if (dhf.ahf != 1) {
            ax("ERROR: Illegal number of dimensions when accessing array " + bhf(dhf.yaf));
            return 0
        }
        igb = ~~igb;
        if (dhf.zgf[igb] === undefined) {
            ax("Error: Out of bounds trying to access \"" + chf(qtd) + "[" + igb + "]\", or value never written.");
            return 0
        }
        return dhf.zgf[igb]
    } catch (wrb) {
        ax("Error: Trying to access unknown array " + bhf(qtd));
        return 0
    }
}

function xyc(pz, qtd, igb) {
    igb = ~~igb;
    var dhf = pz.tac[qtd];
    if (dhf) return dhf.zgf[igb];
    return global.tac[qtd].zgf[igb]
}

function fzc(pz, qtd, igb, mgb, bv) {
    try {
        var dhf = pz.tac[qtd];
        if (!dhf) {
            dhf = new uac(qtd, 2);
            pz.tac[qtd] = dhf
        } else if (dhf.ahf != 2) {
            ax("ERROR: Illegal number of dimensions when accessing array " + bhf(dhf.yaf));
            return 0
        }
        igb = ~~igb;
        mgb = ~~mgb;
        if (!dhf.zgf[igb]) dhf.zgf[igb] = [];
        dhf.zgf[igb][mgb] = bv
    } catch (wrb) {
        ax("Error: Trying to access unknown array " + bhf(qtd));
        return 0
    }
}

function azc(pz, qtd, igb, mgb, bv) {
    var dhf = pz.tac[qtd];
    if (!dhf) {
        dhf = new uac(qtd, 2);
        pz.tac[qtd] = dhf
    }
    igb = ~~igb;
    mgb = ~~mgb;
    if (!dhf.zgf[igb]) dhf.zgf[igb] = [];
    dhf.zgf[igb][mgb] = bv
}

function ezc(pz, qtd, igb, mgb) {
    try {
        var dhf = pz.tac[qtd];
        if (!dhf) {
            ax("Error: Trying to access unknown array " + bhf(qtd));
            return 0
        } else if (dhf.ahf != 2) {
            ax("ERROR: Illegal number of dimensions when accessing array " + bhf(dhf.yaf));
            return 0
        }
        igb = ~~igb;
        mgb = ~~mgb;
        if (dhf.zgf[igb] == undefined || dhf.zgf[igb][mgb] == undefined) {
            ax("Error: Out of bounds trying to access \"" + chf(dhf.yaf) + "[" + igb + "][" + mgb + "]\", or value never written.", !1);
            return 0
        }
        return dhf.zgf[igb][mgb]
    } catch (wrb) {
        ax("Error: Trying to access unknown array " + bhf(qtd));
        return 0
    }
}

function zyc(pz, qtd, igb, mgb) {
    igb = ~~igb;
    mgb = ~~mgb;
    var dhf = pz.tac[qtd];
    return dhf.zgf[igb][mgb]
}
var ehf = 6 * 32000;
var fhf = -1;
var ghf = 0;
var hhf = 1;
var ihf = 2;
var jhf = 3;
var khf = 4;
var lhf = 5;
var mhf = 20;

function nhf(hy, ohf) {
    this.umd = -1;
    this.phf = new Int16Array(hy * 2);
    this.qhf = new Int16Array(hy * 2);
    this.rhf = new Int32Array(hy);
    this.max = hy;
    this.shf = 0;
    this.thf = ohf;
    this.smd = !1;
    this.wmd = kvc.createBuffer();
    this.and = kvc.createBuffer();
    this.ymd = kvc.createBuffer();
    kvc.bindBuffer(kvc.ARRAY_BUFFER, this.wmd);
    kvc.bufferData(kvc.ARRAY_BUFFER, this.phf, kvc.DYNAMIC_DRAW);
    kvc.bindBuffer(kvc.ARRAY_BUFFER, this.and);
    kvc.bufferData(kvc.ARRAY_BUFFER, this.qhf, kvc.DYNAMIC_DRAW);
    kvc.bindBuffer(kvc.ARRAY_BUFFER, this.ymd);
    kvc.bufferData(kvc.ARRAY_BUFFER, this.rhf, kvc.DYNAMIC_DRAW)
}
nhf.prototype.tmd = function () {
    kvc.bindBuffer(kvc.ARRAY_BUFFER, this.wmd);
    kvc.bufferSubData(kvc.ARRAY_BUFFER, 0, this.phf);
    kvc.bindBuffer(kvc.ARRAY_BUFFER, this.ymd);
    kvc.bufferSubData(kvc.ARRAY_BUFFER,
        0, this.rhf);
    kvc.bindBuffer(kvc.ARRAY_BUFFER, this.and);
    kvc.bufferSubData(kvc.ARRAY_BUFFER, 0, this.qhf);
    this.shf = 0;
    this.smd = !1
};

function uhf() {
    this.vhf = [];
    this.vhf[mhf] = new vu();
    this.vhf[mhf].wu = !0;
    this.whf = 0;
    this.old = null;
    this.xhf = null;
    this.yhf = fhf
}
uhf.prototype.zhf = function () {
    if (this.xhf == null) return;
    var bh = this.xhf.shf - this.whf;
    switch (this.yhf) {
    case ghf:
        mvc.qld(0, this.old);
        mvc.rld(this.xhf);
        mvc.tld(this.whf, bh);
        break;
    case hhf:
        mvc.qld(0, this.old);
        mvc.rld(this.xhf);
        mvc.wld(this.whf, bh);
        break;
    case ihf:
        mvc.qld(0,
            this.old);
        mvc.rld(this.xhf);
        mvc.xld(this.whf, bh);
        break;
    case jhf:
        mvc.qld(0, null);
        mvc.rld(this.xhf);
        mvc.yld(this.whf, bh);
        break;
    case khf:
        mvc.qld(0, null);
        mvc.rld(this.xhf);
        mvc.zld(this.whf, bh);
        break;
    case lhf:
        mvc.qld(0, null);
        mvc.rld(this.xhf);
        mvc.amd(this.whf, bh);
        break
    }
    this.xhf = this.old = null;
    this.yhf = fhf
};
uhf.prototype.aif = function (bif, spb, cif, dif) {
    var mh, eif, rmd, jsd;
    if (spb != null) jsd = spb.rob;
    else jsd = null; if (this.xhf != null) {
        if ((this.xhf.thf == cif) && ((this.xhf.shf + dif) <= this.xhf.max) && (this.old == jsd) && (this.yhf == bif) && ((bif != khf) && (bif != ihf) && (bif != hhf))) {
            return this.xhf
        } else {
            var fif = this.xhf;
            this.zhf();
            if ((fif.thf == cif) && ((fif.shf + dif) <= fif.max)) {
                this.xhf = fif;
                this.whf = fif.shf;
                this.yhf = bif;
                this.old = jsd;
                return this.xhf;
            }
        }
    }
    this.yhf = bif;
    this.old = jsd;
    eif = this.vhf[cif].nfb;
    for (mh = eif.length - 1; mh >= 0; mh--) {
        rmd = eif[mh];
        if ((rmd.umd != vmd) && (rmd.shf + dif) <= rmd.max) {
            rmd.smd = !0;
            this.whf = rmd.shf;
            this.xhf = rmd;
            return rmd
        }
    }
    if (dif < ehf) dif = ehf;
    rmd = new nhf(dif, cif);
    rmd.smd = !0;
    this.whf = rmd.shf;
    this.xhf = rmd;
    this.vhf[cif].yu(rmd);
    return rmd
};

function jzc() {
    this.xh = !1;
    this.crb = 0;
    this.drb = 0;
    this.erb = 640;
    this.frb = 480;
    this.grb = 0;
    this.hrb = 0;
    this.irb = 640;
    this.jrb = 480;
    this.gcf = 0;
    this.krb = 0;
    this.lrb = 0;
    this.orb = 0;
    this.prb = 0;
    this.mrb = 0;
    this.nrb = 0;
    this.zyb = 1;
    this.bzb = 1;
    this.im = 32;
    this.jm = 32;
    this.km = -1;
    this.lm = -1;
    this.hcf = -1;
    this.tyb = -1
}
jzc.prototype.ru = function (su) {
    this.xh = su.xh;
    this.crb = su.crb;
    this.drb = su.drb;
    this.erb = su.erb;
    this.frb = su.frb;
    this.grb = su.grb;
    this.hrb = su.hrb;
    this.irb = su.irb;
    this.jrb = su.jrb;
    this.gcf = su.gcf;
    this.krb = su.krb;
    this.lrb = su.lrb;
    this.orb = su.orb;
    this.prb = su.prb;
    this.mrb = su.mrb;
    this.nrb = su.nrb;
    this.zyb = su.zyb;
    this.bzb = su.bzb;
    this.im = su.im;
    this.jm = su.jm;
    this.km = su.km;
    this.lm = su.lm;
    this.hcf = su.hcf;
    this.tyb = su.tyb
};

function xbf(gif) {
    hif = new jzc();
    if (gif.xh != undefined) hif.xh = gif.xh;
    if (gif.dm != undefined) hif.crb = gif.dm;
    if (gif.obf != undefined) hif.drb = gif.obf;
    if (gif.em != undefined) hif.erb = gif.em;
    if (gif.fm != undefined) hif.frb = gif.fm;
    if (gif.pbf != undefined) hif.grb = gif.pbf;
    if (gif.qbf != undefined) hif.hrb = gif.qbf;
    if (gif.gm != undefined) hif.irb = gif.gm;
    if (gif.hm != undefined) hif.jrb = gif.hm;
    if (gif.gcf != undefined) hif.jrb = gif.gcf;
    if (gif.im != undefined) hif.im = gif.im;
    if (gif.jm != undefined) hif.jm = gif.jm;
    if (gif.km != undefined) hif.km = gif.km;
    if (gif.lm != undefined) hif.lm = gif.lm;
    if (gif.xl != undefined) hif.hcf = gif.xl;
    return hif
}
var iif = 0;
var jif = 1;
var kif = 2;
var lif = 16;
var mif = 24;
var nif = [];
var oif = [];
var pif = 0;
var qif = 0;

function rif(gqd) {
    kvc = sif(gqd);
    if (!kvc) return !1;
    if (!tif()) return !1;
    if (!uif()) return !1;
    lvc = new uhf();
    mvc = new kld();
    nvc = [];
    nvc[iif] = new ted();
    nvc[jif] = new ted();
    nvc[kif] = new ted();
    ovc = [];
    for (var mh = 0; mh < lif; mh++) {
        ovc[mh] = new ted()
    }
    nxc = 0;
    mxc = 1;
    pvc = new ted();
    qvc = new ted();
    vif(mif);
    return !0
}

function erd() {
    spd = wif;
    tpd = xif;
    kqd = yif;
    vpd = zif;
    upd = ajf;
    aod = bjf;
    wpd = cjf;
    znd = djf;
    xpd = ejf;
    sqd = fjf;
    uqd = gjf;
    fpd = hjf;
    xqd = ijf;
    zqd = jjf;
    pbb = kjf;
    hbb = ljf;
    tbb = mjf;
    xbb = njf;
    dcb = ojf;
    icb = pjf;
    lcb = qjf;
    vcb = rjf;
    xdb = sjf;
    heb = tjf;
    leb = ujf;
    gcb = vjf;
    aab = wjf;
    iqb = xjf;
    wqb = yjf;
    qrb = zjf;
    sqb = akf;
    csb = bkf;
    esb = ckf;
    jsb = dkf;
    osb = ekf;
    kpb = fkf;
    tob = gkf;
    cob = hkf;
    cob = hkf;
    tob = gkf;
    kpb = fkf;
    pib = ikf;
    ymb = jkf;
    kvc.mob = kkf
}

function sif(gqd) {
    var lkf = null;
    var mkf = ["webgl",
        "experimental-webgl", "moz-webgl", "webkit-3d"
    ]; {
        for (var mh = 0; mh < mkf.length; mh++) {
            try {
                lkf = gqd.getContext(mkf[mh], {
                    gh: !1,
                    nhd: !0,
                    nkf: !1
                });
                if (lkf) break
            } catch (wrb) {
                return null
            }
        }
    }
    if (lkf) {
        lkf.viewportWidth = gqd.width;
        lkf.viewportHeight = gqd.height;
        pif = lkf.viewportWidth;
        qif = lkf.viewportHeight
    }
    return lkf
}

function uif() {
    var nmd = document.createElement(hob);
    nmd.ou = nmd.width = 16;
    nmd.pu = nmd.height = 16;
    nmd.complete = !0;
    nmd.lqb = !1;
    nmd.name = "";
    nmd.eab = nmd.getContext('2d');
    nmd.eab.save();
    nmd.eab.setTransform(1, 0, 0, 1, 0, 0);
    nmd.eab.globalAlpha = 1;
    nmd.eab.fillStyle = '#ffffff';
    nmd.eab.fillRect(0, 0, 16, 16);
    nmd.eab.restore();
    var nob = new oob();
    nob.oh = 0;
    nob.ph = 0;
    nob.qh = 15;
    nob.rh = 15;
    nob.om = 0;
    nob.pm = 0;
    nob.qm = 15;
    nob.rm = 15;
    nob.sm = nob.qh;
    nob.tm = nob.rh;
    nob.um = -1;
    nob.rob = nmd;
    nob.nqb = [];
    nob.pqb = 1;
    nob.oqb = 0;
    okf(nob);
    kvc.nmd = nob;
    return !0
}
var pkf = function (qkf, type, source) {
    var nx = kvc.createShader((type == 'vertex') ? kvc.VERTEX_SHADER : kvc.FRAGMENT_SHADER);
    kvc.shaderSource(nx, source);
    kvc.compileShader(nx);
    if (!kvc.getShaderParameter(nx, kvc.COMPILE_STATUS)) {
        return
    }
    kvc.attachShader(qkf,
        nx)
};

function tif() {
    var rkf = "uniform mat4 pmatrix;" + "uniform mat4 vmatrix;" + "uniform vec2 oneoveruv;" + " " + "attribute vec2 vertex;" + "attribute vec4 color;" + "attribute vec2 UV;" + "varying vec4 fcolor;" + "varying vec2 texc;" + " " + "void main(void)" + "{" + "    fcolor = color;" + "    texc   = UV * oneoveruv;" + "    gl_Position = (pmatrix * vmatrix) * vec4( vertex.x, vertex.y, 1, 1);" + "}";
    var skf = "precision mediump float;" + "uniform sampler2D pTexure;" + " " + "varying vec4 fcolor;" + "varying vec2 texc;" + " " + "void main(void)" + "{" + "    vec4 color   = texture2D( pTexure, texc ).rgba * fcolor.bgra;" + "    gl_FragColor = color;" + "}";
    var tkf = kvc.createProgram();
    var error = kvc.getError();
    pkf(tkf, "vertex", rkf);
    pkf(tkf, "fragment", skf);
    kvc.linkProgram(tkf);
    error = kvc.getError();
    if (!kvc.getProgramParameter(tkf, kvc.LINK_STATUS)) {
        alert("Could not initialise shaders\n\n" + kvc.getShaderInfoLog(ukf));
        return !1;
    }
    kvc.useProgram(tkf);
    tkf.vkf = kvc.getUniformLocation(tkf, "ViewMatrix");
    kvc.kmd = tkf;
    tkf.xmd = kvc.getAttribLocation(tkf, "vertex");
    tkf.zmd = kvc.getAttribLocation(tkf, "color");
    tkf.bnd = kvc.getAttribLocation(tkf, "UV");
    tkf.lmd = kvc.getUniformLocation(tkf,
        "pmatrix");
    tkf.mmd = kvc.getUniformLocation(tkf, "vmatrix");
    tkf.qmd = kvc.getUniformLocation(tkf, "oneoveruv");
    tkf.pmd = kvc.getUniformLocation(tkf, "pTexure");
    return !0
}

function fjf() {}

function gjf() {}

function zif(vrd, wrd, xrd, yrd, ay) {
    rrd(vrd, wrd, xrd, yrd, ay);
    mvc.dmd(qvc);
    mvc.bmd(pvc);
    mpd = vrd;
    npd = wrd;
    opd = xrd;
    ppd = yrd;
    ajf(kab, lab, mab, nab)
}

function ajf(nrd, ord, prd, qrd) {
    kab = nrd;
    lab = ord;
    mab = prd;
    nab = qrd;
    mvc.emd(nrd, ord, prd, qrd)
}

function ijf() {
    mvc.mld();
    kvc.disable(kvc.CULL_FACE)
}

function jjf() {
    lvc.zhf();
    vmd++;
    mvc.jmd()
}

function okf(spb) {
    var wkf = kvc.createTexture();
    spb.rob.omd = wkf;
    wkf.xkf = spb.rob;
    spb.rob.ou = spb.rob.width;
    spb.rob.pu = spb.rob.height;
    kvc.bindTexture(kvc.TEXTURE_2D, wkf);
    kvc.pixelStorei(kvc.UNPACK_WEBGL, !0);
    kvc.texImage2D(kvc.TEXTURE_2D, 0, kvc.RGBA, kvc.RGBA, kvc.UNSIGNED_BYTE, spb.rob);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_MAG_FILTER, kvc.NEAREST);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_MIN_FILTER, kvc.NEAREST);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_MIN_FILTER, kvc.LINEAR);
    kvc.texParameteri(kvc.TEXTURE_2D,
        kvc.TEXTURE_WRAP_S, kvc.CLAMP_TO_EDGE);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_WRAP_T, kvc.CLAMP_TO_EDGE);
    kvc.bindTexture(kvc.TEXTURE_2D, null)
}

function wif(spb, ux, vx, dab) {
    var rmd, qde, ykf, zkf, alf, blf, mz;
    if (!spb.rob.omd) okf(spb);
    rmd = lvc.aif(ghf, spb, mhf, 6);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    rmd.shf += 6;
    zkf = rmd.phf;
    alf = rmd.rhf;
    blf = rmd.qhf;
    ux = ~~ (ux + spb.om);
    vx = ~~ (vx + spb.pm);
    zkf[clf + 0] = zkf[clf + 8] = zkf[clf + 10] = ux;
    zkf[clf + 1] = zkf[clf + 3] = zkf[clf + 11] = vx;
    zkf[clf + 2] = zkf[clf + 6] = zkf[clf + 4] = ux + spb.qm;
    zkf[clf + 5] = zkf[clf + 7] = zkf[clf + 9] = vx + spb.rm;
    blf[clf + 0] = blf[clf + 8] = blf[clf + 10] = spb.oh;
    blf[clf + 1] = blf[clf + 3] = blf[clf + 11] = spb.ph;
    blf[clf + 2] = blf[clf + 4] = blf[clf + 6] = spb.oh + spb.qh;
    blf[clf + 5] = blf[clf + 7] = blf[clf + 9] = spb.ph + spb.rh;
    mz = ((dab * 255.0) << 24) | 0xffffff;
    alf[ykf] = alf[ykf + 1] = alf[ykf + 2] = alf[ykf + 3] = alf[ykf + 4] = alf[ykf + 5] = mz;
}

function kkf(spb, dlf, elf, flf, glf, ux, vx, lu, mu, cab) {
    var rmd, qde, ykf, zkf, alf, blf, mz;
    if (!spb.rob.omd) okf(spb);
    if (cab == undefined) cab = 0xffffffff;
    rmd = lvc.aif(ghf, spb, mhf, 6);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    rmd.shf += 6;
    zkf = rmd.phf;
    alf = rmd.rhf;
    blf = rmd.qhf;
    ux = ~~ux;
    vx = ~~vx;
    zkf[clf + 0] = zkf[clf + 8] = zkf[clf + 10] = ux;
    zkf[clf + 1] = zkf[clf + 3] = zkf[clf + 11] = vx;
    zkf[clf + 2] = zkf[clf + 6] = zkf[clf + 4] = ux + lu;
    zkf[clf + 5] = zkf[clf + 7] = zkf[clf + 9] = vx + mu;
    blf[clf + 0] = blf[clf + 8] = blf[clf + 10] = dlf;
    blf[clf + 1] = blf[clf + 3] = blf[clf + 11] = elf;
    blf[clf + 2] = blf[clf + 4] = blf[clf + 6] = dlf + flf;
    blf[clf + 5] = blf[clf + 7] = blf[clf + 9] = elf + glf;
    alf[ykf] = alf[ykf + 1] = alf[ykf + 2] = alf[ykf + 3] = alf[ykf + 4] = alf[ykf + 5] = cab
}

function cjf(cab) {
    mvc.fmd(kvc.COLOR_BUFFER_BIT | kvc.DEPTH_BUFFER_BIT, cab | 0xff000000)
}

function wjf(cab,
    dab) {
    cab = ((dab * 255.0) << 24) | jab(cab);
    mvc.fmd(kvc.COLOR_BUFFER_BIT | kvc.DEPTH_BUFFER_BIT, cab)
}

function bjf(hlf) {
    if (bjf.arguments.length > 0) {
        var gab = bjf.arguments[0]
    } else {}
}

function djf(ux, vx, psb, qsb, ay) {}

function xif(spb, ux, vx, ihd, ghd, cab, dab) {
    var rmd, qde, ykf, zkf, alf, blf, qh, rh;
    if (!spb.rob.omd) okf(spb);
    ilf = spb.sm + ~~ux;
    jlf = spb.tm + ~~vx;
    if (ghd) {
        ux = (((~~(mpd / spb.sm)) * spb.sm) + (~~ux) % spb.sm) - spb.sm;
        ilf = (((((brb.erb + (spb.sm - 1)) / spb.sm) & 0xffffffff) + 2) * spb.sm) + ~~ux
    }
    if (ihd) {
        vx = (((~~(npd / spb.tm)) * spb.tm) + (~~vx) % spb.tm) - spb.tm;
        jlf = (((((brb.frb + (spb.tm - 1)) / spb.tm) & 0xffffffff) + 2) * spb.tm) + ~~vx
    }
    ux = ~~ux;
    vx = ~~vx;
    var osd = 1;
    var psd = 1;
    var vob = 0;
    var wob = 0;
    var gsd = ~~ (osd * spb.sm);
    var tab = ~~ (psd * spb.tm);
    if ((gsd <= 0) || (tab <= 0)) return;
    var bm = ~~ ((dab * 255.0) << 24) | (cab & 0xffffff);
    var pdb = (-osd * (vob - spb.om));
    var qdb = (-psd * (wob - spb.pm));
    var klf = osd * spb.qm;
    var llf = psd * spb.rm;
    var udb = ux + pdb;
    var vdb = ~~vx + qdb;
    var mlf = spb.oh;
    var nlf = mlf + spb.qh;
    var ryb = spb.ph;
    var wed = spb.ph + spb.rh;
    var ceb = vdb;
    while (udb < ilf) {
        vdb = ceb;
        var idb = udb + klf;
        while (vdb < jlf) {
            rmd = lvc.aif(ghf, spb,
                mhf, 6);
            clf = rmd.shf << 1;
            ykf = rmd.shf;
            rmd.shf += 6;
            zkf = rmd.phf;
            alf = rmd.rhf;
            blf = rmd.qhf;
            var kdb = vdb + llf;
            alf[ykf] = alf[ykf + 1] = alf[ykf + 2] = alf[ykf + 3] = alf[ykf + 4] = alf[ykf + 5] = bm;
            zkf[clf + 0] = (udb);
            zkf[clf + 1] = (vdb);
            blf[clf + 0] = (mlf);
            blf[clf + 1] = (ryb);
            zkf[clf + 2] = (idb);
            zkf[clf + 3] = (vdb);
            blf[clf + 2] = (nlf);
            blf[clf + 3] = (ryb);
            zkf[clf + 4] = (idb);
            zkf[clf + 5] = (kdb);
            blf[clf + 4] = (nlf);
            blf[clf + 5] = (wed);
            zkf[clf + 6] = (idb);
            zkf[clf + 7] = (kdb);
            blf[clf + 6] = (nlf);
            blf[clf + 7] = (wed);
            zkf[clf + 8] = (udb);
            zkf[clf + 9] = (kdb);
            blf[clf + 8] = (mlf);
            blf[clf + 9] = (wed);
            zkf[clf + 10] = (udb);
            zkf[clf + 11] = (vdb);
            blf[clf + 10] = (mlf);
            blf[clf + 11] = (ryb);
            if (!ihd) {
                break
            }
            vdb = vdb + tab
        }
        if (!ghd) {
            break
        }
        udb = udb + gsd
    }
}

function yif(spb, vob, wob, ux, vx, osd, psd, qsd, cab, zy, vbb, wbb, dab) {
    var rmd, qde, ykf, zkf, alf, blf;
    if (!spb.rob.omd) okf(spb);
    rmd = lvc.aif(ghf, spb, mhf, 6);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    rmd.shf += 6;
    zkf = rmd.phf;
    alf = rmd.rhf;
    blf = rmd.qhf;
    var pdb = ~~ (-osd * (vob - spb.om));
    var qdb = ~~ (-psd * (wob - spb.pm));
    var rdb = ~~ (pdb + osd * (spb.qm));
    var sdb = ~~ (qdb + psd * (spb.rm));
    if (Math.abs(qsd) < 0.001) {
        zkf[clf + 0] = zkf[clf + 8] = zkf[clf + 10] = ux + pdb;
        zkf[clf + 1] = zkf[clf + 3] = zkf[clf + 11] = vx + qdb;
        zkf[clf + 2] = zkf[clf + 6] = zkf[clf + 4] = ux + rdb;
        zkf[clf + 5] = zkf[clf + 7] = zkf[clf + 9] = vx + sdb
    } else {
        var uab = Math.sin(qsd);
        var cod = Math.cos(qsd);
        var olf = pdb * cod;
        var plf = rdb * cod;
        var qlf = qdb * cod;
        var rlf = sdb * cod;
        var slf = pdb * uab;
        var tlf = rdb * uab;
        var ulf = qdb * uab;
        var vlf = sdb * uab;
        zkf[clf + 0] = zkf[clf + 10] = ux + olf + ulf;
        zkf[clf + 1] = zkf[clf + 11] = vx - slf + qlf;
        zkf[clf + 4] = zkf[clf + 6] = ux + plf + vlf;
        zkf[clf + 5] = zkf[clf + 7] = vx - tlf + rlf;
        zkf[clf + 3] = vx - tlf + qlf;
        zkf[clf + 2] = ux + plf + ulf;
        zkf[clf + 8] = ux + olf + vlf;
        zkf[clf + 9] = vx - slf + rlf
    }
    blf[clf + 0] = blf[clf + 8] = blf[clf + 10] = spb.oh;
    blf[clf + 1] = blf[clf + 3] = blf[clf + 11] = spb.ph;
    blf[clf + 2] = blf[clf + 4] = blf[clf + 6] = spb.oh + spb.qh;
    blf[clf + 5] = blf[clf + 7] = blf[clf + 9] = spb.ph + spb.rh;
    var nac = (dab * 255.0) << 24;
    cab = nac | (cab & 0xffffff);
    if (zy == undefined) {
        zy = cab;
        vbb = cab;
        wbb = cab;
    } else {
        zy = zy | nac;
        vbb = vbb | nac;
        wbb = wbb | nac
    }
    alf[ykf] = alf[ykf + 5] = cab;
    alf[ykf + 1] = zy;
    alf[ykf + 2] = alf[ykf + 3] = vbb;
    alf[ykf + 4] = wbb
}

function ejf(spb, aib, bib, usb, vsb, ux, vx, yx, zx, isb, dab) {
    if (!spb) return;
    if (!spb.rob) return;
    if (!spb.rob.complete) return;
    isb &= 0xffffff;
    isb |= (gbb * 255) << 24;
    if (aib < spb.om) {
        var jtd = spb.om - aib;
        ux += jtd;
        usb -= jtd;
        aib = 0
    } else {
        aib -= spb.om;
        usb -= spb.om
    } if (bib < spb.pm) {
        var jtd = spb.pm - bib;
        vx += jtd;
        vsb -= jtd;
        bib = 0
    } else {
        bib -= spb.pm;
        vsb -= spb.pm
    } if (usb > (spb.qm - aib - spb.om)) usb = spb.qm - aib - spb.om;
    if (vsb > (spb.rm - bib - spb.pm)) vsb = spb.rm - bib - spb.pm;
    if (usb <= 0 || vsb <= 0) return;
    ux = ~~ux;
    vx = ~~vx;
    kkf(spb, aib + spb.oh, bib + spb.ph, usb, vsb, ux, vx, usb * yx, vsb * zx, isb)
}

function hjf(sx, hqb, ux, vx, yx, zx, ay, cab, dab) {}

function kjf(jbb, kbb, lbb, mbb, nbb) {
    var rmd, qde, ykf, zkf, alf, blf;
    jbb = ~~jbb;
    kbb = ~~kbb;
    lbb = ~~lbb;
    mbb = ~~mbb;
    var wlf = ghf;
    var oqb = 6;
    if (nbb) {
        wlf = jhf;
        oqb = 8
    }
    rmd = lvc.aif(wlf, null, mhf, oqb);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    rmd.shf += oqb;
    zkf = rmd.phf;
    alf = rmd.rhf;
    blf = rmd.qhf;
    var mz = ~~ ((gbb * 255.0) << 24) | (cbb & 0xffffff);
    if (!nbb) {
        zkf[clf + 10] = zkf[clf + 8] = zkf[clf + 0] = jbb;
        zkf[clf + 11] = zkf[clf + 3] = zkf[clf + 1] = kbb;
        zkf[clf + 6] = zkf[clf + 4] = zkf[clf + 2] = lbb;
        zkf[clf + 9] = zkf[clf + 7] = zkf[clf + 5] = mbb;
        alf[ykf] = alf[ykf + 1] = alf[ykf + 2] = alf[ykf + 3] = alf[ykf + 4] = alf[ykf + 5] = mz
    } else {
        alf[ykf] = alf[ykf + 1] = alf[ykf + 2] = alf[ykf + 3] = alf[ykf + 4] = alf[ykf + 5] = alf[ykf + 6] = alf[ykf + 7] = mz;
        zkf[clf + 10] = zkf[clf + 14] = zkf[clf + 12] = zkf[clf + 0] = jbb;
        zkf[clf + 15] = zkf[clf + 5] = zkf[clf + 3] = zkf[clf + 1] = kbb;
        zkf[clf + 8] = zkf[clf + 6] = zkf[clf + 4] = zkf[clf + 2] = lbb;
        zkf[clf + 7] = zkf[clf + 9] = zkf[clf + 11] = zkf[clf + 13] = mbb
    }
}

function vif(zwe) {
    var mh = 0;
    mif = 4 * (xab(64, yab(4, zwe)) / 4);
    for (mh = 0; mh <= mif; mh++) {
        nif[mh] = Math.cos(mh * 2 * Math.PI / mif);
        oif[mh] = Math.sin(mh * 2 * Math.PI / mif)
    }
}

function ljf(jbb, kbb, lbb, mbb, yy, zy, nbb) {
    var mh, qh, rh;
    qh = 10;
    rh = 10;
    if (qh > Math.abs(lbb - jbb)) qh = Math.abs(lbb - jbb);
    if (rh > Math.abs(mbb - kbb)) rh = Math.abs(mbb - kbb);
    xlf = (yy & 0xffffff) | ((gbb * 255.0) << 24);
    ylf = (zy & 0xffffff) | ((gbb * 255.0) << 24);
    var wlf = hhf;
    var oqb = mif + 6;
    if (nbb) {
        wlf = khf
    }
    var feb = (jbb + lbb) * 0.5;
    var geb = (kbb + mbb) * 0.5;
    var zlf = Math.abs(lbb - jbb) * 0.5 - qh * 0.5;
    var amf = Math.abs(mbb - kbb) * 0.5 - rh * 0.5;
    rmd = lvc.aif(wlf, null, mhf, oqb);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    zkf = rmd.phf;
    alf = rmd.rhf;
    zkf[clf] = feb;
    zkf[clf + 1] = geb;
    alf[ykf] = xlf;
    clf += 2;
    ykf++;
    for (mh = 0; mh <= mif / 4; mh++) {
        zkf[clf] = (feb + zlf + qh * nif[mh] / 2);
        zkf[clf + 1] = (geb + amf + rh * oif[mh] / 2);
        alf[ykf] = ylf;
        clf += 2;
        ykf++
    }
    for (mh = mif / 4; mh <= mif / 2; mh++) {
        zkf[clf] = (feb - zlf + qh * nif[mh] / 2);
        zkf[clf + 1] = (geb + amf + rh * oif[mh] / 2);
        alf[ykf] = ylf;
        clf += 2;
        ykf++
    }
    for (mh = mif / 2; mh <= 3 * (mif / 4); mh++) {
        zkf[clf] = (feb - zlf + qh * nif[mh] / 2);
        zkf[clf + 1] = (geb - amf + rh * oif[mh] / 2);
        alf[ykf] = ylf;
        clf += 2;
        ykf++
    }
    for (mh = 3 * (mif / 4); mh <= mif; mh++) {
        zkf[clf] = (feb + zlf + qh * nif[mh] / 2);
        zkf[clf + 1] = (geb - amf + rh * oif[mh] / 2);
        alf[ykf] = ylf;
        clf += 2;
        ykf++
    }
    zkf[clf] = zkf[(rmd.shf << 1) + 2];
    zkf[clf + 1] = zkf[(rmd.shf << 1) + 3];
    alf[ykf] = ylf;
    if (nbb) {
        var bmf = rmd.shf << 1;
        zkf[bmf] = zkf[bmf + 2];
        zkf[bmf + 1] = zkf[bmf + 3];
        alf[rmd.shf] = alf[rmd.shf + 1]
    }
    rmd.shf += oqb
}

function mjf(jbb, kbb, lbb, mbb, yy, zy, vbb, wbb, nbb) {
    var rmd, qde, ykf, zkf, alf, blf;
    jbb = ~~jbb;
    kbb = ~~kbb;
    lbb = ~~lbb;
    mbb = ~~mbb;
    var nac = ((gbb * 255.0) << 24);
    yy = jab(yy) | nac;
    zy = jab(zy) | nac;
    vbb = jab(vbb) | nac;
    wbb = jab(wbb) | nac;
    var wlf = ghf;
    var oqb = 6;
    if (nbb) {
        wlf = jhf;
        oqb = 8
    }
    rmd = lvc.aif(wlf, null, mhf, oqb);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    rmd.shf += oqb;
    zkf = rmd.phf;
    alf = rmd.rhf;
    blf = rmd.qhf;
    var mz = ~~ ((gbb * 255.0) << 24) | (cbb & 0xffffff);
    if (!nbb) {
        zkf[clf + 10] = zkf[clf + 8] = zkf[clf + 0] = jbb;
        zkf[clf + 11] = zkf[clf + 3] = zkf[clf + 1] = kbb;
        zkf[clf + 6] = zkf[clf + 4] = zkf[clf + 2] = lbb;
        zkf[clf + 9] = zkf[clf + 7] = zkf[clf + 5] = mbb;
        alf[ykf + 0] = alf[ykf + 5] = yy;
        alf[ykf + 2] = alf[ykf + 3] = vbb;
        alf[ykf + 1] = zy;
        alf[ykf + 4] = wbb
    } else {
        alf[ykf + 0] = alf[ykf + 7] = yy;
        alf[ykf + 1] = alf[ykf + 2] = zy;
        alf[ykf + 3] = alf[ykf + 4] = vbb;
        alf[ykf + 5] = alf[ykf + 6] = wbb;
        zkf[clf + 10] = zkf[clf + 14] = zkf[clf + 12] = zkf[clf + 0] = jbb;
        zkf[clf + 15] = zkf[clf + 5] = zkf[clf + 3] = zkf[clf + 1] = kbb;
        zkf[clf + 8] = zkf[clf + 6] = zkf[clf + 4] = zkf[clf + 2] = lbb;
        zkf[clf + 7] = zkf[clf + 9] = zkf[clf + 11] = zkf[clf + 13] = mbb
    }
}

function njf(jbb, kbb, lbb, mbb, yy, zy, zbb, nbb) {}

function ojf(ux, vx) {
    ujf(ux, vx, bbb)
}

function ujf(ux, vx, cab) {
    var rmd, qde, ykf, zkf, alf, blf;
    rmd = lvc.aif(lhf, null, mhf, 1);
    clf = rmd.shf << 1;
    zkf = rmd.phf;
    alf = rmd.rhf;
    blf = rmd.qhf;
    var mz = ~~ ((gbb * 255.0) << 24) | jab(cab);
    zkf[clf + 0] = ~~ux;
    zkf[clf + 1] = ~~vx;
    alf[rmd.shf] = mz;
    rmd.shf++
}

function pjf(ux, vx) {
    var cmf = new Uint8Array(16);
    ux = ~~ux;
    vx = ~~vx;
    lvc.zhf();
    mvc.jmd();
    kvc.readPixels(ux, qif - vx, 1, 1, kvc.RGBA, kvc.UNSIGNED_BYTE, cmf);
    var mz = cmf[2] << 16 | (cmf[1] << 8) | (cmf[0]);
    mvc.mld();
    return mz
}

function qjf(jbb, kbb, lbb, mbb, ncb, ocb, nbb) {
    var rmd, qde, ykf, zkf, alf, blf;
    rmd = lvc.aif(ghf,
        null, mhf, 3);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    zkf = rmd.phf;
    alf = rmd.rhf;
    zkf[clf + 0] = ~~jbb;
    zkf[clf + 1] = ~~kbb;
    zkf[clf + 2] = ~~lbb;
    zkf[clf + 3] = ~~mbb;
    zkf[clf + 4] = ~~ncb;
    zkf[clf + 5] = ~~ocb;
    alf[ykf] = alf[ykf + 1] = alf[ykf + 2] = ((gbb * 255.0) << 24) | cbb;;
    rmd.shf += 3
}

function rjf(jbb, kbb, lbb, mbb, ncb, ocb, dmf, emf, fmf, nbb) {
    var rmd, qde, ykf, zkf, alf, blf;
    var nac = ((gbb * 255.0) << 24);
    dmf = nac | jab(dmf);
    emf = nac | jab(emf);
    fmf = nac | jab(fmf);
    rmd = lvc.aif(ghf, null, mhf, 3);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    zkf = rmd.phf;
    alf = rmd.rhf;
    zkf[clf + 0] = ~~jbb;
    zkf[clf + 1] = ~~kbb;
    zkf[clf + 2] = ~~lbb;
    zkf[clf + 3] = ~~mbb;
    zkf[clf + 4] = ~~ncb;
    zkf[clf + 5] = ~~ocb;
    alf[ykf] = dmf;
    alf[ykf + 1] = emf;
    alf[ykf + 2] = fmf;
    rmd.shf += 3
}

function sjf(jbb, kbb, lbb, mbb, yy, zy, nbb) {
    var feb = (jbb + lbb) / 2;
    var geb = (kbb + mbb) / 2;
    var zlf = Math.abs((jbb - lbb) / 2);
    var amf = Math.abs((kbb - mbb) / 2);
    var nac = ((gbb * 255.0) << 24);
    yy = nac | jab(yy);
    zy = nac | jab(zy);
    var gmf;
    var ryb;
    if (nbb) {
        rmd = lvc.aif(khf, null, mhf, mif + 1);
        clf = rmd.shf << 1;
        ykf = rmd.shf;
        zkf = rmd.phf;
        alf = rmd.rhf;
        rmd.shf += mif + 1;
        for (var mh = 0; mh <= (mif + 1); mh++) {
            zkf[clf] = (feb + zlf * nif[mh]);
            zkf[clf + 1] = (geb + amf * oif[mh]);
            alf[ykf] = zy;
            clf += 2;
            ykf++
        }
    } else {
        rmd = lvc.aif(ghf, null, mhf, (mif * 3));
        clf = rmd.shf << 1;
        ykf = rmd.shf;
        zkf = rmd.phf;
        alf = rmd.rhf;
        rmd.shf += (mif * 3);
        for (var mh = 0; mh <= mif; mh++) {
            zkf[clf + 0] = feb;
            zkf[clf + 1] = geb;
            alf[ykf] = yy;
            zkf[clf + 2] = (feb + zlf * nif[mh]);
            zkf[clf + 3] = (geb + amf * oif[mh]);
            alf[ykf + 1] = zy;
            zkf[clf + 4] = (feb + zlf * nif[mh + 1]);
            zkf[clf + 5] = (geb + amf * oif[mh + 1]);
            alf[ykf + 2] = zy;
            clf += 6;
            ykf += 3
        }
    }
}

function tjf(ux, vx, jeb, yy, zy, nbb) {
    sjf(ux - jeb, vx - jeb, ux + jeb, vx + jeb, yy, zy, nbb)
}

function vjf(jbb, kbb, lbb, mbb, lu, yy, zy) {
    var nac = ((gbb * 255.0) << 24);
    yy = nac | jab(yy);
    zy = nac | jab(zy);
    rmd = lvc.aif(hhf, null, mhf, 4);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    zkf = rmd.phf;
    alf = rmd.rhf;
    rmd.shf += 4;
    var udb = (lbb - jbb);
    var vdb = (mbb - kbb);
    var uu = Math.sqrt((udb * udb) + (vdb * vdb));
    if (uu < 0.0001) return;
    udb = 0.5 * lu * udb / uu;
    vdb = 0.5 * lu * vdb / uu;
    zkf[clf] = (jbb - vdb);
    zkf[clf + 1] = (kbb + udb);
    alf[ykf] = yy;
    zkf[clf + 2] = (lbb - vdb);
    zkf[clf + 3] = (mbb + udb);
    alf[ykf + 1] = zy;
    zkf[clf + 4] = (lbb + vdb);
    zkf[clf + 5] = (mbb - udb);
    alf[ykf + 2] = zy;
    zkf[clf + 6] = (jbb + vdb);
    zkf[clf + 7] = (kbb - udb);
    alf[ykf + 3] = yy
}

function hmf(spb, lu, mu) {
    var imf = kvc.createFramebuffer();
    kvc.bindFramebuffer(kvc.FRAMEBUFFER, imf);
    imf.width = lu;
    imf.height = mu;
    spb.jmf = imf;
    kmf = kvc.createTexture();
    kvc.bindTexture(kvc.TEXTURE_2D, kmf);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_MAG_FILTER, kvc.NEAREST);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_MIN_FILTER, kvc.NEAREST);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_MIN_FILTER, kvc.LINEAR);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_WRAP_S, kvc.CLAMP_TO_EDGE);
    kvc.texParameteri(kvc.TEXTURE_2D, kvc.TEXTURE_WRAP_T, kvc.CLAMP_TO_EDGE);
    spb.rob.omd = kmf;
    kvc.texImage2D(kvc.TEXTURE_2D, 0, kvc.RGBA, imf.width, imf.height, 0, kvc.RGBA, kvc.UNSIGNED_BYTE, null);
    var lmf = kvc.createRenderbuffer();
    kvc.bindRenderbuffer(kvc.RENDERBUFFER, lmf);
    kvc.renderbufferStorage(kvc.RENDERBUFFER, kvc.DEPTH_COMPONENT16, imf.width, imf.height);
    kvc.framebufferTexture2D(kvc.FRAMEBUFFER, kvc.COLOR_ATTACHMENT0, kvc.TEXTURE_2D, kmf, 0);
    kvc.framebufferRenderbuffer(kvc.FRAMEBUFFER, kvc.mmf, kvc.RENDERBUFFER, lmf);
    spb.lmf = lmf;
    kvc.bindTexture(kvc.TEXTURE_2D, null);
    kvc.bindRenderbuffer(kvc.RENDERBUFFER,
        null);
    kvc.bindFramebuffer(kvc.FRAMEBUFFER, null)
}

function xjf(lu, mu) {
    var nob = new oob();
    nob.rob = document.createElement("surf");
    nob.ou = lu;
    nob.pu = mu;
    nob.rob.width = 8;
    nob.rob.height = 8;
    nob.rob.ou = lu;
    nob.rob.pu = mu;
    hmf(nob, lu, mu);
    nob.oh = 0;
    nob.ph = 0;
    nob.qh = lu;
    nob.rh = mu;
    nob.om = 0;
    nob.pm = 0;
    nob.qm = nob.qh;
    nob.rm = nob.rh;
    nob.sm = nob.qh;
    nob.tm = nob.rh;
    nob.um = xob.yu(nob);
    nob.mqb = nob;
    nob.rob.complete = !0;
    nob.nqb = [];
    nob.oqb = 0;
    nob.pqb = 4;
    nob.qqb = 0;
    nob.rqb = null;
    nob.gob = nob.rob;
    return nob.um
}

function yjf(av) {
    var kqb = xob.dv(av);
    if (kqb != null) {
        lvc.zhf();
        pif = kqb.ou;
        qif = kqb.pu;
        yqb.left = zqb.left;
        yqb.top = zqb.top;
        yqb.rfb = zqb.rfb;
        yqb.bottom = zqb.bottom;
        zqb.left = 0;
        zqb.top = 0;
        zqb.rfb = kqb.ou;
        zqb.bottom = kqb.pu;
        arb.ru(brb);
        brb.crb = 0;
        brb.drb = 0;
        brb.erb = kqb.ou;
        brb.frb = kqb.pu;
        brb.grb = 0;
        brb.hrb = 0;
        brb.irb = kqb.ou;
        brb.jrb = kqb.pu;
        brb.krb = 0;
        brb.lrb = 0;
        brb.mrb = kqb.ou;
        brb.nrb = kqb.pu;
        brb.orb = brb.krb + brb.mrb;
        brb.prb = brb.lrb + brb.nrb;
        rvc = kqb.jmf;
        mvc.hmd(kqb.jmf);
        mxc = -1;
        vpd(brb.crb, brb.drb, brb.erb, brb.frb, brb.gcf);
        vqb = !0
    }
}

function zjf() {
    lvc.zhf();
    if (vqb) {
        zqb.left = yqb.left;
        zqb.rfb = yqb.rfb;
        zqb.top = yqb.top;
        zqb.bottom = yqb.bottom;
        brb.ru(arb)
    }
    mxc = 1;
    rvc = null;
    mvc.hmd(null);
    vpd(brb.crb, brb.drb, brb.erb, brb.frb, brb.gcf);
    pif = kvc.viewportWidth;
    qif = kvc.viewportHeight
}

function akf(av) {
    var kqb = xob.dv(av);
    if (kqb != null) {
        kvc.deleteFramebuffer(kqb.jmf);
        kvc.deleteRenderbuffer(kqb.lmf);
        kvc.deleteTexture(kqb.rob.omd);
        kqb.rob.omd = undefined;
        xob.iv(av)
    }
}

function bkf(av, ux, vx) {
    var kqb = xob.dv(av);
    if (kqb != null) {
        var cmf = new Uint8Array(16);
        ux = ~~ux;
        vx = ~~vx;
        lvc.zhf();
        mvc.jmd();
        kvc.bindFramebuffer(kvc.FRAMEBUFFER,
            kqb.jmf);
        kvc.readPixels(ux, vx, 1, 1, kvc.RGBA, kvc.UNSIGNED_BYTE, cmf);
        kvc.bindFramebuffer(kvc.FRAMEBUFFER, rvc);
        var mz = cmf[2] | (cmf[1] << 8) | (cmf[1] << 16);
        mvc.mld();
        return mz
    }
    return 0x00000000
}

function ckf(av, ux, vx) {
    var kqb = xob.dv(av);
    if (!kqb) return;
    ux = ~~ux;
    vx = ~~vx;
    eab.mob(kqb, 0, 0, kqb.ou, kqb.pu, ux, vx, kqb.ou, kqb.pu, 0xffffffff)
}

function dkf(ksb, ux, vx, lsb) {
    ex("surface_copy() (WebGL)");
}

function ekf(ksb, ux, vx, lsb, psb, qsb, rsb, ssb) {
    var msb = xob.dv(ksb);
    var nsb = xob.dv(lsb);
    if (msb != null && nsb != null) {}
    ex("surface_copy_part() (WebGL)")
}

function hkf(fjb, ux, vx, lu, mu, eob, fob) {
    ex("sprite_add_from_screen() (WebGL)");
    return -1
}

function gkf(av, ux, vx, lu, mu, eob, fob, vob, wob) {
    ex("sprite_create_from_surface() (WebGL)");
    return -1
}

function fkf(fjb, av, ux, vx, lu, mu, eob, fob) {
    ex("sprite_add_from_surface() (WebGL)");
    return -1
}

function ikf(av) {
    var rib = sib.dv(av);
    if (rib) {
        var rmd, qde, ykf, zkf, alf, blf, jbb, kbb, lbb, mbb;
        var tib = ~~ ((gbb * 255.0) << 24) | (0xff0000 & 0xffffff);
        var uib = ~~ ((gbb * 255.0) << 24) | (0x00ff00 & 0xffffff);
        var oqb = 6 * (rib.jib * rib.iib);
        rmd = lvc.aif(ghf, null, mhf,
            oqb);
        clf = rmd.shf << 1;
        ykf = rmd.shf;
        rmd.shf += oqb;
        zkf = rmd.phf;
        alf = rmd.rhf;
        for (var ph = 0; ph < rib.jib; ph++) {
            for (var oh = 0; oh < rib.iib; oh++) {
                var mz = uib;
                if (rib.mib[ph + rib.iib * oh] < 0) mz = tib;
                jbb = ~~ (rib.gib + oh * rib.kib);
                kbb = ~~ (rib.hib + ph * rib.lib);
                lbb = jbb + rib.kib;
                mbb = kbb + rib.lib;
                zkf[clf + 10] = zkf[clf + 8] = zkf[clf + 0] = jbb;
                zkf[clf + 11] = zkf[clf + 3] = zkf[clf + 1] = kbb;
                zkf[clf + 6] = zkf[clf + 4] = zkf[clf + 2] = lbb;
                zkf[clf + 9] = zkf[clf + 7] = zkf[clf + 5] = mbb;
                alf[ykf] = alf[ykf + 1] = alf[ykf + 2] = alf[ykf + 3] = alf[ykf + 4] = alf[ykf + 5] = mz;
                clf += 12;
                ykf += 6
            }
        }
        return
    }
    jt("Error: invalid mp_grid ID (mp_grid_draw)")
}

function jkf(av, anb, bnb, cnb) {
    var dnb = enb.ng[av];
    if (!dnb) return;
    var rmd, qde, ykf, zkf, alf, blf;
    var mz = ~~ ((gbb * 255.0) << 24) | (cbb & 0xffffff);
    var udb, vdb, fnb;
    var gnb = 0;
    var hnb = dnb.inb(0);
    if (!cnb) {
        anb = anb - hnb.oh;
        bnb = bnb - hnb.ph
    } else {
        anb = 0;
        bnb = 0
    }
    gnb = jz(dnb.length / 4.0);
    if (gnb == 0) return;
    var oqb = gnb * 2;
    rmd = lvc.aif(jhf, null, mhf, oqb);
    clf = rmd.shf << 1;
    ykf = rmd.shf;
    rmd.shf += oqb;
    zkf = rmd.phf;
    alf = rmd.rhf;
    blf = rmd.qhf;
    for (var mh = 0; mh < gnb; mh++) {
        hnb = dnb.inb(mh / gnb);
        jbb = ~~ (anb + hnb.oh);
        kbb = ~~ (bnb + hnb.ph);
        hnb = dnb.inb((mh + 1) / gnb);
        lbb = ~~ (anb + hnb.oh);
        mbb = ~~ (bnb + hnb.ph);
        alf[ykf] = alf[ykf + 1] = mz;
        zkf[clf + 0] = jbb;
        zkf[clf + 1] = kbb;
        zkf[clf + 2] = lbb;
        zkf[clf + 3] = mbb;
        clf += 4;
        ykf += 2
    }
}
var nmf = 0;
var omf = 100;
var cu = null;
var pmf, qmf, rmf, smf, tmf, umf, vmf;
var eab = null;
var srb = null;
var wmf = 0;
var xmf = 0;
var ymf = 0;
var zmf = 0;
var anf = 0;
var xw = 0;
var bnf = 0;
var ewb = 60;
var cnf;
window.onload = dnf;
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (enf,
        ww) {
        cnf = window.setTimeout(enf, 1000 / 60)
    }
})();

function fnf() {
    var nh = document.getElementById(hob);
    var ph = document.createElement('textarea');
    ph.setAttribute("id", "debug_console");
    ph.setAttribute("cols", "100");
    ph.setAttribute("rows", "20");
    ph.style.display = "none";
    var gnf = nh.parentNode;
    gnf.insertBefore(ph, nh.nextSibling);
    ttb = 0x71562
}

function uyb(gqd, fqd) {
    fqd.left = 0;
    fqd.top = 0;
    wyd = gqd;
    if (wyd.offsetParent) {
        while (wyd != null) {
            fqd.left += wyd.offsetLeft;
            fqd.top += wyd.offsetTop;
            wyd = wyd.offsetParent
        }
    }
    fqd.rfb = fqd.left + lwc;
    fqd.bottom = fqd.top + mwc;
}

function hnf(uud) {
    dvc = [];
    evc = [];
    fvc = [];
    hxc = 0;
    var inf = uud.search;
    var jnf = uud.protocol + "//" + uud.host + uud.pathname;
    evc[0] = jnf;
    fvc[0] = null;
    if (inf[0] == "?") inf = inf.substring(1, inf.length);
    var xl = vod = 0;
    var knf = "";
    var que = null;
    while (xl < inf.length) {
        var nh = inf[xl];
        if (nh == "&") {
            if (knf != "") {
                if (vod != xl) que = inf.substring(vod, xl);
                evc[evc.length] = knf;
                fvc[fvc.length] = que;
                dvc[knf] = que;
                hxc++;
                knf = "";
                que = null
            }
            vod = xl + 1
        } else if (nh == "=") {
            knf = inf.substring(vod, xl);
            que = null;
            vod = xl + 1
        }
        xl++
    }
    if (knf != "") {
        if (vod != xl) que = inf.substring(vod,
            xl);
        evc[evc.length] = knf;
        fvc[fvc.length] = que;
        dvc[knf] = que;
        hxc++;
        knf = que = ""
    }
}

function yae() {
    pmf = cu.style.position;
    qmf = cu.style.left;
    rmf = cu.style.top;
    smf = cu.style;
    tmf = cu.parentNode;
    umf = cu.nextSibling;
    vmf = !1;
    if (tmf == document.body) {
        vmf = !0
    }
}

function dnf() {
    if (!document.getElementById || !document.createElement) return;
    cu = document.getElementById(hob);
    eab = null;
    if (!cu) return;
    hnf(window.location);
    luc = tf;
    cwc = !1;
    kvc = null;
    if ((luc.wm.ln) && (luc.wm.ln != 0)) {
        var lnf = rif(cu);
        if (lnf) {
            eab = kvc;
        } else {
            if (luc.wm.ln == 1) {
                cwc = !0
            }
            eab = cu.getContext('2d')
        }
    } else {
        eab = cu.getContext('2d')
    }
    srb = eab;
    mnf = kvc;
    fnf();
    yae();
    job(eab);
    document.body.oncontextmenu = function () {
        return !1
    };
    uwc = cu.width;
    vwc = cu.height;
    lwc = uwc;
    mwc = vwc;
    vyb = new bpb();
    uyb(cu, vyb);
    pwc = vyb.top;
    nwc = vyb.left;
    owc = vyb.rfb;
    qwc = vyb.bottom;
    bu();
    rad = document.getElementById('GM4HTML5_loadingscreen');
    if (luc.wm && luc.wm.xm) {
        uw = !0;
        nae(document.getElementById('debug_console'))
    }
    if (kvc) zw("WebGL Enabled!");
    sad();
    jub();
    if (cwc) {
        wmf = -2
    } else {
        if (uw) rq.tkd = luc.wm.xm;
        mcd = "";
        if (luc.wm) {
            if (luc.wm.nnf) {
                mcd = luc.wm.nnf
            }
        }
        if (mcd != "") {
            jcd(luc);
            wmf = -1
        } else {
            kcd(luc);
            wmf = 0
        }
    }
    requestAnimFrame(onf)
}

function onf() {
    requestAnimFrame(onf);
    switch (wmf) {
    case -2:
        {
            pnf(eab, lwc, mwc);
            break
        }
    case -1:
        if (oad == pad) {
            kcd(luc);
            wmf = 0;
            mcd(eab, lwc, mwc, mad, nad, rad)
        }
        break;
    case 0:
        if (nad >= mad) {
            nad = mad;
            wmf = 1
        }
        rcd();
        mcd(eab, lwc, mwc, mad, nad, rad);
        break;
    case 1:
        gdd(luc);
        wmf = 2;
        break;
    case 2:
        qnf();
        wmf = 3;
        break;
    case 3:
        rnf();
        break
    }
}

function snf(oh, ph, bm, tw) {
    eab.fillStyle = bm;
    eab.lineStyle = bm;
    eab.font = "14px Verdana";;
    eab.textAlign = "center";
    eab.fillText(tw,
        oh, ph);
    eab.textAlign = "left"
}

function pnf(aqd, usb, vsb) {
    eab.fillStyle = iab(0x151515, 1.0);
    eab.fillRect(0, 0, usb, vsb);
    snf(usb / 2, (vsb / 2), iab(0x8d8f90, 1.0), "WebGL is Required to run this application.")
}

function ncd(eab, usb, vsb, tnf, unf, vnf) {
    if (kvc) return;
    if (vnf) {
        aab(0, 0);
        eab.drawImage(rad, 0, 0, usb, vsb)
    } else {
        var wnf = (usb / 100) * 50;
        var xnf = 2;
        var oh = (usb - wnf) / 2;
        var ph = 10 + (vsb - xnf) / 2;
        eab.fillStyle = iab(0x151515, 1.0);
        eab.fillRect(0, 0, usb, vsb);
        if (unf != 0) {
            var qh = (wnf / tnf) * unf;
            eab.fillStyle = iab(0x404040, 1.0);
            eab.fillRect(oh,
                ph, wnf, xnf);
            eab.fillStyle = iab(0x8d8f90, 1.0);
            eab.fillRect(oh, ph, qh, xnf)
        }
        snf(usb / 2, (vsb / 2), iab(0x8d8f90, 1.0), "TETRIS")
    }
}

function ynf(hdf) {
    bw.nib();
    var znf = hdf.xaf.wl;
    for (var mh = 0; mh < znf.length; mh++) {
        bw.yu(znf[mh]);
        var aw = bw.dv(mh);
        oo(global, "__background_visible__", mh, aw.xh);
        oo(global, "__background_foreground__", mh, aw.fhd);
        oo(global, "__background_index__", mh, aw.xl);
        oo(global, "__background_x__", mh, aw.oh);
        oo(global, "__background_y__", mh, aw.ph);
        oo(global, "__background_width__", mh, aw.width);
        oo(global, "__background_height__",
            mh, aw.height);
        oo(global, "__background_htiled__", mh, aw.hhd);
        oo(global, "__background_vtiled__", mh, aw.jhd);
        oo(global, "__background_xscale__", mh, aw.phd);
        oo(global, "__background_yscale__", mh, aw.qhd);
        oo(global, "__background_vspeed__", mh, aw.lhd);
        oo(global, "__background_hspeed__", mh, aw.khd);
        oo(global, "__background_blend__", mh, aw.ohd);
        oo(global, "__background_alpha__", mh, aw.nhd)
    }
    rq.gid = hdf.naf
}

function aof(zwe, bof) {
    var cof = dfb;
    yzb.ffb(pcc, 0);
    var rvd = [];
    if (cof != null) {
        var mh;
        for (mh = cof.mfb.length - 1; mh >= 0; mh--) {
            var teb = cof.mfb.dv(mh);
            if (teb.rvd === !0) {
                rvd[rvd.length] = teb;
                teb.dof = !0
            }
        }
        for (mh = rvd.length - 1; mh >= 0; mh--) {
            cof.mfb.mub(rvd[mh])
        }
        if (cof.laf === !1) {
            cof.ybf()
        }
    }
    onb = -1;
    st.nib();
    bxe();
    dfb = mnb.dv(zwe);
    var eof = dfb.laf;
    if (eof === !0 && dfb.maf === !1) {
        eof = !1
    }
    if (eof === !1) {
        dfb.pdd(dfb.xaf);
        dfb.fcf()
    }
    rq.vhd = dfb.am;
    dfb.ccf();
    fof();
    ynf(dfb);
    if (eof === !1) {
        dfb.ybf();
        with(dfb) {
            dfb.ybf();
            mfb = new xqe();
            var gof = xaf.zl;
            for (var uu = 0; uu < xaf.zl.length; uu++) {
                var bdd = !1;
                var hof = xaf.zl[uu];
                for (var mlf = rvd.length - 1; mlf >= 0; mlf--) {
                    if (hof.am == rvd[mlf].am) {
                        bdd = !0;
                        break
                    }
                }
                if (!bdd) {
                    var vib = dfb.vwd(hof.oh, hof.ph, hof.am, hof.xl);
                    if (hof.jh != undefined) vib.xvd = hof.jh;
                    if (hof.kh != undefined) vib.yvd = hof.kh;
                    if (hof.bm != undefined) vib.awd = hof.bm;
                    vib.dof = !1
                }
            }
            var gof = xaf.zl;
            for (var uu = 0; uu < xaf.zl.length; uu++) {
                var hof = xaf.zl[uu];
                var vib = yzb.dv(hof.am);
                if (vib.dof == !1) {
                    vib.dof = !0;
                    if (!dwc) {
                        if (hof.wbf) hof.wbf(vib);
                        vib.ffb(gfb, 0, vib, vib)
                    } else {
                        vib.ffb(gfb, 0, vib, vib);
                        if (hof.wbf) hof.wbf(vib)
                    }
                }
            }
        }
    }
    for (var mlf = 0; mlf < rvd.length; mlf++) {
        dfb.mfb.yu(rvd[mlf])
    }
    if (bof) {
        yzb.ffb(mcc, 0)
    }
    if ((eof == !1) && (dfb.raf != null)) {
        iof = new lzc();
        dfb.raf(iof);
        iof = null
    }
    yzb.ffb(occ, 0);
    dfb.maf = !0
}

function jof(kof) {
    aof(kof, !1)
}

function qnf() {
    rq.yhd = 0;
    rq.zhd = -1;
    hwc = 0;
    iwc = -1;
    jwc = 0;
    kwc = 0;
    aof(mnb.pnb(0).am, !0);
    xmf = ymf = iub();
    anf = ~~ (xmf / 1000000) + 4;
    rq.bkd = ewb
}

function lof() {
    ruc = [];
    suc = [];
    dvb = -1;
    cvb = -1;
    bvb = 0;
    dfb.mfb.nib();
    dfb.saf.nib();
    var nfb = cfb.uqe;
    for (var mh in nfb) {
        var reb = nfb[mh];
        reb.qzb.nib();
        reb.hzd.nib()
    }
    yzb.nib()
}

function mof() {
    st.cee()
}

function nof() {
    if (dfb.mfb.yqe >= 0) dfb.mfb.dee();
    if (dfb.qwd.length > 0) dfb.fdf();
}

function oof() {
    st.wbe();
    yzb.jzd();
    ivc.wgd(jtc);
    yzb.ffb(kcc, 0);
    nof();
    if (onb != -1) return;
    nuc.wgd();
    nof();
    if (onb != -1) return;
    cac();
    nof();
    if (onb != -1) return;
    mac();
    nof();
    if (onb != -1) return;
    bee();
    nof();
    if (onb != -1) return;
    myb();
    nof();
    if (onb != -1) return;
    ivc.wgd(ktc);
    yzb.ffb(jcc, 0);
    nof();
    if (onb != -1) return;
    yzb.kzd();
    ixb();
    nof();
    if (onb != -1) return;
    qxb();
    nof();
    if (onb != -1) return;
    ivc.wgd(ltc);
    yzb.ffb(lcc, 0);
    nof();
    if (onb != -1) return;
    uxe();
    if (dfb != null) {
        dfb.adf();
        dfb.aye();
        nof()
    }
    dfb.jcf();
    yzb.lzd();
    nof();
    mof()
}

function fof() {
    var left, rfb, top, bottom;
    left = 0;
    rfb = -999999;
    top = 0;
    bottom = -999999;
    with(dfb) {
        if (oyb) {
            for (mh in qyb) {
                syb = qyb[mh];
                if (syb.xh && syb.tyb == -1) {
                    if (rfb < syb.grb + syb.irb) rfb = syb.grb + syb.irb;
                    if (bottom < syb.hrb + syb.jrb) bottom = syb.hrb + syb.jrb
                }
            }
        } else {
            left = 0;
            rfb = dfb.jaf;
            top = 0;
            bottom = dfb.kaf
        }
    }
    ipd = lwc;
    jpd = mwc;
    kpd = lwc / (rfb - left);
    lpd = mwc / (bottom - top);
    ouc.irb = ipd / kpd;
    ouc.jrb = jpd / lpd;
    ouc.erb = ipd / kpd;
    ouc.frb = jpd / lpd;
    var iz = new bpb();
    iz.left = left;
    iz.top = top;
    iz.rfb = rfb;
    iz.bottom = bottom;
    zqb = iz
}

function pof() {
    var qh = 640;
    if (typeof (window.innerWidth) == 'number') {
        qh = window.innerWidth
    } else if (document.documentElement && document.documentElement.clientWidth) {
        qh = document.documentElement.clientWidth
    } else if (document.body && document.body.clientWidth) {
        qh = document.body.clientWidth
    }
    return qh
}

function qof() {
    var rh = 480;
    if (typeof (window.innerHeight) == 'number') {
        rh = window.innerHeight
    } else if (document.documentElement && document.documentElement.clientHeight) {
        rh = document.documentElement.clientHeight
    } else if (document.body && document.body.clientHeight) {
        rh = document.body.clientHeight
    }
    return rh;
}

function rof() {
    uyb(cu, vyb);
    pwc = vyb.top;
    nwc = vyb.left;
    owc = vyb.rfb;
    qwc = vyb.bottom;
    if (!tf.bn) {
        eab.mozImageSmoothingEnabled = !1
    }
    var qh = pof();
    var rh = qof();
    if ((yvc) && (!fwc)) {
        if ((wwc != qh) || (xwc != rh)) {
            fwc = !0;
            yvc = !1
        }
    }
    if (fwc) {
        fwc = !1;
        if (yvc) {
            qh = uwc;
            rh = vwc;
            yvc = !1;
            cu.style.position = pmf;
            cu.style.left = qmf;
            cu.style.top = rmf;
            cu.style = smf;
            if (!vmf) {
                if (cu.parentNode != tmf) {
                    tmf.insertBefore(cu, umf)
                }
            }
        } else {
            yvc = !0;
            etb(0, 0);
            if (!vmf) {
                if (cu.parentNode == tmf) {
                    tmf.removeChild(cu);
                    document.body.insertBefore(cu, null)
                }
            }
        }
        cu.width = qh;
        cu.height = rh;
        lwc = cu.width;
        mwc = cu.height;
        nwc = cu.offsetLeft;
        owc = nwc + lwc;
        pwc = cu.offsetTop;
        qwc = nwc + mwc;
        wwc = lwc;
        xwc = mwc;
        ipd = qh;
        jpd = sof = 1;
        lpd = 1;
        fof()
    }
}
var tof = 0;
var uof = 0.0;

function rnf() {
    ymf = iub();
    if (ymf < xmf || ((ymf - xmf) > 2000000)) {
        xmf = ymf;
        anf = xmf
    }
    if (dfb.dwb() <= 0) {
        dfb.cbf(1)
    }
    xw = ~~ (ymf - xmf);
    uof = ~~ (1000000.0 / dfb.dwb()) - xw;
    zmf = max(0, uof);
    zmf = min(zmf, 1000000.0);
    var vof = 1000000.0 / dfb.dwb();
    if (zmf > 14000) return;
    xmf = ymf + zmf;
    if (xmf < anf) {
        anf = xmf
    }
    if (~~xmf > (anf + 1000000)) {
        ewb = bnf;
        bnf = 0;
        anf = ~~xmf;
        xmf = 0
    }
    bnf++;
    rq.bkd = ewb;
    if (!xvc) {
        nff = 0;
        rof();
        if (dfb === null) {
            ouc.orb = ouc.mrb = ouc.irb = ouc.erb = lwc;
            ouc.prb = ouc.nrb = ouc.jrb = ouc.frb = mwc
        } else {
            fof()
        } if (onb == -1) xqd(); {
            oof()
        }
        if (tof < nff) tof = nff;
        if (onb < 0) zqd();
        switch (onb) {
        case -1:
            break;;
        case tbc:
        case wbc:
            wof = !1;
            return;
        case ubc:
            lof();
            qnf();
            break;
        case vbc:
            gdd();
            break;
        default:
            jof(onb)
        }
    }
}
