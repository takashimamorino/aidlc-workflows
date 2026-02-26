# Phase 2: Blueprint プレイブック

> 要件をもとに、プロダクトの画面構成・ユーザーフローをラフレベルで設計する

## 前提条件

- Phase 1 が完了していること（aidlc-docs/aidlc-state.md で確認）
- `aidlc-docs/inception/intent.md`, `aidlc-docs/inception/requirements.md`, `aidlc-docs/inception/user-stories.md` が存在すること

## フェーズ開始時の成果物読み込み

Phase 2 の各ステップに入る前に、以下の成果物を一括で読み込む:

- `aidlc-docs/inception/intent.md`
- `aidlc-docs/inception/requirements.md`
- `aidlc-docs/inception/user-stories.md`

---

## Step 1: UI Design（UI設計 — ラフレベル）

> **スコープ**: 画面一覧・画面遷移フロー・各画面の概要（何をする画面か）をラフレベルで定義する。
> レイアウト詳細・コンポーネント構成・表示データ・インタラクションは Phase 3 で確定する。

### AIの行動

1. **Phase 1 の成果物を読み込む**
   - intent.md、requirements.md、user-stories.md を読み込む
   - 機能要件・ユーザーフローを把握する

2. **ユーザーストーリーから画面を洗い出す**
   - user-stories.md を読み込み、必要な画面を特定する
   - 画面一覧を作成し、各画面の概要（目的・対応ユーザーストーリー）を記述する

3. **画面遷移フローを設計する**
   - 画面間の遷移を Mermaid で図示する
   - 主要なユーザーフローが自然に実現できるか確認する

4. **各画面の概要を記述する**
   - 各画面の目的と主な役割を簡潔に記述する
   - 画面に含まれる主要エリア（ヘッダー、入力、一覧など）を箇条書きで示す
   - ※ 詳細なレイアウト（ASCII ワイヤーフレーム）やインタラクション定義は Phase 3 で行う
   - 人間に確認: 「この画面構成でイメージと合っていますか？」

### 成果物の生成

- `aidlc-docs/blueprint/ui-design.md` を生成する
- テンプレート: `templates/blueprint/ui-design.md` を使用

### 記録

- `aidlc-docs/log.md` に対話サマリーを記録する

### 完了条件

- `aidlc-docs/blueprint/ui-design.md` が生成され、人間が確認した
- `aidlc-docs/aidlc-state.md` の Step 1 チェックボックスを `[x]` にする

---

## Step 2: Approval Gate（承認）

> **承認ゲート**: 中間ステップの「確認」と異なり、フェーズ全体の成果物を判断する。承認されれば次フェーズへ進む。

### AIの行動

1. **Blueprint の成果物を要約して提示する**
   - UI設計の要点をまとめて提示する:
     - 画面数と主要フロー
     - 各画面の役割
   - 「以上が Phase 2 の成果物です。承認いただけますか？」と問う

2. **人間の判断を受ける**
   - **承認**: Phase 3 に進む
   - **フィードバックあり**: 指摘された箇所を修正し、再度承認を求める

### 記録

- `aidlc-docs/log.md` に承認結果を記録する

### 完了条件

- 人間が承認した
- `aidlc-docs/aidlc-state.md` の Step 2 チェックボックスを `[x]` にする
- `aidlc-docs/aidlc-state.md` の `Current Phase` を `Phase 3 - Prototype` に更新する
