---
description: "AI-DLC プロジェクトのセットアップ"
---

# AI-DLC Setup

プロジェクトに AI-DLC のドキュメント構造をセットアップする。

## 実行手順

### 1. 既存チェック

`aidlc-docs/` ディレクトリが既に存在するか確認する。

- **存在しない場合**: そのまま Step 2 へ進む
- **存在する場合**: ユーザーに確認する
  - 「`aidlc-docs/` が既に存在します。上書きしますか？」
  - 承認されたら Step 2 へ。拒否されたら中断する

### 2. テンプレートをコピー

`@docs/templates/aidlc-docs/` の全ファイルをプロジェクトの `aidlc-docs/` にコピーする。

以下の構造が作成される:

```
aidlc-docs/
├── aidlc-state.md          # 進捗管理
├── audit.md                # 監査ログ
├── inception/
│   ├── intent.md           # 意図・課題定義
│   ├── requirements.md     # 要件定義
│   └── user-stories.md     # ユーザーストーリー
├── blueprint/
│   └── ui-design.md        # UI設計（ラフ）
├── prototype/
│   └── design.md           # プロトタイプ設計
├── construction/
│   ├── architecture.md     # アーキテクチャ設計
│   └── data-model.md       # データモデル設計
└── quality-gate/
    └── report.md           # 品質レポート
```

### 3. 完了報告

セットアップ完了を報告し、以下を案内する:

- `/aidlc:inception` で Phase 1: Inception（構想フェーズ）を開始してください
- `/aidlc:status` で進捗状況を確認できます
