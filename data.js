/**
 * salonX Data
 * 物件情報・特徴・プロセスなどのデータ
 * CMSやAPIと連携する場合はこのファイルを置き換え
 */

const SALONX_DATA = {
    // 特徴
    features: [
        {
            icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>',
            title: 'おとり物件ゼロ',
            desc: 'すべての掲載物件は現地確認済み。存在しない物件でお客様の時間を奪うことは一切ありません。'
        },
        {
            icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
            title: '5分開業診断',
            desc: '目標客数と客単価から、最適な家賃帯と初期資金を即座に算出。事業計画の第一歩を支援します。'
        },
        {
            icon: '<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
            title: 'LINE即レス対応',
            desc: '新着物件情報をLINEでリアルタイム通知。気になる物件はそのままチャットで内見予約が可能です。'
        },
        {
            icon: '<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
            title: '居抜き物件査定',
            desc: '独自のネットワークで居抜き物件を多数確保。造作譲渡のマッチングで初期費用を大幅削減。'
        },
        {
            icon: '<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
            title: '融資サポート',
            desc: '日本政策金融公庫をはじめとする融資申請を全面サポート。成功率94%以上の実績があります。'
        },
        {
            icon: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
            title: '内見レポート自動生成',
            desc: '内見後にPDFレポートを自動生成。物件比較や融資相談に必要な資料作成の手間を省きます。'
        }
    ],

    // 物件情報
    properties: [
        {
            id: 1,
            type: 'turnkey',
            typeLabel: '居抜き',
            area: 'SHINJUKU',
            name: '新宿三丁目 美容サロン居抜き',
            size: '25.5㎡',
            floor: '6F',
            access: '徒歩2分',
            price: 198000,
            image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600',
            sold: true
        },
        {
            id: 2,
            type: 'skeleton',
            typeLabel: 'スケルトン',
            area: 'KICHIJOJI',
            name: '吉祥寺駅前 新築スケルトン',
            size: '32.8㎡',
            floor: '2F',
            access: '徒歩1分',
            price: 275000,
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
            sold: false
        },
        {
            id: 3,
            type: 'street',
            typeLabel: '路面店',
            area: 'NAKAMEGURO',
            name: '中目黒 路面店舗',
            size: '28.2㎡',
            floor: '1F',
            access: '徒歩5分',
            price: 320000,
            image: 'https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=600',
            sold: false
        },
        {
            id: 4,
            type: 'turnkey',
            typeLabel: '居抜き',
            area: 'SHIMOKITAZAWA',
            name: '下北沢 ネイルサロン居抜き',
            size: '18.5㎡',
            floor: '3F',
            access: '徒歩3分',
            price: 145000,
            image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600',
            sold: true
        },
        {
            id: 5,
            type: 'skeleton',
            typeLabel: 'スケルトン',
            area: 'SHIBUYA',
            name: '渋谷道玄坂 大型スケルトン',
            size: '45.0㎡',
            floor: '4F',
            access: '徒歩4分',
            price: 385000,
            image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600',
            sold: false
        },
        {
            id: 6,
            type: 'street',
            typeLabel: '路面店',
            area: 'MITAKA',
            name: '三鷹駅南口 路面店舗',
            size: '22.0㎡',
            floor: '1F',
            access: '徒歩2分',
            price: 168000,
            image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600',
            sold: false
        }
    ],

    // プロセス
    process: [
        {
            number: '01',
            title: '無料相談・ヒアリング',
            desc: 'LINEまたはお電話で、ご希望のエリア・予算・サロンのコンセプトをお聞かせください。'
        },
        {
            number: '02',
            title: '物件のご提案',
            desc: 'ご要望に合った物件を厳選してご紹介。非公開物件もご案内可能です。'
        },
        {
            number: '03',
            title: '内見・現地確認',
            desc: '実際に物件をご覧いただき、設備や周辺環境をご確認。内見レポートをお渡しします。'
        },
        {
            number: '04',
            title: '契約・融資サポート',
            desc: '契約交渉から融資申請まで全面サポート。有利な条件を引き出します。'
        },
        {
            number: '05',
            title: '開業・アフターフォロー',
            desc: '内装業者や機器メーカーのご紹介も可能。開業後もサポートを継続します。'
        }
    ],

    // 設定
    config: {
        lineUrl: 'https://line.me/R/ti/p/@salonx',
        companyUrl: 'https://v8corp.jp',
        rentRatio: 0.15,      // 家賃比率（月商の15%）
        capitalMultiplier: 30  // 初期資金倍率（家賃の30倍）
    }
};
