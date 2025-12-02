# salonX - 美容サロン専門不動産

美容サロン開業に特化した不動産サービスのウェブサイトです。

## ディレクトリ構成

```
salonx/
├── index.html          # メインHTML
├── css/
│   └── style.css       # スタイルシート
├── js/
│   ├── data.js         # 物件・コンテンツデータ
│   └── main.js         # JavaScript
├── images/             # 画像ファイル（要追加）
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── ogp.jpg
└── README.md
```

## セットアップ

### GitHub Pages

1. このフォルダをリポジトリにアップロード
2. Settings → Pages → Source: `main` branch
3. `https://username.github.io/repo-name/salonx/` でアクセス

### Netlify

1. リポジトリを接続
2. Build設定は不要（静的サイト）
3. フォームは自動で有効化されます

## カスタマイズ

### 物件情報の更新

`js/data.js` の `properties` 配列を編集：

```javascript
{
    id: 7,
    type: 'turnkey',        // skeleton, turnkey, street
    typeLabel: '居抜き',
    area: 'OMOTESANDO',
    name: '表参道 美容室居抜き',
    size: '30.0㎡',
    floor: '2F',
    access: '徒歩3分',
    price: 280000,
    image: 'images/property-7.jpg',  // ローカル画像
    sold: false              // true で成約済み表示
}
```

### 画像の差し替え

1. `images/` フォルダに画像を配置
2. `data.js` のパスを更新

### 色の変更

`css/style.css` の `:root` セクションを編集：

```css
:root {
    --primary: #d4a373;      /* メインカラー */
    --primary-light: #e6c9a8;
    --primary-dark: #bc8c5f;
    /* ... */
}
```

### フォーム送信先

Netlify以外を使用する場合、`index.html` のフォームを編集：

```html
<form action="YOUR_ENDPOINT" method="POST">
```

## 機能

- ✅ レスポンシブデザイン
- ✅ 開業診断ツール
- ✅ 物件フィルター
- ✅ 成約済み（SOLD）表示
- ✅ スクロールアニメーション
- ✅ カウンターアニメーション
- ✅ Netlify Forms対応
- ✅ SEO/OGP対応

## ブラウザ対応

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## ライセンス

© V8 Corporation
