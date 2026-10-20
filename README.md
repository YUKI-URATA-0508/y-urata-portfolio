# Y.URATA Portfolio

個人ポートフォリオのトップページ。提供デザインカンプ（1024 × 1536px）を1440px幅に換算し、配置・改行・余白・罫線・コバルトブルーの配色を再現しています。

## 開発環境

- Node.js 22以上（動作確認: 24.19.0）
- pnpm 11.25.0
- Next.js 16.4.2 / App Router
- React 19.3.1 / TypeScript 5.9.3
- Tailwind CSS 4.3.3（PostCSS）
- GSAP 3.15.0 / ScrollTrigger
- Inter / Noto Sans JP（`next/font/google`によるセルフホスト）

依存バージョンは `pnpm-lock.yaml` に固定しています。Next.js公式ESLint設定に含まれるReact・import・a11yプラグインのpeer依存がESLint 10に未対応のため、ESLintは9.39.5を使用しています。インストール時にはESLint 9のサポート終了・非推奨警告が出ます。互換性チェックとLintは通過していますが、公式プラグインの対応後に更新してください。pnpm自体の更新通知はプロジェクトエラーではありません。

## セットアップと起動

一般的なNode.js環境では、次を実行してください。

```sh
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

開発URL: http://localhost:3000

このCodex環境にはnpmコマンドが公開されていないため、検証には同梱pnpmの絶対パスを使用しました。通常のPCでは上記手順で起動できます。

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

初回のビルド・開発起動にはGoogle Fontsへの接続が必要です。フォントはビルド時に取得してサイト側から配信し、閲覧者のブラウザーからGoogle Fontsへリクエストしません。オフラインビルドが必要になった場合は、ライセンスを同梱したローカルフォントへ切り替え、`next/font/local`を使用してください。

通常のローカル開発では環境変数・認証情報・外部APIは不要です。GitHub Pages向けビルドのみ`NEXT_PUBLIC_BASE_PATH`を設定します（GitHub Actionsで自動設定）。`pnpm build`は`out`へ静的ファイルを書き出し、`pnpm start`はそのローカルプレビューを起動します。

## ファイル構成

```text
src/
  app/
    layout.tsx          メタデータ・Webフォント・共通スタイル
    page.tsx            トップページの構成
    globals.css         Tailwind読み込み・デザイントークン・各セクション
    icon.svg            YをモチーフにしたSVGアイコン
    favicon.ico         16 / 32 / 48pxのアイコン
  components/
    site-header.tsx     ヘッダー
    sections.tsx        Hero / About / Works / Skills / Contact
    site-footer.tsx     フッター・SNS
    ui.tsx              セクション番号・矢印・ラインアイコン
    motion-provider.tsx GSAP登録・ローディング・スクロール演出
  data/portfolio.ts     画像参照・制作実績・スキル・リンク先
  lib/animation.ts      アニメーション調整値
public/
  images/               差し替え可能な独立した仮写真
  apple-icon.png        Apple Touch Icon（180px）
docs/
  verification.md       検証内容と残る差異
