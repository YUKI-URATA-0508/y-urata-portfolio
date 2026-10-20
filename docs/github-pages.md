# GitHub Pages公開手順（初回のみ）

公開先: `https://yuki-urata-0508.github.io/y-urata-portfolio/`

このURLは公開成功後に閲覧できます。設定ファイルを用意しただけでは公開完了ではありません。

## 1. GitHub Desktopから変更を送る

今回のフォルダーを選び、変更をCommitしてから **Push origin** を押します。すでにCommit済みならPushだけで構いません。

## 2. リポジトリをPublicにする

ログインしている通常のブラウザーで、次を開きます。

https://github.com/YUKI-URATA-0508/y-urata-portfolio/settings

一番下の **Danger Zone → Change repository visibility → Change visibility → Change to public** を選択し、表示される確認に従います。確認画面によってはリポジトリ名の入力や再認証が必要です。Publicにするとコードと変更履歴を他の人が閲覧できます。

## 3. Pagesの公開方法を選ぶ

https://github.com/YUKI-URATA-0508/y-urata-portfolio/settings/pages

**Build and deployment → Source** を **GitHub Actions** にします。ブランチから直接公開する設定にはしません。

## 4. 自動公開を実行する

https://github.com/YUKI-URATA-0508/y-urata-portfolio/actions

左側の **Deploy portfolio to GitHub Pages** を選び、**Run workflow → Branch: master → Run workflow** を押します。初回push直後の実行がPages設定前に失敗していても、この操作で設定後に実行できます。

一覧の処理が緑のチェックになったら、公開先URLを開いて確認します。赤い×が付いた場合は、該当画面をこのチャットに送ってください。

## 次回以降

サイトを修正して **Commit → Push origin** すると、masterへのpushをきっかけに検証・ビルド・公開が自動実行されます。公開が完了するまで前の版が表示されます。

## ローカル開発と確認

```sh
pnpm dev
```

通常の開発では `http://localhost:3000` を開きます。

```sh
pnpm build
pnpm start
```

静的ファイルは`out`に生成されます。`pnpm start`は生成済みファイルのローカルプレビューです。

Pagesと同じサブディレクトリ構成をPowerShellで検証する場合:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/y-urata-portfolio'
pnpm build
pnpm start
```

`http://127.0.0.1:3000/y-urata-portfolio/`を開きます。通常の開発に戻す際は、同じターミナルで`Remove-Item Env:NEXT_PUBLIC_BASE_PATH`を実行してください。

GitHub Actionsではこの変数が自動設定されます。URL内の画像パスは`src/lib/paths.ts`で処理します。リポジトリ名の変更や独自ドメインの導入時は、公開URLとbasePathを見直してください。

## 公開の構成

- `.github/workflows/deploy-pages.yml`: 検証、静的ビルド、Pagesへの公開
- `next.config.ts`: 静的出力・basePath・画像最適化設定
- `public/.nojekyll`: `_next`などの静的資産をそのまま配信
- `scripts/serve.mjs`: ローカル静的プレビュー専用（公開には不要）

公開に必要な資格情報はGitHub Actionsの標準トークンとOIDCを使用します。個人のパスワードやAPIトークンをコード・Secretsへ追加する必要はありません。
