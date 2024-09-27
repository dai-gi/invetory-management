# 在庫管理アプリ - TypeScript

TypeScript を使ってコンソール上で動作する在庫管理アプリです。アイテムの追加、更新、削除、そしてアイテムのステータス管理を行うことができます。

<br>

## 機能

- アイテム追加: 名前と詳細情報を指定して、在庫にアイテムを追加します。
- アイテム削除: ID または名前を指定して、アイテムを削除します。
- アイテム更新: 既存のアイテムの名前または詳細情報を更新します。
- 新しいアイテムのステータス管理: 新しく追加するアイテムの状態（「taking」または「returned」）を管理します。
- 汎用的な配列管理: ジェネリクスを使用して、配列に動的にアイテムを追加します。

<br>

## 使用技術

- TypeScript
- Node.js

<br>

## 前提条件

このプロジェクトを実行するために、以下がインストールされている必要があります。

- Node.js（v22.7.0）
- Volta（v1.1.1）

<br>

## セットアップ手順

１．リポジトリをクローンします

```zsh
git clone https://github.com/dai-gi/invetory-management.git
```

<br>

２．プロジェクトのディレクトリに移動します

```zsh
cd inventory-management/
```

<br>

３．依存関係をインストールします

```zsh
npm install
```

<br>

４．TypeScript の設定ファイル tsconfig.json を生成します

```zsh
npx tsc --init
```

<br>

５．TypeScript のコードを実行します:

```zsh
npx ts-node app.ts
```

<br>

## 参考文献

[Qiita 記事](https://qiita.com/drafts/77215458d1fda9b2d3a4/edit)