```

下層ページを追加する際は `src/app/about/page.tsx`、`src/app/works/page.tsx`、`src/app/works/[slug]/page.tsx` などを作成してください。下層ページの実装は今回の範囲に含みません。

## 画像の差し替え

カンプ全体を切り抜いた画像は使用していません。現在の写真はUnsplashの仮素材であり、実際の制作実績を示すものではありません。元写真の配信URLは [public/images/SOURCES.md](public/images/SOURCES.md) に記録しています。

1. `public/images/` に使用する画像を保存します。同名で置き換えるか、新しいファイル名にします。
2. ファイル名を変えた場合は `src/data/portfolio.ts` の `images` または `works` を更新します。
3. `alt`を新しい画像の内容に合わせて変更します。
4. Hero / About / Contactは同ファイルの`position`で切り取り位置を調整できます。例: `"65% center"`。
5. `pnpm dev`で1440px幅の表示を確認します。

| 用途           | ファイル              | 表示比率の目安 | 推奨横幅     |
| -------------- | --------------------- | -------------- | ------------ |
| Hero           | hero-architecture.jpg | 1440:590       | 1920〜2400px |
| About          | about-workspace.jpg   | 1.58:1         | 1100px以上   |
| Branding       | work-branding.jpg     | 2.72:1         | 900px以上    |
| Web Design     | work-web.jpg          | 2.72:1         | 900px以上    |
| Product Design | work-product.jpg      | 2.72:1         | 900px以上    |
| Contact        | contact-mountains.jpg | 3.07:1         | 1300px以上   |

画像枠側で`aspect-ratio`と`object-fit: cover`を設定しているため、元画像の縦横比が変わっても枠のサイズを維持します。Heroは固定高を基準にしています。画像表示には`next/image`の`fill`・`sizes`を使用し、Heroを優先読み込み、それ以外を遅延読み込みします。About / Contactと該当実績はCSSでモノクロ化しています。

GitHub Pages向けの静的出力に対応しています。`next/image`の枠・遅延読み込みは使用しますが、サーバー側の画像変換は無効です。現在の画像をそのまま配信するため、差し替え画像は事前に適切なサイズ・容量に圧縮してください。

## データ・リンクの編集

- 制作実績: `src/data/portfolio.ts` の `works` に追加・編集します。`Work`型で管理します。
- スキル: 同ファイルの`skills`を編集します。
- お問い合わせ: `destinations.email`に実在するメールアドレスを設定するとCONTACTが`mailto:`リンクになります。
- SNS: `destinations.x` / `destinations.instagram`にプロフィールURLを設定します。
- 未実装の詳細ページ: ABOUT ME / VIEW ALLは`FutureLink`で無効表示しています。ページ完成後に`href`を渡してください。
- 実績詳細: 各実績の`href`を設定するとタイトルがリンクになります。

未設定リンクは架空のURLへ遷移せず、`aria-disabled`で準備中を伝えます。ナビゲーションは同一ページのセクションへ移動します。

## アニメーション

`src/lib/animation.ts`でローディングの待機時間・フェード時間、スクロール演出の移動量・時間・イージング・開始位置を変更できます。

- ロゴのローディングは初回マウント時に実行し、同じタブのセッション内では再実行しません。
- セクションの見出し・本文と画像を控えめにフェードインします。
- `gsap.matchMedia()`で`prefers-reduced-motion`に対応します。
- effectの終了時に`revert()`してTween・ScrollTrigger・インラインスタイルをクリーンアップします。
- CSSのホバー演出は実績画像と有効なリンクの矢印に限定しています。
- JavaScript無効時も本文・画像が表示され、ローディングで覆われません。

## GitHub Pagesへ公開

Pages用の設定と自動公開ワークフローを用意しています。初回はGitHub上でリポジトリをPublicに変更し、PagesのSourceをGitHub Actionsにしてください。操作手順は [docs/github-pages.md](docs/github-pages.md) を参照してください。

## GitHubへアップロード

Gitは初期化済みです。GitHub上に空のリポジトリを作り、URLを置き換えて実行します。

```sh
git status
git add .
git commit -m "Build Y.URATA portfolio homepage"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPOSITORY.git
git push -u origin main
```

現在のリポジトリは`origin`登録済みで、既定ブランチは`master`です。上記コマンドは新規リポジトリ向けの参考手順です。現在のプロジェクトではGitHub DesktopのCommitとPush originで更新してください。`.next`、`node_modules`、`out`、`.env`、検証スクリーンショットなどは除外済みです。`pnpm-lock.yaml`と`pnpm-workspace.yaml`は再現可能な依存管理のためにコミットしてください。

## 次に追加するもの

- 正式な画像素材・制作実績の内容・SNSと連絡先
- About詳細・Works一覧と詳細・Contactページ
- 実際の文面と画像に合わせた微調整
- モバイル専用カンプに基づく最終的なレスポンシブ調整
- 公開先・ドメイン決定後のOG画像、canonical URL、sitemap、運用設定

検証結果とカンプとの差異は [docs/verification.md](docs/verification.md) を参照してください。
