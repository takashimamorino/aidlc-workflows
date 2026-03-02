---
description: "Phase 5: Quality Gate - 品質関門（品質チェック → Go/No-Go 判断）"
---

# Phase 5: Quality Gate

プロダクションコードの品質・安全性・性能を横断的に検証し、リリース可能な状態を担保する。

## 前提条件

- `aidlc-docs/aidlc-state.md` を読み込み、Phase 4 が完了していることを確認する
- Phase 4 が未完了の場合は `/aidlc:construction` を案内して終了する
- プロダクションコードが動作する状態であること
- 全テストがパスしていること

## フェーズ開始時の成果物読み込み

以下の成果物を読み込む:

- `aidlc-docs/inception/requirements.md`（非機能要件の確認）
- `aidlc-docs/construction/architecture.md`（技術スタックの確認）
- `aidlc-docs/construction/data-model.md`（データモデルの確認）

---

## Step 1: Quality Check & Auto-Fix（品質チェック・自動修正）

> `aidlc-docs/aidlc-state.md` の Step 1 チェックボックスを確認する
>
> **このステップは `quality-checker` サブエージェントに委譲する。** 大量のツール呼び出しをコンテキストから分離するため、品質チェックの実行はサブエージェントが行う。

### サブエージェントへの委譲

`quality-checker` エージェントを起動し、以下を伝える:

- プロジェクトのルートディレクトリ
- `aidlc-docs/construction/architecture.md` のパス（技術スタック情報）
- 「品質チェックを実行し、`aidlc-docs/quality-gate/report.md` を生成してください」

サブエージェントの完了を待ち、結果を確認する。

### 完了条件

- 全テストが通っている
- 全品質チェックが実行された
- 自動修正可能な問題が修正された
- `aidlc-docs/quality-gate/report.md` が生成された（テスト結果を含む）
- `aidlc-docs/aidlc-state.md` の Step 1 チェックボックスを `[x]` にする

---

## Step 2: Approval Gate（Go/No-Go 判断）

> **承認ゲート**: 品質レポートを人間がレビューし、リリース可能かを判断する。

### 行動

1. **品質レポートの要約を提示する**
   - `aidlc-docs/quality-gate/report.md` の要点を提示する:
     - コード品質: Lint / 型チェック / カバレッジの結果
     - セキュリティ: 脆弱性・リスクの有無
     - パフォーマンス: 問題の有無
     - 自動修正した件数と残存する問題
   - 「品質レポートをご確認ください。Phase 6 に進めてよいですか？」と問う

2. **人間の判断を受ける**
   - **Go**: Phase 6 (Delivery) に進む
   - **No-Go（追加修正が必要）**: 指摘された問題を修正し、Step 1 を再実行する
   - **No-Go（実装の根本的な見直しが必要）**: Phase 4 (Construction) に戻る

### 記録

- `aidlc-docs/audit.md` に Go/No-Go 判断と理由を記録する

### 完了条件

- 人間が Go 判断を下した
- `aidlc-docs/aidlc-state.md` の Step 2 チェックボックスを `[x]` にする
- `aidlc-docs/aidlc-state.md` の `Current Phase` を `Phase 6 - Delivery` に更新する
