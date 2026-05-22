/**
 * 店舗データ定義(omakase業態)
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 */
module.exports = {
  brand: {
    domain: "japan-omakase.wagyu-sushi.com",
    ga4_id: "G-71QJSRH923",
    brand_name: "Halal Omakase Sushi & Wagyu",
    brand_slug: "japan-omakase"
  },

  stores: [
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "asakusa-kominka",

      // ===== 店名 =====
      name_full_en: "Omakase Sushi Wagyu (Halal) Tokyo Asakusa Restaurant",
      name_short: "Omakase 墨 — Asakusa",
      name_jp: "おまかせ 墨 浅草店",
      name_zh: "浅草寿司和牛餐厅",

      // ===== 立地 =====
      city: "Asakusa, Tokyo",
      station_en: "Asakusa Station",
      address_en: "3-27-5 Asakusa, Taito-ku, Tokyo",
      address_postal: "111-0032",

      // ===== 連絡先 =====
      tel_display: "03-3872-2010",
      tel_raw: "+81338722010",

      // ===== 営業 =====
      hours: "11:00 – 23:00",
      hours_note: "Open Daily",

      // ===== 予約・地図 =====
      tablecheck_url: "https://www.tablecheck.com/shops/halal-omakase-asakusa/reserve",
      maps_link: "https://maps.app.goo.gl/pxiMce5bhj1WMLpo9",

      // ===== 評価 =====
      rating: "4.8",
      rating_count: "500+",
      rating_source: "Google reviews"
    }

    // ===== 2店舗目を追加するときはこの下にもう1つ { ... } を書くだけ =====
  ]
};
