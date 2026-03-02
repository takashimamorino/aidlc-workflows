---
description: "AI-DLC の進捗状況を確認"
---

# AI-DLC Status

現在の AI-DLC 進捗状況を表示する。

## 実行手順

### 1. 状態ファイルの読み込み

`aidlc-docs/aidlc-state.md` を読み込む。

- **ファイルが存在しない場合**: 「AI-DLC がセットアップされていません。`/aidlc:setup` を実行してください。」と案内して終了する

### 2. 進捗の表示

以下の情報を整理して表示する:

- **Current Phase**: 現在のフェーズ名
- **完了済みステップ**: チェック済み `[x]` のステップ一覧
- **次のアクション**: 次に実行すべきステップの説明

### 3. コマンドの提案

現在のフェーズに応じて、実行すべきコマンドを提案する:

| Current Phase | 提案するコマンド |
|---|---|
| Phase 1 - Inception | `/aidlc:inception` |
| Phase 2 - Blueprint | `/aidlc:blueprint` |
| Phase 3 - Prototype | `/aidlc:prototype` |
| Phase 4 - Construction | `/aidlc:construction` |
| Phase 5 - Quality Gate | `/aidlc:quality-gate` |
| Phase 6 - Delivery | （未実装） |
