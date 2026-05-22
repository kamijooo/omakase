# Japan Omakase LP

業態: **Halal Omakase Sushi & Wagyu(おまかせ 墨)**
ドメイン: `japan-omakase.wagyu-sushi.com`
GA4測定ID: `G-71QJSRH923`

Eleventy(11ty)製の静的サイト。1つのテンプレ + 店舗データから、全店舗ページを自動生成。

## ⚠️ 画像フォルダ名は `images/`(この業態だけ)

- ✅ `omakase` → `src/images/`
- ✅ `tofu-vegan` → `src/tofu-image/`
- ✅ `steak`, `sandwich` → `src/assets/`
- ✅ `japanese-burger` → `src/image/`

## ディレクトリ

```
.
├── .eleventy.js              ← Eleventy設定(images/ をパススルー)
├── package.json
├── vercel.json               ← / → /tokyo/asakusa-kominka/ リダイレクト
├── src/
│   ├── _data/stores.js       ← 業態設定と店舗データ
│   ├── store.njk             ← 全店舗共通のページテンプレ
│   └── images/               ← 画像(配信)
└── _site/                    ← ビルド成果物
```

## 予約

すべての予約ボタンは TableCheck の予約ページへ外部リンク:
`https://www.tablecheck.com/shops/halal-omakase-asakusa/reserve`

## GA4の計測内容

すべてのイベントに `store_name`, `store_area`, `brand` を付与。

### カスタムイベント
- `reserve_click`: sticky_cta, header, hero, reservation_section, footer
- `tel_click`: access
- `directions_click`: access, footer
- `map_click`: hero

## UTM付きURL

**Googleマップのプロフィール用:**
```
https://japan-omakase.wagyu-sushi.com/tokyo/asakusa-kominka/?utm_source=google-maps-hp&utm_medium=organic&utm_campaign=profile
```

**Google広告のウェブサイトボタン用:**
```
https://japan-omakase.wagyu-sushi.com/tokyo/asakusa-kominka/?utm_source=google-ads-website&utm_medium=cpc&utm_campaign=store
```
